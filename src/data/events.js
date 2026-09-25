// TechX Madras 2026 - Official Events Data
// Source: Official TechX Proposal & Event Documentation
// Chronological Order: Day 1 (01–03) then Day 2 (04–07)

export const eventsData = [
  // ----------------------------------------------------
  // DAY 1 — 13 OCTOBER 2026
  // ----------------------------------------------------
  {
    id: "nano-mentoring",
    number: "01",
    day: 1,
    dayLabel: "DAY 1",
    eventDate: "13 October 2026",
    time: "10:00 AM",
    title: "Nano Mentoring",
    publicTitle: "NANO MENTORING",
    subtitle: "One-on-One Mentoring & Career Perspectives",
    badge: "ONE-ON-ONE MENTORING",
    accent: "#8A2BE2",
    teamSize: "Open to Attendees",
    participants: 80,
    participantsLabel: "Open to Registered Delegates",
    duration: "Day 1 // 10:00 AM",
    date: "13 October 2026",
    venueRoom: "Campus Auditorium",
    shortDescription: "One-on-one mentoring with experienced professionals, focused on practical guidance and career perspectives.",
    fullDescription: "One-on-one mentoring with experienced professionals, focused on practical guidance and career perspectives. Connect directly with seasoned engineers and industry leaders for personalized career navigation and technical mentorship.",
    highlights: [
      "One-on-one mentoring",
      "Practical guidance and industry perspectives",
      "Career development guidance",
      "Presented alongside Benefits of IEEE Computer Society Membership"
    ],
    sessionFocus: [
      "Practical Insights into Modern Tech Workflows",
      "Career Guidance and Skill Trajectories",
      "Industry Expectations for Student Developers",
      "Interactive Q&A with Experienced Professionals"
    ],
    prizes: {
      recognition: "Interactive professional development and industry perspective session.",
      certificates: "Participation certificates for all registered attendees.",
      details: "Details to be announced."
    }
  },
  {
    id: "ieee-cs-benefits",
    number: "02",
    day: 1,
    dayLabel: "DAY 1",
    eventDate: "13 October 2026",
    time: "10:00 AM",
    title: "Benefits of IEEE Computer Society Membership",
    publicTitle: "BENEFITS OF IEEE COMPUTER SOCIETY MEMBERSHIP",
    subtitle: "Career Advancement & Professional Opportunities",
    badge: "IEEE CS ENGAGEMENT",
    accent: "#9D4EDD",
    teamSize: "Open to Attendees",
    participants: 80,
    participantsLabel: "Open to Registered Delegates",
    duration: "Day 1 // 10:00 AM",
    date: "13 October 2026",
    venueRoom: "Campus Auditorium",
    shortDescription: "An awareness session exploring global IEEE Computer Society membership, professional networking, certifications, and career growth.",
    fullDescription: "Discover how IEEE Computer Society membership unlocks global research digital libraries, technical certifications, international conferences, and a worldwide professional network.",
    highlights: [
      "Official IEEE Computer Society engagement and awareness session",
      "Highlighting career advancement and professional development",
      "Global networking opportunities with engineers and researchers",
      "Fostering innovation across the technology sector"
    ],
    coreThemes: [
      "Career Advancement & Industry Recognition",
      "Global Networking Opportunities",
      "Professional Development & Lifelong Learning",
      "Innovation in the Technology Sector"
    ],
    prizes: {
      recognition: "Official IEEE Computer Society student chapter awareness.",
      certificates: "Participation certificates for all registered attendees.",
      details: "Details to be announced."
    }
  },
  {
    id: "verdictx",
    number: "03",
    day: 1,
    dayLabel: "DAY 1 & 2",
    eventDate: "13–14 October 2026",
    time: "01:30 PM (24 Hours)",
    title: "VerdictX: Code & Conquer",
    publicTitle: "VERDICTX: CODE & CONQUER",
    subtitle: "24-Hour Open-Domain Hackathon",
    badge: "24-HOUR HACKATHON",
    accent: "#8A2BE2",
    teamSize: "4 members",
    maxTeams: 40,
    participants: 160,
    participantsLabel: "Up to 160 Participants (40 Teams × 4)",
    duration: "24 Hours",
    date: "13–14 October 2026",
    venueRoom: "Steve Jobs Hall",
    shortDescription: "A 24-hour open-domain software engineering championship featuring rapid prototyping, dynamic constraint handling, and live technical defense.",
    fullDescription: "VerdictX is a 24-hour continuous hackathon where teams build working prototypes, adapt to live judge-injected constraints, and defend their software architecture in a peer review debate.",
    highlights: [
      "24-Hour continuous open-domain software hackathon (Steve Jobs Hall)",
      "Multi-round lifecycle: Ideation, Prototype Development, and Defense",
      "Dynamic constraint injections by judges during development",
      "Peer project technical review and live technical debate"
    ],
    rounds: [
      {
        round: "ROUND 1",
        title: "IDEATION & PRESENTATION",
        timing: "Preparation: 1:00 PM – 3:30 PM | Evaluation: 3:45 PM – 5:00 PM",
        pitchTime: "3 minutes per team",
        desc: "Each team receives one unique problem statement and prepares a presentation covering: Proposed Solution, Features, Architecture, Technology Stack, Implementation Plan, and Expected Impact.",
        evaluation: [
          "Problem Understanding",
          "Innovation",
          "Feasibility",
          "Technical Approach",
          "Presentation & Clarity"
        ]
      },
      {
        round: "ROUND 2",
        title: "PROTOTYPE DEVELOPMENT",
        timing: "Development: 5:30 PM – 8:00 PM | Evaluation: 9:00 PM – 11:00 PM",
        desc: "Teams develop a working prototype. AI tools, open-source libraries, APIs, and other development resources are permitted. During evaluation, judges introduce two additional dynamic constraints that teams must address (e.g. offline functionality, accessibility for differently-abled users, or scaling for one million users).",
        evaluation: [
          "Functionality",
          "Innovation",
          "UI/UX",
          "Technical Implementation",
          "Constraint Handling",
          "Demonstration"
        ]
      },
      {
        round: "ROUND 3",
        title: "TECHNICAL REVIEW & DEFENSE",
        timing: "Submission: 3:30 AM – 4:30 AM | Peer Review: 4:30 AM – 5:00 AM | Final Defense: 8:30 AM – 11:00 AM",
        submissionRequirements: [
          "GitHub Repository",
          "README Documentation",
          "Demo Video",
          "Final PPT"
        ],
        peerReviewAreas: [
          "Strengths",
          "Weaknesses",
          "Bugs",
          "Security Issues",
          "UI/UX Improvements",
          "Scalability",
          "Performance",
          "Suggestions"
        ],
        defenseTiming: "5 minutes Project Presentation + 7 minutes Technical Defense & Debate per team",
        desc: "Teams submit deliverables and are randomly assigned another team's project to conduct a comprehensive peer review. During morning evaluation, teams present their work and defend their technical choices in an interactive debate.",
        evaluation: [
          "Technical Knowledge",
          "Quality of Review",
          "Problem Solving",
          "Communication",
          "Defense",
          "Overall Project Quality"
        ]
      }
    ],
    scoringCumulative: [
      "Round 1 Presentation",
      "Prototype Development",
      "Constraint Implementation",
      "Technical Review",
      "Technical Defense"
    ],
    generalRules: [
      "Exactly 4 members per team (Maximum 40 teams)",
      "AI tools, open-source libraries, and development APIs are permitted",
      "Plagiarism or copying from other teams results in immediate disqualification",
      "All submissions must strictly meet specified deadlines",
      "Decisions of the evaluation bench and judges are final"
    ],
    prizes: {
      recognition: "Top teams recognized across the cumulative multi-round evaluation bench.",
      certificates: "Official certificates for all participating teams.",
      details: "Awards and winner recognition to be announced by organizers."
    }
  },

  // ----------------------------------------------------
  // DAY 2 — 14 OCTOBER 2026
  // ----------------------------------------------------
  {
    id: "sherlock-syntax",
    number: "04",
    day: 2,
    dayLabel: "DAY 2",
    eventDate: "14 October 2026",
    time: "09:00 AM – 12:15 PM",
    title: "Sherlock & Syntax",
    publicTitle: "SHERLOCK & SYNTAX",
    subtitle: "Cybersecurity Capture The Flag (CTF)",
    badge: "CYBERSECURITY CTF",
    accent: "#9D4EDD",
    teamSize: "3 members",
    maxTeams: 30,
    participants: 90,
    participantsLabel: "Team of 3",
    duration: "Day 2 // 09:00 AM – 12:15 PM",
    date: "14 October 2026",
    venueRoom: "Alpha Hall",
    shortDescription: "A skill-based cybersecurity CTF testing web exploitation, cryptography, digital forensics, reverse engineering, and OSINT.",
    fullDescription: "Sherlock & Syntax is a live cybersecurity Capture The Flag arena where teams solve tiered challenges across web security, cryptography, forensics, and reverse engineering.",
    highlights: [
      "Standard skill-based cybersecurity Capture The Flag competition (Alpha Hall)",
      "15–20 Challenges distributed across Easy, Medium, and Hard tiers",
      "Fully automated platform scoring with earliest-time tie-break rule"
    ],
    categories: [
      "Web Exploitation",
      "Cryptography",
      "Forensics",
      "Reverse Engineering",
      "OSINT",
      "Miscellaneous"
    ],
    challengeDistribution: [
      { tier: "Easy", count: "6–8 Challenges", points: 100 },
      { tier: "Medium", count: "6–8 Challenges", points: 250 },
      { tier: "Hard", count: "3–4 Challenges", points: 500 }
    ],
    eventFlow: [
      { time: "9:00 AM – 9:15 AM", title: "Reporting & Verification", desc: "Team arrival, identity verification, and system setup in Alpha Hall." },
      { time: "9:15 AM – 9:30 AM", title: "Official Briefing", desc: "Rules overview, platform access distribution, and scope explanation." },
      { time: "9:30 AM – 12:00 PM", title: "Live CTF Competition", desc: "2.5-hour active challenge solving across all categories." },
      { time: "12:00 PM – 12:15 PM", title: "Leaderboard Freeze & Wrap-Up", desc: "Platform freeze, final tie-break verification, and closing remarks." }
    ],
    tieBreakRule: "The team that reaches its final score earliest is ranked higher.",
    rules: [
      "Exactly 3 members per team",
      "No substitutions allowed during the event",
      "One laptop/system required per team",
      "Flag sharing between teams is strictly prohibited",
      "Unauthorized external help results in immediate disqualification",
      "Any technical issues must be reported immediately to organizers"
    ],
    resources: [
      "Dedicated CTF hosting platform (e.g., CTFd)",
      "High-speed campus Wi-Fi / LAN connection",
      "Dedicated power outlets and extension stations",
      "Live projected leaderboard screen",
      "IEEE CS student volunteers"
    ],
    prizes: {
      recognition: "Top 3 teams announced based on final leaderboard standings.",
      certificates: "Official certificates for all participating teams.",
      details: "Winner recognition and awards subject to overall event budget."
    }
  },
  {
    id: "edge-ai-tinyml",
    number: "05",
    day: 2,
    dayLabel: "DAY 2",
    eventDate: "14 October 2026",
    time: "10:45 AM – 12:15 PM",
    title: "Edge AI & TinyML: AI Beyond the Cloud",
    publicTitle: "EDGE AI & TINYML: AI BEYOND THE CLOUD",
    subtitle: "Hands-on Workshop on Edge AI & Real-Time Applications",
    badge: "HANDS-ON WORKSHOP",
    accent: "#C77DFF",
    teamSize: "Individual Workshop Entry",
    participants: 160,
    participantsLabel: "160 Participants Capacity",
    duration: "Day 2 // 10:45 AM – 12:15 PM",
    date: "14 October 2026",
    venueRoom: "Apple Hall",
    shortDescription: "A hands-on workshop on deploying optimized machine learning models to low-power edge microcontrollers and sensors.",
    fullDescription: "A hands-on masterclass in Apple Hall exploring low-latency on-device intelligence, model quantization, and real-time embedded deployment on microcontroller hardware.",
    highlights: [
      "Hands-on workshop in Apple Hall (Capacity: 160 participants)",
      "Introducing AI processing on edge devices and real-time applications",
      "Understanding the transition from heavy cloud models to edge intelligence",
      "Exploring low-latency, private, and energy-efficient AI architectures"
    ],
    topics: [
      "Introduction to Edge AI Concepts and Paradigms",
      "Principles of TinyML and Low-Power Embedded Inference",
      "Edge AI vs Cloud AI: Latency, Bandwidth, and Privacy",
      "Model Optimization, Quantization, and Real-Time Deployment",
      "Real-World Industrial, Healthcare, and Embedded Use Cases"
    ],
    workflowNodes: [
      { step: "01", label: "CLOUD AI", desc: "Centralized server compute" },
      { step: "02", label: "EDGE AI", desc: "Localized boundary processing" },
      { step: "03", label: "TINYML", desc: "Milliwatt neural execution" },
      { step: "04", label: "ON-DEVICE", desc: "Autonomous real-time inference" }
    ],
    prizes: {
      recognition: "Hands-on edge intelligence and microcontroller AI deployment.",
      certificates: "Participation certificates for all registered attendees.",
      details: "Details to be announced."
    }
  },
  {
    id: "idea-alchemy",
    number: "06",
    day: 2,
    dayLabel: "DAY 2 (PARALLEL TRACK)",
    eventDate: "14 October 2026",
    time: "01:15 PM – 03:00 PM",
    title: "Idea Alchemy",
    publicTitle: "IDEA ALCHEMY",
    subtitle: "Business & Idea Pitch",
    tagline: "INNOVATE. ADAPT. PITCH.",
    badge: "BUSINESS & IDEA PITCH",
    accent: "#B86CFF",
    teamSize: "3 members",
    maxTeams: 45,
    participants: 135,
    participantsLabel: "Up to 135 Participants (45 Teams × 3)",
    duration: "Day 2 // 01:15 PM – 03:00 PM",
    date: "14 October 2026",
    venueRoom: "Apple Hall",
    parallelTrack: true,
    parallelWith: "CodeNomics (Alpha Hall)",
    shortDescription: "An innovation pitch where teams conceptualize startup solutions on the spot and adapt to dynamic business pivot constraints.",
    fullDescription: "An on-the-spot startup pitch where teams combine randomized user, domain, and product parameters to architect and defend a business model, followed by a live pivot round.",
    highlights: [
      "Rapid on-the-spot startup conceptualization from random card combinations",
      "Round 1 Innovation Sprint pitching complete business architecture",
      "Round 2 Pivot Challenge featuring dynamic real-world business constraints",
      "Objective percentage-weighted judging criteria by experienced jury"
    ],
    rounds: [
      {
        round: "ROUND 1",
        title: "INNOVATION SPRINT",
        desc: "Teams of 3 randomly select one card from each of three boxes: Target Users, Technology Domain, and Product/Service. Teams develop a startup idea from the combination and deliver a pitch covering: Problem Statement, Proposed Solution, Target Audience, Technology Used, Business Model, Unique Selling Proposition (USP), and Market Potential. The top 5 teams qualify for Round 2."
      },
      {
        round: "ROUND 2",
        title: "PIVOT CHALLENGE",
        desc: "Each finalist team receives an unexpected Business Constraint Card. Teams must adapt their idea and explain: Changes made, How the new challenge was addressed, Revised business strategy, and Updated value proposition."
      }
    ],
    boxes: [
      {
        box: "BOX 1",
        name: "TARGET USERS",
        examples: ["Farmers", "Drivers", "Elderly People", "Students", "Women", "Healthcare Workers", "Small Business Owners"]
      },
      {
        box: "BOX 2",
        name: "TECHNOLOGY DOMAIN",
        examples: ["Artificial Intelligence", "IoT", "Cybersecurity", "Blockchain", "Cloud Computing", "Robotics", "Data Analytics"]
      },
      {
        box: "BOX 3",
        name: "PRODUCT / SERVICE",
        examples: ["Smart Watch", "ATM", "Mobile Application", "Drone", "Vending Machine", "Smart Mirror", "Digital Wallet"]
      }
    ],
    constraintExamples: [
      "Major technology is no longer available",
      "Project budget is significantly reduced",
      "Government regulations changed",
      "Target users have different requirements",
      "Competitor launched a similar product",
      "Solution must function without internet"
    ],
    judgingCriteria: [
      { label: "Innovation & Creativity", percentage: 25 },
      { label: "Feasibility", percentage: 20 },
      { label: "Problem-Solution Fit", percentage: 20 },
      { label: "Adaptability", percentage: 15 },
      { label: "Business Model", percentage: 10 },
      { label: "Presentation & Communication", percentage: 10 }
    ],
    prizes: {
      recognition: "Top finalist teams recognized based on jury evaluation criteria.",
      certificates: "Certificates for all participating teams.",
      details: "Details to be announced."
    }
  },
  {
    id: "codenomics",
    number: "07",
    day: 2,
    dayLabel: "DAY 2 (PARALLEL TRACK)",
    eventDate: "14 October 2026",
    time: "01:15 PM – 03:30 PM",
    title: "CodeNomics",
    publicTitle: "CODENOMICS",
    subtitle: "Gamified Competitive Programming",
    badge: "COMPETITIVE PROGRAMMING",
    accent: "#7B2CBF",
    teamSize: "2 members",
    maxTeams: 40,
    participants: 80,
    participantsLabel: "Up to 80 Participants (40 Teams × 2)",
    duration: "Day 2 // 01:15 PM – 03:30 PM",
    date: "14 October 2026",
    venueRoom: "Alpha Hall",
    parallelTrack: true,
    parallelWith: "Idea Alchemy (Apple Hall)",
    shortDescription: "A gamified competitive programming arena where teams strategically earn and spend TechCoins while solving coding challenges.",
    fullDescription: "A gamified programming challenge combining strategy puzzles on the TechX Portal with timed coding problems on HackerRank, supported by a tactical marketplace.",
    highlights: [
      "Dual-platform architecture: TechX Portal (Strategy) + HackerRank (Programming)",
      "Starting balance of 100 TechCoins per team",
      "TechX Portal levels awarding from +20 to +120 TechCoins",
      "Interactive TechX Market to purchase tactical hints, AI prompts, and timer freezes",
      "Holistic scoring: 70% HackerRank Score, 20% Completion Time, 10% TechCoins"
    ],
    platforms: [
      {
        name: "TECHX PORTAL",
        desc: "Non-programming challenges, TechCoin management, TechX Market, live leaderboard, and progress tracking."
      },
      {
        name: "HACKERRANK",
        desc: "Programming questions, automated code evaluation, hidden testcase judging, and coding score calculation."
      }
    ],
    flow: [
      "Team Login",
      "Solve Strategy Challenges",
      "Earn TechCoins",
      "Use Coins in TechX Market",
      "Solve Coding Problems on HackerRank",
      "Finish & Submit",
      "Final Ranking"
    ],
    portalLevels: [
      {
        level: "LEVEL 1 — EASY",
        reward: "+20 TechCoins",
        examples: ["Debug the output", "Find the error", "Tech trivia", "Logic puzzle", "SQL MCQs", "OS puzzles"]
      },
      {
        level: "LEVEL 2 — MEDIUM",
        reward: "+40 TechCoins",
        examples: ["Predict program output", "API flow questions", "Git workflow", "Database design", "Networking"]
      },
      {
        level: "LEVEL 3 — HARD",
        reward: "+70 TechCoins",
        examples: ["Architecture decisions", "System Design MCQs", "Algorithm analysis", "Security puzzles", "Scenario-based debugging"]
      },
      {
        level: "BOSS CHALLENGE",
        reward: "+120 TechCoins",
        examples: ["Final comprehensive strategic puzzle testing technical synthesis"]
      }
    ],
    marketItems: [
      { item: "Reveal Hint", cost: "20 Coins", desc: "Unlock a foundational algorithmic hint." },
      { item: "Second Hint", cost: "40 Coins", desc: "Unlock an advanced hint with architectural direction." },
      { item: "Judge Clarification", cost: "15 Coins", desc: "Official problem statement clarification from judges." },
      { item: "AI Assistant (Limited Prompt)", cost: "60 Coins", desc: "Execute one targeted inquiry via the TechX assistant." },
      { item: "Hidden Testcase Preview", cost: "40 Coins", desc: "Inspect one hidden edge-case testcase input." },
      { item: "Skip One Wrong Submission", cost: "30 Coins", desc: "Remove the penalty for one incorrect submission." },
      { item: "Reveal Live Leaderboard", cost: "10 Coins", desc: "Temporarily reveal live standings during freeze period." },
      { item: "Freeze Timer for 2 Minutes", cost: "100 Coins", desc: "Pause contest timer for 120 seconds of deliberation." }
    ],
    winningCriteria: [
      { label: "HackerRank Score / Levels Completed", weight: "70%" },
      { label: "Completion Time", weight: "20%" },
      { label: "Remaining TechCoins", weight: "10%" }
    ],
    antiCheatingRules: [
      "Mobile phones collected before event start",
      "Exactly one laptop permitted per team",
      "Unique team login credentials with randomized question order",
      "Tab switching strictly prohibited and monitored",
      "AI tools permitted exclusively through the TechX Market item",
      "Organizer monitoring throughout the session",
      "HackerRank automated plagiarism detection",
      "Server-side validation for all TechCoin transactions; coins earned once per challenge"
    ],
    prizes: {
      recognition: "Top ranked teams announced on final leaderboard combining HackerRank, completion time, and TechCoins.",
      certificates: "Certificates for all participating teams.",
      details: "Details to be announced."
    }
  }
];

