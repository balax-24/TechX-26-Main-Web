import React from 'react';
import { MapPin, Calendar, ArrowRight, Compass } from 'lucide-react';
import TechAtmosphere from '../components/TechAtmosphere';
import sairamHeritageBuildingImg from '../assets/architecture/sairam-heritage-building.png';
import sairamFountainImg from '../assets/architecture/sairam-fountain.png';
import { eventMeta } from '../data/contacts';

export default function Venue({ onOpenRegister }) {
  return (
    <div className="venue-page-root">
      <TechAtmosphere showArch={false} />

      {/* Hero */}
      <section className="venue-hero-section">
        <div className="container">
          <span className="section-eyebrow">HOST CAMPUS & ARENA</span>
          <h1 className="venue-hero-title">
            THE VENUE<br />
            <span className="text-purple-highlight">SRI SAI RAM INSTITUTE OF TECHNOLOGY</span>
          </h1>
          <div className="venue-hero-meta-bar">
            <div className="meta-pill">
              <Calendar size={15} color="var(--purple-light)" />
              <span>14 — 15 OCTOBER 2026</span>
            </div>
            <div className="meta-pill">
              <MapPin size={15} color="var(--purple-light)" />
              <span>CHENNAI, TAMIL NADU</span>
            </div>
            <div className="meta-pill">
              <Compass size={15} color="var(--purple-light)" />
              <span>IEEE COMPUTER SOCIETY SBC</span>
            </div>
          </div>
        </div>
      </section>

      {/* Primary Architectural Showcase: Heritage Building & Fountain */}
      <section className="venue-architectural-section">
        <div className="container">
          <div className="venue-monument-grid">
            {/* Main Heritage Building Artwork */}
            <div className="monument-main-frame">
              <div className="monument-image-wrapper">
                <img 
                  src={sairamHeritageBuildingImg} 
                  alt="Sri Sai Ram Institute of Technology Heritage Architecture" 
                  className="monument-image"
                />
                <div className="monument-gradient-overlay"></div>
                <div className="monument-spec-label">
                  <span className="spec-mono">ARCHITECTURAL IDENTITY // SEAT OF INNOVATION</span>
                  <strong>SRI SAI RAM INSTITUTE OF TECHNOLOGY</strong>
                </div>
              </div>
            </div>

            {/* Fountain Motif & Campus Identity */}
            <div className="monument-motif-frame">
              <div className="fountain-wrapper">
                <img 
                  src={sairamFountainImg} 
                  alt="Sri Sai Ram Institute of Technology Campus Fountain" 
                  className="fountain-image"
                />
                <div className="fountain-glow-radial"></div>
              </div>
              <div className="fountain-caption">
                <span className="fountain-tag">CAMPUS MOTIF</span>
                <h4>THE PLACE WHERE TECHX'26 TAKES SHAPE</h4>
                <p>
                  A timeless center point connecting innovation labs, auditoriums, and open collaborative squares across the campus grounds.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Details Card */}
      <section className="venue-details-section">
        <div className="container">
          <div className="venue-info-grid">
            {/* Address Specification */}
            <div className="venue-card-primary">
              <div className="venue-badge">EVENT DESTINATION</div>
              <h2 className="venue-h2">LOCATION</h2>

              <div className="venue-spec-list">
                <div className="spec-row">
                  <span className="spec-title">INSTITUTION</span>
                  <strong className="spec-val">Sri Sai Ram Institute of Technology</strong>
                </div>

                <div className="spec-row">
                  <span className="spec-title">DATES</span>
                  <strong className="spec-val">14 — 15 OCTOBER 2026</strong>
                </div>

                <div className="spec-row">
                  <span className="spec-title">LOCATION</span>
                  <strong className="spec-val">CHENNAI, TAMIL NADU</strong>
                </div>

                <div className="spec-row highlight-row">
                  <span className="spec-title">FULL ADDRESS</span>
                  <div className="venue-full-address">
                    <strong className="addr-inst">SRI SAI RAM INSTITUTE OF TECHNOLOGY</strong>
                    <p className="addr-lines">
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

              <div className="venue-directions-cta">
                <a 
                  href={eventMeta.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  <span>GET DIRECTIONS</span>
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>

            {/* Interactive Google Map */}
            <div className="map-standin-card">
              <div className="map-standin-head">
                <span className="section-eyebrow">GEOGRAPHIC ANCHOR</span>
                <h3 className="map-standin-title">LOCATION MAP</h3>
              </div>

              <div className="map-embed-wrapper">
                <iframe
                  title="Sri Sai Ram Institute of Technology Location Map"
                  src={`https://maps.google.com/maps?q=${eventMeta.coordinates.lat},${eventMeta.coordinates.lng}&hl=en&z=16&output=embed`}
                  className="google-map-iframe"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="map-standin-footer">
                <div className="map-footer-coords">
                  <span className="coords-label">COORDINATES</span>
                  <span className="coords-val">{eventMeta.coordinates.lat}° N, {eventMeta.coordinates.lng}° E</span>
                </div>
                <a 
                  href={eventMeta.mapsUrl}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-directions-link"
                >
                  <span>GET DIRECTIONS</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Details Grid: Location & Map */}

      <style>{`
        .venue-page-root {
          padding-top: var(--nav-height);
          background: #000000;
          min-height: 100vh;
        }
        .venue-hero-section {
          padding: 5rem 0 3.5rem;
          border-bottom: 1px solid var(--border-subtle);
          position: relative;
        }
        .venue-hero-title {
          font-family: var(--font-display);
          font-size: clamp(2.8rem, 6.5vw, 5.5rem);
          line-height: 0.95;
          letter-spacing: 0.03em;
          text-transform: uppercase;
          margin: 1rem 0 1.5rem;
        }
        .venue-hero-meta-bar {
          display: flex;
          gap: 1.5rem;
          flex-wrap: wrap;
          margin-top: 2rem;
        }
        .meta-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-mono);
          font-size: 0.78rem;
          color: var(--white);
          background: rgba(138, 43, 226, 0.1);
          border: 1px solid var(--border);
          padding: 0.45rem 1rem;
          border-radius: var(--radius-sm);
        }

        /* Monument Architectural Section */
        .venue-architectural-section {
          padding: 4.5rem 0 3rem;
        }
        .venue-monument-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.5fr) minmax(0, 1fr);
          gap: 2.5rem;
          align-items: stretch;
        }
        @media (max-width: 1024px) {
          .venue-monument-grid {
            grid-template-columns: minmax(0, 1fr);
          }
        }
        .monument-main-frame {
          background: #0B0714;
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          overflow: hidden;
          position: relative;
          display: flex;
        }
        .monument-image-wrapper {
          position: relative;
          width: 100%;
          min-height: 480px;
          background: #060408;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .monument-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(100%) contrast(115%) brightness(85%);
          opacity: 0.85;
          transition: var(--transition-normal);
        }
        .monument-main-frame:hover .monument-image {
          opacity: 0.95;
          transform: scale(1.02);
        }
        .monument-gradient-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(11, 7, 20, 0.95) 0%, transparent 60%);
        }
        .monument-spec-label {
          position: absolute;
          bottom: 1.5rem;
          left: 1.5rem;
          right: 1.5rem;
          background: rgba(7, 5, 10, 0.85);
          border: 1px solid var(--border);
          padding: 1rem 1.25rem;
          border-radius: var(--radius-sm);
          backdrop-filter: blur(8px);
          display: flex;
          flex-direction: column;
        }
        .spec-mono {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          color: var(--purple-light);
          letter-spacing: 0.1em;
        }
        .monument-spec-label strong {
          font-size: 0.95rem;
          color: var(--white);
          margin-top: 0.2rem;
        }

        /* Fountain Motif Frame */
        .monument-motif-frame {
          background: #090510;
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        @media (max-width: 600px) {
          .monument-motif-frame {
            padding: 1.75rem 1rem;
          }
          .monument-image-wrapper {
            min-height: 260px !important;
          }
          .monument-spec-label {
            left: 0.75rem !important;
            right: 0.75rem !important;
            bottom: 0.75rem !important;
            padding: 0.75rem !important;
          }
        }
        .fountain-wrapper {
          position: relative;
          width: 220px;
          height: 260px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
        }
        .fountain-image {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
          filter: grayscale(100%) contrast(120%) brightness(85%);
          opacity: 0.8;
          transition: var(--transition-normal);
        }
        .monument-motif-frame:hover .fountain-image {
          opacity: 0.95;
          transform: translateY(-4px);
        }
        .fountain-glow-radial {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle, rgba(138, 43, 226, 0.2) 0%, transparent 70%);
          pointer-events: none;
        }
        .fountain-tag {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          letter-spacing: 0.15em;
          color: var(--purple-light);
          display: block;
          margin-bottom: 0.35rem;
        }
        .fountain-caption h4 {
          font-size: 1.3rem;
          text-transform: uppercase;
          margin-bottom: 0.5rem;
          color: var(--white);
        }
        .fountain-caption p {
          font-size: 0.88rem;
          color: var(--muted);
          line-height: 1.6;
        }

        /* Details Grid */
        .venue-details-section {
          padding: 3rem 0 6rem;
        }
        .venue-info-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr);
          gap: 2.5rem;
        }
        @media (max-width: 1024px) {
          .venue-info-grid {
            grid-template-columns: minmax(0, 1fr);
          }
        }
        .venue-card-primary {
          background: #0B0714;
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          padding: 3rem;
          max-width: 100%;
          min-width: 0;
          box-sizing: border-box;
        }
        @media (max-width: 600px) {
          .venue-card-primary {
            padding: 1.5rem 1rem;
          }
          .venue-card-primary .btn {
            white-space: normal;
            width: 100%;
            text-align: center;
            justify-content: center;
            font-size: 0.8rem;
            padding: 0.85rem 1rem;
          }
          .map-standin-head {
            padding: 1.25rem !important;
          }
          .map-standin-footer {
            padding: 1.25rem !important;
          }
        }
        .venue-badge {
          display: inline-block;
          font-family: var(--font-mono);
          font-size: 0.72rem;
          letter-spacing: 0.12em;
          color: var(--purple-light);
          margin-bottom: 0.5rem;
        }
        .venue-h2 {
          font-size: clamp(1.8rem, 3vw, 2.4rem);
          text-transform: uppercase;
          margin-bottom: 2rem;
          color: var(--white);
        }
        .venue-spec-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          margin-bottom: 2.5rem;
        }
        .spec-row {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          padding-bottom: 1rem;
          word-break: break-word;
        }
        .spec-title {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--muted);
          letter-spacing: 0.1em;
        }
        .spec-val {
          font-size: 1.15rem;
          color: var(--white);
        }
        .venue-full-address {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
          margin-top: 0.35rem;
        }
        .addr-inst {
          font-family: var(--font-heading);
          font-size: 1.05rem;
          color: var(--white);
          letter-spacing: 0.02em;
          line-height: 1.35;
        }
        .addr-lines {
          font-size: 0.95rem;
          color: #DDD6E5;
          line-height: 1.65;
          margin: 0;
        }
        .venue-directions-cta {
          margin-top: 1rem;
        }

        /* Map Embed Frame */
        .map-standin-card {
          background: #090510;
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }
        .map-standin-head {
          padding: 2rem;
          border-bottom: 1px solid var(--border);
        }
        .map-standin-title {
          font-size: 1.4rem;
          text-transform: uppercase;
          margin-top: 0.25rem;
        }
        .map-embed-wrapper {
          position: relative;
          width: 100%;
          height: 380px;
          min-height: 320px;
          background: #050308;
          overflow: hidden;
        }
        .google-map-iframe {
          width: 100%;
          height: 100%;
          border: 0;
          display: block;
          filter: contrast(104%) brightness(96%);
        }
        .map-standin-footer {
          padding: 1.25rem 2rem;
          border-top: 1px solid var(--border);
          background: rgba(11, 7, 20, 0.95);
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
        }
        .map-footer-coords {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }
        .coords-label {
          font-family: var(--font-mono);
          font-size: 0.68rem;
          letter-spacing: 0.12em;
          color: var(--purple-light);
        }
        .coords-val {
          font-family: var(--font-mono);
          font-size: 0.82rem;
          color: var(--off-white);
        }
        .btn-directions-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-mono);
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          color: var(--purple-light);
          padding: 0.5rem 1rem;
          background: rgba(138, 43, 226, 0.12);
          border: 1px solid var(--border);
          border-radius: var(--radius-sm);
          transition: var(--transition-fast);
          text-decoration: none;
        }
        .btn-directions-link:hover {
          background: var(--purple-primary);
          color: var(--white);
          border-color: var(--purple-light);
        }
      `}</style>
    </div>
  );
}
