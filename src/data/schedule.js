// TechX Madras 2026 - Official High-Level Schedule Data
// Authoritative Event Dates: 13–14 October 2026
// Single Source of Truth for Conference Itinerary

export const scheduleData = {
  day1: {
    date: "Tuesday, 13 October 2026",
    title: "DAY 01 — INAUGURATION, MENTORSHIP & 24-HOUR HACKATHON",
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
        badge: "CAREER & COMMUNITY",
        desc: "Industry mentoring interactions and orientation on global IEEE Computer Society membership advantages."
      },
      {
        time: "AFTERNOON",
        title: "VerdictX: Code & Conquer — 24-Hour Hackathon",
        venue: "Steve Jobs Hall",
        category: "Hackathon",
        highlight: true,
        badge: "FLAGSHIP 24-HOUR HACKATHON",
        desc: "Commencement of the 24-hour open-domain hackathon. Teams receive problem statements, architect solutions, and build working prototypes."
      }
    ]
  },
  day2: {
    date: "Wednesday, 14 October 2026",
    title: "DAY 02 — CYBERSECURITY CTF, EDGE AI, PITCH & CODING",
    subtitle: "Capture The Flag, hands-on TinyML workshop, startup pitch, gamified coding & grand valedictory.",
    timeline: [
      {
        time: "09:00 AM",
        title: "Sherlock & Syntax — Cybersecurity CTF",
        venue: "Alpha Hall",
        category: "Cybersecurity CTF",
        highlight: true,
        badge: "CYBERSECURITY CTF",
        desc: "Live skill-based Capture The Flag competition spanning web exploitation, cryptography, forensics, and reverse engineering."
      },
      {
        time: "10:45 AM",
        title: "Edge AI & TinyML: AI Beyond the Cloud",
        venue: "Apple Hall",
        category: "Workshop",
        highlight: true,
        badge: "HANDS-ON WORKSHOP",
        desc: "Hands-on masterclass on low-latency machine learning deployment to edge microcontrollers and hardware devices."
      },
      {
        time: "01:15 PM",
        title: "Parallel Afternoon Sessions",
        venue: "Apple Hall & Alpha Hall",
        category: "Parallel Tracks",
        highlight: true,
        isParallel: true,
        badge: "PARALLEL TRACKS",
        tracks: [
          {
            title: "Idea Alchemy — Business & Idea Pitch",
            time: "01:15 PM",
            venue: "Apple Hall",
            badge: "BUSINESS & IDEA PITCH",
            desc: "Startup innovation pitches followed by the finalist business constraint pivot challenge."
          },
          {
            title: "CodeNomics",
            time: "01:15 PM",
            venue: "Alpha Hall",
            badge: "COMPETITIVE PROGRAMMING",
            desc: "Gamified competitive programming with dynamic algorithmic challenges and strategic gameplay."
          }
        ],
        desc: "Idea Alchemy and CodeNomics run concurrently in parallel halls at 01:15 PM."
      },
      {
        time: "03:30 PM",
        title: "Valedictory, Prize Distribution & Closing Remarks",
        venue: "Campus Auditorium",
        category: "Grand Finale",
        highlight: true,
        badge: "VALEDICTORY",
        desc: "Announcement of winners across all competitive tracks, presentation of awards and certificates, and closing remarks."
      }
    ]
  }
};
