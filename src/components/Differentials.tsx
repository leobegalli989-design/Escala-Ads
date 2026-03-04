import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import { cn } from '../lib/utils';

const differentials = [
  'Estratégia orientada a dados reais',
  'Performance mensurável em tempo real',
  'Crescimento previsível e escalável',
  'Atendimento consultivo direto com sócios',
  'Foco total em lucro, não em métricas de vaidade',
  'Tecnologia proprietária de análise de dados',
];

export const Differentials = () => {
  return (
    <section className="py-24 relative bg-black overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-primary text-xs tracking-[0.5em] uppercase mb-4">Diferenciais</div>
          <motion.h2 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-4xl md:text-6xl mb-8 font-black tracking-tighter"
          >
            POR QUE <br />
            <span className="text-primary relative inline-block">
              SOMOS ELITE?
              <motion.span 
                animate={{ 
                  opacity: [0, 1, 0],
                  x: [-2, 2, -2],
                  scaleY: [1, 1.1, 1]
                }}
                transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 3 }}
                className="absolute inset-0 text-white/20 blur-[1px] pointer-events-none"
              >
                SOMOS ELITE?
              </motion.span>
            </span>
          </motion.h2>
          <p className="text-gray-neutral text-lg mb-10">
            Enquanto outros focam em curtidas e impressões, nós focamos na única métrica que importa: o dinheiro no seu bolso e a escala do seu negócio.
          </p>
          
          <div className="grid sm:grid-cols-2 gap-6">
            {differentials.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ x: 10, scale: 1.02 }}
                className="flex items-center gap-3 group cursor-default"
              >
                <div className="relative">
                  <CheckCircle2 className="text-primary shrink-0 group-hover:scale-125 transition-transform duration-300" size={20} />
                  <motion.div 
                    animate={{ scale: [1, 1.5, 1], opacity: [0, 0.5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                    className="absolute inset-0 bg-primary/40 rounded-full blur-md"
                  />
                </div>
                <span className="text-sm text-white/80 group-hover:text-white group-hover:font-bold transition-all duration-300">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotateY: 20 }}
          whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, type: "spring" }}
          className="relative perspective-1000"
        >
          <div className="glass p-8 rounded-3xl border-primary/20 relative z-10 overflow-hidden group">
            {/* Scanner Line */}
            <motion.div 
              animate={{ top: ['-10%', '110%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent z-20 pointer-events-none"
            />

            <div className="flex items-center justify-between mb-8">
              <div className="text-xs uppercase tracking-widest text-primary font-bold flex items-center gap-2">
                <motion.div 
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_#14a3e5]"
                />
                Performance Real-Time
              </div>
              <div className="flex gap-2">
                <div className="w-2 h-2 rounded-full bg-red-500/50" />
                <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                <div className="w-2 h-2 rounded-full bg-green-500/50" />
              </div>
            </div>
            
            <div className="space-y-6">
              {[
                { label: 'ROAS Médio', value: 85, color: 'bg-emerald-500', text: 'text-emerald-500', shadow: 'shadow-emerald-500/50' },
                { label: 'Conversão', value: 92, color: 'bg-blue-500', text: 'text-blue-500', shadow: 'shadow-blue-500/50' },
                { label: 'Escalabilidade', value: 78, color: 'bg-violet-500', text: 'text-violet-500', shadow: 'shadow-violet-500/50' }
              ].map((metric, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between text-[10px] uppercase tracking-widest text-white/50">
                    <span>{metric.label}</span>
                    <motion.span 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      className={cn("font-bold", metric.text)}
                    >
                      {metric.value}%
                    </motion.span>
                  </div>
                  <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${metric.value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 2, delay: 0.5, ease: "circOut" }}
                      className={cn("h-full relative", metric.color)}
                    >
                      <div className={cn("absolute inset-0 blur-sm opacity-50", metric.color)} />
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>

            {/* Background Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
              style={{ backgroundImage: 'radial-gradient(circle, #14a3e5 1px, transparent 1px)', backgroundSize: '20px 20px' }} 
            />
          </div>
          
          {/* Decorative Elements */}
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -top-12 -right-12 w-48 h-48 bg-primary/20 blur-3xl rounded-full" 
          />
          <motion.div 
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.05, 0.15, 0.05] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute -bottom-12 -left-12 w-64 h-64 bg-primary/10 blur-[100px] rounded-full" 
          />
        </motion.div>
      </div>
    </section>
  );
};
