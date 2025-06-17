'use client';

import { useState, useEffect } from 'react';

interface TypewriterEffectProps {
  text?: string;
  texts?: string[];
  speed?: number;
  deleteSpeed?: number;
  delaySpeed?: number;
  className?: string;
  showCursor?: boolean;
  cursorChar?: string;
}

const TypewriterEffect = ({ 
  text,
  texts,
  speed = 100,
  deleteSpeed = 50,
  delaySpeed = 2000,
  className = '',
  showCursor = true,
  cursorChar = '|'
}: TypewriterEffectProps) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  // Use texts array if provided, otherwise fallback to single text
  const textArray = texts || (text ? [text] : ['']);
  const isMultipleTexts = texts && texts.length > 1;

  useEffect(() => {
    const currentText = textArray[currentIndex] || '';
    
    const timeout = setTimeout(() => {
      if (isPaused) {
        setIsPaused(false);
        if (isMultipleTexts) {
          setIsDeleting(true);
        }
        return;
      }

      if (!isDeleting) {
        // Typing
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        } else {
          // Finished typing
          if (isMultipleTexts) {
            setIsPaused(true);
          }
        }
      } else {
        // Deleting
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          // Finished deleting
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % textArray.length);
        }
      }
    }, isPaused ? delaySpeed : isDeleting ? deleteSpeed : speed);

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting, isPaused, textArray, speed, deleteSpeed, delaySpeed, isMultipleTexts]);

  return (
    <span className={className}>
      {displayText}
      {showCursor && (
        <span 
          className="animate-pulse text-primary ml-1"
          style={{
            animation: 'blink 1s infinite',
          }}
        >
          {cursorChar}
        </span>
      )}
      <style jsx>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>
    </span>
  );
};

export default TypewriterEffect; 