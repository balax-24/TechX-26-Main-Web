import React, { useState, useEffect } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function GlanceSection() {
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.22 });
  const [countNumber, setCountNumber] = useState('00');

  useEffect(() => {
    if (!isVisible) return;

    // Check prefers reduced motion
    const prefersReducedMotion = typeof window !== 'undefined' && 
      window.matchMedia && 
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setCountNumber('07');
      return;
    }

    // Animate 00 -> 07 over ~700ms using requestAnimationFrame
    const duration = 700;
    const target = 7;
    let startTimestamp = null;
    let animationFrameId = null;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Easing out curve for natural deceleration
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const currentVal = Math.floor(easedProgress * target);
      
      setCountNumber(String(currentVal).padStart(2, '0'));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setCountNumber('07');
      }
    };

    animationFrameId = requestAnimationFrame(step);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isVisible]);

  return (
    <section 
      ref={sectionRef} 
      className={`section glance-metrics-section ${isVisible ? 'glance-revealed' : ''}`}
      aria-label="TechX'26 At A Glance"
    >
      <div className="container">
        {/* Phase 1: Eyebrow and Heading */}
        <div className="glance-head">
          <span className="section-eyebrow glance-phase-1">THE HORIZON</span>
          <h2 className="glance-title glance-phase-1">TECHX'26 AT A GLANCE</h2>
          <p className="glance-subtitle glance-phase-1">
            Verified schedule parameters, experiences, and delegate scale under the IEEE Computer Society SBC charter.
          </p>
        </div>

        {/* Phase 2 (Metrics) & Phase 3 (Labels/Descriptions) & Phase 4 (Dividers) */}
        <div className="glance-metrics-row">
          {/* Metric 1: 14—15 */}
          <div className="glance-metric-item">
            <div className="metric-reveal-mask">
              <span className="metric-large-number glance-phase-2">14—15</span>
            </div>
            <span className="metric-label-tag glance-phase-3">OCTOBER 2026</span>
            <p className="metric-desc glance-phase-3">Two days of technology, competition, learning, and community</p>
          </div>

          {/* Divider 1 */}
          <div className="glance-metric-divider glance-phase-4" aria-hidden="true"></div>

          {/* Metric 2: 24H */}
          <div className="glance-metric-item">
            <div className="metric-reveal-mask">
              <span className="metric-large-number glance-phase-2">24H</span>
            </div>
            <span className="metric-label-tag glance-phase-3">VERDICTX</span>
            <p className="metric-desc glance-phase-3">24-hour open-domain hackathon</p>
          </div>

          {/* Divider 2 */}
          <div className="glance-metric-divider glance-phase-4" aria-hidden="true"></div>

          {/* Metric 3: CTF */}
          <div className="glance-metric-item">
            <div className="metric-reveal-mask">
              <span className="metric-large-number glance-phase-2">CTF</span>
            </div>
            <span className="metric-label-tag glance-phase-3">SHERLOCK & SYNTAX</span>
            <p className="metric-desc glance-phase-3">Cybersecurity Capture The Flag</p>
          </div>

          {/* Divider 3 */}
          <div className="glance-metric-divider glance-phase-4" aria-hidden="true"></div>

          {/* Metric 4: 07 EXPERIENCES (Numerical counter) */}
          <div className="glance-metric-item">
            <div className="metric-reveal-mask">
              <span className="metric-large-number glance-phase-2 metric-number-counter">
                {countNumber}
              </span>
            </div>
            <span className="metric-label-tag glance-phase-3">EXPERIENCES</span>
            <p className="metric-desc glance-phase-3">
              Edge AI, competitive programming, innovation, mentoring & IEEE CS engagement
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .glance-metrics-section {
          padding: 6.5rem 0;
          background: #050308;
          position: relative;
          overflow: hidden;
        }

        .glance-head {
          max-width: 650px;
          margin-bottom: 4rem;
        }

        .glance-title {
          font-size: clamp(2.2rem, 4.5vw, 3.5rem);
          text-transform: uppercase;
          margin-bottom: 0.5rem;
        }

        .glance-subtitle {
          font-size: 1rem;
          color: var(--muted);
        }

        .glance-metrics-row {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 2rem;
          flex-wrap: wrap;
        }

        .glance-metric-item {
          flex: 1;
          min-width: 200px;
          display: flex;
          flex-direction: column;
        }

        .metric-reveal-mask {
          overflow: hidden;
          display: block;
          margin-bottom: 0.5rem;
        }

        .metric-large-number {
          font-family: var(--font-display);
          font-size: clamp(3.8rem, 7vw, 6.5rem);
          line-height: 0.95;
          letter-spacing: 0.02em;
          color: #FFFFFF;
          display: block;
          will-change: transform, opacity;
        }

        .metric-number-counter {
          font-variant-numeric: tabular-nums;
        }

        .metric-label-tag {
          font-family: var(--font-mono);
          font-size: 0.78rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--purple-light);
          margin-bottom: 0.5rem;
          will-change: transform, opacity;
        }

        .metric-desc {
          font-size: 0.88rem;
          color: var(--muted);
          line-height: 1.5;
          will-change: transform, opacity;
        }

        .glance-metric-divider {
          width: 1px;
          height: 110px;
          background: linear-gradient(180deg, rgba(138, 43, 226, 0.45) 0%, rgba(255, 255, 255, 0.08) 100%);
          align-self: center;
          transform-origin: top;
          will-change: transform, opacity;
        }

        @media (max-width: 900px) {
          .glance-metric-divider {
            display: none;
          }
        }

        /* ============================================================
           STAGGERED SCROLL REVEAL TIMINGS & MICRO-INTERACTIONS
           Easing: cubic-bezier(0.22, 1, 0.36, 1)
           Duration: 650–900ms
        ============================================================ */
        .glance-phase-1 {
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 700ms cubic-bezier(0.22, 1, 0.36, 1), 
                      transform 700ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .glance-phase-2 {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 800ms cubic-bezier(0.22, 1, 0.36, 1) 120ms, 
                      transform 800ms cubic-bezier(0.22, 1, 0.36, 1) 120ms;
        }

        .glance-phase-3 {
          opacity: 0;
          transform: translateY(12px);
          transition: opacity 750ms cubic-bezier(0.22, 1, 0.36, 1) 240ms, 
                      transform 750ms cubic-bezier(0.22, 1, 0.36, 1) 240ms;
        }

        .glance-phase-4 {
          opacity: 0;
          transform: scaleY(0);
          transition: opacity 700ms cubic-bezier(0.22, 1, 0.36, 1) 400ms, 
                      transform 750ms cubic-bezier(0.22, 1, 0.36, 1) 400ms;
        }

        /* When viewport intersection threshold triggered */
        .glance-revealed .glance-phase-1 {
          opacity: 1;
          transform: translateY(0);
        }

        .glance-revealed .glance-phase-2 {
          opacity: 1;
          transform: translateY(0);
        }

        .glance-revealed .glance-phase-3 {
          opacity: 1;
          transform: translateY(0);
        }

        .glance-revealed .glance-phase-4 {
          opacity: 1;
          transform: scaleY(1);
        }

        /* Reduced Motion Override */
        @media (prefers-reduced-motion: reduce) {
          .glance-phase-1,
          .glance-phase-2,
          .glance-phase-3,
          .glance-phase-4 {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}
