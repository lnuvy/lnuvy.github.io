import { useEffect, useState, useRef } from 'react';

/**
 * useScrollSpy Hook
 * Tracks which section is currently in view and updates the URL hash.
 * 
 * @param {string[]} ids - Array of section IDs to observer
 * @param {object} options - IntersectionObserver options (root, rootMargin, threshold)
 * @returns {string} activeId - The ID of the currently visible section
 */
export const useScrollSpy = (
  ids: string[],
  options: IntersectionObserverInit = { rootMargin: '-50% 0px -50% 0px' }
) => {
  const [activeId, setActiveId] = useState<string>('');
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const elements = ids.map((id) => document.getElementById(id));

    if (observer.current) {
      observer.current.disconnect();
    }

    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          if (id) {
            setActiveId(id);
            // Replace URL hash silently without history push
            window.history.replaceState(null, '', `#${id}`);
          }
        }
      });
    }, options);

    elements.forEach((el) => {
      if (el) observer.current?.observe(el);
    });

    return () => observer.current?.disconnect();
  }, [ids, options]);

  return activeId;
};
