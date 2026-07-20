import { useEffect, useRef, useState } from 'react';

/**
 * Reveals an element the first time it scrolls into view.
 *
 * Returns [ref, isVisible]:
 *   - attach `ref` to the element you want to watch
 *   - `isVisible` starts false and flips to true once the element is on screen
 *
 * Usage:
 *   const [ref, isVisible] = useScrollReveal();
 *   <div ref={ref} className={`reveal ${isVisible ? 'is-visible' : ''}`}>
 *
 * We use the browser's built-in IntersectionObserver instead of listening to
 * every scroll event, because the browser tells us when the element enters the
 * screen rather than us re-checking positions on each of hundreds of events.
 *
 * @param {number} threshold How much of the element must be visible (0 to 1).
 */
const useScrollReveal = (threshold = 0.15) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        setIsVisible(true);
        // Reveal once and stop watching. If we kept observing, the content
        // would fade out and back in every time the user scrolled past it.
        observer.unobserve(entry.target);
      },
      { threshold }
    );

    observer.observe(element);

    // Stop observing when the component unmounts, so we don't leak the observer.
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, isVisible];
};

export default useScrollReveal;
