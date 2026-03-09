import React from 'react';
import { motion } from 'motion/react';
import { Quote, Star, MessageCircle } from 'lucide-react';

const testimonials = [
  {
    name: 'Allan',
    role: 'CEO New York Chicken',
    content: 'A Nathan Filmes transformou nosso lançamento. O ROAS de 8.88x superou todas as nossas expectativas para uma marca nova em um mercado tão saturado.',
    avatar: 'https://i.pravatar.cc/150?u=allan',
    logo: 'https://i.imgur.com/B5HdJ4K.png',
    accentColor: '#FFCC00'
  },
  {
    name: 'Cristiano',
    role: 'Proprietário Espetinho na Brasa',
    content: 'Saímos de um faturamento estagnado para mais de R$ 25k mensais. O tráfego pago foi o divisor de águas para o crescimento exponencial do nosso delivery.',
    avatar: 'https://i.pravatar.cc/150?u=cristiano',
    logo: 'https://i.imgur.com/iorC73i.png',
    accentColor: '#f97316'
  },
  {
    name: 'William',
    role: 'Gerente de Marketing Valle Fibra',
    content: 'Dominamos nossa região. O custo por aquisição caiu drasticamente e hoje somos a principal referência em internet fibra na nossa área de atuação.',
    avatar: 'https://i.pravatar.cc/150?u=william',
    logo: 'https://i.imgur.com/3BRZHVb.png',
    accentColor: '#10b981'
  },
  {
    name: 'Aline',
    role: 'Diretora Executiva Móveis Camilo',
    content: 'O retorno sobre o investimento foi impressionante. Nossas peças de alto padrão agora chegam ao público certo, com uma eficiência que nunca tivemos antes.',
    avatar: 'https://i.pravatar.cc/150?u=aline',
    logo: 'https://i.imgur.com/xwDv0Ow.png',
    accentColor: '#c2a353'
  },
  {
    name: 'Iasmim',
    role: 'Personal Chef',
    content: 'Minha agenda nunca esteve tão cheia. O foco em clientes de alto padrão trouxe exatamente o público que eu sempre quis atender.',
    avatar: 'https://i.pravatar.cc/150?u=iasmim',
    logo: 'https://i.imgur.com/QU9x4nP.png',
    accentColor: '#ec4899'
  },
  {
    name: 'Nathan',
    role: 'Fundador Nathan Filmes',
    content: 'Nossas vendas de acessórios e serviços de estética automotiva explodiram. A estratégia de tráfego visual foi perfeita para o nosso nicho.',
    avatar: 'https://i.pravatar.cc/150?u=nathan',
    logo: 'https://i.imgur.com/QOElzLc.png',
    accentColor: '#ef4444'
  }
];

export const Testimonials = () => {
  return (
    <section id="depoimentos" className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(20,163,229,0.05),transparent_70%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black tracking-tighter mb-4"
          >
            QUEM <span className="text-primary">ESCALOU</span> CONOSCO
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-neutral max-w-2xl mx-auto"
          >
            Resultados reais de empresas que confiaram na nossa estratégia de elite para dominar seus mercados.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50, scale: 0.9, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.8, 
                delay: i * 0.15,
                ease: [0.22, 1, 0.36, 1]
              }}
              whileHover={{ 
                y: -10,
                boxShadow: `0 20px 40px -20px ${t.accentColor}40`,
                borderColor: `${t.accentColor}40`
              }}
              className="bg-white/5 border border-white/10 p-8 rounded-2xl relative group hover:bg-white/10 transition-all duration-500 flex flex-col h-full will-change-transform transform-gpu"
            >
              <div 
                className="absolute top-0 left-0 w-1 h-0 group-hover:h-full transition-all duration-500 rounded-l-2xl"
                style={{ backgroundColor: t.accentColor }}
              />
              
              <Quote 
                className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity" 
                size={40} 
                style={{ color: t.accentColor }}
              />

              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <div 
                    className="absolute -inset-1 rounded-full blur-sm opacity-0 group-hover:opacity-50 transition-opacity"
                    style={{ backgroundColor: t.accentColor }}
                  />
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-14 h-14 rounded-full flex items-center justify-center relative border border-white/20 text-xl font-black text-white shadow-lg overflow-hidden group-hover:border-primary/50 transition-colors"
                    style={{ 
                      backgroundColor: `${t.accentColor}20`,
                      color: t.accentColor
                    }}
                  >
                    <motion.span
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      {t.name.charAt(0)}
                    </motion.span>
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
                  </motion.div>
                </div>
                <div>
                  <h4 className="font-bold text-white group-hover:text-primary transition-colors">{t.name}</h4>
                  <p className="text-[10px] text-gray-neutral uppercase tracking-widest">{t.role}</p>
                </div>
              </div>

              <p className="text-gray-neutral text-sm leading-relaxed mb-6 italic">
                "{t.content}"
              </p>

              <div className="flex gap-1 mb-8">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0, rotate: -45 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      type: "spring",
                      stiffness: 400,
                      damping: 15,
                      delay: 0.4 + (i * 0.1) 
                    }}
                  >
                    <Star size={14} className="fill-primary text-primary" />
                  </motion.div>
                ))}
              </div>

              <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
                <div className="h-8 flex items-center">
                  <img 
                    src={t.logo} 
                    alt="Company Logo" 
                    className="h-full object-contain grayscale md:grayscale group-hover:grayscale-0 transition-all duration-500 opacity-100 md:opacity-50 group-hover:opacity-100"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div 
                  className="text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full bg-white/5"
                  style={{ color: t.accentColor }}
                >
                  Case de Sucesso
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
