import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, TrendingUp, X, CheckCircle2, Eye } from 'lucide-react';
import { AnimatedCounter } from './AnimatedCounter';
import { cn } from '../lib/utils';

const cases = [
  {
    client: 'New York Chicken Crispy',
    result: '8.88x ROAS',
    accentColor: '#FFCC00',
    description: 'Faturamento de R$ 78.923,75 com apenas R$ 8.886,88 de investimento em anúncios.',
    image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&q=80&w=800&fm=webp',
    fullDetails: {
      challenge: 'Lançamento de marca do zero em um mercado extremamente competitivo de delivery gastronômico.',
      strategy: 'Implementação de funil de vendas direto para WhatsApp e iFood, com foco em criativos cinematográficos de alto desejo e segmentação local ultra-precisa.',
      testimonial: {
        text: 'A Nathan Filmes transformou nosso lançamento. O ROAS de 8.88x superou todas as nossas expectativas para uma marca nova em um mercado tão saturado.',
        author: 'Allan',
        role: 'CEO New York Chicken'
      },
      metrics: [
        { label: 'Faturamento Período', value: 78923.75, prefix: 'R$ ', decimals: 2 },
        { label: 'Investimento Ads', value: 8886.88, prefix: 'R$ ', decimals: 2 },
        { label: 'ROAS', value: 8.88, suffix: 'x', decimals: 2 },
        { label: 'Ticket Médio', value: 89.38, prefix: 'R$ ', decimals: 2 },
        { label: 'CPA Médio', value: 10.06, prefix: 'R$ ', decimals: 2 },
        { label: 'Conversões', value: 883, decimals: 0 },
        { label: 'Taxa de Conv.', value: 14.64, suffix: '%', decimals: 2 },
        { label: 'Cliques', value: 6000, suffix: '', decimals: 0 },
        { label: 'CTR Médio', value: 0.41, suffix: '%', decimals: 2 },
        { label: 'CPC Médio', value: 1.47, prefix: 'R$ ', decimals: 2 },
        { label: 'Impressões', value: 1500000, suffix: '', decimals: 0 },
        { label: 'Alcance', value: 892200, suffix: '', decimals: 0 }
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

        <div className="w-full relative">
          <div className="flex overflow-x-auto hide-scrollbar snap-x snap-mandatory gap-6 sm:gap-8 max-w-7xl mx-auto pb-12 pt-4 px-6 md:px-0">
          {cases.map((item, index) => (
            <motion.div
              key={item.client}
              initial={{ opacity: 0, y: 40, scale: 0.95, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
              whileHover={{ scale: 1.02, y: -8, transition: { duration: 0.4, ease: "easeOut" } }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1] 
              }}
              className="group relative rounded-[2rem] overflow-hidden p-[1px] will-change-transform transform-gpu shrink-0 w-[85vw] sm:w-[45vw] lg:w-[30vw] min-h-[420px] sm:h-[480px] cursor-pointer shadow-2xl bg-zinc-900/40 border border-white/5 snap-center"
              onClick={() => setSelectedCase(item)}
            >
              {/* Animated Gradient Border */}
              <div 
                className="absolute inset-0 z-0 animate-spin-slow opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-md hidden md:block"
                style={{
                  background: `conic-gradient(from 0deg, transparent 0 340deg, ${item.accentColor} 360deg)`
                }}
              />
              
              <div className="relative z-10 w-full h-full rounded-[2rem] overflow-hidden bg-black/80 backdrop-blur-3xl flex flex-col group-hover:bg-black/40 transition-colors duration-700">
                <div className="absolute inset-0 overflow-hidden rounded-[2rem]">
                  {/* Blur-up Placeholder */}
                  <img
                    src={getOptimizedImageUrl(item.image, 40)}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover blur-3xl scale-125 opacity-40 group-hover:opacity-60 transition-opacity duration-700 -z-10"
                    aria-hidden="true"
                  />
                  
                  <img
                    src={getOptimizedImageUrl(item.image, 800)}
                    srcSet={`${getOptimizedImageUrl(item.image, 400)} 400w, ${getOptimizedImageUrl(item.image, 800)} 800w, ${getOptimizedImageUrl(item.image, 1200)} 1200w`}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    alt={item.client}
                    className="w-full h-full object-cover sm:object-contain bg-transparent sm:bg-zinc-950 group-hover:scale-105 transition-transform duration-1000 opacity-0 transition-opacity duration-700"
                    referrerPolicy="no-referrer"
                    loading={index < 2 ? "eager" : "lazy"}
                    decoding="async"
                    {...(index === 0 ? { fetchPriority: "high" } : {})}
                    onLoad={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.classList.remove('opacity-0');
                      target.classList.add('opacity-80', 'group-hover:opacity-50');
                    }}
                  />
                  
                  {/* Gradient Overlay for Text Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent md:opacity-90 opacity-100 transition-opacity duration-500 z-10" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 opacity-60" />
                </div>

                {/* Content Container */}
                <div className="relative h-full p-6 sm:p-8 flex flex-col justify-end z-20">
                  {/* Metric Floating Badge */}
                  <motion.div 
                    initial={{ y: -10, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                    className="absolute top-6 right-6 px-4 py-2 rounded-full backdrop-blur-xl flex items-center gap-2 shadow-[0_8px_30px_rgb(0,0,0,0.5)] border border-white/10"
                    style={{ 
                      backgroundColor: `${item.accentColor}10`,
                      color: item.accentColor,
                    }}
                  >
                    <TrendingUp size={16} />
                    <span className="text-base sm:text-lg font-black tracking-tight">{item.result}</span>
                  </motion.div>

                  <div className="transform translate-y-0 sm:translate-y-8 sm:group-hover:translate-y-0 transition-all duration-500 ease-out">
                    
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-px bg-white/20" />
                      <div className="text-xs font-bold tracking-widest uppercase text-white/50">Case Study</div>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-black mb-3 text-white tracking-tight drop-shadow-lg leading-tight">
                      {item.client}
                    </h3>
                    
                    <p className="text-white/70 text-sm mb-6 line-clamp-3 sm:line-clamp-none font-medium leading-relaxed max-w-[95%] sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {item.description}
                    </p>
                    
                    <motion.button 
                      onClick={(e) => { e.stopPropagation(); setSelectedCase(item); }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      animate={{ boxShadow: ["0px 0px 0px rgba(255,255,255,0)", `0px 0px 15px ${item.accentColor}40`, "0px 0px 0px rgba(255,255,255,0)"] }}
                      transition={{ boxShadow: { repeat: Infinity, duration: 2, delay: index * 0.2 } }}
                      className="w-full py-4 border border-white/10 transition-all duration-500 rounded-xl flex items-center justify-center gap-3 text-xs font-black uppercase overflow-hidden relative group/btn tracking-widest bg-white/5 hover:border-transparent sm:opacity-0 sm:group-hover:opacity-100 shadow-xl"
                      style={{ 
                        borderColor: `${item.accentColor}30`
                      }}
                    >
                      <div 
                        className="absolute inset-0 translate-y-full sm:group-hover/btn:translate-y-0 transition-transform duration-500 ease-out"
                        style={{ backgroundColor: item.accentColor }}
                      />
                      <span className="relative z-10 flex items-center gap-2 group-hover/btn:text-black transition-colors duration-300">
                        Ver Case Completo <ExternalLink size={16} />
                      </span>
                    </motion.button>
                  </div>
                </div>
                
                {/* Glow Effect behind text container */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none z-0">
                  <div 
                    className="absolute inset-0" 
                    style={{ 
                      background: `radial-gradient(circle at bottom left, ${item.accentColor}15, transparent 70%)`
                    }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
            <div className="shrink-0 w-2 md:w-6" />
          </div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedCase && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
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
              className="fixed top-4 right-4 md:top-8 md:right-8 z-[110] p-3 bg-black/60 backdrop-blur-md rounded-full text-white hover:text-primary transition-all border border-white/10 shadow-2xl active:scale-90"
              aria-label="Fechar case"
            >
              <X size={20} />
            </motion.button>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 40, filter: 'blur(10px)' }}
              animate={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, scale: 0.95, y: 40, filter: 'blur(10px)' }}
              transition={{ 
                type: "spring",
                damping: 25,
                stiffness: 200,
                mass: 0.8
              }}
              className="relative w-full max-w-5xl h-[100dvh] md:h-auto md:max-h-[90vh] bg-zinc-950 border-x md:border border-white/10 md:rounded-2xl shadow-2xl z-10 overflow-y-auto flex flex-col md:flex-row custom-scrollbar"
              ref={modalContentRef}
              data-lenis-prevent
            >
                {/* Swipe Hint for Mobile */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-white/20 rounded-full md:hidden z-50" />

                {/* Fixed Image Section */}
                <div className="w-full md:w-1/2 md:sticky md:top-0 h-64 sm:h-80 md:h-[90vh] relative shrink-0 overflow-hidden bg-zinc-900">
                  {/* Blur-up Placeholder */}
                  <img
                    src={getOptimizedImageUrl(selectedCase.image, 40)}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover blur-3xl scale-110 opacity-50 -z-10"
                    aria-hidden="true"
                  />
                  
                  <img 
                    src={getOptimizedImageUrl(selectedCase.image, 1200)}
                    srcSet={`${getOptimizedImageUrl(selectedCase.image, 600)} 600w, ${getOptimizedImageUrl(selectedCase.image, 1200)} 1200w`}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    alt={selectedCase.client}
                    className="w-full h-full object-contain bg-zinc-900 opacity-0 transition-opacity duration-500"
                    referrerPolicy="no-referrer"
                    loading="eager"
                    decoding="async"
                    fetchPriority="high"
                    onLoad={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.classList.remove('opacity-0');
                      target.classList.add('opacity-100');
                    }}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `https://picsum.photos/seed/${selectedCase.client}/1200/800`;
                      target.classList.remove('opacity-0');
                      target.classList.add('opacity-100');
                    }}
                  />
                  <div className="absolute inset-0 bg-zinc-900 animate-pulse -z-20" />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent md:hidden" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-zinc-950/20 to-zinc-950 hidden md:block" />
                  
                  {/* ROAS Badge on Image */}
                  <div 
                    className="absolute bottom-4 left-4 z-20 px-4 py-2 rounded-full backdrop-blur-xl border flex items-center gap-2 shadow-2xl"
                    style={{ 
                      backgroundColor: `${selectedCase.accentColor}20`,
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
                        {selectedCase.fullDetails.challenge}
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
                        {selectedCase.fullDetails.strategy}
                      </p>
                    </div>

                    {selectedCase.fullDetails.testimonial && (
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

                    <div>
                      <h4 
                        className="text-xs uppercase tracking-widest mb-4 flex items-center gap-2"
                        style={{ color: selectedCase.accentColor }}
                      >
                        <CheckCircle2 size={14} /> Métricas de Escala
                      </h4>
                      <div className="grid grid-cols-2 gap-3 sm:gap-4">
                        {selectedCase.fullDetails.metrics.map((metric, i) => {
                          const getMetricColor = (label: string) => {
                            const l = label.toLowerCase();
                            if (l.includes('faturamento')) return 'text-emerald-400';
                            if (l.includes('investimento') || l.includes('gasto')) return 'text-rose-400';
                            if (l.includes('roas')) return 'text-amber-400';
                            if (l.includes('leads')) return 'text-blue-400';
                            if (l.includes('conversão') || l.includes('conv.')) return 'text-fuchsia-400';
                            if (l.includes('cliques')) return 'text-orange-400';
                            if (l.includes('cpa')) return 'text-sky-400';
                            if (l.includes('ticket')) return 'text-cyan-400';
                            if (l.includes('ctr')) return 'text-violet-400';
                            if (l.includes('cpc')) return 'text-indigo-400';
                            if (l.includes('impressões')) return 'text-pink-400';
                            if (l.includes('alcance')) return 'text-purple-400';
                            return 'text-white';
                          };
                          const metricColor = getMetricColor(metric.label);
                          
                          return (
                            <motion.div 
                              key={i} 
                              initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
                              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                              transition={{ 
                                duration: 0.8, 
                                delay: 0.2 + (i * 0.04),
                                ease: [0.22, 1, 0.36, 1]
                              }}
                              className="bg-white/10 border border-white/10 p-2.5 sm:p-4 rounded-xl group/metric transition-all hover:bg-white/20 hover:border-primary/30"
                              style={{ 
                                borderColor: i % 2 === 0 ? `${selectedCase.accentColor}20` : 'rgba(255,255,255,0.1)'
                              }}
                            >
                              <div 
                                className="text-[9px] text-gray-neutral uppercase tracking-wider mb-1 group-hover/metric:text-primary transition-colors"
                                style={{ color: 'rgba(255,255,255,0.4)' }}
                              >
                                {metric.label}
                              </div>
                              <div className={cn("text-base sm:text-lg font-black tracking-tight", metricColor)}>
                                <AnimatedCounter 
                                  value={metric.value} 
                                  prefix={metric.prefix} 
                                  suffix={metric.suffix} 
                                  decimals={metric.decimals} 
                                  delay={0.4 + (i * 0.08)} 
                                />
                              </div>
                            </motion.div>
                          );
                        })}
                      </div>
                    </div>
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
