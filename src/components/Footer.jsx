import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Mail, MapPin, Calendar, Heart, Shield } from 'lucide-react';
import logoImg from '../assets/logo/TechX White New.png';
import csSypLogoWhite from '../assets/logo/CS SYP 80yrs White.svg';
import { eventMeta } from '../data/contacts';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-root">
      {/* Decorative Grid Line */}
      <div className="footer-top-glow"></div>

      <div className="container footer-editorial-container">
        {/* Top Brand Statement */}
        {/* Top Brand Statement - Clean Single Brand Mark */}
        <div className="footer-statement-block">
          <div className="footer-brand-header">
            <img src={logoImg} alt="TechX'26 Official Logo" className="footer-logo-emblem" />
          </div>
          <p className="footer-tagline-statement">IGNITE THE CODE. OWN THE FUTURE.</p>
        </div>

        {/* Institution & Chapter Metadata */}
        <div className="footer-organizer-block">
          <div className="footer-syp-brand-row">
            <img src={csSypLogoWhite} alt="IEEE Computer Society SYP 80 Years Official Anniversary Logo" className="footer-cs-syp-logo" />
          </div>
          <span className="footer-org-society">IEEE COMPUTER SOCIETY STUDENT BRANCH CHAPTER</span>
          <span className="footer-org-sep">•</span>
          <span className="footer-org-institution">SRI SAI RAM INSTITUTE OF TECHNOLOGY</span>
        </div>

        {/* Minimal Navigation Row */}
        <nav className="footer-minimal-nav" aria-label="Footer Navigation">
          <Link to="/">HOME</Link>
          <span className="nav-dot">•</span>
          <Link to="/about">ABOUT</Link>
          <span className="nav-dot">•</span>
          <Link to="/events">EVENTS</Link>
          <span className="nav-dot">•</span>
          <Link to="/schedule">SCHEDULE</Link>
          <span className="nav-dot">•</span>
          <Link to="/speakers">SPEAKERS</Link>
          <span className="nav-dot">•</span>
          <Link to="/partners">PARTNERS</Link>
          <span className="nav-dot">•</span>
          <Link to="/contact">CONTACT</Link>
          <span className="nav-dot">•</span>
          <Link to="/register">REGISTER</Link>
        </nav>

        {/* Liaison & Copyright Strip */}
        <div className="footer-closing-strip">
          <a href={`mailto:${eventMeta.email}`} className="footer-email-link">
            {eventMeta.email}
          </a>

          <div className="footer-copyright-text">
            © 2026 TECHX MADRAS
          </div>

          <button onClick={scrollToTop} className="footer-back-top-btn" aria-label="Back to top">
            <span>TOP ↑</span>
          </button>
        </div>
      </div>

      <style>{`
        .footer-root {
          background-color: #030105;
          border-top: 1px solid var(--border-subtle);
          padding: 6rem 0 3.5rem;
          position: relative;
          overflow: hidden;
          margin-top: auto;
        }
        .footer-top-glow {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 70%;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--purple-light), transparent);
          opacity: 0.5;
        }
        .footer-editorial-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        .footer-statement-block {
          margin-bottom: 2.5rem;
        }
        .footer-brand-header {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 1.25rem;
          margin-bottom: 0.75rem;
        }
        .footer-logo-emblem {
          height: clamp(52px, 7vw, 70px);
          width: auto;
          max-width: 220px;
          object-fit: contain;
          filter: drop-shadow(0 0 16px rgba(138, 43, 226, 0.4));
        }
        .footer-monument-title {
          font-family: var(--font-display);
          font-size: clamp(3rem, 6vw, 4.5rem);
          line-height: 0.9;
          letter-spacing: 0.04em;
          color: var(--white);
          margin: 0;
        }
        .footer-tagline-statement {
          font-family: var(--font-mono);
          font-size: clamp(0.85rem, 2vw, 1.05rem);
          letter-spacing: 0.22em;
          color: var(--purple-light);
          text-transform: uppercase;
          margin: 0;
        }
                .footer-syp-brand-row {
          width: 100%;
          display: flex;
          justify-content: center;
          margin-bottom: 0.85rem;
        }
        .footer-cs-syp-logo {
          height: 26px;
          width: auto;
          max-width: 200px;
          object-fit: contain;
          opacity: 0.9;
          transition: opacity 0.2s ease;
        }
        .footer-cs-syp-logo:hover {
          opacity: 1;
        }
        .footer-organizer-block {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
          font-family: var(--font-mono);
          font-size: 0.8rem;
          letter-spacing: 0.12em;
          color: var(--muted);
          padding: 1.5rem 0;
          border-top: 1px solid var(--border-subtle);
          border-bottom: 1px solid var(--border-subtle);
          width: 100%;
          max-width: 820px;
          margin-bottom: 2.5rem;
        }
        .footer-org-sep {
          color: var(--purple-light);
        }
        .footer-minimal-nav {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.25rem;
          flex-wrap: wrap;
          margin-bottom: 3.5rem;
        }
        .footer-minimal-nav a {
          font-family: var(--font-mono);
          font-size: 0.82rem;
          letter-spacing: 0.14em;
          color: var(--muted);
          transition: var(--transition-fast);
        }
        .footer-minimal-nav a:hover {
          color: var(--white);
        }
        .nav-dot {
          color: var(--border);
          font-size: 0.75rem;
        }
        .footer-closing-strip {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          gap: 1.5rem;
          flex-wrap: wrap;
        }
        .footer-email-link {
          font-family: var(--font-mono);
          font-size: 0.85rem;
          letter-spacing: 0.08em;
          color: var(--off-white);
          transition: var(--transition-fast);
        }
        .footer-email-link:hover {
          color: var(--purple-light);
        }
        .footer-copyright-text {
          font-family: var(--font-mono);
          font-size: 0.78rem;
          letter-spacing: 0.1em;
          color: var(--muted-dark);
        }
        .footer-back-top-btn {
          font-family: var(--font-mono);
          font-size: 0.78rem;
          letter-spacing: 0.12em;
          color: var(--muted);
          background: transparent;
          border: 1px solid var(--border);
          padding: 0.45rem 0.9rem;
          border-radius: var(--radius-sm);
          transition: var(--transition-fast);
          cursor: pointer;
        }
        .footer-back-top-btn:hover {
          color: var(--white);
          border-color: var(--purple-light);
        }
        @media (max-width: 640px) {
          .footer-closing-strip {
            flex-direction: column;
            text-align: center;
            gap: 1rem;
          }
          .footer-minimal-nav {
            gap: 0.85rem;
          }
          .footer-organizer-block {
            flex-direction: column;
            gap: 0.35rem;
          }
          .footer-org-sep {
            display: none;
          }
        }
      `}</style>
    </footer>
  );
}
