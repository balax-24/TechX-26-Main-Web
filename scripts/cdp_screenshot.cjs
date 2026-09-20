const { spawn } = require('child_process');
const fs = require('fs');

const CHROME_PATH = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";

async function runScreenshot(url, scrollSelector, outputPath, width = 1280, height = 900) {
  const port = 9222;
  const userDataDir = `C:\\Users\\Balaharish Saravanan\\.gemini\\antigravity-ide\\brain\\f443d8f2-73c9-4d17-9ffd-9805470593fc\\scratch\\chrome_cdp_${Date.now()}`;
  fs.mkdirSync(userDataDir, { recursive: true });

  const chromeProc = spawn(CHROME_PATH, [
    '--headless=new',
    '--disable-gpu',
    `--remote-debugging-port=${port}`,
    `--user-data-dir=${userDataDir}`,
    `--window-size=${width},${height}`,
    'about:blank'
  ]);

  await new Promise((resolve) => setTimeout(resolve, 1500));

  try {
    const listRes = await fetch(`http://127.0.0.1:${port}/json/list`);
    const pages = await listRes.json();
    const wsUrl = pages[0].webSocketDebuggerUrl;

    const ws = new WebSocket(wsUrl);
    await new Promise((res) => ws.onopen = res);

    let id = 1;
    function send(method, params = {}) {
      return new Promise((resolve, reject) => {
        const msgId = id++;
        const handler = (evt) => {
          const data = JSON.parse(evt.data);
          if (data.id === msgId) {
            ws.removeEventListener('message', handler);
            if (data.error) reject(data.error);
            else resolve(data.result);
          }
        };
        ws.addEventListener('message', handler);
        ws.send(JSON.stringify({ id: msgId, method, params }));
      });
    }

    await send('Page.enable');
    await send('DOM.enable');
    await send('Page.navigate', { url });
    await new Promise((r) => setTimeout(r, 2000));

    if (scrollSelector) {
      await send('Runtime.evaluate', {
        expression: `
          (() => {
            const el = document.querySelector('${scrollSelector}');
            if (el) {
              el.scrollIntoView({ behavior: 'instant', block: 'center' });
            }
          })()
        `
      });
    }

    // Give time for intersection observer animations to finish
    await new Promise((r) => setTimeout(r, 1500));

    const screenshot = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(outputPath, Buffer.from(screenshot.data, 'base64'));
    console.log(`Saved screenshot to: ${outputPath}`);

    ws.close();
  } finally {
    chromeProc.kill();
    try { fs.rmSync(userDataDir, { recursive: true, force: true }); } catch (e) {}
  }
}

const [url, scrollSelector, outputPath, widthStr, heightStr] = process.argv.slice(2);
const w = parseInt(widthStr || '1280', 10);
const h = parseInt(heightStr || '900', 10);

runScreenshot(url, scrollSelector, outputPath, w, h).catch(err => {
  console.error("Error:", err);
  process.exit(1);
});