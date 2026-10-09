// TechX Madras 2026 — Registration Pricing, Sold Out Status & Expiry Validation Suite
// Tests the exact boundaries and conditions specified in the requirements

import {
  registrationOptions,
  isEarlyOfferActive,
  hasEarlyOfferEnded,
  getRegistrationPrice,
  getRegistrationPricingInfo,
  OFFER_CONFIG,
  OFFER_END_DATE_IST,
  OFFER_END_MS,
  SECRET_OFFER_CONFIG,
  SECRET_OFFER_EXPIRY_MS,
  isSecretOfferActive,
  hasSecretOfferExpired
} from '../src/data/registration.js';

let failed = false;

console.log("==================================================================");
console.log("TECHX'26 REGISTRATION PRICING & STATUS — VALIDATION SUITE");
console.log("==================================================================");
console.log(`Early Bird Cutoff (IST): ${OFFER_END_DATE_IST} (${OFFER_END_MS} ms)`);
console.log(`Secret Offer Cutoff (IST): ${SECRET_OFFER_CONFIG.expiryDateIST} (${SECRET_OFFER_EXPIRY_MS} ms)\n`);

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

// 2. Early Bird Boundary Test Cases
const earlyBirdBoundaryCases = [
  {
    id: "EARLY WINDOW",
    timestamp: "2026-10-08T12:00:00+05:30",
    description: "2026-10-08 12:00:00 IST (during active early bird window) → DISCOUNT ACTIVE",
    expectedOfferActive: true,
    expectedOfferEnded: false,
    expectedDay1Prices: [299, 399, 499],
    expectedDay2Prices: [199, 299, 399]
  },
  {
    id: "EARLY BOUNDARY 1",
    timestamp: "2026-10-08T23:59:00+05:30",
    description: "2026-10-08 23:59:00 IST → DISCOUNT ACTIVE",
    expectedOfferActive: true,
    expectedOfferEnded: false,
    expectedDay1Prices: [299, 399, 499],
    expectedDay2Prices: [199, 299, 399]
  },
  {
    id: "EARLY BOUNDARY 2",
    timestamp: "2026-10-08T23:59:59+05:30",
    description: "2026-10-08 23:59:59 IST → DISCOUNT ACTIVE",
    expectedOfferActive: true,
    expectedOfferEnded: false,
    expectedDay1Prices: [299, 399, 499],
    expectedDay2Prices: [199, 299, 399]
  },
  {
    id: "EARLY BOUNDARY 3",
    timestamp: "2026-10-09T00:00:00+05:30",
    description: "2026-10-09 00:00:00 IST → STANDARD PRICE (Resumes automatically)",
    expectedOfferActive: false,
    expectedOfferEnded: true,
    expectedDay1Prices: [399, 499, 599],
    expectedDay2Prices: [299, 399, 499]
  },
  {
    id: "EARLY BOUNDARY 4",
    timestamp: "2026-10-09T00:00:01+05:30",
    description: "2026-10-09 00:00:01 IST → STANDARD PRICE",
    expectedOfferActive: false,
    expectedOfferEnded: true,
    expectedDay1Prices: [399, 499, 599],
    expectedDay2Prices: [299, 399, 499]
  },
  {
    id: "POST EARLY BIRD NOW",
    timestamp: Date.now(),
    description: "Current simulation time (9 Oct 2026, post early-bird) → STANDARD PRICE",
    expectedOfferActive: false,
    expectedOfferEnded: true,
    expectedDay1Prices: [399, 499, 599],
    expectedDay2Prices: [299, 399, 499]
  }
];

