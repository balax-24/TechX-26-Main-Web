// TechX Madras 2026 - Centralized Registration Options & Payment Configuration
// Configurable paymentUrl field for future Razorpay Payment Links / Checkout URLs

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
    price: 399,
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

export const registrationMeta = {
  title: "TECHX'26 REGISTRATION",
  subtitle: "14–15 OCTOBER 2026 // Sri Sai Ram Institute of Technology",
  intro: "Choose your registration category below. Registration fees shown are indicative and subject to final confirmation by the organizers.",
  footnote: "*Indicative INR conversion of proposal pricing. Final registration fees will be confirmed by the organizers."
};

// Isolated configurable offer object
export const registrationOffer = {
  active: false, // Set to true when organizers supply official offer terms
  title: "TECHX'26 REGISTRATION OFFER",
  statusBadge: "OFFICIAL OFFER STATUS",
  statusHeading: "REGISTRATION OFFER",
  statusSub: "Coming soon",
  placeholderText: "[OFFER CONTENT WILL BE UPDATED]",
  description: "Official registration incentives, institutional group concessions, or early delegate packages will be published here upon organizer confirmation.",
  note: "No unverified discounts or promotional codes are applied in advance."
};
