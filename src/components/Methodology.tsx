import React from 'react';
import { motion } from 'motion/react';
import { Search, Map, Play, RefreshCcw, Trophy } from 'lucide-react';
import { cn } from '../lib/utils';

const steps = [
  {
    icon: Search,
    title: 'Diagnóstico estratégico',
    desc: 'Análise profunda do seu negócio, concorrentes e público-alvo para identificar gargalos.',
    color: '#14a3e5'
  },
  {
    icon: Map,
    title: 'Planejamento de crescimento',
    desc: 'Criação do roadmap de escala com metas claras e canais de aquisição definidos.',
    color: '#10b981'
  },
  {
    icon: Play,
    title: 'Execução de performance',
    desc: 'Implementação ágil de campanhas, funis e criativos de alta conversão.',
    color: '#8b5cf6'
  },
  {
    icon: RefreshCcw,
    title: 'Otimização contínua',
    desc: 'Ajustes diários baseados em dados para reduzir o CAC e aumentar o LTV.',
    color: '#f59e0b'
  },
  {
    icon: Trophy,
    title: 'Escalas de dominação',
    desc: 'Aceleração total do investimento para consolidar sua liderança no mercado.',
    color: '#ef4444'
  },
];

export const Methodology = () => {
  return (
    <section id="methodology" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="text-primary text-xs tracking-[0.5em] uppercase mb-4">O Processo</div>
          <h2 className="text-4xl md:text-6xl">METODOLOGIA <span className="text-primary">ESCALA</span></h2>
        </div>

        <div className="relative">
          {/* Vertical Line for Mobile */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/10 to-transparent md:-translate-x-1/2" />

          <div className="space-y-12 md:space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row items-start md:items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="flex-1 md:text-right hidden md:block">
                  {index % 2 === 0 && (
                    <div className="pr-12">
                      <h3 className="text-2xl mb-2 font-bold" style={{ color: step.color }}>{step.title}</h3>
                      <p className="text-gray-neutral text-sm">
                        {step.desc.split(' ').map((word, i) => (
                          <span key={i} className={i % 5 === 0 ? 'text-white font-medium' : ''}>
                            {word}{' '}
                          </span>
                        ))}
                      </p>
                    </div>
                  )}
                </div>

                <motion.div 
                  className="relative z-10 flex items-center justify-center w-10 h-10 md:w-20 md:h-20 rounded-2xl bg-black border-2 transition-all duration-500 group overflow-hidden"
                  style={{ borderColor: step.color, boxShadow: `0 0 30px ${step.color}30` }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {/* Scanning Line Effect */}
                  <motion.div 
                    className="absolute top-0 left-0 w-full h-[2px] bg-white/20"
                    animate={{ top: ['0%', '100%', '0%'] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  />
                  
                  <step.icon style={{ color: step.color }} size={32} className="group-hover:scale-110 transition-transform relative z-10" />
                  <div className="absolute -top-2 -right-2 text-[10px] font-bold text-black px-2 py-0.5 rounded-bl-lg z-20" style={{ backgroundColor: step.color }}>0{index + 1}</div>
                  
                  {/* Inner Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
                </motion.div>

                <div className="flex-1 md:text-left">
                  <div className={cn(
                    "md:pl-12",
                    index % 2 === 0 ? "hidden md:block opacity-0" : "block"
                  )}>
                    <h3 className="text-2xl mb-2 font-bold" style={{ color: step.color }}>{step.title}</h3>
                    <p className="text-gray-neutral text-sm">
                      {step.desc.split(' ').map((word, i) => (
                        <span key={i} className={i % 5 === 0 ? 'text-white font-medium' : ''}>
                          {word}{' '}
                        </span>
                      ))}
                    </p>
                  </div>
                  {/* Mobile version for even steps */}
                  {index % 2 === 0 && (
                    <div className="md:hidden">
                      <h3 className="text-2xl mb-2 font-bold" style={{ color: step.color }}>{step.title}</h3>
                      <p className="text-gray-neutral text-sm">
                        {step.desc.split(' ').map((word, i) => (
                          <span key={i} className={i % 5 === 0 ? 'text-white font-medium' : ''}>
                            {word}{' '}
                          </span>
                        ))}
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
