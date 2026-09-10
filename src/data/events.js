// TechX Madras 2026 - Official Events Data
// Source: Official TechX Proposal & Event Documentation

export const eventsData = [
  {
    id: "verdictx",
    number: "01",
    title: "VerdictX: Code & Conquer",
    publicTitle: "VERDICTX: CODE & CONQUER",
    subtitle: "24-Hour Open-Domain Hackathon",
    badge: "24H HACKATHON",
    accent: "#8A2BE2",
    teamSize: "Team of 4",
    maxTeams: 40,
    participants: 160,
    duration: "24 Hours (Overnight)",
    date: "14th – 15th October 2026",
    venueRoom: "Steve Jobs Hall",
    shortDescription: "A 24-hour open-domain hackathon where teams develop innovative solutions, adapt to changing requirements, undergo technical review, and defend their project through a technical debate.",
    fullDescription: "VerdictX: Code & Conquer is a 24-hour open-domain hackathon where teams develop innovative solutions, adapt to changing requirements, undergo technical review, and defend their project through a technical debate.\n\nOver 24 continuous hours, teams receive unique problem statements, build working prototypes with modern tools and APIs, handle judge-injected dynamic constraints, conduct technical peer evaluations, and defend their architecture before the evaluation bench.",
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
    ]
  },
  {
    id: "sherlock-syntax",
    number: "02",
    title: "Sherlock & Syntax",
    publicTitle: "SHERLOCK & SYNTAX",
    subtitle: "Cybersecurity Capture The Flag (CTF)",
    badge: "CYBERSECURITY CTF",
    accent: "#9D4EDD",
    teamSize: "Team of 3",
    maxTeams: 30,
    participants: 90,
    duration: "Day 2 // 9:00 AM – 12:15 PM",
    date: "15th October 2026",
    venueRoom: "Alpha Hall",
    shortDescription: "A standard skill-based cybersecurity Capture The Flag competition testing technical exploitation, cryptography, digital forensics, and reverse engineering.",
    fullDescription: "Sherlock & Syntax is a standard skill-based cybersecurity Capture The Flag (CTF) competition. Thirty teams of three compete in Alpha Hall over a 2.5-hour live window to solve approximately 15–20 technical challenges across multiple disciplines.\n\nScoring is fully automated via the CTF platform. In the event of a tie, the team that reaches its final score earliest is ranked higher.",
    highlights: [
      "Standard skill-based cybersecurity Capture The Flag competition (Alpha Hall)",
      "30 Teams × 3 Members = 90 Total Participants",
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
      "Exactly 3 members per team (30 teams total, 90 participants)",
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
    recognition: "Top 3 teams announced based on final leaderboard. Official certificates for participating teams."
  },
  {
    id: "edge-ai-tinyml",
    number: "03",
    title: "Edge AI & TinyML: AI Beyond the Cloud",
    publicTitle: "EDGE AI & TINYML: AI BEYOND THE CLOUD",
    subtitle: "Hands-on Workshop on Edge AI & Real-Time Applications",
    badge: "HANDS-ON WORKSHOP",
    accent: "#C77DFF",
    teamSize: "Workshop (Up to 160 Seats)",
    participants: 160,
    duration: "Day 2 // 10:45 AM – 12:15 PM",
    date: "15th October 2026",
    venueRoom: "Apple Hall",
    shortDescription: "A hands-on workshop introducing AI processing on edge devices and real-time applications.",
    fullDescription: "Edge AI & TinyML: AI Beyond the Cloud is a hands-on workshop introducing AI processing on edge devices and real-time applications.\n\nHeld in Apple Hall with a capacity of 160 participants, the session explores how machine intelligence operates beyond cloud boundaries, highlighting on-device computing, reduced latency, data privacy, and embedded real-time applications.",
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
    ]
  },
  {
    id: "idea-alchemy",
    number: "04",
    title: "Idea Alchemy",
    publicTitle: "IDEA ALCHEMY",
    subtitle: "Business & Idea Pitch",
    tagline: "INNOVATE. ADAPT. PITCH.",
    badge: "BUSINESS & PITCH",
    accent: "#B86CFF",
    teamSize: "Team of 3",
    maxTeams: 45,
    participants: 135,
    duration: "Day 2 // 1:15 PM – 3:00 PM",
    date: "15th October 2026",
    venueRoom: "Apple Hall",
    shortDescription: "An innovation-driven competition where teams generate a startup concept on the spot by combining randomly assigned problem statements, technology domains, and products/services.",
    fullDescription: "Idea Alchemy (Business & Idea Pitch) is an innovation-driven competition where teams generate a startup concept on the spot by combining randomly assigned problem statements, technology domains, and products/services.\n\nEvaluating creativity, problem-solving, entrepreneurial mindset, feasibility, business thinking, and communication, the competition challenges teams across two high-intensity rounds—culminating in an unexpected Pivot Challenge for the top 5 finalists.",
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
    ]
  },
  {
    id: "codenomics",
    number: "05",
    title: "CodeNomics",
    publicTitle: "CODENOMICS",
    subtitle: "Gamified Competitive Programming",
    badge: "GAMIFIED CODING",
    accent: "#7B2CBF",
    teamSize: "Team of 2",
    maxTeams: 40,
    participants: 120,
    duration: "Day 2 // 1:15 PM – 3:30 PM",
    date: "15th October 2026",
    venueRoom: "Alpha Hall",
    shortDescription: "Gamified competitive programming where teams strategically earn and spend TechCoins while solving coding challenges.",
    fullDescription: "CodeNomics is a gamified competitive programming arena where teams strategically earn and spend TechCoins while solving coding challenges across two integrated platforms: the TechX Portal and HackerRank.\n\nTeams begin with 100 TechCoins and solve strategic non-programming challenges on the TechX Portal to earn additional currency. They then strategically spend coins in the TechX Market to purchase tactical advantages during the timed HackerRank programming challenges.",
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
    ]
  },
  {
    id: "nano-mentoring",
    number: "06",
    title: "Nano Mentoring",
    publicTitle: "NANO MENTORING",
    subtitle: "Industry Insights & Guidance",
    badge: "INDUSTRY INSIGHTS",
    accent: "#8A2BE2",
    teamSize: "Open to Attendees",
    participants: 80,
    duration: "Day 1 // 10:00 AM",
    date: "14th October 2026",
    venueRoom: "Campus Auditorium",
    shortDescription: "An interaction session with experienced professionals providing practical insights, guidance, and industry perspectives.",
    fullDescription: "Nano Mentoring is a dedicated interaction session with experienced professionals designed to provide practical insights, guidance, and industry perspectives.\n\nScheduled on Day 1 at 10:00 AM alongside the Benefits of IEEE Computer Society Membership session, it gives student technologists direct exposure to industry expectations, career navigation, and modern technology practices.",
    highlights: [
      "Direct interaction session with experienced professionals",
      "Practical insights, guidance, and industry perspectives",
      "Career development and modern technology guidance",
      "Presented alongside Benefits of IEEE Computer Society Membership"
    ],
    sessionFocus: [
      "Practical Insights into Modern Tech Workflows",
      "Career Guidance and Skill Trajectories",
      "Industry Expectations for Student Developers",
      "Interactive Q&A with Experienced Professionals"
    ]
  },
  {
    id: "ieee-cs-benefits",
    number: "07",
    title: "Benefits of IEEE Computer Society Membership",
    publicTitle: "BENEFITS OF IEEE COMPUTER SOCIETY MEMBERSHIP",
    subtitle: "Career Advancement & Professional Opportunities",
    badge: "IEEE CS ENGAGEMENT",
    accent: "#9D4EDD",
    teamSize: "Open to Attendees",
    participants: 80,
    duration: "Day 1 // 10:00 AM",
    date: "14th October 2026",
    venueRoom: "Campus Auditorium",
    shortDescription: "An engagement and awareness session highlighting career advancement, networking opportunities, career development, and innovation in the technology sector.",
    fullDescription: "Benefits of IEEE Computer Society Membership is an engagement and awareness session designed to highlight the profound advantages of belonging to the world's leading community for computer science professionals.\n\nHeld on Day 1 at 10:00 AM, the session covers career advancement, international networking opportunities, continuous professional development, and technological innovation.",
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
    ]
  }
];
