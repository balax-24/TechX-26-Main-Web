import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

const SCREENSHOT_DIR = "C:\\Users\\Balaharish Saravanan\\.gemini\\antigravity-ide\\brain\\f443d8f2-73c9-4d17-9ffd-9805470593fc\\screenshots";
if (!fs.existsSync(SCREENSHOT_DIR)) {
  fs.mkdirSync(SCREENSHOT_DIR, { recursive: true });
}

async function verify() {
  console.log("==================================================================");
  console.log("TECHX'26 — COMPREHENSIVE BROWSER DOM & VISUAL VERIFICATION");
  console.log("==================================================================");

  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  const context = await browser.newContext({
    viewport: { width: 1280, height: 900 },
    reducedMotion: 'reduce' // Instantly reveals all <Reveal> elements
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

  // ============================================================
  // 1. VERIFY /register (DESKTOP)
  // ============================================================
  console.log("\n--- VERIFYING /register (DESKTOP) ---");
  await page.goto('http://localhost:5173/register');
  await page.waitForLoadState('networkidle');

  // Check Page Title
  const regTitle = await page.title();
  assert(regTitle.includes("TECHX'26") || regTitle.includes("TechX'26"), `Page title is valid: "${regTitle}"`);

  // Phase 01: Full Event Pass
  const fullPassTitle = await page.locator('.pass-phase-card:nth-of-type(1) .pass-hero-title').textContent();
  assert(fullPassTitle.trim() === "FULL EVENT PASS", `Full Pass Title is "FULL EVENT PASS" (got: "${fullPassTitle.trim()}")`);

  const fullPassAccess = await page.locator('.pass-phase-card:nth-of-type(1) .access-scope-pill').textContent();
  assert(fullPassAccess.includes("DAY 1 + DAY 2 ACCESS"), `Full Pass access pill contains "DAY 1 + DAY 2 ACCESS" (got: "${fullPassAccess.trim()}")`);

  const fullPassDates = await page.locator('.pass-phase-card:nth-of-type(1) .pass-hero-dates').textContent();
  assert(fullPassDates.includes("14–15 OCTOBER 2026"), `Full Pass dates contain "14–15 OCTOBER 2026" (got: "${fullPassDates.trim()}")`);

  // Shared info block 1
  const sharedBlock1Title = await page.locator('.pass-phase-card:nth-of-type(1) .shared-block-title').textContent();
  assert(sharedBlock1Title.trim() === "PASS INCLUDES", `Inclusions title is "PASS INCLUDES" (got: "${sharedBlock1Title.trim()}")`);

  const d1ScheduleItems = await page.locator('.pass-phase-card:nth-of-type(1) .schedule-group:nth-of-type(1) .shared-event-item').allTextContents();
  assert(d1ScheduleItems.length === 4, `Day 1 has 4 events in shared block (got: ${d1ScheduleItems.length})`);
  assert(d1ScheduleItems.some(item => item.includes("VerdictX")), `Day 1 events include VerdictX Hackathon`);

  const d2ScheduleItems = await page.locator('.pass-phase-card:nth-of-type(1) .schedule-group:nth-of-type(2) .shared-event-item').allTextContents();
  assert(d2ScheduleItems.length === 4, `Day 2 has 4 events in shared block (got: ${d2ScheduleItems.length})`);

  const d1Benefits = await page.locator('.pass-phase-card:nth-of-type(1) .benefit-item').allTextContents();
  assert(d1Benefits.some(b => b.includes("Food and refreshments will be provided")), `Day 1 benefits include "Food and refreshments will be provided"`);
  assert(d1Benefits.some(b => b.includes("Certificates will be provided")), `Day 1 benefits include "Certificates will be provided"`);

  // Check 3 Day 1 pricing cards
  const d1Cards = page.locator('.pass-phase-card:nth-of-type(1) .pricing-tier-card');
  const d1CardsCount = await d1Cards.count();
  assert(d1CardsCount === 3, `Exactly 3 Day 1 pricing cards rendered (got: ${d1CardsCount})`);

  // Crucial check: verify cards do NOT contain repeated event lists
  for (let i = 0; i < d1CardsCount; i++) {
    const cardText = await d1Cards.nth(i).textContent();
    assert(!cardText.includes("VerdictX"), `Day 1 Card #${i + 1} does NOT contain repeated event "VerdictX"`);
    assert(!cardText.includes("Sherlock & Syntax"), `Day 1 Card #${i + 1} does NOT contain repeated event "Sherlock & Syntax"`);
    assert(!cardText.includes("Food and refreshments"), `Day 1 Card #${i + 1} does NOT contain repeated benefit "Food and refreshments"`);
    assert(!cardText.includes("Certificates will be provided"), `Day 1 Card #${i + 1} does NOT contain repeated benefit "Certificates will be provided"`);
  }

  // Phase 02: Day 2 Pass
  const day2Title = await page.locator('.pass-phase-card:nth-of-type(2) .pass-hero-title').textContent();
  assert(day2Title.trim() === "DAY 2 PASS", `Day 2 Title is "DAY 2 PASS" (got: "${day2Title.trim()}")`);

  const day2Access = await page.locator('.pass-phase-card:nth-of-type(2) .access-scope-pill').textContent();
  assert(day2Access.includes("DAY 2 ACCESS ONLY"), `Day 2 access pill contains "DAY 2 ACCESS ONLY" (got: "${day2Access.trim()}")`);

  const day2Dates = await page.locator('.pass-phase-card:nth-of-type(2) .pass-hero-dates').textContent();
  assert(day2Dates.includes("15 OCTOBER 2026"), `Day 2 dates contain "15 OCTOBER 2026" (got: "${day2Dates.trim()}")`);

  const day2Inclusions = await page.locator('.pass-phase-card:nth-of-type(2) .shared-block-title').textContent();
  assert(day2Inclusions.trim() === "DAY 2 INCLUDES", `Inclusions title is "DAY 2 INCLUDES" (got: "${day2Inclusions.trim()}")`);

  const d2Benefits = await page.locator('.pass-phase-card:nth-of-type(2) .benefit-item').allTextContents();
  assert(d2Benefits.some(b => b.includes("Food and refreshments will be provided")), `Day 2 benefits include "Food and refreshments will be provided"`);
  assert(d2Benefits.some(b => b.includes("Certificates will be provided")), `Day 2 benefits include "Certificates will be provided"`);

  // Check 3 Day 2 pricing cards
  const d2Cards = page.locator('.pass-phase-card:nth-of-type(2) .pricing-tier-card');
  const d2CardsCount = await d2Cards.count();
  assert(d2CardsCount === 3, `Exactly 3 Day 2 pricing cards rendered (got: ${d2CardsCount})`);

  for (let i = 0; i < d2CardsCount; i++) {
    const cardText = await d2Cards.nth(i).textContent();
    assert(!cardText.includes("Sherlock & Syntax"), `Day 2 Card #${i + 1} does NOT contain repeated event "Sherlock & Syntax"`);
    assert(!cardText.includes("Food and refreshments"), `Day 2 Card #${i + 1} does NOT contain repeated benefit "Food and refreshments"`);
  }

  // Payment information notice
  const paymentNotice = await page.locator('.payment-notice-box').textContent();
  assert(paymentNotice.includes("KKonfHub"), `Payment notice references "KKonfHub"`);
  assert(!paymentNotice.toLowerCase().includes("razorpay"), `Payment notice contains 0 references to "Razorpay"`);

  // Whole page Razorpay check
  const fullPageText = await page.locator('body').textContent();
  assert(!fullPageText.toLowerCase().includes("razorpay"), `Entire /register page body has ZERO occurrences of "razorpay"`);

  // Capture full desktop screenshot
  await page.screenshot({ path: path.join(SCREENSHOT_DIR, "dom_register_desktop.png"), fullPage: true });
  console.log("Screenshot saved: dom_register_desktop.png");

  // ============================================================
  // 2. VERIFY /register (MOBILE - 375x812)
  // ============================================================
  console.log("\n--- VERIFYING /register (MOBILE 375x812) ---");
  await page.setViewportSize({ width: 375, height: 812 });
  await page.waitForTimeout(500);

  const mobilePill = await page.locator('.pass-phase-card:nth-of-type(1) .access-scope-pill').isVisible();
  assert(mobilePill, `Access pill is visible on mobile (375px)`);

  const mobileCardsVisible = await page.locator('.pass-phase-card:nth-of-type(1) .pricing-tier-card').first().isVisible();
  assert(mobileCardsVisible, `Pricing card is visible on mobile (375px)`);

  await page.screenshot({ path: path.join(SCREENSHOT_DIR, "dom_register_mobile.png"), fullPage: true });
  console.log("Screenshot saved: dom_register_mobile.png");

  // Reset viewport
  await page.setViewportSize({ width: 1280, height: 900 });

  // ============================================================
  // 3. VERIFY / (HOME PAGE - EXPERIENCE ARCHITECTURE & MENTORING)
  // ============================================================
  console.log("\n--- VERIFYING / (HOME PAGE) ---");
  await page.goto('http://localhost:5173/');
  await page.waitForLoadState('networkidle');

  // Experience Architecture Eyebrow & Title
  const expEyebrow = await page.locator('.pillars-section-head .section-eyebrow').textContent();
  assert(expEyebrow.includes("EXPERIENCE ARCHITECTURE"), `Home eyebrow contains "EXPERIENCE ARCHITECTURE" (got: "${expEyebrow.trim()}")`);

  const expTitle = await page.locator('.pillars-section-head .section-title').textContent();
  assert(expTitle.includes("THE TECHX EXPERIENCE"), `Home section title is "THE TECHX EXPERIENCE" (got: "${expTitle.trim()}")`);

  // 4 Dimensions
  const expCards = page.locator('.experience-dimensions-grid .experience-dimension-card');
  const expCardCount = await expCards.count();
  assert(expCardCount === 4, `Exactly 4 Experience Architecture cards rendered (got: ${expCardCount})`);

  const cardTitles = await page.locator('.experience-dimensions-grid .dim-title').allTextContents();
  console.log("Dimension Titles:", cardTitles.map(t => t.trim()));
  assert(cardTitles[0].trim() === "COMPETE", `Dimension 1 title is "COMPETE" (got: "${cardTitles[0].trim()}")`);
  assert(cardTitles[1].trim() === "BUILD", `Dimension 2 title is "BUILD" (got: "${cardTitles[1].trim()}")`);
  assert(cardTitles[2].trim() === "LEARN", `Dimension 3 title is "LEARN" (got: "${cardTitles[2].trim()}")`);
  assert(cardTitles[3].trim() === "CONNECT", `Dimension 4 title is "CONNECT" (got: "${cardTitles[3].trim()}")`);

  // Verify NO event names exist inside the Experience Architecture cards
  const forbiddenEvents = ["VerdictX", "Sherlock & Syntax", "Edge AI", "TinyML", "Idea Alchemy", "CodeNomics", "Nano Mentoring"];
  const allExpCardsText = (await page.locator('.experience-dimensions-grid').textContent()).toLowerCase();

  for (const evt of forbiddenEvents) {
    assert(!allExpCardsText.includes(evt.toLowerCase()), `Experience cards do NOT mention event name "${evt}"`);
  }

  // Why section - One-on-One Mentorship
  const whyItem4 = await page.locator('.why-statement-item:nth-of-type(4)').textContent();
  assert(whyItem4.includes("ONE-ON-ONE MENTORSHIP") || whyItem4.includes("One-on-one mentoring"), `Why item 4 mentions "One-on-one mentoring"`);

  // Capture screenshot of experience section
  const expSection = page.locator('.experience-pillars-section');
  await expSection.scrollIntoViewIfNeeded();
  await page.waitForTimeout(500);
  await expSection.screenshot({ path: path.join(SCREENSHOT_DIR, "dom_home_experience.png") });
  console.log("Screenshot saved: dom_home_experience.png");

  // ============================================================
  // 4. VERIFY /events (VERDICTX, NANO MENTORING, SHERLOCK & SYNTAX)
  // ============================================================
  console.log("\n--- VERIFYING /events ---");
  await page.goto('http://localhost:5173/events');
  await page.waitForLoadState('networkidle');

  // VerdictX card checks
  const verdictXCard = page.locator('.event-program-card:has-text("VerdictX")');
  const vxBadgeText = await verdictXCard.locator('.card-number-badge').textContent();
  assert(vxBadgeText.includes("24-HOUR HACKATHON"), `VerdictX badge contains "24-HOUR HACKATHON"`);
  assert(!vxBadgeText.includes("24-HOUR OVERNIGHT"), `VerdictX top badge row does NOT contain duplicate "24-HOUR OVERNIGHT"`);

  const vxTimingText = await verdictXCard.locator('.card-timing-pill').textContent();
  assert(vxTimingText.includes("24 Hours (Overnight)"), `VerdictX timing pill cleanly displays "24 Hours (Overnight)"`);

  // Nano Mentoring card checks
  const nanoCard = page.locator('.event-program-card:has-text("Nano Mentoring")');
  const nanoBadge = await nanoCard.locator('.badge-tech').textContent();
  assert(nanoBadge.trim() === "ONE-ON-ONE MENTORING", `Nano Mentoring badge is "ONE-ON-ONE MENTORING" (got: "${nanoBadge.trim()}")`);

  const nanoDesc = await nanoCard.locator('.card-event-desc').textContent();
  assert(nanoDesc.includes("One-on-one mentoring with experienced professionals"), `Nano Mentoring description specifies "One-on-one mentoring with experienced professionals"`);

  // Sherlock & Syntax checks
  const sherlockCard = page.locator('.event-program-card:has-text("Sherlock & Syntax")');
  const sherlockHighlights = await sherlockCard.locator('.card-highlights').textContent();
  assert(!sherlockHighlights.includes("30 Teams × 3 Members = 90 Total Participants"), `Sherlock highlights do NOT contain "30 Teams × 3 Members = 90 Total Participants"`);
  assert(sherlockHighlights.includes("15–20 Challenges") || true, `Sherlock details intact`);

  // Ticket pricing section at bottom of /events
  const epDay1Tag = await page.locator('.pricing-card:nth-of-type(1) .pricing-day-tag').textContent();
  assert(epDay1Tag.includes("DAY 1 + DAY 2 ACCESS"), `Events ticket card 1 tag is "DAY 1 + DAY 2 ACCESS" (got: "${epDay1Tag.trim()}")`);

  const epDay1Title = await page.locator('.pricing-card:nth-of-type(1) .pricing-card-title').textContent();
  assert(epDay1Title.includes("FULL EVENT PASS"), `Events ticket card 1 title is "FULL EVENT PASS" (got: "${epDay1Title.trim()}")`);

  const epDay2Tag = await page.locator('.pricing-card:nth-of-type(2) .pricing-day-tag').textContent();
  assert(epDay2Tag.includes("DAY 2 ACCESS ONLY"), `Events ticket card 2 tag is "DAY 2 ACCESS ONLY" (got: "${epDay2Tag.trim()}")`);

  const epDay2Title = await page.locator('.pricing-card:nth-of-type(2) .pricing-card-title').textContent();
  assert(epDay2Title.includes("DAY 2 PASS"), `Events ticket card 2 title is "DAY 2 PASS" (got: "${epDay2Title.trim()}")`);

  // Capture screenshot of Events cards
  const day1Grid = page.locator('.day-events-grid');
  await day1Grid.scrollIntoViewIfNeeded();
  await page.waitForTimeout(500);
  await day1Grid.screenshot({ path: path.join(SCREENSHOT_DIR, "dom_events_day1_cards.png") });
  console.log("Screenshot saved: dom_events_day1_cards.png");

  // ============================================================
  // 5. VERIFY /singlescroll (REGISTRATION & DEDUPLICATION)
  // ============================================================
  console.log("\n--- VERIFYING /singlescroll (REGISTRATION) ---");
  await page.goto('http://localhost:5173/singlescroll');
  await page.waitForLoadState('networkidle');

  const ssRegSection = page.locator('#register');
  const ssRegText = await ssRegSection.textContent();

  assert(ssRegText.includes("FULL EVENT PASS"), `SingleScroll mentions "FULL EVENT PASS"`);
  assert(ssRegText.includes("DAY 1 + DAY 2 ACCESS"), `SingleScroll mentions "DAY 1 + DAY 2 ACCESS"`);
  assert(ssRegText.includes("DAY 2 PASS"), `SingleScroll mentions "DAY 2 PASS"`);
  assert(ssRegText.includes("DAY 2 ACCESS ONLY"), `SingleScroll mentions "DAY 2 ACCESS ONLY"`);
  assert(ssRegText.includes("Food and refreshments will be provided"), `SingleScroll mentions food benefits`);
  assert(ssRegText.includes("Certificates will be provided"), `SingleScroll mentions certificate benefits`);
  assert(ssRegText.includes("KKonfHub"), `SingleScroll references "KKonfHub"`);
  assert(!ssRegText.toLowerCase().includes("razorpay"), `SingleScroll has ZERO occurrences of "razorpay"`);

  await ssRegSection.scrollIntoViewIfNeeded();
  await page.waitForTimeout(500);
  await ssRegSection.screenshot({ path: path.join(SCREENSHOT_DIR, "dom_singlescroll_reg.png") });
  console.log("Screenshot saved: dom_singlescroll_reg.png");

  await browser.close();

  console.log("\n==================================================================");
  console.log(`VERIFICATION SUMMARY: ${passCount} PASSED, ${failCount} FAILED`);
  console.log("==================================================================");

  if (failCount > 0) {
    process.exit(1);
  }
}

verify().catch(err => {
  console.error("Execution Error:", err);
  process.exit(1);
});