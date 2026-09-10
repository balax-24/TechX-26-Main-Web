import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, AlertOctagon } from 'lucide-react';
import TechAtmosphere from '../components/TechAtmosphere';

export default function NotFound() {
  return (
    <div className="not-found-root">
      <TechAtmosphere />

      <div className="container not-found-container">
        <span className="section-eyebrow">ERROR STATUS // 404</span>
        
        <div className="error-giant-block">
          <span className="error-code">404</span>
          <div className="error-animated-line"></div>
        </div>

        <h1 className="error-heading">
          SIGNAL<br />
          <span className="text-purple-highlight">LOST.</span>
        </h1>

        <p className="error-desc">
          The requested coordinate or neural pathway does not exist within the TechX'26 domain. Return to the mainframe.
        </p>

        <div className="error-actions">
          <Link to="/" className="btn btn-primary">
            <span>BACK TO TECHX MAINFRAME</span>
            <ArrowRight size={18} />
          </Link>
          <Link to="/events" className="btn btn-secondary">
            <span>EXPLORE EVENTS</span>
          </Link>
        </div>
      </div>

      <style>{`
        .not-found-root {
          min-height: 85vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding-top: var(--nav-height);
          background: #000000;
          position: relative;
        }
        .not-found-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          position: relative;
          z-index: 1;
        }
        .error-giant-block {
          position: relative;
          margin: 1.5rem 0;
        }
        .error-code {
          font-family: var(--font-display);
          font-size: clamp(6rem, 16vw, 13rem);
          line-height: 0.8;
          color: rgba(255, 255, 255, 0.1);
          letter-spacing: 0.05em;
        }
        .error-animated-line {
          position: absolute;
          top: 50%;
          left: -20%;
          right: -20%;
          height: 2px;
          background: linear-gradient(90deg, transparent, #B86CFF, transparent);
          box-shadow: 0 0 15px #B86CFF;
          animation: pulseGlow 1.8s infinite;
        }
        .error-heading {
          font-family: var(--font-display);
          font-size: clamp(3rem, 6vw, 5rem);
          letter-spacing: 0.04em;
          text-transform: uppercase;
          line-height: 0.95;
          margin-bottom: 1.25rem;
        }
        .error-desc {
          font-size: 1.15rem;
          max-width: 520px;
          margin-bottom: 2.5rem;
        }
        .error-actions {
          display: flex;
          gap: 1.25rem;
          flex-wrap: wrap;
          justify-content: center;
        }
      `}</style>
    </div>
  );
}
