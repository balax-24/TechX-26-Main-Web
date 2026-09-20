// TechX Madras 2026 - Centralized Registration Options & Dynamic Pricing Logic
// Authoritative Timezone: Asia/Kolkata (IST = UTC+05:30)

// ----------------------------------------------------
// OFFER WINDOW CONFIGURATION (Asia/Kolkata / IST)
// ----------------------------------------------------
// Authoritative cutoff: 5 October 2026 at 00:00:00 IST (2026-10-05 00:00:00 Asia/Kolkata)
// The early registration offer is ACTIVE FROM NOW until 5 October 2026 00:00:00 IST.
// At exactly 5 October 2026 00:00:00 IST, website switches back to standard pricing.
export const OFFER_END_DATE_IST = "2026-10-05T00:00:00+05:30";
export const OFFER_END_MS = new Date(OFFER_END_DATE_IST).getTime();

// ----------------------------------------------------
// SHARED PASS INFORMATION BLOCKS (Shown ONCE per pass type)
// ----------------------------------------------------
export const passSharedInfo = {
  fullPass: {
    id: "full-event-pass",
    dayNumber: 1,
    title: "FULL EVENT PASS",
    dates: "14–15 OCTOBER 2026",
    accessLabel: "DAY 1 + DAY 2 ACCESS",
    pricingSectionLabel: "DAY 1 REGISTRATION",
    pricingSectionSub: "Full Event Pass — Gives access to both Day 1 and Day 2 of TECHX'26.",
    description: "Your pass gives access to both Day 1 and Day 2 of TECHX'26.",
    inclusionsTitle: "PASS INCLUDES",
    scheduleGroups: [
      {
        dayHeading: "DAY 1 — 14 OCTOBER",
        events: [
          "Inauguration & Event Briefing",
          "Nano Mentoring",
          "IEEE Computer Society Membership Session",
          "VerdictX: Code & Conquer — 24-Hour Hackathon"
        ]
      },
      {
        dayHeading: "DAY 2 — 15 OCTOBER",
        events: [
          "Sherlock & Syntax — Cybersecurity CTF",
          "Edge AI & TinyML: AI Beyond the Cloud",
          "Idea Alchemy — Business & Idea Pitch",
          "CodeNomics"
        ]
      }
    ],
    compactSummary: "Full access to all Day 1 and Day 2 tracks: Inauguration, Mentoring, Hackathon, Cyber CTF, TinyML, Pitch, and CodeNomics.",
    benefitsTitle: "ADDITIONAL BENEFITS",
    benefits: [
      "Food and refreshments will be provided",
      "Certificates will be provided"
    ]
  },
  day2Pass: {
    id: "day2-pass",
    dayNumber: 2,
    title: "DAY 2 PASS",
    dates: "15 OCTOBER 2026",
    accessLabel: "DAY 2 ACCESS ONLY",
    pricingSectionLabel: "DAY 2 REGISTRATION",
    pricingSectionSub: "Day 2 Pass — Access to Day 2 of TECHX'26.",
    description: "Access to Day 2 of TECHX'26.",
    inclusionsTitle: "DAY 2 INCLUDES",
    scheduleGroups: [
      {
        dayHeading: "DAY 2 — 15 OCTOBER",
        events: [
          "Sherlock & Syntax — Cybersecurity CTF",
          "Edge AI & TinyML: AI Beyond the Cloud",
          "Idea Alchemy — Business & Idea Pitch",
          "CodeNomics"
        ]
      }
    ],
    compactSummary: "Access to all Day 2 tracks: Cyber CTF, TinyML Workshop, Startup Pitch, and CodeNomics.",
    benefitsTitle: "ADDITIONAL BENEFITS",
    benefits: [
      "Food and refreshments will be provided",
      "Certificates will be provided"
    ]
  }
};

