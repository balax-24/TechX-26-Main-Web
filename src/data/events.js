// TechX Madras 2026 - Official Events Data
export const eventsData = [
  {
    id: "build-break-defend",
    number: "01",
    title: "Build.Break.Defend",
    publicTitle: "BUILD.BREAK.DEFEND",
    subtitle: "24-Hour Software Engineering Championship",
    badge: "24H CHAMPIONSHIP",
    accent: "#8A2BE2",
    teamSize: "Team of 4",
    participants: 160,
    duration: "24 Hours (Overnight)",
    date: "14th - 15th October 2026",
    shortDescription: "A 24-hour flagship software engineering championship simulating real-world lifecycle constraints: designing, architecture review, attack injections, bug auctions, and production releases.",
    fullDescription: "Build.Break.Defend is a 24-hour Software Engineering Championship that goes beyond the traditional hackathon experience. Participants experience the complete software engineering lifecycle by designing, developing, testing, reviewing, defending, and refining solutions under real-world constraints.\n\nThroughout the competition, teams encounter engineering challenges, architectural reviews, peer evaluations, simulated production incidents, and client requirement changes. The event emphasizes resilience, collaboration, software quality, engineering excellence, adaptability, and decision-making under intense real-world scenarios.",
    highlights: [
      "Simulated production outages & client requirements injection",
      "Dynamic bug auction & live attack injection phases",
      "Rigorous architectural review & technical debate defense",
      "Overnight engineering sprint spanning Day 1 to Day 2"
    ],
    workflow: [
      { step: "01", code: "OPERATION ALPHA", title: "Foundation Build", desc: "Core architecture setup and initial system scaffolding." },
      { step: "02", code: "OPERATION BRAVO", title: "AI Enhancement", desc: "Infusing machine intelligence and algorithmic capability." },
      { step: "03", code: "OPERATION CHARLIE", title: "Client Feature Injection", desc: "Sudden scope evolution and dynamic requirement adaptation." },
      { step: "04", code: "OPERATION DELTA", title: "Architecture Review", desc: "Rigorous technical inspection by engineering mentors." },
      { step: "05", code: "OPERATION ECHO", title: "Bug Auction", desc: "Strategic bidding and flaw management under constraints." },
      { step: "06", code: "OPERATION FOXTROT", title: "Attack Phase", desc: "Adversarial stress-testing of competitor codebases." },
      { step: "07", code: "OPERATION GAMMA", title: "Patch Sprint", desc: "Rapid remediation, hardening, and resilience testing." },
      { step: "08", code: "OPERATION OMEGA", title: "Production Release", desc: "Submission, peer project review, and technical defense." }
    ],
    skillsTested: [
      "Resilient Software Architecture",
      "Full-Lifecycle Engineering",
      "Adversarial Defense & Patching",
      "Dynamic Adaptability",
      "Peer Code Analysis",
      "High-Pressure Decision Making"
    ]
  },
  {
    id: "cipherx",
    number: "02",
    title: "CipherX",
    publicTitle: "CIPHERX — SHERLOCK & SYNTAX",
    subtitle: "Cybersecurity CTF & Coding Challenge",
    badge: "CTF & SYNTAX",
    accent: "#9D4EDD",
    teamSize: "Team of 2",
    participants: 100,
    duration: "Day 2 Morning",
    date: "15th October 2026",
    shortDescription: "A hybrid arena fusing programming with cyber forensic investigation. Teams balance dual fronts to earn Intel Tokens for strategic programming hints.",
    fullDescription: "CipherX combines programming and cybersecurity investigation into a single strategic challenge. Participants solve algorithmic programming modules while simultaneously investigating simulated cyber incidents through dedicated web platforms.\n\nTeams strategically allocate members between Programming and Cyber Investigation. As they uncover forensic evidence, they earn Intel Tokens which can be redeemed for valuable hints during the programming challenges. This tests both coding velocity and defensive threat intelligence.",
    highlights: [
      "Simulated cyber incident response web environment",
      "Strategic resource allocation between coding and digital forensics",
      "Intel Token economy for unlocking high-value algorithmic hints",
      "Real-world forensic artifacts: logs, emails, browser histories, memory dumps"
    ],
    mechanism: [
      { label: "PROGRAMMING & FORENSICS", desc: "Teams split force between syntax challenges and cyber incident investigation." },
      { label: "INTEL TOKENS", desc: "Forensic discoveries yield Intel Tokens used as tactical currency." },
      { label: "STRATEGIC HINTS", desc: "Redeem tokens to unlock algorithmic clues and bypass computational roadblocks." },
      { label: "MISSION SOLVE", desc: "Execute flawless mission completion before the countdown concludes." }
    ],
    investigationDetails: "Forensic modules simulate incidents containing emails, server logs, screenshots, browser histories, and network digital evidence. Participants pinpoint attack vectors and formulate mitigation strategies.",
    skillsTested: [
      "Algorithmic Problem Solving",
      "Cyber Threat Investigation",
      "Log & Digital Evidence Analysis",
      "Resource & Token Strategy",
      "Rapid Team Coordination"
    ]
  },
  {
    id: "edge-ai-tinyml",
    number: "03",
    title: "Edge AI & TinyML",
    publicTitle: "EDGE AI & TINYML: AI BEYOND THE CLOUD",
    subtitle: "Hands-on Workshop on Embedded Machine Intelligence",
    badge: "TECHNICAL WORKSHOP",
    accent: "#C77DFF",
    teamSize: "Individual / Open",
    participants: 160,
    duration: "Day 2 Morning",
    date: "15th October 2026",
    shortDescription: "A deep-dive technical workshop introducing on-device artificial intelligence, low-power machine learning, and model optimization on microcontrollers.",
    fullDescription: "Edge AI & TinyML: AI Beyond the Cloud is a technical workshop introducing Artificial Intelligence at the Edge and Tiny Machine Learning (TinyML). The workshop focuses on how artificial intelligence can break free from heavy cloud dependency to operate directly on low-power, resource-constrained hardware.\n\nParticipants discover quantization, pruning, and deployment pipelines to run responsive neural models on microcontrollers, edge sensors, and IoT hardware with zero network latency and maximum privacy.",
    highlights: [
      "Understanding TinyML paradigms and embedded neural networks",
      "Benchmarking Edge AI vs Cloud AI architectures",
      "Model quantization, pruning, and on-chip optimization",
      "Real-world industrial, medical, and autonomous IoT applications"
    ],
    topics: [
      "Introduction to Edge AI Paradigms",
      "Basics of TinyML and Low-Power Inference",
      "Edge AI vs Cloud AI: Latency, Bandwidth, and Privacy",
      "AI on Microcontrollers & Resource-Constrained IoT",
      "Model Optimization, Quantization, and Deployment Pipelines",
      "Real-world Industrial and Embedded Applications",
      "The Future Horizon of On-Device Intelligence"
    ],
    workflowNodes: [
      { step: "01", label: "CLOUD AI", desc: "High compute, high latency" },
      { step: "02", label: "EDGE AI", desc: "Distributed boundary processing" },
      { step: "03", label: "TINYML", desc: "Milliwatt neural execution" },
      { step: "04", label: "MICROCONTROLLER", desc: "Resource-constrained silicon" },
      { step: "05", label: "ON-DEVICE INTELLIGENCE", desc: "Autonomous local inference" }
    ],
    targetAudience: "Students and builders passionate about Artificial Intelligence, Machine Learning, IoT, Embedded Systems, Electronics, and Computer Science.",
    expectedOutcome: "Participants gain a practical understanding of how neural inference operates directly on microcontrollers, equipping them to build edge-native intelligent systems."
  },
  {
    id: "idea-alchemy",
    number: "04",
    title: "Idea Alchemy",
    publicTitle: "IDEA ALCHEMY",
    subtitle: "Business & Idea Pitch with Dynamic Pivot Challenge",
    badge: "STARTUP PITCH",
    accent: "#B86CFF",
    teamSize: "Team of 3",
    participants: 110,
    duration: "Day 2 Afternoon",
    date: "15th October 2026",
    shortDescription: "An innovation-driven startup arena where teams construct breakthrough concepts on the fly and defend them against unexpected market pivots and regulatory shocks.",
    fullDescription: "Idea Alchemy is an innovation-driven pitch competition designed to rigorously evaluate creativity, problem-solving, entrepreneurial mindset, technical feasibility, adaptability, business model viability, and executive communication.\n\nTeams generate startup concepts instantly based on assigned user, domain, and product combinations. In the second round, finalists face sudden business constraints—such as sudden regulatory shifts or resource drops—demanding agile strategic pivots.",
    highlights: [
      "Rapid on-the-spot startup conceptualization",
      "Unexpected dynamic business and technology constraints in Round 2",
      "Evaluation across technical feasibility, commercial potential, and agility",
      "High-caliber pitch presentation before seasoned entrepreneurial judges"
    ],
    rounds: [
      {
        round: "ROUND 1",
        title: "INNOVATION SPRINT",
        desc: "Teams combine one randomly selected Target User, one Technology Domain, and one Product/Service format. The pitch must concisely deliver: Problem Definition, Solution Architecture, Target Audience, Core Tech, Business Model, USP, and Market Potential. Top 5 teams qualify."
      },
      {
        round: "ROUND 2",
        title: "THE PIVOT CHALLENGE",
        desc: "Finalists are hit with unexpected real-world business constraints—e.g. 70% budget reduction, cloud infrastructure shutdown, severe regulatory compliance changes, or mandatory offline operation. Teams must pivot their strategy and present a viable adapted value proposition."
      }
    ],
    combinations: {
      targetUsers: ["Farmers", "Students", "Drivers", "Elderly People"],
      techDomains: ["AI", "IoT", "Cybersecurity", "Blockchain", "Cloud Computing"],
      productsServices: ["Mobile App", "Smart Watch", "Drone", "Digital Wallet"]
    },
    criteria: [
      { label: "Innovation & Creativity", percentage: 25 },
      { label: "Feasibility & Architecture", percentage: 20 },
      { label: "Problem-Solution Fit", percentage: 20 },
      { label: "Adaptability & Pivot Agility", percentage: 15 },
      { label: "Business Model & Monetization", percentage: 10 },
      { label: "Presentation & Communication", percentage: 10 }
    ]
  },
  {
    id: "codenomics",
    number: "05",
    title: "CodeNomics",
    publicTitle: "CODENOMICS",
    subtitle: "Code. Strategy. TechCoins.",
    badge: "GAMIFIED CODING",
    accent: "#7B2CBF",
    teamSize: "Team / Individual",
    participants: "Open Challenge",
    duration: "Day 2 Afternoon",
    date: "15th October 2026",
    shortDescription: "A gamified competitive programming challenge where teams strategically earn, invest, and risk TechCoins to gain algorithmic advantages.",
    fullDescription: "CodeNomics merges rapid algorithmic problem solving with economic strategy. Participants tackle technical coding rounds where solving sub-problems awards TechCoins.\n\nTeams must calculate when to hoard coins, when to bid for priority test cases, and when to unlock critical algorithmic tools. The competition rewards not just raw coding speed, but tactical resource management under time pressure.",
    highlights: [
      "Dynamic TechCoin economic mechanics intertwined with code execution",
      "Strategic tool purchases to accelerate problem resolution",
      "Real-time leaderboard shifting with economic and computational scores",
      "High-energy coding format testing mental clarity under economic constraints"
    ],
    skillsTested: [
      "Algorithmic Precision",
      "Strategic Resource Allocation",
      "Risk vs Reward Calculus",
      "Computational Speed",
      "Tactical Decision Making"
    ]
  },
  {
    id: "nano-mentoring",
    number: "06",
    title: "Nano Mentoring",
    publicTitle: "NANO MENTORING",
    subtitle: "High-Impact Industry Interactions",
    badge: "EXPERT MENTORSHIP",
    accent: "#8A2BE2",
    teamSize: "Open to Attendees",
    participants: 80,
    duration: "Day 1 Morning",
    date: "14th October 2026",
    shortDescription: "Intimate, high-density mentoring sessions connecting ambitious student technologists with veteran industry experts, tech leads, and researchers.",
    fullDescription: "An interactive mentoring session designed to connect participants with industry experts and experienced professionals. Nano Mentoring delivers direct, actionable guidance tailored to modern engineering realities.\n\nStudents interact with 6 distinguished judges and mentors across career acceleration, research trajectories, internship preparation, and breaking into top-tier tech organizations.",
    highlights: [
      "6 Industry Mentors & Judges providing direct feedback",
      "Targeted focus on career development and higher education",
      "Actionable expectations from modern hiring managers and engineering leads",
      "Unfiltered Q&A on emerging technologies and real-world engineering careers"
    ],
    topics: [
      "Engineering Career Trajectories & Specialization",
      "Higher Education & Research Opportunities Abroad",
      "Emerging Tech Stacks Shaping the Next Decade",
      "High-Value Internships & Industry Readiness",
      "What Tier-1 Tech Companies Really Look For"
    ],
    objectives: [
      "Actionable Career Guidance",
      "Direct Industry Exposure",
      "Lasting Professional Networks"
    ]
  },
  {
    id: "ieee-cs-benefits",
    number: "07",
    title: "Benefits of IEEE Computer Society",
    publicTitle: "BENEFITS OF IEEE COMPUTER SOCIETY",
    subtitle: "Unlocking Global Computing Opportunities",
    badge: "KEYNOTE & ORIENTATION",
    accent: "#9D4EDD",
    teamSize: "Open to Attendees",
    participants: 80,
    duration: "Day 1 Morning",
    date: "14th October 2026",
    shortDescription: "Explore how IEEE Computer Society membership unlocks international competitions, IEEE Xplore digital access, global scholarships, and leadership roles.",
    fullDescription: "The session introduces the immense opportunities available through the IEEE Computer Society—the world's leading community for computer science and engineering professionals.\n\nParticipants will discover how active membership connects them to global technical councils, exclusive conferences, international hackathons, peer-reviewed research publications, scholarships, and worldwide leadership appointments.",
    highlights: [
      "Introduction to global IEEE Computer Society technical chapters",
      "Navigating international student design & research competitions",
      "Leveraging IEEE Xplore digital library for cutting-edge projects",
      "Pathways to international leadership and student ambassador roles"
    ],
    topics: [
      "Global Technical Communities & Special Interest Groups",
      "International Design Competitions & Hackathons",
      "Research Publications, Digital Libraries & IEEE Xplore",
      "Prestigious International Scholarships & Travel Grants",
      "Student Leadership & Chapter Governance Opportunities",
      "Cross-Border Professional Networking with Industry Fellows"
    ],
    objectives: [
      "Promote IEEE CS Membership Value",
      "Increase Global Student Engagement",
      "Catalyze Long-Term Professional Development"
    ]
  }
];
