'use client';

import { motion, useInView, Variants } from 'framer-motion';
import * as React from 'react';

export function TextFade({
  direction,
  children,
  className = '',
  staggerChildren = 0.1,
  duration = 0.6, 
}: {
  direction: 'up' | 'down';
  children: React.ReactNode;
  className?: string;
  staggerChildren?: number;
  duration?: number;
}) {
  const ref = React.useRef(null);

  const isInView = useInView(ref, { once: true, margin: '-100px' });

  
  const childFadeVariants: Variants = {
    hidden: { opacity: 0, y: direction === 'down' ? -20 : 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'tween', 
        ease: 'easeOut',
        duration: duration, 
      },
    },
  };

 
  const containerVariants: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'show' : 'hidden'}
      variants={containerVariants}
      className={className}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child) ? (
          <motion.div variants={childFadeVariants}>{child}</motion.div>
        ) : (
          child
        )
      )}
    </motion.div>
  );
}
