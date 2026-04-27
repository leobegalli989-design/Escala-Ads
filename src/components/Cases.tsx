import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, TrendingUp, X, CheckCircle2, Eye, ChevronLeft, ChevronRight } from 'lucide-react';
import { AnimatedCounter } from './AnimatedCounter';
import { cn } from '../lib/utils';

import { CaseCharts } from './CaseCharts';

const cases = [
  {
    client: 'New York Chicken Crispy',
    result: '8.33x ROAS',
    accentColor: '#FFCC00',
    description: 'Faturamento de R$ 97.796,10 com R$ 11.738,29 de investimento em anúncios.',
    image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&q=80&w=800&fm=webp',
    fullDetails: {
      challenge: 'Lançamento de marca do zero em um mercado extremamente competitivo de delivery gastronômico.',
      strategy: 'Implementação de funil de vendas direto para WhatsApp e iFood, com foco em criativos cinematográficos de alto desejo e segmentação local ultra-precisa.',
      testimonial: {
        text: 'A Escala Ads transformou nosso lançamento. O ROAS superou todas as nossas expectativas para uma marca nova em um mercado tão saturado.',
        author: 'Allan',
        role: 'CEO Nyc Chicken Crispy'
      },
      metrics: [
        { label: 'Faturamento', value: 97796.10, prefix: 'R$ ', decimals: 2 },
        { label: 'Gasto Ads', value: 11738.29, prefix: 'R$ ', decimals: 2 },
        { label: 'ROAS', value: 8.33, suffix: 'x', decimals: 2 },
        { label: 'Ticket Médio', value: 90.80, prefix: 'R$ ', decimals: 2 },
        { label: 'CPA Médio', value: 10.90, prefix: 'R$ ', decimals: 2 },
        { label: 'Conversões', value: 1.1, suffix: 'k', decimals: 1 },
        { label: 'Taxa Conv.', value: 15.46, suffix: '%', decimals: 2 },
        { label: 'Cliques', value: 7.0, suffix: 'k', decimals: 1 },
        { label: 'CTR Médio', value: 0.37, suffix: '%', decimals: 2 },
        { label: 'CPC Médio', value: 1.69, prefix: 'R$ ', decimals: 2 },
        { label: 'Impressões', value: 1.9, suffix: 'M', decimals: 1 },
        { label: 'Alcance', value: 1.1, suffix: 'M', decimals: 1 },
      ]
    }
  },
  {
    client: 'Espetinho na Brasa',
    result: '3.66x ROAS',
    accentColor: '#f97316',
    description: 'Escalamos de R$ 4k para +R$ 25k/mês. Faturamento total com tráfego pago ultrapassando R$ 100.000.',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800&fm=webp',
    fullDetails: {
      challenge: 'Baixa previsibilidade de vendas, dependência de tráfego orgânico e faturamento estagnado em R$ 4.000 mensais.',
      strategy: 'Campanhas de geração de leads focadas em pedidos diretos no WhatsApp, otimização de criativos para delivery e remarketing agressivo para base de clientes.',
      testimonial: {
        text: 'Saímos de um faturamento estagnado para mais de R$ 25k mensais. O tráfego pago foi o divisor de águas para o crescimento exponencial do nosso delivery.',
        author: 'Cristiano',
        role: 'Proprietário'
      },
      metrics: [
        { label: 'Faturamento Mensal Inicial', value: 4000, prefix: 'R$ ', decimals: 0 },
        { label: 'Faturamento Mensal Atual', value: 25000, prefix: '+R$ ', decimals: 0 },
        { label: 'Faturamento Total Ads', value: 100000, prefix: '+R$ ', decimals: 0 },
        { label: 'Investimento Período', value: 4560.45, prefix: 'R$ ', decimals: 2 },
        { label: 'ROAS', value: 3.66, suffix: 'x', decimals: 2 },
        { label: 'Ticket Médio', value: 36.92, prefix: 'R$ ', decimals: 2 },
        { label: 'Conversões', value: 452, decimals: 0 },
        { label: 'Taxa de Conv.', value: 29.52, suffix: '%', decimals: 2 },
        { label: 'CPA Médio', value: 10.09, prefix: 'R$ ', decimals: 2 },
        { label: 'Cliques', value: 1500, decimals: 0 },
        { label: 'Impressões', value: 563200, decimals: 0 },
        { label: 'Alcance', value: 352900, decimals: 0 }
      ]
    }
  },
  {
    client: 'Valle Fibra',
    result: '24.28x ROAS',
    accentColor: '#10b981',
    description: 'Dominação de mercado regional com faturamento de R$ 98.182,89 e investimento estratégico de apenas R$ 4.043,13.',
    image: 'https://images.unsplash.com/photo-1551703599-6b3e8379aa8c?auto=format&fit=crop&q=80&w=800&fm=webp',
    fullDetails: {
      challenge: 'Custo de aquisição de clientes (CPA) elevado e dificuldade de escala em regiões com alta concorrência de grandes operadoras nacionais.',
      strategy: 'Implementação de campanhas de geofencing ultra-localizadas, landing pages otimizadas para conversão imediata e um funil de vendas direto para o time comercial via WhatsApp, focado em planos de alta velocidade.',
      testimonial: {
        text: 'Dominamos nossa região. O custo por aquisição caiu drasticamente e hoje somos a principal referência em internet fibra na nossa área de atuação.',
        author: 'William',
        role: 'Gerente de Marketing'
      },
      metrics: [
        { label: 'Faturamento', value: 98182.89, prefix: 'R$ ', decimals: 2 },
        { label: 'Gasto Ads', value: 4043.13, prefix: 'R$ ', decimals: 2 },
        { label: 'ROAS', value: 24.28, suffix: 'x', decimals: 2 },
        { label: 'Ticket Médio', value: 1115.71, prefix: 'R$ ', decimals: 2 },
        { label: 'CPA Médio', value: 45.94, prefix: 'R$ ', decimals: 2 },
        { label: 'Conversões', value: 88, decimals: 0 },
        { label: 'Taxa Conv.', value: 15.22, suffix: '%', decimals: 2 },
        { label: 'Cliques', value: 578, decimals: 0 },
        { label: 'CTR Médio', value: 0.27, suffix: '%', decimals: 2 },
        { label: 'CPC Médio', value: 7.00, prefix: 'R$ ', decimals: 2 },
        { label: 'Impressões', value: 216600, decimals: 0 },
        { label: 'Alcance', value: 85200, decimals: 0 }
      ]
    }
  },
  {
    client: 'Móveis Camilo',
    result: '14.70x ROAS',
    accentColor: '#c2a353',
    description: 'Transformação digital com faturamento de R$ 24.974,63 e investimento estratégico de R$ 1.698,66.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800&fm=webp',
    fullDetails: {
      challenge: 'Dificuldade em escalar vendas online e alto custo de aquisição de clientes no setor de móveis de alto padrão.',
      strategy: 'Implementação de campanhas de fundo de funil com criativos de alto impacto visual, segmentação por interesse em decoração de luxo e funil de vendas otimizado para fechamento via WhatsApp.',
      testimonial: {
        text: 'O retorno sobre o investimento foi impressionante. Nossas peças de alto padrão agora chegam ao público certo, com uma eficiência que nunca tivemos antes.',
        author: 'Aline',
        role: 'Diretora Executiva'
      },
      metrics: [
        { label: 'Faturamento', value: 24974.63, prefix: 'R$ ', decimals: 2 },
        { label: 'Gasto Ads', value: 1698.66, prefix: 'R$ ', decimals: 2 },
        { label: 'ROAS', value: 14.70, suffix: 'x', decimals: 2 },
        { label: 'Ticket Médio', value: 1387.48, prefix: 'R$ ', decimals: 2 },
        { label: 'CPA Médio', value: 94.37, prefix: 'R$ ', decimals: 2 },
        { label: 'Conversões', value: 18, decimals: 0 },
        { label: 'Taxa Conv.', value: 5.45, suffix: '%', decimals: 2 },
        { label: 'Cliques', value: 330, decimals: 0 },
        { label: 'CTR Médio', value: 0.19, suffix: '%', decimals: 2 },
        { label: 'CPC Médio', value: 5.15, prefix: 'R$ ', decimals: 2 },
        { label: 'Impressões', value: 174000, decimals: 0 },
        { label: 'Alcance', value: 32200, decimals: 0 }
      ]
    }
  },
  {
    client: 'Iasmim Personal Chef',
    result: '12.25x ROAS',
    accentColor: '#ec4899',
    description: 'Faturamento de R$ 10.043,78 com apenas R$ 820,13 de investimento em anúncios.',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=800&fm=webp',
    fullDetails: {
      challenge: 'Dificuldade em atrair novos clientes para serviços de personal chef e baixa visibilidade online.',
      strategy: 'Campanhas de tráfego pago focadas em público local de alto poder aquisitivo, utilizando criativos que demonstram a experiência gastronômica e funil direto para agendamento via WhatsApp.',
      testimonial: {
        text: 'Minha agenda nunca esteve tão cheia. O foco em clientes de alto padrão trouxe exatamente o público que eu sempre quis atender.',
        author: 'Iasmim',
        role: 'Personal Chef'
      },
      metrics: [
        { label: 'Faturamento', value: 10043.78, prefix: 'R$ ', decimals: 2 },
        { label: 'Gasto Ads', value: 820.13, prefix: 'R$ ', decimals: 2 },
        { label: 'ROAS', value: 12.25, suffix: 'x', decimals: 2 },
        { label: 'Ticket Médio', value: 143.48, prefix: 'R$ ', decimals: 2 },
        { label: 'CPA Médio', value: 11.72, prefix: 'R$ ', decimals: 2 },
        { label: 'Conversões', value: 70, decimals: 0 },
        { label: 'Taxa Conv.', value: 12.59, suffix: '%', decimals: 2 },
        { label: 'Cliques', value: 556, decimals: 0 },
        { label: 'CTR Médio', value: 0.59, suffix: '%', decimals: 2 },
        { label: 'CPC Médio', value: 1.48, prefix: 'R$ ', decimals: 2 },
        { label: 'Impressões', value: 94800, decimals: 0 },
        { label: 'Alcance', value: 63800, decimals: 0 }
      ]
    }
  },
  {
    client: 'Nathan Filmes e Acessórios',
    result: '10.36x ROAS',
    accentColor: '#ef4444',
    description: 'Faturamento de R$ 10.132,00 com investimento estratégico de R$ 977,58 no setor automotivo.',
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=800&fm=webp',
    fullDetails: {
      challenge: 'Baixa conversão em vendas online e necessidade de escala para serviços de estética automotiva e acessórios.',
      strategy: 'Campanhas focadas em desejo visual, demonstração de aplicação de películas e acessórios, com segmentação para entusiastas automotivos e conversão direta via WhatsApp.',
      testimonial: {
        text: 'Nossas vendas de acessórios e serviços de estética automotiva explodiram. A estratégia de tráfego visual foi perfeita para o nosso nicho.',
        author: 'Nathan',
        role: 'Fundador'
      },
      metrics: [
        { label: 'Faturamento', value: 10132.00, prefix: 'R$ ', decimals: 2 },
        { label: 'Gasto Ads', value: 977.58, prefix: 'R$ ', decimals: 2 },
        { label: 'ROAS', value: 10.36, suffix: 'x', decimals: 2 },
        { label: 'Ticket Médio', value: 1013.20, prefix: 'R$ ', decimals: 2 },
        { label: 'CPA Médio', value: 97.76, prefix: 'R$ ', decimals: 2 },
        { label: 'Conversões', value: 10, decimals: 0 },
        { label: 'Taxa Conv.', value: 4.52, suffix: '%', decimals: 2 },
        { label: 'Cliques', value: 221, decimals: 0 },
        { label: 'CTR Médio', value: 0.16, suffix: '%', decimals: 2 },
        { label: 'CPC Médio', value: 4.42, prefix: 'R$ ', decimals: 2 },
        { label: 'Impressões', value: 141400, decimals: 0 },
        { label: 'Alcance', value: 33400, decimals: 0 }
      ]
    }
  },
];

