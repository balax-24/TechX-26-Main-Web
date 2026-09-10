import React from 'react';

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  light = false,
  badge
}) {
  return (
    <div className={`section-header-root ${align === 'left' ? 'align-left' : 'align-center'} ${light ? 'light-mode' : ''}`}>
      <div className="section-eyebrow-line">
        {eyebrow && <span className="section-eyebrow">{eyebrow}</span>}
        {badge && <span className="badge-tech">{badge}</span>}
      </div>
      
      {title && <h2 className="section-title">{title}</h2>}
      {subtitle && <p className="section-subtitle">{subtitle}</p>}

      <style>{`
        .section-header-root {
          margin-bottom: 3.5rem;
          position: relative;
        }
        .align-center {
          text-align: center;
        }
        .align-center .section-subtitle {
          margin-left: auto;
          margin-right: auto;
        }
        .align-left {
          text-align: left;
        }
        .section-eyebrow-line {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          margin-bottom: 0.75rem;
        }
        .align-center .section-eyebrow-line {
          justify-content: center;
        }
        .light-mode .section-title {
          color: #0E0918;
        }
        .light-mode .section-subtitle {
          color: #5A5262;
        }
      `}</style>
    </div>
  );
}
