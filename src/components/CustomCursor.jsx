import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    // Only enable on desktop pointer devices without reduced motion
    const hasPointer = window.matchMedia('(pointer: fine)').matches;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (hasPointer && !reducedMotion) {
      setEnabled(true);
    } else {
      return;
    }

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('interactive-element') ||
        target.getAttribute('role') === 'button'
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isVisible]);

  if (!enabled || !isVisible) return null;

  return (
    <>
      <div 
        className={`cursor-dot ${isHovering ? 'cursor-dot-hover' : ''}`}
        style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0)` }}
      />
      <div 
        className={`cursor-ring ${isHovering ? 'cursor-ring-hover' : ''}`}
        style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0)` }}
      />

      <style>{`
        .cursor-dot {
          position: fixed;
          top: 0;
          left: 0;
          width: 6px;
          height: 6px;
          background: #B86CFF;
          border-radius: 50%;
          pointer-events: none;
          z-index: 999999;
          margin-top: -3px;
          margin-left: -3px;
          box-shadow: 0 0 8px #B86CFF;
          transition: transform 0.04s linear, width 0.2s, height 0.2s, background-color 0.2s;
        }
        .cursor-ring {
          position: fixed;
          top: 0;
          left: 0;
          width: 32px;
          height: 32px;
          border: 1.5px solid rgba(184, 108, 255, 0.4);
          border-radius: 50%;
          pointer-events: none;
          z-index: 999998;
          margin-top: -16px;
          margin-left: -16px;
          transition: transform 0.12s cubic-bezier(0.16, 1, 0.3, 1), width 0.25s, height 0.25s, border-color 0.25s;
        }
        .cursor-ring-hover {
          width: 48px;
          height: 48px;
          margin-top: -24px;
          margin-left: -24px;
          border-color: #B86CFF;
          background: rgba(138, 43, 226, 0.1);
        }
        .cursor-dot-hover {
          background: #FFFFFF;
          box-shadow: 0 0 12px #FFFFFF;
        }
        @media (pointer: coarse) {
          .cursor-dot, .cursor-ring {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}
