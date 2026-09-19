// TechX Madras 2026 — Early Registration Pricing & Boundary Validation Suite
// Tests the exact boundaries and conditions specified in the requirements

import {
  registrationOptions,
  isEarlyOfferActive,
  hasEarlyOfferEnded,
  getRegistrationPrice,
  getRegistrationPricingInfo,
  OFFER_CONFIG,
  OFFER_END_DATE_IST,
  OFFER_END_MS
} from '../src/data/registration.js';

let failed = false;

console.log("==================================================================");
console.log("TECHX'26 REGISTRATION PRICING — BOUNDARY VALIDATION SUITE");
console.log("==================================================================");
console.log(`Configured Cutoff (IST): ${OFFER_END_DATE_IST} (${OFFER_END_MS} ms)\n`);

const day1Passes = registrationOptions.filter(p => p.dayNumber === 1);
const day2Passes = registrationOptions.filter(p => p.dayNumber === 2);

// 1. Assert ₹100 reduction across every pass
console.log("CHECK 1: VERIFY ₹100 REDUCTION ON ALL PASS TIERS");
registrationOptions.forEach(pass => {
  const reduction = pass.normalPrice - pass.offerPrice;
  if (reduction === 100) {
    console.log(`[PASS] ${pass.id} (${pass.day} - ${pass.shortCategory}): Normal ₹${pass.normalPrice} → Offer ₹${pass.offerPrice} (Savings: ₹${reduction})`);
  } else {
    failed = true;
    console.error(`[FAIL] ${pass.id}: Expected ₹100 reduction, got ₹${reduction}`);
  }
});

// 2. Boundary Test Cases
const boundaryCases = [
  {
    id: "NOW (Active from now)",
    timestamp: Date.now(),
    description: "Current time (active offer window from now)",
    expectedOfferActive: true,
    expectedOfferEnded: false,
    expectedDay1Prices: [299, 399, 499],
    expectedDay2Prices: [199, 299, 399]
  },
  {
    id: "BOUNDARY 1",
    timestamp: "2026-10-04T23:59:59+05:30",
    description: "2026-10-04 23:59:59 IST → DISCOUNT ACTIVE",
    expectedOfferActive: true,
    expectedOfferEnded: false,
    expectedDay1Prices: [299, 399, 499],
    expectedDay2Prices: [199, 299, 399]
  },
  {
    id: "BOUNDARY 2",
    timestamp: "2026-10-05T00:00:00+05:30",
    description: "2026-10-05 00:00:00 IST → STANDARD PRICE (Resumes automatically)",
    expectedOfferActive: false,
    expectedOfferEnded: true,
    expectedDay1Prices: [399, 499, 599],
    expectedDay2Prices: [299, 399, 499]
  },
  {
    id: "BOUNDARY 3",
    timestamp: "2026-10-05T00:00:01+05:30",
    description: "2026-10-05 00:00:01 IST → STANDARD PRICE",
    expectedOfferActive: false,
    expectedOfferEnded: true,
    expectedDay1Prices: [399, 499, 599],
    expectedDay2Prices: [299, 399, 499]
  }
];

console.log("\nCHECK 2: BOUNDARY CASES");
boundaryCases.forEach((tc) => {
  const active = isEarlyOfferActive(tc.timestamp);
  const ended = hasEarlyOfferEnded(tc.timestamp);
  const day1Prices = day1Passes.map(p => getRegistrationPrice(p, tc.timestamp));
  const day2Prices = day2Passes.map(p => getRegistrationPrice(p, tc.timestamp));

  const activeMatches = active === tc.expectedOfferActive;
  const endedMatches = ended === tc.expectedOfferEnded;
  const day1Matches = JSON.stringify(day1Prices) === JSON.stringify(tc.expectedDay1Prices);
  const day2Matches = JSON.stringify(day2Prices) === JSON.stringify(tc.expectedDay2Prices);

  const passed = activeMatches && endedMatches && day1Matches && day2Matches;
  if (!passed) failed = true;

  console.log(`[${passed ? 'PASS' : 'FAIL'}] ${tc.id}: ${tc.description}`);
  console.log(`       Offer Active: ${active} (expected: ${tc.expectedOfferActive})`);
  console.log(`       Offer Ended : ${ended} (expected: ${tc.expectedOfferEnded})`);
  console.log(`       Day 1 Prices: [${day1Prices.join(', ')}] (expected: [${tc.expectedDay1Prices.join(', ')}])`);
  console.log(`       Day 2 Prices: [${day2Prices.join(', ')}] (expected: [${tc.expectedDay2Prices.join(', ')}])`);
  console.log("------------------------------------------------------------------");
});

