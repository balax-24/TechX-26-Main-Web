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
        desc: "Opening ceremonies, ceremonial address by dignitaries, and event briefing."
      },
      {
        time: "10:00 AM",
        title: "Nano Mentoring & Benefits of IEEE Computer Society Membership",
        venue: "Campus Auditorium",
        category: "Mentorship & Community",
        highlight: true,
        desc: "Industry mentoring interactions and orientation on global IEEE Computer Society membership advantages."
      },
      {
        time: "12:15 PM – 01:15 PM",
        title: "Lunch Break",
        venue: "Campus Dining Arena",
        category: "Break",
        highlight: false,
        desc: "Lunch and informal networking for participants and guests."
      },
      {
        time: "01:30 PM",
        title: "Commencement of Hackathon (VerdictX: Code & Conquer)",
        venue: "Steve Jobs Hall",
        category: "Hackathon",
        highlight: true,
        badge: "FLAGSHIP KICKOFF",
        desc: "Kickoff of the 24-hour open-domain hackathon; teams receive problem statements and start ideation."
      },
      {
        time: "03:30 PM",
        title: "Break",
        venue: "Steve Jobs Hall Foyer",
        category: "Break",
        highlight: false,
        desc: "Afternoon break before Round 1 presentations begin."
      },
      {
        time: "03:45 PM",
        title: "Round 1 Evaluation — Idea Validation & Presentation",
        venue: "Steve Jobs Hall",
        category: "Evaluation",
        highlight: false,
        desc: "Teams present proposed solution architectures and technology stacks (3 mins per team)."
      },
      {
        time: "04:30 PM",
        title: "Round 2 — Prototype Development",
        venue: "Steve Jobs Hall",
        category: "Engineering",
        highlight: false,
        desc: "Teams build working prototypes with modern tools, APIs, and libraries."
      },
      {
        time: "07:30 PM",
        title: "Dinner",
        venue: "Campus Dining Arena",
        category: "Break",
        highlight: false,
        desc: "Dinner break fueling teams for the evening sprint."
      },
      {
        time: "09:00 PM",
        title: "Round 2 Evaluation — Prototype Review & Dynamic Constraint Allocation",
        venue: "Steve Jobs Hall",
        category: "Evaluation",
        highlight: true,
        desc: "Judges evaluate prototypes and inject two dynamic technical constraints."
      },
      {
        time: "11:00 PM – 03:30 AM",
        title: "Prototype Enhancement & Development (Overnight Sprint)",
        venue: "Steve Jobs Hall",
        category: "Overnight Sprint",
        highlight: true,
        badge: "OVERNIGHT SPRINT",
        desc: "Continuous overnight sprint implementing dynamic constraints, testing, and hardening code."
      },
      {
        time: "12:00 AM",
        title: "Midnight Refreshment Break",
        venue: "Steve Jobs Hall",
        category: "Break",
        highlight: false,
        desc: "Midnight refreshments and coffee across hackathon bays."
      },
      {
        time: "03:30 AM – 04:30 AM",
        title: "Final Submission Window",
        venue: "Steve Jobs Hall",
        category: "Submission",
        highlight: true,
        desc: "Teams submit code repository, README, demo video, and slides."
      },
      {
        time: "04:30 AM – 05:30 AM",
        title: "Peer Project Review & Technical Analysis",
        venue: "Steve Jobs Hall",
        category: "Review",
        highlight: false,
        desc: "Cross-team peer evaluation and architectural review on assigned repositories."
      },
      {
        time: "08:30 AM – 10:30 AM",
        title: "Round 3 — Technical Debate & Project Defense",
        venue: "Steve Jobs Hall",
        category: "Final Defense",
        highlight: true,
        badge: "FINAL BENCH",
        desc: "Five-minute presentation followed by a seven-minute technical defense and debate."
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
        desc: "Check-in and badge collection for Day 2 competitive tracks and workshops."
      },
      {
        time: "09:00 AM – 12:15 PM",
        title: "Sherlock & Syntax — Cybersecurity Capture The Flag (CTF)",
        venue: "Alpha Hall",
        category: "Cybersecurity CTF",
        highlight: true,
        badge: "CYBERSECURITY CTF",
        desc: "Live 2.5-hour skill-based CTF across web exploitation, cryptography, forensics, and reverse engineering."
      },
      {
        time: "10:30 AM",
        title: "Refreshment Break",
        venue: "Central Foyer",
        category: "Break",
        highlight: false,
        desc: "Morning refreshments and tea."
      },
      {
        time: "10:45 AM – 12:15 PM",
        title: "Workshop — Edge AI & TinyML: AI Beyond the Cloud",
        venue: "Apple Hall",
        category: "Workshop",
        highlight: true,
        badge: "HANDS-ON WORKSHOP",
        desc: "Hands-on masterclass on low-latency machine learning deployment to edge microcontrollers."
      },
      {
        time: "12:15 PM – 01:15 PM",
        title: "Lunch Break",
        venue: "Campus Dining Arena",
        category: "Break",
        highlight: false,
        desc: "Lunch and networking for delegates, mentors, and speakers."
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
            desc: "Startup innovation pitches followed by the Round 2 finalist pivot challenge."
          },
          {
            title: "CodeNomics — Gamified Competitive Programming",
            time: "01:15 PM – 03:30 PM",
            venue: "Alpha Hall",
            badge: "COMPETITIVE PROGRAMMING",
            desc: "Gamified HackerRank problem solving powered by tactical TechCoin portal gameplay."
          }
        ],
        desc: "Idea Alchemy and CodeNomics run concurrently in separate halls."
      },
      {
        time: "03:30 PM",
        title: "Valedictory Ceremony, Prize Distribution & Closing Remarks",
        venue: "Campus Auditorium",
        category: "Grand Finale",
        highlight: true,
        badge: "VALEDICTORY",
        desc: "Announcement of winners across all tracks, certificate distribution, and closing address."
      }
    ]
  }
};
