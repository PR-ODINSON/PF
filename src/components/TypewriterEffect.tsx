'use client';

import { useState, useEffect } from 'react';

interface TypewriterEffectProps {
  text?: string;
  texts?: string[];
  className?: string;
  speed?: number;
  deleteSpeed?: number;
  delaySpeed?: number;
}

const TypewriterEffect = ({ 
  text, 
  texts, 
  className = '', 
  speed = 100,
  deleteSpeed = 50,
  delaySpeed = 2000
}: TypewriterEffectProps) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Use texts array if provided, otherwise fall back to single text
  const textArray = texts || (text ? [text] : ['']);
  const currentText = textArray[currentTextIndex] || '';

  useEffect(() => {
    if (textArray.length === 0) return;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (currentIndex < currentText.length) {
          setDisplayText(prev => prev + currentText[currentIndex]);
          setCurrentIndex(prev => prev + 1);
        } else {
          // Finished typing, wait then start deleting (only if multiple texts)
          if (textArray.length > 1) {
            setTimeout(() => setIsDeleting(true), delaySpeed);
          }
        }
      } else {
        // Deleting
        if (displayText.length > 0) {
          setDisplayText(prev => prev.slice(0, -1));
        } else {
          // Finished deleting, move to next text
          setIsDeleting(false);
          setCurrentIndex(0);
          setCurrentTextIndex(prev => (prev + 1) % textArray.length);
        }
      }
    }, isDeleting ? deleteSpeed : speed);

    return () => clearTimeout(timeout);
  }, [currentIndex, currentText, displayText, isDeleting, textArray, speed, deleteSpeed, delaySpeed]);

  return (
    <span className={className}>
      {displayText}
      <span className="animate-pulse text-primary">|</span>
    </span>
  );
};

export default TypewriterEffect; 