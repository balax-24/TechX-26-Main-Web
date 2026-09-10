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
      const end = new Date("2026-10-15T18:00:00+05:30").getTime();
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
    <div className={`countdown-wrapper ${compact ? 'countdown-compact' : ''}`}>
      {!compact && (
        <div className="countdown-eyebrow">
          <span className="countdown-dot"></span>
          <span>TECHX'26 BEGINS IN</span>
        </div>
      )}

      <div className="countdown-grid">
        {timeUnits.map((unit, index) => (
          <div key={unit.label} className="countdown-box">
            <div className="countdown-number-wrap">
              <span className="countdown-number">{unit.value}</span>
            </div>
            <span className="countdown-label">{unit.label}</span>
            {index < timeUnits.length - 1 && (
              <span className="countdown-separator">:</span>
            )}
          </div>
        ))}
      </div>

      <style>{`
        .countdown-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: relative;
        }
        .countdown-eyebrow {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-family: var(--font-mono);
          font-size: 0.82rem;
          letter-spacing: 0.18em;
          color: var(--purple-light);
          margin-bottom: 1.25rem;
          text-transform: uppercase;
        }
        .countdown-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--purple-light);
          box-shadow: 0 0 10px var(--purple-light);
          animation: pulseGlow 2s infinite;
        }
        .countdown-grid {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }
        @media (max-width: 640px) {
          .countdown-grid {
            gap: 0.65rem;
          }
        }
        .countdown-box {
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
        }
        .countdown-number-wrap {
          background: rgba(14, 9, 24, 0.7);
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          min-width: 82px;
          height: 82px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4), inset 0 0 20px rgba(138, 43, 226, 0.1);
          backdrop-filter: blur(8px);
          transition: border-color 0.3s;
        }
        .countdown-box:hover .countdown-number-wrap {
          border-color: var(--purple-light);
        }
        @media (max-width: 640px) {
          .countdown-number-wrap {
            min-width: 64px;
            height: 64px;
          }
        }
        .countdown-number {
          font-family: var(--font-display);
          font-size: 2.8rem;
          color: var(--white);
          letter-spacing: 0.05em;
          line-height: 1;
        }
        @media (max-width: 640px) {
          .countdown-number {
            font-size: 2.2rem;
          }
        }
        .countdown-label {
          font-family: var(--font-mono);
          font-size: 0.68rem;
          letter-spacing: 0.15em;
          color: var(--muted);
          margin-top: 0.5rem;
          text-transform: uppercase;
        }
        .countdown-separator {
          position: absolute;
          right: -0.9rem;
          top: 22px;
          font-family: var(--font-display);
          font-size: 2rem;
          color: var(--purple-light);
          opacity: 0.6;
        }
        @media (max-width: 640px) {
          .countdown-separator {
            right: -0.45rem;
            top: 16px;
            font-size: 1.5rem;
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
