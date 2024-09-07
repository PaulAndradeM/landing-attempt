'use client';
import React, { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '@/lib/AceternityUI/utils';

export const FlipWords = ({
  skills,
  duration = 3000,
  className,
}: {
  skills: { name: string; color: string }[];
  duration?: number;
  className?: string;
}) => {
  const [currentSkill, setCurrentSkill] = useState(skills[0]);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const startAnimation = useCallback(() => {
    const nextSkillIndex = skills.indexOf(currentSkill) + 1;
    const nextSkill = skills[nextSkillIndex] || skills[0];
    setCurrentSkill(nextSkill);
    setIsAnimating(true);
  }, [currentSkill, skills]);

  useEffect(() => {
    if (!isAnimating) {
      setTimeout(() => {
        startAnimation();
      }, duration);
    }
  }, [isAnimating, duration, startAnimation]);

  return (
    <AnimatePresence
      onExitComplete={() => {
        setIsAnimating(false);
      }}
    >
      <motion.div
        initial={{
          opacity: 0,
          y: 10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 100,
          damping: 10,
        }}
        exit={{
          opacity: 0,
          y: -40,
          x: 40,
          filter: 'blur(8px)',
          scale: 2,
          position: 'absolute',
        }}
        className={cn(
          'z-10 inline-block relative text-left px-2',
          className,
          currentSkill.color
        )}
        key={currentSkill.name}
      >
        {currentSkill.name.split(' ').map((word, wordIndex) => (
          <motion.span
            key={word + wordIndex}
            initial={{ opacity: 0, y: 10, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{
              delay: wordIndex * 0.3,
              duration: 0.3,
            }}
            className="inline-block whitespace-nowrap"
          >
            {word.split('').map((letter, letterIndex) => (
              <motion.span
                key={word + letterIndex}
                initial={{ opacity: 0, y: 10, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{
                  delay: wordIndex * 0.3 + letterIndex * 0.05,
                  duration: 0.2,
                }}
                className="inline-block"
              >
                {letter}
              </motion.span>
            ))}
            <span className="inline-block">&nbsp;</span>
          </motion.span>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
