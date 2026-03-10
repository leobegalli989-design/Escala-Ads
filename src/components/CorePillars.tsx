import React from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';
import { Target, TrendingUp, Zap, BarChart } from 'lucide-react';

const pillars = [
  {
    icon: Target,
    title: 'KPIs de estratégia',
    description: 'Definição de métricas claras que realmente impactam o seu faturamento e margem de lucro.',
    color: '#14a3e5',
    delay: 0.1
  },
  {
    icon: TrendingUp,
    title: 'Previsibilidade',
    description: 'Modelos matemáticos e análise de dados para garantir que seu crescimento não seja obra do acaso.',
    color: '#10b981',
    delay: 0.2
  },
  {
    icon: Zap,
    title: 'Desempenho',
    description: 'Otimização agressiva de campanhas para extrair o máximo de performance de cada centavo investido.',
    color: '#8b5cf6',
    delay: 0.3
  },
  {
    icon: BarChart,
    title: 'Escala',
    description: 'Estruturação robusta para escalar seus investimentos sem perder a eficiência operacional.',
    color: '#ef4444',
    delay: 0.4
  }
];

export const CorePillars = () => {
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  
  const springX = useSpring(mouseX, { damping: 30, stiffness: 200 });
  const springY = useSpring(mouseY, { damping: 30, stiffness: 200 });

  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile) return;
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    mouseX.set((clientX - left) / width);
    mouseY.set((clientY - top) / height);
  };

  return (
    <section className="py-24 bg-black relative overflow-hidden" onMouseMove={handleMouseMove}>
      {/* Dynamic Background Glow */}
      <motion.div 
        style={{
          x: isMobile ? '50%' : springX,
          y: isMobile ? '50%' : springY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        className="absolute top-1/2 left-1/2 w-[600px] md:w-[800px] h-[600px] md:h-[800px] bg-primary/5 blur-[100px] md:blur-[150px] rounded-full pointer-events-none -z-10 will-change-transform"
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary text-xs tracking-[0.5em] uppercase mb-4"
          >
            Nossos Pilares
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-6xl font-black"
          >
            FUNDAMENTOS DA <span className="text-primary">ELITE</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: pillar.delay, duration: 0.5 }}
              whileHover={{ y: -12, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-primary/40 transition-all duration-500 overflow-hidden will-change-transform transform-gpu flex flex-col items-center sm:items-start text-center sm:text-left"
            >
              {/* Card Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Animated Border Glow */}
              <div className="absolute -inset-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500 -z-10" />

              <motion.div 
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-black/50 backdrop-blur-xl flex items-center justify-center mb-6 sm:mb-8 border border-white/10 group-hover:border-primary/30 transition-all duration-500 relative z-10 will-change-transform transform-gpu"
                style={{ 
                  boxShadow: `0 0 30px ${pillar.color}15`,
                }}
                animate={{ 
                  y: [0, -6, 0],
                  rotate: [0, 2, 0, -2, 0]
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: index * 0.7
                }}
              >
                <pillar.icon style={{ color: pillar.color }} size={28} className="sm:w-[32px] sm:h-[32px] relative z-10" />
                {/* Icon Glow */}
                <div className="absolute inset-0 bg-primary/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
              
              <div className="relative z-10">
                <h3 className="text-xl sm:text-2xl font-black mb-3 sm:mb-4 text-white group-hover:text-primary transition-colors tracking-tight">
                  {pillar.title}
                </h3>
                
                <p className="text-gray-neutral text-xs sm:text-sm leading-relaxed font-medium opacity-80 group-hover:opacity-100 transition-opacity">
                  {pillar.description}
                </p>
              </div>

              {/* Sophisticated Decorative Line */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] overflow-hidden">
                <motion.div 
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  className="w-full h-full bg-gradient-to-r from-transparent via-primary to-transparent will-change-transform transform-gpu"
                />
              </div>
              
              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background elements */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-primary/5 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-primary/5 blur-[120px] rounded-full -z-10" />
    </section>
  );
};
