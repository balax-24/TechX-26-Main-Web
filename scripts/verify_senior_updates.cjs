const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const SCREENSHOT_DIR = "C:\\Users\\Balaharish Saravanan\\.gemini\\antigravity-ide\\brain\\f443d8f2-73c9-4d17-9ffd-9805470593fc\\screenshots";
if (!fs.existsSync(SCREENSHOT_DIR)) {
  fs.mkdirSync(SCREENSHOT_DIR, { recursive: true });
}

async function runVerification() {
  console.log("==================================================================");
  console.log("TECHX'26 — SENIOR FEEDBACK UPDATE BROWSER DOM & VISUAL VERIFICATION");
  console.log("==================================================================");

  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  const context = await browser.newContext({
    viewport: { width: 1280, height: 900 },
    reducedMotion: 'reduce' // reveals all <Reveal> elements immediately
  });
  const page = await context.newPage();

  let passCount = 0;
  let failCount = 0;

  function assert(condition, message) {
    if (condition) {
      console.log(`[PASS] ${message}`);
      passCount++;
    } else {
      console.error(`[FAIL] ${message}`);
      failCount++;
    }
  }

  // Helper to load page and wait for LoadingScreen
  async function loadPage(url) {
    await page.goto(url);
    await page.waitForTimeout(2200); // Allow branded intro loader to complete
  }

  // ============================================================
  // 1. VERIFY HOMEPAGE COUNTDOWN DESCRIPTION & "SYMPOSIUM" CLEANUP
  // ============================================================
  console.log("\n--- 1. VERIFYING HOMEPAGE COUNTDOWN DESCRIPTION ---");
  await loadPage('http://localhost:5173/');

  const leadStatement = await page.locator('.editorial-lead-statement').textContent();
  console.log("Found Lead Statement:", leadStatement.trim());

  const expectedLead = "TECHX MADRAS brings together competitive engineering, hands-on technology experiences, and IEEE Computer Society engagement across two days in Chennai.";
  assert(leadStatement.trim() === expectedLead, `Homepage countdown description matches required senior text exactly.`);
  assert(!leadStatement.toLowerCase().includes("symposium"), `Homepage countdown description has ZERO occurrences of "symposium".`);

  // Check full homepage text for "symposium"
  const homeFullText = await page.locator('body').textContent();
  assert(!homeFullText.toLowerCase().includes("symposium"), `Entire homepage body has ZERO occurrences of "symposium".`);

  // Verify CS SYP 80 Years Logo in Home award card
  const homeSypLogo = page.locator('.edition-syp-logo');
  const homeSypCount = await homeSypLogo.count();
  assert(homeSypCount === 1, `CS SYP 80 Years logo present in Home award card (count: ${homeSypCount})`);
  
  const homeSypSrc = await homeSypLogo.getAttribute('src');
  assert(homeSypSrc && (homeSypSrc.includes('CS%20SYP%2080yrs%20White') || homeSypSrc.includes('CS SYP 80yrs White')), `Home award logo uses official White asset (got: ${homeSypSrc})`);

  // Verify TechX main logo intact in Navbar and Footer
  const navLogo = page.locator('.navbar-brand-logo');
  assert(await navLogo.count() > 0, `Main TechX logo present in Navbar.`);
  const footerLogo = page.locator('.footer-logo-emblem');
  assert(await footerLogo.count() > 0, `Main TechX logo present in Footer.`);

  // Verify CS SYP Logo in Footer
  const footerSypLogo = page.locator('.footer-cs-syp-logo');
  assert(await footerSypLogo.count() === 1, `CS SYP 80 Years logo present in Footer organizer block.`);

  // Screenshot Home Journey & Award section
  const journeyBlock = page.locator('.journey-summary-block');
  if (await journeyBlock.count() > 0) {
    await journeyBlock.scrollIntoViewIfNeeded();
    await page.waitForTimeout(300);
    await journeyBlock.screenshot({ path: path.join(SCREENSHOT_DIR, "senior_home_award_syp.png") });
    console.log("Screenshot saved: senior_home_award_syp.png");
  }

  // ============================================================
  // 2. VERIFY /about ("SYMPOSIUM" CLEANUP & CS SYP LOGO)
  // ============================================================
  console.log("\n--- 2. VERIFYING /about PAGE ---");
  await loadPage('http://localhost:5173/about');

  const aboutFullText = await page.locator('body').textContent();
  assert(!aboutFullText.toLowerCase().includes("symposium"), `Entire /about page body has ZERO occurrences of "symposium".`);

  const aboutSypLogo = page.locator('.chapter-syp-logo-img');
  assert(await aboutSypLogo.count() === 1, `Official CS SYP 80 Years logo present in Chapter Charter banner.`);
  const aboutSypSrc = await aboutSypLogo.getAttribute('src');
  assert(aboutSypSrc && (aboutSypSrc.includes('CS%20SYP%2080yrs%20White') || aboutSypSrc.includes('CS SYP 80yrs White')), `About Chapter logo uses official White asset.`);

  const chapterBanner = page.locator('.chapter-banner-card');
  if (await chapterBanner.count() > 0) {
    await chapterBanner.scrollIntoViewIfNeeded();
    await page.waitForTimeout(300);
    await chapterBanner.screenshot({ path: path.join(SCREENSHOT_DIR, "senior_about_chapter_syp.png") });
    console.log("Screenshot saved: senior_about_chapter_syp.png");
  }

  // ============================================================
  // 3. VERIFY /partners (SOCIETY CHARTER PANEL)
  // ============================================================
  console.log("\n--- 3. VERIFYING /partners PAGE ---");
  await loadPage('http://localhost:5173/partners');

  const partnersSypLogo = page.locator('.society-syp-logo');
  assert(await partnersSypLogo.count() === 1, `Official CS SYP 80 Years logo present in Partners Society Charter panel.`);

  const partnersPanel = page.locator('.society-charter-panel');
  if (await partnersPanel.count() > 0) {
    await partnersPanel.scrollIntoViewIfNeeded();
    await page.waitForTimeout(300);
    await partnersPanel.screenshot({ path: path.join(SCREENSHOT_DIR, "senior_partners_syp.png") });
    console.log("Screenshot saved: senior_partners_syp.png");
  }

  // ============================================================
  // 4. VERIFY /singlescroll ("SYMPOSIUM" CLEANUP & CS SYP LOGO)
  // ============================================================
  console.log("\n--- 4. VERIFYING /singlescroll PAGE ---");
  await loadPage('http://localhost:5173/singlescroll');

  const ssLead = await page.locator('.ss-lead-statement').textContent();
  assert(ssLead.trim() === expectedLead, `SingleScroll lead statement matches required senior text.`);
  assert(!ssLead.toLowerCase().includes("symposium"), `SingleScroll lead has ZERO occurrences of "symposium".`);

  const ssSypLogo = page.locator('.ss-syp-logo');
  assert(await ssSypLogo.count() === 1, `CS SYP 80 Years logo present in SingleScroll journey card.`);

  // Screenshot SingleScroll journey
  const ssJourneyCard = page.locator('.ss-journey-card').first();
  if (await ssJourneyCard.count() > 0) {
    await ssJourneyCard.scrollIntoViewIfNeeded();
    await page.waitForTimeout(300);
    await ssJourneyCard.screenshot({ path: path.join(SCREENSHOT_DIR, "senior_singlescroll_syp.png") });
    console.log("Screenshot saved: senior_singlescroll_syp.png");
  }

  // ============================================================
  // 5. VERIFY CONTACT / ENQUIRY FORM FLOW
  // ============================================================
  console.log("\n--- 5. VERIFYING /contact ENQUIRY FORM ---");
  await loadPage('http://localhost:5173/contact');

  // Verify form inputs exist
  const nameInput = page.locator('#user-name');
  const emailInput = page.locator('#user-email');
  const instInput = page.locator('#user-inst');
  const topicSelect = page.locator('#user-topic');
  const messageInput = page.locator('#user-message');
  const submitBtn = page.locator('.submit-dispatch-btn');

  assert(await nameInput.count() === 1, `Name input field present.`);
  assert(await emailInput.count() === 1, `Email input field present.`);
  assert(await instInput.count() === 1, `Institution input field present.`);
  assert(await topicSelect.count() === 1, `Topic selector present.`);
  assert(await messageInput.count() === 1, `Message textarea present.`);
  assert(await submitBtn.count() === 1, `Submit button present.`);

  // Take screenshot of empty form
  const formCard = page.locator('.inquiry-card');
  await formCard.scrollIntoViewIfNeeded();
  await page.waitForTimeout(300);
  await formCard.screenshot({ path: path.join(SCREENSHOT_DIR, "senior_contact_form_empty.png") });
  console.log("Screenshot saved: senior_contact_form_empty.png");

  // Fill in test data
  await nameInput.fill("Senior Reviewer");
  await emailInput.fill("reviewer@institution.edu");
  await instInput.fill("Sri Sai Ram Institute of Technology");
  await topicSelect.selectOption("General Event Inquiry");
  await messageInput.fill("Testing direct enquiry transmission to official TechX email desk.");

  // Submit form
  await submitBtn.click();
  await page.waitForTimeout(600);

  // Check confirmation view
  const successView = page.locator('.submission-success-view');
  assert(await successView.count() === 1, `Submission confirmation view is visible.`);

  const successHeading = await successView.locator('h4').textContent();
  assert(successHeading.includes("TRANSMIT ENQUIRY TO TECHX"), `Heading is transparent: "${successHeading.trim()}"`);

  // Check email client link
  const emailClientBtn = successView.locator('a.btn-primary');
  assert(await emailClientBtn.count() === 1, `Direct email client dispatch link present.`);
  const href = await emailClientBtn.getAttribute('href');
  console.log("Generated Mailto Link:", href);
  assert(href.startsWith("mailto:techxmadras2k26@gmail.com"), `Mailto link correctly addresses techxmadras2k26@gmail.com.`);
  assert(href.includes("Senior%20Reviewer") || href.includes("Senior+Reviewer"), `Mailto link pre-fills sender name.`);
  assert(href.includes("General%20Event%20Inquiry") || href.includes("General+Event+Inquiry"), `Mailto link pre-fills topic.`);

  // Verify copy button exists
  const copyBtn = successView.locator('button:has-text("COPY INQUIRY TEXT")');
  assert(await copyBtn.count() === 1, `Copy inquiry text button present.`);

  await successView.screenshot({ path: path.join(SCREENSHOT_DIR, "senior_contact_form_dispatched.png") });
  console.log("Screenshot saved: senior_contact_form_dispatched.png");

  // ============================================================
  // 6. VERIFY /register (NO TEAM QUESTION WAS ADDED)
  // ============================================================
  console.log("\n--- 6. VERIFYING /register (NO TEAM REGISTRATION QUESTIONS) ---");
  await loadPage('http://localhost:5173/register');

  const regText = await page.locator('body').textContent();
  assert(!regText.includes("Are you registering as a team?"), `Register page does NOT have "Are you registering as a team?"`);
  assert(!regText.includes("Team Members"), `Register page does NOT have "Team Members"`);
  assert(!regText.includes("Team Name"), `Register page does NOT have "Team Name"`);

  // Verify KKonfHub provider notice
  const paymentNotice = await page.locator('.register-footnote-box').textContent();
  assert(paymentNotice.includes("KKonfHub"), `Payment notice references KKonfHub.`);
  assert(!paymentNotice.toLowerCase().includes("razorpay"), `Payment notice has 0 Razorpay mentions.`);

  await browser.close();

  console.log("\n==================================================================");
  console.log(`ALL SENIOR UPDATE TESTS: ${passCount} PASSED, ${failCount} FAILED`);
  console.log("==================================================================");

  if (failCount > 0) {
    process.exit(1);
  }
}

runVerification().catch(err => {
  console.error("Verification failed:", err);
  process.exit(1);
});
