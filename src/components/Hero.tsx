import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ChevronRight, Sparkles } from 'lucide-react';
import { Particles } from './Particles';

import { PerformanceDashboard } from './PerformanceDashboard';
import { Magnetic } from './Magnetic';

import { AnimatedCounter } from './AnimatedCounter';

const StatItem = ({ value, numericValue, label, prefix = '', suffix = '' }: { value: string; numericValue: number; label: string; prefix?: string; suffix?: string }) => (
  <div className="flex flex-col items-center sm:items-start group">
    <div className="relative">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-montserrat text-primary font-black tracking-tighter"
      >
        <AnimatedCounter value={numericValue} prefix={prefix} suffix={suffix} decimals={numericValue % 1 !== 0 ? 1 : 0} />
      </motion.div>
      {/* Glow effect on hover - Only on desktop */}
      <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 -z-10" />
    </div>
    <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-white/40 font-bold mt-1">{label}</span>
  </div>
);

export const Hero = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 1024);
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
      <Particles />
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 blur-[80px] rounded-full animate-pulse hidden md:block" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary/10 blur-[80px] rounded-full hidden md:block" />

      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] uppercase tracking-[0.3em] mb-6"
          >
            <Sparkles size={12} className="animate-spin" />
            Performance Digital de Elite
          </motion.div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl mb-6 leading-[0.9] overflow-hidden">
            <motion.span 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block"
            >
              DOMÍNIO DE <span className="text-shimmer glow-pulse bg-gradient-to-r from-primary via-blue-400 to-emerald-400 bg-clip-text text-transparent">MERCADO</span>
            </motion.span>
            <br />
            <motion.span 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block"
            >
              COM <span className="text-shimmer glow-pulse bg-gradient-to-r from-primary via-blue-400 to-emerald-400 bg-clip-text text-transparent">ESCALA.</span>
            </motion.span>
          </h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-gray-neutral text-base sm:text-lg md:text-xl max-w-xl mb-10 font-light leading-relaxed text-center sm:text-left"
          >
            Não somos apenas uma agência. Somos o seu braço de inteligência e performance para escalar faturamentos de <span className="text-primary font-bold shadow-[0_0_15px_rgba(20,163,229,0.3)]">5 e 6</span> dígitos com previsibilidade absoluta.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <Magnetic>
              <button className="group relative px-8 py-4 bg-primary text-black font-black uppercase tracking-tighter rounded-sm overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(20,163,229,0.5)]">
                <span className="relative z-10 flex items-center gap-2">
                  Agendar Diagnóstico Estratégico
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"
                />
              </button>
            </Magnetic>
            <button className="px-8 py-4 border border-white/20 hover:border-primary/50 hover:bg-primary/5 transition-all text-white font-bold uppercase tracking-tighter rounded-sm flex items-center gap-2 relative overflow-hidden group">
              <span className="relative z-10 flex items-center gap-2">
                Ver Cases de Sucesso
                <ChevronRight size={20} />
              </span>
              <div className="absolute inset-0 bg-primary/10 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300" />
            </button>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 border-t border-white/10 pt-8">
            <StatItem numericValue={50} value="+R$ 50M" prefix="+R$ " suffix="M" label="Investidos" />
            <StatItem numericValue={250} value="+250" prefix="+" label="Clientes" />
            <StatItem numericValue={1.2} value="+1.2K" prefix="+" suffix="K" label="Campanhas" />
          </div>
        </motion.div>

        {isDesktop && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            whileHover={{ y: -10, rotateY: 5, rotateX: -5 }}
            transition={{ 
              duration: 1, 
              delay: 0.3,
              whileHover: { duration: 0.5, ease: "easeOut" }
            }}
            className="relative perspective-1000"
          >
            <div className="relative z-10 w-full glass rounded-3xl overflow-hidden neon-border group min-h-[600px] transition-shadow duration-500 group-hover:shadow-[0_0_50px_rgba(20,163,229,0.3)]">
              <PerformanceDashboard />
              
              {/* Decorative Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>
            
            {/* Decorative Rings */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute -top-10 -right-10 w-full h-full border border-primary/10 rounded-3xl -z-10" 
            />
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              className="absolute -bottom-10 -left-10 w-full h-full border border-primary/5 rounded-3xl -z-20" 
            />
          </motion.div>
        )}
      </div>
    </section>
  );
};
