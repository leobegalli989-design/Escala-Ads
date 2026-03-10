import React, { useEffect, useState, useMemo, useRef } from 'react';
import { animate, motion, useInView } from 'motion/react';

interface CounterProps {
  value: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  delay?: number;
}

export const AnimatedCounter = ({ value, duration = 1.5, prefix = '', suffix = '', decimals = 0, delay = 0 }: CounterProps) => {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10px" });
  
  const formatter = useMemo(() => new Intl.NumberFormat('pt-BR', { 
    minimumFractionDigits: decimals, 
    maximumFractionDigits: decimals 
  }), [decimals]);

  useEffect(() => {
    if (!isInView) return;

    let controls: any;
    const timeout = setTimeout(() => {
      controls = animate(0, value, {
        duration: duration,
        ease: [0.22, 1, 0.36, 1], // Quint Out easing for a very smooth progressive feel
        onUpdate: (latest) => setDisplayValue(latest)
      });
    }, delay * 1000);

    return () => {
      timeout && clearTimeout(timeout);
      controls && controls.stop();
    };
  }, [value, duration, delay, isInView]);

  const formatted = formatter.format(displayValue);

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, filter: 'blur(4px)' }}
      animate={isInView ? { opacity: 1, filter: 'blur(0px)' } : {}}
      transition={{ duration: 0.5, delay: delay }}
    >
      {prefix}{formatted}{suffix}
    </motion.span>
  );
};
