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
  Info,
  Sparkles,
  Layers,
  Gift
} from 'lucide-react';
import { registrationOptions, registrationMeta, passSharedInfo } from '../data/registration';
import { useRegistrationPricing } from '../hooks/useRegistrationPricing';
import { eventsData } from '../data/events';
import Reveal from '../components/Reveal';
import RegistrationOffer from '../components/RegistrationOffer';

export default function Register() {
  const { isOfferActive, hasEnded, getPassInfo, offerConfig } = useRegistrationPricing();
  const [searchParams, setSearchParams] = useSearchParams();
  const eventParam = searchParams.get('event');
  const passParam = searchParams.get('pass');

  // Find referenced event if provided via query param
  const matchedEvent = eventParam 
    ? eventsData.find(e => e.id.toLowerCase() === eventParam.toLowerCase()) 
    : null;

  // Selected pass for details / checkout flow
  const [selectedPass, setSelectedPass] = useState(null);
  const [step, setStep] = useState('list'); // 'list' | 'details' | 'coming-soon'

  // Auto-select pass if passed via query param on initial load
  useEffect(() => {
    if (passParam) {
      const found = registrationOptions.find(p => p.id.toLowerCase() === passParam.toLowerCase());
      if (found) {
        setSelectedPass(found);
        setStep('details');
      }
    }
  }, [passParam]);

  // Optional participant details form state
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

    // IF real paymentUrl exists: redirect to the configured KKonfHub payment URL
    if (selectedPass.paymentUrl && selectedPass.paymentUrl.trim() !== '') {
      window.location.href = selectedPass.paymentUrl;
      return;
    }

    // IF paymentUrl is empty: show clean coming soon screen (no fake payments)
    setStep('coming-soon');
  };

  // Reset back to pass list
  const handleResetToPasses = () => {
    setStep('list');
    setSelectedPass(null);
  };

  const day1Passes = registrationOptions.filter(opt => opt.dayNumber === 1);
  const day2Passes = registrationOptions.filter(opt => opt.dayNumber === 2);
  const fullPassShared = passSharedInfo.fullPass;
  const day2PassShared = passSharedInfo.day2Pass;

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
              <span>13–14 OCTOBER 2026</span>
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
                    ? `This event is scheduled on ${matchedEvent.eventDate} (${matchedEvent.dayLabel}). Entry is included with any ${matchedEvent.dayLabel === 'Day 1' ? 'Full Event' : 'Day 2'} Pass below.`
                    : `Please select the appropriate Pass below to register for this track.`
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
                1. FULL EVENT PASS SECTION (13–14 OCTOBER 2026)
                DAY 1 + DAY 2 ACCESS
            -------------------------------------------------- */}
            <section 
              className={`day-section full-event-section ${matchedEvent && matchedEvent.day === 1 ? 'day-section-highlighted' : ''}`}
              aria-labelledby="full-event-heading"
            >
              {/* Pass Main Header */}
              <Reveal variant="header" className="pass-section-header">
                <div className="pass-header-left">
                  <div className="pass-badge-row">
                    <span className="pass-phase-badge">PHASE 01</span>
                    <span className="pass-access-pill-primary">DAY 1 + DAY 2 ACCESS</span>
                  </div>
                  <h2 id="full-event-heading" className="pass-main-heading">
                    {fullPassShared.title}
                  </h2>
                  <span className="pass-header-dates">{fullPassShared.dates}</span>
                  <p className="pass-header-desc">{fullPassShared.description}</p>
                </div>
              </Reveal>

              {/* SHARED INFORMATION BLOCK (Shown ONCE above the 3 pricing cards) */}
              <Reveal variant="card" className="shared-info-panel" role="region" aria-label="Full Event Pass Inclusions and Benefits">
                {/* Inclusions Area */}
                <div className="shared-inclusions-col">
                  <div className="shared-block-header">
                    <Layers size={16} className="shared-header-icon" />
                    <h3 className="shared-block-title">{fullPassShared.inclusionsTitle}</h3>
                  </div>

                  <div className="shared-schedule-dual-grid">
                    {fullPassShared.scheduleGroups.map((group, gIdx) => (
                      <div key={gIdx} className="shared-day-group">
                        <span className="shared-day-label">{group.dayHeading}</span>
                        <ul className="shared-events-list">
                          {group.events.map((evt, eIdx) => (
                            <li key={eIdx}>
                              <span className="shared-bullet">•</span>
                              <span className="shared-event-name">{evt}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Additional Benefits Area (Shown ONCE) */}
                <div className="shared-benefits-col">
                  <div className="shared-block-header">
                    <Gift size={16} className="shared-header-icon" />
                    <h3 className="shared-block-title">{fullPassShared.benefitsTitle}</h3>
                  </div>
                  <ul className="shared-benefits-list">
                    {fullPassShared.benefits.map((benefit, bIdx) => (
                      <li key={bIdx}>
                        <CheckCircle2 size={16} className="shared-benefit-check" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              {/* Day 1 Pricing Sub-Header */}
              <div className="pricing-sub-header">
                <h3 className="pricing-sub-title">{fullPassShared.pricingSectionLabel}</h3>
                <span className="pricing-sub-note">Select your delegate category below to proceed to registration.</span>
              </div>

              {/* Day 1 Pricing Cards (ONLY: category, price, offer indicator, register button) */}
              <Reveal variant="stagger" className="passes-grid">
                {day1Passes.map((pass) => {
                  const pInfo = getPassInfo(pass);
                  return (
                    <article key={pass.id} className="pass-card reveal-card">
                      <div className="pass-card-top">
                        <div className="pass-label-strip">
                          <span className="pass-label-tag">{pass.label}</span>
                          <span className="pass-day-indicator">13–14 OCT</span>
                        </div>
                        <h4 className="pass-category-title">{pass.category}</h4>
                        <p className="pass-category-desc">{pass.description}</p>
                      </div>

                      <div className="pass-pricing-block">
                        <div className="pass-price-display">
                          <span className="pass-price-num">{pInfo.displayPrice}</span>
                          {isOfferActive && (
                            <del className="pass-price-struck" aria-label={`Standard price ${pInfo.normalDisplayPrice}`}>
                              {pInfo.normalDisplayPrice}
                            </del>
                          )}
                          <span className="pass-price-sub">per delegate</span>
                        </div>
                        {isOfferActive ? (
                          <div className="pass-save-strip">
                            <span className="pass-save-pill">SAVE ₹100 • EARLY OFFER</span>
                          </div>
                        ) : (
                          <span className="pass-tax-note">Indicative proposal tier</span>
                        )}
                      </div>

                      <div className="pass-card-footer">
                        <button 
                          onClick={() => handleSelectPass(pass)} 
                          className="btn btn-primary pass-action-btn"
                          aria-label={`Register & Pay for Full Event Pass ${pass.category} at ${pInfo.displayPrice}`}
                        >
                          <span>REGISTER & PAY</span>
                          <ArrowRight size={16} />
                        </button>
                      </div>
                    </article>
                  );
                })}
              </Reveal>
            </section>

            {/* Visual Section Separator */}
            <div className="day-divider-strip">
              <div className="divider-line" />
              <span className="divider-label">CONFERENCE TIMELINE CONTINUES</span>
              <div className="divider-line" />
            </div>
            {/* --------------------------------------------------
                2. DAY 2 PASS SECTION (14 OCTOBER 2026)
                DAY 2 ACCESS ONLY
            -------------------------------------------------- */}
            <section 
              className={`day-section day-2-section ${matchedEvent && matchedEvent.day === 2 ? 'day-section-highlighted' : ''}`}
              aria-labelledby="day-2-heading"
            >
              {/* Pass Main Header */}
              <Reveal variant="header" className="pass-section-header">
                <div className="pass-header-left">
                  <div className="pass-badge-row">
                    <span className="pass-phase-badge day-badge-alt">PHASE 02</span>
                    <span className="pass-access-pill-secondary">DAY 2 ACCESS ONLY</span>
                  </div>
                  <h2 id="day-2-heading" className="pass-main-heading">
                    {day2PassShared.title}
                  </h2>
                  <span className="pass-header-dates">{day2PassShared.dates}</span>
                  <p className="pass-header-desc">{day2PassShared.description}</p>
                </div>
              </Reveal>

              {/* SHARED INFORMATION BLOCK (Shown ONCE above the 3 pricing cards) */}
              <Reveal variant="card" className="shared-info-panel" role="region" aria-label="Day 2 Pass Inclusions and Benefits">
                {/* Inclusions Area */}
                <div className="shared-inclusions-col">
                  <div className="shared-block-header">
                    <Layers size={16} className="shared-header-icon" />
                    <h3 className="shared-block-title">{day2PassShared.inclusionsTitle}</h3>
                  </div>

                  <div className="shared-schedule-single-grid">
                    {day2PassShared.scheduleGroups.map((group, gIdx) => (
                      <div key={gIdx} className="shared-day-group">
                        <ul className="shared-events-list">
                          {group.events.map((evt, eIdx) => (
                            <li key={eIdx}>
                              <span className="shared-bullet">•</span>
                              <span className="shared-event-name">{evt}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Additional Benefits Area (Shown ONCE) */}
                <div className="shared-benefits-col">
                  <div className="shared-block-header">
                    <Gift size={16} className="shared-header-icon" />
                    <h3 className="shared-block-title">{day2PassShared.benefitsTitle}</h3>
                  </div>
                  <ul className="shared-benefits-list">
                    {day2PassShared.benefits.map((benefit, bIdx) => (
                      <li key={bIdx}>
                        <CheckCircle2 size={16} className="shared-benefit-check" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              {/* Day 2 Pricing Sub-Header */}
              <div className="pricing-sub-header">
                <h3 className="pricing-sub-title">{day2PassShared.pricingSectionLabel}</h3>
                <span className="pricing-sub-note">Select your delegate category below to proceed to registration.</span>
              </div>

              {/* Day 2 Pricing Cards (ONLY: category, price, offer indicator, register button) */}
              <Reveal variant="stagger" className="passes-grid">
                {day2Passes.map((pass) => {
                  const pInfo = getPassInfo(pass);
                  return (
                    <article key={pass.id} className="pass-card reveal-card">
                      <div className="pass-card-top">
                        <div className="pass-label-strip">
                          <span className="pass-label-tag pass-label-alt">{pass.label}</span>
                          <span className="pass-day-indicator">14 OCT</span>
                        </div>
                        <h4 className="pass-category-title">{pass.category}</h4>
                        <p className="pass-category-desc">{pass.description}</p>
                      </div>

                      <div className="pass-pricing-block">
                        <div className="pass-price-display">
                          <span className="pass-price-num">{pInfo.displayPrice}</span>
                          {isOfferActive && (
                            <del className="pass-price-struck" aria-label={`Standard price ${pInfo.normalDisplayPrice}`}>
                              {pInfo.normalDisplayPrice}
                            </del>
                          )}
                          <span className="pass-price-sub">per delegate</span>
                        </div>
                        {isOfferActive ? (
                          <div className="pass-save-strip">
                            <span className="pass-save-pill">SAVE ₹100 • EARLY OFFER</span>
                          </div>
                        ) : (
                          <span className="pass-tax-note">Indicative proposal tier</span>
                        )}
                      </div>

                      <div className="pass-card-footer">
                        <button 
                          onClick={() => handleSelectPass(pass)} 
                          className="btn btn-primary pass-action-btn"
                          aria-label={`Register & Pay for Day 2 ${pass.category} at ${pInfo.displayPrice}`}
                        >
                          <span>REGISTER & PAY</span>
                          <ArrowRight size={16} />
                        </button>
                      </div>
                    </article>
                  );
                })}
              </Reveal>
            </section>

            {/* Official Payment Information Notice */}
            <Reveal variant="pop" className="register-footnote-box" role="note">
              <AlertCircle size={18} className="footnote-alert-icon" />
              <div className="footnote-content">
                <span className="footnote-notice-title">PAYMENT INFORMATION</span>
                <p className="footnote-main-text">
                  {registrationMeta.footnote}
                </p>
                <p className="footnote-sub-text">
                  Payment portals will be opened following formal institutional sanction. KKonfHub registration links will be published directly on this portal.
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
                        .filter(e => selectedPass.dayNumber === 1 || e.day === selectedPass.dayNumber)
                        .map(e => (
                          <option key={e.id} value={e.title}>
                            {e.title} (Day {e.day} • {e.time})
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
                      Skip details & continue directly  
                    </button>
                  </div>
                </form>
              </div>

              {/* Right Column: Order Summary */}
              {(() => {
                const selectedInfo = selectedPass ? getPassInfo(selectedPass) : null;
                const shared = selectedPass.dayNumber === 1 ? fullPassShared : day2PassShared;
                return (
                  <aside className="details-summary-card" aria-labelledby="summary-heading">
                    <span className="summary-eyebrow">ORDER SUMMARY</span>
                    <h3 id="summary-heading" className="summary-pass-name">{selectedPass.passType || selectedPass.label}</h3>
                    <div className="summary-access-badge">{selectedPass.accessLabel}</div>
                    <span className="summary-category">{selectedPass.category}</span>
                    <span className="summary-date-line">{selectedPass.date}</span>

                    <div className="summary-price-box">
                      <span className="price-label">{isOfferActive ? 'EARLY OFFER REGISTRATION FEE' : 'INDICATIVE FEE'}</span>
                      <div className="summary-price-display-row">
                        <div className="price-number">{selectedInfo ? selectedInfo.displayPrice : selectedPass.displayPrice}</div>
                        {isOfferActive && selectedInfo && (
                          <del className="summary-struck-price" aria-label={`Standard fee ${selectedInfo.normalDisplayPrice}`}>
                            {selectedInfo.normalDisplayPrice}
                          </del>
                        )}
                      </div>
                      {isOfferActive ? (
                        <div className="summary-save-note">
                          <span>₹100 DISCOUNT APPLIED AUTOMATICALLY</span>
                        </div>
                      ) : (
                        <span className="price-sub">Subject to final confirmation</span>
                      )}
                    </div>

                    <div className="summary-inclusions">
                      <span className="inclusions-title">INCLUSIONS:</span>
                      <ul>
                        {shared.scheduleGroups.map((g) => (
                          g.events.map((feat, i) => (
                            <li key={`${g.dayHeading}-${i}`}>
                              <CheckCircle2 size={13} color="var(--purple-light)" />
                              <span>{feat}</span>
                            </li>
                          ))
                        ))}
                        {shared.benefits.map((b, i) => (
                          <li key={`b-${i}`} className="summary-benefit-item">
                            <CheckCircle2 size={13} color="#22C55E" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="summary-guarantee-note">
                      <Shield size={14} color="var(--purple-light)" />
                      <span>Verified IEEE Student Branch Chapter Portal</span>
                    </div>
                  </aside>
                );
              })()}
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

              {selectedPass && (() => {
                const selectedInfo = getPassInfo(selectedPass);
                return (
                  <div className="coming-soon-details-pill">
                    <span className="cs-pill-label">SELECTED CATEGORY:</span>
                    <strong className="cs-pill-val">
                      {selectedPass.label} — {selectedPass.category} ({selectedInfo.displayPrice})
                      {isOfferActive ? ' [Early Offer: ₹100 Off Applied]' : ''}
                    </strong>
                  </div>
                );
              })()}

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
                <span>Payment portals will be opened following formal institutional sanction. KKonfHub registration links will be published directly on this portal.</span>
              </div>
            </div>
          </Reveal>
        )}

      </div>
      <style>{`
        /* ============================================================
           REGISTER PAGE LAYOUT & FOUNDATIONS
        ============================================================ */
        .register-page-root {
          min-height: 100vh;
          background: #030305;
          color: #f3f4f6;
          position: relative;
          padding: 8rem 0 6rem 0;
          overflow: hidden;
        }

        .register-grid-bg {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
          background-size: 40px 40px;
          pointer-events: none;
          z-index: 0;
        }

        .register-purple-glow {
          position: absolute;
          top: 5%;
          left: 50%;
          transform: translateX(-50%);
          width: 800px;
          height: 400px;
          background: radial-gradient(circle, rgba(138, 43, 226, 0.12) 0%, rgba(3, 3, 5, 0) 70%);
          pointer-events: none;
          z-index: 0;
        }

        .register-container {
          position: relative;
          z-index: 1;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        /* Header Architecture */
        .register-header {
          text-align: center;
          margin-bottom: 3.5rem;
        }

        .register-eyebrow-strip {
          display: inline-flex;
          align-items: center;
          gap: 0.65rem;
          font-family: var(--font-mono, monospace);
          font-size: 0.75rem;
          letter-spacing: 0.16em;
          color: var(--purple-light, #c084fc);
          margin-bottom: 1rem;
        }

        .eyebrow-badge {
          background: rgba(138, 43, 226, 0.12);
          border: 1px solid rgba(138, 43, 226, 0.3);
          padding: 0.25rem 0.65rem;
          border-radius: 4px;
        }

        .eyebrow-sep {
          color: rgba(255, 255, 255, 0.2);
        }

        .eyebrow-meta {
          color: var(--text-secondary, #9ca3af);
        }

        .register-main-title {
          font-family: var(--font-display, sans-serif);
          font-size: clamp(2.4rem, 5vw, 4rem);
          font-weight: 800;
          letter-spacing: 0.02em;
          color: #ffffff;
          line-height: 1.1;
          margin: 0 0 1rem 0;
          text-transform: uppercase;
        }

        .register-subtitle-box {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 1rem;
          font-family: var(--font-mono, monospace);
          font-size: 0.88rem;
          color: var(--text-secondary, #d1d5db);
          margin-bottom: 1.25rem;
        }

        .subtitle-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .subtitle-icon {
          color: var(--purple-light, #c084fc);
        }

        .subtitle-dot {
          color: rgba(255, 255, 255, 0.25);
        }

        .register-intro-text {
          max-width: 680px;
          margin: 0 auto;
          font-family: var(--font-sans, sans-serif);
          font-size: 1rem;
          line-height: 1.6;
          color: var(--text-secondary, #9ca3af);
        }

        /* Event Context Banner */
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
           PASS SECTIONS & HEADINGS
        ============================================================ */
        .day-section {
          margin-bottom: 4rem;
        }

        .day-section-highlighted {
          position: relative;
        }

        .pass-section-header {
          border-bottom: 1px solid rgba(138, 43, 226, 0.25);
          padding-bottom: 1.25rem;
          margin-bottom: 1.75rem;
        }

        .pass-header-left {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .pass-badge-row {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex-wrap: wrap;
        }

        .pass-phase-badge {
          font-family: var(--font-mono, monospace);
          font-size: 0.7rem;
          letter-spacing: 0.16em;
          color: var(--purple-light, #c084fc);
          background: rgba(138, 43, 226, 0.1);
          border: 1px solid rgba(138, 43, 226, 0.25);
          display: inline-block;
          padding: 0.2rem 0.6rem;
          border-radius: 4px;
        }

        .pass-access-pill-primary {
          font-family: var(--font-mono, monospace);
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          color: #ffffff;
          background: linear-gradient(90deg, rgba(138, 43, 226, 0.35), rgba(168, 85, 247, 0.25));
          border: 1px solid rgba(168, 85, 247, 0.45);
          padding: 0.2rem 0.75rem;
          border-radius: 4px;
        }

        .pass-access-pill-secondary {
          font-family: var(--font-mono, monospace);
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          color: #ffffff;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.2);
          padding: 0.2rem 0.75rem;
          border-radius: 4px;
        }

        .day-badge-alt {
          color: var(--purple-light, #c084fc);
          background: rgba(138, 43, 226, 0.15);
          border-color: rgba(138, 43, 226, 0.35);
        }

        .pass-main-heading {
          font-family: var(--font-display, sans-serif);
          font-size: clamp(2rem, 3.8vw, 2.75rem);
          font-weight: 800;
          letter-spacing: 0.02em;
          line-height: 1.1;
          color: #ffffff;
          margin: 0;
          text-transform: uppercase;
        }

        .pass-header-dates {
          font-family: var(--font-mono, monospace);
          font-size: 1rem;
          color: var(--purple-light, #c084fc);
          letter-spacing: 0.1em;
          font-weight: 600;
          display: inline-block;
        }

        .pass-header-desc {
          font-family: var(--font-sans, sans-serif);
          font-size: 0.95rem;
          color: var(--text-secondary, #d1d5db);
          margin: 0;
          max-width: 680px;
          line-height: 1.5;
        }
        /* ============================================================
           SHARED INFORMATION BLOCK (Shown ONCE per registration type)
        ============================================================ */
        .shared-info-panel {
          background: #08080c;
          border: 1px solid rgba(138, 43, 226, 0.25);
          border-radius: 8px;
          padding: 2rem 2.25rem;
          margin-bottom: 2rem;
          display: grid;
          grid-template-columns: 2.2fr 1fr;
          gap: 2.5rem;
          position: relative;
          overflow: hidden;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
        }

        .shared-info-panel::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, rgba(138, 43, 226, 0.8), transparent);
        }

        .shared-inclusions-col {
          display: flex;
          flex-direction: column;
        }

        .shared-block-header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

        .shared-header-icon {
          color: var(--purple-light, #c084fc);
        }

        .shared-block-title {
          font-family: var(--font-mono, monospace);
          font-size: 0.78rem;
          letter-spacing: 0.16em;
          color: var(--purple-light, #c084fc);
          margin: 0;
          text-transform: uppercase;
          font-weight: 700;
        }

        .shared-schedule-dual-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }

        .shared-schedule-single-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
        }

        .shared-day-group {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .shared-day-label {
          font-family: var(--font-mono, monospace);
          font-size: 0.72rem;
          letter-spacing: 0.1em;
          color: #ffffff;
          font-weight: 700;
          background: rgba(255, 255, 255, 0.05);
          border-left: 2px solid var(--purple-light, #c084fc);
          padding: 0.25rem 0.5rem;
          border-radius: 0 4px 4px 0;
          display: inline-block;
          width: fit-content;
        }

        .shared-events-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
        }

        .shared-events-list li {
          display: flex;
          align-items: baseline;
          gap: 0.5rem;
          font-family: var(--font-sans, sans-serif);
          font-size: 0.88rem;
          color: var(--text-secondary, #d1d5db);
          line-height: 1.45;
        }

        .shared-bullet {
          color: var(--purple-light, #c084fc);
          font-weight: bold;
          flex-shrink: 0;
        }

        .shared-event-name {
          flex: 1;
        }

        /* Benefits Column */
        .shared-benefits-col {
          display: flex;
          flex-direction: column;
          background: rgba(138, 43, 226, 0.04);
          border: 1px solid rgba(138, 43, 226, 0.16);
          border-radius: 6px;
          padding: 1.25rem 1.5rem;
        }

        .shared-benefits-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }

        .shared-benefits-list li {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          font-family: var(--font-sans, sans-serif);
          font-size: 0.9rem;
          font-weight: 500;
          color: #f3f4f6;
          line-height: 1.4;
        }

        .shared-benefit-check {
          color: #22C55E;
          flex-shrink: 0;
        }

        /* Pricing Sub-Header */
        .pricing-sub-header {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
          padding-bottom: 0.65rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .pricing-sub-title {
          font-family: var(--font-display, sans-serif);
          font-size: 1.2rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          color: #ffffff;
          margin: 0;
          text-transform: uppercase;
        }

        .pricing-sub-note {
          font-family: var(--font-mono, monospace);
          font-size: 0.76rem;
          color: var(--text-tertiary, #9ca3af);
          letter-spacing: 0.04em;
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
           PASSES PRICING CARDS (Compact, Clean, ZERO Event Repetition)
        ============================================================ */
        .passes-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }

        @media (max-width: 1024px) {
          .shared-info-panel {
            grid-template-columns: 1fr;
            gap: 1.5rem;
            padding: 1.5rem;
          }
          .passes-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .shared-schedule-dual-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
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
          padding: 1.75rem 1.6rem;
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
          margin-bottom: 1.25rem;
        }

        .pass-label-strip {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.75rem;
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
          font-size: 1.25rem;
          font-weight: 700;
          letter-spacing: 0.02em;
          color: #ffffff;
          margin: 0 0 0.45rem 0;
          line-height: 1.25;
        }

        .pass-category-desc {
          font-family: var(--font-sans, sans-serif);
          font-size: 0.85rem;
          line-height: 1.45;
          color: var(--text-secondary, #9ca3af);
          margin: 0;
          min-height: 2.5rem;
        }

        /* Pricing Block */
        .pass-pricing-block {
          padding: 1.15rem 0;
          border-top: 1px dashed rgba(255, 255, 255, 0.1);
          border-bottom: 1px dashed rgba(255, 255, 255, 0.1);
          margin-bottom: 1.4rem;
        }

        .pass-price-display {
          display: flex;
          align-items: baseline;
          gap: 0.65rem;
          margin-bottom: 0.4rem;
          flex-wrap: wrap;
        }

        .pass-price-num {
          font-family: var(--font-display, sans-serif);
          font-size: 2.1rem;
          font-weight: 800;
          color: #ffffff;
          letter-spacing: -0.02em;
        }

        .pass-price-struck {
          font-family: var(--font-mono, monospace);
          font-size: 1.15rem;
          color: var(--text-tertiary, #888888);
          text-decoration: line-through;
          text-decoration-color: rgba(138, 43, 226, 0.7);
          opacity: 0.8;
          user-select: none;
        }

        .pass-price-sub {
          font-family: var(--font-mono, monospace);
          font-size: 0.72rem;
          color: var(--text-tertiary, #888888);
        }

        .pass-save-strip {
          display: flex;
          align-items: center;
        }

        .pass-save-pill {
          font-family: var(--font-mono, monospace);
          font-size: 0.68rem;
          letter-spacing: 0.08em;
          font-weight: 700;
          color: #22C55E;
          background: rgba(34, 197, 94, 0.1);
          border: 1px solid rgba(34, 197, 94, 0.25);
          padding: 0.2rem 0.55rem;
          border-radius: 4px;
        }

        .pass-tax-note {
          font-family: var(--font-mono, monospace);
          font-size: 0.68rem;
          color: var(--text-tertiary, #777777);
          letter-spacing: 0.06em;
        }

        .pass-card-footer {
          margin-top: auto;
        }

        .pass-action-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.9rem 1.25rem;
          font-size: 0.88rem;
          font-weight: 600;
          letter-spacing: 0.08em;
        }

        /* Footnote / Payment Notice */
        .register-footnote-box {
          margin-top: 3.5rem;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-left: 3px solid var(--purple-light, #c084fc);
          border-radius: 6px;
          padding: 1.5rem 1.75rem;
          display: flex;
          align-items: flex-start;
          gap: 1rem;
        }

        .footnote-alert-icon {
          color: var(--purple-light, #c084fc);
          flex-shrink: 0;
          margin-top: 0.15rem;
        }

        .footnote-content {
          flex: 1;
        }

        .footnote-notice-title {
          font-family: var(--font-mono, monospace);
          font-size: 0.72rem;
          letter-spacing: 0.16em;
          color: var(--purple-light, #c084fc);
          display: block;
          font-weight: 700;
          margin-bottom: 0.35rem;
        }

        .footnote-main-text {
          font-family: var(--font-mono, monospace);
          font-size: 0.78rem;
          color: var(--text-secondary, #d1d5db);
          line-height: 1.5;
          margin: 0 0 0.4rem 0;
        }

        .footnote-sub-text {
          font-family: var(--font-sans, sans-serif);
          font-size: 0.84rem;
          color: var(--text-secondary, #a3a3a3);
          line-height: 1.5;
          margin: 0;
        }
        /* ============================================================
           STEP 2: PARTICIPANT DETAILS FLOW
        ============================================================ */
        .details-flow-wrapper {
          padding: 1rem 0;
        }

        .details-header-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 2.25rem;
          padding-bottom: 1.25rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .details-back-nav-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: none;
          border: 1px solid rgba(255, 255, 255, 0.12);
          color: var(--text-secondary, #d1d5db);
          font-family: var(--font-mono, monospace);
          font-size: 0.76rem;
          letter-spacing: 0.1em;
          padding: 0.55rem 1rem;
          border-radius: 4px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .details-back-nav-btn:hover {
          background: rgba(138, 43, 226, 0.15);
          border-color: rgba(138, 43, 226, 0.4);
          color: #ffffff;
        }

        .details-step-badge {
          font-family: var(--font-mono, monospace);
          font-size: 0.72rem;
          letter-spacing: 0.14em;
          color: var(--purple-light, #c084fc);
        }

        .details-grid-layout {
          display: grid;
          grid-template-columns: 1.6fr 1fr;
          gap: 2.5rem;
          align-items: flex-start;
        }

        @media (max-width: 900px) {
          .details-grid-layout {
            grid-template-columns: 1fr;
          }
        }

        /* Form Card */
        .details-form-card {
          background: #08080c;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 8px;
          padding: 2.25rem 2rem;
        }

        .form-card-intro {
          margin-bottom: 2rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          padding-bottom: 1.25rem;
        }

        .form-card-title {
          font-family: var(--font-display, sans-serif);
          font-size: 1.45rem;
          font-weight: 700;
          color: #ffffff;
          letter-spacing: 0.02em;
          margin: 0 0 0.5rem 0;
        }

        .form-card-desc {
          font-family: var(--font-sans, sans-serif);
          font-size: 0.9rem;
          color: var(--text-secondary, #9ca3af);
          margin: 0;
          line-height: 1.5;
        }

        .delegate-form {
          display: flex;
          flex-direction: column;
          gap: 1.35rem;
        }

        .form-field-group {
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
        }

        .form-row-dual {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        @media (max-width: 600px) {
          .form-row-dual {
            grid-template-columns: 1fr;
          }
        }

        .field-label {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          font-family: var(--font-mono, monospace);
          font-size: 0.75rem;
          letter-spacing: 0.06em;
          color: var(--text-secondary, #d1d5db);
        }

        .field-hint {
          color: var(--text-tertiary, #666666);
          font-size: 0.7rem;
        }

        .field-required-note {
          color: var(--purple-light, #c084fc);
          font-size: 0.68rem;
          margin-left: auto;
        }

        .field-input {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 6px;
          padding: 0.85rem 1rem;
          font-family: var(--font-sans, sans-serif);
          font-size: 0.9rem;
          color: #ffffff;
          outline: none;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }

        .field-input:focus {
          border-color: var(--purple-light, #c084fc);
          box-shadow: 0 0 0 2px rgba(138, 43, 226, 0.2);
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
          margin: 0 0 0.25rem 0;
        }

        .summary-access-badge {
          font-family: var(--font-mono, monospace);
          font-size: 0.72rem;
          letter-spacing: 0.12em;
          color: var(--purple-light, #c084fc);
          background: rgba(138, 43, 226, 0.12);
          border: 1px solid rgba(138, 43, 226, 0.25);
          padding: 0.2rem 0.5rem;
          border-radius: 4px;
          width: fit-content;
          margin-bottom: 0.6rem;
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

        .summary-price-display-row {
          display: flex;
          align-items: baseline;
          justify-content: center;
          gap: 0.65rem;
        }

        .summary-struck-price {
          font-family: var(--font-mono, monospace);
          font-size: 1.15rem;
          color: var(--text-tertiary, #888888);
          text-decoration: line-through;
          text-decoration-color: rgba(138, 43, 226, 0.7);
          opacity: 0.8;
          user-select: none;
        }

        .summary-save-note {
          margin-top: 0.35rem;
          font-family: var(--font-mono, monospace);
          font-size: 0.68rem;
          letter-spacing: 0.08em;
          font-weight: 700;
          color: #22C55E;
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

        .summary-benefit-item {
          font-weight: 500;
          color: #f3f4f6 !important;
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
           CLEAN COMING SOON SCREEN (KKonfHub Gateway)
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
          text-align: center;
          justify-content: center;
        }
      `}</style>
    </div>
  );
}