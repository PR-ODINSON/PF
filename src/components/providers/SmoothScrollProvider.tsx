'use client';

import { ReactNode, useEffect, useRef } from 'react';
import Lenis from 'lenis';

interface SmoothScrollProviderProps {
  children: ReactNode;
}

const SmoothScrollProvider = ({ children }: SmoothScrollProviderProps) => {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      autoResize: true,
    });

    lenisRef.current = lenis;

    // Start the animation loop
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // GSAP ScrollTrigger integration
    if (typeof window !== 'undefined') {
      lenis.on('scroll', (e: any) => {
        // Update any scroll-based animations here
      });
    }

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
};

export default SmoothScrollProvider; 