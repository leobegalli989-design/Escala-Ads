import React, { useEffect } from 'react';
import { motion, useMotionValue, animate, useInView } from 'motion/react';
import { cn } from '../lib/utils';

const Counter = ({ value, duration = 1.5, prefix = '', suffix = '', decimals = 0, delay = 0 }: any) => {
  const [displayValue, setDisplayValue] = React.useState(`${prefix}${Number(0).toLocaleString('pt-BR', { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}${suffix}`);
  const count = useMotionValue(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-10px" });
  const isAnimating = React.useRef(false);

  useEffect(() => {
    const unsubscribe = count.on("change", (latest) => {
      const val = typeof latest === 'number' ? latest : 0;
      const formatted = val.toLocaleString('pt-BR', { 
        minimumFractionDigits: decimals, 
        maximumFractionDigits: decimals 
      });
      setDisplayValue(`${prefix}${formatted}${suffix}`);
    });

    if (isInView && !isAnimating.current) {
      isAnimating.current = true;
      const timeout = setTimeout(() => {
        animate(count, value, { 
          duration, 
          ease: [0.16, 1, 0.3, 1],
        });
      }, delay * 1000);

      return () => {
        unsubscribe();
        clearTimeout(timeout);
      };
    }

    return () => unsubscribe();
  }, [value, duration, delay, count, decimals, prefix, suffix, isInView]);

  return (
    <span ref={ref} className="relative inline-block transform-gpu">
      {displayValue}
      <motion.span
        animate={{ 
          opacity: [0, 0.3, 0],
          x: [-1, 1, -0.5],
        }}
        transition={{ 
          duration: 0.2, 
          repeat: Infinity, 
          repeatDelay: 3 
        }}
        className="absolute inset-0 text-white/5 pointer-events-none select-none will-change-transform"
      >
        {displayValue}
      </motion.span>
    </span>
  );
};

const MetricCard = ({ label, numericValue, prefix, suffix, decimals, color, delay, centered = true }: any) => (
    <motion.div
      initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: false, margin: "-10px" }}
      transition={{ duration: 0.5, delay: delay * 0.1, ease: "easeOut" }}
      whileHover={{ scale: 1.02, zIndex: 10 }}
      className={cn(
        "relative p-2 sm:p-4 rounded-xl bg-white/[0.02] border border-white/5 overflow-hidden group hover:border-white/10 transition-all duration-300 will-change-transform transform-gpu shadow-[0_4px_20px_rgba(0,0,0,0.2)]",
        centered ? "flex flex-col items-center justify-center text-center" : ""
      )}
    >
    {/* Card Glow Background */}
    <div className={cn("absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500", color)} />
    
    <div className={cn("mb-1 sm:mb-2 relative z-10", centered ? "" : "flex items-center justify-between")}>
      <span className="text-[8px] sm:text-[10px] uppercase tracking-[0.2em] text-white/50 font-black">{label}</span>
    </div>
    <div className={cn("text-base sm:text-lg md:text-xl font-black font-montserrat tracking-tight relative z-10 drop-shadow-[0_0_15px_rgba(255,255,255,0.15)]", color.replace('bg-', 'text-'))}>
      <Counter value={numericValue} prefix={prefix} suffix={suffix} decimals={decimals} delay={delay} />
    </div>
    
    {/* Subtle Glow */}
    <div className={cn("absolute -bottom-4 -right-4 w-16 h-16 blur-2xl opacity-10 group-hover:opacity-30 transition-opacity rounded-full", color)} />
  </motion.div>
);

