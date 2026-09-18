import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, ChevronRight, Sparkles, Terminal, Shield, Cpu,
  Lightbulb, Users, Award, Compass, Coins, Code, Zap, CheckCircle2
} from 'lucide-react';
import Countdown from '../components/Countdown';
import GlanceSection from '../components/GlanceSection';
import Reveal from '../components/Reveal';
import { eventsData } from '../data/events';
import { eventMeta } from '../data/contacts';

import campusFacadeImg from '../assets/architecture/sairam-campus-facade.png';

export default function Home() {
  const officialEvents = eventsData;

  // Group events for Featured Events section
  const hackathonEvents = officialEvents.filter(e => e.id === 'verdictx' || e.id === 'idea-alchemy');
  const technicalLabEvents = officialEvents.filter(e => e.id === 'sherlock-syntax' || e.id === 'edge-ai-tinyml');
  const competitiveDevEvents = officialEvents.filter(e => e.id === 'codenomics' || e.id === 'nano-mentoring' || e.id === 'ieee-cs-benefits');

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
            {/* 1. Brand Identifier Kicker */}
            <div className="hero-brand-kicker">
              <span className="kicker-pulse-dot"></span>
              <span className="kicker-text">
                IEEE COMPUTER SOCIETY STUDENT BRANCH CHAPTER // SRI SAI RAM INSTITUTE OF TECHNOLOGY
              </span>
            </div>

            {/* 2. TECHX'26 Monumental Typography (Single Clean Brand Mark, No Stacked Duplicate Logos) */}
            <h1 className="hero-monument-title">
              TECHX'26
            </h1>

            {/* 3. Primary Tagline */}
            <p className="hero-tagline-statement">
              IGNITE THE CODE. OWN THE FUTURE.
            </p>

            {/* 4. Editorial Information Strip */}
            <div className="hero-editorial-strip">
              <span className="strip-item">14 — 15 OCTOBER 2026</span>
              <span className="strip-sep">•</span>
              <span className="strip-item">SRI SAI RAM INSTITUTE OF TECHNOLOGY</span>
              <span className="strip-sep">•</span>
              <span className="strip-item">CHENNAI, TAMIL NADU</span>
            </div>

            {/* 5. Primary and Secondary CTAs */}
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
          2. WHAT IS TECHX? + THE TECHX JOURNEY (NATURAL PROGRESSION)
      ============================================================ */}
      <section className="section what-is-techx-section">
        <div className="container">
          <div className="what-is-editorial-layout">
            <Reveal variant="header" className="editorial-left-col">
              <span className="section-eyebrow">THE INITIATIVE & EVOLUTION</span>
              <h2 className="editorial-huge-heading" aria-label="WHAT IS TECHX?">
                WHAT<br />
                IS<br />
                <span className="text-purple-highlight">TECHX?</span>
              </h2>
            </Reveal>

            <Reveal variant="pop" delay={120} className="editorial-right-col">
              <p className="editorial-lead-statement">
                TECHX MADRAS is a premier technical symposium by the IEEE Computer Society SBC at Sri Sai Ram Institute of Technology, uniting competitive engineering, hands-on workshops, and IEEE mentorship across two days in Chennai.
              </p>

              {/* The TechX Journey Sub-section */}
              <div className="journey-summary-block">
                <div className="journey-block-header">
                  <span className="section-eyebrow" style={{ marginBottom: 0 }}>THE TECHX JOURNEY</span>
                  <h3 className="journey-block-title">FROM FOUNDATION TO FLAGSHIP</h3>
                </div>

                <div className="journey-progression-cards">
                  {/* TechX'25 */}
                  <div className="journey-edition-card">
                    <div className="edition-header-row">
                      <span className="edition-badge">TECHX'25</span>
                      <span className="edition-award-tag">1ST PLACE OUTSTANDING HOST</span>
                    </div>
                    <h4 className="edition-title">THE FOUNDATION & GLOBAL RECOGNITION</h4>
                    <p className="edition-desc">
                      TechX Madras 2025 earned the prestigious global <strong>Outstanding Host Award — 1st Place</strong> from the IEEE Computer Society SYP Committee.
                    </p>
                  </div>

                  {/* TechX'26 */}
                  <div className="journey-edition-card edition-card-highlight">
                    <div className="edition-header-row">
                      <span className="edition-badge edition-badge-active">TECHX'26</span>
                      <span className="edition-date-tag">14 — 15 OCTOBER 2026</span>
                    </div>
                    <h4 className="edition-title">THE NEXT CHAPTER</h4>
                    <p className="edition-desc">
                      Expanding technical frontiers with the 24-hour VerdictX hackathon, Sherlock & Syntax CTF, Edge AI & TinyML masterclass, and competitive programming.
                    </p>
                  </div>
                </div>
              </div>

              <div className="editorial-link-action">
                <Link to="/about" className="editorial-text-link">
                  <span>DISCOVER FULL CHAPTER CHARTER & LEADERSHIP</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============================================================
          3. TECHX'26 AT A GLANCE (STAGGERED SCROLL REVEAL MOTION)
      ============================================================ */}
      <GlanceSection />

      {/* ============================================================
          4. THE TECHX EXPERIENCE (EXPERIENCE PILLARS + FEATURED EVENTS)
      ============================================================ */}
      <section className="section experience-pillars-section">
        <div className="container">
          {/* Main Section Heading */}
          <Reveal variant="header" className="pillars-section-head">
            <span className="section-eyebrow">THE EXPERIENCE ARCHITECTURE</span>
            <h2 className="section-title">THE TECHX EXPERIENCE</h2>
            <p className="pillars-section-sub">
              What does a participant actually experience at TechX'26? A multi-dimensional journey grounded in genuine technical rigor.
            </p>
          </Reveal>

          {/* Experiential Pillars (Answering what participants experience) */}
          <Reveal variant="stagger" className="experience-dimensions-grid">
            <div className="experience-dimension-card reveal-card">
              <div className="dim-icon-wrap">
                <Terminal size={22} color="var(--purple-light)" />
              </div>
              <span className="dim-tag">DIMENSION 01</span>
              <h3 className="dim-title">COMPETE & BUILD</h3>
              <p className="dim-text">
                Push endurance and engineering capabilities in the 24-hour VerdictX open-domain hackathon and real-time algorithmic showdowns under dynamic judge constraints.
              </p>
            </div>

            <div className="experience-dimension-card reveal-card">
              <div className="dim-icon-wrap">
                <Shield size={22} color="var(--purple-light)" />
              </div>
              <span className="dim-tag">DIMENSION 02</span>
              <h3 className="dim-title">INVESTIGATE & SOLVE</h3>
              <p className="dim-text">
                Deconstruct vulnerability vectors, decipher cryptographic clues, and execute tactical forensics during the multi-round Sherlock & Syntax cybersecurity CTF.
              </p>
            </div>

            <div className="experience-dimension-card reveal-card">
              <div className="dim-icon-wrap">
                <Cpu size={22} color="var(--purple-light)" />
              </div>
              <span className="dim-tag">DIMENSION 03</span>
              <h3 className="dim-title">LEARN & DEPLOY</h3>
              <p className="dim-text">
                Step into on-device intelligence during the Edge AI & TinyML masterclass, flashing neural network models onto silicon hardware with zero cloud latency.
              </p>
            </div>

            <div className="experience-dimension-card reveal-card">
              <div className="dim-icon-wrap">
                <Lightbulb size={22} color="var(--purple-light)" />
              </div>
              <span className="dim-tag">DIMENSION 04</span>
              <h3 className="dim-title">PITCH & VALIDATE</h3>
              <p className="dim-text">
                Pitch commercially viable software architectures, venture ideas, and technical roadmaps to venture analysts and academic leaders in Idea Alchemy.
              </p>
            </div>

            <div className="experience-dimension-card reveal-card">
              <div className="dim-icon-wrap">
                <Users size={22} color="var(--purple-light)" />
              </div>
              <span className="dim-tag">DIMENSION 05</span>
              <h3 className="dim-title">MENTOR & CONNECT</h3>
              <p className="dim-text">
                Engage in direct dialogue with senior engineers in Nano Mentoring and connect with the global IEEE Computer Society professional network.
              </p>
            </div>
          </Reveal>

          {/* FEATURED EVENTS SUB-SECTION (INSIDE TECHX EXPERIENCE) */}
          <div className="featured-events-block">
            <Reveal variant="header" className="featured-events-header-row">
              <div>
                <span className="section-eyebrow">CONFERENCE TRACKS</span>
                <h3 className="featured-events-heading">FEATURED EVENTS</h3>
                <p className="featured-events-sub">
                  Seven carefully orchestrated events designed to challenge every facet of modern engineering.
                </p>
              </div>
              <Link to="/events" className="btn btn-secondary">
                <span>VIEW ALL 07 EVENTS</span>
                <ArrowRight size={15} />
              </Link>
            </Reveal>

            {/* Grouped Featured Events */}
            <div className="featured-groups-container">
              {/* Group 1: Hackathon & Innovation */}
              <div className="featured-group">
                <div className="featured-group-tag">
                  <span>TRACK 01 // HACKATHON & INNOVATION</span>
                </div>
                <div className="featured-group-grid">
                  {hackathonEvents.map((evt) => (
                    <Link key={evt.id} to={`/events/${evt.id}`} className="featured-event-card">
                      <div className="f-card-top">
                        <span className="f-num">{evt.number}</span>
                        <span className="f-badge">{evt.badge}</span>
                        <span className="f-day">{evt.dateShort}</span>
                      </div>
                      <h4 className="f-title">{evt.title}</h4>
                      <p className="f-sub">{evt.subtitle}</p>
                      <p className="f-desc">{evt.shortDescription}</p>
                      <div className="f-footer">
                        <span>{evt.venueRoom}</span>
                        <span className="f-arrow">EXPLORE →</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Group 2: Cybersecurity & Applied Labs */}
              <div className="featured-group">
                <div className="featured-group-tag">
                  <span>TRACK 02 // CYBERSECURITY & APPLIED LABS</span>
                </div>
                <div className="featured-group-grid">
                  {technicalLabEvents.map((evt) => (
                    <Link key={evt.id} to={`/events/${evt.id}`} className="featured-event-card">
                      <div className="f-card-top">
                        <span className="f-num">{evt.number}</span>
                        <span className="f-badge">{evt.badge}</span>
                        <span className="f-day">{evt.dateShort}</span>
                      </div>
                      <h4 className="f-title">{evt.title}</h4>
                      <p className="f-sub">{evt.subtitle}</p>
                      <p className="f-desc">{evt.shortDescription}</p>
                      <div className="f-footer">
                        <span>{evt.venueRoom}</span>
                        <span className="f-arrow">EXPLORE →</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Group 3: Competitive Programming & Mentorship */}
              <div className="featured-group">
                <div className="featured-group-tag">
                  <span>TRACK 03 // ALGORITHMS, MENTORING & COMMUNITY</span>
                </div>
                <div className="featured-group-grid">
                  {competitiveDevEvents.map((evt) => (
                    <Link key={evt.id} to={`/events/${evt.id}`} className="featured-event-card">
                      <div className="f-card-top">
                        <span className="f-num">{evt.number}</span>
                        <span className="f-badge">{evt.badge}</span>
                        <span className="f-day">{evt.dateShort}</span>
                      </div>
                      <h4 className="f-title">{evt.title}</h4>
                      <p className="f-sub">{evt.subtitle}</p>
                      <p className="f-desc">{evt.shortDescription}</p>
                      <div className="f-footer">
                        <span>{evt.venueRoom}</span>
                        <span className="f-arrow">EXPLORE →</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          5. WHY ATTEND TECHX'26? (THE VALUE PROPOSITION)
      ============================================================ */}
      <section className="section why-attend-editorial-section">
        <div className="container">
          <Reveal variant="header" className="why-editorial-head">
            <span className="section-eyebrow">THE VALUE PROPOSITION</span>
            <h2 className="section-title">WHY ATTEND TECHX'26?</h2>
            <p className="why-editorial-sub">
              Source-supported development opportunities, professional IEEE networking, and hands-on technological learning.
            </p>
          </Reveal>

          <Reveal variant="stagger" className="why-statements-grid">
            <div className="why-statement-item reveal-card">
              <span className="why-num">01</span>
              <h4>REAL-WORLD PROBLEM SOLVING</h4>
              <p>Build, adapt, evaluate, and defend solutions through the multi-round VerdictX: Code & Conquer hackathon under dynamic constraints.</p>
            </div>

            <div className="why-statement-item reveal-card">
              <span className="why-num">02</span>
              <h4>IEEE COMPUTER SOCIETY COMMUNITY</h4>
              <p>Connect with the IEEE Computer Society community and explore the value of professional membership, networking, and career opportunities.</p>
            </div>

            <div className="why-statement-item reveal-card">
              <span className="why-num">03</span>
              <h4>HANDS-ON EDGE AI</h4>
              <p>Explore Edge AI & TinyML through a laboratory masterclass focused on model deployment to microcontrollers and sensor hardware.</p>
            </div>

            <div className="why-statement-item reveal-card">
              <span className="why-num">04</span>
              <h4>MENTORSHIP & INDUSTRY INSIGHTS</h4>
              <p>Gain practical insights, guidance, and industry perspectives through Nano Mentoring sessions with practicing engineers.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================================================
          6. PARTNERS (CLEAN STATUS CARD, NO FAKE PARTNERS)
      ============================================================ */}
      <section className="section partners-preview-section">
        <div className="container">
          <div className="partners-editorial-split">
            <Reveal variant="pop" className="partners-preview-head">
              <span className="section-eyebrow">POWERING TECHX'26</span>
              <h2 className="section-title">PARTNERS</h2>
              <p className="partners-preview-sub">
                Official industry sponsors, developer tooling platforms, and community partners supporting TechX'26 will be announced soon.
              </p>
              <div className="partners-head-link">
                <Link to="/partners" className="editorial-text-link">
                  <span>EXPLORE PARTNERSHIP DIRECTORY</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </Reveal>

            <Reveal variant="card" delay={120} className="partners-announcement-card">
              <div className="announcement-pill">
                <Sparkles size={15} color="var(--purple-light)" />
                <span>PARTNERSHIP DESK</span>
              </div>
              <h3 className="announcement-card-heading">PARTNERSHIP ANNOUNCEMENTS</h3>
              <div className="announcement-status-tag">Coming soon</div>
              <p className="announcement-card-copy">
                Official TechX'26 partners will be listed here upon confirmation as enterprise agreements and community sponsorships are finalized.
              </p>
              <div className="partners-status-strip">
                <span className="status-label">OFFICIAL LIAISON //</span>
                <span className="status-text">{eventMeta.email}</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============================================================
          7. FINAL MONUMENTAL CTA
      ============================================================ */}
      <Reveal as="section" variant="pop" className="section final-cta-section">
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
      </Reveal>

      <style>{`
        .home-page-root {
          background-color: var(--black);
          position: relative;
        }

        /* 1. Hero Cover Viewport */
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

        .hero-arch-canvas {
          position: absolute;
          inset: 0;
          z-index: 1;
          overflow: hidden;
          pointer-events: none;
        }

        .hero-arch-bg-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 35%;
          filter: grayscale(100%) contrast(120%) brightness(55%);
          transform: scale(1.02);
          will-change: transform;
        }

        .hero-layer-center-darkening {
          position: absolute;
          inset: 0;
          background: radial-gradient(
            circle at center,
            rgba(0, 0, 0, 0.45) 0%,
            rgba(0, 0, 0, 0.75) 60%,
            rgba(0, 0, 0, 0.95) 100%
          );
        }

        .hero-layer-bottom-fade {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 45%;
          background: linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.85) 60%, #000000 100%);
        }

        .hero-layer-top-fade {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 25%;
          background: linear-gradient(180deg, rgba(0, 0, 0, 0.8) 0%, transparent 100%);
        }

        .hero-layer-purple-atmosphere {
          position: absolute;
          inset: 0;
          background: radial-gradient(
            ellipse 80% 50% at 50% 45%,
            rgba(138, 43, 226, 0.18) 0%,
            rgba(78, 20, 140, 0.08) 50%,
            transparent 80%
          );
          mix-blend-mode: screen;
        }

        .subtle-blueprint-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(to right, rgba(255, 255, 255, 0.035) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.035) 1px, transparent 1px);
          background-size: 50px 50px;
          opacity: 0.85;
        }

        .hero-content-container {
          position: relative;
          z-index: 2;
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem 1.5rem 1rem;
        }

        .hero-campaign-block {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          max-width: 1000px;
          margin: 0 auto;
        }

        .hero-brand-kicker {
          display: inline-flex;
          align-items: center;
          gap: 0.65rem;
          background: rgba(138, 43, 226, 0.15);
          border: 1px solid rgba(184, 108, 255, 0.35);
          border-radius: 9999px;
          padding: 0.35rem 1rem;
          margin-bottom: 1.25rem;
          backdrop-filter: blur(10px);
        }

        .kicker-pulse-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--purple-light);
          box-shadow: 0 0 10px var(--purple-light);
          animation: pulseGlow 1.8s infinite;
        }

        .kicker-text {
          font-family: var(--font-mono);
          font-size: clamp(0.65rem, 1.2vw, 0.76rem);
          font-weight: 600;
          letter-spacing: 0.12em;
          color: var(--off-white);
        }

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

        .hero-tagline-statement {
          font-family: var(--font-mono);
          font-size: clamp(0.9rem, 1.8vw, 1.35rem);
          font-weight: 700;
          letter-spacing: 0.2em;
          color: var(--purple-light);
          text-transform: uppercase;
          margin-bottom: 1.75rem;
          text-shadow: 0 2px 15px rgba(184, 108, 255, 0.3);
        }

        .hero-editorial-strip {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.25rem;
          flex-wrap: wrap;
          font-family: var(--font-mono);
          font-size: clamp(0.72rem, 1.2vw, 0.84rem);
          letter-spacing: 0.08em;
          color: var(--off-white);
          margin-bottom: 2.25rem;
          opacity: 0.9;
        }

        .strip-sep {
          color: var(--purple-light);
        }

        .hero-actions-group {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .hero-cta-btn {
          min-width: 190px;
        }

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

        /* 2. What is TechX & The Journey */
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
          margin-bottom: 2.5rem;
        }

        /* The Journey Box */
        .journey-summary-block {
          background: #0A0612;
          border: 1px solid rgba(138, 43, 226, 0.35);
          border-radius: var(--radius-md);
          padding: 2.25rem 2rem;
          margin-bottom: 2.5rem;
        }

        .journey-block-header {
          margin-bottom: 1.5rem;
        }

        .journey-block-title {
          font-size: 1.3rem;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          color: var(--white);
          margin-top: 0.25rem;
        }

        .journey-progression-cards {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }

        @media (max-width: 700px) {
          .journey-progression-cards {
            grid-template-columns: 1fr;
          }
        }

        .journey-edition-card {
          background: rgba(14, 9, 24, 0.6);
          border: 1px solid var(--border);
          border-radius: var(--radius-sm);
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
        }

        .edition-card-highlight {
          border-color: rgba(184, 108, 255, 0.5);
          background: rgba(138, 43, 226, 0.1);
          box-shadow: 0 4px 20px rgba(138, 43, 226, 0.15);
        }

        .edition-header-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 0.75rem;
        }

        .edition-badge {
          font-family: var(--font-mono);
          font-size: 0.78rem;
          font-weight: 700;
          color: var(--white);
          background: #190E2C;
          border: 1px solid var(--border-purple);
          padding: 0.2rem 0.65rem;
          border-radius: var(--radius-sm);
        }

        .edition-badge-active {
          background: var(--purple);
          border-color: var(--purple-light);
        }

        .edition-award-tag {
          font-family: var(--font-mono);
          font-size: 0.68rem;
          color: var(--purple-light);
          letter-spacing: 0.06em;
          font-weight: 600;
        }

        .edition-date-tag {
          font-family: var(--font-mono);
          font-size: 0.68rem;
          color: var(--off-white);
          letter-spacing: 0.06em;
        }

        .edition-title {
          font-size: 1.05rem;
          text-transform: uppercase;
          color: var(--white);
          margin-bottom: 0.6rem;
        }

        .edition-desc {
          font-size: 0.88rem;
          color: var(--muted);
          line-height: 1.55;
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

        /* 4. The TechX Experience Section */
        .experience-pillars-section {
          padding: 7rem 0;
          border-top: 1px solid var(--border-subtle);
        }

        .pillars-section-head {
          max-width: 740px;
          margin-bottom: 3.5rem;
        }

        .pillars-section-sub {
          font-size: 1.15rem;
          color: var(--muted);
        }

        /* Experiential Dimensions Grid */
        .experience-dimensions-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 1.5rem;
          margin-bottom: 5.5rem;
        }

        @media (max-width: 1100px) {
          .experience-dimensions-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 768px) {
          .experience-dimensions-grid {
            grid-template-columns: 1fr;
          }
        }

        .experience-dimension-card {
          background: #0B0714;
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          padding: 2rem 1.65rem;
          display: flex;
          flex-direction: column;
          transition: var(--transition-normal);
        }

        .experience-dimension-card:hover {
          border-color: var(--purple-light);
          transform: translateY(-4px);
          box-shadow: 0 12px 30px rgba(138, 43, 226, 0.2);
        }

        .dim-icon-wrap {
          width: 44px;
          height: 44px;
          border-radius: var(--radius-sm);
          background: rgba(138, 43, 226, 0.12);
          border: 1px solid rgba(138, 43, 226, 0.35);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.25rem;
        }

        .dim-tag {
          font-family: var(--font-mono);
          font-size: 0.68rem;
          color: var(--purple-light);
          letter-spacing: 0.14em;
          margin-bottom: 0.5rem;
        }

        .dim-title {
          font-size: 1.2rem;
          color: var(--white);
          text-transform: uppercase;
          margin-bottom: 0.75rem;
          line-height: 1.25;
        }

        .dim-text {
          font-size: 0.88rem;
          color: var(--muted);
          line-height: 1.55;
        }

        /* FEATURED EVENTS BLOCK INSIDE TECHX EXPERIENCE */
        .featured-events-block {
          padding-top: 3rem;
          border-top: 1px solid var(--border-subtle);
        }

        .featured-events-header-row {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 3rem;
          flex-wrap: wrap;
          gap: 1.5rem;
        }

        .featured-events-heading {
          font-size: clamp(2rem, 4vw, 3rem);
          text-transform: uppercase;
          color: var(--white);
          margin-top: 0.25rem;
        }

        .featured-events-sub {
          font-size: 1.05rem;
          color: var(--muted);
          margin-top: 0.5rem;
        }

        .featured-groups-container {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }

        .featured-group {
          background: rgba(8, 4, 15, 0.6);
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          padding: 2rem 2.25rem;
        }

        .featured-group-tag {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          letter-spacing: 0.12em;
          color: var(--purple-light);
          font-weight: 700;
          margin-bottom: 1.5rem;
          padding-bottom: 0.75rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .featured-group-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.75rem;
        }

        .featured-event-card {
          background: #0D0818;
          border: 1px solid rgba(138, 43, 226, 0.25);
          border-radius: var(--radius-sm);
          padding: 1.75rem;
          display: flex;
          flex-direction: column;
          transition: all 0.2s ease;
          text-decoration: none;
        }

        .featured-event-card:hover {
          border-color: var(--purple-light);
          transform: translateY(-3px);
          background: #120B22;
          box-shadow: 0 10px 30px rgba(138, 43, 226, 0.2);
        }

        .f-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1rem;
        }

        .f-num {
          font-family: var(--font-display);
          font-size: 1.3rem;
          color: var(--purple-light);
        }

        .f-badge {
          font-family: var(--font-mono);
          font-size: 0.68rem;
          letter-spacing: 0.1em;
          color: var(--white);
          background: var(--purple);
          padding: 0.2rem 0.6rem;
          border-radius: var(--radius-sm);
          font-weight: 700;
        }

        .f-day {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--muted);
        }

        .f-title {
          font-size: 1.35rem;
          text-transform: uppercase;
          color: var(--white);
          margin-bottom: 0.35rem;
          line-height: 1.2;
        }

        .f-sub {
          font-family: var(--font-mono);
          font-size: 0.78rem;
          color: var(--purple-light);
          margin-bottom: 0.75rem;
        }

        .f-desc {
          font-size: 0.9rem;
          color: var(--muted);
          line-height: 1.5;
          margin-bottom: 1.5rem;
          flex: 1;
        }

        .f-footer {
          margin-top: auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--muted);
          padding-top: 1rem;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
        }

        .f-arrow {
          color: var(--purple-light);
          font-weight: 700;
          transition: transform 0.2s;
        }

        .featured-event-card:hover .f-arrow {
          transform: translateX(4px);
          color: #FFFFFF;
        }

        /* 5. Why Attend */
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

        /* 6. Partners Preview */
        .partners-preview-section {
          padding: 7rem 0;
          background: #040206;
        }

        .partners-editorial-split {
          display: grid;
          grid-template-columns: 1.15fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        @media (max-width: 960px) {
          .partners-editorial-split {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
        }

        .partners-preview-sub {
          font-size: 1.05rem;
          color: var(--muted);
          line-height: 1.65;
          margin-bottom: 1.75rem;
        }

        .partners-announcement-card {
          background: #0A0612;
          border: 1px solid rgba(138, 43, 226, 0.35);
          border-radius: var(--radius-md);
          padding: 2.75rem 2.25rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          box-shadow: 0 12px 35px rgba(0, 0, 0, 0.5);
        }

        .announcement-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-mono);
          font-size: 0.72rem;
          letter-spacing: 0.12em;
          color: var(--purple-light);
          align-self: flex-start;
        }

        .announcement-card-heading {
          font-size: 1.5rem;
          text-transform: uppercase;
          color: #FFFFFF;
        }

        .announcement-status-tag {
          display: inline-block;
          font-family: var(--font-mono);
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--purple-light);
          background: rgba(138, 43, 226, 0.15);
          border: 1px solid rgba(184, 108, 255, 0.4);
          padding: 0.35rem 0.85rem;
          border-radius: var(--radius-sm);
          align-self: flex-start;
        }

        .announcement-card-copy {
          font-size: 0.92rem;
          color: var(--muted);
          line-height: 1.6;
        }

        .partners-status-strip {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          margin-top: 0.75rem;
          padding-top: 1rem;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .status-label {
          color: var(--purple-light);
        }

        .status-text {
          color: var(--off-white);
        }

        /* 7. Final Monumental CTA */
        .final-cta-section {
          padding: 9rem 0 10rem;
          background: radial-gradient(circle at 50% 60%, rgba(138, 43, 226, 0.14) 0%, #000000 70%);
          border-top: 1px solid var(--border-subtle);
        }

        .final-cta-monument {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          max-width: 900px;
          margin: 0 auto;
        }

        .final-cta-title {
          font-family: var(--font-display);
          font-size: clamp(3.5rem, 8.5vw, 7.5rem);
          line-height: 0.9;
          letter-spacing: 0.03em;
          text-transform: uppercase;
          margin: 1.25rem 0 1.5rem;
        }

        .final-cta-dates {
          font-family: var(--font-mono);
          font-size: clamp(0.85rem, 1.5vw, 1.05rem);
          letter-spacing: 0.12em;
          color: var(--muted);
          margin-bottom: 2.75rem;
        }
      `}</style>
    </div>
  );
}