console.log("\nCHECK 2: EARLY BIRD BOUNDARY CASES");
earlyBirdBoundaryCases.forEach((tc) => {
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
// Changing browser timezone should not change the cutoff at 2026-10-08 23:59:59 Asia/Kolkata
console.log("\nCHECK 3: TIMEZONE INVARIANCE TESTS (Asia/Kolkata cutoff vs UTC)");
const utcLastSecond = "2026-10-08T18:29:59.000Z";
const utcCutoff = "2026-10-08T18:30:00.000Z";
const utcAfter = "2026-10-08T18:30:01.000Z";

const utcLastActive = isEarlyOfferActive(utcLastSecond);
const utcCutoffActive = isEarlyOfferActive(utcCutoff);
const utcCutoffEnded = hasEarlyOfferEnded(utcCutoff);
const utcAfterEnded = hasEarlyOfferEnded(utcAfter);

if (utcLastActive && !utcCutoffActive && utcCutoffEnded && utcAfterEnded) {
  console.log("[PASS] Early Bird Timezone Invariance Verified: UTC timestamps match exact Asia/Kolkata boundary.");
} else {
  failed = true;
  console.error("[FAIL] Early Bird Timezone Invariance Failure.");
}

// 4. Struck-Through Price Logic Test
console.log("\nCHECK 4: STRUCK-THROUGH PRICE LOGIC");
const samplePass = day1Passes[0]; // IEEE CS (Normal 399, Offer 299)
const activeInfo = getRegistrationPricingInfo(samplePass, "2026-10-08T23:59:59+05:30");
const endedInfo = getRegistrationPricingInfo(samplePass, "2026-10-09T00:00:00+05:30");

if (activeInfo.effectivePrice === 299 && activeInfo.isOfferActive) {
  console.log("[PASS] During early offer: effectivePrice is ₹299 (offer) and isOfferActive is true.");
} else {
  failed = true;
  console.error("[FAIL] During early offer pricing error.");
}

if (endedInfo.effectivePrice === 399 && !endedInfo.isOfferActive && endedInfo.hasEnded) {
  console.log("[PASS] After early deadline: effectivePrice is ₹399 (standard) and isOfferActive is false.");
} else {
  failed = true;
  console.error("[FAIL] After early deadline pricing error.");
}

// 5. Verify NO visible end dates or deadlines in OFFER_CONFIG
console.log("\nCHECK 5: NO VISIBLE DATES IN OFFER_CONFIG");
const dateKeywords = ["23 SEP", "04 OCT", "2026-10-08", "8 OCTOBER", "DEADLINE", "COUNTDOWN"];
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

// 6. Check Full Event Pass Sold Out Status
console.log("\nCHECK 6: VERIFY FULL EVENT PASSES SOLD OUT & DAY 2 PASSES AVAILABLE");
const fullEventPasses = registrationOptions.filter(p => p.dayNumber === 1);
const day2PassesList = registrationOptions.filter(p => p.dayNumber === 2);

fullEventPasses.forEach(pass => {
  if (pass.isSoldOut === true) {
    console.log(`[PASS] Full Event Pass ${pass.id} (${pass.category}): MARKED SOLD OUT (isSoldOut === true)`);
  } else {
    failed = true;
    console.error(`[FAIL] Full Event Pass ${pass.id}: Expected isSoldOut === true, got ${pass.isSoldOut}`);
  }
});

day2PassesList.forEach(pass => {
  if (pass.isSoldOut === false) {
    console.log(`[PASS] Day 2 Pass ${pass.id} (${pass.category}): ACTIVE & AVAILABLE (isSoldOut === false)`);
  } else {
    failed = true;
    console.error(`[FAIL] Day 2 Pass ${pass.id}: Expected isSoldOut === false, got ${pass.isSoldOut}`);
  }
});

// 7. Check SECRETCODE26 Expiry Boundaries
console.log("\nCHECK 7: SECRET OFFER (SECRETCODE26) EXPIRY BOUNDARIES (9 OCT 2026 11:59 PM IST)");
console.log(`Configured Secret Offer Expiry: ${SECRET_OFFER_CONFIG.expiryDateIST} (${SECRET_OFFER_EXPIRY_MS} ms)`);

if (SECRET_OFFER_CONFIG.code === 'SECRETCODE26' && SECRET_OFFER_CONFIG.discountAmount === 200) {
  console.log(`[PASS] SECRET_OFFER_CONFIG: Code is ${SECRET_OFFER_CONFIG.code}, discount is ₹${SECRET_OFFER_CONFIG.discountAmount}`);
} else {
  failed = true;
  console.error(`[FAIL] SECRET_OFFER_CONFIG has incorrect code or discount: ${JSON.stringify(SECRET_OFFER_CONFIG)}`);
}

const secretCases = [
  {
    id: "SECRET NOW",
    timestamp: "2026-10-09T14:21:33+05:30",
    description: "Current simulation time (2026-10-09 14:21:33 IST) -> OFFER ACTIVE",
    expectedActive: true,
    expectedExpired: false
  },
  {
    id: "SECRET BOUNDARY 1",
    timestamp: "2026-10-09T23:58:59+05:30",
    description: "1 second before expiry (2026-10-09 23:58:59 IST) -> OFFER ACTIVE",
    expectedActive: true,
    expectedExpired: false
  },
  {
    id: "SECRET BOUNDARY 2",
    timestamp: "2026-10-09T23:59:00+05:30",
    description: "Exact expiry time (2026-10-09 23:59:00 IST / 11:59 PM IST) -> OFFER EXPIRED",
    expectedActive: false,
    expectedExpired: true
  },
  {
    id: "SECRET BOUNDARY 3",
    timestamp: "2026-10-09T23:59:01+05:30",
    description: "1 second after expiry (2026-10-09 23:59:01 IST) -> OFFER EXPIRED",
    expectedActive: false,
    expectedExpired: true
  },
  {
    id: "SECRET BOUNDARY 4",
    timestamp: "2026-10-10T12:00:00+05:30",
    description: "Next day (2026-10-10 12:00:00 IST) -> OFFER EXPIRED",
    expectedActive: false,
    expectedExpired: true
  }
];

secretCases.forEach(tc => {
  const active = isSecretOfferActive(tc.timestamp);
  const expired = hasSecretOfferExpired(tc.timestamp);
  const passed = active === tc.expectedActive && expired === tc.expectedExpired;
  if (!passed) failed = true;
  console.log(`[${passed ? 'PASS' : 'FAIL'}] ${tc.id}: ${tc.description}`);
  console.log(`       Active: ${active} (expected ${tc.expectedActive}), Expired: ${expired} (expected ${tc.expectedExpired})`);
});

// Timezone invariance for secret offer
// 2026-10-09 23:59:00 IST = 2026-10-09 18:29:00 UTC
const secretUtcBefore = "2026-10-09T18:28:59.000Z";
const secretUtcCutoff = "2026-10-09T18:29:00.000Z";
const secretUtcAfter = "2026-10-09T18:29:01.000Z";

const utcSecActive = isSecretOfferActive(secretUtcBefore);
const utcSecCutoffActive = isSecretOfferActive(secretUtcCutoff);
const utcSecCutoffExpired = hasSecretOfferExpired(secretUtcCutoff);
const utcSecAfterExpired = hasSecretOfferExpired(secretUtcAfter);

if (utcSecActive && !utcSecCutoffActive && utcSecCutoffExpired && utcSecAfterExpired) {
  console.log("[PASS] Secret Offer Timezone Invariance Verified: UTC timestamps match exact Asia/Kolkata boundary.");
} else {
  failed = true;
  console.error("[FAIL] Secret Offer Timezone Invariance Failure.");
}

console.log("\n==================================================================");
if (failed) {
  console.error("OVERALL STATUS: FAILED");
  process.exit(1);
} else {
  console.log("OVERALL STATUS: ALL BOUNDARY, SOLD OUT & LOGIC CHECKS PASSED PERFECTLY");
  process.exit(0);
}
