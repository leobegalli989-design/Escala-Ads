import React, { useEffect } from 'react';
import { motion, useMotionValue, animate, useInView } from 'motion/react';
import { BarChart3, TrendingUp, Users, Target, MousePointer2, Eye, Zap, ArrowUpRight } from 'lucide-react';
import { cn } from '../lib/utils';

const Counter = ({ value, duration = 2, prefix = '', suffix = '', decimals = 0, delay = 0 }: any) => {
  const [displayValue, setDisplayValue] = React.useState(`${prefix}${Number(0).toLocaleString('pt-BR', { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}${suffix}`);
  const count = useMotionValue(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20px" });
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

const MetricCard = ({ label, value, numericValue, prefix, suffix, decimals, color, icon: Icon, delay }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
    whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
    viewport={{ once: true, margin: "-20px" }}
    transition={{ duration: 0.8, delay: delay * 0.2, ease: "easeOut" }}
    whileHover={{ scale: 1.05, zIndex: 10 }}
    className="relative p-4 rounded-xl bg-white/5 border border-white/10 overflow-hidden group hover:border-primary/50 transition-all duration-500 will-change-transform transform-gpu"
  >
    {/* Card Glow Background */}
    <div className={cn("absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500", color)} />
    
    <div className="flex items-center justify-between mb-2 relative z-10">
      <div className="flex items-center gap-2">
        <motion.div 
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity, delay: delay }}
          className={cn("w-1.5 h-1.5 rounded-full shadow-[0_0_8px_currentColor] transform-gpu will-change-opacity", color.replace('bg-', 'text-'))} 
        />
        <span className="text-[9px] uppercase tracking-[0.2em] text-white/40 font-black">{label}</span>
      </div>
      {Icon && <Icon size={12} className={cn("transition-all duration-500 group-hover:scale-125", color.replace('bg-', 'text-'))} />}
    </div>
    <div className={cn("text-xl font-black font-montserrat tracking-tight relative z-10", color.replace('bg-', 'text-'))}>
      <Counter value={numericValue} prefix={prefix} suffix={suffix} decimals={decimals} delay={delay} />
    </div>
    
    {/* Subtle Glow */}
    <div className={cn("absolute -bottom-4 -right-4 w-12 h-12 blur-2xl opacity-10 group-hover:opacity-60 transition-opacity rounded-full", color)} />
    
    {/* Border Shimmer */}
    <motion.div 
      animate={{ left: ['-100%', '200%'] }}
      transition={{ duration: 3, repeat: Infinity, repeatDelay: Math.random() * 5 }}
      className="absolute top-0 h-px w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none transform-gpu will-change-transform"
    />
  </motion.div>
);

