import React, { useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'motion/react';

interface CounterProps {
  value: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  delay?: number;
}

export const AnimatedCounter = ({ value, duration = 2, prefix = '', suffix = '', decimals = 0, delay = 0 }: CounterProps) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => {
    const formatted = latest.toLocaleString('pt-BR', { 
      minimumFractionDigits: decimals, 
      maximumFractionDigits: decimals 
    });
    return `${prefix}${formatted}${suffix}`;
  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      animate(count, value, { duration, ease: "easeOut" });
    }, delay * 1000);
    return () => clearTimeout(timeout);
  }, [value, duration, delay, count]);

  return <motion.span>{rounded}</motion.span>;
};
