import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, Award } from 'lucide-react';
import TechAtmosphere from '../components/TechAtmosphere';
import Reveal from '../components/Reveal';
import { leadershipData, techxJourney, techxAward } from '../data/leadership';
import sairamCampusFacadeImg from '../assets/architecture/sairam-campus-facade.png';

export default function About() {
  return (
    <div className="about-page-root">
      <TechAtmosphere showArch={false} />

      {/* Hero */}
      <section className="about-hero-section">
        <div className="container">
          <Reveal variant="header">
            <span className="section-eyebrow">TECHX MADRAS 2026</span>
            <h1 className="about-hero-title">
              ABOUT TECHX
            </h1>
            <p className="about-hero-sub">
              TECHX MADRAS is a technology-focused initiative by the IEEE Computer Society Student Branch Chapter at Sri Sai Ram Institute of Technology.
            </p>
          </Reveal>
        </div>
      </section>

      {/* What is TechX & Architectural Focus */}
      <section className="about-overview-section">
        <div className="container">
          <div className="overview-editorial-grid">
            <Reveal variant="pop" className="editorial-copy">
              <span className="section-eyebrow">THE FOUNDATION</span>
              <h2 className="overview-heading">WHAT IS TECHX?</h2>

              <p className="overview-lead">
                TECHX MADRAS is a flagship technology symposium organized by the IEEE Computer Society Student Branch Chapter at Sri Sai Ram Institute of Technology.
              </p>

              <p className="overview-body">
                Designed as an arena of genuine engineering capability, TechX brings together technical competition, hands-on learning, innovation, and professional IEEE mentorship across two high-impact days in Chennai.
              </p>

              <div className="overview-pillars">
                <div className="pillar-item">
                  <CheckCircle2 size={16} color="var(--purple-light)" />
                  <span>Hands-on Engineering & 24H Championship</span>
                </div>
                <div className="pillar-item">
                  <CheckCircle2 size={16} color="var(--purple-light)" />
                  <span>Global IEEE Professional Standards</span>
                </div>
                <div className="pillar-item">
                  <CheckCircle2 size={16} color="var(--purple-light)" />
                  <span>Frontier Hardware & Embedded TinyML</span>
                </div>
                <div className="pillar-item">
                  <CheckCircle2 size={16} color="var(--purple-light)" />
                  <span>Direct Industry Mentorship Roster</span>
                </div>
              </div>
            </Reveal>

            {/* Architectural Heritage Visual Detail */}
            <div className="editorial-visual-col">
              <Reveal variant="image" className="arch-blueprint-card">
                <div className="arch-card-frame">
                  <img
                    src={sairamCampusFacadeImg}
                    alt="Sri Sai Ram Institute of Technology Campus Architectural Facade"
                    className="heritage-arch-img"
                    loading="lazy"
                  />
                  <div className="arch-frame-fade"></div>
                </div>
                <div className="arch-card-meta">
                  <div className="meta-left">
                    <span className="campus-label">HOST INSTITUTION</span>
                    <strong>SRI SAI RAM INSTITUTE OF TECHNOLOGY</strong>
                  </div>
                  <span className="meta-tag">CHENNAI, TAMIL NADU</span>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* The Journey: TechX 2025 -> Outstanding Host Award -> TechX 2026 */}
      <section className="section journey-transition-section">
        <div className="container">
          <Reveal variant="header" className="journey-head">
            <span className="section-eyebrow">THE TECHX JOURNEY</span>
            <h2 className="journey-title">THE TECHX JOURNEY</h2>
            <p className="journey-sub">
              From the inaugural foundation to recognized excellence and our premier 2026 edition.
            </p>
          </Reveal>

          <Reveal variant="stagger" className="journey-timeline-flow">
            {/* TechX'25: The Foundation */}
            <div className="journey-milestone-card milestone-foundation reveal-card">
              <div className="milestone-top">
                <span className="milestone-year">2025</span>
                <span className="milestone-tag">THE FOUNDATION</span>
              </div>
              <h3 className="milestone-event">TECHX'25</h3>
              <p className="milestone-summary">
                The foundation. TechX Madras 2025 brought together students, technologists, and mentors across the region, establishing our flagship IEEE technology experience.
              </p>
            </div>

            {/* Transition Indicator */}
            <div className="journey-step-indicator" aria-hidden="true">
              <span className="indicator-arrow">↓</span>
            </div>

            {/* Verified Historical Achievement: Outstanding Host Award */}
            <div className="journey-award-card reveal-card">
              <div className="award-card-inner">
                <div className="award-icon-box">
                  <Award size={34} color="var(--purple-light)" />
                </div>
                <div className="award-content">
                  <div className="award-meta-row">
                    <span className="award-tag">OFFICIAL RECOGNITION</span>
                    <span className="award-rank-pill">{techxAward.position}</span>
                  </div>
                  <h3 className="award-title">OUTSTANDING HOST AWARD — 1ST PLACE</h3>
                  <p className="award-context">{techxAward.context}</p>
                </div>
              </div>
            </div>

            {/* Transition Indicator */}
            <div className="journey-step-indicator" aria-hidden="true">
              <span className="indicator-arrow">↓</span>
            </div>

            {/* TechX'26: The Next Chapter */}
            <div className="journey-milestone-card milestone-current reveal-card">
              <div className="milestone-top">
                <span className="milestone-year">2026</span>
                <span className="milestone-tag">THE NEXT CHAPTER</span>
              </div>
              <h3 className="milestone-event">TECHX'26</h3>
              <p className="milestone-summary">
                The next chapter. 14 — 15 OCTOBER 2026. TechX'26 expands into a premier 24-hour engineering championship, cybersecurity investigation, on-device TinyML, and innovation arenas.
              </p>
              <div className="current-chapter-badge">
                <Sparkles size={14} color="var(--purple-light)" />
                <span>THE NEXT CHAPTER BEGINS • 14 — 15 OCT 2026</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* IEEE CS Student Branch Chapter Charter */}
      <section className="about-chapter-section">
        <div className="container">
          <Reveal variant="card" className="chapter-banner-card">
            <div className="chapter-text-content">
              <span className="section-eyebrow">ORGANIZING BODY</span>
              <h2 className="chapter-title">IEEE COMPUTER SOCIETY STUDENT BRANCH CHAPTER</h2>
              <p className="chapter-lead">
                The IEEE Computer Society Student Branch Chapter at Sri Sai Ram Institute of Technology provides an enduring launchpad for student researchers, developers, and builders.
              </p>
              <p className="chapter-desc">
                Operating under the world's premier computing society, the chapter fosters academic excellence, peer-led research, hackathon culture, and direct professional development through global IEEE programs, certifications, and technical symposiums.
              </p>
            </div>
            <div className="chapter-badge-side">
              <div className="chapter-seal-box">
                <ShieldCheck size={36} color="var(--purple-light)" />
                <span className="seal-code">IEEE CS SBC</span>
                <span className="seal-sub">SIT CHENNAI</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Institutional Leadership */}
      <section className="section leadership-section">
        <div className="container">
          <Reveal variant="header" className="leadership-head">
            <span className="section-eyebrow">EXECUTIVE PATRONS</span>
            <h2 className="leadership-title">INSTITUTIONAL LEADERSHIP</h2>
            <p className="leadership-sub">
              Visionary guidance providing the bedrock for engineering excellence and student innovation at Sri Sai Ram Institute of Technology.
            </p>
          </Reveal>

          <Reveal variant="stagger" className="leadership-grid">
            {leadershipData.map((leader, idx) => (
              <div key={leader.name || idx} className="leader-card reveal-card">
                <div className="leader-avatar-frame">
                  <div className="leader-placeholder-box">
                    <span className="leader-seal">SSIT</span>
                  </div>
                </div>

                <div className="leader-info">
                  <h3 className="leader-name">{leader.name}</h3>
                  <span className="leader-role">{leader.role}</span>
                  <span className="leader-org">{leader.organization}</span>
                  <p className="leader-desc">{leader.description}</p>
                </div>
              </div>
            ))}
          </Reveal>

          {/* Bottom CTA */}
          <Reveal variant="card" className="about-footer-banner">
            <div>
              <h3>BE PART OF OUR 2026 MILESTONE</h3>
              <p>Experience the culmination of rigorous student-driven technology leadership.</p>
            </div>
            <Link to="/register" className="btn btn-primary">
              <span>JOIN TECHX'26</span>
              <ArrowRight size={18} />
            </Link>
          </Reveal>
        </div>
      </section>

      <style>{`
        .about-page-root {
          padding-top: var(--nav-height);
          background: #000000;
          min-height: 100vh;
        }
        .about-hero-section {
          padding: 5rem 0 3.5rem;
          border-bottom: 1px solid var(--border-subtle);
          position: relative;
        }
        .about-hero-title {
          font-family: var(--font-display);
          font-size: clamp(2.8rem, 6.5vw, 5.5rem);
          line-height: 0.95;
          letter-spacing: 0.03em;
          text-transform: uppercase;
          margin: 1rem 0 1.5rem;
        }
        .about-hero-sub {
          font-size: 1.15rem;
          max-width: 740px;
        }

        /* Overview Editorial */
        .about-overview-section {
          padding: 5.5rem 0;
        }
        .overview-editorial-grid {
          display: grid;
          grid-template-columns: 1.25fr 1fr;
          gap: 4rem;
          align-items: center;
        }
        @media (max-width: 1024px) {
          .overview-editorial-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
        }
        .overview-heading {
          font-size: clamp(2.2rem, 4.5vw, 3.4rem);
          text-transform: uppercase;
          margin-bottom: 1.5rem;
        }
        .overview-lead {
          font-size: 1.2rem;
          font-weight: 500;
          color: var(--white);
          margin-bottom: 1.25rem;
          line-height: 1.6;
        }
        .overview-body {
          font-size: 1rem;
          color: var(--muted);
          line-height: 1.7;
          margin-bottom: 1.25rem;
        }
        .overview-pillars {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-top: 2rem;
        }
        @media (max-width: 600px) {
          .overview-pillars {
            grid-template-columns: 1fr;
          }
        }
        .pillar-item {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          font-size: 0.88rem;
          color: var(--off-white);
        }

        /* Architecture Heritage Visual Card */
        .arch-blueprint-card {
          background: #0B0714;
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          overflow: hidden;
          transition: var(--transition-normal);
        }
        .arch-blueprint-card:hover {
          border-color: var(--purple-light);
          box-shadow: 0 10px 35px rgba(138, 43, 226, 0.2);
        }
        .arch-card-frame {
          position: relative;
          height: 380px;
          background: #060408;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .heritage-arch-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(100%) contrast(110%) brightness(85%);
          opacity: 0.85;
          transition: transform 0.5s ease;
        }
        .arch-blueprint-card:hover .heritage-arch-img {
          transform: scale(1.03);
          opacity: 0.95;
        }
        .arch-frame-fade {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(11, 7, 20, 0.95) 0%, transparent 60%);
        }
        .arch-card-meta {
          padding: 1.25rem 1.75rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
          border-top: 1px solid var(--border);
        }
        .meta-left {
          display: flex;
          flex-direction: column;
        }
        .campus-label {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          color: var(--purple-light);
          letter-spacing: 0.1em;
        }
        .meta-left strong {
          font-size: 0.95rem;
          color: var(--white);
        }
        .meta-tag {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--muted);
        }

        /* Chapter Banner */
        .about-chapter-section {
          padding: 2rem 0 5rem;
        }
        .chapter-banner-card {
          background: #090510;
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          padding: 3.5rem;
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 3rem;
          align-items: center;
        }
        @media (max-width: 900px) {
          .chapter-banner-card {
            grid-template-columns: 1fr;
            padding: 2.5rem 2rem;
          }
        }
        @media (max-width: 600px) {
          .chapter-banner-card {
            padding: 1.75rem 1.25rem !important;
          }
          .chapter-seal-box {
            padding: 1.5rem 1rem !important;
            width: 100%;
          }
          .arch-card-frame {
            height: 240px !important;
          }
          .arch-card-meta {
            padding: 1rem 1.25rem !important;
          }
          .journey-milestone-card {
            padding: 1.75rem 1.25rem !important;
          }
          .leader-card {
            padding: 1.75rem 1.25rem !important;
          }
        }
        .chapter-title {
          font-size: clamp(1.8rem, 3.5vw, 2.5rem);
          text-transform: uppercase;
          margin-bottom: 1.25rem;
        }
        .chapter-lead {
          font-size: 1.1rem;
          color: var(--off-white);
          margin-bottom: 1rem;
          line-height: 1.6;
        }
        .chapter-desc {
          font-size: 0.95rem;
          color: var(--muted);
          line-height: 1.6;
        }
        .chapter-badge-side {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .chapter-seal-box {
          padding: 2.5rem;
          border-radius: var(--radius-md);
          background: rgba(138, 43, 226, 0.08);
          border: 1px dashed var(--purple-light);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.75rem;
          text-align: center;
        }
        .seal-code {
          font-family: var(--font-display);
          font-size: 1.6rem;
          letter-spacing: 0.08em;
          color: var(--white);
        }
        .seal-sub {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--purple-light);
          letter-spacing: 0.15em;
        }

        /* The Journey Timeline Flow: 2025 -> Outstanding Host Award -> 2026 */
        .journey-transition-section {
          background: #060408;
          padding: 6rem 0;
          border-top: 1px solid var(--border-subtle);
          border-bottom: 1px solid var(--border-subtle);
        }
        .journey-head {
          text-align: center;
          max-width: 650px;
          margin: 0 auto 3.5rem;
        }
        .journey-title {
          font-size: clamp(2rem, 4vw, 3.2rem);
          text-transform: uppercase;
          margin-bottom: 0.5rem;
        }
        .journey-timeline-flow {
          display: flex;
          flex-direction: column;
          align-items: center;
          max-width: 860px;
          margin: 0 auto;
          gap: 1rem;
        }
        .journey-milestone-card {
          width: 100%;
          background: #0B0714;
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          padding: 2.25rem 2.5rem;
          display: flex;
          flex-direction: column;
          position: relative;
          transition: var(--transition-normal);
        }
        .milestone-foundation {
          border-color: rgba(255, 255, 255, 0.12);
        }
        .milestone-current {
          border-color: var(--purple-light);
          background: #0E081A;
          box-shadow: 0 0 30px rgba(138, 43, 226, 0.15);
        }
        .milestone-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.25rem;
        }
        .milestone-year {
          font-family: var(--font-display);
          font-size: 2.8rem;
          color: var(--purple-light);
          line-height: 1;
        }
        .milestone-tag {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          letter-spacing: 0.12em;
          color: var(--muted);
          text-transform: uppercase;
        }
        .milestone-event {
          font-size: 1.35rem;
          color: var(--white);
          margin-bottom: 0.5rem;
        }
        .milestone-summary {
          font-size: 0.95rem;
          line-height: 1.6;
          color: var(--muted);
        }
        .current-chapter-badge {
          margin-top: 1.25rem;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--purple-light);
          background: rgba(138, 43, 226, 0.15);
          padding: 0.4rem 0.85rem;
          border-radius: var(--radius-sm);
          border: 1px solid var(--border);
          width: fit-content;
        }

        /* Journey Flow Step Indicator */
        .journey-step-indicator {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0.35rem 0;
        }
        .indicator-arrow {
          font-family: var(--font-mono);
          font-size: 1.4rem;
          color: var(--purple-light);
          opacity: 0.8;
          line-height: 1;
        }

        /* Award Card */
        .journey-award-card {
          width: 100%;
          background: radial-gradient(ellipse at 50% 0%, rgba(138, 43, 226, 0.15) 0%, rgba(14, 9, 24, 0.95) 75%);
          border: 1px solid rgba(138, 43, 226, 0.4);
          border-radius: var(--radius-md);
          padding: 2rem 2.25rem;
          box-shadow: 0 8px 32px rgba(138, 43, 226, 0.12);
          position: relative;
          overflow: hidden;
        }
        .award-card-inner {
          display: flex;
          align-items: center;
          gap: 1.75rem;
        }
        .award-icon-box {
          width: 64px;
          height: 64px;
          flex-shrink: 0;
          border-radius: var(--radius-sm);
          background: rgba(138, 43, 226, 0.15);
          border: 1px solid rgba(138, 43, 226, 0.35);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .award-content {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
          flex: 1;
        }
        .award-meta-row {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex-wrap: wrap;
          margin-bottom: 0.2rem;
        }
        .award-tag {
          font-family: var(--font-mono);
          font-size: 0.68rem;
          letter-spacing: 0.12em;
          color: var(--purple-light);
          text-transform: uppercase;
        }
        .award-rank-pill {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          color: #FFDF70;
          background: rgba(255, 223, 112, 0.12);
          border: 1px solid rgba(255, 223, 112, 0.3);
          padding: 0.2rem 0.65rem;
          border-radius: var(--radius-sm);
        }
        .award-title {
          font-family: var(--font-display);
          font-size: 1.55rem;
          letter-spacing: 0.04em;
          color: var(--white);
          margin: 0;
          text-transform: uppercase;
        }
        .award-context {
          font-size: 0.92rem;
          line-height: 1.55;
          color: #CCC6D2;
          margin: 0;
        }
        @media (max-width: 600px) {
          .journey-award-card {
            padding: 1.5rem 1.25rem;
          }
          .award-card-inner {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }
          .award-icon-box {
            width: 50px;
            height: 50px;
          }
          .award-title {
            font-size: 1.35rem;
          }
        }

        /* Leadership */
        .leadership-section {
          padding: 6rem 0;
          background: #000000;
        }
        .leadership-head {
          text-align: center;
          max-width: 680px;
          margin: 0 auto 3.5rem;
        }
        .leadership-title {
          font-size: clamp(2rem, 4vw, 3.2rem);
          text-transform: uppercase;
          margin-bottom: 0.5rem;
        }
        .leadership-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          max-width: 1200px;
          margin: 0 auto 5rem;
        }
        @media (max-width: 1024px) {
          .leadership-grid {
            grid-template-columns: 1fr;
            max-width: 600px;
          }
        }
        .leader-card {
          background: #0B0714;
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          transition: var(--transition-normal);
        }
        .leader-card:hover {
          border-color: var(--purple-light);
          transform: translateY(-4px);
          box-shadow: 0 10px 35px rgba(138, 43, 226, 0.2);
        }
        .leader-avatar-frame {
          margin-bottom: 1.5rem;
        }
        .leader-placeholder-box {
          width: 90px;
          height: 90px;
          border-radius: 50%;
          background: rgba(138, 43, 226, 0.12);
          border: 2px dashed var(--border);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .leader-seal {
          font-family: var(--font-display);
          font-size: 1.4rem;
          color: var(--purple-light);
          letter-spacing: 0.08em;
        }
        .leader-name {
          font-size: 1.35rem;
          margin-bottom: 0.25rem;
          color: var(--white);
        }
        .leader-role {
          display: block;
          font-family: var(--font-heading);
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--purple-light);
          margin-bottom: 0.25rem;
        }
        .leader-org {
          display: block;
          font-size: 0.82rem;
          color: var(--muted);
          margin-bottom: 1.25rem;
        }
        .leader-desc {
          font-size: 0.9rem;
          line-height: 1.6;
          color: #CCC6D2;
        }

        /* Bottom Banner */
        .about-footer-banner {
          background: rgba(14, 9, 24, 0.7);
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          padding: 2.5rem 3rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 2rem;
          flex-wrap: wrap;
        }
        .about-footer-banner h3 {
          font-size: 1.5rem;
          text-transform: uppercase;
          margin-bottom: 0.35rem;
        }
      `}</style>
    </div>
  );
}
