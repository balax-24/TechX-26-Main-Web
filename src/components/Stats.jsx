import React, { useState, useEffect, useRef } from 'react';
import { verifiedStats, participantBreakdown } from '../data/contacts';
import { Users, Trophy, ShieldCheck, Cpu, Briefcase } from 'lucide-react';

export default function Stats({ isLight = false }) {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const icons = [
    <Users size={22} color="var(--purple-light)" />,
    <Trophy size={22} color="var(--purple-light)" />,
    <ShieldCheck size={22} color="var(--purple-light)" />,
    <Cpu size={22} color="var(--purple-light)" />,
    <Briefcase size={22} color="var(--purple-light)" />
  ];

  return (
    <div className={`stats-wrapper ${isLight ? 'stats-light' : ''}`} ref={containerRef}>
      <div className="stats-header">
        <span className="section-eyebrow">VERIFIED SCALE</span>
        <h3 className="stats-heading">TECHX AT A GLANCE</h3>
        <p className="stats-sub">
          Official attendance capacities and delegate allocations structured under the IEEE CS SBC charter.
        </p>
      </div>

      {/* Main Metric Cards */}
      <div className="stats-cards-grid">
        {verifiedStats.map((stat, idx) => (
          <div key={stat.label} className="stat-card">
            <div className="stat-card-top">
              <div className="stat-icon-wrap">{icons[idx]}</div>
              <span className="stat-card-num">0{idx + 1}</span>
            </div>
            
            <div className="stat-val-wrap">
              <span className="stat-number">
                {isVisible ? stat.value : 0}
              </span>
              <span className="stat-suffix">{stat.suffix}</span>
            </div>

            <h4 className="stat-label">{stat.label}</h4>
            <p className="stat-note">{stat.note}</p>
          </div>
        ))}
      </div>

      {/* Participant Composition Bar */}
      <div className="composition-card">
        <div className="composition-header">
          <span className="composition-title">DELEGATE COMPOSITION BREAKDOWN</span>
          <span className="composition-meta">250 TOTAL EXPECTED ATTENDEES</span>
        </div>

        <div className="progress-bar-stack">
          <div className="progress-seg seg-ieee-cs" style={{ width: '36%' }}>
            <span>36%</span>
          </div>
          <div className="progress-seg seg-ieee-other" style={{ width: '24%' }}>
            <span>24%</span>
          </div>
          <div className="progress-seg seg-non-ieee" style={{ width: '40%' }}>
            <span>40%</span>
          </div>
        </div>

        <div className="composition-legend">
          {participantBreakdown.map((item, idx) => (
            <div key={item.label} className="legend-item">
              <span className={`legend-dot dot-${idx}`}></span>
              <div className="legend-text">
                <strong>{item.label}</strong>
                <span>{item.count} Participants ({item.percent})</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .stats-wrapper {
          position: relative;
        }
        .stats-header {
          text-align: center;
          max-width: 650px;
          margin: 0 auto 3rem;
        }
        .stats-heading {
          font-size: clamp(1.8rem, 3.5vw, 2.75rem);
          text-transform: uppercase;
          letter-spacing: -0.02em;
          margin-bottom: 0.75rem;
        }
        .stats-sub {
          font-size: 0.98rem;
        }
        .stats-cards-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 1.25rem;
          margin-bottom: 3rem;
        }
        @media (max-width: 1200px) {
          .stats-cards-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        @media (max-width: 768px) {
          .stats-cards-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 480px) {
          .stats-cards-grid {
            grid-template-columns: 1fr;
          }
        }
        .stat-card {
          background: var(--dark-card);
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          padding: 1.5rem;
          transition: var(--transition-normal);
          position: relative;
        }
        .stat-card:hover {
          border-color: var(--purple-light);
          transform: translateY(-4px);
          box-shadow: 0 10px 30px rgba(138, 43, 226, 0.2);
        }
        .stat-card-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.25rem;
        }
        .stat-icon-wrap {
          width: 40px;
          height: 40px;
          border-radius: var(--radius-sm);
          background: rgba(138, 43, 226, 0.12);
          border: 1px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .stat-card-num {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--purple-light);
        }
        .stat-val-wrap {
          display: flex;
          align-items: baseline;
          margin-bottom: 0.5rem;
        }
        .stat-number {
          font-family: var(--font-display);
          font-size: 3.2rem;
          line-height: 1;
          color: var(--white);
          letter-spacing: 0.02em;
        }
        .stat-suffix {
          font-family: var(--font-display);
          font-size: 2rem;
          color: var(--purple-light);
          margin-left: 2px;
        }
        .stat-label {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--white);
          margin-bottom: 0.35rem;
          line-height: 1.25;
        }
        .stat-note {
          font-size: 0.8rem;
          color: var(--muted);
          line-height: 1.4;
        }

        /* Composition Bar */
        .composition-card {
          background: rgba(14, 9, 24, 0.6);
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          padding: 1.75rem;
          backdrop-filter: blur(10px);
        }
        .composition-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .composition-title {
          font-family: var(--font-mono);
          font-size: 0.78rem;
          letter-spacing: 0.12em;
          color: var(--white);
          text-transform: uppercase;
        }
        .composition-meta {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--purple-light);
          font-weight: 700;
        }
        .progress-bar-stack {
          height: 28px;
          background: rgba(0, 0, 0, 0.5);
          border-radius: var(--radius-sm);
          overflow: hidden;
          display: flex;
          border: 1px solid var(--border-subtle);
          margin-bottom: 1.25rem;
        }
        .progress-seg {
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--white);
          transition: width 1s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .seg-ieee-cs {
          background: #8A2BE2;
        }
        .seg-ieee-other {
          background: #4E148C;
        }
        .seg-non-ieee {
          background: #1C122C;
          border-left: 1px solid var(--border-subtle);
        }
        .composition-legend {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1.25rem;
        }
        .legend-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .legend-dot {
          width: 12px;
          height: 12px;
          border-radius: 3px;
        }
        .dot-0 { background: #8A2BE2; box-shadow: 0 0 8px #8A2BE2; }
        .dot-1 { background: #4E148C; }
        .dot-2 { background: #2E1B4E; border: 1px solid var(--border-subtle); }
        .legend-text {
          display: flex;
          flex-direction: column;
        }
        .legend-text strong {
          font-size: 0.85rem;
          color: var(--white);
        }
        .legend-text span {
          font-size: 0.78rem;
          color: var(--muted);
          font-family: var(--font-mono);
        }

        /* Light Variation */
        .stats-light .stat-card {
          background: #FFFFFF;
          border-color: rgba(138, 43, 226, 0.2);
        }
        .stats-light .stat-number,
        .stats-light .stat-label {
          color: #0E0918;
        }
        .stats-light .composition-card {
          background: #FFFFFF;
          border-color: rgba(138, 43, 226, 0.2);
        }
        .stats-light .composition-title,
        .stats-light .legend-text strong {
          color: #0E0918;
        }
      `}</style>
    </div>
  );
}
