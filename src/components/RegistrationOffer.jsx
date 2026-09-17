import React from 'react';
import { Tag, Sparkles, Clock, AlertCircle } from 'lucide-react';
import { registrationOffer } from '../data/registration';
import Reveal from './Reveal';

export default function RegistrationOffer() {
  const offer = registrationOffer;

  return (
    <div className="registration-offer-wrapper">
      <Reveal variant="card" className="registration-offer-card">
        <div className="offer-header-row">
          <div className="offer-badge-group">
            <span className="offer-pill-badge">
              <Tag size={13} color="var(--purple-light)" />
              <span>{offer.statusBadge}</span>
            </span>
          </div>
          <span className="offer-mono-tag">CONF_TIER // 2026</span>
        </div>

        <h3 className="offer-main-title">{offer.title}</h3>

        {offer.active ? (
          <div className="offer-active-content">
            {/* When real offer is supplied by organizers */}
            <div className="offer-details-box">
              <h4>{offer.heading}</h4>
              <p>{offer.description}</p>
            </div>
          </div>
        ) : (
          <div className="offer-placeholder-content">
            <div className="offer-state-row">
              <div className="offer-state-title">
                <span className="offer-label-sub">{offer.statusHeading}</span>
                <strong className="offer-status-text">{offer.statusSub}</strong>
              </div>
              <div className="offer-bracket-tag">
                {offer.placeholderText}
              </div>
            </div>

            <p className="offer-explanation-text">
              {offer.description}
            </p>

            <div className="offer-footer-note">
              <span className="offer-dot"></span>
              <span>{offer.note}</span>
            </div>
          </div>
        )}
      </Reveal>

      <style>{`
        .registration-offer-wrapper {
          margin: 2.5rem 0 3.5rem;
          width: 100%;
        }
        .registration-offer-card {
          background: #0B0616;
          border: 1px solid rgba(138, 43, 226, 0.35);
          border-radius: var(--radius-md, 8px);
          padding: clamp(1.75rem, 3.5vw, 2.5rem);
          position: relative;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.6), 0 0 30px rgba(138, 43, 226, 0.1);
        }
        .offer-header-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .offer-badge-group {
          display: flex;
          align-items: center;
          gap: 0.5rem;
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
          border: 1px solid rgba(138, 43, 226, 0.3);
          padding: 0.25rem 0.65rem;
          border-radius: 999px;
          font-weight: 700;
        }
        .offer-mono-tag {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          color: var(--muted);
          letter-spacing: 0.08em;
        }
        .offer-main-title {
          font-family: var(--font-display);
          font-size: clamp(1.75rem, 3.5vw, 2.5rem);
          line-height: 1;
          letter-spacing: 0.02em;
          color: var(--white);
          margin-bottom: 1.25rem;
          text-transform: uppercase;
        }
        .offer-state-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          flex-wrap: wrap;
          background: rgba(0, 0, 0, 0.45);
          border: 1px dashed rgba(138, 43, 226, 0.4);
          border-radius: var(--radius-sm, 4px);
          padding: 1rem 1.25rem;
          margin-bottom: 1rem;
        }
        .offer-state-title {
          display: flex;
          flex-direction: column;
          gap: 0.15rem;
        }
        .offer-label-sub {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          letter-spacing: 0.1em;
          color: var(--purple-light);
          font-weight: 700;
          text-transform: uppercase;
        }
        .offer-status-text {
          font-family: var(--font-heading);
          font-size: 1.2rem;
          color: var(--white);
          letter-spacing: 0.02em;
        }
        .offer-bracket-tag {
          font-family: var(--font-mono);
          font-size: 0.82rem;
          letter-spacing: 0.08em;
          color: var(--purple-light);
          background: rgba(138, 43, 226, 0.15);
          padding: 0.35rem 0.85rem;
          border-radius: 4px;
          border: 1px solid rgba(138, 43, 226, 0.3);
        }
        .offer-explanation-text {
          font-size: 0.95rem;
          line-height: 1.6;
          color: var(--muted);
          margin-bottom: 1.25rem;
          max-width: 780px;
        }
        .offer-footer-note {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--muted);
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          padding-top: 0.75rem;
        }
        .offer-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--purple-light);
          flex-shrink: 0;
        }
      `}</style>
    </div>
  );
}
