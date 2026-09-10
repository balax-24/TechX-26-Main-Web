import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, Sparkles, Terminal, Shield, Cpu, Lightbulb, Users, Award, Compass, Coins } from 'lucide-react';
import Countdown from '../components/Countdown';
import { eventsData } from '../data/events';
import { eventMeta } from '../data/contacts';

import logoImg from '../assets/logo/techx-logo-cropped.png';
import campusFacadeImg from '../assets/architecture/sairam-campus-facade.png';

export default function Home() {
  // 7 Official TechX'26 Events
  const officialEvents = eventsData;

  return (
    <div className="home-page-root">
      {/* ============================================================
          1. FULL-SCREEN HERO — EVENT CAMPAIGN COVER
          The Sri Sai Ram Institute of Technology facade as a 100vh canvas
      ============================================================ */}
      <section className="hero-cover-viewport" aria-label="TechX'26 Opening Cover">
        {/* Full-Screen Architectural Facade Canvas */}
        <div className="hero-arch-canvas" aria-hidden="true">
          <img 
            src={campusFacadeImg} 
            alt="Sri Sai Ram Institute of Technology Architectural Facade" 
            className="hero-arch-bg-img"
          />
          {/* Layered Lighting & Vignette Treatments */}
          <div className="hero-layer-center-darkening"></div>
          <div className="hero-layer-bottom-fade"></div>
          <div className="hero-layer-top-fade"></div>
          <div className="hero-layer-purple-atmosphere"></div>
          <div className="subtle-blueprint-grid"></div>
        </div>

        {/* Campaign Cover Hierarchy */}
        <div className="container hero-content-container">
          <div className="hero-campaign-block">
            {/* 1. Small Brand Identifier */}
            <div className="hero-brand-kicker">
              <span className="kicker-pulse-dot"></span>
              <span className="kicker-text">
                IEEE COMPUTER SOCIETY STUDENT BRANCH CHAPTER // SRI SAI RAM INSTITUTE OF TECHNOLOGY
              </span>
            </div>

            {/* 2. Official TechX Logo */}
            <div className="hero-emblem-wrap">
              <img 
                src={logoImg} 
                alt="TechX Official Logo" 
                className="hero-emblem-img"
              />
            </div>

            {/* 3. TECHX'26 Monumental Typography */}
            <h1 className="hero-monument-title">
              TECHX'26
            </h1>

            {/* 4. Primary Tagline */}
            <p className="hero-tagline-statement">
              IGNITE THE CODE. OWN THE FUTURE.
            </p>

            {/* 5. Editorial Information Strip */}
            <div className="hero-editorial-strip">
              <span className="strip-item">14 — 15 OCTOBER 2026</span>
              <span className="strip-sep">•</span>
              <span className="strip-item">SRI SAI RAM INSTITUTE OF TECHNOLOGY</span>
              <span className="strip-sep">•</span>
              <span className="strip-item">CHENNAI, TAMIL NADU</span>
            </div>

            {/* 6. Primary and Secondary CTAs */}
            <div className="hero-actions-group">
              <Link to="/register" className="btn btn-primary hero-cta-btn">
                <span>REGISTER NOW</span>
                <ArrowRight size={16} />
              </Link>
              <Link to="/events" className="btn btn-secondary hero-cta-btn">
                <span>EXPLORE EVENTS</span>
                <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </div>

        {/* Integrated Centered Countdown Section */}
        <div className="hero-countdown-dock">
          <div className="container dock-centered-container">
            <Countdown />
          </div>
        </div>
      </section>

      {/* ============================================================
          2. WHAT IS TECHX? (EDITORIAL SPLIT SECTION)
      ============================================================ */}
      <section className="section what-is-techx-section">
        <div className="container">
          <div className="what-is-editorial-layout">
            <div className="editorial-left-col">
              <span className="section-eyebrow">THE INITIATIVE</span>
              <h2 className="editorial-huge-heading">
                WHAT<br />
                IS<br />
                <span className="text-purple-highlight">TECHX?</span>
              </h2>
            </div>

            <div className="editorial-right-col">
              <p className="editorial-lead-statement">
                TECHX MADRAS is a technology-focused initiative organized by the IEEE Computer Society Student Branch Chapter at Sri Sai Ram Institute of Technology.
              </p>
              
              <div className="editorial-body-paragraphs">
                <p>
                  It brings together technical competition, hands-on learning, innovation, mentoring, and IEEE Computer Society engagement across two days.
                </p>
                <p>
                  Built as an arena of genuine engineering capability, TechX features the 24-hour VerdictX: Code & Conquer hackathon, Sherlock & Syntax cybersecurity CTF, hands-on Edge AI & TinyML workshop, startup pitch, and gamified competitive programming.
                </p>
              </div>

              <div className="editorial-link-action">
                <Link to="/about" className="editorial-text-link">
                  <span>DISCOVER OUR CHARTER & IEEE CS SBC HERITAGE</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          3. TECHX'26 AT A GLANCE (VERIFIED NUMERICAL TYPOGRAPHY)
      ============================================================ */}
      <section className="section glance-metrics-section">
        <div className="container">
          <div className="glance-head">
            <span className="section-eyebrow">THE HORIZON</span>
            <h2 className="glance-title">TECHX'26 AT A GLANCE</h2>
            <p className="glance-subtitle">
              Verified schedule parameters, experiences, and delegate scale under the IEEE Computer Society SBC charter.
            </p>
          </div>

          <div className="glance-metrics-row">
            <div className="glance-metric-item">
              <span className="metric-large-number">14—15</span>
              <span className="metric-label-tag">OCTOBER 2026</span>
              <p className="metric-desc">Two days of technology, competition, learning, and community</p>
            </div>

            <div className="glance-metric-divider"></div>

            <div className="glance-metric-item">
              <span className="metric-large-number">24H</span>
              <span className="metric-label-tag">VERDICTX</span>
              <p className="metric-desc">24-hour open-domain hackathon</p>
            </div>

            <div className="glance-metric-divider"></div>

            <div className="glance-metric-item">
              <span className="metric-large-number">CTF</span>
              <span className="metric-label-tag">SHERLOCK & SYNTAX</span>
              <p className="metric-desc">Cybersecurity Capture The Flag</p>
            </div>

            <div className="glance-metric-divider"></div>

            <div className="glance-metric-item">
              <span className="metric-large-number">07</span>
              <span className="metric-label-tag">EXPERIENCES</span>
              <p className="metric-desc">Edge AI, competitive programming, innovation, mentoring & IEEE CS engagement</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          4. THE TECHX EXPERIENCE (7 OFFICIAL EXPERIENCES)
      ============================================================ */}
      <section className="section experience-pillars-section">
        <div className="container">
          <div className="pillars-section-head">
            <span className="section-eyebrow">CONFERENCE PROGRAM</span>
            <h2 className="section-title">THE TECHX EXPERIENCE</h2>
            <p className="pillars-section-sub">
              Seven technical and professional experiences organized across Day 1 and Day 2.
            </p>
          </div>

          <div className="pillars-editorial-grid">
            {/* Experience 01 */}
            <Link to="/events/nano-mentoring" className="pillar-column">
              <div className="pillar-top-meta">
                <span className="pillar-index">01</span>
                <Users size={22} color="var(--purple-light)" />
              </div>
              <h3 className="pillar-title">NANO MENTORING</h3>
              <p className="pillar-text">
                Interaction session with experienced professionals providing practical insights, guidance, and industry perspectives for student developers.
              </p>
              <div className="pillar-footer-meta">
                <span>Campus Auditorium</span>
                <span>Day 1 // 10:00 AM</span>
              </div>
            </Link>

            {/* Experience 02 */}
            <Link to="/events/ieee-cs-benefits" className="pillar-column">
              <div className="pillar-top-meta">
                <span className="pillar-index">02</span>
                <Award size={22} color="var(--purple-light)" />
              </div>
              <h3 className="pillar-title">IEEE CS BENEFITS</h3>
              <p className="pillar-text">
                Engagement and awareness session highlighting career advancement, networking opportunities, professional development, and technological innovation.
              </p>
              <div className="pillar-footer-meta">
                <span>Campus Auditorium</span>
                <span>Day 1 // 10:00 AM</span>
              </div>
            </Link>

            {/* Experience 03 */}
            <Link to="/events/verdictx" className="pillar-column">
              <div className="pillar-top-meta">
                <span className="pillar-index">03</span>
                <Terminal size={22} color="var(--purple-light)" />
              </div>
              <h3 className="pillar-title">VERDICTX: CODE & CONQUER</h3>
              <p className="pillar-text">
                24-hour open-domain hackathon where teams develop innovative solutions, adapt to changing requirements, undergo technical review, and defend their project through a technical debate.
              </p>
              <div className="pillar-footer-meta">
                <span>Steve Jobs Hall</span>
                <span>Day 1 // 1:30 PM (24H Overnight)</span>
              </div>
            </Link>

            {/* Experience 04 */}
            <Link to="/events/sherlock-syntax" className="pillar-column">
              <div className="pillar-top-meta">
                <span className="pillar-index">04</span>
                <Shield size={22} color="var(--purple-light)" />
              </div>
              <h3 className="pillar-title">SHERLOCK & SYNTAX</h3>
              <p className="pillar-text">
                Standard skill-based cybersecurity Capture The Flag arena tackling web exploitation, cryptography, forensics, reverse engineering, and OSINT.
              </p>
              <div className="pillar-footer-meta">
                <span>Alpha Hall</span>
                <span>Day 2 // 9:00 AM – 12:15 PM</span>
              </div>
            </Link>

            {/* Experience 05 */}
            <Link to="/events/edge-ai-tinyml" className="pillar-column">
              <div className="pillar-top-meta">
                <span className="pillar-index">05</span>
                <Cpu size={22} color="var(--purple-light)" />
              </div>
              <h3 className="pillar-title">EDGE AI & TINYML</h3>
              <p className="pillar-text">
                Hands-on workshop introducing AI processing on edge devices, low-power machine learning principles, and real-time embedded applications.
              </p>
              <div className="pillar-footer-meta">
                <span>Apple Hall</span>
                <span>Day 2 // 10:45 AM – 12:15 PM</span>
              </div>
            </Link>

            {/* Experience 06 */}
            <Link to="/events/idea-alchemy" className="pillar-column">
              <div className="pillar-top-meta">
                <span className="pillar-index">06</span>
                <Lightbulb size={22} color="var(--purple-light)" />
              </div>
              <h3 className="pillar-title">IDEA ALCHEMY</h3>
              <p className="pillar-text">
                Innovation-driven startup competition combining random matrix problem cards in Round 1 and navigating dynamic business constraint cards in Round 2.
              </p>
              <div className="pillar-footer-meta">
                <span>Apple Hall</span>
                <span>Day 2 // 1:15 PM (Parallel Track)</span>
              </div>
            </Link>

            {/* Experience 07 */}
            <Link to="/events/codenomics" className="pillar-column">
              <div className="pillar-top-meta">
                <span className="pillar-index">07</span>
                <Coins size={22} color="var(--purple-light)" />
              </div>
              <h3 className="pillar-title">CODENOMICS</h3>
              <p className="pillar-text">
                Gamified competitive programming where teams strategically earn and spend TechCoins via the TechX Portal and HackerRank platforms.
              </p>
              <div className="pillar-footer-meta">
                <span>Alpha Hall</span>
                <span>Day 2 // 1:15 PM (Parallel Track)</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================
          5. FEATURED EVENTS (EDITORIAL EVENT ROSTER)
      ============================================================ */}
      <section className="section events-roster-section">
        <div className="container">
          <div className="roster-header-row">
            <div>
              <span className="section-eyebrow">OFFICIAL PROGRAM</span>
              <h2 className="section-title">FEATURED EVENTS</h2>
            </div>
            <Link to="/events" className="btn btn-secondary">
              <span>VIEW ALL 07 EVENTS</span>
              <ArrowRight size={15} />
            </Link>
          </div>

          <div className="events-editorial-list">
            {officialEvents.map((evt, idx) => (
              <Link 
                key={evt.id} 
                to={`/events/${evt.id}`} 
                className="event-editorial-row"
              >
                <div className="evt-row-index">
                  <span>0{idx + 1}</span>
                </div>

                <div className="evt-row-main">
                  <span className="evt-row-cat">{evt.badge || evt.subtitle}</span>
                  <h3 className="evt-row-title">{evt.title}</h3>
                  <p className="evt-row-desc">{evt.shortDescription}</p>
                </div>

                <div className="evt-row-meta">
                  <span className="evt-row-team">{evt.teamSize}</span>
                  <span className="evt-row-day">{evt.duration}</span>
                </div>

                <div className="evt-row-arrow">
                  <ArrowRight size={20} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          6. WHY ATTEND (DARK EDITORIAL SECTION)
      ============================================================ */}
      <section className="section why-attend-editorial-section">
        <div className="container">
          <div className="why-editorial-head">
            <span className="section-eyebrow">THE VALUE PROPOSITION</span>
            <h2 className="section-title">WHY ATTEND TECHX'26?</h2>
            <p className="why-editorial-sub">
              Source-supported development opportunities, professional IEEE networking, and hands-on technological learning.
            </p>
          </div>

          <div className="why-statements-grid">
            <div className="why-statement-item">
              <span className="why-num">01</span>
              <h4>REAL-WORLD PROBLEM SOLVING</h4>
              <p>Build, adapt, evaluate, and defend solutions through the multi-round VerdictX: Code & Conquer hackathon.</p>
            </div>

            <div className="why-statement-item">
              <span className="why-num">02</span>
              <h4>IEEE COMPUTER SOCIETY COMMUNITY</h4>
              <p>Connect with the IEEE Computer Society community and explore the value of professional membership, networking, and career development.</p>
            </div>

            <div className="why-statement-item">
              <span className="why-num">03</span>
              <h4>HANDS-ON EDGE AI</h4>
              <p>Explore Edge AI & TinyML through a hands-on workshop focused on AI processing on edge devices and real-time applications.</p>
            </div>

            <div className="why-statement-item">
              <span className="why-num">04</span>
              <h4>MENTORSHIP & INDUSTRY INSIGHTS</h4>
              <p>Gain practical insights, guidance, and industry perspectives through Nano Mentoring sessions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          7. PARTNERS (CLEAN TASTEFUL PLACEHOLDER)
      ============================================================ */}
      <section className="section partners-preview-section">
        <div className="container">
          <div className="partners-preview-head">
            <span className="section-eyebrow">POWERING TECHX'26</span>
            <h2 className="section-title">PARTNERS</h2>
            <p className="partners-preview-sub">
              Technology grows stronger when great organizations build together. Official industry sponsors, developer tooling platforms, and community partners supporting TechX'26 will be revealed soon.
            </p>
          </div>

          <div className="partners-announcement-card">
            <div className="announcement-pill">
              <Sparkles size={15} color="var(--purple-light)" />
              <span>PARTNERSHIP DESK</span>
            </div>
            <h3>PARTNER ANNOUNCEMENTS COMING SOON</h3>
            <p>
              Official partnership agreements are currently being finalized with leading enterprise organizations, hardware vendors, and tech communities.
            </p>

            <div className="empty-slots-row" aria-hidden="true">
              {[1, 2, 3, 4].map((slot) => (
                <div key={slot} className="empty-slot-pill">
                  <span className="slot-code">PARTNER 0{slot}</span>
                  <span className="slot-sub">Announcement Pending</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          8. FINAL MONUMENTAL CTA
      ============================================================ */}
      <section className="section final-cta-section">
        <div className="container">
          <div className="final-cta-monument">
            <span className="section-eyebrow">CONVERGENCE AWAITS</span>
            <h2 className="final-cta-title">
              IGNITE THE CODE.<br />
              <span className="text-purple-highlight">OWN THE FUTURE.</span>
            </h2>
            <p className="final-cta-dates">
              14 — 15 OCTOBER 2026 • SRI SAI RAM INSTITUTE OF TECHNOLOGY
            </p>
            <div className="final-cta-actions">
              <Link to="/register" className="btn btn-primary" style={{ padding: '1.1rem 2.5rem', fontSize: '0.95rem' }}>
                <span>REGISTER FOR TECHX'26</span>
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .home-page-root {
          background-color: var(--black);
          position: relative;
        }

        /* ============================================================
           1. FULL-SCREEN HERO COVER VIEWPORT
        ============================================================ */
        .hero-cover-viewport {
          position: relative;
          width: 100%;
          min-height: 100vh;
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding-top: var(--nav-height);
          overflow: hidden;
          background: #000000;
        }

        @media (max-height: 750px) {
          .hero-cover-viewport {
            height: auto;
            min-height: 100vh;
          }
        }

        /* Full-Screen Architectural Facade Canvas */
        .hero-arch-canvas {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: 0;
        }

        .hero-arch-bg-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 55%;
          filter: grayscale(100%) contrast(115%) brightness(0.62);
          opacity: 0.85;
          transform: scale(1.01);
        }

        /* Layered lighting & fades */
        .hero-layer-center-darkening {
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at 50% 46%, rgba(0, 0, 0, 0.52) 0%, rgba(0, 0, 0, 0.82) 75%, #000000 100%);
        }

        .hero-layer-bottom-fade {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 250px;
          background: linear-gradient(to bottom, transparent 0%, #000000 100%);
        }

        .hero-layer-top-fade {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 180px;
          background: linear-gradient(to bottom, rgba(0, 0, 0, 0.85) 0%, transparent 100%);
        }

        .hero-layer-purple-atmosphere {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 50% 38%, rgba(138, 43, 226, 0.16) 0%, transparent 62%);
          pointer-events: none;
        }

        /* Hero Content */
        .hero-content-container {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          flex: 1;
          text-align: center;
          padding-top: 1rem;
          padding-bottom: 2rem;
        }

        .hero-campaign-block {
          max-width: 1100px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .hero-brand-kicker {
          display: inline-flex;
          align-items: center;
          gap: 0.55rem;
          margin-bottom: 1.25rem;
        }

        .kicker-pulse-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--purple-light);
          box-shadow: 0 0 10px var(--purple-light);
        }

        .kicker-text {
          font-family: var(--font-mono);
          font-size: clamp(0.68rem, 1.2vw, 0.8rem);
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #D9D2E0;
        }

        /* Official TechX Emblem */
        .hero-emblem-wrap {
          margin-bottom: 0.5rem;
        }

        .hero-emblem-img {
          height: clamp(40px, 5.5vw, 62px);
          width: auto;
          filter: drop-shadow(0 0 20px rgba(184, 108, 255, 0.45));
        }

        /* Monumental TECHX'26 Title */
        .hero-monument-title {
          font-family: var(--font-display);
          font-size: clamp(5.5rem, 15vw, 13rem);
          letter-spacing: 0.04em;
          line-height: 0.85;
          text-transform: uppercase;
          color: #FFFFFF;
          margin: 0.25rem 0 1rem;
          text-shadow: 0 4px 30px rgba(0, 0, 0, 0.8);
        }

        /* Tagline */
        .hero-tagline-statement {
          font-family: var(--font-heading);
          font-size: clamp(1rem, 2.3vw, 1.75rem);
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--purple-light);
          margin-bottom: 1.5rem;
          text-shadow: 0 0 20px rgba(184, 108, 255, 0.3);
        }

        /* Editorial Info Strip */
        .hero-editorial-strip {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 0.85rem;
          font-family: var(--font-mono);
          font-size: clamp(0.72rem, 1.2vw, 0.85rem);
          letter-spacing: 0.12em;
          color: #DDD6E5;
          margin-bottom: 2rem;
          padding: 0.5rem 1rem;
        }

        .strip-sep {
          color: var(--purple-light);
        }

        /* CTAs */
        .hero-actions-group {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
          justify-content: center;
        }

        .hero-cta-btn {
          min-width: 180px;
          padding: 0.95rem 1.85rem;
        }

        /* Countdown Dock at bottom of hero */
        .hero-countdown-dock {
          position: relative;
          z-index: 2;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(4, 2, 7, 0.85);
          backdrop-filter: blur(14px);
          padding: 2.5rem 1rem;
        }

        .dock-centered-container {
          display: flex;
          align-items: center;
          justify-content: center;
          max-width: 850px;
          margin: 0 auto;
        }

        /* ============================================================
           2. WHAT IS TECHX? (EDITORIAL SECTION)
        ============================================================ */
        .what-is-techx-section {
          padding: 7.5rem 0;
        }

        .what-is-editorial-layout {
          display: grid;
          grid-template-columns: 1fr 1.6fr;
          gap: 5rem;
          align-items: start;
        }

        @media (max-width: 900px) {
          .what-is-editorial-layout {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
        }

        .editorial-huge-heading {
          font-family: var(--font-display);
          font-size: clamp(3.5rem, 8vw, 7.5rem);
          line-height: 0.88;
          letter-spacing: 0.03em;
          text-transform: uppercase;
        }

        .editorial-lead-statement {
          font-size: clamp(1.2rem, 2vw, 1.6rem);
          line-height: 1.5;
          font-weight: 500;
          color: #FFFFFF;
          margin-bottom: 1.5rem;
        }

        .editorial-body-paragraphs {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          font-size: 1.05rem;
          color: var(--muted);
          line-height: 1.75;
          margin-bottom: 2.25rem;
        }

        .editorial-text-link {
          display: inline-flex;
          align-items: center;
          gap: 0.65rem;
          font-family: var(--font-mono);
          font-size: 0.82rem;
          letter-spacing: 0.1em;
          color: var(--purple-light);
          border-bottom: 1px solid var(--border-purple);
          padding-bottom: 0.25rem;
          transition: var(--transition-fast);
        }

        .editorial-text-link:hover {
          color: #FFFFFF;
          border-color: #FFFFFF;
        }

        /* ============================================================
           3. TECHX'26 AT A GLANCE
        ============================================================ */
        .glance-metrics-section {
          padding: 6.5rem 0;
          background: #050308;
        }

        .glance-head {
          max-width: 650px;
          margin-bottom: 4rem;
        }

        .glance-title {
          font-size: clamp(2.2rem, 4.5vw, 3.5rem);
          text-transform: uppercase;
          margin-bottom: 0.5rem;
        }

        .glance-subtitle {
          font-size: 1rem;
          color: var(--muted);
        }

        .glance-metrics-row {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 2rem;
          flex-wrap: wrap;
        }

        .glance-metric-item {
          flex: 1;
          min-width: 200px;
          display: flex;
          flex-direction: column;
        }

        .metric-large-number {
          font-family: var(--font-display);
          font-size: clamp(3.8rem, 7vw, 6.5rem);
          line-height: 0.9;
          letter-spacing: 0.02em;
          color: #FFFFFF;
          margin-bottom: 0.5rem;
        }

        .metric-label-tag {
          font-family: var(--font-mono);
          font-size: 0.78rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--purple-light);
          margin-bottom: 0.5rem;
        }

        .metric-desc {
          font-size: 0.88rem;
          color: var(--muted);
          line-height: 1.5;
        }

        .glance-metric-divider {
          width: 1px;
          height: 100px;
          background: var(--border-subtle);
          align-self: center;
        }

        @media (max-width: 900px) {
          .glance-metric-divider {
            display: none;
          }
        }

        /* ============================================================
           4. THE EXPERIENCE (PILLARS)
        ============================================================ */
        .experience-pillars-section {
          padding: 7rem 0;
        }

        .pillars-section-head {
          max-width: 680px;
          margin-bottom: 4rem;
        }

        .pillars-section-sub {
          font-size: 1.1rem;
          color: var(--muted);
        }

        .pillars-editorial-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
        }

        @media (max-width: 1200px) {
          .pillars-editorial-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .pillars-editorial-grid {
            grid-template-columns: 1fr;
          }
        }

        .pillar-column {
          border-top: 1px solid var(--border);
          padding-top: 1.75rem;
          display: flex;
          flex-direction: column;
          text-decoration: none;
          transition: border-color 0.25s ease, transform 0.25s ease;
        }

        .pillar-column:hover {
          border-color: var(--purple-light);
          transform: translateY(-3px);
        }

        .pillar-column:hover .pillar-title {
          color: var(--purple-light);
        }

        .pillar-footer-meta {
          margin-top: auto;
          padding-top: 1.25rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--purple-light);
          letter-spacing: 0.08em;
          border-top: 1px dashed rgba(255, 255, 255, 0.1);
        }

        .pillar-top-meta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.25rem;
        }

        .pillar-index {
          font-family: var(--font-mono);
          font-size: 0.85rem;
          color: var(--purple-light);
          letter-spacing: 0.1em;
        }

        .pillar-title {
          font-size: 1.2rem;
          text-transform: uppercase;
          letter-spacing: 0.02em;
          margin-bottom: 0.75rem;
          color: #FFFFFF;
          line-height: 1.3;
        }

        .pillar-text {
          font-size: 0.92rem;
          color: var(--muted);
          line-height: 1.6;
        }

        /* ============================================================
           5. FEATURED EVENTS ROSTER
        ============================================================ */
        .events-roster-section {
          padding: 7rem 0;
          background: #060408;
        }

        .roster-header-row {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 3.5rem;
          flex-wrap: wrap;
          gap: 1.5rem;
        }

        .events-editorial-list {
          display: flex;
          flex-direction: column;
          border-top: 1px solid var(--border);
        }

        .event-editorial-row {
          display: grid;
          grid-template-columns: 50px 1fr auto 40px;
          gap: 2rem;
          align-items: center;
          padding: 2rem 0;
          border-bottom: 1px solid var(--border-subtle);
          transition: all 0.2s ease;
        }

        .event-editorial-row:hover {
          padding-left: 0.75rem;
          border-bottom-color: var(--border-purple);
        }

        .evt-row-index {
          font-family: var(--font-mono);
          font-size: 0.9rem;
          color: var(--purple-light);
        }

        .evt-row-cat {
          display: block;
          font-family: var(--font-mono);
          font-size: 0.7rem;
          letter-spacing: 0.15em;
          color: var(--purple-light);
          margin-bottom: 0.25rem;
          text-transform: uppercase;
        }

        .evt-row-title {
          font-size: clamp(1.3rem, 2.5vw, 1.8rem);
          text-transform: uppercase;
          letter-spacing: 0.02em;
          color: #FFFFFF;
          transition: color 0.2s ease;
          word-break: break-word;
        }

        .event-editorial-row:hover .evt-row-title {
          color: var(--purple-light);
        }

        .evt-row-desc {
          font-size: 0.9rem;
          color: var(--muted);
          margin-top: 0.2rem;
        }

        .evt-row-meta {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 0.2rem;
          font-family: var(--font-mono);
          font-size: 0.78rem;
          color: var(--muted);
        }

        .evt-row-team {
          color: #FFFFFF;
        }

        .evt-row-arrow {
          display: flex;
          justify-content: flex-end;
          color: var(--muted-dark);
          transition: transform 0.2s ease, color 0.2s ease;
        }

        .event-editorial-row:hover .evt-row-arrow {
          transform: translateX(4px);
          color: #FFFFFF;
        }

        @media (max-width: 900px) {
          .event-editorial-row {
            grid-template-columns: 40px 1fr 30px;
            gap: 1rem;
          }
          .evt-row-meta {
            display: none !important;
          }
        }

        @media (max-width: 480px) {
          .event-editorial-row {
            grid-template-columns: 28px 1fr 24px;
            gap: 0.75rem;
            padding: 1.25rem 0;
          }
          .hero-actions-group {
            flex-direction: column;
            width: 100%;
          }
          .hero-cta-btn {
            width: 100%;
            min-width: 0;
            max-width: 320px;
            text-align: center;
          }
        }

        /* ============================================================
           6. WHY ATTEND (DARK THEME)
        ============================================================ */
        .why-attend-editorial-section {
          padding: 6.5rem 0;
          background: rgba(9, 5, 16, 0.7);
          border-top: 1px solid var(--border-subtle);
          border-bottom: 1px solid var(--border-subtle);
        }

        .why-editorial-head {
          max-width: 680px;
          margin-bottom: 3.5rem;
        }

        .why-editorial-sub {
          font-size: 1.05rem;
          color: var(--muted);
          line-height: 1.6;
        }

        .why-statements-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
        }

        @media (max-width: 1024px) {
          .why-statements-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .why-statements-grid {
            grid-template-columns: 1fr;
          }
        }

        .why-statement-item {
          background: rgba(14, 9, 24, 0.75);
          border: 1px solid rgba(138, 43, 226, 0.22);
          border-radius: var(--radius-md);
          padding: 2.2rem 1.75rem;
          display: flex;
          flex-direction: column;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
          backdrop-filter: blur(8px);
          transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
        }

        .why-statement-item:hover {
          transform: translateY(-4px);
          border-color: var(--purple-light);
          box-shadow: 0 12px 32px rgba(138, 43, 226, 0.18);
        }

        .why-num {
          font-family: var(--font-mono);
          font-size: 0.85rem;
          color: var(--purple-light);
          font-weight: 700;
          letter-spacing: 0.12em;
          margin-bottom: 1.25rem;
        }

        .why-statement-item h4 {
          font-size: 1.08rem;
          color: #FFFFFF;
          text-transform: uppercase;
          letter-spacing: 0.03em;
          margin-bottom: 0.85rem;
          line-height: 1.35;
        }

        .why-statement-item p {
          font-size: 0.92rem;
          color: #B2A7C2;
          line-height: 1.6;
        }

        /* ============================================================
           7. PARTNERS PREVIEW
        ============================================================ */
        .partners-preview-section {
          padding: 7rem 0;
        }

        .partners-preview-head {
          max-width: 680px;
          margin-bottom: 3.5rem;
        }

        .partners-preview-sub {
          font-size: 1.05rem;
          color: var(--muted);
          line-height: 1.6;
        }

        .partners-announcement-card {
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          background: #08050C;
          padding: 3.5rem;
          text-align: center;
          max-width: 900px;
        }

        @media (max-width: 600px) {
          .partners-announcement-card {
            padding: 2.25rem 1.5rem;
          }
        }

        .announcement-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--purple-light);
          border: 1px solid var(--border-purple);
          background: rgba(138, 43, 226, 0.1);
          padding: 0.35rem 0.85rem;
          border-radius: var(--radius-sm);
          margin-bottom: 1.25rem;
        }

        .partners-announcement-card h3 {
          font-size: clamp(1.5rem, 3vw, 2.2rem);
          text-transform: uppercase;
          letter-spacing: 0.03em;
          margin-bottom: 0.75rem;
        }

        .partners-announcement-card p {
          max-width: 600px;
          margin: 0 auto 2.5rem;
          font-size: 0.95rem;
          color: var(--muted);
        }

        .empty-slots-row {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
          margin-bottom: 2.5rem;
        }

        @media (max-width: 768px) {
          .empty-slots-row {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .empty-slot-pill {
          border: 1px dashed var(--border);
          padding: 1.25rem 0.75rem;
          border-radius: var(--radius-sm);
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }

        .slot-code {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--purple-light);
        }

        .slot-sub {
          font-size: 0.78rem;
          color: var(--muted-dark);
        }

        .partner-inquire-row {
          display: flex;
          justify-content: center;
        }

        /* ============================================================
           8. FINAL CTA
        ============================================================ */
        .final-cta-section {
          padding: 8rem 0;
          background: radial-gradient(circle at 50% 50%, rgba(138, 43, 226, 0.12) 0%, transparent 60%), #000000;
          text-align: center;
        }

        .final-cta-monument {
          max-width: 900px;
          margin: 0 auto;
        }

        .final-cta-title {
          font-family: var(--font-display);
          font-size: clamp(3.5rem, 9vw, 7.5rem);
          line-height: 0.92;
          letter-spacing: 0.03em;
          text-transform: uppercase;
          margin: 1rem 0 1.25rem;
        }

        .final-cta-dates {
          font-family: var(--font-mono);
          font-size: clamp(0.85rem, 1.6vw, 1.1rem);
          letter-spacing: 0.16em;
          color: #DDD6E5;
          margin-bottom: 2.5rem;
        }

        .final-cta-actions {
          display: flex;
          justify-content: center;
        }
      `}</style>
    </div>
  );
}
