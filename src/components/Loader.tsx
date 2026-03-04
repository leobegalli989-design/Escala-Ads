import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export const Loader = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    let timer: NodeJS.Timeout;
    let failsafe: NodeJS.Timeout;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          timer = setTimeout(() => setLoading(false), 500);
          return 100;
        }
        const next = prev + Math.random() * 15;
        return next > 100 ? 100 : next;
      });
    }, 80);

    // Failsafe: force loading to false after 5 seconds
    failsafe = setTimeout(() => {
      setLoading(false);
      clearInterval(interval);
    }, 5000);

    return () => {
      clearInterval(interval);
      if (timer) clearTimeout(timer);
      if (failsafe) clearTimeout(failsafe);
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[10001] bg-black flex flex-col items-center justify-center overflow-hidden"
        >
          <div className="relative z-10 flex flex-col items-center">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="mb-12"
            >
              <div className="text-4xl md:text-6xl font-bold tracking-[0.3em] text-white flex items-center gap-2">
                ESCALA<span className="text-primary">ADS</span>
              </div>
            </motion.div>

            <div className="relative w-64 h-[2px] bg-white/5 rounded-full overflow-hidden mb-6">
              <motion.div
                className="absolute top-0 left-0 h-full bg-primary shadow-[0_0_15px_rgba(0,255,242,0.8)]"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>

            <div className="flex flex-col items-center gap-2">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="font-montserrat text-primary text-[10px] tracking-[0.6em] uppercase font-bold animate-pulse"
              >
                Protocolo de Escala Ativo
              </motion.div>
              <div className="text-white/20 text-[10px] font-mono tracking-widest">
                SISTEMA_CARREGANDO: {Math.round(progress)}%
              </div>
            </div>
          </div>
          
          {/* Background Grid/Particles for "Life" */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,242,0.05)_0%,transparent_70%)]" />
            {[...Array(isMobile ? 6 : 15)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: "100vh" }}
                animate={{ opacity: [0, 0.3, 0], y: "-10vh" }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "linear"
                }}
                className="absolute w-[1px] h-32 bg-gradient-to-t from-transparent via-primary/30 to-transparent"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
