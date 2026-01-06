import { useEffect, useState } from 'react';

/**
 * Hook to manage animations based on device type
 * Disables animations on desktop, enables only on mobile scrolling
 */
export function useMobileScrollAnimation() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile at mount
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();

    // Listen for resize events
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile;
}
