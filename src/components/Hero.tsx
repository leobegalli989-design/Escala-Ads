import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ChevronRight, Sparkles, TrendingUp, DollarSign, Users, Target } from 'lucide-react';
import { Particles } from './Particles';

import { PerformanceDashboard } from './PerformanceDashboard';
import { Magnetic } from './Magnetic';

import { AnimatedCounter } from './AnimatedCounter';

const StatItem = ({ numericValue, label, prefix = '', suffix = '', icon: Icon }: { numericValue: number; label: string; prefix?: string; suffix?: string; icon: any }) => (
  <div className="flex flex-col items-center sm:items-start group p-4 sm:p-0 rounded-2xl bg-white/5 sm:bg-transparent border border-white/10 sm:border-0 transition-all duration-500 hover:bg-white/10 sm:hover:bg-transparent">
    <div className="flex items-center gap-2 mb-2 sm:mb-1">
      <Icon size={14} className="text-primary/60 group-hover:text-primary transition-colors" />
      <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-white/40 font-black">{label}</span>
    </div>
    <div className="relative">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        className="text-2xl sm:text-3xl md:text-4xl font-montserrat text-white font-black tracking-tighter group-hover:text-primary transition-colors"
      >
        <AnimatedCounter value={numericValue} prefix={prefix} suffix={suffix} decimals={numericValue % 1 !== 0 ? 1 : 0} />
      </motion.div>
      {/* Glow effect on hover - Only on desktop */}
      <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 -z-10" />
    </div>
  </div>
);

export const Hero = () => {
  const [isDesktop, setIsDesktop] = useState(() => 
    typeof window !== 'undefined' ? window.innerWidth >= 1024 : false
  );

  useEffect(() => {
    const checkDesktop = () => {
      const desktop = window.innerWidth >= 1024;
      if (desktop !== isDesktop) setIsDesktop(desktop);
    };
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, [isDesktop]);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
      {isDesktop && <Particles />}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 blur-[80px] rounded-full animate-pulse hidden md:block" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary/10 blur-[80px] rounded-full hidden md:block" />

      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: isDesktop ? -50 : 0, y: isDesktop ? 0 : 20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
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

          <h1 className="text-[2.5rem] sm:text-6xl md:text-7xl lg:text-8xl mb-6 leading-[1.1] sm:leading-[1] will-change-transform text-center sm:text-left">
            <div className="overflow-hidden py-2">
              <motion.span 
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="inline-block transform-gpu"
              >
                DOMÍNIO DE <span className="text-shimmer glow-pulse">MERCADO</span>
              </motion.span>
            </div>
            <div className="overflow-hidden py-2">
              <motion.span 
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="inline-block transform-gpu"
              >
                COM <span className="text-shimmer glow-pulse">ESCALA.</span>
              </motion.span>
            </div>
          </h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-gray-neutral text-sm sm:text-lg md:text-xl max-w-xl mb-10 font-light leading-relaxed text-center sm:text-left px-4 sm:px-0"
          >
            Não somos apenas uma agência. Somos o seu braço de inteligência e performance para escalar faturamentos de <span className="text-primary font-bold shadow-[0_0_15px_rgba(20,163,229,0.3)]">5 e 6</span> dígitos com previsibilidade absoluta.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 mb-16 px-4 sm:px-0"
          >
            <Magnetic disabled={!isDesktop}>
              <a 
                href="https://wa.me/5535998208622?text=Olá!%20Gostaria%20de%20agendar%20um%20diagnóstico%20estratégico%20para%20o%20meu%20negócio."
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-6 py-5 sm:px-8 sm:py-4 bg-primary text-black font-black uppercase tracking-tighter rounded-xl sm:rounded-sm overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(20,163,229,0.5)] flex items-center justify-center text-sm sm:text-base"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Agendar Diagnóstico
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"
                />
              </a>
            </Magnetic>
            <a 
              href="#cases"
              className="px-6 py-5 sm:px-8 sm:py-4 border border-white/20 hover:border-primary/50 hover:bg-primary/5 transition-all text-white font-bold uppercase tracking-tighter rounded-xl sm:rounded-sm flex items-center justify-center gap-2 relative overflow-hidden group text-sm sm:text-base"
            >
              <span className="relative z-10 flex items-center gap-2">
                Ver Cases de Sucesso
                <ChevronRight size={20} />
              </span>
              <div className="absolute inset-0 bg-primary/10 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300" />
            </a>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-8 border-t border-white/10 pt-8 px-2 sm:px-0">
            <StatItem numericValue={322} prefix="+R$ " suffix="k" label="Gerados" icon={TrendingUp} />
            <StatItem numericValue={20} prefix="+R$ " suffix="k" label="Investidos" icon={DollarSign} />
            <StatItem numericValue={15} prefix="+" label="Clientes" icon={Users} />
            <StatItem numericValue={1.2} prefix="+" suffix="k" label="Campanhas" icon={Target} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          whileHover={isDesktop ? { y: -10, rotateY: 5, rotateX: -5 } : {}}
          transition={{ 
            duration: 1, 
            delay: 0.3,
            whileHover: { duration: 0.5, ease: "easeOut" }
          }}
          className="relative perspective-1000 mt-12 lg:mt-0 transform-gpu will-change-transform"
        >
          <div className="relative z-10 w-full glass rounded-3xl overflow-hidden neon-border group min-h-[400px] lg:min-h-[600px] transition-shadow duration-500 group-hover:shadow-[0_0_50px_rgba(20,163,229,0.3)]">
            <PerformanceDashboard />
            
            {/* Decorative Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
          </div>
          
          {/* Decorative Rings */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="absolute -top-10 -right-10 w-full h-full border border-primary/10 rounded-3xl -z-10 hidden lg:block" 
          />
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            className="absolute -bottom-10 -left-10 w-full h-full border border-primary/5 rounded-3xl -z-20 hidden lg:block" 
          />
        </motion.div>
      </div>
    </section>
  );
};
