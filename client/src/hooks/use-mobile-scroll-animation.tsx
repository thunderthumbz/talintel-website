// hooks/use-mobile-scroll-animation.ts
import { useEffect, useState } from 'react';

export function useMobileScrollAnimation() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile/tablet (touchscreen)
    const checkMobile = () => {
      const isTouchDevice = () => {
        return (
          (typeof window !== 'undefined' && 'ontouchstart' in window) ||
          (typeof navigator !== 'undefined' && navigator.maxTouchPoints > 0)
        );
      };

      const mobileBreakpoint = window.matchMedia('(max-width: 768px)').matches;
      setIsMobile(isTouchDevice() && mobileBreakpoint);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile;
}

// hooks/use-card-scroll-animation.ts
import { useRef, useEffect, useCallback } from 'react';
import { useAnimation } from 'framer-motion';

interface UseCardScrollAnimationProps {
  isMobile: boolean;
  threshold?: number;
}

export function useCardScrollAnimation({ isMobile, threshold = 0.15 }: UseCardScrollAnimationProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const hasAnimated = useRef(false);

  useEffect(() => {
    // Skip observer setup if not mobile
    if (!isMobile || !cardRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Trigger animation when card enters viewport
        if (entry.isIntersecting && !hasAnimated.current) {
          controls.start({ opacity: 1, y: 0 });
          hasAnimated.current = true;
          observer.unobserve(entry.target);
        }
      },
      { 
        threshold,
        rootMargin: '50px' // Trigger slightly before card is fully visible
      }
    );

    observer.observe(cardRef.current);

    return () => {
      observer.disconnect();
    };
  }, [isMobile, controls, threshold]);

  return { cardRef, controls };
}