// TechX Madras 2026 - Centralized Registration Options & Dynamic Pricing Logic
// Authoritative Timezone: Asia/Kolkata (IST = UTC+05:30)

// ----------------------------------------------------
// OFFER WINDOW CONFIGURATION (Asia/Kolkata / IST)
// ----------------------------------------------------
// ----------------------------------------------------
// OFFER WINDOW CONFIGURATION (Asia/Kolkata / IST)
// ----------------------------------------------------
// Authoritative cutoff: 5 October 2026 at 00:00:00 IST (2026-10-05 00:00:00 Asia/Kolkata)
// The early registration offer is ACTIVE FROM NOW until 5 October 2026 00:00:00 IST.
// At exactly 5 October 2026 00:00:00 IST, website switches back to standard pricing.
export const OFFER_END_DATE_IST = "2026-10-05T00:00:00+05:30";
export const OFFER_END_MS = new Date(OFFER_END_DATE_IST).getTime();

// ----------------------------------------------------
// CENTRALIZED REGISTRATION OPTIONS
// ----------------------------------------------------
export const registrationOptions = [
  // --------------------------------------------------
  // DAY 1 — 14 OCTOBER 2026
  // --------------------------------------------------
  {
    id: "day1-ieee-cs",
    day: "DAY 1",
    dayNumber: 1,
    date: "14 OCTOBER 2026",
    category: "IEEE COMPUTER SOCIETY MEMBER",
    shortCategory: "IEEE CS MEMBER",
    normalPrice: 399,
    offerPrice: 299,
    price: 399, // default reference
    displayPrice: "₹399*",
    label: "Day 1 Pass",
    description: "Active IEEE Computer Society student members with valid membership ID.",
    paymentUrl: "", // Ready for Razorpay Payment Link
    requiresIeeeNumber: true,
    features: [
      "Inauguration & Event Briefing (09:00 AM)",
      "Nano Mentoring Session (10:00 AM)",
      "IEEE Computer Society Membership Session (10:00 AM)",
      "VerdictX 24-Hour Hackathon Entry (Continues Overnight)"
    ]
  },
  {
    id: "day1-ieee-non-cs",
    day: "DAY 1",
    dayNumber: 1,
    date: "14 OCTOBER 2026",
    category: "IEEE NON-CS MEMBER",
    shortCategory: "IEEE NON-CS",
    normalPrice: 499,
    offerPrice: 399,
    price: 499,
    displayPrice: "₹499*",
    label: "Day 1 Pass",
    description: "Active IEEE student members from other society chapters.",
    paymentUrl: "", // Ready for Razorpay Payment Link
    requiresIeeeNumber: true,
    features: [
      "Inauguration & Event Briefing (09:00 AM)",
      "Nano Mentoring Session (10:00 AM)",
      "IEEE Computer Society Membership Session (10:00 AM)",
      "VerdictX 24-Hour Hackathon Entry (Continues Overnight)"
    ]
  },
  {
    id: "day1-non-ieee",
    day: "DAY 1",
    dayNumber: 1,
    date: "14 OCTOBER 2026",
    category: "NON-IEEE",
    shortCategory: "NON-IEEE",
    normalPrice: 599,
    offerPrice: 499,
    price: 599,
    displayPrice: "₹599*",
    label: "Day 1 Pass",
    description: "Student technologists, engineers, and delegates from all institutions.",
    paymentUrl: "", // Ready for Razorpay Payment Link
    requiresIeeeNumber: false,
    features: [
      "Inauguration & Event Briefing (09:00 AM)",
      "Nano Mentoring Session (10:00 AM)",
      "IEEE Computer Society Membership Session (10:00 AM)",
      "VerdictX 24-Hour Hackathon Entry (Continues Overnight)"
    ]
  },

  // --------------------------------------------------
  // DAY 2 — 15 OCTOBER 2026
  // --------------------------------------------------
  {
    id: "day2-ieee-cs",
    day: "DAY 2",
    dayNumber: 2,
    date: "15 OCTOBER 2026",
    category: "IEEE COMPUTER SOCIETY MEMBER",
    shortCategory: "IEEE CS MEMBER",
    normalPrice: 299,
    offerPrice: 199,
    price: 299,
    displayPrice: "₹299*",
    label: "Day 2 Pass",
    description: "Active IEEE Computer Society student members with valid membership ID.",
    paymentUrl: "", // Ready for Razorpay Payment Link
    requiresIeeeNumber: true,
    features: [
      "Sherlock & Syntax Cybersecurity CTF (09:00 AM – 12:15 PM)",
      "Edge AI & TinyML Hands-on Workshop (10:45 AM – 12:15 PM)",
      "Idea Alchemy Startup Pitch OR CodeNomics Programming (01:15 PM)",
      "Grand Valedictory Ceremony & Awards Distribution (03:30 PM)"
    ]
  },
  {
    id: "day2-ieee-non-cs",
    day: "DAY 2",
    dayNumber: 2,
    date: "15 OCTOBER 2026",
    category: "IEEE NON-CS MEMBER",
    shortCategory: "IEEE NON-CS",
    normalPrice: 399,
    offerPrice: 299,
    price: 399,
    displayPrice: "₹399*",
    label: "Day 2 Pass",
    description: "Active IEEE student members from other society chapters.",
    paymentUrl: "", // Ready for Razorpay Payment Link
    requiresIeeeNumber: true,
    features: [
      "Sherlock & Syntax Cybersecurity CTF (09:00 AM – 12:15 PM)",
      "Edge AI & TinyML Hands-on Workshop (10:45 AM – 12:15 PM)",
      "Idea Alchemy Startup Pitch OR CodeNomics Programming (01:15 PM)",
      "Grand Valedictory Ceremony & Awards Distribution (03:30 PM)"
    ]
  },
  {
    id: "day2-non-ieee",
    day: "DAY 2",
    dayNumber: 2,
    date: "15 OCTOBER 2026",
    category: "NON-IEEE",
    shortCategory: "NON-IEEE",
    normalPrice: 499,
    offerPrice: 399,
    price: 499,
    displayPrice: "₹499*",
    label: "Day 2 Pass",
    description: "Student technologists, engineers, and delegates from all institutions.",
    paymentUrl: "", // Ready for Razorpay Payment Link
    requiresIeeeNumber: false,
    features: [
      "Sherlock & Syntax Cybersecurity CTF (09:00 AM – 12:15 PM)",
      "Edge AI & TinyML Hands-on Workshop (10:45 AM – 12:15 PM)",
      "Idea Alchemy Startup Pitch OR CodeNomics Programming (01:15 PM)",
      "Grand Valedictory Ceremony & Awards Distribution (03:30 PM)"
    ]
  }
];

