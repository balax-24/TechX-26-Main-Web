import React from 'react';
import { Tag, AlertCircle } from 'lucide-react';
import Reveal from './Reveal';
import { useRegistrationPricing } from '../hooks/useRegistrationPricing';

export default function RegistrationOffer() {
  const { isOfferActive, hasEnded, offerConfig } = useRegistrationPricing();

  return (
    <div className="registration-offer-wrapper">
      <Reveal variant="card" className={`registration-offer-card ${hasEnded ? 'offer-ended-card' : ''}`}>
        {hasEnded ? (
          /* ============================================================
             STATE: STANDARD REGISTRATION (Active from 5 Oct 00:00:00 IST)
          ============================================================ */
          <div className="offer-ended-content">
            <div className="offer-header-row">
              <span className="offer-pill-badge offer-pill-ended">
                <AlertCircle size={13} />
                <span>REGISTRATION STATUS</span>
              </span>
            </div>

            <h3 className="offer-main-title">{offerConfig.endedHeading}</h3>
            <p className="offer-ended-desc">{offerConfig.endedMessage}</p>
          </div>
        ) : (
          /* ============================================================
             STATE: EARLY REGISTRATION OFFER (ACTIVE FROM NOW)
          ============================================================ */
          <div className="offer-active-layout">
            <div className="offer-header-row">
              <span className="offer-pill-badge">
                <Tag size={13} color="var(--purple-light)" />
                <span>OFFICIAL REGISTRATION OFFER</span>
              </span>
            </div>

            <div className="offer-info-col">
              <h3 className="offer-main-title">{offerConfig.title}</h3>
              <div className="offer-savings-callout">
                <span className="savings-highlight">{offerConfig.savingsHeading}</span>
              </div>
              <p className="offer-body-text">
                {offerConfig.bodyText}
              </p>
            </div>
          </div>
        )}
      </Reveal>

      <style>{`
        .registration-offer-wrapper {
          margin: 2rem 0 3rem;
          width: 100%;
        }
        .registration-offer-card {
          background: #0B0616;
          border: 1px solid rgba(138, 43, 226, 0.45);
          border-radius: var(--radius-md, 8px);
          padding: clamp(1.5rem, 3vw, 2.25rem);
          position: relative;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.6), 0 0 35px rgba(138, 43, 226, 0.15);
        }
        .offer-ended-card {
          border-color: rgba(255, 255, 255, 0.15);
          background: #080510;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.5);
        }
        .offer-header-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.25rem;
          flex-wrap: wrap;
          gap: 0.75rem;
        }
        .offer-pill-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          font-family: var(--font-mono);
          font-size: 0.72rem;
          letter-spacing: 0.12em;
          color: var(--purple-light);
          background: rgba(138, 43, 226, 0.12);
          border: 1px solid rgba(138, 43, 226, 0.35);
          padding: 0.3rem 0.75rem;
          border-radius: 999px;
          font-weight: 700;
        }
        .offer-pill-ended {
          color: var(--muted);
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(255, 255, 255, 0.12);
        }
        .offer-active-layout {
          display: flex;
          flex-direction: column;
        }
        .offer-info-col {
          display: flex;
          flex-direction: column;
        }
        .offer-main-title {
          font-family: var(--font-display);
          font-size: clamp(1.6rem, 3.2vw, 2.25rem);
          line-height: 1.1;
          letter-spacing: 0.02em;
          color: var(--white);
          margin-bottom: 0.5rem;
          text-transform: uppercase;
        }
        .offer-savings-callout {
          margin-bottom: 0.75rem;
        }
        .savings-highlight {
          display: inline-block;
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: clamp(1.05rem, 2vw, 1.35rem);
          letter-spacing: 0.04em;
          color: #22C55E;
          text-transform: uppercase;
        }
        .offer-body-text {
          font-size: 0.95rem;
          line-height: 1.6;
          color: #C2B8D2;
          margin-bottom: 0;
          max-width: 680px;
        }

        /* Ended View Styling */
        .offer-ended-content .offer-main-title {
          font-size: clamp(1.4rem, 2.5vw, 1.85rem);
          color: #E2D9F3;
          margin-bottom: 0.35rem;
        }
        .offer-ended-desc {
          font-family: var(--font-mono);
          font-size: 0.88rem;
          color: var(--muted);
          margin-bottom: 0;
          line-height: 1.5;
        }
      `}</style>
    </div>
  );
}
