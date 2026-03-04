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
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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
                animate={!isMobile ? { 
                  opacity: [0, 1, 0],
                  x: [-2, 2, -2],
                  scaleY: [1, 1.1, 1]
                } : { opacity: 0 }}
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
                  {!isMobile && (
                    <motion.div 
                      animate={{ scale: [1, 1.5, 1], opacity: [0, 0.5, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                      className="absolute inset-0 bg-primary/40 rounded-full blur-md"
                    />
                  )}
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
          className="relative perspective-1000 space-y-6"
        >
          {/* Performance Card */}
          <div className="glass p-8 rounded-3xl border-primary/20 relative z-10 overflow-hidden group">
            {/* Scanner Line */}
            {!isMobile && (
              <motion.div 
                animate={{ top: ['-10%', '110%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent z-20 pointer-events-none"
              />
            )}

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
                { label: 'ROAS Médio', value: 85, color: 'bg-emerald-500', text: 'text-emerald-500' },
                { label: 'Taxa de Conversão', value: 92, color: 'bg-blue-500', text: 'text-blue-500' },
                { label: 'Escalabilidade', value: 78, color: 'bg-violet-500', text: 'text-violet-500' },
                { label: 'Eficiência de Gasto', value: 96, color: 'bg-amber-500', text: 'text-amber-500' }
              ].map((metric, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between text-[10px] uppercase tracking-widest text-white/50">
                    <span>{metric.label}</span>
                    <div className="flex items-center gap-2">
                      <motion.span 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className={cn("font-bold", metric.text)}
                      >
                        {metric.value}%
                      </motion.span>
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                        className={cn("w-1 h-1 rounded-full", metric.color)}
                      />
                    </div>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${metric.value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 2, delay: 0.5 + (i * 0.1), ease: "circOut" }}
                      className={cn("h-full relative", metric.color)}
                    >
                      <motion.div 
                        animate={{ x: ['-100%', '100%'] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      />
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>

            {/* Live Feed Simulation */}
            <div className="mt-8 pt-6 border-t border-white/5">
              <div className="text-[10px] uppercase tracking-[0.2em] text-white/30 mb-4 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Atividade do Time de Elite</span>
                </div>
                <span className="text-primary font-mono text-[8px] opacity-50">UPLINK: ACTIVE</span>
              </div>
              <div className="space-y-2 font-mono">
                {[
                  { user: 'Sócio Gestor', action: 'Otimizando ROAS', target: 'Valle Fibra', time: 'Agora', status: 'SUCCESS' },
                  { user: 'Analista Sênior', action: 'Escalando Budget', target: 'NYCC', time: '2min', status: 'PROCESSING' },
                  { user: 'Estrategista', action: 'Novo Funil Ativo', target: 'Móveis Camilo', time: '5min', status: 'STABLE' }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 + (i * 0.2) }}
                    className="flex items-center justify-between text-[8px] bg-white/5 p-2 rounded border border-white/5 hover:border-primary/20 transition-colors group/item"
                  >
                    <div className="flex items-center gap-2">
                      <span className={cn(
                        "text-[7px] px-1 rounded border",
                        item.status === 'SUCCESS' ? 'border-emerald-500/50 text-emerald-500' :
                        item.status === 'PROCESSING' ? 'border-blue-500/50 text-blue-500 animate-pulse' :
                        'border-white/20 text-white/40'
                      )}>
                        {item.status}
                      </span>
                      <span className="text-white/70 font-bold">{item.user}</span>
                      <span className="text-white/40">{item.action}</span>
                      <span className="text-primary/80">[{item.target}]</span>
                    </div>
                    <span className="text-white/20 italic">{item.time}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* System Status Bar */}
            <div className="mt-6 flex items-center justify-between text-[7px] font-mono text-white/20 uppercase tracking-widest">
              <div className="flex gap-4">
                <span>CPU: 12%</span>
                <span>MEM: 4.2GB</span>
                <span>LATENCY: 14MS</span>
              </div>
              <motion.span 
                animate={{ opacity: [0.2, 1, 0.2] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Secure Connection Established
              </motion.span>
            </div>

            {/* Background Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
              style={{ backgroundImage: 'radial-gradient(circle, #14a3e5 1px, transparent 1px)', backgroundSize: '20px 20px' }} 
            />

            {/* Subtle Data Stream Animation */}
            {!isMobile && (
              <div className="absolute inset-0 pointer-events-none opacity-10 overflow-hidden">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ top: '-10%', left: `${20 * i}%` }}
                    animate={{ top: '110%' }}
                    transition={{ 
                      duration: 5 + Math.random() * 5, 
                      repeat: Infinity, 
                      ease: "linear",
                      delay: Math.random() * 5
                    }}
                    className="absolute w-px h-20 bg-gradient-to-b from-transparent via-primary to-transparent"
                  />
                ))}
              </div>
            )}
          </div>

          {/* Floating Stats */}
          <div className="grid grid-cols-2 gap-4 relative z-20">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="glass p-4 rounded-2xl border-emerald-500/20 flex flex-col items-center justify-center text-center group"
            >
              <div className="text-[10px] uppercase tracking-widest text-emerald-500 mb-1 group-hover:scale-110 transition-transform">ROI Global</div>
              <div className="text-2xl font-black text-white">+R$ 2.4M</div>
              <div className="text-[8px] text-white/30 uppercase mt-1">Gerenciados/Mês</div>
              <div className="w-full h-1 bg-emerald-500/10 rounded-full mt-2 overflow-hidden">
                <motion.div 
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-1/2 h-full bg-emerald-500"
                />
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="glass p-4 rounded-2xl border-primary/20 flex flex-col items-center justify-center text-center group"
            >
              <div className="text-[10px] uppercase tracking-widest text-primary mb-1 group-hover:scale-110 transition-transform">Retenção</div>
              <div className="text-2xl font-black text-white">98.4%</div>
              <div className="text-[8px] text-white/30 uppercase mt-1">Satisfação Elite</div>
              <div className="w-full h-1 bg-primary/10 rounded-full mt-2 overflow-hidden">
                <motion.div 
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                  className="w-1/2 h-full bg-primary"
                />
              </div>
            </motion.div>
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
