import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  Calendar, 
  Clock, 
  MapPin, 
  Shield, 
  AlertCircle, 
  User, 
  Mail, 
  Phone, 
  Building, 
  Award,
  ExternalLink,
  ChevronRight,
  Info
} from 'lucide-react';
import { registrationOptions, registrationMeta } from '../data/registration';
import { eventsData } from '../data/events';
import Reveal from '../components/Reveal';
import RegistrationOffer from '../components/RegistrationOffer';

export default function Register() {
  const [searchParams, setSearchParams] = useSearchParams();
  const eventParam = searchParams.get('event');

  // Find referenced event if provided via query param
  const matchedEvent = eventParam 
    ? eventsData.find(e => e.id.toLowerCase() === eventParam.toLowerCase()) 
    : null;

  // Selected pass for modal / checkout flow
  const [selectedPass, setSelectedPass] = useState(null);
  const [step, setStep] = useState('list'); // 'list' | 'details' | 'coming-soon'

  // Optional participant details form state (no backend invented)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    institution: '',
    ieeeNumber: '',
    selectedTrack: matchedEvent ? matchedEvent.title : ''
  });

  // Keep track selection synced if event param changes
  useEffect(() => {
    if (matchedEvent) {
      setFormData(prev => ({ ...prev, selectedTrack: matchedEvent.title }));
    }
  }, [matchedEvent]);

  // Handle clicking "REGISTER & PAY" on any pass card
  const handleSelectPass = (pass) => {
    setSelectedPass(pass);
    setStep('details');
  };

  // Handle proceeding from Participant Details to Payment
  const handleProceedToPayment = (e) => {
    if (e && e.preventDefault) e.preventDefault();

    if (!selectedPass) return;

    // IF paymentUrl exists: redirect to the configured payment URL
    if (selectedPass.paymentUrl && selectedPass.paymentUrl.trim() !== '') {
      window.location.href = selectedPass.paymentUrl;
      return;
    }

    // IF paymentUrl is empty: show clean coming soon screen
    setStep('coming-soon');
  };

  // Reset back to pass list
  const handleResetToPasses = () => {
    setStep('list');
    setSelectedPass(null);
  };

  const day1Passes = registrationOptions.filter(opt => opt.dayNumber === 1);
  const day2Passes = registrationOptions.filter(opt => opt.dayNumber === 2);

  return (
    <div className="register-page-root">
      {/* Background Technical Grid */}
      <div className="register-grid-bg" aria-hidden="true" />
      <div className="register-purple-glow" aria-hidden="true" />

      <div className="container register-container">
        {/* ============================================================
            1. PAGE HEADER
        ============================================================ */}
        <Reveal variant="header" as="header" className="register-header">
          <div className="register-eyebrow-strip">
            <span className="eyebrow-badge">OFFICIAL REGISTRATION PORTAL</span>
            <span className="eyebrow-sep">//</span>
            <span className="eyebrow-meta">SRI SAI RAM INSTITUTE OF TECHNOLOGY</span>
          </div>

          <h1 className="register-main-title">{registrationMeta.title}</h1>

          <div className="register-subtitle-box">
            <div className="subtitle-item">
              <Calendar size={16} className="subtitle-icon" />
              <span>14–15 OCTOBER 2026</span>
            </div>
            <span className="subtitle-dot">•</span>
            <div className="subtitle-item">
              <MapPin size={16} className="subtitle-icon" />
              <span>Sri Sai Ram Institute of Technology, Chennai</span>
            </div>
          </div>

          <p className="register-intro-text">
            {registrationMeta.intro}
          </p>

          {/* Event Context Banner (when navigated via ?event=...) */}
          {eventParam && (
            <div className="event-context-banner" role="status" aria-live="polite">
              <div className="event-context-left">
                <span className="context-tag">EVENT REGISTRATION</span>
                <h2 className="context-title">
                  REGISTER FOR {matchedEvent ? matchedEvent.publicTitle || matchedEvent.title : eventParam.replace(/-/g, ' ').toUpperCase()}
                </h2>
                <p className="context-desc">
                  {matchedEvent 
                    ? `This event is scheduled on ${matchedEvent.eventDate} (${matchedEvent.dayLabel}). Entry is included with any ${matchedEvent.dayLabel} Pass below.`
                    : `Please select the appropriate Day Pass below to register for this track.`
                  }
                </p>
              </div>
              <button 
                onClick={() => setSearchParams({})} 
                className="context-clear-btn"
                aria-label="View all passes without event filter"
              >
                VIEW ALL PASSES
              </button>
            </div>
          )}
        </Reveal>

        {/* ============================================================
            2. PASS LISTING VIEW (DAY 1 & DAY 2)
        ============================================================ */}
        {step === 'list' && (
          <div className="passes-view-wrapper">
            {/* Registration Offer Section */}
            <RegistrationOffer />

            {/* --------------------------------------------------
                DAY 1 — 14 OCTOBER 2026
            -------------------------------------------------- */}
            <section 
              className={`day-section day-1-section ${matchedEvent && matchedEvent.day === 1 ? 'day-section-highlighted' : ''}`}
              aria-labelledby="day-1-heading"
            >
              <Reveal variant="header" className="day-section-header">
                <div className="day-header-left">
                  <span className="day-badge">PHASE 01</span>
                  <h2 id="day-1-heading" className="day-heading">
                    DAY 1 REGISTRATION<br />
                    <span className="day-sub-date">14 OCTOBER 2026</span>
                  </h2>
                </div>
                <div className="day-header-right">
                  <span className="day-meta-pill">INAUGURATION • NANO MENTORING • VERDICTX HACKATHON</span>
                </div>
              </Reveal>

              <Reveal variant="stagger" className="passes-grid">
                {day1Passes.map((pass) => (
                  <article key={pass.id} className="pass-card reveal-card">
                    <div className="pass-card-top">
                      <div className="pass-label-strip">
                        <span className="pass-label-tag">{pass.label}</span>
                        <span className="pass-day-indicator">14 OCT</span>
                      </div>
                      <h3 className="pass-category-title">{pass.category}</h3>
                      <p className="pass-category-desc">{pass.description}</p>
                    </div>

                    <div className="pass-pricing-block">
                      <div className="pass-price-display">
                        <span className="pass-price-num">{pass.displayPrice}</span>
                        <span className="pass-price-sub">per delegate</span>
                      </div>
                      <span className="pass-tax-note">Indicative proposal tier</span>
                    </div>

                    <div className="pass-features-block">
                      <span className="features-label">PASS INCLUDES:</span>
                      <ul className="features-list">
                        {pass.features.map((feat, idx) => (
                          <li key={idx}>
                            <CheckCircle2 size={14} className="feature-check-icon" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pass-card-footer">
                      <button 
                        onClick={() => handleSelectPass(pass)} 
                        className="btn btn-primary pass-action-btn"
                        aria-label={`Register & Pay for Day 1 ${pass.category} at ${pass.displayPrice}`}
                      >
                        <span>REGISTER & PAY</span>
                        <ArrowRight size={16} />
                      </button>
                    </div>
                  </article>
                ))}
              </Reveal>
            </section>

            {/* Visual Section Separator */}
            <div className="day-divider-strip">
              <div className="divider-line" />
              <span className="divider-label">CONFERENCE TIMELINE CONTINUES</span>
              <div className="divider-line" />
            </div>

            {/* --------------------------------------------------
                DAY 2 — 15 OCTOBER 2026
            -------------------------------------------------- */}
            <section 
              className={`day-section day-2-section ${matchedEvent && matchedEvent.day === 2 ? 'day-section-highlighted' : ''}`}
              aria-labelledby="day-2-heading"
            >
              <Reveal variant="header" className="day-section-header">
                <div className="day-header-left">
                  <span className="day-badge day-badge-alt">PHASE 02</span>
                  <h2 id="day-2-heading" className="day-heading">
                    DAY 2 REGISTRATION<br />
                    <span className="day-sub-date">15 OCTOBER 2026</span>
                  </h2>
                </div>
                <div className="day-header-right">
                  <span className="day-meta-pill">CYBERSECURITY CTF • TINYML • STARTUP PITCH • VALEDICTORY</span>
                </div>
              </Reveal>

              <Reveal variant="stagger" className="passes-grid">
                {day2Passes.map((pass) => (
                  <article key={pass.id} className="pass-card reveal-card">
                    <div className="pass-card-top">
                      <div className="pass-label-strip">
                        <span className="pass-label-tag pass-label-alt">{pass.label}</span>
                        <span className="pass-day-indicator">15 OCT</span>
                      </div>
                      <h3 className="pass-category-title">{pass.category}</h3>
                      <p className="pass-category-desc">{pass.description}</p>
                    </div>

                    <div className="pass-pricing-block">
                      <div className="pass-price-display">
                        <span className="pass-price-num">{pass.displayPrice}</span>
                        <span className="pass-price-sub">per delegate</span>
                      </div>
                      <span className="pass-tax-note">Indicative proposal tier</span>
                    </div>

                    <div className="pass-features-block">
                      <span className="features-label">PASS INCLUDES:</span>
                      <ul className="features-list">
                        {pass.features.map((feat, idx) => (
                          <li key={idx}>
                            <CheckCircle2 size={14} className="feature-check-icon" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pass-card-footer">
                      <button 
                        onClick={() => handleSelectPass(pass)} 
                        className="btn btn-primary pass-action-btn"
                        aria-label={`Register & Pay for Day 2 ${pass.category} at ${pass.displayPrice}`}
                      >
                        <span>REGISTER & PAY</span>
                        <ArrowRight size={16} />
                      </button>
                    </div>
                  </article>
                ))}
              </Reveal>
            </section>

            {/* Official Pricing Footnote */}
            <Reveal variant="pop" className="register-footnote-box" role="note">
              <AlertCircle size={18} className="footnote-alert-icon" />
              <div className="footnote-content">
                <p className="footnote-main-text">
                  {registrationMeta.footnote}
                </p>
                <p className="footnote-sub-text">
                  Payment portals will be opened following formal institutional sanction. Razorpay Payment Links will be published directly on this portal.
                </p>
              </div>
            </Reveal>
          </div>
        )}

        {/* ============================================================
            3. OPTIONAL PARTICIPANT DETAILS FORM STEP
        ============================================================ */}
        {step === 'details' && selectedPass && (
          <Reveal variant="card" className="details-flow-wrapper" role="region" aria-labelledby="details-heading">
            <div className="details-header-bar">
              <button 
                onClick={handleResetToPasses} 
                className="details-back-nav-btn"
                aria-label="Back to pass categories"
              >
                <ArrowLeft size={16} />
                <span>BACK TO REGISTRATION PASSES</span>
              </button>
              <span className="details-step-badge">STEP 2 OF 2 • PARTICIPANT DETAILS</span>
            </div>

            <div className="details-grid-layout">
              {/* Left Column: Form Fields */}
              <div className="details-form-card">
                <div className="form-card-intro">
                  <h2 id="details-heading" className="form-card-title">DELEGATE REGISTRATION INFORMATION</h2>
                  <p className="form-card-desc">
                    Provide your attendee details for registration records and conference entry credentials.
                  </p>
                </div>

                <form onSubmit={handleProceedToPayment} className="delegate-form" noValidate>
                  {/* Full Name */}
                  <div className="form-field-group">
                    <label htmlFor="reg-fullName" className="field-label">
                      <User size={14} />
                      <span>Full Name</span>
                      <span className="field-hint">(Optional)</span>
                    </label>
                    <input 
                      id="reg-fullName"
                      type="text" 
                      className="field-input"
                      placeholder="e.g. Alex Henderson"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    />
                  </div>

                  {/* Email & Phone Row */}
                  <div className="form-row-dual">
                    <div className="form-field-group">
                      <label htmlFor="reg-email" className="field-label">
                        <Mail size={14} />
                        <span>Email Address</span>
                        <span className="field-hint">(Optional)</span>
                      </label>
                      <input 
                        id="reg-email"
                        type="email" 
                        className="field-input"
                        placeholder="alex@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>

                    <div className="form-field-group">
                      <label htmlFor="reg-phone" className="field-label">
                        <Phone size={14} />
                        <span>Mobile Number</span>
                        <span className="field-hint">(Optional)</span>
                      </label>
                      <input 
                        id="reg-phone"
                        type="tel" 
                        className="field-input"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  {/* College / Institution */}
                  <div className="form-field-group">
                    <label htmlFor="reg-institution" className="field-label">
                      <Building size={14} />
                      <span>College / Institution</span>
                      <span className="field-hint">(Optional)</span>
                    </label>
                    <input 
                      id="reg-institution"
                      type="text" 
                      className="field-input"
                      placeholder="e.g. Sri Sai Ram Institute of Technology"
                      value={formData.institution}
                      onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                    />
                  </div>

                  {/* IEEE Membership Number (conditionally highlighted for IEEE passes) */}
                  {selectedPass.requiresIeeeNumber && (
                    <div className="form-field-group ieee-field-group">
                      <label htmlFor="reg-ieeeNumber" className="field-label">
                        <Award size={14} />
                        <span>IEEE Membership Number</span>
                        <span className="field-required-note">Required for member verification</span>
                      </label>
                      <input 
                        id="reg-ieeeNumber"
                        type="text" 
                        className="field-input"
                        placeholder="e.g. 98765432"
                        value={formData.ieeeNumber}
                        onChange={(e) => setFormData({ ...formData, ieeeNumber: e.target.value })}
                      />
                    </div>
                  )}

                  {/* Preferred Event / Track Selection */}
                  <div className="form-field-group">
                    <label htmlFor="reg-track" className="field-label">
                      <Award size={14} />
                      <span>Preferred Track / Experience</span>
                      <span className="field-hint">(Where applicable)</span>
                    </label>
                    <select 
                      id="reg-track"
                      className="field-input field-select"
                      value={formData.selectedTrack}
                      onChange={(e) => setFormData({ ...formData, selectedTrack: e.target.value })}
                    >
                      <option value="">General Conference Access</option>
                      {eventsData
                        .filter(e => e.day === selectedPass.dayNumber)
                        .map(e => (
                          <option key={e.id} value={e.title}>
                            {e.title} ({e.time})
                          </option>
                        ))}
                    </select>
                  </div>

                  <div className="form-action-row">
                    <button 
                      type="submit" 
                      className="btn btn-primary form-submit-btn"
                    >
                      <span>CONTINUE TO PAYMENT</span>
                      <ArrowRight size={16} />
                    </button>
                    <button 
                      type="button" 
                      onClick={handleProceedToPayment}
                      className="form-skip-btn"
                    >
                      Skip details & continue directly →
                    </button>
                  </div>
                </form>
              </div>

              {/* Right Column: Order Summary */}
              <aside className="details-summary-card" aria-labelledby="summary-heading">
                <span className="summary-eyebrow">ORDER SUMMARY</span>
                <h3 id="summary-heading" className="summary-pass-name">{selectedPass.label}</h3>
                <span className="summary-category">{selectedPass.category}</span>
                <span className="summary-date-line">{selectedPass.date}</span>

                <div className="summary-price-box">
                  <span className="price-label">INDICATIVE FEE</span>
                  <div className="price-number">{selectedPass.displayPrice}</div>
                  <span className="price-sub">Subject to final confirmation</span>
                </div>

                <div className="summary-inclusions">
                  <span className="inclusions-title">INCLUSIONS:</span>
                  <ul>
                    {selectedPass.features.map((f, i) => (
                      <li key={i}>
                        <CheckCircle2 size={13} color="var(--purple-light)" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="summary-guarantee-note">
                  <Shield size={14} color="var(--purple-light)" />
                  <span>Verified IEEE Student Branch Chapter Portal</span>
                </div>
              </aside>
            </div>
          </Reveal>
        )}

        {/* ============================================================
            4. CLEAN COMING SOON FALLBACK VIEW (When paymentUrl is empty)
        ============================================================ */}
        {step === 'coming-soon' && (
          <Reveal variant="card" className="coming-soon-wrapper" role="status" aria-live="assertive">
            <div className="coming-soon-card">
              <div className="coming-soon-badge-strip">
                <span className="cs-badge">PAYMENT GATEWAY STATUS</span>
              </div>

              <h2 className="coming-soon-title">REGISTRATION LINK COMING SOON</h2>

              <p className="coming-soon-message">
                Payment for this category has not opened yet.<br />
                Please check back soon.
              </p>

              {selectedPass && (
                <div className="coming-soon-details-pill">
                  <span className="cs-pill-label">SELECTED CATEGORY:</span>
                  <strong className="cs-pill-val">{selectedPass.label} — {selectedPass.category} ({selectedPass.displayPrice})</strong>
                </div>
              )}

              <div className="coming-soon-actions">
                <button 
                  onClick={handleResetToPasses} 
                  className="btn btn-primary coming-soon-back-btn"
                  aria-label="Back to registration passes"
                >
                  <ArrowLeft size={16} />
                  <span>BACK TO REGISTRATION</span>
                </button>
              </div>

              <div className="coming-soon-footnote">
                <Info size={14} />
                <span>Official Razorpay payment links will be activated once organizer approvals are completed.</span>
              </div>
            </div>
          </Reveal>
        )}
      </div>

      {/* ============================================================
          SCOPED STYLES
      ============================================================ */}
      <style>{`
        .register-page-root {
          position: relative;
          min-height: 100vh;
          background-color: var(--black, #000000);
          color: var(--text-primary, #ffffff);
          padding-top: calc(var(--nav-height, 70px) + 2rem);
          padding-bottom: 6rem;
          overflow: hidden;
        }

        /* Subtle Technical Grid Background */
        .register-grid-bg {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(138, 43, 226, 0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(138, 43, 226, 0.04) 1px, transparent 1px);
          background-size: 48px 48px;
          pointer-events: none;
          z-index: 0;
        }

        .register-purple-glow {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 800px;
          height: 380px;
          background: radial-gradient(circle, rgba(138, 43, 226, 0.12) 0%, transparent 70%);
          pointer-events: none;
          z-index: 0;
        }

        .register-container {
          position: relative;
          z-index: 1;
          max-width: 1240px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        /* ============================================================
           HEADER STYLES
        ============================================================ */
        .register-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .register-eyebrow-strip {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          font-family: var(--font-mono, monospace);
          font-size: 0.75rem;
          letter-spacing: 0.16em;
          color: var(--purple-light, #c084fc);
          margin-bottom: 1.25rem;
          text-transform: uppercase;
        }

        .eyebrow-badge {
          background: rgba(138, 43, 226, 0.15);
          border: 1px solid rgba(138, 43, 226, 0.35);
          padding: 0.25rem 0.75rem;
          border-radius: 4px;
        }

        .eyebrow-sep {
          color: var(--text-tertiary, #666666);
        }

        .eyebrow-meta {
          color: var(--text-secondary, #a3a3a3);
        }

        .register-main-title {
          font-family: var(--font-display, sans-serif);
          font-size: clamp(2.5rem, 6vw, 4.5rem);
          font-weight: 800;
          letter-spacing: 0.02em;
          line-height: 1.05;
          margin: 0 0 1.25rem 0;
          text-transform: uppercase;
          color: #ffffff;
        }

        .register-subtitle-box {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 0.75rem 1rem;
          font-family: var(--font-mono, monospace);
          font-size: 0.9rem;
          color: var(--text-secondary, #a3a3a3);
          margin-bottom: 1.5rem;
        }

        .subtitle-item {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
        }

        .subtitle-icon {
          color: var(--purple-light, #c084fc);
        }

        .subtitle-dot {
          color: var(--text-tertiary, #555555);
        }

        .register-intro-text {
          max-width: 720px;
          margin: 0 auto;
          font-family: var(--font-sans, sans-serif);
          font-size: 1.05rem;
          line-height: 1.6;
          color: var(--text-secondary, #d1d5db);
        }

        /* Event Specific Banner */
        .event-context-banner {
          margin-top: 2.25rem;
          background: rgba(138, 43, 226, 0.08);
          border: 1px solid rgba(138, 43, 226, 0.4);
          border-left: 4px solid var(--purple-main, #8a2be2);
          border-radius: 6px;
          padding: 1.25rem 1.75rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem;
          text-align: left;
        }

        .event-context-left {
          flex: 1;
        }

        .context-tag {
          font-family: var(--font-mono, monospace);
          font-size: 0.7rem;
          letter-spacing: 0.16em;
          color: var(--purple-light, #c084fc);
          display: block;
          margin-bottom: 0.25rem;
        }

        .context-title {
          font-family: var(--font-display, sans-serif);
          font-size: 1.4rem;
          letter-spacing: 0.03em;
          color: #ffffff;
          margin: 0 0 0.35rem 0;
        }

        .context-desc {
          font-family: var(--font-sans, sans-serif);
          font-size: 0.9rem;
          color: var(--text-secondary, #a3a3a3);
          margin: 0;
        }

        .context-clear-btn {
          font-family: var(--font-mono, monospace);
          font-size: 0.75rem;
          letter-spacing: 0.1em;
          color: var(--purple-light, #c084fc);
          background: rgba(138, 43, 226, 0.15);
          border: 1px solid rgba(138, 43, 226, 0.3);
          padding: 0.5rem 1rem;
          border-radius: 4px;
          cursor: pointer;
          transition: all 0.2s ease;
          white-space: nowrap;
        }

        .context-clear-btn:hover {
          background: rgba(138, 43, 226, 0.3);
          color: #ffffff;
        }

        /* ============================================================
           DAY SECTIONS & HEADINGS
        ============================================================ */
        .day-section {
          margin-bottom: 4rem;
        }

        .day-section-highlighted {
          position: relative;
        }

        .day-section-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1rem;
          border-bottom: 1px solid rgba(138, 43, 226, 0.25);
          padding-bottom: 1rem;
          margin-bottom: 2rem;
        }

        .day-header-left {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .day-badge {
          font-family: var(--font-mono, monospace);
          font-size: 0.7rem;
          letter-spacing: 0.16em;
          color: var(--purple-light, #c084fc);
          background: rgba(138, 43, 226, 0.1);
          border: 1px solid rgba(138, 43, 226, 0.25);
          display: inline-block;
          padding: 0.2rem 0.6rem;
          border-radius: 4px;
          width: fit-content;
        }

        .day-badge-alt {
          color: var(--purple-light, #c084fc);
          background: rgba(138, 43, 226, 0.15);
          border-color: rgba(138, 43, 226, 0.35);
        }

        .day-heading {
          font-family: var(--font-display, sans-serif);
          font-size: clamp(1.8rem, 3.5vw, 2.5rem);
          font-weight: 700;
          letter-spacing: 0.03em;
          line-height: 1.1;
          color: #ffffff;
          margin: 0;
          text-transform: uppercase;
        }

        .day-sub-date {
          font-family: var(--font-mono, monospace);
          font-size: 0.95rem;
          color: var(--purple-light, #c084fc);
          letter-spacing: 0.1em;
          font-weight: 600;
          display: inline-block;
          margin-top: 0.25rem;
        }

        .day-header-right {
          font-family: var(--font-mono, monospace);
          font-size: 0.75rem;
          letter-spacing: 0.1em;
          color: var(--text-tertiary, #888888);
        }

        .day-meta-pill {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          padding: 0.4rem 0.85rem;
          border-radius: 4px;
        }

        /* Divider Strip */
        .day-divider-strip {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          margin: 4.5rem 0 3.5rem 0;
        }

        .divider-line {
          flex: 1;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(138, 43, 226, 0.3), transparent);
        }

        .divider-label {
          font-family: var(--font-mono, monospace);
          font-size: 0.72rem;
          letter-spacing: 0.2em;
          color: var(--text-tertiary, #777777);
          text-transform: uppercase;
          white-space: nowrap;
        }

        /* ============================================================
           PASSES GRID (3 Desktop, 2 Tablet, 1 Mobile)
        ============================================================ */
        .passes-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }

        @media (max-width: 1024px) {
          .passes-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .passes-grid {
            grid-template-columns: 1fr;
          }
        }

        /* Card Architecture */
        .pass-card {
          background: #08080c;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-top: 2px solid rgba(138, 43, 226, 0.5);
          border-radius: 8px;
          padding: 2rem 1.75rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          position: relative;
          transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
        }

        .pass-card:hover {
          transform: translateY(-3px);
          border-color: rgba(138, 43, 226, 0.7);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.6), 0 0 20px rgba(138, 43, 226, 0.15);
        }

        .pass-card-top {
          margin-bottom: 1.5rem;
        }

        .pass-label-strip {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.85rem;
        }

        .pass-label-tag {
          font-family: var(--font-mono, monospace);
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.14em;
          color: var(--purple-light, #c084fc);
          background: rgba(138, 43, 226, 0.12);
          padding: 0.2rem 0.6rem;
          border-radius: 4px;
          border: 1px solid rgba(138, 43, 226, 0.25);
          text-transform: uppercase;
        }

        .pass-label-alt {
          color: var(--purple-light, #c084fc);
          background: rgba(138, 43, 226, 0.15);
          border-color: rgba(138, 43, 226, 0.35);
        }

        .pass-day-indicator {
          font-family: var(--font-mono, monospace);
          font-size: 0.75rem;
          color: var(--text-tertiary, #777777);
          letter-spacing: 0.08em;
        }

        .pass-category-title {
          font-family: var(--font-display, sans-serif);
          font-size: 1.35rem;
          font-weight: 700;
          letter-spacing: 0.02em;
          color: #ffffff;
          margin: 0 0 0.5rem 0;
          line-height: 1.25;
        }

        .pass-category-desc {
          font-family: var(--font-sans, sans-serif);
          font-size: 0.88rem;
          line-height: 1.5;
          color: var(--text-secondary, #9ca3af);
          margin: 0;
          min-height: 2.7rem;
        }

        /* Pricing Block */
        .pass-pricing-block {
          padding: 1.25rem 0;
          border-top: 1px dashed rgba(255, 255, 255, 0.1);
          border-bottom: 1px dashed rgba(255, 255, 255, 0.1);
          margin-bottom: 1.5rem;
        }

        .pass-price-display {
          display: flex;
          align-items: baseline;
          gap: 0.5rem;
        }

        .pass-price-num {
          font-family: var(--font-display, sans-serif);
          font-size: 2.4rem;
          font-weight: 800;
          letter-spacing: -0.01em;
          color: #ffffff;
        }

        .pass-price-sub {
          font-family: var(--font-mono, monospace);
          font-size: 0.78rem;
          color: var(--text-tertiary, #888888);
          letter-spacing: 0.06em;
        }

        .pass-tax-note {
          display: block;
          font-family: var(--font-mono, monospace);
          font-size: 0.72rem;
          color: var(--purple-light, #c084fc);
          letter-spacing: 0.06em;
          margin-top: 0.25rem;
        }

        /* Features */
        .pass-features-block {
          flex: 1;
          margin-bottom: 2rem;
        }

        .features-label {
          font-family: var(--font-mono, monospace);
          font-size: 0.7rem;
          letter-spacing: 0.14em;
          color: var(--text-tertiary, #777777);
          display: block;
          margin-bottom: 0.85rem;
        }

        .features-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }

        .features-list li {
          display: flex;
          align-items: flex-start;
          gap: 0.6rem;
          font-family: var(--font-sans, sans-serif);
          font-size: 0.85rem;
          line-height: 1.45;
          color: var(--text-secondary, #d1d5db);
        }

        .feature-check-icon {
          color: var(--purple-light, #c084fc);
          flex-shrink: 0;
          margin-top: 3px;
        }

        /* Action */
        .pass-card-footer {
          margin-top: auto;
        }

        .pass-action-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.65rem;
          padding: 0.95rem 1.5rem;
          font-size: 0.88rem;
          font-weight: 600;
          letter-spacing: 0.08em;
        }

        /* Footnote Box */
        .register-footnote-box {
          margin-top: 3.5rem;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 6px;
          padding: 1.25rem 1.75rem;
          display: flex;
          align-items: flex-start;
          gap: 1rem;
        }

        .footnote-alert-icon {
          color: var(--purple-light, #c084fc);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .footnote-content {
          flex: 1;
        }

        .footnote-main-text {
          font-family: var(--font-mono, monospace);
          font-size: 0.82rem;
          color: #ffffff;
          margin: 0 0 0.35rem 0;
          line-height: 1.5;
        }

        .footnote-sub-text {
          font-family: var(--font-sans, sans-serif);
          font-size: 0.8rem;
          color: var(--text-tertiary, #888888);
          margin: 0;
          line-height: 1.4;
        }

        /* ============================================================
           PARTICIPANT DETAILS FORM STEP
        ============================================================ */
        .details-flow-wrapper {
          max-width: 1080px;
          margin: 0 auto;
        }

        .details-header-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .details-back-nav-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: var(--text-secondary, #d1d5db);
          font-family: var(--font-mono, monospace);
          font-size: 0.78rem;
          letter-spacing: 0.08em;
          padding: 0.55rem 1rem;
          border-radius: 4px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .details-back-nav-btn:hover {
          background: rgba(255, 255, 255, 0.08);
          color: #ffffff;
          border-color: rgba(255, 255, 255, 0.3);
        }

        .details-step-badge {
          font-family: var(--font-mono, monospace);
          font-size: 0.75rem;
          letter-spacing: 0.14em;
          color: var(--purple-light, #c084fc);
        }

        .details-grid-layout {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 2rem;
        }

        @media (max-width: 860px) {
          .details-grid-layout {
            grid-template-columns: 1fr;
          }
        }

        .details-form-card {
          background: #09090e;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          padding: 2.25rem;
        }

        .form-card-intro {
          margin-bottom: 2rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          padding-bottom: 1.25rem;
        }

        .form-card-title {
          font-family: var(--font-display, sans-serif);
          font-size: 1.4rem;
          font-weight: 700;
          color: #ffffff;
          margin: 0 0 0.4rem 0;
          letter-spacing: 0.02em;
        }

        .form-card-desc {
          font-family: var(--font-sans, sans-serif);
          font-size: 0.88rem;
          color: var(--text-secondary, #9ca3af);
          margin: 0;
          line-height: 1.5;
        }

        .delegate-form {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .form-field-group {
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
        }

        .form-row-dual {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.25rem;
        }

        @media (max-width: 600px) {
          .form-row-dual {
            grid-template-columns: 1fr;
          }
        }

        .field-label {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-family: var(--font-mono, monospace);
          font-size: 0.75rem;
          letter-spacing: 0.08em;
          color: var(--text-secondary, #d1d5db);
        }

        .field-hint {
          color: var(--text-tertiary, #777777);
          font-size: 0.7rem;
        }

        .field-required-note {
          color: var(--purple-light, #c084fc);
          font-size: 0.7rem;
        }

        .field-input {
          background: #030305;
          border: 1px solid rgba(255, 255, 255, 0.14);
          border-radius: 4px;
          padding: 0.8rem 1rem;
          color: #ffffff;
          font-family: var(--font-sans, sans-serif);
          font-size: 0.92rem;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }

        .field-input:focus {
          outline: none;
          border-color: var(--purple-main, #8a2be2);
          box-shadow: 0 0 0 2px rgba(138, 43, 226, 0.25);
        }

        .field-select {
          cursor: pointer;
        }

        .ieee-field-group .field-input {
          border-color: rgba(138, 43, 226, 0.4);
        }

        .form-action-row {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-top: 1.25rem;
        }

        .form-submit-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.65rem;
          padding: 1.05rem;
          font-size: 0.95rem;
          font-weight: 600;
          letter-spacing: 0.08em;
        }

        .form-skip-btn {
          background: none;
          border: none;
          color: var(--text-secondary, #9ca3af);
          font-family: var(--font-mono, monospace);
          font-size: 0.78rem;
          letter-spacing: 0.06em;
          cursor: pointer;
          text-align: center;
          transition: color 0.2s ease;
          padding: 0.25rem;
        }

        .form-skip-btn:hover {
          color: var(--purple-light, #c084fc);
          text-decoration: underline;
        }

        /* Order Summary Card */
        .details-summary-card {
          background: #08080c;
          border: 1px solid rgba(138, 43, 226, 0.35);
          border-radius: 8px;
          padding: 2.25rem 1.75rem;
          display: flex;
          flex-direction: column;
          height: fit-content;
        }

        .summary-eyebrow {
          font-family: var(--font-mono, monospace);
          font-size: 0.7rem;
          letter-spacing: 0.16em;
          color: var(--purple-light, #c084fc);
          margin-bottom: 0.4rem;
        }

        .summary-pass-name {
          font-family: var(--font-display, sans-serif);
          font-size: 1.5rem;
          font-weight: 700;
          color: #ffffff;
          margin: 0 0 0.2rem 0;
        }

        .summary-category {
          font-family: var(--font-mono, monospace);
          font-size: 0.8rem;
          color: var(--text-secondary, #d1d5db);
          margin-bottom: 0.3rem;
          display: block;
        }

        .summary-date-line {
          font-family: var(--font-mono, monospace);
          font-size: 0.75rem;
          color: var(--text-tertiary, #888888);
          margin-bottom: 1.5rem;
          display: block;
        }

        .summary-price-box {
          background: rgba(138, 43, 226, 0.08);
          border: 1px solid rgba(138, 43, 226, 0.25);
          border-radius: 6px;
          padding: 1.25rem;
          margin-bottom: 1.75rem;
          text-align: center;
        }

        .price-label {
          font-family: var(--font-mono, monospace);
          font-size: 0.7rem;
          letter-spacing: 0.12em;
          color: var(--text-tertiary, #a3a3a3);
          display: block;
          margin-bottom: 0.25rem;
        }

        .price-number {
          font-family: var(--font-display, sans-serif);
          font-size: 2.25rem;
          font-weight: 800;
          color: #ffffff;
        }

        .price-sub {
          font-family: var(--font-mono, monospace);
          font-size: 0.68rem;
          color: var(--purple-light, #c084fc);
          display: block;
          margin-top: 0.2rem;
        }

        .summary-inclusions {
          margin-bottom: 1.75rem;
        }

        .inclusions-title {
          font-family: var(--font-mono, monospace);
          font-size: 0.7rem;
          letter-spacing: 0.14em;
          color: var(--text-tertiary, #888888);
          display: block;
          margin-bottom: 0.75rem;
        }

        .summary-inclusions ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.55rem;
        }

        .summary-inclusions li {
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
          font-family: var(--font-sans, sans-serif);
          font-size: 0.82rem;
          color: var(--text-secondary, #d1d5db);
          line-height: 1.4;
        }

        .summary-guarantee-note {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          padding-top: 1.25rem;
          font-family: var(--font-mono, monospace);
          font-size: 0.72rem;
          color: var(--text-secondary, #a3a3a3);
        }

        /* ============================================================
           CLEAN COMING SOON SCREEN
        ============================================================ */
        .coming-soon-wrapper {
          display: flex;
          justify-content: center;
          padding: 2rem 0;
        }

        .coming-soon-card {
          max-width: 640px;
          width: 100%;
          background: #09090e;
          border: 1px solid rgba(138, 43, 226, 0.4);
          border-radius: 8px;
          padding: 3.5rem 2.5rem;
          text-align: center;
          position: relative;
        }

        .coming-soon-badge-strip {
          margin-bottom: 1.5rem;
        }

        .cs-badge {
          font-family: var(--font-mono, monospace);
          font-size: 0.72rem;
          letter-spacing: 0.16em;
          color: var(--purple-light, #c084fc);
          background: rgba(138, 43, 226, 0.12);
          border: 1px solid rgba(138, 43, 226, 0.3);
          padding: 0.35rem 0.85rem;
          border-radius: 4px;
        }

        .coming-soon-title {
          font-family: var(--font-display, sans-serif);
          font-size: clamp(2rem, 4.5vw, 2.8rem);
          font-weight: 800;
          letter-spacing: 0.02em;
          color: #ffffff;
          margin: 0 0 1.25rem 0;
          line-height: 1.15;
        }

        .coming-soon-message {
          font-family: var(--font-sans, sans-serif);
          font-size: 1.05rem;
          line-height: 1.6;
          color: var(--text-secondary, #d1d5db);
          margin: 0 0 2rem 0;
        }

        .coming-soon-details-pill {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 6px;
          padding: 0.85rem 1.25rem;
          margin: 0 auto 2.5rem auto;
          display: inline-flex;
          flex-direction: column;
          gap: 0.3rem;
          font-family: var(--font-mono, monospace);
          font-size: 0.82rem;
        }

        .cs-pill-label {
          color: var(--text-tertiary, #777777);
          font-size: 0.7rem;
          letter-spacing: 0.1em;
        }

        .cs-pill-val {
          color: var(--purple-light, #c084fc);
        }

        .coming-soon-actions {
          margin-bottom: 2rem;
        }

        .coming-soon-back-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.65rem;
          padding: 1rem 2.25rem;
          font-size: 0.92rem;
          font-weight: 600;
          letter-spacing: 0.08em;
        }

        .coming-soon-footnote {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-mono, monospace);
          font-size: 0.72rem;
          color: var(--text-tertiary, #888888);
          line-height: 1.4;
        }
      `}</style>
    </div>
  );
}
