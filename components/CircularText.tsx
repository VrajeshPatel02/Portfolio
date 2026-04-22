"use client";

import React, { useEffect } from 'react';
import { motion, useAnimation, useMotionValue, MotionValue } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface CircularTextProps {
  text?: string;
  spinDuration?: number;
  onHover?: 'slowDown' | 'speedUp' | 'pause' | 'goBonkers';
  className?: string;
}

const getRotationTransition = (duration: number, from: number, loop: boolean = true) => ({
  from,
  to: from + 360,
  ease: 'linear' as const,
  duration,
  type: 'tween' as const,
  repeat: loop ? Infinity : 0
});

const getTransition = (duration: number, from: number) => ({
  rotate: getRotationTransition(duration, from),
  scale: {
    type: 'spring' as const,
    damping: 20,
    stiffness: 300
  }
});

const CircularText: React.FC<CircularTextProps> = ({
  text = "LETS TALK • LETS TALK • LETS TALK • ",
  spinDuration = 10,
  onHover = 'speedUp',
  className = ''
}) => {
  const letters = Array.from(text);
  const controls = useAnimation();
  const rotation: MotionValue<number> = useMotionValue(0);

  useEffect(() => {
    const start = rotation.get();
    controls.start({
      rotate: start + 360,
      scale: 1,
      transition: getTransition(spinDuration, start)
    });
  }, [spinDuration, text, onHover, controls]);

  const handleHoverStart = () => {
    const start = rotation.get();
    if (!onHover) return;

    let transitionConfig;
    let scaleVal = 1;

    switch (onHover) {
      case 'slowDown':
        transitionConfig = getTransition(spinDuration * 2, start);
        break;
      case 'speedUp':
        transitionConfig = getTransition(spinDuration / 4, start);
        break;
      case 'pause':
        transitionConfig = {
          rotate: { type: 'spring', damping: 20, stiffness: 300 },
          scale: { type: 'spring', damping: 20, stiffness: 300 }
        };
        break;
      case 'goBonkers':
        transitionConfig = getTransition(spinDuration / 20, start);
        scaleVal = 0.8;
        break;
      default:
        transitionConfig = getTransition(spinDuration, start);
    }

    controls.start({
      rotate: start + 360,
      scale: scaleVal,
      transition: transitionConfig
    });
  };

  const handleHoverEnd = () => {
    const start = rotation.get();
    controls.start({
      rotate: start + 360,
      scale: 1,
      transition: getTransition(spinDuration, start)
    });
  };

  return (
    <motion.div
      className={`relative flex items-center justify-center ${className}`}
      initial="initial"
      whileHover="hover"
    >
      {/* Background Circle */}
      <div className="absolute inset-0 bg-[#18181b] rounded-full shadow-2xl" />
      
      {/* Inner Ring (matching the reference image) */}
      <div className="absolute w-[50%] h-[50%] border border-white/10 rounded-full z-10" />

      {/* Rotating Text Wrapper */}
      <motion.div
        className="relative w-[140px] h-[140px] flex items-center justify-center font-sans uppercase tracking-[0.3em] text-[9px] cursor-pointer"
        style={{ rotate: rotation }}
        animate={controls}
        onMouseEnter={handleHoverStart}
        onMouseLeave={handleHoverEnd}
      >
        {letters.map((letter, i) => {
          const rotationDeg = (360 / letters.length) * i;
          // Offset letters from center to form a circle
          const transform = `rotateZ(${rotationDeg}deg) translateY(-52px)`;

          return (
            <span
              key={i}
              className="absolute inline-block text-white"
              style={{ transform, WebkitTransform: transform }}
            >
              {letter}
            </span>
          );
        })}
      </motion.div>

      {/* Center Arrow */}
      <motion.div 
        className="absolute z-20 pointer-events-none flex items-center justify-center"
        variants={{
          initial: { rotate: 0 },
          hover: { rotate: 45 }
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <ArrowUpRight className="size-4 text-white stroke-[1.5px]" />
      </motion.div>
    </motion.div>
  );
};

export default CircularText;
