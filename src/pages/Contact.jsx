import React, { useState } from 'react';
import { Mail, MapPin, Calendar, Send, CheckCircle2, MessageSquare, Clock, ArrowRight, Compass, Navigation } from 'lucide-react';
import TechAtmosphere from '../components/TechAtmosphere';
import Reveal from '../components/Reveal';
import { eventMeta } from '../data/contacts';
import campusFacadeImg from '../assets/architecture/sairam-campus-facade.png';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    institution: '',
    topic: 'General Event Inquiry',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      try {
        const stored = JSON.parse(localStorage.getItem('techx_inquiries') || '[]');
        stored.push({ ...formData, timestamp: new Date().toISOString() });
        localStorage.setItem('techx_inquiries', JSON.stringify(stored));
      } catch (err) {
        console.error(err);
      }
      setSubmitted(true);
    }
  };

  return (
    <div className="contact-page-root">
      <TechAtmosphere showArch={false} />

      {/* 1. Page Header */}
      <section className="contact-hero-section">
        <div className="container">
          <Reveal variant="header">
            <span className="section-eyebrow">COMMUNICATIONS & VENUE</span>
            <h1 className="contact-hero-title">
              CONTACT TECHX'26
            </h1>
            <p className="contact-hero-sub">
              IEEE Computer Society Student Branch Chapter<br />
              Sri Sai Ram Institute of Technology • Chennai, Tamil Nadu
            </p>
            <div className="contact-meta-pills">
              <div className="contact-pill">
                <Calendar size={15} color="var(--purple-light)" />
                <span>14 — 15 OCTOBER 2026</span>
              </div>
              <div className="contact-pill">
                <MapPin size={15} color="var(--purple-light)" />
                <span>CHENNAI, TAMIL NADU</span>
              </div>
              <div className="contact-pill">
                <Mail size={15} color="var(--purple-light)" />
                <span>techxmadras2k26@gmail.com</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2. Official Contact Channels */}
      <section className="contact-channels-section">
        <div className="container">
          <Reveal variant="header">
            <span className="section-eyebrow">DIRECT COMMUNICATIONS</span>
            <h2 className="section-title">OFFICIAL CONTACT CHANNELS</h2>
            <p className="section-sub-text">
              The organizing secretariat is available to assist student teams, faculty advisors, industry mentors, and delegates.
            </p>
          </Reveal>

          <Reveal variant="stagger" className="official-channel-grid">
            {/* Primary Email */}
            <div className="channel-card highlight-channel reveal-card">
              <div className="channel-icon-wrap">
                <Mail size={26} color="var(--purple-light)" />
              </div>
              <div className="channel-info">
                <span className="channel-label">OFFICIAL EVENT EMAIL</span>
                <a href={`mailto:${eventMeta.email}`} className="channel-email-link">
                  {eventMeta.email}
                </a>
                <p className="channel-note">
                  Primary liaison desk for general inquiries, team verification, speaker liaison, and partnerships.
                </p>
              </div>
            </div>

            {/* Registration Desk Status */}
            <div className="channel-card reveal-card">
              <div className="channel-icon-wrap">
                <Clock size={26} color="var(--purple-light)" />
              </div>
              <div className="channel-info">
                <span className="channel-label">REGISTRATION DESK</span>
                <strong className="channel-strong">Registration details coming soon</strong>
                <p className="channel-note">
                  Official track passes, eligibility requirements, and category confirmations will be published here.
                </p>
              </div>
            </div>

            {/* Host Institution */}
            <div className="channel-card reveal-card">
              <div className="channel-icon-wrap">
                <Compass size={26} color="var(--purple-light)" />
              </div>
              <div className="channel-info">
                <span className="channel-label">ORGANIZING CHAPTER</span>
                <strong className="channel-strong">IEEE Computer Society SBC</strong>
                <p className="channel-note">
                  Department of Computer Science & Engineering, Sri Sai Ram Institute of Technology.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3. Venue & Campus Architectural Showcase */}
      <section className="venue-integration-section">
        <div className="container">
          <Reveal variant="header">
            <span className="section-eyebrow">HOST CAMPUS & VENUE</span>
            <h2 className="section-title">
              VENUE: <span className="text-purple-highlight">SRI SAI RAM INSTITUTE OF TECHNOLOGY</span>
            </h2>
            <p className="section-sub-text">
              An acclaimed center for engineering education, technical research, and student innovation in Chennai.
            </p>
          </Reveal>

          {/* Approved College Campus Facade Image */}
          <Reveal variant="image" className="venue-campus-card">
            <div className="venue-image-frame">
              <img
                src={campusFacadeImg}
                alt="Sri Sai Ram Institute of Technology College Campus Architectural Facade"
                className="venue-campus-img"
              />
              <div className="venue-img-overlay" />
              <div className="venue-img-grid" />
              <div className="venue-img-badge">
                <span className="badge-inst">SRI SAI RAM INSTITUTE OF TECHNOLOGY</span>
                <span className="badge-loc">WEST TAMBARAM, CHENNAI</span>
              </div>
              <div className="venue-img-coords">
                <span>12.9606° N, 80.0532° E</span>
              </div>
            </div>
          </Reveal>

          {/* Venue Details & Interactive Map Grid */}
          <div className="venue-details-grid">
            {/* Address Card */}
            <Reveal variant="card" className="venue-address-card">
              <div className="card-top-eyebrow">OFFICIAL VENUE SPECIFICATION</div>
              <h3 className="card-inst-name">SRI SAI RAM INSTITUTE OF TECHNOLOGY</h3>

              <div className="spec-table">
                <div className="spec-row">
                  <span className="spec-label">INSTITUTION</span>
                  <strong className="spec-val">Sri Sai Ram Institute of Technology</strong>
                </div>
                <div className="spec-row">
                  <span className="spec-label">DATES</span>
                  <strong className="spec-val">14 — 15 OCTOBER 2026</strong>
                </div>
                <div className="spec-row">
                  <span className="spec-label">CITY / REGION</span>
                  <strong className="spec-val">CHENNAI, TAMIL NADU</strong>
                </div>
                <div className="spec-row spec-row-address">
                  <span className="spec-label">FULL POSTAL ADDRESS</span>
                  <div className="address-block">
                    <strong>SRI SAI RAM INSTITUTE OF TECHNOLOGY</strong>
                    <p>
                      Sairam College Rd,<br />
                      Sai Leo Nagar,<br />
                      West Tambaram,<br />
                      Chennai,<br />
                      Poonthandalam,<br />
                      Tamil Nadu 600132
                    </p>
                  </div>
                </div>
              </div>

              <div className="address-card-cta">
                <a
                  href={eventMeta.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary get-directions-btn"
                >
                  <Navigation size={16} />
                  <span>GET DIRECTIONS</span>
                  <ArrowRight size={16} />
                </a>
              </div>
            </Reveal>

            {/* Interactive Google Map */}
            <Reveal variant="card" delay={100} className="venue-map-card">
              <div className="map-header">
                <div className="map-header-text">
                  <span className="section-eyebrow" style={{ marginBottom: 0 }}>LOCATION MAP</span>
                  <h3 className="map-title">INTERACTIVE GOOGLE MAP</h3>
                </div>
                <span className="map-live-pill">LIVE LOCATION</span>
              </div>

              <div className="map-iframe-container">
                <iframe
                  title="Sri Sai Ram Institute of Technology Location Map"
                  src={`https://maps.google.com/maps?q=${eventMeta.coordinates.lat},${eventMeta.coordinates.lng}&hl=en&z=16&output=embed`}
                  className="google-map-embed"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="map-footer-bar">
                <div className="coords-readout">
                  <span className="coords-lbl">COORDINATES:</span>
                  <span className="coords-num">{eventMeta.coordinates.lat}° N, {eventMeta.coordinates.lng}° E</span>
                </div>
                <a
                  href={eventMeta.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="map-open-link"
                >
                  <span>OPEN IN GOOGLE MAPS</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 4. Inquiry Dispatch Form */}
      <section className="contact-form-section">
        <div className="container">
          <div className="form-section-container">
            <Reveal variant="card" className="inquiry-card">
              <span className="section-eyebrow">ENQUIRY DISPATCH</span>
              <h3 className="form-card-title">SEND AN INQUIRY</h3>
              <p className="form-card-sub">
                Send your questions regarding tracks, participation guidelines, or accommodations directly to the organizing committee.
              </p>

              {submitted ? (
                <div className="submission-success-view">
                  <div className="success-icon-wrap">
                    <CheckCircle2 size={42} color="var(--purple-light)" />
                  </div>
                  <h4>INQUIRY RECORDED</h4>
                  <p>
                    Thank you, <strong>{formData.name}</strong>. Your inquiry has been submitted to the organizing secretariat. A representative will respond to <strong>{formData.email}</strong>.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', institution: '', topic: 'General Event Inquiry', message: '' });
                    }}
                    className="btn btn-secondary"
                    style={{ marginTop: '1.5rem' }}
                  >
                    <span>SEND ANOTHER INQUIRY</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="dispatch-form">
                  <div className="form-grid-2">
                    <div className="form-group">
                      <label htmlFor="user-name">FULL NAME *</label>
                      <input
                        id="user-name"
                        type="text"
                        required
                        placeholder="e.g. Alex Morgan"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="tech-input"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="user-email">EMAIL ADDRESS *</label>
                      <input
                        id="user-email"
                        type="email"
                        required
                        placeholder="yourname@institution.edu"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="tech-input"
                      />
                    </div>
                  </div>

                  <div className="form-grid-2">
                    <div className="form-group">
                      <label htmlFor="user-inst">INSTITUTION / COLLEGE NAME</label>
                      <input
                        id="user-inst"
                        type="text"
                        placeholder="e.g. Sri Sai Ram Institute of Technology"
                        value={formData.institution}
                        onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                        className="tech-input"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="user-topic">TOPIC OF INQUIRY</label>
                      <select
                        id="user-topic"
                        value={formData.topic}
                        onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                        className="tech-input tech-select"
                      >
                        <option value="General Event Inquiry">General Event Inquiry</option>
                        <option value="VerdictX: Code & Conquer">VerdictX: Code & Conquer</option>
                        <option value="Sherlock & Syntax">Sherlock & Syntax</option>
                        <option value="Edge AI & TinyML">Edge AI & TinyML</option>
                        <option value="Idea Alchemy">Idea Alchemy</option>
                        <option value="CodeNomics">CodeNomics</option>
                        <option value="Nano Mentoring">Nano Mentoring</option>
                        <option value="IEEE Computer Society Membership">IEEE Computer Society Membership</option>
                        <option value="Partnership & Collaboration">Partnership & Collaboration</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="user-message">MESSAGE *</label>
                    <textarea
                      id="user-message"
                      required
                      rows={4}
                      placeholder="State your question or inquiry..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="tech-input tech-textarea"
                    />
                  </div>

                  <button type="submit" className="btn btn-primary submit-dispatch-btn">
                    <span>SEND INQUIRY</span>
                    <Send size={16} />
                  </button>
                </form>
              )}
            </Reveal>
          </div>
        </div>
      </section>

      <style>{`
        .contact-page-root {
          padding-top: var(--nav-height);
          background: #000000;
          min-height: 100vh;
        }
        .contact-hero-section {
          padding: 5rem 0 3.5rem;
          border-bottom: 1px solid var(--border-subtle);
          position: relative;
        }
        .contact-hero-title {
          font-family: var(--font-display);
          font-size: clamp(3rem, 7vw, 6rem);
          line-height: 0.95;
          letter-spacing: 0.03em;
          text-transform: uppercase;
          margin: 1rem 0 1.5rem;
        }
        .contact-hero-sub {
          font-size: 1.2rem;
          line-height: 1.5;
          color: var(--off-white);
          font-weight: 500;
          margin-bottom: 2rem;
        }
        .contact-meta-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
        }
        .contact-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(14, 9, 24, 0.6);
          border: 1px solid rgba(138, 43, 226, 0.35);
          padding: 0.55rem 1.15rem;
          border-radius: var(--radius-sm);
          font-family: var(--font-mono);
          font-size: 0.78rem;
          letter-spacing: 0.06em;
          color: var(--white);
        }

        /* Channels Section */
        .contact-channels-section {
          padding: 5rem 0;
          border-bottom: 1px solid var(--border-subtle);
        }
        .section-sub-text {
          font-size: 1.05rem;
          color: var(--muted);
          max-width: 750px;
          margin-bottom: 3rem;
        }
        .official-channel-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.75rem;
        }
        @media (max-width: 990px) {
          .official-channel-grid {
            grid-template-columns: 1fr;
          }
        }
        .channel-card {
          background: #0B0714;
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          padding: 2.25rem 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          transition: var(--transition-normal);
        }
        .channel-card:hover {
          border-color: var(--purple-light);
          transform: translateY(-4px);
          box-shadow: 0 12px 35px rgba(138, 43, 226, 0.2);
        }
        .highlight-channel {
          border-color: rgba(138, 43, 226, 0.5);
          background: #0E081A;
          box-shadow: 0 8px 30px rgba(138, 43, 226, 0.15);
        }
        .channel-icon-wrap {
          width: 52px;
          height: 52px;
          border-radius: var(--radius-sm);
          background: rgba(138, 43, 226, 0.12);
          border: 1px solid rgba(138, 43, 226, 0.35);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .channel-label {
          display: block;
          font-family: var(--font-mono);
          font-size: 0.72rem;
          letter-spacing: 0.12em;
          color: var(--purple-light);
          margin-bottom: 0.5rem;
        }
        .channel-email-link {
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--white);
          word-break: break-all;
          display: block;
          margin-bottom: 0.75rem;
          transition: color 0.2s;
        }
        .channel-email-link:hover {
          color: var(--purple-light);
          text-decoration: underline;
        }
        .channel-strong {
          display: block;
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--white);
          margin-bottom: 0.75rem;
        }
        .channel-note {
          font-size: 0.88rem;
          color: var(--muted);
          line-height: 1.5;
        }

        /* Venue Integration Section */
        .venue-integration-section {
          padding: 5.5rem 0;
          border-bottom: 1px solid var(--border-subtle);
        }
        .venue-campus-card {
          margin-bottom: 3.5rem;
          border-radius: var(--radius-md);
          overflow: hidden;
          border: 1px solid rgba(138, 43, 226, 0.4);
          background: #06040A;
          box-shadow: 0 16px 50px rgba(0, 0, 0, 0.7);
        }
        .venue-image-frame {
          position: relative;
          width: 100%;
          height: 480px;
          overflow: hidden;
        }
        @media (max-width: 768px) {
          .venue-image-frame {
            height: 280px;
          }
        }
        .venue-campus-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 38%;
          filter: grayscale(15%) contrast(108%);
        }
        .venue-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(7, 5, 10, 0.15) 0%, rgba(7, 5, 10, 0.85) 100%);
        }
        .venue-img-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(to right, rgba(255, 255, 255, 0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.04) 1px, transparent 1px);
          background-size: 40px 40px;
          pointer-events: none;
        }
        .venue-img-badge {
          position: absolute;
          bottom: 1.5rem;
          left: 1.75rem;
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          z-index: 2;
        }
        .badge-inst {
          font-family: var(--font-heading);
          font-size: 1.35rem;
          font-weight: 700;
          color: var(--white);
          letter-spacing: 0.02em;
        }
        .badge-loc {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--purple-light);
          letter-spacing: 0.1em;
        }
        .venue-img-coords {
          position: absolute;
          bottom: 1.5rem;
          right: 1.75rem;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.6);
          background: rgba(0, 0, 0, 0.65);
          padding: 0.35rem 0.75rem;
          border-radius: var(--radius-sm);
          border: 1px solid rgba(255, 255, 255, 0.1);
          z-index: 2;
        }
        @media (max-width: 600px) {
          .venue-img-coords {
            display: none;
          }
        }

        /* Venue Details & Map Grid */
        .venue-details-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2.5rem;
        }
        @media (max-width: 960px) {
          .venue-details-grid {
            grid-template-columns: 1fr;
          }
        }
        .venue-address-card {
          background: #0B0714;
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          padding: 2.5rem 2.25rem;
          display: flex;
          flex-direction: column;
        }
        .card-top-eyebrow {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          letter-spacing: 0.14em;
          color: var(--purple-light);
          margin-bottom: 0.5rem;
        }
        .card-inst-name {
          font-size: 1.6rem;
          font-weight: 800;
          color: var(--white);
          margin-bottom: 1.75rem;
        }
        .spec-table {
          display: flex;
          flex-direction: column;
          gap: 1.15rem;
          margin-bottom: 2rem;
          flex: 1;
        }
        .spec-row {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
          padding-bottom: 0.95rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }
        .spec-row-address {
          border-bottom: none;
        }
        .spec-label {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--muted);
          letter-spacing: 0.08em;
        }
        .spec-val {
          font-size: 1.05rem;
          color: var(--white);
        }
        .address-block strong {
          display: block;
          font-size: 1.05rem;
          color: var(--white);
          margin-bottom: 0.25rem;
        }
        .address-block p {
          font-size: 0.95rem;
          color: var(--off-white);
          line-height: 1.6;
        }
        .address-card-cta {
          margin-top: auto;
        }
        .get-directions-btn {
          width: 100%;
          justify-content: center;
          padding: 1rem;
        }

        /* Venue Map Card */
        .venue-map-card {
          background: #0B0714;
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }
        .map-header {
          padding: 1.75rem 2rem;
          border-bottom: 1px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .map-title {
          font-size: 1.25rem;
          color: var(--white);
          margin-top: 0.25rem;
        }
        .map-live-pill {
          font-family: var(--font-mono);
          font-size: 0.68rem;
          letter-spacing: 0.1em;
          color: #22c55e;
          background: rgba(34, 197, 94, 0.1);
          border: 1px solid rgba(34, 197, 94, 0.3);
          padding: 0.3rem 0.65rem;
          border-radius: 9999px;
        }
        .map-iframe-container {
          position: relative;
          width: 100%;
          flex: 1;
          min-height: 380px;
          background: #090510;
        }
        .google-map-embed {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          border: 0;
          filter: contrast(105%) brightness(95%);
        }
        .map-footer-bar {
          padding: 1.15rem 1.75rem;
          background: #08040F;
          border-top: 1px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1rem;
        }
        .coords-readout {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .coords-lbl {
          color: var(--muted);
        }
        .coords-num {
          color: var(--purple-light);
          font-weight: 600;
        }
        .map-open-link {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--white);
          transition: color 0.2s;
        }
        .map-open-link:hover {
          color: var(--purple-light);
        }

        /* Inquiry Form Section */
        .contact-form-section {
          padding: 5.5rem 0 6.5rem;
        }
        .form-section-container {
          max-width: 900px;
          margin: 0 auto;
        }
        .inquiry-card {
          background: #0B0714;
          border: 1px solid rgba(138, 43, 226, 0.35);
          border-radius: var(--radius-md);
          padding: 3rem;
          box-shadow: 0 16px 45px rgba(0, 0, 0, 0.6);
        }
        @media (max-width: 768px) {
          .inquiry-card {
            padding: 1.75rem 1.25rem;
          }
        }
        .form-card-title {
          font-size: clamp(1.8rem, 4vw, 2.5rem);
          text-transform: uppercase;
          margin: 0.5rem 0 0.5rem;
        }
        .form-card-sub {
          font-size: 0.98rem;
          color: var(--muted);
          margin-bottom: 2.25rem;
          line-height: 1.5;
        }
        .dispatch-form {
          display: flex;
          flex-direction: column;
          gap: 1.35rem;
        }
        .form-grid-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.35rem;
        }
        @media (max-width: 680px) {
          .form-grid-2 {
            grid-template-columns: 1fr;
          }
        }
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
        }
        .form-group label {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          letter-spacing: 0.1em;
          color: var(--purple-light);
        }
        .tech-textarea {
          resize: vertical;
          min-height: 110px;
        }
        .submit-dispatch-btn {
          width: 100%;
          padding: 1rem;
          margin-top: 0.5rem;
        }

        /* Success View */
        .submission-success-view {
          padding: 3rem 1.5rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.75rem;
        }
        .success-icon-wrap {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          background: rgba(138, 43, 226, 0.12);
          border: 1px solid var(--purple-light);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 0.5rem;
        }
        .submission-success-view h4 {
          font-size: 1.6rem;
          text-transform: uppercase;
          color: var(--white);
        }
        .submission-success-view p {
          max-width: 500px;
          font-size: 0.95rem;
          color: var(--muted);
          line-height: 1.6;
        }
      `}</style>
    </div>
  );
}
