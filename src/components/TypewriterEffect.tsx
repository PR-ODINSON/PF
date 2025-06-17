'use client';

import { useState, useEffect } from 'react';

interface TypewriterEffectProps {
  text: string;
  className?: string;
  speed?: number;
}

const TypewriterEffect = ({ text, className = '', speed = 100 }: TypewriterEffectProps) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed]);

  return (
    <span className={className}>
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default TypewriterEffect; 