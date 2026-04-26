import React, { useEffect } from 'react';
import { motion, useMotionValue, animate, useInView } from 'motion/react';
import { cn } from '../lib/utils';

const Counter = ({ value, duration = 1.5, prefix = '', suffix = '', decimals = 0, delay = 0, dynamic = true }: any) => {
  const [displayValue, setDisplayValue] = React.useState(`${prefix}${Number(value).toLocaleString('pt-BR', { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}${suffix}`);
  const count = useMotionValue(value);
  const ref = React.useRef(null);
  
  useEffect(() => {
    const unsubscribe = count.on("change", (latest) => {
      const val = typeof latest === 'number' ? latest : 0;
      const formatted = val.toLocaleString('pt-BR', { 
        minimumFractionDigits: decimals, 
        maximumFractionDigits: decimals 
      });
      setDisplayValue(`${prefix}${formatted}${suffix}`);
    });

    let interval: any;
    if (dynamic) {
      interval = setInterval(() => {
        const current = count.get();
        // Fluctuate positively slightly
        const target = current + (value * (Math.random() * 0.0001));
        animate(count, target, { duration: 1.5, ease: "linear" });
      }, 3000);
    }

    return () => {
      unsubscribe();
      if (interval) clearInterval(interval);
    };
  }, [value, duration, delay, count, decimals, prefix, suffix, dynamic]);

  return (
    <span ref={ref} className="relative inline-block transform-gpu">
      {displayValue}
      <motion.span
        animate={{ 
          opacity: [0, 0.4, 0],
          x: [-1, 1, -0.5],
        }}
        transition={{ 
          duration: 0.2, 
          repeat: Infinity, 
          repeatDelay: 3 
        }}
        className="absolute inset-0 text-white/10 pointer-events-none select-none will-change-transform"
      >
        {displayValue}
      </motion.span>
    </span>
  );
};

