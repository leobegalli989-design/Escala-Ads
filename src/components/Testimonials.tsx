import React from 'react';
import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Ricardo Almeida',
    role: 'CEO, TechFlow',
    content: 'A Escala Ads mudou completamente o jogo para nós. Em 3 meses, nosso faturamento triplicou com a mesma verba de anúncios.',
    color: '#14a3e5'
  },
  {
    name: 'Juliana Costa',
    role: 'Diretora de Marketing, Elite Ed',
    content: 'A precisão estratégica deles é assustadora. Finalmente temos previsibilidade de leads e vendas todos os dias.',
    color: '#10b981'
  },
  {
    name: 'Marcos Vinícius',
    role: 'Fundador, Glow Luxury',
    content: 'Mais que uma agência, são parceiros estratégicos. O foco em lucro real é o que os diferencia de tudo que já vi.',
    color: '#8b5cf6'
  },
];

export const Testimonials = () => {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="text-primary text-xs tracking-[0.5em] uppercase mb-4">Depoimentos</div>
          <h2 className="text-4xl md:text-5xl">QUEM <span className="text-primary">ESCALOU</span> CONOSCO</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass p-10 rounded-3xl relative group border-white/5 hover:border-white/20 transition-all overflow-hidden"
            >
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500"
                style={{ background: `radial-gradient(circle at top right, ${item.color}, transparent)` }}
              />
              
              <Quote className="absolute top-6 right-6 opacity-10 group-hover:opacity-30 transition-opacity" size={40} style={{ color: item.color }} />
              
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-current" style={{ color: item.color }} />
                ))}
              </div>

              <p className="text-lg text-white/80 italic mb-8 leading-relaxed relative z-10">
                "{item.content}"
              </p>

              <div className="flex items-center gap-4 relative z-10">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center font-bold shadow-lg"
                  style={{ backgroundColor: `${item.color}20`, color: item.color, border: `1px solid ${item.color}40` }}
                >
                  {item.name[0]}
                </div>
                <div>
                  <div className="font-bold text-white">{item.name}</div>
                  <div className="text-xs uppercase tracking-widest font-bold" style={{ color: item.color }}>{item.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
