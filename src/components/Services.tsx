import React from 'react';
import { motion } from 'motion/react';
import { 
  BarChart3, 
  Layers, 
  Share2, 
  PenTool, 
  Cpu, 
  Rocket 
} from 'lucide-react';

const services = [
  {
    icon: BarChart3,
    title: 'Gestão de Tráfego Pago',
    description: 'Anúncios de alta performance no Google, Meta e LinkedIn Ads focados em ROI real.',
    color: '#14a3e5', // Primary Blue
    accent: 'from-blue-500/20 to-transparent'
  },
  {
    icon: Layers,
    title: 'Funis de Vendas',
    description: 'Arquitetura de conversão completa, do lead frio à venda recorrente.',
    color: '#10b981', // Emerald
    accent: 'from-emerald-500/20 to-transparent'
  },
  {
    icon: Share2,
    title: 'Social Media Estratégico',
    description: 'Posicionamento de autoridade que gera desejo imediato pelo seu produto.',
    color: '#8b5cf6', // Violet
    accent: 'from-violet-500/20 to-transparent'
  },
  {
    icon: PenTool,
    title: 'Copywriting de Elite',
    description: 'Textos persuasivos baseados em neurociência e gatilhos mentais avançados.',
    color: '#f59e0b', // Amber
    accent: 'from-amber-500/20 to-transparent'
  },
  {
    icon: Cpu,
    title: 'Branding & Posicionamento',
    description: 'Construção de marcas premium que dominam a percepção de valor do mercado.',
    color: '#ef4444', // Red
    accent: 'from-red-500/20 to-transparent'
  },
  {
    icon: Rocket,
    title: 'Landing Pages High-End',
    description: 'Páginas ultra-rápidas com design focado em conversão máxima.',
    color: '#ec4899', // Pink
    accent: 'from-pink-500/20 to-transparent'
  },
];

export const Services = () => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section id="services" className="py-24 bg-black relative">
      <div className="absolute inset-0 bg-primary/5 blur-[120px] rounded-full -z-10 translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary text-xs tracking-[0.5em] uppercase mb-4"
          >
            Nossas Soluções
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-6xl"
          >
            ARSENAL DE <span className="text-primary">DOMINAÇÃO</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                y: -15, 
                scale: 1.05,
                rotateX: 5,
                rotateY: -5,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
              whileTap={{ scale: 0.95 }}
              className="group relative p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden perspective-1000 cursor-pointer will-change-transform transform-gpu"
            >
              {/* Background Accent Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
              
              {/* Animated Scanning Line */}
              <motion.div 
                className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-0 group-hover:opacity-100 z-20 pointer-events-none"
                animate={{ top: ['0%', '100%', '0%'] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
              />

              <div className="relative z-10">
                <div 
                  className="w-16 h-16 rounded-2xl bg-black flex items-center justify-center mb-8 border border-white/10 group-hover:border-white/40 group-hover:rotate-[15deg] group-hover:scale-110 transition-all duration-500 shadow-2xl relative overflow-hidden"
                  style={{ boxShadow: `0 0 30px ${service.color}30` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <service.icon style={{ color: service.color }} size={32} className="relative z-10" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 group-hover:translate-x-2 transition-transform duration-300" style={{ color: 'white' }}>
                  {service.title}
                </h3>
                
                <p className="text-gray-neutral text-sm leading-relaxed mb-8 group-hover:text-white/80 transition-colors">
                  {service.description.split(' ').map((word, i) => (
                    <span key={i} className={i % 4 === 0 ? 'group-hover:text-white font-medium' : ''}>
                      {word}{' '}
                    </span>
                  ))}
                </p>

                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] opacity-60 group-hover:opacity-100 transition-all" style={{ color: service.color }}>
                  Explorar Arsenal <Rocket size={12} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>

              {/* Floating Particles for each card */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 rounded-full opacity-0 group-hover:opacity-20"
                    style={{ backgroundColor: service.color }}
                    animate={{
                      x: [Math.random() * 300, Math.random() * 300],
                      y: [Math.random() * 300, Math.random() * 300],
                    }}
                    transition={{
                      duration: 2 + Math.random() * 2,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                  />
                ))}
              </div>

              {/* Colorful Glow */}
              <div 
                className="absolute -bottom-10 -right-10 w-32 h-32 blur-[60px] rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none"
                style={{ backgroundColor: service.color }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
