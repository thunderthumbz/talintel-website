// hooks/use-scroll-reveal.ts
import { useEffect, useRef, useState } from 'react';

interface UseScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
}

/**
 * Hook that triggers animation when element scrolls into view
 * Works on all devices - desktop, tablet, and mobile
 * Returns ref to attach to container and hasEntered boolean for animation control
 */
export function useScrollReveal(options: UseScrollRevealOptions = {}) {
  const { threshold = 0.1, rootMargin = '0px 0px -100px 0px' } = options;
  
  const ref = useRef<HTMLDivElement>(null);
  const [hasEntered, setHasEntered] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Don't create observer if element not yet mounted
    if (!ref.current) return;

    // Only create observer once
    if (observerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // When element enters viewport, set hasEntered to true
          if (entry.isIntersecting) {
            setHasEntered(true);
            // Unobserve after animation triggers (fire once)
            if (observerRef.current) {
              observerRef.current.unobserve(entry.target);
            }
          }
        });
      },
      {
        threshold,
        rootMargin, // Trigger animation before element is fully visible
      }
    );

    observer.observe(ref.current);
    observerRef.current = observer;

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
    };
  }, [threshold, rootMargin]);

  return { ref, hasEntered };
}