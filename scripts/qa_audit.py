import asyncio
import os
import sys
from playwright.async_api import async_playwright

BASE_URL = "http://127.0.0.1:4173"
SCREENSHOT_DIR = "/home/buzzard/.gemini/antigravity-ide/brain/f443d8f2-73c9-4d17-9ffd-9805470593fc/qa_matrix"
os.makedirs(SCREENSHOT_DIR, exist_ok=True)

VIEWPORTS = [
    # Mobile
    ("mobile_320", 320, 568),
    ("mobile_375", 375, 667),
    ("mobile_390", 390, 844),
    ("mobile_414", 414, 896),
    # Tablet
    ("tablet_768", 768, 1024),
    ("tablet_820", 820, 1180),
    # Laptop
    ("laptop_1024", 1024, 768),
    ("laptop_1280", 1280, 720),
    ("laptop_1366", 1366, 768),
    # Desktop
    ("desktop_1440", 1440, 900),
    ("desktop_1536", 1536, 864),
    ("desktop_1920", 1920, 1080),
]

ROUTES = [
    "/",
    "/events",
    "/events/build-break-defend",
    "/events/cipherx",
    "/events/edge-ai-tinyml",
    "/events/idea-alchemy",
    "/events/codenomics",
    "/events/nano-mentoring",
    "/events/ieee-cs-benefits",
    "/schedule",
    "/speakers",
    "/partners",
    "/about",
    "/venue",
    "/contact",
    "/invalid-route-404-test"
]

MATRIX_CAPTURES = [
    ("home", "/", [("320x568", 320, 568), ("390x844", 390, 844), ("768x1024", 768, 1024), ("1440x900", 1440, 900), ("1920x1080", 1920, 1080)]),
    ("events", "/events", [("390x844", 390, 844), ("768x1024", 768, 1024), ("1440x900", 1440, 900)]),
    ("about", "/about", [("390x844", 390, 844), ("768x1024", 768, 1024), ("1440x900", 1440, 900)]),
    ("venue", "/venue", [("390x844", 390, 844), ("768x1024", 768, 1024), ("1440x900", 1440, 900)]),
    ("partners", "/partners", [("390x844", 390, 844), ("1440x900", 1440, 900)]),
    ("schedule", "/schedule", [("390x844", 390, 844), ("1440x900", 1440, 900)]),
    ("speakers", "/speakers", [("390x844", 390, 844), ("1440x900", 1440, 900)]),
    ("contact", "/contact", [("390x844", 390, 844), ("1440x900", 1440, 900)]),
    ("404", "/invalid-route-404-test", [("1440x900", 1440, 900)])
]

