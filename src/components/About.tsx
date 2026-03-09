import React from 'react';
import { motion } from 'motion/react';
import { Target, TrendingUp, ShieldCheck, Zap } from 'lucide-react';

const AboutCard = ({ icon: Icon, title, description, delay, color }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ 
        scale: 1.02, 
        y: -5,
        boxShadow: `0 20px 40px -20px ${color}40`,
        borderColor: `${color}40`
      }}
      whileTap={{ scale: 0.98 }}
      viewport={{ once: true }}
      transition={{ 
        delay,
        type: "spring",
        stiffness: 400,
        damping: 25
      }}
      className="glass p-8 rounded-2xl border-white/5 transition-all group relative overflow-hidden will-change-transform transform-gpu"
    >
    <div 
      className="w-12 h-12 rounded-lg flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110"
      style={{ backgroundColor: `${color}15`, color: color }}
    >
      <Icon size={24} />
    </div>
    <h3 className="text-xl mb-4 group-hover:text-white transition-colors font-bold">{title}</h3>
    <p className="text-gray-neutral text-sm leading-relaxed group-hover:text-white/80 transition-colors">{description}</p>
    
    {/* Colorful Corner Glow */}
    <div 
      className="absolute -bottom-10 -right-10 w-32 h-32 blur-3xl rounded-full opacity-0 group-hover:opacity-30 transition-all duration-500 pointer-events-none"
      style={{ backgroundColor: color }}
    />
    </motion.div>
  );
};

export const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <div className="text-primary text-xs tracking-[0.4em] uppercase mb-4">A Agência</div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl mb-8 leading-tight">
              ESTRATÉGIA QUE <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400 font-black">TRANSFORMA</span> <br className="hidden sm:block" />
              DADOS EM <span className="text-emerald-400 italic">LUCRO.</span>
            </h2>
            <p className="text-gray-neutral text-base sm:text-lg mb-8">
              Nascemos no epicentro da revolução digital com um único propósito: destruir a mediocridade do marketing tradicional e implementar sistemas de <span className="text-primary font-bold shadow-[0_0_15px_rgba(20,163,229,0.3)]">escala agressiva.</span>
            </p>
            <div className="flex gap-8 justify-center lg:justify-start">
              <div>
                <div className="text-2xl sm:text-3xl font-montserrat text-white mb-1">98%</div>
                <div className="text-[10px] text-primary uppercase tracking-widest">Retenção</div>
              </div>
              <div className="w-px h-12 bg-white/10" />
              <div>
                <div className="text-2xl sm:text-3xl font-montserrat text-white mb-1">10X</div>
                <div className="text-[10px] text-primary uppercase tracking-widest">ROI Médio</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12 lg:mt-0"
          >
            <div className="space-y-4">
              <AboutCard
                icon={Target}
                title="Estratégia"
                description="Planejamento cirúrgico focado em canais de alta conversão."
                delay={0.1}
                color="#14a3e5"
              />
              <AboutCard
                icon={TrendingUp}
                title="Performance"
                description="Otimização em tempo real baseada em KPIs de negócio."
                delay={0.2}
                color="#10b981"
              />
            </div>
            <div className="space-y-4 sm:mt-8">
              <AboutCard
                icon={ShieldCheck}
                title="Previsibilidade"
                description="Sistemas de vendas que funcionam como um relógio suíço."
                delay={0.3}
                color="#8b5cf6"
              />
              <AboutCard
                icon={Zap}
                title="Escala"
                description="Capacidade técnica para escalar orçamentos sem perder eficiência."
                delay={0.4}
                color="#f59e0b"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
