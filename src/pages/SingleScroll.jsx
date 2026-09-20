import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, ChevronRight, Clock, Users, MapPin, Calendar, Mail,
  Award, Sparkles, Terminal, Shield, Cpu, Lightbulb, Coins,
  Navigation, ExternalLink, ArrowUp
} from 'lucide-react';
import Reveal from '../components/Reveal';
import Countdown from '../components/Countdown';
import { eventsData } from '../data/events';
import { scheduleData } from '../data/schedule';
import { registrationOptions, registrationMeta, passSharedInfo } from '../data/registration';
import { useRegistrationPricing } from '../hooks/useRegistrationPricing';
import { eventMeta } from '../data/contacts';
import { techxAward } from '../data/leadership';

import campusFacadeImg from '../assets/architecture/sairam-campus-facade.png';
import logoImg from '../assets/logo/techx-logo-cropped.png';

export default function SingleScroll() {
  const { isOfferActive, hasEnded, getPassInfo, offerConfig } = useRegistrationPricing();
  const [activeNav, setActiveNav] = useState('top');

  // Listen to scroll position for sticky anchor navigation highlight
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['top', 'about', 'journey', 'events', 'schedule', 'venue', 'register', 'speakers', 'partners', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveNav(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 70;
      const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: elementPosition - navOffset, behavior: 'smooth' });
    }
  };

  const day1Passes = registrationOptions.filter(p => p.dayNumber === 1);
  const day2Passes = registrationOptions.filter(p => p.dayNumber === 2);

  return (
    <div className="single-scroll-root" id="top">
      {/* ============================================================
          1. HERO VIEWPORT
      ============================================================ */}
      <section className="ss-hero-viewport" aria-label="TechX'26 Single Scroll Hero">
        <div className="ss-hero-bg-canvas" aria-hidden="true">
          <img
            src={campusFacadeImg}
            alt="Sri Sai Ram Institute of Technology Campus Architectural Facade"
            className="ss-hero-bg-img"
          />
          <div className="ss-hero-overlay-center"></div>
          <div className="ss-hero-overlay-bottom"></div>
          <div className="ss-hero-overlay-top"></div>
          <div className="ss-hero-overlay-atmosphere"></div>
          <div className="ss-blueprint-grid"></div>
        </div>

        <div className="container ss-hero-container">
          <div className="ss-hero-content">
            <div className="ss-brand-kicker">
              <span className="ss-kicker-dot"></span>
              <span className="ss-kicker-text">
                IEEE COMPUTER SOCIETY STUDENT BRANCH CHAPTER // SRI SAI RAM INSTITUTE OF TECHNOLOGY
              </span>
            </div>

            <h1 className="ss-monument-title">
              TECHX'26
            </h1>

            <p className="ss-tagline">
              IGNITE THE CODE. OWN THE FUTURE.
            </p>

            <div className="ss-editorial-strip">
              <span>14 — 15 OCTOBER 2026</span>
              <span className="ss-sep">•</span>
              <span>SRI SAI RAM INSTITUTE OF TECHNOLOGY</span>
              <span className="ss-sep">•</span>
              <span>CHENNAI, TAMIL NADU</span>
            </div>

            <div className="ss-hero-actions">
              <Link to="/register" className="btn btn-primary ss-cta-btn">
                <span>REGISTER NOW</span>
                <ArrowRight size={16} />
              </Link>
              <button onClick={() => scrollToSection('events')} className="btn btn-secondary ss-cta-btn">
                <span>EXPLORE PROGRAM</span>
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>

        <div className="ss-hero-countdown-dock">
          <div className="container dock-centered-container">
            <Countdown />
          </div>
        </div>
      </section>

      {/* ============================================================
          SCOPED STICKY ANCHOR NAVIGATION (EXISTS ONLY IN SINGLE SCROLL)
      ============================================================ */}
      <nav className="ss-sticky-anchor-bar" aria-label="Single Scroll In-Page Anchor Navigation">
        <div className="container ss-anchor-container">
          <button
            onClick={() => scrollToSection('top')}
            className={`ss-anchor-link ${activeNav === 'top' ? 'ss-anchor-active' : ''}`}
          >
            TOP
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className={`ss-anchor-link ${activeNav === 'about' ? 'ss-anchor-active' : ''}`}
          >
            ABOUT
          </button>
          <button
            onClick={() => scrollToSection('journey')}
            className={`ss-anchor-link ${activeNav === 'journey' ? 'ss-anchor-active' : ''}`}
          >
            JOURNEY
          </button>
          <button
            onClick={() => scrollToSection('events')}
            className={`ss-anchor-link ${activeNav === 'events' ? 'ss-anchor-active' : ''}`}
          >
            EVENTS
          </button>
          <button
            onClick={() => scrollToSection('schedule')}
            className={`ss-anchor-link ${activeNav === 'schedule' ? 'ss-anchor-active' : ''}`}
          >
            SCHEDULE
          </button>
          <button
            onClick={() => scrollToSection('venue')}
            className={`ss-anchor-link ${activeNav === 'venue' ? 'ss-anchor-active' : ''}`}
          >
            VENUE
          </button>
          <button
            onClick={() => scrollToSection('register')}
            className={`ss-anchor-link ${activeNav === 'register' ? 'ss-anchor-active' : ''}`}
          >
            REGISTER
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className={`ss-anchor-link ${activeNav === 'contact' ? 'ss-anchor-active' : ''}`}
          >
            CONTACT
          </button>
        </div>
      </nav>

      {/* ============================================================
          2. WHAT IS TECHX?
      ============================================================ */}
      <section className="ss-section ss-about-section" id="about">
        <div className="container">
          <div className="ss-split-layout">
            <Reveal variant="header" className="ss-split-left">
              <span className="section-eyebrow">ABOUT THE INITIATIVE</span>
              <h2 className="ss-section-heading">
                WHAT<br />
                IS<br />
                <span className="text-purple-highlight">TECHX?</span>
              </h2>
            </Reveal>

            <Reveal variant="pop" delay={100} className="ss-split-right">
              <p className="ss-lead-statement">
                TECHX MADRAS is a premier technical symposium organized by the IEEE Computer Society Student Branch Chapter at Sri Sai Ram Institute of Technology.
              </p>
              <p className="ss-body-text">
                Conceived as an arena of genuine engineering capability, TechX brings together technical competition, hands-on masterclasses, cybersecurity forensics, and professional IEEE mentorship across two high-impact days in Chennai.
              </p>
              <div className="ss-stats-strip">
                <div className="ss-stat-box">
                  <span className="ss-stat-num">02</span>
                  <span className="ss-stat-lbl">DAYS OF CODE</span>
                </div>
                <div className="ss-stat-box">
                  <span className="ss-stat-num">07</span>
                  <span className="ss-stat-lbl">EXPERIENCES</span>
                </div>
                <div className="ss-stat-box">
                  <span className="ss-stat-num">24H</span>
                  <span className="ss-stat-lbl">HACKATHON</span>
                </div>
                <div className="ss-stat-box">
                  <span className="ss-stat-num">650+</span>
                  <span className="ss-stat-lbl">DELEGATES</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============================================================
          3. TECHX'25 → TECHX'26 (COMPACT MILESTONE TIMELINE)
      ============================================================ */}
      <section className="ss-section ss-journey-section" id="journey">
        <div className="container">
          <Reveal variant="header" className="ss-center-head">
            <span className="section-eyebrow">THE TECHX JOURNEY</span>
            <h2 className="ss-section-heading">FROM FOUNDATION TO FLAGSHIP</h2>
            <p className="ss-section-sub">A proven track record of regional community leadership and global recognition.</p>
          </Reveal>

          <Reveal variant="stagger" className="ss-journey-cards-grid">
            <div className="ss-journey-card reveal-card">
              <div className="ss-j-badge-row">
                <span className="ss-edition-pill">TECHX'25</span>
                <span className="ss-award-pill">1ST PLACE OUTSTANDING HOST</span>
              </div>
              <h3 className="ss-j-title">THE FOUNDATION & GLOBAL RECOGNITION</h3>
              <p className="ss-j-desc">
                TechX Madras 2025 united technologists and mentors across the region, earning the prestigious global <strong>Outstanding Host Award — 1st Place</strong> from the IEEE Computer Society Students & Young Professionals (SYP) Committee.
              </p>
            </div>

            <div className="ss-journey-arrow-col">
              <span className="ss-j-arrow">↓</span>
            </div>

            <div className="ss-journey-card ss-journey-card-highlight reveal-card">
              <div className="ss-j-badge-row">
                <span className="ss-edition-pill ss-edition-active">TECHX'26</span>
                <span className="ss-date-pill">14 — 15 OCTOBER 2026</span>
              </div>
              <h3 className="ss-j-title">THE NEXT CHAPTER</h3>
              <p className="ss-j-desc">
                The 2026 edition expands technical frontiers with the 24-hour VerdictX software championship, Sherlock & Syntax cybersecurity CTF, on-device Edge AI masterclass, startup pitching, and algorithmic competitions.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================================================
          4. TECHX EXPERIENCE + 7 FEATURED EVENTS
      ============================================================ */}
      <section className="ss-section ss-events-section" id="events">
        <div className="container">
          <Reveal variant="header" className="ss-center-head">
            <span className="section-eyebrow">THE EXPERIENCE ARCHITECTURE</span>
            <h2 className="ss-section-heading">FEATURED EVENTS</h2>
            <p className="ss-section-sub">
              Seven technical and professional experiences designed to challenge every facet of modern engineering.
            </p>
          </Reveal>

          <Reveal variant="stagger" className="ss-events-grid">
            {eventsData.map((evt) => (
              <div key={evt.id} className="ss-event-card reveal-card">
                <div className="ss-event-card-top">
                  <div className="ss-num-badge-group">
                    <span className="ss-evt-num">{evt.number}</span>
                    <span className="badge-tech">{evt.badge}</span>
                  </div>
                  <span className="ss-evt-day">{evt.dayLabel}</span>
                </div>

                <h3 className="ss-evt-title">{evt.title}</h3>
                <p className="ss-evt-sub">{evt.subtitle}</p>
                <p className="ss-evt-desc">{evt.shortDescription}</p>

                <div className="ss-evt-meta-row">
                  <span className="ss-evt-venue">
                    <MapPin size={13} />
                    <span>{evt.venueRoom}</span>
                  </span>
                  <span className="ss-evt-time">
                    <Clock size={13} />
                    <span>{evt.time}</span>
                  </span>
                </div>

                <div className="ss-evt-action-row">
                  <Link to={`/events/${evt.id}`} className="ss-view-link">
                    <span>VIEW EVENT</span>
                    <ArrowRight size={14} />
                  </Link>
                  <Link to={`/register?event=${evt.id}`} className="ss-reg-pill">
                    REGISTER
                  </Link>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ============================================================
          5. DAY 1 SCHEDULE (14 OCTOBER 2026)
      ============================================================ */}
      <section className="ss-section ss-schedule-section" id="schedule">
        <div className="container">
          <Reveal variant="header" className="ss-center-head">
            <span className="section-eyebrow">ITINERARY // DAY 01</span>
            <h2 className="ss-section-heading">DAY 1 — 14 OCTOBER 2026</h2>
            <p className="ss-section-sub">Inauguration, IEEE Mentorship & 24-Hour Overnight Hackathon Commencement</p>
          </Reveal>

          <Reveal variant="stagger" className="ss-timeline-compact">
            {scheduleData.day1.timeline.map((item, idx) => (
              <div key={`d1-${idx}`} className={`ss-timeline-item ${item.highlight ? 'ss-tl-highlight' : ''} reveal-card`}>
                <div className="ss-tl-time-box">
                  <span className="ss-tl-time">{item.time}</span>
                  <span className="ss-tl-cat">{item.category}</span>
                </div>
                <div className="ss-tl-dot"></div>
                <div className="ss-tl-content">
                  <div className="ss-tl-header">
                    <strong className="ss-tl-title">{item.title}</strong>
                    {item.badge && <span className="badge-tech">{item.badge}</span>}
                    <span className="ss-tl-venue">{item.venue}</span>
                  </div>
                  <p className="ss-tl-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ============================================================
          6. DAY 2 SCHEDULE (15 OCTOBER 2026)
      ============================================================ */}
      <section className="ss-section ss-schedule-section ss-day2-bg">
        <div className="container">
          <Reveal variant="header" className="ss-center-head">
            <span className="section-eyebrow">ITINERARY // DAY 02</span>
            <h2 className="ss-section-heading">DAY 2 — 15 OCTOBER 2026</h2>
            <p className="ss-section-sub">Cybersecurity CTF, Edge AI Workshop, Startup Pitch, Gamified Coding & Valedictory</p>
          </Reveal>

          <Reveal variant="stagger" className="ss-timeline-compact">
            {scheduleData.day2.timeline.map((item, idx) => (
              <div key={`d2-${idx}`} className={`ss-timeline-item ${item.highlight ? 'ss-tl-highlight' : ''} reveal-card`}>
                <div className="ss-tl-time-box">
                  <span className="ss-tl-time">{item.time}</span>
                  <span className="ss-tl-cat">{item.category}</span>
                </div>
                <div className="ss-tl-dot"></div>
                <div className="ss-tl-content">
                  <div className="ss-tl-header">
                    <strong className="ss-tl-title">{item.title}</strong>
                    {item.badge && <span className="badge-tech">{item.badge}</span>}
                    <span className="ss-tl-venue">{item.venue}</span>
                  </div>
                  <p className="ss-tl-desc">{item.desc}</p>
                  {item.isParallel && item.tracks && (
                    <div className="ss-tl-tracks">
                      {item.tracks.map((trk, tIdx) => (
                        <div key={tIdx} className="ss-tl-subtrack">
                          <span className="ss-tl-sub-bullet">▸</span>
                          <div>
                            <strong>{trk.title}</strong> ({trk.time} • {trk.venue})
                            <p className="ss-tl-sub-desc">{trk.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ============================================================
          7. VENUE
      ============================================================ */}
      <section className="ss-section ss-venue-section" id="venue">
        <div className="container">
          <Reveal variant="header" className="ss-center-head">
            <span className="section-eyebrow">HOST CAMPUS</span>
            <h2 className="ss-section-heading">SRI SAI RAM INSTITUTE OF TECHNOLOGY</h2>
            <p className="ss-section-sub">An acclaimed center for engineering education, technical research, and student innovation.</p>
          </Reveal>

          <div className="ss-venue-grid">
            <Reveal variant="image" className="ss-venue-img-wrap">
              <img
                src={campusFacadeImg}
                alt="Sri Sai Ram Institute of Technology Campus Architectural Facade"
                className="ss-venue-img"
              />
              <div className="ss-venue-img-overlay"></div>
              <div className="ss-venue-tag">
                <span className="ss-venue-tag-title">SRI SAI RAM INSTITUTE OF TECHNOLOGY</span>
                <span className="ss-venue-tag-coords">12.9606° N, 80.0532° E • WEST TAMBARAM, CHENNAI</span>
              </div>
            </Reveal>

            <Reveal variant="card" delay={100} className="ss-venue-card">
              <div className="ss-venue-card-inner">
                <span className="section-eyebrow">LOCATION & DIRECTIONS</span>
                <h3 className="ss-venue-name">CAMPUS DESTINATION</h3>
                <address className="ss-venue-address">
                  <strong>SRI SAI RAM INSTITUTE OF TECHNOLOGY</strong><br />
                  Sairam College Rd, Sai Leo Nagar,<br />
                  West Tambaram, Chennai,<br />
                  Tamil Nadu 600132
                </address>

                <div className="ss-venue-details-list">
                  <div className="ss-v-detail">
                    <span className="ss-vd-label">EVENT DATES:</span>
                    <strong className="ss-vd-val">14 — 15 OCTOBER 2026</strong>
                  </div>
                  <div className="ss-v-detail">
                    <span className="ss-vd-label">CAMPUS VENUES:</span>
                    <span className="ss-vd-val">Steve Jobs Hall, Alpha Hall, Apple Hall, Campus Auditorium</span>
                  </div>
                </div>

                <div className="ss-venue-action-btn-row">
                  <a
                    href={eventMeta.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary ss-directions-btn"
                  >
                    <Navigation size={16} />
                    <span>GET DIRECTIONS</span>
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============================================================
          8. REGISTRATION
      ============================================================ */}
      <section className="ss-section ss-registration-section" id="register">
        <div className="container">
          <Reveal variant="header" className="ss-center-head">
            <span className="section-eyebrow">
              {isOfferActive ? 'EARLY REGISTRATION OFFER' : 'OFFICIAL PASSES'}
            </span>
            <h2 className="ss-section-heading">
              {isOfferActive ? 'SAVE ₹100 ON EVERY REGISTRATION' : 'STANDARD REGISTRATION'}
            </h2>
            <p className="ss-section-sub">
              {isOfferActive 
                ? 'Register now and save ₹100 on every registration.' 
                : 'Standard registration fees apply for all conference delegates.'}
            </p>
          </Reveal>

          {/* Pricing Grid with Shared Information (Shown ONCE per pass type) */}
          <Reveal variant="stagger" className="ss-passes-dual-grid">
            {/* Full Event Pass / Day 1 */}
            <div className="ss-day-pass-column reveal-card">
              <div className="ss-day-col-header">
                <div className="ss-day-pill-row">
                  <span className="ss-day-pill">{passSharedInfo.fullPass.title}</span>
                  <span className="ss-access-pill-primary">{passSharedInfo.fullPass.accessLabel}</span>
                </div>
                <h3>{passSharedInfo.fullPass.dates}</h3>
                <p className="ss-day-col-desc">{passSharedInfo.fullPass.description}</p>
                
                <div className="ss-shared-summary-box">
                  <span className="ss-shared-title">{passSharedInfo.fullPass.inclusionsTitle}:</span>
                  <p className="ss-shared-events-text">{passSharedInfo.fullPass.compactSummary}</p>
                  <div className="ss-shared-benefits-row">
                    {passSharedInfo.fullPass.benefits.map((benefit, bIdx) => (
                      <div key={bIdx} className="ss-benefit-chip">
                        <CheckCircle2 size={13} className="ss-benefit-check-icon" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="ss-pricing-list-heading">
                <span>{passSharedInfo.fullPass.pricingSectionLabel}</span>
              </div>

              <div className="ss-pass-cards-list">
                {day1Passes.map((pass) => {
                  const pInfo = getPassInfo(pass);
                  return (
                    <div key={pass.id} className="ss-pricing-tier-card">
                      <div className="ss-pt-top">
                        <span className="ss-pt-category">{pass.shortCategory}</span>
                        <div className="ss-pt-price-cluster">
                          <span className="ss-pt-price">{pInfo.displayPrice}</span>
                          {isOfferActive && (
                            <del className="ss-pt-struck" aria-label={`Standard price ${pInfo.normalDisplayPrice}`}>
                              {pInfo.normalDisplayPrice}
                            </del>
                          )}
                        </div>
                      </div>
                      <p className="ss-pt-desc">{pass.description}</p>
                      <Link to={`/register?pass=${pass.id}`} className="btn btn-secondary ss-pt-btn">
                        <span>REGISTER & PAY</span>
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Day 2 Pass */}
            <div className="ss-day-pass-column reveal-card">
              <div className="ss-day-col-header">
                <div className="ss-day-pill-row">
                  <span className="ss-day-pill ss-day-pill-alt">{passSharedInfo.day2Pass.title}</span>
                  <span className="ss-access-pill-secondary">{passSharedInfo.day2Pass.accessLabel}</span>
                </div>
                <h3>{passSharedInfo.day2Pass.dates}</h3>
                <p className="ss-day-col-sub">{passSharedInfo.day2Pass.description}</p>
                
                <div className="ss-shared-summary-box">
                  <span className="ss-shared-title">{passSharedInfo.day2Pass.inclusionsTitle}:</span>
                  <p className="ss-shared-events-text">{passSharedInfo.day2Pass.compactSummary}</p>
                  <div className="ss-shared-benefits-row">
                    {passSharedInfo.day2Pass.benefits.map((benefit, bIdx) => (
                      <div key={bIdx} className="ss-benefit-chip">
                        <CheckCircle2 size={13} className="ss-benefit-check-icon" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="ss-pricing-list-heading">
                <span>{passSharedInfo.day2Pass.pricingSectionLabel}</span>
              </div>

              <div className="ss-pass-cards-list">
                {day2Passes.map((pass) => {
                  const pInfo = getPassInfo(pass);
                  return (
                    <div key={pass.id} className="ss-pricing-tier-card">
                      <div className="ss-pt-top">
                        <span className="ss-pt-category">{pass.shortCategory}</span>
                        <div className="ss-pt-price-cluster">
                          <span className="ss-pt-price">{pInfo.displayPrice}</span>
                          {isOfferActive && (
                            <del className="ss-pt-struck" aria-label={`Standard price ${pInfo.normalDisplayPrice}`}>
                              {pInfo.normalDisplayPrice}
                            </del>
                          )}
                        </div>
                      </div>
                      <p className="ss-pt-desc">{pass.description}</p>
                      <Link to={`/register?pass=${pass.id}`} className="btn btn-secondary ss-pt-btn">
                        <span>REGISTER & PAY</span>
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>

          {/* Disclaimer & Offer State */}
          <div className="ss-pricing-foot-row">
            <Reveal variant="card" className={`ss-offer-status-card ${hasEnded ? 'ss-offer-status-ended' : ''}`}>
              <div className="ss-offer-pill">
                <Sparkles size={14} color={hasEnded ? 'var(--muted)' : 'var(--purple-light)'} />
                <span>{hasEnded ? 'REGISTRATION STATUS' : 'OFFICIAL REGISTRATION OFFER'}</span>
              </div>
              <h4>{hasEnded ? offerConfig.endedHeading : offerConfig.title}</h4>
              <div className="ss-offer-tag">
                {hasEnded ? 'STANDARD TIERS ACTIVE' : offerConfig.savingsHeading}
              </div>
              <p className="ss-offer-note">
                {hasEnded ? offerConfig.endedMessage : offerConfig.bodyText}
              </p>
            </Reveal>

            <p className="ss-price-disclaimer">
              {registrationMeta.footnote} Payment portals will be opened following formal institutional sanction. KKonfHub registration links will be published directly on this portal.
            </p>

            <div className="ss-final-reg-action">
              <Link to="/register" className="btn btn-primary ss-full-reg-btn">
                <span>PROCEED TO REGISTRATION PORTAL</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          9. SPEAKERS (EXTREMELY COMPACT)
      ============================================================ */}
      <section className="ss-section ss-compact-status-section" id="speakers">
        <div className="container">
          <Reveal variant="card" className="ss-status-box">
            <span className="section-eyebrow">CONFERENCE GUESTS & EXPERTS</span>
            <h2 className="ss-status-heading">SPEAKERS</h2>
            <div className="ss-status-badge">Speaker announcements coming soon</div>
            <p className="ss-status-copy">
              Distinguished keynote speakers, AI researchers, and cybersecurity leaders will be announced as sessions are finalized.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============================================================
          10. PARTNERS (EXTREMELY COMPACT)
      ============================================================ */}
      <section className="ss-section ss-compact-status-section" id="partners">
        <div className="container">
          <Reveal variant="card" className="ss-status-box">
            <span className="section-eyebrow">COMMUNITY & SPONSORS</span>
            <h2 className="ss-status-heading">PARTNERS</h2>
            <div className="ss-status-badge">Partnership announcements coming soon</div>
            <p className="ss-status-copy">
              Industry partners, technical platform sponsors, and developer tooling organizations will be listed upon confirmation.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============================================================
          11. CONTACT
      ============================================================ */}
      <section className="ss-section ss-contact-section" id="contact">
        <div className="container">
          <Reveal variant="header" className="ss-center-head">
            <span className="section-eyebrow">DIRECT COMMUNICATIONS</span>
            <h2 className="ss-section-heading">CONTACT TECHX'26</h2>
            <p className="ss-section-sub">IEEE Computer Society Student Branch Chapter • Sri Sai Ram Institute of Technology</p>
          </Reveal>

          <Reveal variant="card" className="ss-contact-card">
            <div className="ss-contact-row">
              <div className="ss-c-item">
                <div className="ss-c-icon">
                  <Mail size={22} color="var(--purple-light)" />
                </div>
                <div className="ss-c-info">
                  <span className="ss-c-label">OFFICIAL EMAIL</span>
                  <a href={`mailto:${eventMeta.email}`} className="ss-c-link">
                    {eventMeta.email}
                  </a>
                </div>
              </div>

              <div className="ss-c-item">
                <div className="ss-c-icon">
                  <MapPin size={22} color="var(--purple-light)" />
                </div>
                <div className="ss-c-info">
                  <span className="ss-c-label">HOST INSTITUTION</span>
                  <strong className="ss-c-name">Sri Sai Ram Institute of Technology</strong>
                  <span className="ss-c-city">Chennai, Tamil Nadu 600132</span>
                </div>
              </div>

              <div className="ss-c-item ss-c-action-item">
                <a
                  href={eventMeta.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary ss-c-dir-btn"
                >
                  <Navigation size={15} />
                  <span>GET DIRECTIONS</span>
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================================================
          12. SINGLE SCROLL BACK TO TOP BAR
      ============================================================ */}
      <div className="ss-back-to-top-bar">
        <div className="container" style={{ display: 'flex', justifyContent: 'center', padding: '2rem 0' }}>
          <button
            onClick={() => scrollToSection('top')}
            className="ss-back-to-top"
            aria-label="Back to top of single scroll page"
          >
            <span>BACK TO TOP</span>
            <ArrowUp size={15} />
          </button>
        </div>
      </div>

      {/* Scoped Styling for SingleScroll Page */}
      <style>{`
        .single-scroll-root {
          background-color: var(--black);
          color: var(--white);
          position: relative;
          min-height: 100vh;
        }

        /* 1. Hero Viewport */
        .ss-hero-viewport {
          position: relative;
          width: 100%;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          overflow: hidden;
        }

        .ss-hero-bg-canvas {
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;
        }

        .ss-hero-bg-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 38%;
          filter: grayscale(85%) contrast(120%) brightness(55%);
        }

        .ss-hero-overlay-center {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at center, rgba(10, 10, 15, 0.45) 0%, rgba(10, 10, 15, 0.92) 80%);
        }

        .ss-hero-overlay-bottom {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 38%;
          background: linear-gradient(to top, var(--black) 0%, rgba(10, 10, 15, 0.75) 55%, transparent 100%);
        }

        .ss-hero-overlay-top {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 25%;
          background: linear-gradient(to bottom, rgba(10, 10, 15, 0.9) 0%, transparent 100%);
        }

        .ss-hero-overlay-atmosphere {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 50% 40%, rgba(138, 43, 226, 0.18) 0%, transparent 65%);
          mix-blend-mode: screen;
        }

        .ss-blueprint-grid {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
          background-size: 48px 48px;
        }

        .ss-hero-container {
          position: relative;
          z-index: 2;
          padding-top: clamp(6.5rem, 12vh, 9.5rem);
          padding-bottom: 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .ss-hero-content {
          max-width: 960px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .ss-brand-kicker {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.4rem 0.9rem;
          background: rgba(138, 43, 226, 0.12);
          border: 1px solid rgba(138, 43, 226, 0.35);
          border-radius: 9999px;
          margin-bottom: 1.5rem;
        }

        .ss-kicker-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--purple-primary);
          box-shadow: 0 0 10px var(--purple-primary);
        }

        .ss-kicker-text {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          letter-spacing: 0.08em;
          color: var(--purple-light);
          text-transform: uppercase;
        }

        .ss-monument-title {
          font-family: var(--font-heading);
          font-size: clamp(3.5rem, 9.5vw, 7.5rem);
          font-weight: 900;
          letter-spacing: -0.03em;
          line-height: 0.95;
          margin-bottom: 1rem;
          background: linear-gradient(180deg, #FFFFFF 30%, #C77DFF 85%, #8A2BE2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-shadow: 0 0 45px rgba(138, 43, 226, 0.35);
        }

        .ss-tagline {
          font-family: var(--font-mono);
          font-size: clamp(0.95rem, 2.2vw, 1.35rem);
          font-weight: 600;
          letter-spacing: 0.16em;
          color: rgba(255, 255, 255, 0.92);
          text-transform: uppercase;
          margin-bottom: 1.5rem;
        }

        .ss-editorial-strip {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 0.75rem;
          font-family: var(--font-mono);
          font-size: 0.8rem;
          letter-spacing: 0.08em;
          color: var(--gray-light);
          padding: 0.6rem 1.25rem;
          background: rgba(20, 20, 28, 0.7);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 6px;
          margin-bottom: 2rem;
          backdrop-filter: blur(10px);
        }

        .ss-sep {
          color: var(--purple-light);
        }

        .ss-hero-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
          justify-content: center;
        }

        .ss-cta-btn {
          padding: 0.95rem 2rem;
          font-size: 0.88rem;
          letter-spacing: 0.08em;
        }

        .ss-hero-countdown-dock {
          position: relative;
          z-index: 2;
          width: 100%;
          padding-bottom: 2.5rem;
        }

        /* Sticky Anchor Bar */
        .ss-sticky-anchor-bar {
          position: sticky;
          top: 64px; /* below navbar */
          z-index: 90;
          background: rgba(10, 10, 16, 0.92);
          backdrop-filter: blur(14px);
          border-top: 1px solid rgba(138, 43, 226, 0.25);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          padding: 0.65rem 0;
        }

        .ss-anchor-container {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.6rem;
          overflow-x: auto;
          scrollbar-width: none;
          -webkit-overflow-scrolling: touch;
        }

        .ss-anchor-container::-webkit-scrollbar {
          display: none;
        }

        .ss-anchor-link {
          background: transparent;
          border: none;
          color: var(--gray-light);
          font-family: var(--font-mono);
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          padding: 0.4rem 0.85rem;
          border-radius: 4px;
          cursor: pointer;
          transition: all 0.2s ease;
          white-space: nowrap;
        }

        .ss-anchor-link:hover {
          color: var(--white);
          background: rgba(138, 43, 226, 0.15);
        }

        .ss-anchor-active {
          color: #FFFFFF;
          background: var(--purple-primary);
          box-shadow: 0 0 12px rgba(138, 43, 226, 0.4);
        }

        /* Generic Section Styles */
        .ss-section {
          padding: 6rem 0;
          position: relative;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .ss-center-head {
          text-align: center;
          max-width: 780px;
          margin: 0 auto 3.5rem;
        }

        .ss-section-heading {
          font-family: var(--font-heading);
          font-size: clamp(2rem, 4.5vw, 3.2rem);
          font-weight: 800;
          letter-spacing: -0.02em;
          line-height: 1.1;
          margin-top: 0.5rem;
          margin-bottom: 0.9rem;
        }

        .ss-section-sub {
          font-size: 1.05rem;
          color: var(--gray-light);
          line-height: 1.6;
        }

        /* 2. What is TechX Layout */
        .ss-split-layout {
          display: grid;
          grid-template-columns: 1fr 1.4fr;
          gap: 4rem;
          align-items: center;
        }

        .ss-split-left .ss-section-heading {
          font-size: clamp(2.5rem, 5.5vw, 4.5rem);
          line-height: 1.0;
        }

        .ss-lead-statement {
          font-size: 1.25rem;
          font-weight: 500;
          line-height: 1.65;
          color: #FFFFFF;
          margin-bottom: 1.2rem;
        }

        .ss-body-text {
          font-size: 1rem;
          line-height: 1.7;
          color: var(--gray-light);
          margin-bottom: 2rem;
        }

        .ss-stats-strip {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
          padding: 1.5rem;
          background: rgba(20, 20, 30, 0.6);
          border: 1px solid rgba(138, 43, 226, 0.25);
          border-radius: 8px;
        }

        .ss-stat-box {
          display: flex;
          flex-direction: column;
        }

        .ss-stat-num {
          font-family: var(--font-heading);
          font-size: 1.8rem;
          font-weight: 800;
          color: var(--purple-light);
        }

        .ss-stat-lbl {
          font-family: var(--font-mono);
          font-size: 0.68rem;
          letter-spacing: 0.08em;
          color: var(--gray-light);
        }

        /* 3. TechX Journey */
        .ss-journey-cards-grid {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          gap: 2rem;
          align-items: center;
          max-width: 1040px;
          margin: 0 auto;
        }

        .ss-journey-arrow-col {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .ss-j-arrow {
          font-size: 2rem;
          color: var(--purple-light);
          transform: rotate(-90deg);
        }

        .ss-journey-card {
          padding: 2.2rem;
          background: rgba(20, 20, 28, 0.75);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 8px;
          position: relative;
        }

        .ss-journey-card-highlight {
          border-color: rgba(138, 43, 226, 0.55);
          background: linear-gradient(135deg, rgba(25, 20, 38, 0.85) 0%, rgba(15, 15, 22, 0.9) 100%);
          box-shadow: 0 0 35px rgba(138, 43, 226, 0.15);
        }

        .ss-j-badge-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.2rem;
        }

        .ss-edition-pill {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          font-weight: 700;
          padding: 0.3rem 0.7rem;
          background: rgba(255, 255, 255, 0.08);
          border-radius: 4px;
        }

        .ss-edition-active {
          background: var(--purple-primary);
          color: #FFFFFF;
        }

        .ss-award-pill, .ss-date-pill {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          letter-spacing: 0.06em;
          color: var(--purple-light);
        }

        .ss-j-title {
          font-family: var(--font-heading);
          font-size: 1.35rem;
          font-weight: 700;
          margin-bottom: 0.8rem;
        }

        .ss-j-desc {
          font-size: 0.95rem;
          line-height: 1.65;
          color: var(--gray-light);
        }

        /* 4. Events Grid */
        .ss-events-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 1.5rem;
        }

        .ss-event-card {
          padding: 1.8rem;
          background: rgba(18, 18, 25, 0.75);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 8px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: transform 0.2s ease, border-color 0.2s ease;
        }

        .ss-event-card:hover {
          transform: translateY(-4px);
          border-color: rgba(138, 43, 226, 0.5);
        }

        .ss-event-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1rem;
        }

        .ss-num-badge-group {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }

        .ss-evt-num {
          font-family: var(--font-mono);
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--purple-light);
        }

        .ss-evt-day {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--gray-light);
        }

        .ss-evt-title {
          font-family: var(--font-heading);
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 0.35rem;
        }

        .ss-evt-sub {
          font-size: 0.82rem;
          color: var(--purple-light);
          font-family: var(--font-mono);
          margin-bottom: 0.75rem;
        }

        .ss-evt-desc {
          font-size: 0.9rem;
          line-height: 1.6;
          color: var(--gray-light);
          margin-bottom: 1.25rem;
          flex-grow: 1;
        }

        .ss-evt-meta-row {
          display: flex;
          align-items: center;
          gap: 1.2rem;
          font-size: 0.78rem;
          color: var(--gray-light);
          padding-top: 0.8rem;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          margin-bottom: 1.2rem;
        }

        .ss-evt-venue, .ss-evt-time {
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        .ss-evt-action-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .ss-view-link {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-family: var(--font-mono);
          font-size: 0.78rem;
          font-weight: 600;
          letter-spacing: 0.06em;
          color: #FFFFFF;
        }

        .ss-view-link:hover {
          color: var(--purple-light);
        }

        .ss-reg-pill {
          padding: 0.35rem 0.85rem;
          background: rgba(138, 43, 226, 0.18);
          border: 1px solid rgba(138, 43, 226, 0.4);
          border-radius: 4px;
          font-family: var(--font-mono);
          font-size: 0.72rem;
          font-weight: 600;
          color: #FFFFFF;
          transition: background 0.2s;
        }

        .ss-reg-pill:hover {
          background: var(--purple-primary);
        }

        /* 5 & 6. Timeline Styles */
        .ss-day2-bg {
          background: rgba(12, 12, 18, 0.5);
        }

        .ss-timeline-compact {
          max-width: 860px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          position: relative;
        }

        .ss-timeline-item {
          display: grid;
          grid-template-columns: 140px auto 1fr;
          gap: 1.5rem;
          align-items: flex-start;
          padding: 1.2rem 1.5rem;
          background: rgba(20, 20, 28, 0.65);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 6px;
        }

        .ss-tl-highlight {
          border-color: rgba(138, 43, 226, 0.45);
          background: rgba(25, 20, 35, 0.75);
        }

        .ss-tl-time-box {
          display: flex;
          flex-direction: column;
        }

        .ss-tl-time {
          font-family: var(--font-mono);
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--purple-light);
        }

        .ss-tl-cat {
          font-size: 0.7rem;
          color: var(--gray-light);
        }

        .ss-tl-dot {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: var(--purple-primary);
          margin-top: 0.4rem;
          box-shadow: 0 0 8px var(--purple-primary);
        }

        .ss-tl-content {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }

        .ss-tl-header {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 0.6rem;
        }

        .ss-tl-title {
          font-size: 1.05rem;
          color: #FFFFFF;
        }

        .ss-tl-venue {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--gray-light);
          padding: 0.15rem 0.45rem;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 3px;
        }

        .ss-tl-desc {
          font-size: 0.88rem;
          line-height: 1.55;
          color: var(--gray-light);
        }

        .ss-tl-tracks {
          margin-top: 0.6rem;
          padding: 0.8rem;
          background: rgba(10, 10, 15, 0.6);
          border-left: 2px solid var(--purple-primary);
          border-radius: 0 4px 4px 0;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .ss-tl-subtrack {
          display: flex;
          gap: 0.5rem;
          font-size: 0.85rem;
        }

        .ss-tl-sub-bullet {
          color: var(--purple-light);
        }

        .ss-tl-sub-desc {
          font-size: 0.8rem;
          color: var(--gray-light);
          margin-top: 0.2rem;
        }

        /* 7. Venue Section */
        .ss-venue-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 2.5rem;
          align-items: center;
        }

        .ss-venue-img-wrap {
          position: relative;
          border-radius: 8px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .ss-venue-img {
          width: 100%;
          height: 380px;
          object-fit: cover;
          display: block;
        }

        .ss-venue-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(10, 10, 15, 0.85) 0%, transparent 60%);
        }

        .ss-venue-tag {
          position: absolute;
          bottom: 1.25rem;
          left: 1.25rem;
          right: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
        }

        .ss-venue-tag-title {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 1.05rem;
        }

        .ss-venue-tag-coords {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--purple-light);
        }

        .ss-venue-card {
          padding: 2.2rem;
          background: rgba(20, 20, 28, 0.75);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 8px;
        }

        .ss-venue-name {
          font-family: var(--font-heading);
          font-size: 1.4rem;
          margin-bottom: 0.8rem;
        }

        .ss-venue-address {
          font-style: normal;
          font-size: 0.95rem;
          line-height: 1.65;
          color: var(--gray-light);
          margin-bottom: 1.5rem;
        }

        .ss-venue-details-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          padding: 1.2rem 0;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          margin-bottom: 1.8rem;
        }

        .ss-v-detail {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
          font-size: 0.85rem;
        }

        .ss-vd-label {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          color: var(--gray-light);
        }

        .ss-vd-val {
          color: #FFFFFF;
        }

        .ss-directions-btn {
          width: 100%;
          justify-content: center;
          padding: 0.9rem;
        }

        /* 8. Registration */
        .ss-passes-dual-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          max-width: 1040px;
          margin: 0 auto 2.5rem;
        }

        .ss-day-pass-column {
          padding: 2rem;
          background: rgba(18, 18, 25, 0.7);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 8px;
        }

        .ss-day-col-header {
          margin-bottom: 1.5rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .ss-day-pill {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          font-weight: 700;
          padding: 0.25rem 0.6rem;
          background: var(--purple-primary);
          color: #FFFFFF;
          border-radius: 3px;
          display: inline-block;
          margin-bottom: 0.5rem;
        }

        .ss-day-col-header h3 {
          font-family: var(--font-heading);
          font-size: 1.35rem;
          margin-bottom: 0.3rem;
        }

        
        .ss-day-pill-row {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          flex-wrap: wrap;
          margin-bottom: 0.5rem;
        }

        .ss-day-pill-alt {
          background: rgba(138, 43, 226, 0.2);
          border: 1px solid rgba(138, 43, 226, 0.4);
          color: var(--purple-light);
        }

        .ss-access-pill-primary {
          font-family: var(--font-mono);
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: #ffffff;
          background: rgba(138, 43, 226, 0.35);
          border: 1px solid rgba(168, 85, 247, 0.45);
          padding: 0.2rem 0.5rem;
          border-radius: 3px;
        }

        .ss-access-pill-secondary {
          font-family: var(--font-mono);
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: var(--text-secondary);
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.2);
          padding: 0.2rem 0.5rem;
          border-radius: 3px;
        }

        .ss-day-col-desc {
          font-size: 0.85rem;
          color: var(--text-secondary, #d1d5db);
          margin-bottom: 0.75rem;
          line-height: 1.4;
        }

        .ss-shared-summary-box {
          margin-top: 0.85rem;
          background: rgba(138, 43, 226, 0.06);
          border: 1px solid rgba(138, 43, 226, 0.2);
          border-radius: 6px;
          padding: 0.85rem 1rem;
        }

        .ss-shared-title {
          font-family: var(--font-mono);
          font-size: 0.68rem;
          letter-spacing: 0.12em;
          color: var(--purple-light);
          display: block;
          margin-bottom: 0.35rem;
          font-weight: 700;
        }

        .ss-shared-events-text {
          font-size: 0.82rem;
          color: var(--text-secondary, #d1d5db);
          line-height: 1.45;
          margin: 0 0 0.65rem 0;
        }

        .ss-shared-benefits-row {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
          padding-top: 0.5rem;
          border-top: 1px dashed rgba(138, 43, 226, 0.2);
        }

        .ss-benefit-chip {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          font-size: 0.78rem;
          color: #f3f4f6;
          font-weight: 500;
        }

        .ss-benefit-check-icon {
          color: #22C55E;
          flex-shrink: 0;
        }

        .ss-pricing-list-heading {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          letter-spacing: 0.1em;
          color: var(--text-tertiary);
          margin: 1.25rem 0 0.85rem 0;
          text-transform: uppercase;
          font-weight: 700;
        }

        .ss-day-col-sub {
          font-size: 0.82rem;
          color: var(--gray-light);
        }

        .ss-pass-cards-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .ss-pricing-tier-card {
          padding: 1.25rem;
          background: rgba(25, 25, 35, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 6px;
        }

        .ss-pt-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.4rem;
        }

        .ss-pt-category {
          font-family: var(--font-mono);
          font-size: 0.82rem;
          font-weight: 700;
          color: #FFFFFF;
        }

        .ss-offer-headline-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          margin-top: 0.85rem;
          padding: 0.45rem 1.15rem;
          background: rgba(138, 43, 226, 0.14);
          border: 1px solid rgba(138, 43, 226, 0.4);
          border-radius: 999px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .ss-offer-highlight {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 0.88rem;
          color: #22C55E;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .ss-offer-sep {
          color: rgba(255, 255, 255, 0.3);
          font-size: 0.8rem;
        }

        .ss-offer-dates {
          font-family: var(--font-mono);
          font-size: 0.78rem;
          color: #E2D9F3;
          letter-spacing: 0.08em;
          font-weight: 600;
        }

        .ss-pt-price-cluster {
          display: flex;
          align-items: baseline;
          gap: 0.5rem;
        }

        .ss-pt-price {
          font-family: var(--font-heading);
          font-size: 1.3rem;
          font-weight: 800;
          color: var(--purple-light);
        }

        .ss-pt-struck {
          font-family: var(--font-mono);
          font-size: 0.85rem;
          color: var(--gray-light);
          text-decoration: line-through;
          text-decoration-color: rgba(138, 43, 226, 0.7);
          opacity: 0.75;
          user-select: none;
        }

        .ss-pt-desc {
          font-size: 0.8rem;
          color: var(--gray-light);
          line-height: 1.5;
          margin-bottom: 0.8rem;
        }

        .ss-pt-btn {
          width: 100%;
          justify-content: center;
          padding: 0.55rem;
          font-size: 0.78rem;
        }

        .ss-pricing-foot-row {
          max-width: 860px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 1.5rem;
        }

        .ss-offer-status-card {
          width: 100%;
          padding: 1.5rem;
          background: rgba(25, 20, 38, 0.6);
          border: 1px dashed rgba(138, 43, 226, 0.4);
          border-radius: 8px;
        }

        .ss-offer-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--purple-light);
          margin-bottom: 0.5rem;
        }

        .ss-offer-status-card h4 {
          font-family: var(--font-heading);
          font-size: 1.15rem;
          margin-bottom: 0.3rem;
        }

        .ss-offer-tag {
          font-family: var(--font-mono);
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--purple-light);
          margin-bottom: 0.5rem;
        }

        .ss-offer-note {
          font-size: 0.85rem;
          color: var(--gray-light);
        }

        .ss-price-disclaimer {
          font-size: 0.82rem;
          color: var(--gray-light);
          font-style: italic;
        }

        .ss-full-reg-btn {
          padding: 1rem 2.5rem;
          font-size: 0.92rem;
        }

        /* 9 & 10. Compact Status Boxes */
        .ss-compact-status-section {
          padding: 4rem 0;
        }

        .ss-status-box {
          max-width: 780px;
          margin: 0 auto;
          padding: 2.2rem;
          background: rgba(20, 20, 28, 0.65);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 8px;
          text-align: center;
        }

        .ss-status-heading {
          font-family: var(--font-heading);
          font-size: 1.6rem;
          font-weight: 800;
          margin-bottom: 0.8rem;
        }

        .ss-status-badge {
          display: inline-block;
          font-family: var(--font-mono);
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--purple-light);
          padding: 0.3rem 0.8rem;
          background: rgba(138, 43, 226, 0.15);
          border-radius: 4px;
          margin-bottom: 0.8rem;
        }

        .ss-status-copy {
          font-size: 0.92rem;
          color: var(--gray-light);
          line-height: 1.6;
        }

        /* 11. Contact Section */
        .ss-contact-card {
          max-width: 960px;
          margin: 0 auto;
          padding: 2.2rem;
          background: rgba(20, 20, 28, 0.75);
          border: 1px solid rgba(138, 43, 226, 0.3);
          border-radius: 8px;
        }

        .ss-contact-row {
          display: grid;
          grid-template-columns: 1fr 1.2fr auto;
          gap: 2rem;
          align-items: center;
        }

        .ss-c-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
        }

        .ss-c-icon {
          width: 44px;
          height: 44px;
          border-radius: 8px;
          background: rgba(138, 43, 226, 0.15);
          border: 1px solid rgba(138, 43, 226, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .ss-c-info {
          display: flex;
          flex-direction: column;
        }

        .ss-c-label {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          letter-spacing: 0.08em;
          color: var(--gray-light);
          margin-bottom: 0.2rem;
        }

        .ss-c-link {
          font-family: var(--font-mono);
          font-size: 0.95rem;
          color: #FFFFFF;
          transition: color 0.2s;
        }

        .ss-c-link:hover {
          color: var(--purple-light);
        }

        .ss-c-name {
          font-size: 1rem;
          color: #FFFFFF;
        }

        .ss-c-city {
          font-size: 0.82rem;
          color: var(--gray-light);
        }

        .ss-c-dir-btn {
          white-space: nowrap;
          padding: 0.85rem 1.4rem;
        }

        /* 12. Single Scroll Footer */
        .ss-footer {
          padding: 4rem 0 3rem;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          background: #07070B;
        }

        .ss-footer-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 2rem;
        }

        .ss-footer-brand {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .ss-footer-logo {
          height: 38px;
          width: auto;
          object-fit: contain;
          margin-bottom: 0.2rem;
        }

        .ss-footer-tag {
          font-family: var(--font-mono);
          font-size: 0.82rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          color: rgba(255, 255, 255, 0.9);
        }

        .ss-footer-sub {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          letter-spacing: 0.06em;
          color: var(--gray-light);
        }

        .ss-footer-meta {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 0.8rem;
        }

        .ss-back-to-top {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #FFFFFF;
          padding: 0.5rem 1rem;
          border-radius: 4px;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          cursor: pointer;
          transition: all 0.2s;
        }

        .ss-back-to-top:hover {
          background: var(--purple-primary);
          border-color: var(--purple-primary);
        }

        .ss-footer-copy {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--gray-light);
        }

        /* Responsive Breakpoints */
        @media (max-width: 1024px) {
          .ss-split-layout {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .ss-journey-cards-grid {
            grid-template-columns: 1fr;
          }

          .ss-j-arrow {
            transform: rotate(0deg);
          }

          .ss-venue-grid {
            grid-template-columns: 1fr;
          }

          .ss-venue-img {
            height: 280px;
          }

          .ss-contact-row {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
        }

        @media (max-width: 768px) {
          .ss-sticky-anchor-bar {
            top: 56px;
          }

          .ss-stats-strip {
            grid-template-columns: repeat(2, 1fr);
          }

          .ss-passes-dual-grid {
            grid-template-columns: 1fr;
          }

          .ss-timeline-item {
            grid-template-columns: 1fr;
            gap: 0.5rem;
          }

          .ss-tl-dot {
            display: none;
          }

          .ss-footer-inner {
            flex-direction: column;
            align-items: flex-start;
          }

          .ss-footer-meta {
            align-items: flex-start;
          }
        }

        @media (max-width: 480px) {
          .ss-section {
            padding: 4rem 0;
          }

          .ss-hero-actions {
            flex-direction: column;
            width: 100%;
          }

          .ss-cta-btn {
            width: 100%;
            justify-content: center;
          }

          .ss-events-grid {
            grid-template-columns: 1fr;
          }

          .ss-anchor-link {
            font-size: 0.68rem;
            padding: 0.35rem 0.6rem;
          }
        }
      `}</style>
    </div>
  );
}
