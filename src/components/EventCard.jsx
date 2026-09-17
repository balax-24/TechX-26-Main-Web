import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Clock, Shield, Sparkles, Terminal, Cpu, Lightbulb, Coins } from 'lucide-react';

export default function EventCard({ event, featured = false }) {
  const getEventIcon = (id) => {
    switch (id) {
      case 'verdictx':
      case 'build-break-defend':
        return <Terminal size={24} color="var(--purple-light)" />;
      case 'sherlock-syntax':
      case 'cipherx':
        return <Shield size={24} color="var(--purple-light)" />;
      case 'edge-ai-tinyml':
        return <Cpu size={24} color="var(--purple-light)" />;
      case 'idea-alchemy':
        return <Lightbulb size={24} color="var(--purple-light)" />;
      case 'codenomics':
        return <Coins size={24} color="var(--purple-light)" />;
      default:
        return <Sparkles size={24} color="var(--purple-light)" />;
  };

  return (
    <div className={`event-card-root ${featured ? 'event-card-featured' : ''}`}>
      {/* Top Meta */}
      <div className="event-card-head">
        <div className="event-badge-wrap">
          <span className="event-number">{event.number}</span>
          <span className="badge-tech">{event.badge}</span>
          {event.id === 'idea-alchemy' && (
            <span className="badge-tech" style={{ background: 'rgba(138, 43, 226, 0.25)', borderColor: 'var(--purple-light)' }}>
              HACKATHON & INNOVATION
            </span>
          )}
        </div>
        <div className="event-icon-circle">
          {getEventIcon(event.id)}
        </div>
      </div>

      {/* Main Title & Subtitle */}
      <div className="event-card-body">
        <h3 className="event-card-title">{event.title}</h3>
        <p className="event-card-subtitle">{event.subtitle}</p>

        <p className="event-card-desc">
          {event.shortDescription}
        </p>

        {/* Key Metrics */}
        <div className="event-card-metrics">
          <div className="metric-chip">
            <Users size={14} />
            <span>{event.teamSize}</span>
          </div>
          <div className="metric-chip">
            <Clock size={14} />
            <span>{event.participantsLabel || `${event.participants} Participants`}</span>
          </div>
        </div>
      </div>

      {/* Footer / CTA */}
      <div className="event-card-footer">
        <Link to={`/events/${event.id}`} className="event-explore-btn">
          <span>VIEW EVENT DETAILS</span>
          <ArrowRight size={16} className="arrow-icon" />
        </Link>
      </div>

      {/* Subtle Circuit Line Motif in Card Background */}
      <div className="card-circuit-accent"></div>

      <style>{`
        .event-card-root {
          background: #0B0713;
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          padding: 2.25rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          position: relative;
          overflow: hidden;
          transition: var(--transition-normal);
        }
        .event-card-root::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--purple-light), transparent);
          opacity: 0;
          transition: opacity 0.3s;
        }
        .event-card-root:hover {
          border-color: var(--border-strong);
          transform: translateY(-5px);
          box-shadow: 0 16px 45px rgba(138, 43, 226, 0.25);
          background: #0F091A;
        }
        .event-card-root:hover::before {
          opacity: 1;
        }
        .event-card-head {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1.75rem;
        }
        .event-badge-wrap {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .event-number {
          font-family: var(--font-display);
          font-size: 2.5rem;
          color: rgba(255, 255, 255, 0.2);
          line-height: 1;
          transition: color 0.3s, transform 0.3s;
        }
        .event-card-root:hover .event-number {
          color: var(--purple-light);
          transform: scale(1.05);
        }
        .event-icon-circle {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(138, 43, 226, 0.1);
          border: 1px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition-normal);
        }
        .event-card-root:hover .event-icon-circle {
          background: var(--purple);
          border-color: var(--purple-light);
          box-shadow: 0 0 20px var(--purple-glow);
        }
        .event-card-root:hover .event-icon-circle svg {
          color: var(--white) !important;
        }
        .event-card-body {
          flex: 1;
        }
        .event-card-title {
          font-family: var(--font-display);
          font-size: 2.2rem;
          letter-spacing: 0.03em;
          line-height: 1.05;
          margin-bottom: 0.4rem;
          color: var(--white);
          text-transform: uppercase;
        }
        .event-card-subtitle {
          font-family: var(--font-heading);
          font-size: 0.95rem;
          color: var(--purple-light);
          margin-bottom: 1.25rem;
          font-weight: 600;
        }
        .event-card-desc {
          font-size: 0.92rem;
          line-height: 1.6;
          color: var(--muted);
          margin-bottom: 1.5rem;
        }
        .event-card-metrics {
          display: flex;
          gap: 0.75rem;
          margin-bottom: 2rem;
          flex-wrap: wrap;
        }
        .metric-chip {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          font-family: var(--font-mono);
          font-size: 0.78rem;
          color: var(--muted);
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-subtle);
          padding: 0.35rem 0.75rem;
          border-radius: var(--radius-sm);
        }
        .event-card-footer {
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          padding-top: 1.25rem;
        }
        .event-explore-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          font-family: var(--font-mono);
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: var(--white);
          text-transform: uppercase;
          transition: var(--transition-fast);
        }
        .event-explore-btn:hover {
          color: var(--purple-light);
        }
        .event-explore-btn .arrow-icon {
          transition: transform 0.25s ease;
        }
        .event-explore-btn:hover .arrow-icon {
          transform: translateX(6px);
        }
        .card-circuit-accent {
          position: absolute;
          bottom: -20px;
          right: -20px;
          width: 90px;
          height: 90px;
          border-right: 1px dashed rgba(138, 43, 226, 0.2);
          border-bottom: 1px dashed rgba(138, 43, 226, 0.2);
          pointer-events: none;
        }
      `}</style>
    </div>
  );
}
