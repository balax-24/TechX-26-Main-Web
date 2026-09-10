import React from 'react';
import { BookOpen, Hammer, Network, Award, TrendingUp } from 'lucide-react';
import SectionHeading from './SectionHeading';

export default function WhyAttend({ light = false }) {
  const reasons = [
    {
      num: '01',
      title: 'LEARN',
      icon: <BookOpen size={24} color="var(--purple-light)" />,
      desc: 'Explore emerging technologies through intensive hands-on workshops and expert industry keynote sessions.'
    },
    {
      num: '02',
      title: 'BUILD',
      icon: <Hammer size={24} color="var(--purple-light)" />,
      desc: 'Develop robust, production-grade solutions through intense technical challenges under real-world constraints.'
    },
    {
      num: '03',
      title: 'CONNECT',
      icon: <Network size={24} color="var(--purple-light)" />,
      desc: 'Meet peers, veteran mentors, corporate professionals, and passionate technology creators from across institutions.'
    },
    {
      num: '04',
      title: 'COMPETE',
      icon: <Award size={24} color="var(--purple-light)" />,
      desc: 'Test your capabilities through competitive coding, cybersecurity CTF, software engineering, and startup venture arenas.'
    },
    {
      num: '05',
      title: 'GROW',
      icon: <TrendingUp size={24} color="var(--purple-light)" />,
      desc: 'Gain high-impact technical, professional, and entrepreneurial exposure that sets you apart in the global tech ecosystem.'
    }
  ];

  return (
    <div className={`why-attend-section ${light ? 'why-attend-light' : ''}`}>
      <SectionHeading
        eyebrow="THE VALUE PROPOSITION"
        title="WHY TECHX?"
        subtitle="Five distinct dimensions designed to propel engineers from curious builders into industry-ready leaders."
        light={light}
      />

      <div className="reasons-grid">
        {reasons.map((r) => (
          <div key={r.num} className="reason-card">
            <div className="reason-top">
              <span className="reason-number">{r.num}</span>
              <div className="reason-icon-wrap">{r.icon}</div>
            </div>
            
            <h3 className="reason-title">{r.title}</h3>
            <p className="reason-desc">{r.desc}</p>
          </div>
        ))}
      </div>

      <style>{`
        .why-attend-section {
          position: relative;
        }
        .reasons-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 1.5rem;
        }
        @media (max-width: 1200px) {
          .reasons-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        @media (max-width: 768px) {
          .reasons-grid {
            grid-template-columns: 1fr;
          }
        }
        .reason-card {
          background: #0D0816;
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          padding: 2.25rem 1.75rem;
          display: flex;
          flex-direction: column;
          transition: var(--transition-normal);
          position: relative;
          overflow: hidden;
        }
        .reason-card:hover {
          border-color: var(--purple-light);
          transform: translateY(-6px);
          box-shadow: 0 12px 35px rgba(138, 43, 226, 0.25);
        }
        .reason-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
        }
        .reason-number {
          font-family: var(--font-display);
          font-size: 3rem;
          line-height: 1;
          color: rgba(255, 255, 255, 0.18);
          transition: color 0.3s;
        }
        .reason-card:hover .reason-number {
          color: var(--purple-light);
        }
        .reason-icon-wrap {
          width: 44px;
          height: 44px;
          border-radius: var(--radius-sm);
          background: rgba(138, 43, 226, 0.12);
          border: 1px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .reason-title {
          font-family: var(--font-display);
          font-size: 2rem;
          letter-spacing: 0.05em;
          margin-bottom: 0.75rem;
          color: var(--white);
        }
        .reason-desc {
          font-size: 0.92rem;
          line-height: 1.6;
          color: var(--muted);
        }

        /* Light Variation */
        .why-attend-light .reason-card {
          background: #FFFFFF;
          border-color: rgba(138, 43, 226, 0.22);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
        }
        .why-attend-light .reason-card:hover {
          border-color: var(--purple);
          box-shadow: 0 12px 35px rgba(138, 43, 226, 0.15);
        }
        .why-attend-light .reason-number {
          color: rgba(138, 43, 226, 0.18);
        }
        .why-attend-light .reason-card:hover .reason-number {
          color: var(--purple);
        }
        .why-attend-light .reason-title {
          color: #0E0918;
        }
        .why-attend-light .reason-desc {
          color: #554D5D;
        }
      `}</style>
    </div>
  );
}
