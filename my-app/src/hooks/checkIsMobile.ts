import { useState, useEffect } from 'react';

/**
 * Custom hook to detect if the current viewport is mobile size
 * @param breakpoint - The width threshold for mobile detection (default: 768px)
 * @returns boolean indicating if the current viewport is mobile size
 */

export const useMobile = (breakpoint: number = 768): boolean => {
  const [isMobile, setIsMobile] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < breakpoint;
    }
    return false;
  });
  
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    // Check on initial mount in case window size changed
    checkIsMobile();

    // Add event listener for window resize
    window.addEventListener('resize', checkIsMobile);

    // Cleanup function to remove event listener
    return () => window.removeEventListener('resize', checkIsMobile);
  }, [breakpoint]);

  return isMobile;
};