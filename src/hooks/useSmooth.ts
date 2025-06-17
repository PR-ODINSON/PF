'use client';

import { useEffect, useRef, useState } from 'react';
import { useScroll, useTransform, MotionValue } from 'framer-motion';

export const useSmoothScroll = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref });
  
  return { ref, scrollYProgress };
};

export const useScrollTransform = (
  scrollYProgress: MotionValue<number>,
  inputRange: number[],
  outputRange: (string | number)[]
) => {
  return useTransform(scrollYProgress, inputRange, outputRange);
};

export const useScrollVelocity = () => {
  const [velocity, setVelocity] = useState(0);
  const lastScrollY = useRef(0);
  const lastTimestamp = useRef(0);

  useEffect(() => {
    const calculateVelocity = () => {
      const currentTimestamp = performance.now();
      const currentScrollY = window.scrollY;
      
      if (lastTimestamp.current) {
        const timeDelta = currentTimestamp - lastTimestamp.current;
        const scrollDelta = currentScrollY - lastScrollY.current;
        const currentVelocity = Math.abs(scrollDelta) / timeDelta;
        
        setVelocity(currentVelocity);
      }
      
      lastScrollY.current = currentScrollY;
      lastTimestamp.current = currentTimestamp;
      
      requestAnimationFrame(calculateVelocity);
    };

    const rafId = requestAnimationFrame(calculateVelocity);
    
    return () => cancelAnimationFrame(rafId);
  }, []);

  return velocity;
};

export const useParallax = (rate: number = 0.5) => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref });
  
  const y = useTransform(scrollYProgress, [0, 1], ['0%', `${rate * 100}%`]);
  
  return { ref, y };
};

export const useScrollDirection = () => {
  const [direction, setDirection] = useState<'up' | 'down' | null>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY.current) {
        setDirection('down');
      } else if (currentScrollY < lastScrollY.current) {
        setDirection('up');
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return direction;
};

export const useInViewAnimation = (
  threshold: number = 0.1,
  rootMargin: string = '0px'
) => {
  const ref = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold, rootMargin }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold, rootMargin]);

  return { ref, isInView };
}; 