export const PerformanceDashboard = () => {
  return (
    <div className="w-full h-full p-3 sm:p-5 flex flex-col gap-3 sm:gap-4 bg-[#050505] rounded-3xl overflow-hidden relative">
      {/* Header */}
      <div className="flex flex-col items-center justify-center mb-2 sm:mb-4 relative">
        <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <h2 className="text-base sm:text-lg md:text-xl font-black text-primary tracking-[0.3em] uppercase text-center bg-[#050505] px-4 relative z-10 drop-shadow-[0_0_15px_rgba(20,163,229,0.5)] leading-tight">
          Relatório Escala<br/>Ads
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-1 sm:mb-2">
        <div className="p-2 sm:p-3 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.2)]">
          <span className="text-[8px] sm:text-[10px] text-primary/70 font-black tracking-[0.2em] uppercase mb-1">Cliente</span>
          <span className="text-xs sm:text-sm font-bold text-white">Todos os Clientes</span>
        </div>
        <div className="p-2 sm:p-3 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.2)]">
          <span className="text-[8px] sm:text-[10px] text-primary/70 font-black tracking-[0.2em] uppercase mb-1">Período</span>
          <span className="text-xs sm:text-sm font-bold text-white">Período Completo</span>
        </div>
      </div>

      {/* Main Metric: Faturamento */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative p-4 sm:p-5 rounded-2xl bg-emerald-900/10 border border-emerald-500/20 overflow-hidden group will-change-transform transform-gpu shadow-[0_0_30px_rgba(52,211,153,0.05)] flex flex-col items-center justify-center text-center mb-2"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 to-transparent pointer-events-none" />
        
        <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-emerald-400 font-black mb-1 relative z-10">Faturamento</span>
        
        <div className="text-2xl sm:text-3xl md:text-4xl font-montserrat text-emerald-400 font-black drop-shadow-[0_0_20px_rgba(52,211,153,0.3)] relative z-10">
          <Counter value={353285.34} prefix="R$ " decimals={2} delay={0.1} />
        </div>

        {/* Scanner Line for Main Card */}
        <motion.div 
          animate={{ left: ['-100%', '200%'] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-emerald-400/30 to-transparent skew-x-12 pointer-events-none transform-gpu will-change-transform"
        />
      </motion.div>

      {/* Grid Metrics */}
      <div className="grid grid-cols-2 gap-2 sm:gap-3">
        <MetricCard label="Gasto Ads" numericValue={31960.49} prefix="R$ " decimals={2} color="bg-red-500" delay={0.2} />
        <MetricCard label="ROAS" numericValue={11.05} suffix="x" decimals={2} color="bg-yellow-400" delay={0.3} />
        
        <MetricCard label="Ticket Médio" numericValue={170.50} prefix="R$ " decimals={2} color="bg-emerald-400" delay={0.4} />
        <MetricCard label="CPA Médio" numericValue={15.42} prefix="R$ " decimals={2} color="bg-indigo-400" delay={0.5} />
        
        <MetricCard label="Conversões" numericValue={2.1} suffix="k" decimals={1} color="bg-cyan-400" delay={0.6} />
        <MetricCard label="Taxa Conv." numericValue={17.05} suffix="%" decimals={2} color="bg-pink-500" delay={0.7} />
        
        <MetricCard label="Cliques" numericValue={12.2} suffix="k" decimals={1} color="bg-orange-500" delay={0.8} />
        <MetricCard label="CTR Médio" numericValue={0.31} suffix="%" decimals={2} color="bg-purple-400" delay={0.9} />
        
        <MetricCard label="CPC Médio" numericValue={2.63} prefix="R$ " decimals={2} color="bg-cyan-400" delay={1.0} />
        <MetricCard label="Impressões" numericValue={3.9} suffix="M" decimals={1} color="bg-blue-400" delay={1.1} />
      </div>

      {/* Alcance */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5, delay: 1.2 * 0.1 }}
        className="mt-2 p-3 sm:p-4 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.2)] relative overflow-hidden group hover:border-white/10 transition-all duration-300"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <span className="text-[10px] sm:text-xs text-white/50 font-black tracking-[0.2em] uppercase mb-1 relative z-10">Alcance</span>
        <div className="text-xl sm:text-2xl font-montserrat text-blue-400 font-black drop-shadow-[0_0_15px_rgba(96,165,250,0.4)] relative z-10">
          <Counter value={2.0} suffix="M" decimals={1} delay={1.2} />
        </div>
      </motion.div>

      {/* Footer Logo */}
      <div className="mt-6 flex flex-col items-center justify-center opacity-50">
        <div className="text-xl font-black tracking-tighter flex items-center gap-1 mb-1">
          <span className="text-white">ESCALA</span>
          <span className="text-primary">ADS</span>
        </div>
        <span className="text-[6px] sm:text-[8px] uppercase tracking-[0.3em] text-white/40 font-bold">Performance Digital de Elite</span>
      </div>
    </div>
  );
};

