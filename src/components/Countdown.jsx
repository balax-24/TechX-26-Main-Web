import React, { useState, useEffect } from 'react';
import { eventMeta } from '../data/contacts';

export default function Countdown({ targetDate = eventMeta.targetDate, compact = false }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    status: 'upcoming' // 'upcoming', 'live', 'concluded'
  });

  useEffect(() => {
    const calculateTime = () => {
      const target = new Date(targetDate).getTime();
      const end = new Date("2026-10-14T18:00:00+05:30").getTime();
      const now = new Date().getTime();

      if (now >= end) {
        setTimeLeft(prev => ({ ...prev, status: 'concluded' }));
        return;
      }

      if (now >= target) {
        setTimeLeft(prev => ({ ...prev, status: 'live' }));
        return;
      }

      const difference = target - now;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
        status: 'upcoming'
      });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  if (timeLeft.status === 'live') {
    return (
      <div className={`countdown-wrapper ${compact ? 'countdown-compact' : ''}`}>
        <div className="countdown-live-badge">
          <span className="live-pulsing-dot"></span>
          <span>TECHX'26 IS LIVE</span>
        </div>
      </div>
    );
  }

  if (timeLeft.status === 'concluded') {
    return (
      <div className={`countdown-wrapper ${compact ? 'countdown-compact' : ''}`}>
        <div className="countdown-ended-badge">
          <span>TECHX'26 — EVENT CONCLUDED</span>
        </div>
      </div>
    );
  }

  const formatNumber = (num) => String(num).padStart(2, '0');

  const timeUnits = [
    { label: 'DAYS', value: formatNumber(timeLeft.days) },
    { label: 'HOURS', value: formatNumber(timeLeft.hours) },
    { label: 'MINUTES', value: formatNumber(timeLeft.minutes) },
    { label: 'SECONDS', value: formatNumber(timeLeft.seconds) },
  ];

  return (
    <div className={`countdown-centered-root ${compact ? 'countdown-compact' : ''}`}>
      {!compact && (
        <div className="countdown-header-block">
          <div className="countdown-eyebrow-pill">
            <span className="countdown-pulse-dot"></span>
            <span>TECHX'26 BEGINS IN</span>
          </div>
          <div className="countdown-date-subtitle">
            OCTOBER 13, 2026 // 09:00 IST
          </div>
        </div>
      )}

      <div className="countdown-units-row">
        {timeUnits.map((unit, index) => (
          <React.Fragment key={unit.label}>
            <div className="countdown-card">
              <div className="countdown-val-box">
                <span className="countdown-digit">{unit.value}</span>
              </div>
              <span className="countdown-card-label">{unit.label}</span>
            </div>
            {index < timeUnits.length - 1 && (
              <span className="countdown-colon" aria-hidden="true">:</span>
            )}
          </React.Fragment>
        ))}
      </div>

      <style>{`
        .countdown-centered-root {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
          text-align: center;
        }

        .countdown-header-block {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.4rem;
          margin-bottom: 1.5rem;
        }

        .countdown-eyebrow-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-mono);
          font-size: 0.78rem;
          letter-spacing: 0.16em;
          color: var(--purple-light);
          text-transform: uppercase;
        }

        .countdown-pulse-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--purple-light);
          box-shadow: 0 0 10px var(--purple-light);
          animation: pulseGlow 2s infinite ease-in-out;
        }

        @keyframes pulseGlow {
          0%, 100% { opacity: 0.6; transform: scale(0.9); }
          50% { opacity: 1; transform: scale(1.15); }
        }

        .countdown-date-subtitle {
          font-family: var(--font-mono);
          font-size: 0.88rem;
          letter-spacing: 0.08em;
          color: #E2D9F3;
          font-weight: 500;
        }

        .countdown-units-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.25rem;
          margin: 0 auto;
        }

        .countdown-card {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .countdown-val-box {
          background: rgba(14, 9, 24, 0.75);
          border: 1px solid rgba(138, 43, 226, 0.35);
          border-radius: 8px;
          min-width: 88px;
          height: 88px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5), inset 0 0 18px rgba(138, 43, 226, 0.12);
          backdrop-filter: blur(10px);
          transition: border-color 0.3s ease, transform 0.2s ease;
        }

        .countdown-card:hover .countdown-val-box {
          border-color: var(--purple-light);
          transform: translateY(-2px);
          box-shadow: 0 10px 36px rgba(138, 43, 226, 0.25), inset 0 0 20px rgba(138, 43, 226, 0.2);
        }

        .countdown-digit {
          font-family: var(--font-display);
          font-size: 3rem;
          color: #FFFFFF;
          letter-spacing: 0.02em;
          line-height: 1;
        }

        .countdown-card-label {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          letter-spacing: 0.18em;
          color: #9D8BB0;
          margin-top: 0.65rem;
          text-transform: uppercase;
        }

        .countdown-colon {
          font-family: var(--font-display);
          font-size: 2.4rem;
          color: var(--purple-light);
          opacity: 0.65;
          margin-bottom: 1.7rem;
          user-select: none;
        }

        /* Compact variant */
        .countdown-compact .countdown-val-box {
          min-width: 60px;
          height: 60px;
        }
        .countdown-compact .countdown-digit {
          font-size: 2rem;
        }
        .countdown-compact .countdown-colon {
          font-size: 1.5rem;
          margin-bottom: 1.2rem;
        }
        .countdown-compact .countdown-units-row {
          gap: 0.65rem;
        }

        /* Responsive Breakpoints */
        @media (max-width: 768px) {
          .countdown-units-row {
            gap: 0.75rem;
          }
          .countdown-val-box {
            min-width: 70px;
            height: 70px;
          }
          .countdown-digit {
            font-size: 2.3rem;
          }
          .countdown-colon {
            font-size: 1.8rem;
            margin-bottom: 1.4rem;
          }
        }

        @media (max-width: 480px) {
          .countdown-units-row {
            gap: 0.45rem;
          }
          .countdown-val-box {
            min-width: 58px;
            height: 60px;
            border-radius: 6px;
          }
          .countdown-digit {
            font-size: 1.9rem;
          }
          .countdown-card-label {
            font-size: 0.62rem;
            letter-spacing: 0.12em;
            margin-top: 0.45rem;
          }
          .countdown-colon {
            font-size: 1.4rem;
            margin-bottom: 1.1rem;
          }
        }

        @media (max-width: 350px) {
          .countdown-val-box {
            min-width: 50px;
            height: 52px;
          }
          .countdown-digit {
            font-size: 1.6rem;
          }
        }

        .countdown-live-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.85rem 1.8rem;
          background: rgba(138, 43, 226, 0.2);
          border: 1px solid var(--purple-light);
          border-radius: var(--radius-sm);
          font-family: var(--font-heading);
          font-weight: 700;
          letter-spacing: 0.15em;
          color: var(--white);
          box-shadow: 0 0 30px rgba(184, 108, 255, 0.5);
        }
        .live-pulsing-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #22C55E;
          box-shadow: 0 0 12px #22C55E;
          animation: pulseGlow 1.5s infinite;
        }
        .countdown-ended-badge {
          padding: 0.85rem 1.8rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
          font-family: var(--font-mono);
          font-size: 0.9rem;
          color: var(--muted);
        }
      `}</style>
    </div>
  );
}
