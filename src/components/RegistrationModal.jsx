import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, Mail } from 'lucide-react';
import { eventMeta, REGISTRATION_URL } from '../data/contacts';

export default function RegistrationModal({ isOpen, onClose }) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      try {
        const saved = JSON.parse(localStorage.getItem('techx_interest_subscribers') || '[]');
        saved.push({ email, timestamp: new Date().toISOString() });
        localStorage.setItem('techx_interest_subscribers', JSON.stringify(saved));
      } catch (err) {
        console.error(err);
      }
      setSubmitted(true);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button 
          className="modal-close-btn" 
          onClick={onClose}
          aria-label="Close dialog"
        >
          <X size={20} />
        </button>

        <div className="modal-header">
          <div className="badge-tech">ACCESS PASSES</div>
          <h2 id="modal-title" className="modal-heading">TECHX'26 PASSES</h2>
          <p className="modal-sub">
            14 & 15 OCTOBER 2026 • Sri Sai Ram Institute of Technology
          </p>
        </div>

        {REGISTRATION_URL && REGISTRATION_URL !== "#" ? (
          <div className="modal-body">
            <p className="modal-text">
              Official registration is currently live. Click below to access team track selection and passes.
            </p>
            <a 
              href={REGISTRATION_URL} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-purple" 
              style={{ width: '100%', marginTop: '1.5rem' }}
            >
              CONTINUE TO REGISTRATION <ArrowRight size={18} />
            </a>
          </div>
        ) : (
          <div className="modal-body">
            <div className="modal-alert-box">
              <span className="live-dot"></span>
              <div>
                <strong>REGISTRATION OPENS SOON</strong>
                <p style={{ fontSize: '0.88rem', margin: '4px 0 0 0', color: 'var(--muted)' }}>
                  The official registration portal will be announced soon. Sign up below for priority notification.
                </p>
              </div>
            </div>

            {submitted ? (
              <div className="signup-success">
                <CheckCircle2 size={32} color="var(--purple-light)" />
                <h4>You are on the priority notification list</h4>
                <p>We will alert {email} the moment team registrations open.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="notify-form">
                <div className="input-group">
                  <input 
                    type="email" 
                    required 
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="tech-input"
                    aria-label="Email for registration notification"
                  />
                  <button type="submit" className="btn btn-primary" style={{ padding: '0.8rem 1.4rem' }}>
                    NOTIFY ME
                  </button>
                </div>
              </form>
            )}

            <div className="modal-footer-contact">
              <span className="footer-contact-label">OFFICIAL TECHX CONTACT</span>
              <a href={`mailto:${eventMeta.email}`} className="footer-contact-email">
                <Mail size={15} />
                <span>{eventMeta.email}</span>
              </a>
            </div>
          </div>
        )}
      </div>

      <style>{`
        .modal-close-btn {
          position: absolute;
          top: 1.25rem;
          right: 1.25rem;
          color: var(--muted);
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-subtle);
          border-radius: 50%;
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition-fast);
        }
        .modal-close-btn:hover {
          color: var(--white);
          border-color: var(--purple-light);
          background: rgba(138, 43, 226, 0.2);
        }
        .modal-heading {
          font-size: clamp(1.6rem, 4vw, 2.1rem);
          margin: 0.75rem 0 0.25rem;
          letter-spacing: -0.02em;
          text-transform: uppercase;
        }
        .modal-sub {
          font-size: 0.88rem;
          color: var(--purple-light);
          font-family: var(--font-mono);
        }
        .modal-body {
          margin-top: 1.5rem;
        }
        .modal-alert-box {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
          padding: 1.15rem 1.25rem;
          background: rgba(138, 43, 226, 0.08);
          border: 1px solid var(--border);
          border-radius: var(--radius-sm);
          margin-bottom: 1.5rem;
        }
        .live-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: var(--purple-light);
          box-shadow: 0 0 10px var(--purple-light);
          margin-top: 5px;
          flex-shrink: 0;
          animation: pulseGlow 1.8s infinite;
        }
        .notify-form {
          margin-bottom: 1.5rem;
        }
        .input-group {
          display: flex;
          gap: 0.5rem;
        }
        @media (max-width: 500px) {
          .input-group {
            flex-direction: column;
          }
        }
        .tech-input {
          flex: 1;
          background: rgba(0, 0, 0, 0.6);
          border: 1px solid var(--border);
          border-radius: var(--radius-sm);
          padding: 0.85rem 1rem;
          color: var(--white);
          font-family: var(--font-body);
          font-size: 0.95rem;
          outline: none;
          transition: var(--transition-fast);
        }
        .tech-input:focus {
          border-color: var(--purple-light);
          box-shadow: 0 0 15px rgba(184, 108, 255, 0.25);
        }
        .signup-success {
          text-align: center;
          padding: 1.5rem;
          background: rgba(138, 43, 226, 0.1);
          border: 1px solid var(--purple-light);
          border-radius: var(--radius-sm);
          margin-bottom: 1.5rem;
        }
        .signup-success h4 {
          margin: 0.5rem 0 0.25rem;
          font-size: 1.15rem;
        }
        .signup-success p {
          font-size: 0.88rem;
          color: var(--muted);
        }
        .modal-footer-contact {
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          padding-top: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }
        .footer-contact-label {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          letter-spacing: 0.12em;
          color: var(--muted);
        }
        .footer-contact-email {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--purple-light);
          font-size: 0.92rem;
          font-weight: 600;
        }
        .footer-contact-email:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
}