// ----------------------------------------------------
// REGISTRATION & INDICATIVE TICKET PRICING
// ----------------------------------------------------
export const ticketPricing = {
  sectionTitle: "REGISTRATION / TICKET PRICING",
  subtitle: "Indicative fee structure for conference and event delegate passes across Day 1 and Day 2.",
  day1: {
    dayNumber: "DAY 1 + DAY 2",
    accessLabel: "DAY 1 + DAY 2 ACCESS",
    date: "13–14 OCTOBER 2026",
    title: "FULL EVENT PASS",
    eventsIncluded: [
      "Full 2-Day Conference Entry (13–14 October 2026)",
      "Inauguration & Event Briefing",
      "Nano Mentoring & IEEE CS Membership Session",
      "VerdictX: Code & Conquer — 24-Hour Hackathon",
      "All Day 2 Tracks, CTF & Keynotes Included",
      "Food and refreshments will be provided",
      "Certificates will be provided"
    ],
    tiers: [
      {
        category: "IEEE CS MEMBER",
        price: "₹399*",
        originalUsd: "$4.18",
        desc: "Active IEEE Computer Society student members with valid membership ID."
      },
      {
        category: "IEEE NON-CS MEMBER",
        price: "₹499*",
        originalUsd: "$5.23",
        desc: "Active IEEE student members from other society chapters."
      },
      {
        category: "NON-IEEE MEMBER",
        price: "₹599*",
        originalUsd: "$6.28",
        desc: "Open to student technologists and delegates from all engineering institutions."
      }
    ]
  },
  day2: {
    dayNumber: "DAY 2 ONLY",
    accessLabel: "DAY 2 ACCESS ONLY",
    date: "14 OCTOBER 2026",
    title: "DAY 2 PASS",
    eventsIncluded: [
      "Day 2 Conference Entry (14 October 2026 Only)",
      "Sherlock & Syntax — Cybersecurity CTF",
      "Edge AI & TinyML: AI Beyond the Cloud",
      "Idea Alchemy (Startup Pitch) OR CodeNomics",
      "Grand Valedictory Ceremony & Awards Distribution",
      "Food and refreshments will be provided",
      "Certificates will be provided"
    ],
    tiers: [
      {
        category: "IEEE CS MEMBER",
        price: "₹299*",
        originalUsd: "$3.13",
        desc: "Active IEEE Computer Society student members with valid membership ID."
      },
      {
        category: "IEEE NON-CS MEMBER",
        price: "₹399*",
        originalUsd: "$4.18",
        desc: "Active IEEE student members from other society chapters."
      },
      {
        category: "NON-IEEE MEMBER",
        price: "₹499*",
        originalUsd: "$5.23",
        desc: "Open to student technologists and delegates from all engineering institutions."
      }
    ]
  },
  footnote: "*Indicative INR conversion of proposal pricing; final registration fee will be confirmed by the organizers."
};
