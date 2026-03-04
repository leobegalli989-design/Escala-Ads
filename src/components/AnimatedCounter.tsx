import React, { useEffect, useState, useMemo } from 'react';
import { animate } from 'motion/react';

interface CounterProps {
  value: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  delay?: number;
}

export const AnimatedCounter = ({ value, duration = 2, prefix = '', suffix = '', decimals = 0, delay = 0 }: CounterProps) => {
  const [displayValue, setDisplayValue] = useState(0);
  const initialized = React.useRef(false);
  
  const formatter = useMemo(() => new Intl.NumberFormat('pt-BR', { 
    minimumFractionDigits: decimals, 
    maximumFractionDigits: decimals 
  }), [decimals]);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;
    
    let controls: any;
    const timeout = setTimeout(() => {
      controls = animate(0, value, {
        duration,
        ease: "easeOut",
        onUpdate: (latest) => setDisplayValue(latest)
      });
    }, delay * 1000);

    return () => {
      timeout && clearTimeout(timeout);
      controls && controls.stop();
    };
  }, [value, duration, delay]);

  const formatted = formatter.format(displayValue);

  return <span>{prefix}{formatted}{suffix}</span>;
};
