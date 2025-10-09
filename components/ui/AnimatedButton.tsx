'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface AnimatedButtonProps {
  displayText: string;
  hoveredText: string;
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
  backgroundColor?: string;
  borderColor?: string;
  textColor?: string;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  displayText,
  hoveredText,
  onClick,
  className = '',
  style,
  backgroundColor = '#0070f3',
  borderColor = '#e5e7eb',
  textColor = '#000000',
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const textOffset = 24; // Pixels for text slide (adjust based on font size/line height)

  return (
    <motion.button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      className={className}
      style={{
        position: 'relative',
        borderRadius: '9999px',
        border: `1px solid ${borderColor}`,
        backgroundColor: 'transparent',
        padding: '12px 32px',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        cursor: 'pointer',
        fontSize: '16px',
        fontWeight: '500',
        color: textColor,
        minHeight: '48px',
        whiteSpace: 'nowrap',
        ...style,
      }}
    >
      {/* Bubble Effect */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: isHovered ? 1 : 0,
          opacity: isHovered ? 1 : 0,
        }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'absolute',
          top: '100%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '200%',
          height: '200%',
          borderRadius: '50%',
          backgroundColor,
          zIndex: 0,
        }}
      />

      {/* Text Container */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          minHeight: '20px', // Ensures space for text swap
        }}
      >
        {/* Default Text */}
        <motion.span
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            textAlign: 'center',
          }}
          animate={{
            y: isHovered ? -textOffset : 0,
            opacity: isHovered ? 0 : 1,
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          {displayText}
        </motion.span>

        {/* Hovered Text */}
        <motion.span
          style={{
            position: 'absolute',
            top: textOffset,
            left: 0,
            right: 0,
            textAlign: 'center',
          }}
          animate={{
            y: isHovered ? -textOffset : 0,
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          {hoveredText}
        </motion.span>
      </div>
    </motion.button>
  );
};

export default AnimatedButton;