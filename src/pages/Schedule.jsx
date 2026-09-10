import React, { useState } from 'react';
import { Calendar, Clock, Moon, Sun, ArrowRight, Zap, CheckCircle2 } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import TechAtmosphere from '../components/TechAtmosphere';
import { scheduleData } from '../data/schedule';

export default function Schedule({ onOpenRegister }) {
  const [activeDay, setActiveDay] = useState('day1');

  const currentSchedule = scheduleData[activeDay];

  return (
    <div className="schedule-page-root">
      <TechAtmosphere />

      {/* Page Header */}
      <section className="schedule-hero-section">
        <div className="container">
          <span className="section-eyebrow">OFFICIAL ITINERARY</span>
          <h1 className="schedule-hero-title">
            TWO-DAY<br />
            <span className="text-purple-highlight">OPERATIONAL TIMELINE</span>
          </h1>
          <p className="schedule-hero-sub">
            From the inauguration to the 24-hour open-domain hackathon and Day 2 technical tracks, explore the full chronological roadmap of TechX Madras 2026.
          </p>

          {/* Day Switcher Tabs */}
          <div className="day-switcher-bar">
            <button
              onClick={() => setActiveDay('day1')}
              className={`day-tab-btn ${activeDay === 'day1' ? 'day-tab-active' : ''}`}
            >
              <div className="tab-date-row">
                <Sun size={18} />
                <span>DAY 01</span>
              </div>
              <strong>WEDNESDAY, 14 OCT 2026</strong>
              <span className="tab-sub">Inauguration & 24H Hackathon Commencement</span>
            </button>

            <button
              onClick={() => setActiveDay('day2')}
              className={`day-tab-btn ${activeDay === 'day2' ? 'day-tab-active' : ''}`}
            >
              <div className="tab-date-row">
                <Moon size={18} />
                <span>DAY 02</span>
              </div>
              <strong>THURSDAY, 15 OCT 2026</strong>
              <span className="tab-sub">Cyber CTF, TinyML Workshop, Pitch & Coding</span>
            </button>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="timeline-section">
        <div className="container">
          <div className="schedule-subhead">
            <h2 className="curr-day-title">{currentSchedule.title}</h2>
            <p className="curr-day-sub">{currentSchedule.subtitle}</p>
          </div>

          {activeDay === 'day1' && (
            <div className="overnight-banner">
              <span className="overnight-pulse"></span>
              <div className="overnight-content">
                <strong>24-HOUR OVERNIGHT MARATHON NOTICE</strong>
                <p>The VerdictX: Code & Conquer hackathon spans continuously overnight in Steve Jobs Hall from 01:30 PM on Day 1 through Round 3 Defense on Day 2 morning.</p>
              </div>
            </div>
          )}

          {/* The Timeline Track */}
          <div className="timeline-track">
            <div className="timeline-center-line"></div>

            {currentSchedule.timeline.map((item, index) => {
              const isOvernight = item.time.includes('PM –') || item.time.includes('AM') && (item.time.startsWith('11:') || item.time.startsWith('12:') || item.time.startsWith('03:') || item.time.startsWith('04:'));
              const isEven = index % 2 === 0;

              return (
                <div 
                  key={index} 
                  className={`timeline-row ${isEven ? 'row-left' : 'row-right'} ${item.highlight ? 'row-highlight' : ''}`}
                >
                  {/* Time Box */}
                  <div className="timeline-time-box">
                    <span className="time-display">{item.time}</span>
                    <span className="time-cat">{item.category}</span>
                  </div>

                  {/* Central Node Indicator */}
                  <div className="timeline-node">
                    <div className={`node-circle ${item.highlight ? 'node-circle-highlight' : ''}`}>
                      {item.badge ? <Zap size={13} color="#FFFFFF" /> : <span className="node-inner-dot"></span>}
                    </div>
                  </div>

                  {/* Event Details Card */}
                  <div className="timeline-content-box">
                    <div className="content-card-inner">
                      <div className="timeline-badge-row">
                        {item.badge && (
                          <span className="timeline-badge">{item.badge}</span>
                        )}
                        {item.venue && (
                          <span className="timeline-venue-chip">{item.venue}</span>
                        )}
                      </div>
                      <h3 className="timeline-event-title">{item.title}</h3>
                      <p className="timeline-event-desc">{item.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Schedule Footer Action */}
          <div className="schedule-footer-box">
            <div>
              <h3>READY TO PARTICIPATE IN THESE SESSIONS?</h3>
              <p>Reserve your track entry early before seat limits are reached.</p>
            </div>
            <button onClick={onOpenRegister} className="btn btn-primary">
              <span>REGISTER FOR SESSIONS</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      <style>{`
        .schedule-page-root {
          padding-top: var(--nav-height);
          background: #000000;
          min-height: 100vh;
        }
        .schedule-hero-section {
          padding: 5rem 0 3.5rem;
          border-bottom: 1px solid var(--border-subtle);
          position: relative;
        }
        .schedule-hero-title {
          font-family: var(--font-display);
          font-size: clamp(3rem, 7vw, 6rem);
          line-height: 0.95;
          letter-spacing: 0.03em;
          text-transform: uppercase;
          margin: 1rem 0 1.5rem;
        }
        .schedule-hero-sub {
          font-size: 1.15rem;
          max-width: 740px;
          margin-bottom: 3rem;
        }
        .day-switcher-bar {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          max-width: 900px;
        }
        @media (max-width: 640px) {
          .day-switcher-bar {
            grid-template-columns: 1fr;
          }
        }
        .day-tab-btn {
          background: rgba(14, 9, 24, 0.6);
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          padding: 1.5rem 1.75rem;
          text-align: left;
          color: var(--muted);
          transition: var(--transition-fast);
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }
        .day-tab-btn:hover {
          border-color: var(--purple-light);
          background: rgba(138, 43, 226, 0.1);
        }
        .day-tab-active {
          background: #0F081C;
          border-color: var(--purple-light);
          box-shadow: 0 0 25px rgba(138, 43, 226, 0.25);
          color: var(--white);
        }
        .tab-date-row {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-mono);
          font-size: 0.78rem;
          color: var(--purple-light);
          font-weight: 700;
        }
        .day-tab-btn strong {
          font-size: 1.15rem;
          color: var(--white);
          letter-spacing: 0.02em;
        }
        .tab-sub {
          font-size: 0.8rem;
          color: var(--muted);
        }

        /* Timeline Section */
        .timeline-section {
          padding: 5rem 0;
        }
        .schedule-subhead {
          text-align: center;
          margin-bottom: 3rem;
        }
        .curr-day-title {
          font-size: clamp(1.8rem, 3.5vw, 2.5rem);
          text-transform: uppercase;
          margin-bottom: 0.5rem;
        }
        .curr-day-sub {
          font-family: var(--font-mono);
          font-size: 0.88rem;
          color: var(--purple-light);
        }
        .overnight-banner {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          background: rgba(138, 43, 226, 0.12);
          border: 1px solid var(--purple-light);
          border-radius: var(--radius-sm);
          padding: 1.25rem 1.75rem;
          max-width: 820px;
          margin: 0 auto 4rem;
        }
        .overnight-pulse {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: var(--purple-light);
          box-shadow: 0 0 15px var(--purple-light);
          animation: pulseGlow 1.8s infinite;
          flex-shrink: 0;
        }
        .overnight-content strong {
          display: block;
          font-family: var(--font-mono);
          font-size: 0.85rem;
          letter-spacing: 0.1em;
          color: var(--white);
          margin-bottom: 0.25rem;
        }
        .overnight-content p {
          font-size: 0.88rem;
          color: var(--off-white);
        }

        /* Timeline Track */
        .timeline-track {
          position: relative;
          max-width: 1100px;
          margin: 0 auto 5rem;
        }
        .timeline-center-line {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 50%;
          width: 2px;
          background: linear-gradient(180deg, var(--purple) 0%, var(--purple-light) 50%, var(--purple) 100%);
          transform: translateX(-50%);
          box-shadow: 0 0 15px rgba(138, 43, 226, 0.4);
        }
        @media (max-width: 860px) {
          .timeline-center-line {
            left: 14px;
          }
        }
        .timeline-row {
          display: grid;
          grid-template-columns: 1fr 60px 1fr;
          align-items: center;
          margin-bottom: 2.5rem;
          position: relative;
        }
        .row-left .timeline-time-box {
          text-align: right;
          padding-right: 2rem;
        }
        .row-left .timeline-content-box {
          text-align: left;
          padding-left: 2rem;
        }
        .row-right .timeline-time-box {
          grid-column: 3;
          text-align: left;
          padding-left: 2rem;
        }
        .row-right .timeline-content-box {
          grid-column: 1;
          grid-row: 1;
          text-align: right;
          padding-right: 2rem;
        }
        @media (max-width: 860px) {
          .timeline-row {
            display: flex;
            flex-direction: column;
            align-items: stretch;
            padding-left: 2.5rem;
            margin-bottom: 2rem;
            position: relative;
          }
          .timeline-node {
            position: absolute;
            left: 0;
            top: 0.25rem;
            grid-column: unset;
          }
          .row-left .timeline-time-box,
          .row-right .timeline-time-box {
            display: flex;
            flex-wrap: wrap;
            align-items: baseline;
            gap: 0.5rem;
            text-align: left;
            padding: 0 0 0.5rem 0;
            grid-column: unset;
            grid-row: unset;
          }
          .row-left .timeline-content-box,
          .row-right .timeline-content-box {
            text-align: left;
            padding: 0;
            grid-column: unset;
            grid-row: unset;
          }
          .time-display {
            font-size: 1.35rem;
          }
        }
        @media (max-width: 600px) {
          .timeline-track {
            margin-bottom: 3.5rem;
          }
          .timeline-row {
            padding-left: 2rem;
            margin-bottom: 1.75rem;
          }
          .content-card-inner {
            padding: 1.25rem 1rem;
          }
          .schedule-footer-box {
            padding: 1.75rem 1.25rem !important;
            flex-direction: column;
            align-items: stretch;
            text-align: left;
            gap: 1.25rem;
          }
          .schedule-footer-box .btn {
            width: 100%;
            justify-content: center;
          }
        }
        .time-display {
          display: block;
          font-family: var(--font-display);
          font-size: 1.8rem;
          color: var(--white);
          letter-spacing: 0.03em;
        }
        .time-cat {
          display: block;
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--purple-light);
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }
        .timeline-node {
          grid-column: 2;
          display: flex;
          justify-content: center;
          z-index: 2;
        }
        @media (max-width: 860px) {
          .timeline-node {
            grid-column: 1;
          }
        }
        .node-circle {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: #090510;
          border: 2px solid var(--purple);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 10px rgba(138, 43, 226, 0.4);
          transition: var(--transition-fast);
        }
        .node-circle-highlight {
          background: var(--purple);
          border-color: var(--purple-light);
          box-shadow: 0 0 18px var(--purple-light);
        }
        .node-inner-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--purple-light);
        }
        .content-card-inner {
          background: #0B0713;
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          padding: 1.75rem 2rem;
          transition: var(--transition-normal);
        }
        .row-highlight .content-card-inner {
          border-color: var(--border-strong);
          background: #0F091A;
          box-shadow: 0 8px 30px rgba(138, 43, 226, 0.2);
        }
        .timeline-badge-row {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          flex-wrap: wrap;
          margin-bottom: 0.65rem;
        }
        .timeline-badge {
          display: inline-block;
          font-family: var(--font-mono);
          font-size: 0.68rem;
          letter-spacing: 0.1em;
          color: var(--white);
          background: var(--purple);
          padding: 0.25rem 0.65rem;
          border-radius: var(--radius-sm);
          font-weight: 700;
        }
        .timeline-venue-chip {
          display: inline-block;
          font-family: var(--font-mono);
          font-size: 0.68rem;
          letter-spacing: 0.08em;
          color: var(--purple-light);
          background: rgba(138, 43, 226, 0.12);
          border: 1px solid rgba(138, 43, 226, 0.35);
          padding: 0.25rem 0.65rem;
          border-radius: var(--radius-sm);
          font-weight: 600;
        }
        .timeline-event-title {
          font-size: 1.35rem;
          margin-bottom: 0.5rem;
          color: var(--white);
        }
        .timeline-event-desc {
          font-size: 0.92rem;
          line-height: 1.55;
          color: var(--muted);
        }

        /* Schedule Footer */
        .schedule-footer-box {
          background: rgba(14, 9, 24, 0.7);
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          padding: 2.5rem 3rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 2rem;
          flex-wrap: wrap;
        }
        .schedule-footer-box h3 {
          font-size: 1.5rem;
          text-transform: uppercase;
          margin-bottom: 0.25rem;
        }
        .schedule-footer-box p {
          font-size: 0.95rem;
        }
      `}</style>
    </div>
  );
}
