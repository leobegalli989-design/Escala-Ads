import React from 'react';
import { motion } from 'motion/react';
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
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
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
            className="text-4xl md:text-6xl font-black"
          >
            FUNDAMENTOS DA <span className="text-primary">ELITE</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: pillar.delay, duration: 0.8 }}
              whileHover={{ y: -10 }}
              className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/30 transition-all duration-500"
            >
              <motion.div 
                className="w-14 h-14 rounded-xl bg-black flex items-center justify-center mb-6 border border-white/10 group-hover:scale-110 transition-transform duration-500"
                style={{ boxShadow: `0 0 20px ${pillar.color}20` }}
                animate={typeof window !== 'undefined' && window.innerWidth >= 1024 ? { 
                  y: [0, -5, 0],
                } : {}}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: index * 0.5
                }}
              >
                <pillar.icon style={{ color: pillar.color }} size={28} />
              </motion.div>
              
              <motion.h3 
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: pillar.delay + 0.2 }}
                className="text-xl font-bold mb-4 text-white group-hover:text-primary transition-colors"
              >
                {pillar.title}
              </motion.h3>
              
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: pillar.delay + 0.4 }}
                className="text-gray-neutral text-sm leading-relaxed"
              >
                {pillar.description}
              </motion.p>

              {/* Decorative line */}
              <div 
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent w-0 group-hover:w-full transition-all duration-700"
                style={{ backgroundColor: pillar.color }}
              />
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