// 3. Timezone Invariance Test
// Changing browser timezone should not change the cutoff at 2026-10-05 00:00:00 Asia/Kolkata
console.log("\nCHECK 3: TIMEZONE INVARIANCE TESTS (Asia/Kolkata cutoff vs UTC)");
// 2026-10-04 23:59:59 IST = 2026-10-04 18:29:59 UTC
const utcLastSecond = "2026-10-04T18:29:59.000Z";
// 2026-10-05 00:00:00 IST = 2026-10-04 18:30:00 UTC
const utcCutoff = "2026-10-04T18:30:00.000Z";
// 2026-10-05 00:00:01 IST = 2026-10-04 18:30:01 UTC
const utcAfter = "2026-10-04T18:30:01.000Z";

const utcLastActive = isEarlyOfferActive(utcLastSecond);
const utcCutoffActive = isEarlyOfferActive(utcCutoff);
const utcCutoffEnded = hasEarlyOfferEnded(utcCutoff);
const utcAfterEnded = hasEarlyOfferEnded(utcAfter);

if (utcLastActive && !utcCutoffActive && utcCutoffEnded && utcAfterEnded) {
  console.log("[PASS] Timezone Invariance Verified: UTC timestamps match exact Asia/Kolkata boundary.");
} else {
  failed = true;
  console.error("[FAIL] Timezone Invariance Failure.");
}

// 4. Struck-Through Price Logic Test
console.log("\nCHECK 4: STRUCK-THROUGH PRICE LOGIC");
const samplePass = day1Passes[0]; // IEEE CS (Normal 399, Offer 299)
const activeInfo = getRegistrationPricingInfo(samplePass, "2026-10-04T23:59:59+05:30");
const endedInfo = getRegistrationPricingInfo(samplePass, "2026-10-05T00:00:00+05:30");

if (activeInfo.effectivePrice === 299 && activeInfo.isOfferActive) {
  console.log("[PASS] During offer: effectivePrice is ₹299 (offer) and isOfferActive is true.");
} else {
  failed = true;
  console.error("[FAIL] During offer pricing error.");
}

if (endedInfo.effectivePrice === 399 && !endedInfo.isOfferActive && endedInfo.hasEnded) {
  console.log("[PASS] After deadline: effectivePrice is ₹399 (standard) and isOfferActive is false.");
} else {
  failed = true;
  console.error("[FAIL] After deadline pricing error.");
}

// 5. Verify NO visible end dates or deadlines in OFFER_CONFIG
console.log("\nCHECK 5: NO VISIBLE DATES IN OFFER_CONFIG");
const dateKeywords = ["23 SEP", "04 OCT", "2026-10-05", "5 OCTOBER", "DEADLINE", "COUNTDOWN"];
let exposedForbiddenText = false;
[OFFER_CONFIG.title, OFFER_CONFIG.savingsHeading, OFFER_CONFIG.bodyText, OFFER_CONFIG.endedHeading, OFFER_CONFIG.endedMessage].forEach(text => {
  if (text) {
    dateKeywords.forEach(kw => {
      if (text.toUpperCase().includes(kw)) {
        console.error(`[FAIL] Visible text contains forbidden keyword '${kw}': "${text}"`);
        exposedForbiddenText = true;
        failed = true;
      }
    });
  }
});
if (!exposedForbiddenText) {
  console.log("[PASS] No visible end dates, start dates, deadlines, or countdowns found in user-facing offer copy.");
}

console.log("\n==================================================================");
if (failed) {
  console.error("OVERALL STATUS: FAILED");
  process.exit(1);
} else {
  console.log("OVERALL STATUS: ALL BOUNDARY & LOGIC CHECKS PASSED PERFECTLY");
  process.exit(0);
}
