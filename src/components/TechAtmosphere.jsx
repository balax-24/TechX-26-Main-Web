import React from 'react';

export default function TechAtmosphere({ showArch = false, archSrc = null }) {
  return (
    <div className="tech-atmo-root" aria-hidden="true">
      {/* Grid Pattern */}
      <div className="atmo-grid-layer"></div>

      {/* Atmospheric Purple Radial Glows */}
      <div className="atmo-glow-primary"></div>
      <div className="atmo-glow-secondary"></div>

      {/* Circuit Crosshairs / Coordinate Markers */}
      <div className="atmo-crosshair crosshair-tl">+ 12° 58' N // 80° 03' E</div>
      <div className="atmo-crosshair crosshair-br">IEEE CS SBC [SSIT] // 2026</div>

      {/* Architectural Background Motif */}
      {showArch && archSrc && (
        <div className="atmo-arch-layer">
          <img src={archSrc} alt="" className="atmo-arch-img" />
          <div className="atmo-arch-mask"></div>
        </div>
      )}

      <style>{`
        .tech-atmo-root {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
          z-index: 0;
        }
        .atmo-grid-layer {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(to right, rgba(138, 43, 226, 0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(138, 43, 226, 0.04) 1px, transparent 1px);
          background-size: 56px 56px;
          opacity: 0.75;
        }
        .atmo-glow-primary {
          position: absolute;
          top: 15%;
          left: 50%;
          transform: translateX(-50%);
          width: min(800px, 100vw);
          height: 500px;
          background: radial-gradient(ellipse at center, rgba(138, 43, 226, 0.16) 0%, rgba(7, 5, 10, 0) 70%);
          filter: blur(80px);
        }
        .atmo-glow-secondary {
          position: absolute;
          bottom: 10%;
          right: 5%;
          width: min(500px, 90vw);
          height: 400px;
          background: radial-gradient(circle at center, rgba(78, 20, 140, 0.12) 0%, transparent 70%);
          filter: blur(90px);
        }
        .atmo-crosshair {
          position: absolute;
          font-family: var(--font-mono);
          font-size: 0.68rem;
          letter-spacing: 0.15em;
          color: rgba(184, 108, 255, 0.25);
        }
        .crosshair-tl {
          top: 2rem;
          left: 2rem;
        }
        .crosshair-br {
          bottom: 2rem;
          right: 2rem;
        }
        @media (max-width: 768px) {
          .atmo-crosshair {
            display: none;
          }
        }
        .atmo-arch-layer {
          position: absolute;
          top: 0;
          right: 0;
          width: 50%;
          height: 100%;
          opacity: 0.18;
          mix-blend-mode: luminosity;
          overflow: hidden;
        }
        .atmo-arch-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(100%) contrast(120%);
        }
        .atmo-arch-mask {
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, #000000 0%, rgba(0,0,0,0.5) 40%, rgba(0,0,0,0.95) 100%),
                      linear-gradient(180deg, #000000 0%, transparent 30%, #000000 100%);
        }
      `}</style>
    </div>
  );
}
