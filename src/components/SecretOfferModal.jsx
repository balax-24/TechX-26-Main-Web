import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { X, Copy, Check, Sparkles, ArrowRight } from 'lucide-react';

const STORAGE_KEY = 'techx_secret_offer_dismissed';
const DISCOUNT_CODE = 'SECRETCODE26';

export default function SecretOfferModal({ isLoading = false }) {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // If site is still on the initial loading screen, wait until complete
    if (isLoading) return;

    // Show once per browsing session
    const isDismissed = sessionStorage.getItem(STORAGE_KEY);
    if (isDismissed) return;

    // Small delay for smooth, polished entry after page settles
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 850);

    return () => clearTimeout(timer);
  }, [isLoading]);

  const handleClose = useCallback(() => {
    setIsOpen(false);
    sessionStorage.setItem(STORAGE_KEY, 'true');
  }, []);

  // Dismiss on Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, handleClose]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const handleCopyCode = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(DISCOUNT_CODE);
      } else {
        // Fallback for environments where clipboard API is restricted
        const textArea = document.createElement('textarea');
        textArea.value = DISCOUNT_CODE;
        textArea.style.position = 'fixed';
        textArea.style.opacity = '0';
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.warn('Failed to copy code to clipboard:', err);
    }
  };

  const handleRegisterClick = () => {
    handleClose();
    if (location.pathname === '/register') {
      const passesSection = document.querySelector('.passes-view-wrapper') || document.querySelector('.passes-grid');
      if (passesSection) {
        passesSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/register');
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="secret-modal-backdrop"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="secret-modal-heading"
    >
      <div className="secret-modal-card" onClick={(e) => e.stopPropagation()}>
        {/* Dismiss Button "?" */}
        <button 
          type="button" 
          className="secret-modal-close-btn"
          onClick={handleClose}
          aria-label="Close secret offer popup"
        >
          <X size={18} />
        </button>

        {/* 1. Header & Badge */}
        <div className="secret-badge-row">
          <span className="secret-pill-tag">
            <Sparkles size={12} className="secret-sparkle-icon" />
            <span>LIMITED-TIME PROMOTION</span>
          </span>
        </div>

        {/* 2. Hierarchy 1: SECRET OFFER */}
        <h2 id="secret-modal-heading" className="secret-modal-title">
          SECRET OFFER
        </h2>

        {/* 3. Hierarchy 2: ?200 OFF */}
        <div className="secret-discount-row">
          <span className="secret-discount-badge">?200 OFF</span>
          <span className="secret-discount-caption">YOUR TECHX'26 REGISTRATION</span>
        </div>

        {/* 4. Hierarchy 3: Code: SECRETCODE26 + Copy Button */}
        <div className="secret-code-container">
          <div className="secret-code-info">
            <span className="secret-code-sublabel">USE CODE</span>
            <code className="secret-code-display">{DISCOUNT_CODE}</code>
          </div>
          <button 
            type="button"
            className={`secret-copy-action-btn ${copied ? 'is-copied' : ''}`}
            onClick={handleCopyCode}
            aria-label="Copy coupon code SECRETCODE26"
          >
            {copied ? <Check size={14} /> : <Copy size={14} />}
            <span>{copied ? 'Copied!' : 'COPY'}</span>
          </button>
        </div>

        {/* 5. Hierarchy 4: Limited time & KonfHub Instructions */}
        <div className="secret-meta-box">
          <p className="secret-urgency-line">
            Limited time only. Register soon before the offer expires.
          </p>
          <p className="secret-instruction-line">
            Apply the code at checkout on KonfHub.
          </p>
        </div>

        {/* 6. Hierarchy 5: REGISTER NOW CTA */}
        <div className="secret-cta-wrapper">
          <button 
            type="button"
            className="btn btn-primary secret-action-btn"
            onClick={handleRegisterClick}
          >
            <span>REGISTER NOW</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>

      <style>{`
        /* ============================================================
           TECHX'26 SECRET OFFER POPUP / MODAL
           Theme: Deep Obsidian Black + Electric Purple Glow
           ============================================================ */
        .secret-modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.85);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 99998;
          padding: 1.25rem;
          animation: secretFadeIn 0.22s ease-out;
        }

        .secret-modal-card {
          background: #090514;
          background-image: 
            radial-gradient(circle at 50% 0%, rgba(138, 43, 226, 0.18) 0%, transparent 65%),
            linear-gradient(to right, rgba(255, 255, 255, 0.02) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
          background-size: 100% 100%, 36px 36px, 36px 36px;
          border: 1px solid rgba(138, 43, 226, 0.45);
          border-radius: var(--radius-md, 8px);
          max-width: 440px;
          width: 100%;
          padding: 2.25rem 2rem 2rem;
          position: relative;
          box-shadow: 0 24px 60px rgba(0, 0, 0, 0.9), 0 0 45px rgba(138, 43, 226, 0.22);
          animation: secretScaleUp 0.24s cubic-bezier(0.16, 1, 0.3, 1);
          overflow: hidden;
        }

        .secret-modal-close-btn {
          position: absolute;
          top: 1rem;
          right: 1rem;
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 6px;
          color: var(--muted, #9CA3AF);
          cursor: pointer;
          transition: all 0.2s ease;
          z-index: 2;
        }
        .secret-modal-close-btn:hover {
          color: #FFFFFF;
          background: rgba(138, 43, 226, 0.25);
          border-color: var(--purple-light, #B86CFF);
          transform: scale(1.05);
        }

        .secret-badge-row {
          margin-bottom: 0.75rem;
        }
        .secret-pill-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          font-family: var(--font-mono);
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          color: var(--purple-light, #B86CFF);
          background: rgba(138, 43, 226, 0.14);
          border: 1px solid rgba(138, 43, 226, 0.38);
          padding: 0.3rem 0.75rem;
          border-radius: 999px;
        }
        .secret-sparkle-icon {
          color: var(--purple-light, #B86CFF);
        }

        .secret-modal-title {
          font-family: var(--font-display);
          font-size: clamp(1.85rem, 5vw, 2.35rem);
          line-height: 1.05;
          letter-spacing: 0.04em;
          color: #FFFFFF;
          margin: 0 0 0.65rem 0;
          text-transform: uppercase;
        }

        .secret-discount-row {
          display: flex;
          flex-direction: column;
          margin-bottom: 1.25rem;
          gap: 0.2rem;
        }
        .secret-discount-badge {
          font-family: var(--font-heading);
          font-size: clamp(1.75rem, 4.5vw, 2.2rem);
          font-weight: 800;
          letter-spacing: 0.04em;
          line-height: 1.05;
          color: #22C55E;
          text-shadow: 0 0 25px rgba(34, 197, 94, 0.35);
        }
        .secret-discount-caption {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          letter-spacing: 0.14em;
          color: #D1C7E0;
          text-transform: uppercase;
        }

        .secret-code-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: #040208;
          border: 1px dashed rgba(138, 43, 226, 0.55);
          border-radius: 6px;
          padding: 0.65rem 0.95rem;
          margin-bottom: 1.25rem;
          gap: 0.75rem;
        }
        .secret-code-info {
          display: flex;
          flex-direction: column;
          gap: 0.15rem;
        }
        .secret-code-sublabel {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          letter-spacing: 0.15em;
          color: var(--muted, #9CA3AF);
          text-transform: uppercase;
        }
        .secret-code-display {
          font-family: var(--font-mono);
          font-size: 1.18rem;
          font-weight: 800;
          letter-spacing: 0.12em;
          color: #FFFFFF;
          line-height: 1;
        }
        .secret-copy-action-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          padding: 0.5rem 0.85rem;
          border-radius: 4px;
          border: 1px solid rgba(138, 43, 226, 0.5);
          background: rgba(138, 43, 226, 0.18);
          color: var(--purple-light, #B86CFF);
          cursor: pointer;
          transition: all 0.2s ease;
          white-space: nowrap;
          flex-shrink: 0;
        }
        .secret-copy-action-btn:hover {
          background: rgba(138, 43, 226, 0.35);
          border-color: var(--purple-light, #B86CFF);
          color: #FFFFFF;
          transform: translateY(-1px);
        }
        .secret-copy-action-btn.is-copied {
          background: rgba(34, 197, 94, 0.2);
          border-color: #22C55E;
          color: #22C55E;
        }

        .secret-meta-box {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
          margin-bottom: 1.5rem;
        }
        .secret-urgency-line {
          font-size: 0.9rem;
          line-height: 1.45;
          color: #E2D9F3;
          margin: 0;
        }
        .secret-instruction-line {
          font-family: var(--font-mono);
          font-size: 0.78rem;
          line-height: 1.4;
          color: var(--muted, #9CA3AF);
          margin: 0;
        }

        .secret-cta-wrapper {
          display: flex;
          width: 100%;
        }
        .secret-action-btn {
          width: 100%;
          justify-content: center;
          font-size: 0.95rem;
          padding: 0.85rem 1.5rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          box-shadow: 0 4px 20px rgba(138, 43, 226, 0.35);
        }
        .secret-action-btn:hover {
          box-shadow: 0 6px 25px rgba(138, 43, 226, 0.55);
        }

        @keyframes secretFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes secretScaleUp {
          from { 
            opacity: 0; 
            transform: scale(0.94) translateY(8px); 
          }
          to { 
            opacity: 1; 
            transform: scale(1) translateY(0); 
          }
        }

        @media (max-width: 480px) {
          .secret-modal-card {
            padding: 1.85rem 1.25rem 1.5rem;
          }
          .secret-modal-title {
            font-size: 1.75rem;
          }
          .secret-discount-badge {
            font-size: 1.65rem;
          }
          .secret-code-display {
            font-size: 1rem;
          }
          .secret-copy-action-btn {
            padding: 0.45rem 0.65rem;
            font-size: 0.7rem;
          }
        }
      `}</style>
    </div>
  );
}
