import React, { useState } from 'react';
import { Mail, MapPin, Calendar, Send, CheckCircle2, MessageSquare, Clock } from 'lucide-react';
import TechAtmosphere from '../components/TechAtmosphere';
import { eventMeta } from '../data/contacts';

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

      {/* Hero */}
      <section className="contact-hero-section">
        <div className="container">
          <span className="section-eyebrow">COMMUNICATIONS</span>
          <h1 className="contact-hero-title">
            CONTACT TECHX'26
          </h1>
          <p className="contact-hero-sub">
            IEEE Computer Society Student Branch Chapter<br />
            Sri Sai Ram Institute of Technology
          </p>
        </div>
      </section>

      {/* Primary Contact & Dispatch Form Section */}
      <section className="contact-content-section">
        <div className="container">
          <div className="contact-main-grid">
            {/* Left Column: Official Event Contact Details */}
            <div className="contact-details-col">
              <span className="section-eyebrow">DIRECT COMMUNICATIONS</span>
              <h2 className="details-heading">OFFICIAL EVENT CHANNELS</h2>
              <p className="details-lead">
                The organizing secretariat is available to assist participants, faculty advisors, industry partners, and student teams.
              </p>

              <div className="official-channel-cards">
                {/* Official Email */}
                <div className="channel-card highlight-channel">
                  <div className="channel-icon-wrap">
                    <Mail size={24} color="var(--purple-light)" />
                  </div>
                  <div className="channel-info">
                    <span className="channel-label">OFFICIAL EVENT EMAIL</span>
                    <a href={`mailto:${eventMeta.email}`} className="channel-link">
                      {eventMeta.email}
                    </a>
                    <p className="channel-note">
                      Primary channel for general inquiries, team verification, speaker liaison, and partnerships.
                    </p>
                  </div>
                </div>

                {/* Registration Status */}
                <div className="channel-card">
                  <div className="channel-icon-wrap">
                    <Clock size={24} color="var(--purple-light)" />
                  </div>
                  <div className="channel-info">
                    <span className="channel-label">REGISTRATION DESK</span>
                    <strong className="channel-value">Registration details coming soon</strong>
                    <p className="channel-note">
                      The official registration portal and track participation guidelines will be announced soon.
                    </p>
                  </div>
                </div>

                {/* Venue Location */}
                <div className="channel-card">
                  <div className="channel-icon-wrap">
                    <MapPin size={24} color="var(--purple-light)" />
                  </div>
                  <div className="channel-info">
                    <span className="channel-label">HOST VENUE</span>
                    <strong className="channel-value">Sri Sai Ram Institute of Technology</strong>
                    <p className="channel-note">
                      Chennai, Tamil Nadu • 14th & 15th October 2026
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Inquiry Form */}
            <div className="contact-form-col">
              <div className="inquiry-dispatch-card">
                <span className="section-eyebrow">CONTACT TECHX'26</span>
                <h3 className="dispatch-title">SEND AN INQUIRY</h3>
                <p className="dispatch-sub">
                  Send your question directly to the TechX'26 organizing desk.
                </p>

                {submitted ? (
                  <div className="submission-success-view">
                    <div className="success-icon-wrap">
                      <CheckCircle2 size={40} color="var(--purple-light)" />
                    </div>
                    <h4>INQUIRY RECEIVED</h4>
                    <p>
                      Thank you, {formData.name}. Your inquiry has been logged with the organizing secretariat. A representative will get back to {formData.email}.
                    </p>
                    <button 
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', email: '', institution: '', topic: 'General Event Inquiry', message: '' });
                      }}
                      className="btn btn-secondary"
                      style={{ marginTop: '1.25rem' }}
                    >
                      SEND ANOTHER INQUIRY
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="dispatch-form">
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
              </div>
            </div>
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
        }

        /* Main Section */
        .contact-content-section {
          padding: 5.5rem 0 7rem;
        }
        .contact-main-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 4.5rem;
          align-items: start;
        }
        @media (max-width: 1024px) {
          .contact-main-grid {
            grid-template-columns: 1fr;
            gap: 3.5rem;
          }
        }
        .details-heading {
          font-size: clamp(2rem, 3.5vw, 2.8rem);
          text-transform: uppercase;
          margin-bottom: 0.75rem;
        }
        .details-lead {
          font-size: 1rem;
          color: var(--muted);
          line-height: 1.6;
          margin-bottom: 2.5rem;
        }

        /* Channel Cards */
        .official-channel-cards {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .channel-card {
          background: #0B0714;
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          padding: 2rem;
          display: flex;
          gap: 1.5rem;
          align-items: flex-start;
          transition: var(--transition-fast);
        }
        @media (max-width: 600px) {
          .channel-card {
            padding: 1.5rem 1.15rem;
            gap: 1rem;
          }
          .channel-link {
            font-size: 1.05rem !important;
          }
        }
        .highlight-channel {
          border-color: var(--purple-light);
          background: #0E081A;
          box-shadow: 0 0 25px rgba(138, 43, 226, 0.15);
        }
        .channel-icon-wrap {
          width: 50px;
          height: 50px;
          border-radius: var(--radius-sm);
          background: rgba(138, 43, 226, 0.15);
          border: 1px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .channel-info {
          display: flex;
          flex-direction: column;
        }
        .channel-label {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          letter-spacing: 0.12em;
          color: var(--purple-light);
          margin-bottom: 0.35rem;
        }
        .channel-link {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--white);
          word-break: break-all;
          margin-bottom: 0.35rem;
        }
        .channel-link:hover {
          text-decoration: underline;
        }
        .channel-value {
          font-size: 1.15rem;
          color: var(--white);
          margin-bottom: 0.35rem;
        }
        .channel-note {
          font-size: 0.88rem;
          color: var(--muted);
          line-height: 1.5;
        }

        /* Dispatch Card */
        .inquiry-dispatch-card {
          background: #090510;
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          padding: 3rem 2.5rem;
        }
        @media (max-width: 600px) {
          .inquiry-dispatch-card {
            padding: 2rem 1.5rem;
          }
        }
        .dispatch-title {
          font-size: 1.8rem;
          text-transform: uppercase;
          margin-bottom: 0.35rem;
        }
        .dispatch-sub {
          font-size: 0.92rem;
          color: var(--muted);
          margin-bottom: 2rem;
        }
        .dispatch-form {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }
        .form-group label {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          letter-spacing: 0.1em;
          color: var(--muted);
        }
        .tech-select {
          cursor: pointer;
          background-color: #0E0918;
          color: #FFFFFF;
          border: 1px solid var(--border);
          appearance: none;
          -webkit-appearance: none;
          -moz-appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23C084FC' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 1.25rem center;
          background-size: 16px;
          padding-right: 3rem;
        }
        .tech-select:focus {
          outline: none;
          border-color: var(--purple-light);
          background-color: #130B22;
          box-shadow: 0 0 0 2px rgba(138, 43, 226, 0.25);
        }
        .tech-select option {
          background-color: #0E0918 !important;
          color: #FFFFFF !important;
          padding: 0.85rem 1rem;
        }
        .tech-select option:checked {
          background-color: #241442 !important;
          color: #C084FC !important;
          font-weight: 600;
        }
        .tech-textarea {
          resize: vertical;
        }
        .submit-dispatch-btn {
          width: 100%;
          padding: 1.1rem;
          margin-top: 0.5rem;
        }

        /* Success View */
        .submission-success-view {
          text-align: center;
          padding: 3rem 1.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }
        .success-icon-wrap {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: rgba(138, 43, 226, 0.15);
          border: 1px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 0.5rem;
        }
        .submission-success-view h4 {
          font-size: 1.5rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .submission-success-view p {
          font-size: 0.95rem;
          color: var(--muted);
          max-width: 420px;
          line-height: 1.6;
        }
      `}</style>
    </div>
  );
}
