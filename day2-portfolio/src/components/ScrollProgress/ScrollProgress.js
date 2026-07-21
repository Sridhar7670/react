import { useEffect, useState } from 'react';
import './ScrollProgress.css';

/**
 * Thin bar across the top of the screen showing how far down the page the
 * reader has scrolled. On a long single-page site it tells them how much is
 * left, which makes the page feel shorter than it is.
 */
const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Total distance that can be scrolled = full page height minus the
      // part of it already on screen.
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      // Guard against dividing by zero on a page shorter than the window.
      setProgress(scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0);
    };

    handleScroll(); // Set the starting value, e.g. after a page refresh midway

    // `passive: true` promises we will not call preventDefault, which lets
    // the browser keep scrolling smoothly while this runs.
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <div className="scroll-progress-track" aria-hidden="true">
      <div className="scroll-progress-bar" style={{ width: `${progress}%` }} />
    </div>
  );
};

export default ScrollProgress;
