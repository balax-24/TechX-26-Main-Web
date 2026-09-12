import { useEffect, useRef, useState } from 'react';

/**
 * Performant scroll reveal hook using IntersectionObserver.
 * - Triggers once when threshold ratio of the target element enters viewport.
 * - Disconnects observer after trigger to prevent unnecessary callbacks.
 * - Respects prefers-reduced-motion by becoming visible immediately.
 * 
 * @param {Object} options
 * @param {number} options.threshold - Viewport intersection ratio (default: 0.22)
 * @param {string} options.rootMargin - Margin around the root (default: '0px 0px -40px 0px')
 * @returns {[React.RefObject, boolean]} [elementRef, isVisible]
 */
export function useScrollReveal({
  threshold = 0.18,
  rootMargin = '0px 0px -40px 0px'
} = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Immediate activation if user prefers reduced motion
    if (typeof window !== 'undefined' && window.matchMedia) {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) {
        setIsVisible(true);
        return;
      }
    }

    const element = ref.current;
    if (!element) return;

    // Check if element is already within viewport on initial render
    if (typeof window !== 'undefined') {
      const rect = element.getBoundingClientRect();
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
      if (rect.top < viewportHeight && rect.bottom > 0) {
        setIsVisible(true);
        return;
      }
    }

    // Initialize IntersectionObserver
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
            observer.disconnect();
          }
        },
        {
          threshold,
          rootMargin
        }
      );

      observer.observe(element);

      return () => {
        observer.disconnect();
      };
    } else {
      // Fallback for environments lacking IntersectionObserver
      setIsVisible(true);
    }
  }, [threshold, rootMargin]);

  return [ref, isVisible];
}

export default useScrollReveal;
