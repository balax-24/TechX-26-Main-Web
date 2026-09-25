import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import logoImg from '../assets/logo/TechX White New.png';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  const desktopNavLinks = [
    { to: '/', label: 'HOME' },
    { to: '/about', label: 'ABOUT' },
    { to: '/events', label: 'EVENTS' },
    { to: '/schedule', label: 'SCHEDULE' },
    { to: '/speakers', label: 'SPEAKERS' },
    { to: '/partners', label: 'PARTNERS' },
    { to: '/contact', label: 'CONTACT' },
  ];

  const mobileNavLinks = [
    { to: '/', label: 'HOME' },
    { to: '/events', label: 'EVENTS' },
    { to: '/schedule', label: 'SCHEDULE' },
    { to: '/speakers', label: 'SPEAKERS' },
    { to: '/partners', label: 'PARTNERS' },
    { to: '/about', label: 'ABOUT' },
    { to: '/contact', label: 'CONTACT' },
    { to: '/register', label: 'REGISTER' },
  ];

  return (
    <>
      <header className={`navbar-root ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="navbar-container">
          {/* Official TechX Logo - Clean, Single Brand Lockup (No duplicate text) */}
          <Link to="/" className="navbar-logo-link" aria-label="TechX'26 Home">
            <img 
              src={logoImg} 
              alt="TechX'26" 
              className="navbar-brand-logo" 
            />
          </Link>

          {/* Desktop Center Navigation */}
          <nav className="navbar-desktop-nav" aria-label="Main Navigation">
            {desktopNavLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) => 
                  `nav-item ${isActive ? 'nav-item-active' : ''}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Right Action */}
          <div className="navbar-actions">
            <Link 
              to="/register" 
              className="btn btn-primary nav-register-btn"
              aria-label="Register for TechX'26"
            >
              <span>REGISTER</span>
              <ArrowRight size={14} />
            </Link>

            {/* Mobile Hamburger Toggle */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              className="mobile-toggle-btn"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Fullscreen Navigation Panel */}
      {mobileMenuOpen && (
        <div className="mobile-nav-overlay" role="dialog" aria-modal="true">
          <div className="mobile-nav-header">
            <Link to="/" className="navbar-logo-link" onClick={() => setMobileMenuOpen(false)}>
              <img src={logoImg} alt="TechX'26" className="navbar-brand-logo-mobile" />
            </Link>
            <button 
              onClick={() => setMobileMenuOpen(false)} 
              className="mobile-toggle-btn"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          <div className="mobile-nav-content">
            <span className="mobile-eyebrow">NAVIGATION</span>
            <div className="mobile-nav-list">
              {mobileNavLinks.map((link, idx) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) => 
                    `mobile-nav-item ${isActive ? 'mobile-nav-item-active' : ''}`
                  }
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="mobile-nav-num">0{idx + 1}</span>
                  <span className="mobile-nav-label">{link.label}</span>
                  <ArrowRight size={16} className="mobile-nav-arrow" />
                </NavLink>
              ))}
            </div>

            <div className="mobile-nav-footer">
              <Link 
                to="/register"
                onClick={() => setMobileMenuOpen(false)} 
                className="btn btn-purple mobile-register-btn"
              >
                <span>REGISTER NOW</span>
                <ArrowRight size={16} />
              </Link>

              <div className="mobile-organizer-info">
                <span>IEEE COMPUTER SOCIETY STUDENT BRANCH CHAPTER</span>
                <p>Sri Sai Ram Institute of Technology • 13 & 14 Oct 2026</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .navbar-root {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: var(--nav-height);
          z-index: 1000;
          transition: background-color 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease;
          background: transparent;
          border-bottom: 1px solid transparent;
        }
        .navbar-scrolled {
          background: rgba(7, 5, 10, 0.88);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          border-bottom: 1px solid rgba(138, 43, 226, 0.25);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.6);
        }
        .navbar-container {
          max-width: 1400px;
          height: 100%;
          margin: 0 auto;
          padding: 0 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        @media (max-width: 768px) {
          .navbar-container {
            padding: 0 1.25rem;
          }
        }
        .navbar-logo-link {
          display: flex;
          align-items: center;
          text-decoration: none;
        }
        .navbar-brand-logo {
          height: 52px;
          width: auto;
          max-width: 140px;
          object-fit: contain;
          filter: drop-shadow(0 0 15px rgba(138, 43, 226, 0.5));
          transition: transform 0.25s ease;
        }
        @media (max-width: 768px) {
          .navbar-brand-logo {
            height: 44px;
            max-width: 110px;
          }
        }
        .navbar-logo-link:hover .navbar-brand-logo {
          transform: scale(1.04);
        }
        .navbar-brand-logo-mobile {
          height: 44px;
          width: auto;
          max-width: 130px;
          object-fit: contain;
        }
        .navbar-desktop-nav {
          display: flex;
          align-items: center;
          gap: clamp(0.9rem, 1.6vw, 1.75rem);
        }
        @media (max-width: 1024px) {
          .navbar-desktop-nav {
            display: none;
          }
        }
        .nav-item {
          font-family: var(--font-heading);
          font-size: 0.85rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          color: var(--muted);
          position: relative;
          padding: 0.5rem 0;
          transition: color 0.2s ease;
        }
        .nav-item:hover {
          color: var(--white);
        }
        .nav-item::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--purple-light);
          box-shadow: 0 0 10px var(--purple-light);
          transition: width 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .nav-item:hover::after,
        .nav-item-active::after {
          width: 100%;
        }
        .nav-item-active {
          color: var(--white);
        }
        .navbar-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .nav-register-btn {
          padding: 0.6rem 1.35rem;
          font-size: 0.82rem;
        }
        @media (max-width: 600px) {
          .nav-register-btn {
            display: none;
          }
        }
        .mobile-toggle-btn {
          display: none;
          color: var(--white);
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
          padding: 0.5rem;
          cursor: pointer;
        }
        @media (max-width: 1024px) {
          .mobile-toggle-btn {
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }

        /* Fullscreen Mobile Navigation */
        .mobile-nav-overlay {
          position: fixed;
          inset: 0;
          background: #07050A;
          z-index: 2000;
          display: flex;
          flex-direction: column;
          overflow-y: auto;
          padding: 1.25rem 1.5rem 2.5rem;
          animation: fadeIn 0.2s ease;
        }
        .mobile-nav-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: var(--nav-height);
          border-bottom: 1px solid var(--border-subtle);
          margin-bottom: 1.5rem;
        }
        .mobile-nav-content {
          display: flex;
          flex-direction: column;
          flex: 1;
        }
        .mobile-eyebrow {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          letter-spacing: 0.15em;
          color: var(--purple-light);
          margin-bottom: 0.75rem;
        }
        .mobile-nav-list {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }
        .mobile-nav-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.9rem 0.75rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.04);
          color: var(--muted);
          transition: all 0.2s ease;
        }
        .mobile-nav-item:hover,
        .mobile-nav-item-active {
          color: var(--white);
          background: rgba(138, 43, 226, 0.08);
          border-radius: var(--radius-sm);
        }
        .mobile-nav-num {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--purple-light);
          width: 28px;
        }
        .mobile-nav-label {
          font-family: var(--font-display);
          font-size: 1.5rem;
          letter-spacing: 0.05em;
          flex: 1;
        }
        .mobile-nav-arrow {
          opacity: 0.4;
        }
        .mobile-nav-footer {
          margin-top: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .mobile-register-btn {
          width: 100%;
          padding: 1rem;
        }
        .mobile-organizer-info {
          text-align: center;
          font-family: var(--font-mono);
          font-size: 0.7rem;
          color: var(--muted-dark);
          line-height: 1.6;
        }
      `}</style>
    </>
  );
}
