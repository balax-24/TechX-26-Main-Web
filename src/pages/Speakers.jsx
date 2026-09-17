import React from 'react';
import { Sparkles, ArrowRight, UserCheck, Mail, ShieldCheck } from 'lucide-react';
import TechAtmosphere from '../components/TechAtmosphere';
import Reveal from '../components/Reveal';
import { keynoteSpeakers, industryMentors, juryPanels } from '../data/speakers';
import { eventMeta } from '../data/contacts';

export default function Speakers() {
  const hasConfirmedSpeakers = keynoteSpeakers.length > 0 || industryMentors.length > 0 || juryPanels.length > 0;

  return (
    <div className="speakers-page-root">
      <TechAtmosphere showArch={false} />

      {/* Page Hero */}
      <section className="speakers-hero-section">
        <div className="container">
          <div className="speakers-hero-layout">
            <Reveal variant="header" className="speakers-hero-left">
              <span className="section-eyebrow">THE MINDS BEHIND TECHX'26</span>
              <h1 className="speakers-hero-title">
                SPEAKERS
              </h1>
              <p className="speakers-hero-sub">
                Speaker announcements coming soon. Speaker information will be published here once confirmed.
              </p>
            </Reveal>

            <Reveal variant="card" className="speakers-hero-right">
              <div className="speaker-status-panel">
                <div className="status-panel-top">
                  <span className="status-badge-mono">CURATION STATUS</span>
                  <div className="status-live-dot" aria-hidden="true"></div>
                </div>
                <h2 className="status-panel-heading">
                  OFFICIAL ROSTER<br />
                  <span className="text-purple-highlight">COMING SOON</span>
                </h2>
                <p className="status-panel-desc">
                  Keynote speakers, industry mentors, and hackathon jury profiles are undergoing final organizational confirmation under the IEEE CS SBC charter.
                </p>
                <div className="status-panel-footer">
                  <span className="status-liaison-label">OFFICIAL LIAISON //</span>
                  <a href={`mailto:${eventMeta.email}`} className="status-liaison-email">
                    {eventMeta.email}
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Main Speakers Content Section */}
      <section className="speakers-content-section">
        <div className="container">
          {hasConfirmedSpeakers ? (
            <div className="confirmed-speakers-grid">
              {/* Render confirmed speakers if provided */}
            </div>
          ) : (
            <div className="speakers-empty-container">
              {/* ONE polished coming-soon visual/status component */}
              <Reveal variant="card" className="clean-speaker-status-card">
                <div className="clean-status-badge">
                  <Sparkles size={16} color="var(--purple-light)" />
                  <span>OFFICIAL ANNOUNCEMENTS</span>
                </div>
                <h2 className="clean-status-title">SPEAKERS</h2>
                <div className="clean-status-tag">Speaker announcements coming soon.</div>
                <p className="clean-status-desc">
                  Speaker information will be published here once confirmed. The speaker roster will feature keynote thought leaders in Edge AI and distributed systems, alongside 6 industry mentors for the dedicated Nano Mentoring session and an honorable evaluation jury.
                </p>

                <div className="clean-status-meta-grid">
                  <div className="meta-block">
                    <span className="meta-label">KEYNOTES</span>
                    <span className="meta-val">Edge AI & Future Architectures</span>
                  </div>
                  <div className="meta-block">
                    <span className="meta-label">NANO MENTORING</span>
                    <span className="meta-val">6 Industry Technical Mentors</span>
                  </div>
                  <div className="meta-block">
                    <span className="meta-label">EVALUATION</span>
                    <span className="meta-val">VerdictX Hackathon Jury</span>
                  </div>
                </div>

                <div className="clean-status-actions">
                  <a
                    href={`mailto:${eventMeta.email}?subject=TechX'26%20Speaker%20/%20Mentor%20Inquiry`}
                    className="btn btn-primary"
                  >
                    <span>CONNECT WITH ORGANIZING COMMITTEE</span>
                    <ArrowRight size={16} />
                  </a>
                </div>
              </Reveal>
            </div>
          )}

          {/* Speaker Nomination / Masterclass Callout */}
          <Reveal variant="card" className="speakers-nominate-banner">
            <div>
              <h3>ARE YOU AN INDUSTRY LEADER OR RESEARCHER?</h3>
              <p>Connect with the TechX'26 organizing committee regarding technical masterclasses and mentorship sessions.</p>
            </div>
            <a
              href={`mailto:${eventMeta.email}?subject=TechX'26%20Session%20Proposal`}
              className="btn btn-secondary"
            >
              <span>SUBMIT SESSION PROPOSAL</span>
              <ArrowRight size={16} />
            </a>
          </Reveal>
        </div>
      </section>

      <style>{`
        .speakers-page-root {
          padding-top: var(--nav-height);
          background: #000000;
          min-height: 100vh;
        }
        .speakers-hero-section {
          padding: clamp(3.5rem, 7vw, 5.5rem) 0 3.5rem;
          border-bottom: 1px solid var(--border-subtle);
          background: radial-gradient(circle at 50% 0%, rgba(138, 43, 226, 0.1) 0%, transparent 70%);
          position: relative;
        }
        .speakers-hero-layout {
          display: grid;
          grid-template-columns: 1.35fr 1fr;
          gap: clamp(2rem, 4vw, 4rem);
          align-items: center;
        }
        @media (max-width: 900px) {
          .speakers-hero-layout {
            grid-template-columns: 1fr;
          }
        }
        .speakers-hero-title {
          font-family: var(--font-display);
          font-size: clamp(3.5rem, 8vw, 7rem);
          line-height: 0.92;
          letter-spacing: 0.02em;
          text-transform: uppercase;
          margin: 0.75rem 0 1.25rem;
        }
        .speakers-hero-sub {
          font-size: 1.15rem;
          max-width: 600px;
          color: var(--muted);
          line-height: 1.65;
        }
        .speaker-status-panel {
          background: rgba(14, 9, 24, 0.75);
          border: 1px solid rgba(138, 43, 226, 0.35);
          border-radius: var(--radius-md);
          padding: clamp(1.75rem, 3vw, 2.25rem);
          position: relative;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.7);
        }
        .status-panel-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1rem;
        }
        .status-badge-mono {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          letter-spacing: 0.12em;
          color: var(--purple-light);
          font-weight: 700;
        }
        .status-live-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--purple-light);
          box-shadow: 0 0 12px var(--purple-light);
          animation: statusPulse 2s infinite ease-in-out;
        }
        @keyframes statusPulse {
          0%, 100% { opacity: 0.4; transform: scale(0.9); }
          50% { opacity: 1; transform: scale(1.15); }
        }
        .status-panel-heading {
          font-family: var(--font-heading);
          font-size: clamp(1.5rem, 2.5vw, 2rem);
          line-height: 1.05;
          letter-spacing: -0.01em;
          color: var(--white);
          margin-bottom: 0.75rem;
        }
        .status-panel-desc {
          font-size: 0.88rem;
          line-height: 1.55;
          color: var(--muted);
          margin-bottom: 1.5rem;
        }
        .status-panel-footer {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 0.5rem;
          padding-top: 1rem;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          font-family: var(--font-mono);
          font-size: 0.78rem;
        }
        .status-liaison-label {
          color: var(--muted);
        }
        .status-liaison-email {
          color: var(--purple-light);
          text-decoration: underline;
          text-underline-offset: 3px;
        }

        /* Content Section */
        .speakers-content-section {
          padding: 5rem 0 6rem;
        }
        .clean-speaker-status-card {
          background: #0B0713;
          border: 1px solid rgba(138, 43, 226, 0.35);
          border-radius: var(--radius-md);
          padding: clamp(2.5rem, 5vw, 4rem);
          max-width: 880px;
          margin: 0 auto 4rem;
          text-align: center;
          box-shadow: 0 12px 50px rgba(0, 0, 0, 0.8), 0 0 40px rgba(138, 43, 226, 0.12);
        }
        .clean-status-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          letter-spacing: 0.12em;
          color: var(--purple-light);
          background: rgba(138, 43, 226, 0.12);
          border: 1px solid rgba(138, 43, 226, 0.3);
          padding: 0.35rem 0.85rem;
          border-radius: 999px;
          margin-bottom: 1.5rem;
          font-weight: 700;
        }
        .clean-status-title {
          font-family: var(--font-display);
          font-size: clamp(2.5rem, 5vw, 4rem);
          line-height: 0.95;
          letter-spacing: 0.02em;
          color: var(--white);
          margin-bottom: 0.5rem;
          text-transform: uppercase;
        }
        .clean-status-tag {
          font-family: var(--font-heading);
          font-size: 1.25rem;
          color: var(--purple-light);
          font-weight: 600;
          margin-bottom: 1.25rem;
        }
        .clean-status-desc {
          font-size: 1.05rem;
          line-height: 1.7;
          color: var(--muted);
          max-width: 680px;
          margin: 0 auto 2.5rem;
        }
        .clean-status-meta-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          max-width: 720px;
          margin: 0 auto 2.5rem;
          padding: 1.5rem;
          background: rgba(0, 0, 0, 0.4);
          border: 1px solid rgba(138, 43, 226, 0.2);
          border-radius: var(--radius-sm);
          text-align: left;
        }
        @media (max-width: 700px) {
          .clean-status-meta-grid {
            grid-template-columns: 1fr;
          }
        }
        .meta-label {
          display: block;
          font-family: var(--font-mono);
          font-size: 0.7rem;
          letter-spacing: 0.1em;
          color: var(--purple-light);
          font-weight: 700;
          margin-bottom: 0.25rem;
        }
        .meta-val {
          display: block;
          font-size: 0.92rem;
          color: var(--white);
          font-weight: 500;
        }
        .clean-status-actions {
          display: flex;
          justify-content: center;
        }

        /* Banner CTA */
        .speakers-nominate-banner {
          background: #0B0616;
          border: 1px solid rgba(138, 43, 226, 0.3);
          border-radius: var(--radius-md);
          padding: 2.5rem 3rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 2rem;
          flex-wrap: wrap;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.6);
        }
        @media (max-width: 650px) {
          .speakers-nominate-banner {
            padding: 1.75rem 1.25rem;
            flex-direction: column;
            align-items: stretch;
            text-align: left;
          }
          .speakers-nominate-banner .btn {
            width: 100%;
            justify-content: center;
          }
        }
        .speakers-nominate-banner h3 {
          font-size: 1.4rem;
          text-transform: uppercase;
          margin-bottom: 0.25rem;
        }
        .speakers-nominate-banner p {
          font-size: 0.95rem;
          color: var(--muted);
        }
      `}</style>
    </div>
  );
}