// ----------------------------------------------------
// CENTRALIZED REGISTRATION PRICING OPTIONS
// (Cards contain ONLY: category, price, offer indicator, register button)
// ----------------------------------------------------
export const registrationOptions = [
  // --------------------------------------------------
  // DAY 1 / FULL EVENT PASS — 14–15 OCTOBER 2026
  // --------------------------------------------------
  {
    id: "day1-ieee-cs",
    day: "DAY 1",
    dayNumber: 1,
    passType: "FULL EVENT PASS",
    accessLabel: "DAY 1 + DAY 2 ACCESS",
    date: "14–15 OCTOBER 2026",
    category: "IEEE COMPUTER SOCIETY MEMBER",
    shortCategory: "IEEE CS MEMBER",
    normalPrice: 399,
    offerPrice: 299,
    price: 399, // default reference
    displayPrice: "₹399*",
    label: "Full Event Pass",
    description: "Active IEEE Computer Society student members with valid membership ID.",
    paymentUrl: "", // Ready for KKonfHub registration link
    requiresIeeeNumber: true,
  },
  {
    id: "day1-ieee-non-cs",
    day: "DAY 1",
    dayNumber: 1,
    passType: "FULL EVENT PASS",
    accessLabel: "DAY 1 + DAY 2 ACCESS",
    date: "14–15 OCTOBER 2026",
    category: "IEEE NON-CS MEMBER",
    shortCategory: "IEEE NON-CS",
    normalPrice: 499,
    offerPrice: 399,
    price: 499,
    displayPrice: "₹499*",
    label: "Full Event Pass",
    description: "Active IEEE student members from other society chapters.",
    paymentUrl: "", // Ready for KKonfHub registration link
    requiresIeeeNumber: true,
  },
  {
    id: "day1-non-ieee",
    day: "DAY 1",
    dayNumber: 1,
    passType: "FULL EVENT PASS",
    accessLabel: "DAY 1 + DAY 2 ACCESS",
    date: "14–15 OCTOBER 2026",
    category: "NON-IEEE",
    shortCategory: "NON-IEEE",
    normalPrice: 599,
    offerPrice: 499,
    price: 599,
    displayPrice: "₹599*",
    label: "Full Event Pass",
    description: "Student technologists, engineers, and delegates from all institutions.",
    paymentUrl: "", // Ready for KKonfHub registration link
    requiresIeeeNumber: false,
  },

  // --------------------------------------------------
  // DAY 2 PASS — 15 OCTOBER 2026 (DAY 2 ACCESS ONLY)
  // --------------------------------------------------
  {
    id: "day2-ieee-cs",
    day: "DAY 2",
    dayNumber: 2,
    passType: "DAY 2 PASS",
    accessLabel: "DAY 2 ACCESS ONLY",
    date: "15 OCTOBER 2026",
    category: "IEEE COMPUTER SOCIETY MEMBER",
    shortCategory: "IEEE CS MEMBER",
    normalPrice: 299,
    offerPrice: 199,
    price: 299,
    displayPrice: "₹299*",
    label: "Day 2 Pass",
    description: "Active IEEE Computer Society student members with valid membership ID.",
    paymentUrl: "", // Ready for KKonfHub registration link
    requiresIeeeNumber: true,
  },
  {
    id: "day2-ieee-non-cs",
    day: "DAY 2",
    dayNumber: 2,
    passType: "DAY 2 PASS",
    accessLabel: "DAY 2 ACCESS ONLY",
    date: "15 OCTOBER 2026",
    category: "IEEE NON-CS MEMBER",
    shortCategory: "IEEE NON-CS",
    normalPrice: 399,
    offerPrice: 299,
    price: 399,
    displayPrice: "₹399*",
    label: "Day 2 Pass",
    description: "Active IEEE student members from other society chapters.",
    paymentUrl: "", // Ready for KKonfHub registration link
    requiresIeeeNumber: true,
  },
  {
    id: "day2-non-ieee",
    day: "DAY 2",
    dayNumber: 2,
    passType: "DAY 2 PASS",
    accessLabel: "DAY 2 ACCESS ONLY",
    date: "15 OCTOBER 2026",
    category: "NON-IEEE",
    shortCategory: "NON-IEEE",
    normalPrice: 499,
    offerPrice: 399,
    price: 499,
    displayPrice: "₹499*",
    label: "Day 2 Pass",
    description: "Student technologists, engineers, and delegates from all institutions.",
    paymentUrl: "", // Ready for KKonfHub registration link
    requiresIeeeNumber: false,
  }
];

// ----------------------------------------------------
// REGISTRATION METADATA & CONFIGURATION
// ----------------------------------------------------
export const registrationMeta = {
  title: "TECHX'26 REGISTRATION",
  subtitle: "14-15 OCTOBER 2026 // Sri Sai Ram Institute of Technology",
  intro: "Choose your registration category below. Registration fees shown are indicative and subject to final confirmation by the organizers.",
  footnote: "*Indicative INR conversion of proposal pricing. Final registration fees will be confirmed by the organizers.",
  paymentNotice: "Payment portals will be opened following formal institutional sanction. KKonfHub registration links will be published directly on this portal."
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
