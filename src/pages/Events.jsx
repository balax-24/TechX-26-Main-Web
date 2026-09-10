import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Filter, Users, Clock, Terminal, Shield, Cpu, Lightbulb, Coins, Sparkles, CheckCircle2 } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import TechAtmosphere from '../components/TechAtmosphere';
import { eventsData } from '../data/events';

export default function Events() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All 7 Events' },
    { id: 'championship', label: '24H Hackathon' },
    { id: 'cyber', label: 'Cybersecurity CTF' },
    { id: 'workshop', label: 'AI & TinyML' },
    { id: 'venture', label: 'Pitch & Strategy' },
    { id: 'mentorship', label: 'Mentorship & Keynotes' }
  ];

  const filteredEvents = eventsData.filter(evt => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'championship') return evt.id === 'verdictx' || evt.id === 'build-break-defend';
    if (activeCategory === 'cyber') return evt.id === 'sherlock-syntax' || evt.id === 'cipherx';
    if (activeCategory === 'workshop') return evt.id === 'edge-ai-tinyml';
    if (activeCategory === 'venture') return evt.id === 'idea-alchemy' || evt.id === 'codenomics';
    if (activeCategory === 'mentorship') return evt.id === 'nano-mentoring' || evt.id === 'ieee-cs-benefits';
    return true;
  });

  return (
    <div className="events-page-root">
      <TechAtmosphere />

      {/* Page Header */}
      <section className="events-hero-section">
        <div className="container">
          <span className="section-eyebrow">OFFICIAL 2026 EVENT PORTFOLIO</span>
          <h1 className="events-hero-title">
            THINK. BUILD.<br />
            <span className="text-purple-highlight">BREAK. DEFEND. CREATE.</span>
          </h1>
          <p className="events-hero-sub">
            From the 24-hour open-domain hackathon to on-device TinyML intelligence and cybersecurity CTF, discover our full operational lineup.
          </p>

          {/* Filter Chips */}
          <div className="category-filters">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`filter-btn ${activeCategory === cat.id ? 'filter-btn-active' : ''}`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Events Grid Section */}
      <section className="events-list-section">
        <div className="container">
          <div className="events-large-grid">
            {filteredEvents.map((evt) => (
              <article key={evt.id} className="event-feature-row">
                <div className="feature-row-head">
                  <div className="head-badge-group">
                    <span className="event-giant-num">{evt.number}</span>
                    <span className="badge-tech">{evt.badge}</span>
                  </div>
                  <div className="head-duration-pill">
                    <Clock size={14} />
                    <span>{evt.duration}</span>
                  </div>
                </div>

                <div className="feature-row-main">
                  <h2 className="feature-title">{evt.title}</h2>
                  <p className="feature-subtitle">{evt.subtitle}</p>
                  
                  <p className="feature-desc">
                    {evt.shortDescription}
                  </p>

                  {/* Highlights Bullet List */}
                  {evt.highlights && (
                    <div className="feature-highlights">
                      {evt.highlights.slice(0, 3).map((h, i) => (
                        <div key={i} className="highlight-pill">
                          <CheckCircle2 size={14} color="var(--purple-light)" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Operational Details Grid */}
                  <div className="feature-specs-grid">
                    <div className="spec-box">
                      <span className="spec-label">TEAM STRUCTURE</span>
                      <strong className="spec-value">{evt.teamSize}</strong>
                    </div>
                    <div className="spec-box">
                      <span className="spec-label">SEATS / CAPACITY</span>
                      <strong className="spec-value">{evt.participants} Participants</strong>
                    </div>
                    <div className="spec-box">
                      <span className="spec-label">DATE & TIMING</span>
                      <strong className="spec-value">{evt.date}</strong>
                    </div>
                  </div>
                </div>

                <div className="feature-row-action">
                  <Link to={`/events/${evt.id}`} className="btn btn-primary spec-btn">
                    <span>EXPLORE SPECIFICATION</span>
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Quick Matrix Overview Table */}
          <div className="matrix-overview-card">
            <div className="matrix-head">
              <span className="section-eyebrow">SYNTHESIS</span>
              <h3 className="matrix-title">CAPACITY & FORMAT SUMMARY</h3>
            </div>

            <div className="matrix-table-wrap">
              <table className="matrix-table">
                <thead>
                  <tr>
                    <th>EVENT NAME</th>
                    <th>TRACK CATEGORY</th>
                    <th>TEAM SIZE</th>
                    <th>CAPACITY</th>
                    <th>ACTION</th>
                  </tr>
                </thead>
                <tbody>
                  {eventsData.map((e) => (
                    <tr key={e.id}>
                      <td className="table-title-cell">
                        <span className="tbl-num">{e.number}</span>
                        <strong>{e.title}</strong>
                      </td>
                      <td><span className="badge-tech" style={{ fontSize: '0.7rem' }}>{e.badge}</span></td>
                      <td>{e.teamSize}</td>
                      <td className="table-cap-cell">{e.participants}</td>
                      <td>
                        <Link to={`/events/${e.id}`} className="table-link">
                          VIEW →
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .events-page-root {
          padding-top: var(--nav-height);
          background: #000000;
          min-height: 100vh;
        }
        .events-hero-section {
          padding: 5rem 0 3.5rem;
          border-bottom: 1px solid var(--border-subtle);
          position: relative;
        }
        .events-hero-title {
          font-family: var(--font-display);
          font-size: clamp(3rem, 7vw, 6rem);
          line-height: 0.95;
          letter-spacing: 0.03em;
          text-transform: uppercase;
          margin: 1rem 0 1.5rem;
        }
        .events-hero-sub {
          font-size: 1.15rem;
          max-width: 740px;
          margin-bottom: 2.5rem;
        }
        .category-filters {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
        }
        .filter-btn {
          font-family: var(--font-mono);
          font-size: 0.78rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 0.6rem 1.25rem;
          border-radius: var(--radius-sm);
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border);
          color: var(--muted);
          transition: var(--transition-fast);
        }
        .filter-btn:hover {
          color: var(--white);
          border-color: var(--purple-light);
          background: rgba(138, 43, 226, 0.15);
        }
        .filter-btn-active {
          color: var(--white);
          background: var(--purple);
          border-color: var(--purple-light);
          box-shadow: 0 0 15px var(--purple-glow);
        }

        /* Large Event Feature Rows */
        .events-list-section {
          padding: 4.5rem 0;
        }
        .events-large-grid {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
          margin-bottom: 5rem;
        }
        .event-feature-row {
          background: #0A0612;
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          padding: 2.5rem;
          display: grid;
          grid-template-columns: 200px 1fr 240px;
          gap: 2.5rem;
          align-items: center;
          transition: var(--transition-normal);
          position: relative;
          overflow: hidden;
        }
        @media (max-width: 1024px) {
          .event-feature-row {
            grid-template-columns: 1fr;
            gap: 1.75rem;
          }
        }
        @media (max-width: 600px) {
          .event-feature-row {
            padding: 1.5rem 1.15rem;
          }
          .matrix-overview-card {
            padding: 1.5rem 1rem !important;
          }
          .filter-btn {
            font-size: 0.72rem;
            padding: 0.5rem 0.85rem;
          }
        }
        .event-feature-row:hover {
          border-color: var(--border-strong);
          background: #0F091A;
          transform: translateY(-4px);
          box-shadow: 0 15px 40px rgba(138, 43, 226, 0.22);
        }
        .feature-row-head {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .event-giant-num {
          font-family: var(--font-display);
          font-size: 4.5rem;
          line-height: 0.85;
          color: rgba(255, 255, 255, 0.2);
          transition: color 0.3s;
        }
        .event-feature-row:hover .event-giant-num {
          color: var(--purple-light);
        }
        .head-duration-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--muted);
        }
        .feature-title {
          font-family: var(--font-display);
          font-size: clamp(2rem, 3.5vw, 2.75rem);
          line-height: 1;
          letter-spacing: 0.03em;
          text-transform: uppercase;
          margin-bottom: 0.35rem;
          color: var(--white);
        }
        .feature-subtitle {
          font-family: var(--font-heading);
          font-size: 0.98rem;
          color: var(--purple-light);
          font-weight: 600;
          margin-bottom: 1rem;
        }
        .feature-desc {
          font-size: 0.95rem;
          line-height: 1.65;
          color: var(--muted);
          margin-bottom: 1.5rem;
        }
        .feature-highlights {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
          margin-bottom: 1.5rem;
        }
        .highlight-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          font-size: 0.8rem;
          color: var(--off-white);
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-subtle);
          padding: 0.3rem 0.75rem;
          border-radius: var(--radius-sm);
        }
        .feature-specs-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          padding-top: 1.25rem;
        }
        @media (max-width: 640px) {
          .feature-specs-grid {
            grid-template-columns: 1fr;
          }
        }
        .spec-label {
          display: block;
          font-family: var(--font-mono);
          font-size: 0.68rem;
          letter-spacing: 0.12em;
          color: var(--muted-dark);
          margin-bottom: 0.25rem;
        }
        .spec-value {
          font-size: 0.9rem;
          color: var(--white);
        }
        .feature-row-action {
          display: flex;
          justify-content: flex-end;
        }
        @media (max-width: 1024px) {
          .feature-row-action {
            justify-content: flex-start;
          }
        }
        .spec-btn {
          width: 100%;
        }

        /* Matrix Table */
        .matrix-overview-card {
          background: #0B0714;
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          padding: 2.5rem;
        }
        .matrix-head {
          margin-bottom: 2rem;
        }
        .matrix-title {
          font-size: 1.8rem;
          text-transform: uppercase;
        }
        .matrix-table-wrap {
          overflow-x: auto;
        }
        .matrix-table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
        }
        .matrix-table th {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          letter-spacing: 0.12em;
          color: var(--purple-light);
          padding: 1rem;
          border-bottom: 1px solid var(--border);
        }
        .matrix-table td {
          padding: 1.15rem 1rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          font-size: 0.92rem;
          color: var(--muted);
        }
        .table-title-cell {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .table-title-cell strong {
          color: var(--white);
        }
        .tbl-num {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--purple-light);
        }
        .table-cap-cell {
          font-family: var(--font-mono);
          color: var(--white);
        }
        .table-link {
          font-family: var(--font-mono);
          font-size: 0.8rem;
          color: var(--purple-light);
          font-weight: 700;
        }
        .table-link:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
}