export const PerformanceDashboard = () => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="w-full h-full p-6 flex flex-col gap-4">
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/20 rounded-lg shadow-[0_0_15px_rgba(20,163,229,0.2)]">
            <BarChart3 className="text-primary" size={22} />
          </div>
          <h3 className="text-xl font-montserrat tracking-[0.2em] uppercase font-black text-white">Resumo de Performance</h3>
        </div>
        <div className="flex flex-col items-end">
          <span className="text-[9px] text-primary font-black tracking-[0.3em] uppercase">Gestão</span>
          <span className="text-[11px] text-emerald-400 font-black tracking-[0.1em] uppercase drop-shadow-[0_0_8px_rgba(52,211,153,0.5)]">Escala Ads</span>
        </div>
      </div>

      {/* Main Metric: Faturamento */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative p-6 rounded-2xl bg-black/40 backdrop-blur-xl border border-emerald-500/30 overflow-hidden group will-change-transform transform-gpu"
      >
        {/* Background Data Stream Effect */}
        <div className="absolute inset-0 opacity-5 pointer-events-none overflow-hidden">
          {Array.from({ length: isMobile ? 3 : 10 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ y: -100 }}
              animate={{ y: 400 }}
              transition={{ 
                duration: isMobile ? 10 : Math.random() * 5 + 5, 
                repeat: Infinity, 
                ease: "linear",
                delay: Math.random() * 5
              }}
              className="absolute text-[8px] font-mono text-emerald-400 whitespace-nowrap transform-gpu will-change-transform"
              style={{ left: `${i * (isMobile ? 33 : 10)}%` }}
            >
              {Array.from({ length: isMobile ? 10 : 20 }).map(() => Math.floor(Math.random() * 2)).join('')}
            </motion.div>
          ))}
        </div>

        <div className="flex items-center justify-between mb-4 relative z-10">
          <div className="flex items-center gap-2">
            <motion.div 
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399]" 
            />
            <span className="text-[10px] uppercase tracking-[0.4em] text-emerald-400 font-black">Faturamento Total</span>
          </div>
          <div className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-[8px] text-emerald-400 font-black uppercase tracking-widest">
            Live Data
          </div>
        </div>

        <div className="text-5xl md:text-6xl font-montserrat text-emerald-400 font-black text-glow mb-6 relative z-10">
          <Counter value={322257.05} prefix="R$ " decimals={2} delay={0.2} />
        </div>
        
        {/* Animated Graph Line */}
        <div className="h-24 w-full relative mt-4 z-10">
          <svg className="w-full h-full" viewBox="0 -5 400 70" preserveAspectRatio="none">
            <motion.path
              d="M0 55 Q 50 50, 80 35 T 150 40 T 220 20 T 300 30 T 400 10"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              className="text-emerald-400"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 3, ease: "easeInOut", delay: 0.5 }}
            />
            <motion.path
              d="M0 55 Q 50 50, 80 35 T 150 40 T 220 20 T 300 30 T 400 10 V 65 H 0 Z"
              fill="url(#emerald-gradient)"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.2 }}
              transition={{ delay: 1.5, duration: 1 }}
            />
            <defs>
              <linearGradient id="emerald-gradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#10b981" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>
          </svg>
          
          {/* Moving Point on Path - Simplified */}
          <motion.div
            animate={{ 
              opacity: [0, 1, 0]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: "linear",
            }}
            className="absolute top-[21%] right-0 w-2 h-2 bg-white rounded-full shadow-[0_0_10px_#fff] z-20"
          />
        </div>

        {/* Scanner Line for Main Card */}
        <motion.div 
          animate={{ left: ['-100%', '200%'] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-emerald-400/30 to-transparent skew-x-12 pointer-events-none transform-gpu will-change-transform"
        />
      </motion.div>

      {/* Grid Metrics */}
      <div className="grid grid-cols-2 gap-3">
        <MetricCard label="Gasto Ads" numericValue={20986.83} prefix="R$ " decimals={2} color="bg-rose-500" icon={Zap} delay={0.4} />
        <MetricCard label="ROAS" numericValue={15.36} suffix="x" decimals={2} color="bg-amber-400" icon={TrendingUp} delay={0.8} />
        <MetricCard label="Ticket Médio" numericValue={211.87} prefix="R$ " decimals={2} color="bg-emerald-400" delay={1.2} />
        <MetricCard label="CPA Médio" numericValue={13.79} prefix="R$ " decimals={2} color="bg-blue-400" delay={1.6} />
        <MetricCard label="Conversões" numericValue={1.5} suffix="k" decimals={1} color="bg-cyan-400" icon={Target} delay={2.0} />
        <MetricCard label="Taxa Conv." numericValue={16.56} suffix="%" decimals={2} color="bg-fuchsia-400" delay={2.4} />
        <MetricCard label="Cliques" numericValue={9.2} suffix="k" decimals={1} color="bg-orange-400" icon={MousePointer2} delay={2.8} />
        <MetricCard label="CTR Médio" numericValue={0.34} suffix="%" decimals={2} color="bg-violet-400" delay={3.2} />
        <MetricCard label="CPC Médio" numericValue={2.28} prefix="R$ " decimals={2} color="bg-sky-400" delay={3.6} />
        <MetricCard label="Impressões" numericValue={2.7} suffix="M" decimals={1} color="bg-blue-500" icon={Eye} delay={4.0} />
        <MetricCard label="Alcance" numericValue={1.5} suffix="M" decimals={1} color="bg-indigo-500" icon={Users} delay={4.4} />
        
        {/* Growth Indicator */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 4.8 }}
          className="p-4 rounded-xl bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 border border-emerald-500/30 flex flex-col items-center justify-center text-center group"
        >
          <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center mb-2 shadow-[0_0_15px_rgba(52,211,153,0.5)] group-hover:scale-110 transition-transform">
            <ArrowUpRight className="text-black" size={20} />
          </div>
          <div className="text-[10px] uppercase tracking-widest text-emerald-400 font-bold mb-1">Crescimento</div>
          <div className="text-xl font-montserrat text-emerald-400 font-bold">
            <Counter value={340} prefix="+" suffix="%" decimals={0} delay={4.8} />
          </div>
        </motion.div>
      </div>

        {/* Scanner Effect Overlay */}
        {!isMobile && (
          <motion.div
            animate={{ top: ['-10%', '110%'] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            className="absolute left-0 right-0 h-[2px] bg-primary/30 shadow-[0_0_20px_rgba(20,163,229,1)] z-50 pointer-events-none"
          />
        )}
      
      {/* Random Glitch Overlay for the whole dashboard */}
      <motion.div
        animate={{ opacity: [0, 0.05, 0] }}
        transition={{ duration: 0.1, repeat: Infinity, repeatDelay: 5 }}
        className="absolute inset-0 bg-white pointer-events-none z-[60]"
      />
    </div>
  );
};
