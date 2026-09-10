import React from 'react';
import { Building2, Sparkles, ArrowRight } from 'lucide-react';
import TechAtmosphere from '../components/TechAtmosphere';
import { partners } from '../data/partners';
import { eventMeta } from '../data/contacts';

export default function Partners({ onOpenRegister }) {
  return (
    <div className="partners-page-root">
      <TechAtmosphere showArch={false} />

      {/* Hero */}
      <section className="partners-hero-section">
        <div className="container">
          <span className="section-eyebrow">POWERING TECHX'26</span>
          <h1 className="partners-hero-title">
            PARTNERS
          </h1>
          <p className="partners-hero-sub">
            Partner announcements coming soon.
          </p>
        </div>
      </section>

      {/* Main Partners Section */}
      <section className="partners-display-section">
        <div className="container">
          <div className="partners-block-head">
            <span className="section-eyebrow">ECOSYSTEM NETWORK</span>
            <h2 className="partners-block-title">OUR PARTNERS</h2>
            <p className="partners-block-desc">
              TechX Madras collaborates with innovative technology enterprises, forward-looking engineering organisations, and developer platforms.
            </p>
          </div>

          {partners && partners.length > 0 ? (
            <div className="confirmed-partners-grid">
              {partners.map((partner, idx) => (
                <div key={idx} className="partner-brand-card">
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
            </div>
          ) : (
            <div className="partners-empty-container">
              <div className="announcement-prompt-box">
                <div className="prompt-badge">
                  <Sparkles size={16} color="var(--purple-light)" />
                  <span>OFFICIAL ANNOUNCEMENTS</span>
                </div>
                <h3 className="announcement-title">PARTNER ANNOUNCEMENTS COMING SOON</h3>
                <p className="announcement-sub">
                  Official industry sponsors, technology partners, and developer tooling organizations supporting TechX'26 will be unveiled here as partnerships are finalized.
                </p>
              </div>

              {/* Tasteful Empty Logo-Grid Treatment */}
              <div className="tasteful-logo-grid" aria-hidden="true">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((slot) => (
                  <div key={slot} className="empty-logo-cell">
                    <div className="cell-inner">
                      <div className="cell-icon-wrap">
                        <Building2 size={24} className="cell-icon" />
                      </div>
                      <span className="cell-slot-num">PARTNER SLOT {String(slot).padStart(2, '0')}</span>
                      <span className="cell-status">Announcement Pending</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <style>{`
        .partners-page-root {
          padding-top: var(--nav-height);
          background: #000000;
          min-height: 100vh;
        }
        .partners-hero-section {
          padding: 5rem 0 3.5rem;
          border-bottom: 1px solid var(--border-subtle);
          position: relative;
        }
        .partners-hero-title {
          font-family: var(--font-display);
          font-size: clamp(3.2rem, 8vw, 6.5rem);
          line-height: 0.95;
          letter-spacing: 0.03em;
          text-transform: uppercase;
          margin: 1rem 0 1.5rem;
          color: var(--white);
        }
        .partners-hero-sub {
          font-size: 1.25rem;
          max-width: 740px;
          color: var(--off-white);
          line-height: 1.5;
        }

        /* Partners Display Section */
        .partners-display-section {
          padding: 5.5rem 0 6rem;
        }
        .partners-block-head {
          text-align: center;
          max-width: 680px;
          margin: 0 auto 4rem;
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

        /* Empty State & Tasteful Logo Grid */
        .partners-empty-container {
          max-width: 1060px;
          margin: 0 auto 4.5rem;
        }
        .announcement-prompt-box {
          background: #0B0714;
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          padding: 3.5rem 2.5rem;
          text-align: center;
          margin-bottom: 3rem;
          position: relative;
        }
        .prompt-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--purple-light);
          background: rgba(138, 43, 226, 0.12);
          border: 1px solid var(--border);
          padding: 0.35rem 0.85rem;
          border-radius: var(--radius-sm);
          margin-bottom: 1.25rem;
        }
        .announcement-title {
          font-size: clamp(1.6rem, 3vw, 2.2rem);
          text-transform: uppercase;
          letter-spacing: 0.03em;
          margin-bottom: 0.75rem;
          color: var(--white);
        }
        .announcement-sub {
          font-size: 1rem;
          max-width: 600px;
          margin: 0 auto;
          color: var(--muted);
          line-height: 1.6;
        }

        /* Tasteful Grid */
        .tasteful-logo-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.25rem;
        }
        @media (max-width: 1024px) {
          .tasteful-logo-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 550px) {
          .tasteful-logo-grid {
            grid-template-columns: 1fr;
          }
        }
        .empty-logo-cell {
          background: rgba(14, 9, 24, 0.5);
          border: 1px dashed var(--border-subtle);
          border-radius: var(--radius-sm);
          padding: 2.25rem 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          transition: var(--transition-fast);
        }
        .empty-logo-cell:hover {
          border-color: var(--border);
          background: rgba(138, 43, 226, 0.05);
        }
        .cell-inner {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
        }
        .cell-icon-wrap {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 0.25rem;
        }
        .cell-icon {
          color: var(--muted-dark);
        }
        .cell-slot-num {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--purple-light);
          letter-spacing: 0.08em;
        }
        .cell-status {
          font-size: 0.8rem;
          color: var(--muted-dark);
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
