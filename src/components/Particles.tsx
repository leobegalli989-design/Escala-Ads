import React from 'react';
import { motion } from 'motion/react';

export const Particles = () => {
  const [particleCount, setParticleCount] = React.useState(20);

  React.useEffect(() => {
    const updateCount = () => {
      setParticleCount(window.innerWidth < 768 ? 8 : 20);
    };
    updateCount();
    window.addEventListener('resize', updateCount);
    return () => window.removeEventListener('resize', updateCount);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(particleCount)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-primary/30 rounded-full will-change-transform"
          initial={{
            x: Math.random() * 100 + '%',
            y: Math.random() * 100 + '%',
            opacity: Math.random(),
          }}
          animate={{
            y: [null, '-100%'],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: 'linear',
            delay: Math.random() * 10,
          }}
        />
      ))}
    </div>
  );
};
