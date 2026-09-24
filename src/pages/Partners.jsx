import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Mail } from 'lucide-react';
import TechAtmosphere from '../components/TechAtmosphere';
import Reveal from '../components/Reveal';
import { partners } from '../data/partners';
import { eventMeta } from '../data/contacts';
import csSypLogoWhite from '../assets/logo/CS SYP 80yrs White.svg';

export default function Partners() {
  return (
    <div className="partners-page-root">
      <TechAtmosphere showArch={false} />

      {/* Hero with Intentional Asymmetric 2-Column Composition */}
      <section className="partners-hero-section">
        <div className="container">
          <div className="partners-hero-layout">
            {/* Left Column: Headline & Statement */}
            <Reveal variant="header" className="partners-hero-left">
              <span className="section-eyebrow">POWERING TECHX'26</span>
              <h1 className="partners-hero-title">
                PARTNERS
              </h1>
              <p className="partners-hero-sub">
                TechX Madras collaborates with innovative technology enterprises, forward-looking engineering organisations, and developer platforms.
              </p>
            </Reveal>

            {/* Right Column: Compact Partnership Status Panel */}
            <Reveal variant="card" className="partners-hero-right">
              <div className="partnership-status-panel">
                <div className="status-panel-top">
                  <span className="status-badge-mono">PARTNERSHIP STATUS</span>
                  <div className="status-live-dot" aria-hidden="true"></div>
                </div>
                <h2 className="status-panel-heading">
                  ANNOUNCEMENTS<br />
                  <span className="text-purple-highlight">COMING SOON</span>
                </h2>
                <p className="status-panel-desc">
                  Official partnership agreements are currently being finalized with industry leaders, developer platforms, and hardware vendors.
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

      {/* Main Partners Section */}
      <section className="partners-display-section">
        <div className="container">
          {/* Organizing Society & Global 80 Years Affiliation */}
          <Reveal variant="card" className="society-charter-panel">
            <div className="society-charter-brand">
              <img src={csSypLogoWhite} alt="IEEE Computer Society SYP 80 Years Official Anniversary Logo" className="society-syp-logo" />
            </div>
            <div className="society-charter-text">
              <span className="charter-badge">GLOBAL PROFESSIONAL SOCIETY AFFILIATION</span>
              <h3 className="charter-title">IEEE COMPUTER SOCIETY // CS SYP</h3>
              <p className="charter-desc">
                Organized under the charter of the IEEE Computer Society Student Branch Chapter at Sri Sai Ram Institute of Technology in celebration of 80 years of computing innovation.
              </p>
            </div>
          </Reveal>

          <Reveal variant="header" className="partners-block-head">
            <span className="section-eyebrow">ECOSYSTEM NETWORK</span>
            <h2 className="partners-block-title">OUR PARTNERS</h2>
            <p className="partners-block-desc">
              Technology grows stronger when great organizations build together.
            </p>
          </Reveal>

          {partners && partners.length > 0 ? (
            <Reveal variant="stagger" className="confirmed-partners-grid">
              {partners.map((partner, idx) => (
                <div key={idx} className="partner-brand-card reveal-card">
                  {partner.logo ? (
                    <img src={partner.logo} alt={partner.name} className="partner-logo-img" />
                  ) : (
                    <span className="partner-name-text">{partner.name}</span>
                  )}
                  {partner.category && (
                    <span className="partner-cat-badge">{partner.category}</span>
                  )}
                </div>
              ))}
            </Reveal>
          ) : (
            <div className="partners-empty-container">
              {/* Single Clean Status Treatment Replacing Fake Placeholder Slots */}
              <Reveal variant="card" className="clean-status-card">
                <div className="clean-status-badge">
                  <Sparkles size={16} color="var(--purple-light)" />
                  <span>CONFIRMED NETWORK DIRECTORY</span>
                </div>
                <h2 className="clean-status-title">PARTNERS</h2>
                <div className="clean-status-tag">Partnership announcements coming soon.</div>
                <p className="clean-status-desc">
                  Official TechX'26 partners will be listed here once confirmed.
                </p>
                <div className="clean-status-actions">
                  <a 
                    href={`mailto:${eventMeta.email}?subject=TechX'26%20Partnership%20Inquiry`} 
                    className="btn btn-primary"
                  >
                    <span>INQUIRE ABOUT PARTNERSHIP</span>
                    <ArrowRight size={16} />
                  </a>
                </div>
              </Reveal>
            </div>
          )}

          {/* Partnership Inquiry Strip */}
          <Reveal variant="card" className="partner-inquiry-strip">
            <div className="inquiry-copy">
              <h3>INTERESTED IN PARTNERING WITH TECHX'26?</h3>
              <p>Connect with 1,000+ passionate engineers, developers, and tech pioneers across South India.</p>
            </div>
            <a 
              href={`mailto:${eventMeta.email}?subject=TechX'26%20Partnership%20Proposal`}
              className="btn btn-secondary"
            >
              <span>CONTACT PARTNERSHIP TEAM</span>
              <ArrowRight size={16} />
            </a>
          </Reveal>
        </div>
      </section>

      <style>{`
        .partners-page-root {
          padding-top: var(--nav-height);
          background: #000000;
          min-height: 100vh;
        }
        .partners-hero-section {
          padding: clamp(3.5rem, 7vw, 5.5rem) 0 3.5rem;
          border-bottom: 1px solid var(--border-subtle);
          background: radial-gradient(circle at 50% 0%, rgba(138, 43, 226, 0.1) 0%, transparent 70%);
          position: relative;
        }
        .partners-hero-layout {
          display: grid;
          grid-template-columns: 1.35fr 1fr;
          gap: clamp(2rem, 4vw, 4rem);
          align-items: center;
        }
        .partners-hero-left {
          display: flex;
          flex-direction: column;
        }
        .partners-hero-title {
          font-family: var(--font-display);
          font-size: clamp(3.2rem, 8vw, 6.2rem);
          line-height: 0.95;
          letter-spacing: 0.03em;
          text-transform: uppercase;
          margin: 0.75rem 0 1.25rem;
          color: var(--white);
        }
        .partners-hero-sub {
          font-size: clamp(1rem, 2vw, 1.2rem);
          max-width: 640px;
          color: var(--off-white);
          line-height: 1.6;
        }

        /* Right Column: Status Panel */
        .partners-hero-right {
          display: flex;
          justify-content: center;
        }
        .partnership-status-panel {
          background: #0C0816;
          border: 1px solid rgba(138, 43, 226, 0.4);
          border-radius: var(--radius-md);
          padding: 2.25rem 2rem;
          width: 100%;
          box-shadow: 0 15px 35px -10px rgba(138, 43, 226, 0.2), 0 0 20px rgba(138, 43, 226, 0.08);
          position: relative;
        }
        .status-panel-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.25rem;
        }
        .status-badge-mono {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--purple-light);
          letter-spacing: 0.08em;
          font-weight: 700;
        }
        .status-live-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--purple-bright);
          box-shadow: 0 0 10px var(--purple-light);
        }
        .status-panel-heading {
          font-size: clamp(1.4rem, 2.5vw, 1.85rem);
          text-transform: uppercase;
          line-height: 1.15;
          letter-spacing: -0.02em;
          margin-bottom: 0.85rem;
          color: var(--white);
        }
        .status-panel-desc {
          font-size: 0.92rem;
          color: var(--muted);
          line-height: 1.55;
          margin-bottom: 1.5rem;
        }
        .status-panel-footer {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          padding-top: 1rem;
          border-top: 1px solid var(--border-subtle);
        }
        .status-liaison-label {
          font-family: var(--font-mono);
          font-size: 0.68rem;
          color: var(--muted-dark);
          letter-spacing: 0.06em;
        }
        .status-liaison-email {
          font-family: var(--font-mono);
          font-size: 0.85rem;
          color: var(--purple-light);
          text-decoration: none;
          transition: color var(--transition-fast);
        }
        .status-liaison-email:hover {
          color: var(--white);
          text-decoration: underline;
        }

        /* Partners Display Section */
        .partners-display-section {
          padding: 5rem 0 6rem;
        }
        .partners-block-head {
          text-align: center;
          max-width: 680px;
          margin: 0 auto 3.5rem;
        }
        .partners-block-title {
          font-size: clamp(2.2rem, 4.5vw, 3.4rem);
          text-transform: uppercase;
          margin-bottom: 0.75rem;
        }
        .partners-block-desc {
          font-size: 1.05rem;
          color: var(--muted);
          line-height: 1.6;
        }

        /* Clean Status Card (No Fake Placeholders) */
        .partners-empty-container {
          max-width: 860px;
          margin: 0 auto 4rem;
        }
        .clean-status-card {
          background: #0B0714;
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          padding: clamp(2.5rem, 5vw, 4rem) clamp(1.75rem, 4vw, 3rem);
          text-align: center;
          position: relative;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
        }
        .clean-status-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--purple-light);
          background: rgba(138, 43, 226, 0.12);
          border: 1px solid var(--border-purple);
          padding: 0.35rem 0.85rem;
          border-radius: var(--radius-sm);
          margin-bottom: 1.5rem;
        }
        .clean-status-title {
          font-size: clamp(1.6rem, 3.5vw, 2.4rem);
          text-transform: uppercase;
          letter-spacing: 0.02em;
          margin-bottom: 0.5rem;
          color: var(--white);
        }
        .clean-status-tag {
          font-family: var(--font-mono);
          font-size: 0.88rem;
          color: var(--purple-light);
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 1.25rem;
        }
        .clean-status-desc {
          font-size: 1.02rem;
          max-width: 620px;
          margin: 0 auto 2.25rem;
          color: var(--muted);
          line-height: 1.65;
        }
        .clean-status-actions {
          display: flex;
          justify-content: center;
        }

        /* Inquiry Strip */
        .partner-inquiry-strip {
          background: rgba(14, 9, 24, 0.7);
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          padding: 2.5rem 3rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 2rem;
          flex-wrap: wrap;
          max-width: 1060px;
          margin: 0 auto;
        }
        .partner-inquiry-strip h3 {
          font-size: 1.3rem;
          text-transform: uppercase;
          margin-bottom: 0.35rem;
          color: var(--white);
        }
        .partner-inquiry-strip p {
          font-size: 0.92rem;
          color: var(--muted);
        }

        /* Responsive Breakpoints */
        @media (max-width: 900px) {
          .partners-hero-layout {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
        }
        @media (max-width: 600px) {
          .partner-inquiry-strip {
            padding: 1.75rem 1.25rem !important;
            flex-direction: column;
            align-items: stretch;
            text-align: left;
            gap: 1.25rem;
          }
          .partner-inquiry-strip .btn {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
}