// ----------------------------------------------------
// REGISTRATION METADATA & CONFIGURATION
// ----------------------------------------------------
export const registrationMeta = {
  title: "TECHX'26 REGISTRATION",
  subtitle: "14–15 OCTOBER 2026 // Sri Sai Ram Institute of Technology",
  intro: "Choose your registration category below. Registration fees shown are indicative and subject to final confirmation by the organizers.",
  footnote: "*Indicative INR conversion of proposal pricing. Final registration fees will be confirmed by the organizers."
};

export const OFFER_CONFIG = {
  title: "EARLY REGISTRATION OFFER",
  savingsHeading: "SAVE ₹100 ON EVERY REGISTRATION",
  savingsShort: "SAVE ₹100",
  bodyText: "Register now and save ₹100 on every registration.",
  discountAmount: 100,
  endDateIST: OFFER_END_DATE_IST,
  timezone: "Asia/Kolkata (IST)",
  endedTitle: "STANDARD REGISTRATION",
  endedHeading: "STANDARD REGISTRATION",
  endedMessage: "Standard registration fees apply for all conference delegates."
};

// Legacy backwards-compatible export
export const registrationOffer = {
  active: true,
  title: OFFER_CONFIG.title,
  statusBadge: "OFFICIAL REGISTRATION OFFER",
  statusHeading: OFFER_CONFIG.title,
  statusSub: OFFER_CONFIG.savingsHeading,
  description: "Register now and save ₹100 on every registration.",
  endedTitle: OFFER_CONFIG.endedHeading
};

// ----------------------------------------------------
// TIMEZONE-SAFE EVALUATION FUNCTIONS
// ----------------------------------------------------
// Resolves any input timestamp or defaults to current epoch ms.
// Because comparison is in epoch ms against explicit +05:30 timestamps,
// it is completely timezone-invariant across all global visitor locations.
function resolveTimestamp(timestamp) {
  if (timestamp === undefined || timestamp === null) {
    return Date.now();
  }
  if (typeof timestamp === 'number') {
    return timestamp;
  }
  if (timestamp instanceof Date) {
    return timestamp.getTime();
  }
  return new Date(timestamp).getTime();
}

/**
 * Returns true if the offer is active:
 * currentTime < 2026-10-05 00:00:00 Asia/Kolkata
 */
export function isEarlyOfferActive(timestamp = Date.now()) {
  const currentMs = resolveTimestamp(timestamp);
  return currentMs < OFFER_END_MS;
}

/**
 * Returns true if current time is on or after 5 October 2026 00:00:00 IST.
 */
export function hasEarlyOfferEnded(timestamp = Date.now()) {
  const currentMs = resolveTimestamp(timestamp);
  return currentMs >= OFFER_END_MS;
}

/**
 * Determines current price for a pass option based on the centralized date condition.
 */
export function getRegistrationPrice(option, timestamp = Date.now()) {
  if (!option) return 0;
  return isEarlyOfferActive(timestamp) ? option.offerPrice : option.normalPrice;
}

/**
 * Returns complete pricing details and display strings for a pass option.
 */
export function getRegistrationPricingInfo(option, timestamp = Date.now()) {
  if (!option) return null;
  const currentMs = resolveTimestamp(timestamp);
  const isOffer = isEarlyOfferActive(currentMs);
  const ended = hasEarlyOfferEnded(currentMs);
  const effectivePrice = isOffer ? option.offerPrice : option.normalPrice;

  return {
    id: option.id,
    dayNumber: option.dayNumber,
    day: option.day,
    category: option.category,
    shortCategory: option.shortCategory,
    normalPrice: option.normalPrice,
    offerPrice: option.offerPrice,
    effectivePrice,
    displayPrice: `₹${effectivePrice}*`,
    normalDisplayPrice: `₹${option.normalPrice}*`,
    offerDisplayPrice: `₹${option.offerPrice}*`,
    isOfferActive: isOffer,
    hasEnded: ended,
    savingsAmount: option.normalPrice - option.offerPrice,
    savingsText: `SAVE ₹${option.normalPrice - option.offerPrice}`
  };
}

/**
 * Calculates countdown time remaining to 5 October 2026 00:00:00 IST.
 */
export function getOfferTimeRemaining(timestamp = Date.now()) {
  const currentMs = resolveTimestamp(timestamp);
  const difference = OFFER_END_MS - currentMs;

  if (difference <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      totalSeconds: 0,
      isExpired: true
    };
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  return {
    days,
    hours,
    minutes,
    seconds,
    totalSeconds: Math.floor(difference / 1000),
    isExpired: false
  };
}