async def run_audit():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        
        console_errors = []
        network_failures = []
        overflow_issues = []
        broken_images = []

        print("=== 1. AUDITING ALL ROUTES & VIEWPORTS FOR OVERFLOW & ERRORS ===")
        context = await browser.new_context(reduced_motion="reduce")
        page = await context.new_page()

        def handle_console(msg):
            if msg.type in ['error']:
                console_errors.append(f"Console error: {msg.text}")

        page.on("console", handle_console)
        page.on("pageerror", lambda err: console_errors.append(f"Uncaught exception: {err}"))
        page.on("requestfailed", lambda req: network_failures.append(f"Network failure: {req.url} ({req.failure})"))

        for path in ROUTES:
            url = f"{BASE_URL}{path}"
            # Check key viewports for each route: 320, 390, 768, 1024, 1440, 1920
            check_vps = [
                ("320x568", 320, 568),
                ("390x844", 390, 844),
                ("768x1024", 768, 1024),
                ("1024x768", 1024, 768),
                ("1440x900", 1440, 900),
                ("1920x1080", 1920, 1080)
            ]
            for vp_name, w, h in check_vps:
                await page.set_viewport_size({"width": w, "height": h})
                try:
                    await page.goto(url, wait_until="networkidle")
                    # Wait for loading screen to complete with reduced motion (300ms + margin)
                    await page.wait_for_timeout(450)

                    # Check for broken images
                    img_check = await page.evaluate("""() => {
                        const imgs = Array.from(document.querySelectorAll('img'));
                        const broken = imgs.filter(img => img.naturalWidth === 0 && img.src && !img.src.startsWith('data:'));
                        return broken.map(img => img.src || img.alt);
                    }""")
                    if img_check:
                        for b in img_check:
                            broken_images.append(f"{path} @ {vp_name}: Broken image: {b}")

                    # Check horizontal overflow
                    overflow_data = await page.evaluate("""() => {
                        const docEl = document.documentElement;
                        const body = document.body;
                        const winWidth = window.innerWidth;
                        const scrollW = Math.max(docEl.scrollWidth, body.scrollWidth);
                        const isOverflow = scrollW > winWidth;
                        
                        let offending = [];
                        if (isOverflow) {
                            const all = document.querySelectorAll('*');
                            all.forEach(el => {
                                const rect = el.getBoundingClientRect();
                                if (rect.right > winWidth + 1) {
                                    offending.push({
                                        tag: el.tagName,
                                        className: el.className,
                                        id: el.id,
                                        right: rect.right,
                                        winWidth: winWidth,
                                        diff: rect.right - winWidth
                                    });
                                }
                            });
                        }
                        return { isOverflow, scrollW, winWidth, offending: offending.slice(0, 5) };
                    }""")

                    if overflow_data["isOverflow"]:
                        overflow_issues.append({
                            "path": path,
                            "viewport": vp_name,
                            "scrollW": overflow_data["scrollW"],
                            "winWidth": overflow_data["winWidth"],
                            "offending": overflow_data["offending"]
                        })
                        print(f"OVERFLOW DETECTED: {path} @ {vp_name}: scrollW={overflow_data['scrollW']} > {overflow_data['winWidth']}")
                except Exception as e:
                    console_errors.append(f"Navigation error on {path} @ {vp_name}: {str(e)}")

        print("\n=== 2. MOBILE NAVIGATION AUDIT ===")
        # Test mobile nav on 390x844
        await page.set_viewport_size({"width": 390, "height": 844})
        await page.goto(f"{BASE_URL}/", wait_until="networkidle")
        await page.wait_for_timeout(2000)

        # Look for mobile toggle button
        menu_btn = page.locator(".mobile-toggle-btn")
        is_menu_visible = await menu_btn.is_visible()
        print(f"Mobile menu button visible: {is_menu_visible}")
        if is_menu_visible:
            await menu_btn.click()
            await page.wait_for_timeout(400)
            overlay_visible = await page.locator(".mobile-nav-overlay").is_visible()
            print(f"Mobile nav overlay open: {overlay_visible}")
            
            # Click Schedule link
            schedule_link = page.locator(".mobile-nav-list a:has-text('SCHEDULE')")
            if await schedule_link.is_visible():
                await schedule_link.click()
                await page.wait_for_timeout(800)
                curr_url = page.url
                print(f"Navigated to: {curr_url}")
                overlay_closed = not (await page.locator(".mobile-nav-overlay").is_visible())
                print(f"Mobile nav overlay closed after click: {overlay_closed}")

        print("\n=== 3. REGISTRATION MODAL AUDIT ===")
        # Test modal at 390x844 and 1440x900
        for vp_name, w, h in [("390x844", 390, 844), ("1440x900", 1440, 900)]:
            await page.set_viewport_size({"width": w, "height": h})
            await page.goto(f"{BASE_URL}/", wait_until="networkidle")
            await page.wait_for_timeout(450)
            
            reg_btn = page.locator(".hero-cta-btn:has-text('REGISTER NOW')")
            if await reg_btn.is_visible():
                await reg_btn.click()
                await page.wait_for_timeout(400)
                modal_visible = await page.locator(".modal-content").is_visible()
                print(f"Modal opened @ {vp_name}: {modal_visible}")
                
                # Check modal width vs viewport width
                modal_width = await page.evaluate("""() => {
                    const modal = document.querySelector('.modal-content');
                    if (!modal) return null;
                    const rect = modal.getBoundingClientRect();
                    return { width: rect.width, right: rect.right, winWidth: window.innerWidth };
                }""")
                print(f"Modal dimensions @ {vp_name}: {modal_width}")

                # Capture modal screenshot
                modal_shot = f"{SCREENSHOT_DIR}/modal_{vp_name}.png"
                await page.screenshot(path=modal_shot)
                print(f"Saved modal screenshot: {modal_shot}")

                # Close modal
                close_btn = page.locator(".modal-close-btn")
                await close_btn.click()
                await page.wait_for_timeout(300)

        print("\n=== 4. GENERATING AUTOMATED SCREENSHOT MATRIX ===")
        for page_name, route, vps in MATRIX_CAPTURES:
            url = f"{BASE_URL}{route}"
            for vp_label, w, h in vps:
                await page.set_viewport_size({"width": w, "height": h})
                await page.goto(url, wait_until="networkidle")
                await page.wait_for_timeout(450)
                out_path = f"{SCREENSHOT_DIR}/{page_name}_{vp_label}.png"
                await page.screenshot(path=out_path)
                print(f"Captured: {page_name} @ {vp_label}")

        await browser.close()

        print("\n================ AUDIT SUMMARY ================")
        print(f"Console Errors: {len(console_errors)}")
        for err in console_errors:
            print(f"  - {err}")
        print(f"Broken Images: {len(broken_images)}")
        for img in broken_images:
            print(f"  - {img}")
        print(f"Network Failures: {len(network_failures)}")
        for nf in network_failures:
            print(f"  - {nf}")
        print(f"Horizontal Overflow Issues: {len(overflow_issues)}")
        for o in overflow_issues:
            print(f"  - {o['path']} @ {o['viewport']}: scrollW={o['scrollW']}, winWidth={o['winWidth']}")
            for off in o['offending']:
                print(f"      Tag: {off['tag']}, Class: {off['className']}, Diff: {off['diff']}px")

if __name__ == "__main__":
    asyncio.run(run_audit())