const getOptimizedImageUrl = (url: string, width: number) => {
  if (!url) return '';
  
  if (url.includes('images.unsplash.com')) {
    const baseUrl = url.split('?')[0];
    return `${baseUrl}?auto=format&fit=crop&q=80&w=${width}&fm=webp`;
  }
  
  if (url.includes('i.imgur.com')) {
    // Imgur suffixes: s (90x90), m (320x320), l (640x640), h (1024x1024)
    let suffix = '';
    if (width <= 100) suffix = 's';
    else if (width <= 320) suffix = 'm';
    else if (width <= 640) suffix = 'l';
    else suffix = 'h';
    
    const parts = url.split('.');
    const ext = parts.pop();
    const base = parts.join('.');
    // Imgur supports webp conversion by changing extension
    return `${base}${suffix}.webp`;
  }
  
  return url;
};

export const Cases = () => {
  const [selectedCase, setSelectedCase] = useState<typeof cases[0] | null>(null);

  const modalContentRef = React.useRef<HTMLDivElement>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedCase) {
      document.body.style.overflow = 'hidden';
      if (selectedCase && modalContentRef.current) {
        modalContentRef.current.scrollTop = 0;
      }
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedCase]);

  return (
    <section id="cases" className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 text-center md:text-left">
          <div className="w-full">
            <div className="text-primary text-xs tracking-[0.5em] uppercase mb-4">Portfólio</div>
            <h2 className="text-3xl sm:text-4xl md:text-6xl">CASES DE <span className="text-primary">SUCESSO</span></h2>
          </div>
          <p className="text-gray-neutral max-w-md text-sm sm:text-base mx-auto md:mx-0">
            Resultados reais para empresas que decidiram parar de tentar e começaram a escalar com estratégia de elite.
          </p>
        </div>

        <div className="w-full relative mt-12">
          <div 
            id="cases-scroll"
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 pt-4 px-1"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <style>{`
              #cases-scroll::-webkit-scrollbar { display: none; }
              #cases-scroll { scroll-behavior: smooth; }
            `}</style>
            {cases.map((item, index) => (
              <motion.div
                key={item.client}
                initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                whileHover={{ 
                  y: -5,
                  boxShadow: `0px 20px 40px -10px ${item.accentColor}40`,
                }}
                className="group relative rounded-[2rem] overflow-hidden p-[1px] transform-gpu cursor-pointer bg-zinc-900/40 border border-white/5 flex flex-col min-h-[450px] snap-center shrink-0 w-[85vw] sm:w-[calc((100%-24px)/2)] lg:w-[calc((100%-48px)/3)] max-w-full"
                onClick={() => setSelectedCase(item)}
              >
                {/* Continuous Animated Gradient Border */}
                <div 
                  className="absolute inset-0 z-0 animate-[spin_4s_linear_infinite] blur-md opacity-50 group-hover:opacity-100 transition-opacity duration-700"
                  style={{
                    background: `conic-gradient(from 0deg, transparent 0 200deg, ${item.accentColor} 300deg, transparent 360deg)`
                  }}
                />

                {/* Shimmer Effect */}
                <div 
                  className="absolute inset-0 z-10 pointer-events-none opacity-20"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${item.accentColor}, transparent)`,
                    transform: 'translateZ(0) skewX(-20deg)',
                    animation: 'shimmer 3s infinite'
                  }}
                />
                <style>{`
                  @keyframes shimmer {
                    0% { transform: translateX(-150%) skewX(-20deg); }
                    100% { transform: translateX(150%) skewX(-20deg); }
                  }
                `}</style>
                
                <div className="relative z-20 w-full h-full rounded-[2rem] overflow-hidden bg-black/90 flex flex-col group-hover:bg-black/80 transition-colors duration-500">
                  <div className="h-48 sm:h-56 relative overflow-hidden shrink-0">
                    <img
                      src={getOptimizedImageUrl(item.image, 400)}
                      alt=""
                      className="absolute inset-0 w-full h-full object-cover blur-2xl scale-125 opacity-30 group-hover:opacity-60 transition-opacity duration-700 -z-10"
                      aria-hidden="true"
                    />
                    <img
                      src={getOptimizedImageUrl(item.image, 600)}
                      alt={item.client}
                      className="w-full h-full object-cover sm:object-contain bg-transparent sm:bg-zinc-950 group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
                    
                    {/* Floating Metric Badge */}
                    <div 
                      className="absolute top-4 right-4 px-3 py-1.5 rounded-full backdrop-blur-md flex items-center gap-1.5 shadow-xl border border-white/10 z-20"
                      style={{ 
                        backgroundColor: `${item.accentColor}20`,
                        color: item.accentColor,
                      }}
                    >
                      <TrendingUp size={14} />
                      <span className="text-xs font-black tracking-tight">{item.result}</span>
                    </div>
                  </div>

                  <div className="flex-1 p-6 flex flex-col justify-between relative z-20">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-4 h-px bg-white/20" />
                        <div className="text-[10px] font-bold tracking-widest uppercase text-white/50">Case Study</div>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-black mb-3 text-white tracking-tight leading-tight line-clamp-2">
                        {item.client}
                      </h3>
                      <p className="text-white/60 text-sm font-medium leading-relaxed line-clamp-3">
                        {item.description}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between group-hover:border-white/10 transition-colors">
                      <span className="text-xs font-bold uppercase tracking-widest text-white/40 group-hover:text-white transition-colors">
                        Ver Detalhes
                      </span>
                      <div 
                        className="w-8 h-8 rounded-full flex items-center justify-center bg-white/5 group-hover:scale-110 transition-transform"
                        style={{ color: item.accentColor }}
                      >
                        <ExternalLink size={14} />
                      </div>
                    </div>
                  </div>
                  
                  {/* Subtle Glow inside card */}
                  <div 
                    className="absolute inset-0 opacity-40 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0 animate-[pulse_4s_ease-in-out_infinite]"
                    style={{ 
                      background: `radial-gradient(circle at bottom center, ${item.accentColor}10, transparent 70%)`
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* New Animated Controls at Bottom */}
          <div className="flex justify-center md:justify-end gap-6 mt-8">
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => {
                const el = document.getElementById('cases-scroll');
                if (el) el.scrollBy({ left: -(el.offsetWidth), behavior: 'smooth' });
              }}
              className="group relative w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center overflow-hidden bg-zinc-900 border border-white/10 hover:border-primary/50 transition-colors shadow-[0_0_20px_rgba(0,0,0,0.5)]"
            >
              {/* Spinning border effect */}
              <div className="absolute inset-[-50%] bg-gradient-to-r from-transparent via-primary/30 to-transparent group-hover:via-primary/50 opacity-0 group-hover:opacity-100 animate-[spin_4s_linear_infinite]" />
              
              <div className="absolute inset-[2px] bg-zinc-950 rounded-full z-10 flex items-center justify-center">
                <ChevronLeft size={32} className="text-white/50 group-hover:text-primary transition-all duration-300 group-hover:-translate-x-1" />
              </div>
            </motion.button>

            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => {
                const el = document.getElementById('cases-scroll');
                if (el) el.scrollBy({ left: el.offsetWidth, behavior: 'smooth' });
              }}
              className="group relative w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center overflow-hidden bg-zinc-900 border border-white/10 hover:border-primary/50 transition-colors shadow-[0_0_20px_rgba(0,0,0,0.5)]"
            >
              {/* Spinning border effect */}
              <div className="absolute inset-[-50%] bg-gradient-to-r from-transparent via-primary/30 to-transparent group-hover:via-primary/50 opacity-0 group-hover:opacity-100 animate-[spin_4s_linear_infinite]" />
              
              <div className="absolute inset-[2px] bg-zinc-950 rounded-full z-10 flex items-center justify-center">
                <ChevronRight size={32} className="text-white/50 group-hover:text-primary transition-all duration-300 group-hover:translate-x-1" />
              </div>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedCase && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCase(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            />

            <motion.button 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={() => setSelectedCase(null)}
              className="fixed top-4 right-4 md:top-8 md:right-8 z-[110] p-3 bg-black/60 backdrop-blur-md rounded-full text-white hover:text-primary transition-all border border-white/10 shadow-2xl active:scale-90 hidden md:block"
              aria-label="Fechar case"
            >
              <X size={20} />
            </motion.button>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 40, filter: 'blur(10px)' }}
              animate={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ 
                opacity: 0, 
                y: 100, 
                filter: 'blur(10px)',
                transition: { duration: 0.3, ease: 'easeIn' }
              }}
              transition={{ 
                type: "spring",
                damping: 15,
                stiffness: 300,
                mass: 0.8
              }}
              className="relative w-full h-[100dvh] md:max-w-5xl md:h-auto md:max-h-[90vh] bg-zinc-950 border-x md:border border-white/10 md:rounded-2xl shadow-2xl z-10 overflow-y-auto flex flex-col md:flex-row custom-scrollbar"
              ref={modalContentRef}
              data-lenis-prevent
            >
                {/* Mobile Close Button inside the scrollable content */}
                <button 
                  onClick={() => setSelectedCase(null)}
                  className="absolute top-4 right-4 z-[60] p-2 bg-black/60 backdrop-blur-md rounded-full text-white border border-white/10 md:hidden shadow-lg"
                >
                  <X size={20} />
                </button>

                {/* Swipe Hint for Mobile */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-white/20 rounded-full md:hidden z-50" />

                {/* Chart Section substituting Image */}
                <div className="w-full md:w-1/2 md:sticky md:top-0 h-[450px] sm:h-[500px] md:h-[100dvh] relative shrink-0 overflow-hidden bg-[#050505] flex flex-col md:border-r border-white/5">
                  {(selectedCase.fullDetails && selectedCase.fullDetails.metrics && selectedCase.fullDetails.metrics.length > 0) ? (
                    <CaseCharts 
                      faturamentoInfo={selectedCase.fullDetails.metrics.find(m => m.label.toLowerCase().includes('faturamento') && !m.label.toLowerCase().includes('inicial')) || { value: selectedCase.fullDetails.metrics[0]?.value || 0, label: 'Faturamento' }}
                      investimentoInfo={selectedCase.fullDetails.metrics.find(m => m.label.toLowerCase().includes('gasto') || m.label.toLowerCase().includes('investimento')) || { value: selectedCase.fullDetails.metrics[1]?.value || 0, label: 'Investimento' }}
                      accentColor={selectedCase.accentColor}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-white/50 bg-zinc-900/50">
                      <p>Dados de faturamento não disponíveis no momento.</p>
                    </div>
                  )}
                  
                  {/* Decorative Elements */}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent md:hidden pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-zinc-950/20 to-zinc-950 hidden md:block pointer-events-none" />
                  
                  {/* ROAS Badge floating */}
                  <div 
                    className="absolute top-4 left-4 md:bottom-8 md:top-auto md:left-8 z-20 px-4 py-2 rounded-full backdrop-blur-xl border flex items-center gap-2 shadow-2xl"
                    style={{ 
                      backgroundColor: `${selectedCase.accentColor}10`,
                      borderColor: `${selectedCase.accentColor}40`,
                      color: selectedCase.accentColor
                    }}
                  >
                    <TrendingUp size={18} />
                    <span className="text-lg font-black tracking-tighter">{selectedCase.result}</span>
                  </div>
                </div>

                {/* Scrollable Content Section */}
                <div 
                  className="w-full md:w-1/2 p-6 sm:p-10 md:p-12 bg-zinc-950 pb-32 sm:pb-10"
                >
                  <div className="flex flex-col sm:flex-row items-center sm:items-center gap-4 sm:gap-6 mb-8 sm:mb-10 text-center sm:text-left pt-4 sm:pt-0">
                    <div className="flex flex-col items-center sm:items-start">
                      <div 
                        className="text-xs font-bold uppercase tracking-[0.3em] mb-2"
                        style={{ color: selectedCase.accentColor }}
                      >
                        Case Study
                      </div>
                      <h3 className="text-2xl md:text-4xl leading-tight font-black">{selectedCase.client}</h3>
                    </div>
                  </div>
                  
                  <div className="space-y-8">
                    <div>
                      <h4 
                        className="text-xs uppercase tracking-widest mb-3 flex items-center gap-2"
                        style={{ color: selectedCase.accentColor }}
                      >
                        <CheckCircle2 size={14} /> O Desafio
                      </h4>
                      <p className="text-gray-neutral text-sm leading-relaxed">
                        {selectedCase.fullDetails?.challenge || 'Dados não disponíveis.'}
                      </p>
                    </div>

                    <div>
                      <h4 
                        className="text-xs uppercase tracking-widest mb-3 flex items-center gap-2"
                        style={{ color: selectedCase.accentColor }}
                      >
                        <CheckCircle2 size={14} /> Estratégia de Elite
                      </h4>
                      <p className="text-gray-neutral text-sm leading-relaxed">
                        {selectedCase.fullDetails?.strategy || 'Estratégia confidencial.'}
                      </p>
                    </div>

                    {selectedCase.fullDetails?.testimonial && (
                      <div className="bg-white/5 border-l-2 p-6 rounded-r-xl italic relative group/quote">
                        <div 
                          className="absolute -top-3 -left-3 w-8 h-8 rounded-full flex items-center justify-center text-black"
                          style={{ backgroundColor: selectedCase.accentColor }}
                        >
                          <span className="text-xl font-serif">"</span>
                        </div>
                        <p className="text-gray-neutral text-sm mb-4">
                          {selectedCase.fullDetails.testimonial.text}
                        </p>
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-px bg-white/20" />
                          <div>
                            <div className="text-xs font-bold text-white">{selectedCase.fullDetails.testimonial.author}</div>
                            <div className="text-[10px] text-gray-neutral uppercase tracking-wider">{selectedCase.fullDetails.testimonial.role}</div>
                          </div>
                        </div>
                      </div>
                    )}

                    {selectedCase.fullDetails?.metrics && selectedCase.fullDetails.metrics.length > 0 && (
                      <div className="mt-8 relative w-full overflow-hidden sm:overflow-visible">
                        <div className="bg-[#0A0D15]/90 backdrop-blur-2xl p-4 sm:p-8 rounded-3xl border border-[#1A233A]/80 shadow-[0_0_50px_-12px_rgba(37,99,235,0.15)] relative w-full overflow-hidden mx-auto transform-gpu">
                        
                        {/* Animated Background */}
                        <motion.div 
                          className="absolute inset-0 z-0 opacity-30"
                          animate={{ 
                            backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                          }}
                          transition={{ 
                            duration: 15,
                            repeat: Infinity,
                            ease: "linear"
                          }}
                          style={{
                            backgroundImage: 'radial-gradient(circle at center, rgba(59,130,246,0.15) 0%, transparent 50%), radial-gradient(circle at bottom right, rgba(52,211,153,0.1) 0%, transparent 40%)',
                            backgroundSize: '200% 200%'
                          }}
                        />

                        {/* Glows at the top */}
                        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/80 to-transparent"></div>
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-8 bg-primary/20 blur-2xl rounded-full"></div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[100px] pointer-events-none"></div>
                        
                        <div className="text-center mb-8 pt-2 relative z-10">
                          <h2 className="text-[#3B82F6] text-2xl sm:text-3xl font-black uppercase tracking-[0.25em] font-montserrat drop-shadow-[0_0_20px_rgba(59,130,246,0.4)]">
                            RELATÓRIO ESCALA<br/>ADS
                          </h2>
                          <div className="w-16 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent mx-auto mt-4 rounded-full"></div>
                        </div>

                        <div className="grid grid-cols-2 gap-3 sm:gap-6 mb-6 relative z-10">
                          <div className="bg-[#111827]/80 backdrop-blur-md rounded-2xl border border-white/5 p-4 text-center group hover:bg-[#111827] hover:border-white/10 transition-colors flex flex-col justify-center h-full">
                            <div className="text-[10px] sm:text-[11px] font-montserrat uppercase tracking-[0.2em] text-[#60A5FA] mb-1.5 opacity-70 group-hover:opacity-100 transition-opacity">Cliente</div>
                            <div className="text-sm sm:text-lg font-bold font-tech text-white leading-tight break-words" style={{ wordBreak: 'break-word' }}>{selectedCase.client}</div>
                          </div>
                          <div className="bg-[#111827]/80 backdrop-blur-md rounded-2xl border border-white/5 p-4 text-center group hover:bg-[#111827] hover:border-white/10 transition-colors flex flex-col justify-center h-full">
                            <div className="text-[10px] sm:text-[11px] font-montserrat uppercase tracking-[0.2em] text-[#60A5FA] mb-1.5 opacity-70 group-hover:opacity-100 transition-opacity">Período</div>
                            <div className="text-sm sm:text-lg font-bold font-tech text-white leading-tight break-words" style={{ wordBreak: 'break-word' }}>Período Completo</div>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-3 sm:gap-6 relative z-10">
                          {selectedCase.fullDetails.metrics.map((metric, i) => {
                            const getMetricColor = (label: string) => {
                              const l = label.toLowerCase();
                              if (l.includes('faturamento')) return { border: 'group-hover:border-[#34D399]/40', bg: 'hover:bg-[#34D399]/5', text: 'text-[#34D399]', dropShadow: 'drop-shadow-[0_0_20px_rgba(52,211,153,0.4)]' };
                              if (l.includes('investimento') || l.includes('gasto')) return { border: 'group-hover:border-[#F87171]/40', bg: 'hover:bg-[#F87171]/5', text: 'text-[#F87171]', dropShadow: 'drop-shadow-[0_0_20px_rgba(248,113,113,0.4)]' };
                              if (l.includes('roas')) return { border: 'group-hover:border-[#FBBF24]/40', bg: 'hover:bg-[#FBBF24]/5', text: 'text-[#FBBF24]', dropShadow: 'drop-shadow-[0_0_20px_rgba(251,191,36,0.4)]' };
                              if (l.includes('conversão') || l.includes('conv.')) return { border: 'group-hover:border-[#E879F9]/40', bg: 'hover:bg-[#E879F9]/5', text: 'text-[#E879F9]', dropShadow: 'drop-shadow-[0_0_20px_rgba(232,121,249,0.4)]' };
                              if (l.includes('cliques')) return { border: 'group-hover:border-[#FDBA74]/40', bg: 'hover:bg-[#FDBA74]/5', text: 'text-[#FDBA74]', dropShadow: 'drop-shadow-[0_0_20px_rgba(253,186,116,0.4)]' };
                              if (l.includes('cpa')) return { border: 'group-hover:border-[#818CF8]/40', bg: 'hover:bg-[#818CF8]/5', text: 'text-[#818CF8]', dropShadow: 'drop-shadow-[0_0_20px_rgba(129,140,248,0.4)]' };
                              if (l.includes('ticket')) return { border: 'group-hover:border-[#34D399]/40', bg: 'hover:bg-[#34D399]/5', text: 'text-[#34D399]', dropShadow: 'drop-shadow-[0_0_20px_rgba(52,211,153,0.4)]' };
                              if (l.includes('ctr')) return { border: 'group-hover:border-[#D8B4FE]/40', bg: 'hover:bg-[#D8B4FE]/5', text: 'text-[#D8B4FE]', dropShadow: 'drop-shadow-[0_0_20px_rgba(216,180,254,0.4)]' };
                              if (l.includes('cpc') || l.includes('conversões')) return { border: 'group-hover:border-[#2DD4BF]/40', bg: 'hover:bg-[#2DD4BF]/5', text: 'text-[#2DD4BF]', dropShadow: 'drop-shadow-[0_0_20px_rgba(45,212,191,0.4)]' };
                              if (l.includes('impressões')) return { border: 'group-hover:border-[#93C5FD]/40', bg: 'hover:bg-[#93C5FD]/5', text: 'text-[#93C5FD]', dropShadow: 'drop-shadow-[0_0_20px_rgba(147,197,253,0.4)]' };
                              if (l.includes('alcance')) return { border: 'group-hover:border-[#60A5FA]/40', bg: 'hover:bg-[#60A5FA]/5', text: 'text-[#60A5FA]', dropShadow: 'drop-shadow-[0_0_20px_rgba(96,165,250,0.4)]' };
                              return { border: 'group-hover:border-white/20', bg: 'hover:bg-white/5', text: 'text-white', dropShadow: '' };
                            };
                            const styles = getMetricColor(metric.label);
                            const isFullWidth = metric.label.toLowerCase() === 'faturamento' || metric.label.toLowerCase() === 'alcance';
                            
                            return (
                              <motion.div 
                                key={i} 
                                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{ 
                                  duration: 0.6, 
                                  delay: 0.3 + (i * 0.05),
                                  ease: [0.22, 1, 0.36, 1]
                                }}
                                className={`group bg-[#111827]/60 backdrop-blur-md border border-white/5 p-3 sm:p-5 rounded-2xl flex flex-col items-center justify-center text-center transition-all duration-500 ${styles.bg} ${styles.border} ${isFullWidth ? 'col-span-2 py-6 sm:py-8' : ''}`}
                              >
                                <div 
                                  className={`text-[10px] sm:text-xs font-montserrat font-bold uppercase tracking-[0.2em] mb-3 ${styles.text} opacity-60 group-hover:opacity-100 transition-opacity duration-300`}
                                >
                                  {metric.label}
                                </div>
                                <div className={cn("font-tech font-bold tracking-tighter w-full transition-transform duration-500 group-hover:scale-105 whitespace-nowrap", styles.text, styles.dropShadow, isFullWidth ? 'text-3xl sm:text-4xl md:text-5xl font-black' : 'text-lg sm:text-xl md:text-2xl')}>
                                  {metric.prefix || ''}{new Intl.NumberFormat('pt-BR', { minimumFractionDigits: metric.decimals || 0, maximumFractionDigits: metric.decimals || 0 }).format(metric.value)}{metric.suffix || ''}
                                </div>
                              </motion.div>
                            );
                          })}
                        </div>
                        
                        <div className="flex justify-center mt-8 opacity-70 relative z-10 filter drop-shadow-md">
                           <div className="flex items-center gap-1 group cursor-default">
                             <div className="text-white font-montserrat font-black tracking-tighter text-xl group-hover:text-primary transition-colors">ESCALA<span className="text-[#3B82F6]">ADS</span></div>
                           </div>
                        </div>
                        <div className="text-[7px] sm:text-[9px] text-center text-white/40 uppercase tracking-[0.4em] font-montserrat font-bold mt-3 relative z-10">
                          Performance Digital de Elite
                        </div>
                      </div>
                    </div>
                    )}
                  </div>

                  <button 
                    onClick={() => setSelectedCase(null)}
                    className="w-full mt-10 py-4 font-bold uppercase tracking-widest rounded-xl hover:scale-[1.02] transition-transform"
                    style={{ 
                      backgroundColor: selectedCase.accentColor,
                      color: 'black'
                    }}
                  >
                    Fechar Case
                  </button>
                </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