const MetricCard = ({ label, numericValue, prefix, suffix, decimals, color, centered = true }: any) => (
    <motion.div
      initial={{ opacity: 0, y: 10, filter: 'blur(5px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: "-10px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ scale: 1.02, zIndex: 10 }}
      className={cn(
        "relative p-2 sm:p-4 rounded-xl bg-white/[0.02] border border-white/10 overflow-hidden group hover:border-white/20 transition-all duration-300 will-change-transform transform-gpu shadow-[0_4px_20px_rgba(0,0,0,0.3)]",
        centered ? "flex flex-col items-center justify-center text-center" : ""
      )}
    >
    {/* Card Glow Background */}
    <div className={cn("absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500", color)} />
    
    <div className={cn("mb-1 sm:mb-2 relative z-10 w-full", centered ? "" : "flex items-center justify-between")}>
      <span className="text-[8px] sm:text-[10px] uppercase tracking-[0.2em] text-white/60 font-black">{label}</span>
      {/* Pulse dot for dynamic feel */}
      <span className={cn("absolute top-0 right-0 w-1.5 h-1.5 rounded-full animate-pulse", color.replace('text-', 'bg-'))} />
    </div>
    <div className={cn("text-base sm:text-lg md:text-xl font-black font-montserrat tracking-tight relative z-10 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]", color.replace('bg-', 'text-'))}>
      <Counter value={numericValue} prefix={prefix} suffix={suffix} decimals={decimals} delay={0} />
    </div>
    
    {/* Subtle Glow */}
    <div className={cn("absolute -bottom-4 -right-4 w-16 h-16 blur-xl opacity-20 group-hover:opacity-40 transition-opacity rounded-full", color)} />
  </motion.div>
);

export const PerformanceDashboard = () => {
  return (
    <div className="w-full h-full p-3 sm:p-5 flex flex-col gap-3 sm:gap-4 bg-[#050505] rounded-3xl overflow-hidden relative">
      {/* Header */}
      <div className="flex flex-col items-center justify-center mb-2 sm:mb-4 relative py-2">
        <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <div className="absolute inset-0 bg-primary/10 blur-xl rounded-full" />
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-base sm:text-lg md:text-xl font-black tracking-[0.3em] uppercase text-center px-4 relative z-10 leading-tight bg-[#050505] rounded-full"
        >
          <span className="text-white/70 text-[10px] sm:text-xs tracking-[0.5em] block mb-1">Impacto Real</span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#14a3e5] via-white to-[#14a3e5] bg-[length:200%_auto] animate-shimmer drop-shadow-[0_0_15px_rgba(20,163,229,0.8)]">
            Escala Ads
          </span>
          <motion.span 
            animate={{ opacity: [0, 1, 0] }} 
            transition={{ repeat: Infinity, duration: 1 }} 
            className="inline-block w-2 sm:w-3 h-4 sm:h-5 bg-primary ml-1 translate-y-1 shadow-[0_0_10px_rgba(20,163,229,1)]" 
          />
        </motion.h2>
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
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative p-4 sm:p-5 rounded-2xl bg-emerald-900/20 border border-emerald-500/30 overflow-hidden group will-change-transform transform-gpu shadow-[0_0_40px_rgba(52,211,153,0.15)] flex flex-col items-center justify-center text-center mb-2 hover:border-emerald-500/50 transition-all duration-300"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 to-transparent pointer-events-none" />
        <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
        
        <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-emerald-400 font-black mb-1 relative z-10 flex items-center justify-center gap-2">
           <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
           Faturamento
        </span>
        
        <div className="text-2xl sm:text-3xl md:text-4xl font-montserrat text-emerald-400 font-black drop-shadow-[0_0_30px_rgba(52,211,153,0.5)] relative z-10 break-all sm:break-normal text-center">
          <Counter value={478009.54} prefix="R$ " decimals={2} />
        </div>

        {/* Scanner Line for Main Card */}
        <motion.div 
          animate={{ left: ['-100%', '200%'] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 bottom-0 w-2 bg-gradient-to-b from-transparent via-emerald-400/50 to-transparent skew-x-12 pointer-events-none transform-gpu will-change-transform drop-shadow-[0_0_15px_rgba(52,211,153,0.8)]"
        />
      </motion.div>

      {/* Grid Metrics */}
      <div className="grid grid-cols-2 gap-2 sm:gap-3">
        <MetricCard label="Gasto Ads" numericValue={46897.51} prefix="R$ " decimals={2} color="bg-red-500" />
        <MetricCard label="ROAS" numericValue={10.19} suffix="x" decimals={2} color="bg-yellow-400" />
        
        <MetricCard label="Ticket Médio" numericValue={194.87} prefix="R$ " decimals={2} color="bg-emerald-400" />
        <MetricCard label="CPA Médio" numericValue={19.12} prefix="R$ " decimals={2} color="bg-indigo-400" />
        
        <MetricCard label="Conversões" numericValue={2.5} suffix="k" decimals={1} color="bg-cyan-400" />
        <MetricCard label="Taxa Conv." numericValue={17.00} suffix="%" decimals={2} color="bg-pink-500" />
        
        <MetricCard label="Cliques" numericValue={14.4} suffix="k" decimals={1} color="bg-orange-500" />
        <MetricCard label="CTR Médio" numericValue={0.28} suffix="%" decimals={2} color="bg-purple-400" />
        
        <MetricCard label="CPC Médio" numericValue={3.25} prefix="R$ " decimals={2} color="bg-cyan-400" />
        <MetricCard label="Impressões" numericValue={5.2} suffix="M" decimals={1} color="bg-blue-400" />
      </div>

      {/* Alcance */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-2 p-3 sm:p-4 rounded-xl bg-blue-900/10 border border-blue-500/20 flex flex-col items-center justify-center shadow-[0_4px_30px_rgba(59,130,246,0.15)] relative overflow-hidden group hover:border-blue-500/40 transition-all duration-300"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
        <span className="text-[10px] sm:text-xs text-blue-400/80 font-black tracking-[0.2em] uppercase mb-1 relative z-10 flex items-center justify-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
          Alcance
        </span>
        <div className="text-xl sm:text-2xl font-montserrat text-blue-400 font-black drop-shadow-[0_0_20px_rgba(96,165,250,0.6)] relative z-10">
          <Counter value={2.5} suffix="M" decimals={1} />
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

