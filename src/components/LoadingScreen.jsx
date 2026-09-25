import React, { useState, useEffect } from 'react';
import logoImg from '../assets/logo/TechX White New.png';

export default function LoadingScreen({ onComplete }) {
  const [phase, setPhase] = useState(0); 
  // 0: Initial black screen (0-150ms)
  // 1: Thin purple line (150ms)
  // 2: TechX Logo reveal (450ms)
  // 3: TECHX'26 title reveal (800ms)
  // 4: "IGNITE THE CODE. OWN THE FUTURE." (1150ms)
  // 5: Fade out (1600ms)
  // Complete at 1900ms

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      const timer = setTimeout(() => {
        onComplete();
      }, 300);
      return () => clearTimeout(timer);
    }

    const t1 = setTimeout(() => setPhase(1), 150);
    const t2 = setTimeout(() => setPhase(2), 450);
    const t3 = setTimeout(() => setPhase(3), 800);
    const t4 = setTimeout(() => setPhase(4), 1150);
    const t5 = setTimeout(() => setPhase(5), 1550);
    const t6 = setTimeout(() => onComplete(), 1850);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
      clearTimeout(t6);
    };
  }, [onComplete]);

  return (
    <div className={`loader-overlay ${phase >= 5 ? 'loader-fade-out' : ''}`} aria-hidden="true">
      {/* Thin purple line */}
      <div className={`loader-line ${phase >= 1 ? 'loader-line-expanded' : ''}`}></div>

      <div className="loader-center-content">
        {/* Official TechX Logo */}
        <div className={`loader-logo-wrap ${phase >= 2 ? 'loader-visible' : ''}`}>
          <img src={logoImg} alt="TechX Logo" className="loader-logo-img" />
        </div>

        {/* TECHX'26 Display Title */}
        <div className={`loader-title-wrap ${phase >= 3 ? 'loader-visible' : ''}`}>
          <span className="loader-title-text">TECHX'26</span>
        </div>

        {/* Tagline & Dates */}
        <div className={`loader-tagline-wrap ${phase >= 4 ? 'loader-visible' : ''}`}>
          <span className="loader-tagline-line">IGNITE THE CODE. OWN THE FUTURE.</span>
          <span className="loader-date-line">13 — 14 OCTOBER 2026</span>
        </div>
      </div>

      <style>{`
        .loader-overlay {
          position: fixed;
          inset: 0;
          background-color: #000000;
          z-index: 99999;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: opacity 0.35s ease, visibility 0.35s ease;
          overflow: hidden;
        }
        .loader-fade-out {
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
        }
        .loader-line {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, #B86CFF, #8A2BE2, #B86CFF, transparent);
          box-shadow: 0 0 15px #B86CFF;
          transform: translate(-50%, -50%);
          transition: width 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          z-index: 1;
        }
        .loader-line-expanded {
          width: 100vw;
        }
        .loader-center-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          z-index: 2;
          position: relative;
          text-align: center;
        }
        .loader-logo-wrap {
          opacity: 0;
          transform: translateY(6px) scale(0.94);
          transition: opacity 0.4s ease, transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          margin-bottom: 0.75rem;
        }
        .loader-logo-img {
          height: clamp(96px, 16vw, 150px);
          width: auto;
          object-fit: contain;
          filter: drop-shadow(0 0 25px rgba(184, 108, 255, 0.7));
        }
        .loader-title-wrap {
          opacity: 0;
          transform: translateY(10px);
          transition: opacity 0.4s ease, transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .loader-title-text {
          font-family: var(--font-display);
          font-size: clamp(2.8rem, 6vw, 4.5rem);
          letter-spacing: 0.06em;
          line-height: 1;
          color: #FFFFFF;
          display: block;
        }
        .loader-tagline-wrap {
          opacity: 0;
          transform: translateY(8px);
          transition: opacity 0.4s ease, transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          margin-top: 0.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }
        .loader-tagline-line {
          font-family: var(--font-heading);
          font-size: clamp(0.75rem, 1.6vw, 0.95rem);
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--purple-light);
        }
        .loader-date-line {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          letter-spacing: 0.2em;
          color: var(--muted);
        }
        .loader-visible {
          opacity: 1 !important;
          transform: translate(0, 0) scale(1) !important;
        }
      `}</style>
    </div>
  );
}
