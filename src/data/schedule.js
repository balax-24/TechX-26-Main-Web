// TechX Madras 2026 - Official Schedule Data
// Source: Official TechX Proposal & Event Documentation
// Room Assignments: Hackathon in Steve Jobs Hall; CTF & CodeNomics in Alpha Hall; Workshop & Pitch in Apple Hall.

export const scheduleData = {
  day1: {
    date: "Wednesday, 14 October 2026",
    title: "DAY 01 — INAUGURATION & 24-HOUR OVERNIGHT HACKATHON",
    subtitle: "From inaugural briefing to 24-hour continuous prototype engineering.",
    timeline: [
      {
        time: "09:00 AM",
        title: "Inauguration and Event Briefing",
        venue: "Campus Auditorium",
        category: "General",
        highlight: false,
        desc: "Official opening ceremonies, ceremonial address by dignitaries, and comprehensive event briefing."
      },
      {
        time: "10:00 AM",
        title: "Nano Mentoring & Benefits of IEEE Computer Society Membership",
        venue: "Campus Auditorium",
        category: "Mentorship & Community",
        highlight: true,
        desc: "Interactive session with experienced professionals offering practical insights and career perspectives, alongside an orientation on global IEEE Computer Society membership advantages."
      },
      {
        time: "12:15 PM – 01:15 PM",
        title: "Lunch Break",
        venue: "Campus Dining Arena",
        category: "Break",
        highlight: false,
        desc: "Lunch and informal networking for all participants, faculty, and guests."
      },
      {
        time: "01:30 PM",
        title: "Commencement of Hackathon (VerdictX: Code & Conquer)",
        venue: "Steve Jobs Hall",
        category: "Hackathon",
        highlight: true,
        badge: "FLAGSHIP KICKOFF",
        desc: "Official kickoff of the 24-hour open-domain hackathon. Teams receive unique problem statements and begin ideation."
      },
      {
        time: "03:30 PM",
        title: "Break",
        venue: "Steve Jobs Hall Foyer",
        category: "Break",
        highlight: false,
        desc: "Brief afternoon break before Round 1 presentations begin."
      },
      {
        time: "03:45 PM",
        title: "Round 1 Evaluation — Idea Validation & Presentation",
        venue: "Steve Jobs Hall",
        category: "Evaluation",
        highlight: false,
        desc: "Teams present their proposed solution, features, architecture, technology stack, and expected impact (3 minutes per team)."
      },
      {
        time: "04:30 PM",
        title: "Round 2 — Prototype Development",
        venue: "Steve Jobs Hall",
        category: "Engineering",
        highlight: false,
        desc: "Teams develop a working prototype. AI tools, open-source libraries, APIs, and development resources are permitted."
      },
      {
        time: "07:30 PM",
        title: "Dinner",
        venue: "Campus Dining Arena",
        category: "Break",
        highlight: false,
        desc: "Dinner fueling teams for the evening prototype evaluation and overnight development sprint."
      },
      {
        time: "09:00 PM",
        title: "Round 2 Evaluation — Prototype Review & Dynamic Constraint Allocation",
        venue: "Steve Jobs Hall",
        category: "Evaluation",
        highlight: true,
        desc: "Judges review prototypes and introduce two dynamic constraints (e.g. offline functionality, accessibility, or 1M-user scalability) that teams must address."
      },
      {
        time: "11:00 PM – 03:30 AM",
        title: "Prototype Enhancement & Development (Overnight Sprint)",
        venue: "Steve Jobs Hall",
        category: "Overnight Sprint",
        highlight: true,
        badge: "OVERNIGHT SPRINT",
        desc: "Continuous overnight engineering sprint: implementing dynamic constraints, code hardening, testing, and deliverable preparation."
      },
      {
        time: "12:00 AM",
        title: "Midnight Refreshment Break",
        venue: "Steve Jobs Hall",
        category: "Break",
        highlight: false,
        desc: "Midnight refreshments, coffee, and energy stations across hackathon bays."
      },
      {
        time: "03:30 AM – 04:30 AM",
        title: "Final Submission Window",
        venue: "Steve Jobs Hall",
        category: "Submission",
        highlight: true,
        desc: "Teams submit deliverables: GitHub Repository, README documentation, Demo Video, and Final PPT."
      },
      {
        time: "04:30 AM – 05:30 AM",
        title: "Peer Project Review & Technical Analysis",
        venue: "Steve Jobs Hall",
        category: "Review",
        highlight: false,
        desc: "Teams are randomly assigned another team's repository to evaluate strengths, weaknesses, bugs, security issues, UI/UX, and scalability."
      },
      {
        time: "08:30 AM – 10:30 AM",
        title: "Round 3 — Technical Debate & Project Defense",
        venue: "Steve Jobs Hall",
        category: "Final Defense",
        highlight: true,
        badge: "FINAL BENCH",
        desc: "Teams deliver a 5-minute project presentation followed by a 7-minute technical defense and debate responding to peer critiques and judge inquiries."
      }
    ]
  },
  day2: {
    date: "Thursday, 15 October 2026",
    title: "DAY 02 — CYBERSECURITY CTF, EDGE AI, PITCH & CODING",
    subtitle: "Capture The Flag, hands-on TinyML workshop, startup pitch, gamified coding & grand valedictory.",
    timeline: [
      {
        time: "08:30 AM – 09:00 AM",
        title: "Day 2 Registration Desk",
        venue: "Main Concourse",
        category: "General",
        highlight: false,
        desc: "Badging and participant check-in for Day 2 competitive tracks and workshop attendees."
      },
      {
        time: "09:00 AM – 12:15 PM",
        title: "Sherlock & Syntax — Cybersecurity Capture The Flag (CTF)",
        venue: "Alpha Hall",
        category: "Cybersecurity CTF",
        highlight: true,
        badge: "CYBERSECURITY CTF",
        desc: "Standard skill-based CTF across Web Exploitation, Cryptography, Forensics, Reverse Engineering, OSINT, and Misc (30 teams of 3; live automated scoring)."
      },
      {
        time: "10:30 AM",
        title: "Refreshment Break",
        venue: "Central Foyer",
        category: "Break",
        highlight: false,
        desc: "Morning tea and refreshments."
      },
      {
        time: "10:45 AM – 12:15 PM",
        title: "Workshop — Edge AI & TinyML: AI Beyond the Cloud",
        venue: "Apple Hall",
        category: "Workshop",
        highlight: true,
        badge: "HANDS-ON WORKSHOP",
        desc: "Hands-on workshop introducing AI processing on edge devices, low-power machine intelligence, and real-time embedded applications (160 participants)."
      },
      {
        time: "12:15 PM – 01:15 PM",
        title: "Lunch Break",
        venue: "Campus Dining Arena",
        category: "Break",
        highlight: false,
        desc: "Lunch and networking for delegates, speakers, and mentors."
      },
      {
        time: "01:15 PM",
        title: "Parallel Afternoon Sessions",
        venue: "Apple Hall & Alpha Hall",
        category: "Parallel Tracks",
        highlight: true,
        isParallel: true,
        badge: "CONCURRENT SESSIONS",
        tracks: [
          {
            title: "Idea Alchemy — Business & Idea Pitch",
            time: "01:15 PM – 03:00 PM",
            venue: "Apple Hall",
            badge: "BUSINESS & IDEA PITCH",
            desc: "Innovation-driven startup competition: Round 1 Innovation Sprint from random matrix card combinations, followed by Round 2 Pivot Challenge for top 5 finalists."
          },
          {
            title: "CodeNomics — Gamified Competitive Programming",
            time: "01:15 PM – 03:30 PM",
            venue: "Alpha Hall",
            badge: "COMPETITIVE PROGRAMMING",
            desc: "Gamified coding arena where teams strategically earn TechCoins via TechX Portal non-programming puzzles and spend them in the TechX Market while solving HackerRank challenges."
          }
        ],
        desc: "Idea Alchemy and CodeNomics run concurrently in separate halls. Delegates participate in their registered event."
      },
      {
        time: "03:30 PM",
        title: "Valedictory Ceremony, Prize Distribution & Closing Remarks",
        venue: "Campus Auditorium",
        category: "Grand Finale",
        highlight: true,
        badge: "VALEDICTORY",
        desc: "Grand valedictory ceremony, announcement of winners across all tracks, certificate distributions, and official closing address."
      }
    ]
  }
};
