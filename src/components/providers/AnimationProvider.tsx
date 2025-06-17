'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';

type AnimationProviderProps = {
  children: React.ReactNode;
};

export function AnimationProvider({ children }: AnimationProviderProps) {
  useEffect(() => {
    // Initialize GSAP defaults
    gsap.config({
      force3D: true,
      nullTargetWarn: false,
    });

    // Set up global animation defaults
    gsap.defaults({
      ease: 'power2.out',
      duration: 0.6,
    });
  }, []);

  return <>{children}</>;
} 