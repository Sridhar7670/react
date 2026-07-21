import { useEffect, useState } from 'react';

/**
 * Tracks which section is currently on screen, so the navbar can highlight it.
 *
 * @param {string[]} sectionIds ids of the sections to watch, in page order.
 * @returns {string} id of the section the reader is currently looking at.
 *
 * How it works: `rootMargin` shrinks the area the observer cares about down
 * to a thin horizontal band across the middle of the screen. Whichever
 * section is crossing that band is the one the reader is looking at. Without
 * it, several tall sections would count as "visible" at the same time and the
 * highlight would jump around.
 */
const useActiveSection = (sectionIds) => {
  const [activeId, setActiveId] = useState(sectionIds[0]);

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (elements.length === 0) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const inBand = entries.find((entry) => entry.isIntersecting);
        if (inBand) setActiveId(inBand.target.id);
      },
      // Top 45% and bottom 45% of the screen are ignored, leaving a band
      // across the middle.
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
    // Join the ids so a new array with the same contents does not restart
    // the effect on every render.
  }, [sectionIds.join(',')]); // eslint-disable-line react-hooks/exhaustive-deps

  return activeId;
};

export default useActiveSection;
