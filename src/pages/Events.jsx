import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Clock, Users, MapPin, CheckCircle2, 
  Calendar, Award, Sparkles, AlertCircle, GitFork
} from 'lucide-react';
import TechAtmosphere from '../components/TechAtmosphere';
import Reveal from '../components/Reveal';
import { eventsData, ticketPricing } from '../data/events';
import { registrationOptions } from '../data/registration';
import { useRegistrationPricing } from '../hooks/useRegistrationPricing';
import sairamCampusFacade from '../assets/architecture/sairam-campus-facade.png';

export default function Events() {
  const { isOfferActive, hasEnded, getPassInfo, offerConfig } = useRegistrationPricing();
  const [selectedDayTab, setSelectedDayTab] = useState('all');

  const day1Events = eventsData.filter(evt => evt.day === 1);
  const day2Events = eventsData.filter(evt => evt.day === 2);
  const day1Passes = registrationOptions.filter(p => p.dayNumber === 1);
  const day2Passes = registrationOptions.filter(p => p.dayNumber === 2);

  return (
    <div className="events-page-root">
      <TechAtmosphere />

      {/* Page Header with Asymmetric Visual Hero */}
      <section className="events-hero-section">
        <div className="container">
          <div className="events-hero-layout">
            {/* Left Column: Information (~58%) */}
            <Reveal variant="header" className="events-hero-left">
              <span className="section-eyebrow">OFFICIAL CONFERENCE PROGRAM</span>
              <h1 className="events-hero-title">
                TECHX'26<br />
                <span className="text-purple-highlight">CONFERENCE EVENTS</span>
              </h1>
              <p className="events-hero-sub">
                Seven technical and professional experiences organized chronologically across Day 1 (13 October) and Day 2 (14 October 2026).
              </p>

              {/* Quick Day Navigation / Jump Anchors */}
              <div className="events-day-nav">
                <button
                  onClick={() => setSelectedDayTab('all')}
                  className={`day-nav-btn ${selectedDayTab === 'all' ? 'day-nav-active' : ''}`}
                >
                  ALL EXPERIENCES (01–07)
                </button>
                <button
                  onClick={() => setSelectedDayTab('day1')}
                  className={`day-nav-btn ${selectedDayTab === 'day1' ? 'day-nav-active' : ''}`}
                >
                  DAY 01 // 13 OCTOBER
                </button>
                <button
                  onClick={() => setSelectedDayTab('day2')}
                  className={`day-nav-btn ${selectedDayTab === 'day2' ? 'day-nav-active' : ''}`}
                >
                  DAY 02 // 14 OCTOBER
                </button>
                <a href="#pricing-section" className="day-nav-btn day-nav-pricing">
                  TICKET PRICING ↓
                </a>
              </div>
            </Reveal>

            {/* Right Column: Architectural Visual Panel (~42%) */}
            <div className="events-hero-right">
              <Reveal variant="image" className="events-hero-visual-panel">
                <img 
                  src={sairamCampusFacade} 
                  alt="Sri Sai Ram Institute of Technology Campus Architectural Facade" 
                  className="events-hero-panel-img"
                />
                <div className="events-hero-panel-overlay"></div>
                <div className="events-hero-panel-grid"></div>
                <div className="events-hero-panel-tag">
                  <span className="panel-tag-brand">TECHX'26</span>
                  <span className="panel-tag-loc">SSIT • CHENNAI</span>
                </div>
                <div className="events-hero-panel-coords">
                  <span>12.9606° N, 80.0532° E</span>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Events List Organized by Day */}
      <div className="container events-program-container">
        {/* ============================================================
            DAY 01 — 13 OCTOBER 2026
        ============================================================ */}
        {(selectedDayTab === 'all' || selectedDayTab === 'day1') && (
          <section className="day-program-section" id="day1-section">
            <Reveal variant="header" className="day-program-header">
              <div className="day-header-meta">
                <span className="day-badge-large">DAY 01</span>
                <span className="day-date-text">TUESDAY, 13 OCTOBER 2026</span>
              </div>
              <h2 className="day-header-title">INAUGURATION, MENTORSHIP & 24-HOUR HACKATHON</h2>
              
              {/* Day 1 Progression Flow */}
              <div className="day-flow-bar">
                <div className="flow-step">
                  <span className="flow-time">09:00 AM</span>
                  <span className="flow-title">Inauguration</span>
                </div>
                <span className="flow-arrow">→</span>
                <div className="flow-step">
                  <span className="flow-time">10:00 AM</span>
                  <span className="flow-title">Nano Mentoring & IEEE CS Benefits</span>
                </div>
                <span className="flow-arrow">→</span>
                <div className="flow-step flow-step-highlight">
                  <span className="flow-time">01:30 PM</span>
                  <span className="flow-title">VerdictX Hackathon Begins</span>
                </div>
              </div>
            </Reveal>

            <Reveal variant="stagger" className="day-events-grid">
              {day1Events.map((evt) => (
                <article key={evt.id} className={`event-program-card ${evt.id === 'verdictx' ? 'card-overnight-highlight' : ''} reveal-card`}>
                  <div className="card-top-row">
                    <div className="card-number-badge">
                      <span className="badge-tech">{evt.badge}</span>
                    </div>
                    <div className="card-timing-pill">
                      <Clock size={14} />
                      <span>{evt.duration}</span>
                    </div>
                  </div>

                  <div className="card-body">
                    <h3 className="card-event-title">{evt.title}</h3>
                    <p className="card-event-sub">{evt.subtitle}</p>
                    <p className="card-event-desc">{evt.shortDescription}</p>

                    {/* Factual Operational Details */}
                    <div className="card-specs-row">
                      <div className="card-spec-box">
                        <span className="spec-label">VENUE</span>
                        <strong className="spec-val">
                          <MapPin size={13} style={{ display: 'inline', marginRight: '4px' }} />
                          {evt.venueRoom}
                        </strong>
                      </div>
                      <div className="card-spec-box">
                        <span className="spec-label">TEAM SIZE</span>
                        <strong className="spec-val">{evt.teamSize}</strong>
                      </div>
                      <div className="card-spec-box">
                        <span className="spec-label">CAPACITY</span>
                        <strong className="spec-val">{evt.participantsLabel}</strong>
                      </div>
                    </div>

                    {/* Key Highlights */}
                    {evt.highlights && (
                      <div className="card-highlights">
                        {evt.highlights.slice(0, 3).map((h, i) => (
                          <div key={i} className="highlight-item">
                            <CheckCircle2 size={13} color="var(--purple-light)" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Prizes & Recognition Preview */}
                    {evt.prizes && (
                      <div className="card-recognition-box">
                        <Award size={14} color="var(--purple-light)" />
                        <span><strong>Recognition:</strong> {evt.prizes.recognition} {evt.prizes.certificates}</span>
                      </div>
                    )}
                  </div>

                  <div className="card-action-row">
                    <Link to={`/events/${evt.id}`} className="btn btn-primary card-btn">
                      <span>VIEW EVENT DETAILS</span>
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </article>
              ))}
            </Reveal>
          </section>
        )}

        {/* ============================================================
            DAY 02 — 14 OCTOBER 2026
        ============================================================ */}
        {(selectedDayTab === 'all' || selectedDayTab === 'day2') && (
          <section className="day-program-section" id="day2-section">
            <Reveal variant="header" className="day-program-header">
              <div className="day-header-meta">
                <span className="day-badge-large">DAY 02</span>
                <span className="day-date-text">WEDNESDAY, 14 OCTOBER 2026</span>
              </div>
              <h2 className="day-header-title">CYBERSECURITY CTF, TINYML WORKSHOP, PITCH & CODING</h2>
              
              {/* Day 2 Progression Flow */}
              <div className="day-flow-bar">
                <div className="flow-step">
                  <span className="flow-time">09:00 AM</span>
                  <span className="flow-title">Sherlock & Syntax (CTF)</span>
                </div>
                <span className="flow-arrow">→</span>
                <div className="flow-step">
                  <span className="flow-time">10:45 AM</span>
                  <span className="flow-title">Edge AI & TinyML Workshop</span>
                </div>
                <span className="flow-arrow">→</span>
                <div className="flow-step flow-step-parallel">
                  <span className="flow-time">01:15 PM</span>
                  <span className="flow-title">Parallel: Idea Alchemy | CodeNomics</span>
                </div>
                <span className="flow-arrow">→</span>
                <div className="flow-step">
                  <span className="flow-time">03:30 PM</span>
                  <span className="flow-title">Valedictory & Awards</span>
                </div>
              </div>
            </Reveal>

            {/* Morning Events: CTF & Workshop */}
            <Reveal variant="stagger" className="day-events-grid">
              {day2Events.slice(0, 2).map((evt) => (
                <article key={evt.id} className="event-program-card reveal-card">
                  <div className="card-top-row">
                    <div className="card-number-badge">
                      <span className="badge-tech">{evt.badge}</span>
                    </div>
                    <div className="card-timing-pill">
                      <Clock size={14} />
                      <span>{evt.duration}</span>
                    </div>
                  </div>

                  <div className="card-body">
                    <h3 className="card-event-title">{evt.title}</h3>
                    <p className="card-event-sub">{evt.subtitle}</p>
                    <p className="card-event-desc">{evt.shortDescription}</p>

                    <div className="card-specs-row">
                      <div className="card-spec-box">
                        <span className="spec-label">VENUE</span>
                        <strong className="spec-val">
                          <MapPin size={13} style={{ display: 'inline', marginRight: '4px' }} />
                          {evt.venueRoom}
                        </strong>
                      </div>
                      <div className="card-spec-box">
                        <span className="spec-label">TEAM STRUCTURE</span>
                        <strong className="spec-val">{evt.teamSize}</strong>
                      </div>
                      <div className="card-spec-box">
                        <span className="spec-label">CAPACITY</span>
                        <strong className="spec-val">{evt.participantsLabel}</strong>
                      </div>
                    </div>

                    {evt.highlights && (
                      <div className="card-highlights">
                        {evt.highlights.slice(0, 3).map((h, i) => (
                          <div key={i} className="highlight-item">
                            <CheckCircle2 size={13} color="var(--purple-light)" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {evt.prizes && (
                      <div className="card-recognition-box">
                        <Award size={14} color="var(--purple-light)" />
                        <span><strong>Recognition:</strong> {evt.prizes.recognition}</span>
                      </div>
                    )}
                  </div>

                  <div className="card-action-row">
                    <Link to={`/events/${evt.id}`} className="btn btn-primary card-btn">
                      <span>VIEW EVENT DETAILS</span>
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </article>
              ))}
            </Reveal>

            {/* Parallel Tracks Notice & Parallel Card Layout at 13:15 */}
            <div className="parallel-session-container">
              <Reveal variant="pop" className="parallel-session-banner">
                <div className="parallel-tag">
                  <GitFork size={15} />
                  <span>PARALLEL TRACKS // 01:15 PM – 03:00/03:30 PM</span>
                </div>
                <p className="parallel-desc">
                  Idea Alchemy and CodeNomics run concurrently in separate halls. Attendees select their track based on their specialization.
                </p>
              </Reveal>

              <Reveal variant="stagger" className="parallel-cards-grid">
                {day2Events.slice(2, 4).map((evt) => (
                  <article key={evt.id} className="event-program-card parallel-child-card reveal-card">
                    <div className="card-top-row">
                      <div className="card-number-badge">
                        <span className="badge-tech">{evt.badge}</span>
                        {evt.id === 'idea-alchemy' && (
                          <span className="badge-tech" style={{ background: 'rgba(138, 43, 226, 0.25)', borderColor: 'var(--purple-light)' }}>
                            HACKATHON & INNOVATION
                          </span>
                        )}
                        <span className="badge-parallel-pill">CONCURRENT TRACK</span>
                      </div>
                      <div className="card-timing-pill">
                        <Clock size={14} />
                        <span>{evt.duration}</span>
                      </div>
                    </div>

                    <div className="card-body">
                      <h3 className="card-event-title">{evt.title}</h3>
                      <p className="card-event-sub">{evt.subtitle}</p>
                      <p className="card-event-desc">{evt.shortDescription}</p>

                      <div className="card-specs-row">
                        <div className="card-spec-box">
                          <span className="spec-label">VENUE</span>
                          <strong className="spec-val">
                            <MapPin size={13} style={{ display: 'inline', marginRight: '4px' }} />
                            {evt.venueRoom}
                          </strong>
                        </div>
                        <div className="card-spec-box">
                          <span className="spec-label">TEAM STRUCTURE</span>
                          <strong className="spec-val">{evt.teamSize}</strong>
                        </div>
                        <div className="card-spec-box">
                          <span className="spec-label">CAPACITY</span>
                          <strong className="spec-val">{evt.participantsLabel}</strong>
                        </div>
                      </div>

                      {evt.highlights && (
                        <div className="card-highlights">
                          {evt.highlights.slice(0, 3).map((h, i) => (
                            <div key={i} className="highlight-item">
                              <CheckCircle2 size={13} color="var(--purple-light)" />
                              <span>{h}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {evt.prizes && (
                        <div className="card-recognition-box">
                          <Award size={14} color="var(--purple-light)" />
                          <span><strong>Recognition:</strong> {evt.prizes.recognition}</span>
                        </div>
                      )}
                    </div>

                    <div className="card-action-row">
                      <Link to={`/events/${evt.id}`} className="btn btn-primary card-btn">
                        <span>VIEW EVENT DETAILS</span>
                        <ArrowRight size={16} />
                      </Link>
                    </div>
                  </article>
                ))}
              </Reveal>
            </div>

            {/* Day 2 Valedictory Banner */}
            <Reveal variant="card" className="valedictory-banner">
              <div className="valedictory-content">
                <span className="valedictory-badge">03:30 PM // GRAND VALEDICTORY</span>
                <h4>Valedictory Ceremony, Prize Distribution & Closing Remarks</h4>
                <p>Campus Auditorium • Announcement of track winners, distribution of certificates and mementos, followed by official closing address.</p>
              </div>
              <Link to="/schedule" className="btn btn-secondary">
                <span>VIEW FULL TIMELINE</span>
              </Link>
            </Reveal>
          </section>
        )}

        {/* ============================================================
            REGISTRATION / TICKET PRICING SECTION
        ============================================================ */}
        <section className="pricing-section" id="pricing-section">
          <Reveal variant="header" className="pricing-section-header">
            <span className="section-eyebrow">
              {isOfferActive ? 'EARLY REGISTRATION OFFER' : 'DELEGATE ACCESS PASSES'}
            </span>
            <h2 className="pricing-main-title">{ticketPricing.sectionTitle}</h2>
            <p className="pricing-main-sub">
              {isOfferActive 
                ? 'Register now and save ₹100 on every registration.'
                : hasEnded
                ? 'Standard registration fees apply for all conference tracks.'
                : ticketPricing.subtitle}
            </p>
          </Reveal>

          <Reveal variant="stagger" className="pricing-grid">
            {/* Day 1 Pass Card */}
            <div className="pricing-card reveal-card">
              <div className="pricing-card-top">
                <span className="pricing-day-tag">{ticketPricing.day1.accessLabel || "DAY 1 + DAY 2 ACCESS"}</span>
                <h3 className="pricing-card-title">{ticketPricing.day1.title}</h3>
                <span className="pricing-card-date">{ticketPricing.day1.date}</span>
              </div>

              {/* Tiers Breakdown */}
              <div className="pricing-tiers-list">
                {day1Passes.map((pass) => {
                  const pInfo = getPassInfo(pass);
                  return (
                    <div key={pass.id} className="tier-row">
                      <div className="tier-info">
                        <span className="tier-cat-name">{pass.category}</span>
                        <p className="tier-cat-desc">{pass.description}</p>
                      </div>
                      <div className="tier-price-box">
                        <span className="tier-price">{pInfo.displayPrice}</span>
                        {isOfferActive && (
                          <del className="tier-struck-price">{pInfo.normalDisplayPrice}</del>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="pricing-included-box">
                <span className="included-label">PASS INCLUDES:</span>
                <ul className="included-list">
                  {ticketPricing.day1.eventsIncluded.map((inc, i) => (
                    <li key={i}>
                      <CheckCircle2 size={13} color="var(--purple-light)" />
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pricing-card-action">
                <Link to="/register" className="btn btn-primary" style={{ width: '100%' }}>
                  <span>REGISTER FOR FULL EVENT PASS</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Day 2 Pass Card */}
            <div className="pricing-card reveal-card">
              <div className="pricing-card-top">
                <span className="pricing-day-tag">{ticketPricing.day2.accessLabel || "DAY 2 ACCESS ONLY"}</span>
                <h3 className="pricing-card-title">{ticketPricing.day2.title}</h3>
                <span className="pricing-card-date">{ticketPricing.day2.date}</span>
              </div>

              {/* Tiers Breakdown */}
              <div className="pricing-tiers-list">
                {day2Passes.map((pass) => {
                  const pInfo = getPassInfo(pass);
                  return (
                    <div key={pass.id} className="tier-row">
                      <div className="tier-info">
                        <span className="tier-cat-name">{pass.category}</span>
                        <p className="tier-cat-desc">{pass.description}</p>
                      </div>
                      <div className="tier-price-box">
                        <span className="tier-price">{pInfo.displayPrice}</span>
                        {isOfferActive && (
                          <del className="tier-struck-price">{pInfo.normalDisplayPrice}</del>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="pricing-included-box">
                <span className="included-label">PASS INCLUDES:</span>
                <ul className="included-list">
                  {ticketPricing.day2.eventsIncluded.map((inc, i) => (
                    <li key={i}>
                      <CheckCircle2 size={13} color="var(--purple-light)" />
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pricing-card-action">
                <Link to="/register" className="btn btn-primary" style={{ width: '100%' }}>
                  <span>REGISTER FOR DAY 2 PASS</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </Reveal>

          {/* Pricing Footnote & Notice */}
          <Reveal variant="pop" className="pricing-footnote-box">
            <AlertCircle size={15} color="var(--purple-light)" style={{ flexShrink: 0, marginTop: '2px' }} />
            <p>{ticketPricing.footnote} Final registration details and payment gateway access will be announced soon.</p>
          </Reveal>
        </section>
      </div>

      <style>{`
        .events-page-root {
          padding-top: var(--nav-height);
          background: #000000;
          min-height: 100vh;
        }
        .events-hero-section {
          padding: clamp(3rem, 6vw, 5rem) 0 3rem;
          border-bottom: 1px solid var(--border-subtle);
          background: radial-gradient(circle at 50% 0%, rgba(138, 43, 226, 0.12) 0%, transparent 70%);
        }
        .events-hero-layout {
          display: grid;
          grid-template-columns: 1.35fr 1fr;
          gap: clamp(2rem, 4vw, 3.5rem);
          align-items: center;
        }
        .events-hero-left {
          display: flex;
          flex-direction: column;
        }
        .events-hero-right {
          display: flex;
          justify-content: center;
        }
        .events-hero-visual-panel {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 11;
          border-radius: var(--radius-md);
          overflow: hidden;
          border: 1px solid rgba(138, 43, 226, 0.4);
          background: #0A0612;
          box-shadow: 0 15px 35px -10px rgba(138, 43, 226, 0.25), 0 0 20px rgba(138, 43, 226, 0.1);
        }
        .events-hero-panel-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(100%) contrast(1.15) brightness(0.85);
          display: block;
        }
        .events-hero-panel-overlay {
          position: absolute;
          inset: 0;
          background: 
            linear-gradient(135deg, rgba(138, 43, 226, 0.22) 0%, rgba(10, 5, 20, 0.85) 100%),
            linear-gradient(to right, rgba(0, 0, 0, 0.65) 0%, transparent 60%),
            linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, transparent 50%);
          pointer-events: none;
        }
        .events-hero-panel-grid {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(184, 108, 255, 0.18) 1px, transparent 1px);
          background-size: 16px 16px;
          pointer-events: none;
        }
        .events-hero-panel-tag {
          position: absolute;
          bottom: 1.25rem;
          left: 1.25rem;
          background: rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(138, 43, 226, 0.4);
          border-radius: var(--radius-xs);
          padding: 0.5rem 0.85rem;
          display: flex;
          flex-direction: column;
          gap: 0.15rem;
          z-index: 2;
        }
        .panel-tag-brand {
          font-family: var(--font-display);
          font-size: 1.15rem;
          color: var(--white);
          letter-spacing: 0.05em;
          line-height: 1;
        }
        .panel-tag-loc {
          font-family: var(--font-mono);
          font-size: 0.68rem;
          color: var(--purple-light);
          letter-spacing: 0.08em;
          font-weight: 600;
        }
        .events-hero-panel-coords {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: rgba(0, 0, 0, 0.75);
          backdrop-filter: blur(6px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: var(--radius-xs);
          padding: 0.3rem 0.6rem;
          font-family: var(--font-mono);
          font-size: 0.68rem;
          color: rgba(255, 255, 255, 0.7);
          letter-spacing: 0.05em;
          z-index: 2;
        }
        .events-hero-title {
          font-size: clamp(2.4rem, 6vw, 4.2rem);
          line-height: 1.05;
          letter-spacing: -0.03em;
          text-transform: uppercase;
          margin: 0.75rem 0 1rem;
        }
        .events-hero-sub {
          max-width: 680px;
          font-size: clamp(1rem, 2vw, 1.15rem);
          color: var(--muted);
          line-height: 1.6;
          margin-bottom: 2rem;
        }
        .events-day-nav {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
          padding-top: 0.5rem;
        }
        .day-nav-btn {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-subtle);
          color: var(--muted);
          padding: 0.65rem 1.25rem;
          border-radius: var(--radius-sm);
          font-family: var(--font-mono);
          font-size: 0.8rem;
          cursor: pointer;
          transition: var(--transition-fast);
          letter-spacing: 0.05em;
          text-decoration: none;
        }
        .day-nav-btn:hover {
          color: var(--white);
          border-color: var(--border);
          background: rgba(255, 255, 255, 0.06);
        }
        .day-nav-active {
          background: rgba(138, 43, 226, 0.2);
          border-color: var(--purple-light);
          color: var(--white);
          box-shadow: 0 0 15px rgba(138, 43, 226, 0.25);
        }
        .day-nav-pricing {
          margin-left: auto;
          background: rgba(138, 43, 226, 0.12);
          border-color: var(--border);
          color: var(--purple-light);
        }
        .events-program-container {
          padding-top: 3rem;
          padding-bottom: 5rem;
        }
        .day-program-section {
          margin-bottom: 4.5rem;
        }
        .day-program-header {
          margin-bottom: 2rem;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid var(--border-subtle);
        }
        .day-header-meta {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 0.5rem;
        }
        .day-badge-large {
          background: var(--purple);
          color: var(--white);
          font-family: var(--font-mono);
          font-size: 0.75rem;
          font-weight: 700;
          padding: 0.25rem 0.65rem;
          border-radius: var(--radius-xs);
          letter-spacing: 0.08em;
        }
        .day-date-text {
          font-family: var(--font-mono);
          font-size: 0.85rem;
          color: var(--purple-light);
          letter-spacing: 0.04em;
        }
        .day-header-title {
          font-size: clamp(1.4rem, 3vw, 2rem);
          text-transform: uppercase;
          letter-spacing: -0.02em;
          margin: 0.5rem 0 1.25rem;
        }
        .day-flow-bar {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex-wrap: wrap;
          padding: 0.85rem 1.15rem;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
        }
        .flow-step {
          display: flex;
          flex-direction: column;
        }
        .flow-time {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--purple-light);
          font-weight: 600;
        }
        .flow-title {
          font-size: 0.85rem;
          color: var(--light-gray);
          font-weight: 500;
        }
        .flow-step-highlight .flow-title {
          color: var(--white);
          font-weight: 600;
        }
        .flow-step-parallel .flow-title {
          color: #E0AAFF;
        }
        .flow-arrow {
          color: var(--muted);
          font-size: 0.9rem;
        }
        .day-events-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.75rem;
        }
        .event-program-card {
          background: rgba(10, 10, 15, 0.85);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          padding: clamp(1.5rem, 3vw, 2.25rem);
          transition: transform 250ms cubic-bezier(0.16, 1, 0.3, 1),
                      border-color 250ms cubic-bezier(0.16, 1, 0.3, 1),
                      box-shadow 250ms cubic-bezier(0.16, 1, 0.3, 1);
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          position: relative;
        }
        .event-program-card:hover {
          border-color: rgba(184, 108, 255, 0.45);
          box-shadow: 0 12px 30px -8px rgba(138, 43, 226, 0.35);
          transform: translateY(-3px);
        }
        .card-overnight-highlight {
          border-color: rgba(138, 43, 226, 0.35);
          background: linear-gradient(135deg, rgba(138, 43, 226, 0.08) 0%, rgba(10, 10, 15, 0.95) 100%);
        }
        .card-top-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
        }
        .card-number-badge {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex-wrap: wrap;
        }
        .evt-num {
          font-family: var(--font-mono);
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--white);
          letter-spacing: -0.03em;
        }
        .badge-parallel-pill {
          background: rgba(138, 43, 226, 0.25);
          border: 1px solid var(--purple-light);
          color: var(--white);
          font-family: var(--font-mono);
          font-size: 0.68rem;
          font-weight: 700;
          padding: 0.2rem 0.55rem;
          border-radius: var(--radius-xs);
          letter-spacing: 0.05em;
        }
        .badge-parallel-pill {
          background: rgba(184, 108, 255, 0.18);
          border-color: rgba(184, 108, 255, 0.6);
          color: #E0AAFF;
        }
        .card-timing-pill {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-family: var(--font-mono);
          font-size: 0.8rem;
          color: var(--purple-light);
          background: rgba(255, 255, 255, 0.03);
          padding: 0.3rem 0.7rem;
          border-radius: 20px;
          border: 1px solid var(--border-subtle);
        }
        .card-event-title {
          font-size: clamp(1.4rem, 2.5vw, 1.85rem);
          text-transform: uppercase;
          letter-spacing: -0.02em;
          margin: 0 0 0.25rem;
        }
        .card-event-sub {
          font-size: 0.95rem;
          color: var(--purple-light);
          margin: 0 0 0.85rem;
          font-weight: 500;
        }
        .card-event-desc {
          font-size: 0.95rem;
          color: var(--muted);
          line-height: 1.6;
          margin-bottom: 1.25rem;
        }
        .card-specs-row {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 1rem;
          padding: 1rem;
          background: rgba(0, 0, 0, 0.4);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
          margin-bottom: 1.25rem;
        }
        .card-spec-box {
          display: flex;
          flex-direction: column;
        }
        .spec-label {
          font-family: var(--font-mono);
          font-size: 0.68rem;
          color: var(--muted);
          letter-spacing: 0.05em;
          margin-bottom: 0.25rem;
        }
        .spec-val {
          font-size: 0.88rem;
          color: var(--white);
        }
        .card-highlights {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-bottom: 1.25rem;
        }
        .highlight-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.88rem;
          color: var(--light-gray);
        }
        .card-recognition-box {
          display: flex;
          align-items: flex-start;
          gap: 0.6rem;
          padding: 0.75rem 1rem;
          background: rgba(138, 43, 226, 0.08);
          border: 1px solid rgba(138, 43, 226, 0.2);
          border-radius: var(--radius-sm);
          font-size: 0.85rem;
          color: var(--light-gray);
          line-height: 1.45;
        }
        .card-action-row {
          margin-top: auto;
          display: flex;
          justify-content: flex-end;
        }
        .card-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          font-size: 0.85rem;
        }

        /* Parallel Tracks Section Styling */
        .parallel-session-container {
          margin-top: 2rem;
          background: rgba(138, 43, 226, 0.04);
          border: 1px solid rgba(138, 43, 226, 0.25);
          border-radius: var(--radius-md);
          padding: clamp(1.25rem, 2.5vw, 2rem);
        }
        .parallel-session-banner {
          margin-bottom: 1.5rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid var(--border-subtle);
        }
        .parallel-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-mono);
          font-size: 0.78rem;
          font-weight: 700;
          color: var(--purple-light);
          letter-spacing: 0.06em;
          margin-bottom: 0.35rem;
        }
        .parallel-desc {
          font-size: 0.9rem;
          color: var(--muted);
        }
        .parallel-cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 1.5rem;
        }
        .parallel-child-card {
          background: rgba(0, 0, 0, 0.6);
        }

        /* Valedictory Banner */
        .valedictory-banner {
          margin-top: 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1.5rem;
          flex-wrap: wrap;
          padding: 1.5rem 1.75rem;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
        }
        .valedictory-badge {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--purple-light);
          letter-spacing: 0.06em;
          display: block;
          margin-bottom: 0.25rem;
        }
        .valedictory-content h4 {
          font-size: 1.15rem;
          margin: 0 0 0.35rem;
          color: var(--white);
        }
        .valedictory-content p {
          font-size: 0.88rem;
          color: var(--muted);
          margin: 0;
        }

        /* Pricing Section */
        .pricing-section {
          padding-top: 3rem;
          border-top: 1px solid var(--border-subtle);
        }
        .pricing-section-header {
          text-align: center;
          max-width: 700px;
          margin: 0 auto 2.5rem;
        }
        .pricing-main-title {
          font-size: clamp(2rem, 4vw, 3rem);
          text-transform: uppercase;
          letter-spacing: -0.02em;
          margin: 0.5rem 0 0.75rem;
        }
        .pricing-main-sub {
          font-size: 1rem;
          color: var(--muted);
          line-height: 1.5;
        }
        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
          gap: 2rem;
          margin-bottom: 1.5rem;
        }
        .pricing-card {
          background: rgba(10, 10, 15, 0.85);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          padding: clamp(1.5rem, 3vw, 2.25rem);
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          transition: var(--transition-fast);
        }
        .pricing-card:hover {
          border-color: var(--purple-light);
          box-shadow: 0 10px 30px rgba(138, 43, 226, 0.15);
        }
        .pricing-day-tag {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          font-weight: 700;
          color: var(--purple-light);
          letter-spacing: 0.08em;
          display: block;
          margin-bottom: 0.25rem;
        }
        .pricing-card-title {
          font-size: 1.6rem;
          text-transform: uppercase;
          letter-spacing: -0.02em;
          margin: 0 0 0.25rem;
        }
        .pricing-card-date {
          font-family: var(--font-mono);
          font-size: 0.82rem;
          color: var(--muted);
        }
        .pricing-tiers-list {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          padding: 1.25rem;
          background: rgba(0, 0, 0, 0.4);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
        }
        .tier-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
          padding-bottom: 0.75rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }
        .tier-row:last-child {
          padding-bottom: 0;
          border-bottom: none;
        }
        .tier-cat-name {
          font-family: var(--font-mono);
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--white);
          letter-spacing: 0.04em;
          display: block;
        }
        .tier-cat-desc {
          font-size: 0.76rem;
          color: var(--muted);
          margin: 2px 0 0;
          line-height: 1.35;
        }
        .tier-price-box {
          display: flex;
          align-items: baseline;
          gap: 0.5rem;
        }
        .tier-price {
          font-family: var(--font-mono);
          font-size: 1.4rem;
          font-weight: 800;
          color: var(--purple-light);
          white-space: nowrap;
        }
        .tier-struck-price {
          font-family: var(--font-mono);
          font-size: 0.88rem;
          color: var(--muted);
          text-decoration: line-through;
          text-decoration-color: rgba(138, 43, 226, 0.7);
          opacity: 0.75;
          user-select: none;
        }
        .pricing-included-box {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }
        .included-label {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--muted);
          letter-spacing: 0.06em;
        }
        .included-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .included-list li {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.85rem;
          color: var(--light-gray);
        }
        .pricing-card-action {
          margin-top: auto;
        }
        .pricing-footnote-box {
          display: flex;
          align-items: flex-start;
          gap: 0.65rem;
          max-width: 800px;
          margin: 0 auto;
          padding: 1rem 1.25rem;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
          font-size: 0.82rem;
          color: var(--muted);
          line-height: 1.45;
        }
        .pricing-footnote-box p {
          margin: 0;
        }

        @media (max-width: 960px) {
          .events-hero-layout {
            grid-template-columns: 1fr;
            gap: 2.25rem;
          }
          .events-hero-visual-panel {
            aspect-ratio: 16 / 9;
            max-height: 320px;
          }
        }

        @media (max-width: 768px) {
          .day-flow-bar {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
          }
          .flow-arrow {
            display: none;
          }
          .card-action-row {
            justify-content: stretch;
          }
          .card-btn {
            width: 100%;
            justify-content: center;
          }
          .valedictory-banner {
            flex-direction: column;
            align-items: flex-start;
          }
          .valedictory-banner .btn {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
}
