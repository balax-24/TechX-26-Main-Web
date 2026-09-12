import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

/**
 * Universal Global Scroll Pop / Reveal Component.
 * Implements subtle POP / RISE / SETTLE micro-motion using transform & opacity.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {string} [props.className]
 * @param {string} [props.as] - HTML element tag name ('div', 'section', 'article', etc.)
 * @param {'pop' | 'card' | 'header' | 'image' | 'stagger'} [props.variant] - Animation preset
 * @param {number} [props.threshold] - Viewport ratio (default: 0.18)
 * @param {number} [props.delay] - Transition delay in ms
 * @param {boolean} [props.stagger] - Auto-stagger child elements
 */
export default function Reveal({
  children,
  className = '',
  as: Component = 'div',
  variant = 'pop',
  threshold = 0.18,
  delay = 0,
  stagger = false,
  ...rest
}) {
  const [ref, isVisible] = useScrollReveal({ threshold });

  const variantClass = variant === 'card' ? 'reveal-card' :
                       variant === 'header' ? 'reveal-header' :
                       variant === 'image' ? 'reveal-image-container' :
                       variant === 'stagger' ? 'reveal-stagger' :
                       'reveal-pop';

  const staggerClass = (stagger && variant !== 'stagger') ? 'reveal-stagger' : '';

  const style = delay > 0 ? { transitionDelay: `${delay}ms` } : undefined;

  return (
    <Component
      ref={ref}
      className={`reveal ${variantClass} ${staggerClass} ${isVisible ? 'is-revealed' : ''} ${className}`}
      style={style}
      {...rest}
    >
      {children}
    </Component>
  );
}

export { Reveal };
