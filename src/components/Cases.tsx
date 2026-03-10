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
    image: 'https://i.imgur.com/pjfivwX.png',
    logo: 'https://i.imgur.com/B5HdJ4K.png',
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
    logo: 'https://i.imgur.com/iorC73i.png',
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
    logo: 'https://i.imgur.com/3BRZHVb.png',
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
    logo: 'https://i.imgur.com/xwDv0Ow.png',
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
    logo: 'https://i.imgur.com/QU9x4nP.png',
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
    logo: 'https://i.imgur.com/QOElzLc.png',
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

const getResponsiveUnsplashUrl = (url: string, width: number) => {
  if (!url.includes('images.unsplash.com')) return url;
  const baseUrl = url.split('?')[0];
  return `${baseUrl}?auto=format&fit=crop&q=80&w=${width}&fm=webp`;
};

const getImgurUrl = (url: string, suffix: string = '') => {
  if (!url.includes('i.imgur.com')) return url;
  const parts = url.split('.');
  const ext = parts.pop();
  const base = parts.join('.');
  return `${base}${suffix}.${ext}`;
};

export const Cases = () => {
  const [selectedCase, setSelectedCase] = useState<typeof cases[0] | null>(null);
  const [previewLogo, setPreviewLogo] = useState<string | null>(null);

  const modalContentRef = React.useRef<HTMLDivElement>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedCase || previewLogo) {
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
  }, [selectedCase, previewLogo]);

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

        <div className="">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {cases.map((item, index) => (
            <motion.div
              key={item.client}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, margin: "-10px" }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1] 
              }}
              className="group relative rounded-3xl overflow-hidden neon-border bg-zinc-900/50 will-change-transform transform-gpu h-auto min-h-[420px] sm:h-[450px] cursor-pointer"
              onClick={() => setSelectedCase(item)}
            >
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={getResponsiveUnsplashUrl(item.image, 800)}
                  srcSet={`${getResponsiveUnsplashUrl(item.image, 400)} 400w, ${getResponsiveUnsplashUrl(item.image, 800)} 800w, ${getResponsiveUnsplashUrl(item.image, 1200)} 1200w`}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  alt={item.client}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 opacity-80 md:opacity-40 group-hover:opacity-100 md:group-hover:opacity-70"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                  onLoad={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.classList.add('opacity-100');
                  }}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://picsum.photos/seed/${item.client}/800/600`;
                  }}
                />
                
                {/* Fallback background / Skeleton */}
                <div className="absolute inset-0 bg-zinc-900 animate-pulse -z-10" />
                
                {/* Overlay Gradient - More subtle on mobile to show image */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-100 md:opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content Container */}
              <div className="relative h-full p-5 sm:p-8 flex flex-col justify-end z-20">
                {/* ROAS Badge - Top Right */}
                <motion.div 
                  initial={{ x: 20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="absolute top-4 right-4 sm:top-6 sm:right-6 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full backdrop-blur-xl border flex items-center gap-1.5 sm:gap-2 shadow-2xl"
                  style={{ 
                    backgroundColor: `${item.accentColor}20`,
                    borderColor: `${item.accentColor}40`,
                    color: item.accentColor
                  }}
                >
                  <TrendingUp size={16} className="sm:w-[18px] sm:h-[18px]" />
                  <span className="text-base sm:text-lg font-black tracking-tighter">{item.result}</span>
                </motion.div>

                {item.logo && (
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setPreviewLogo(item.logo);
                    }}
                    className="absolute top-4 left-4 sm:top-6 sm:left-6 w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-2.5 sm:p-3 flex items-center justify-center overflow-hidden hover:scale-110 transition-all cursor-pointer group/logo shadow-2xl"
                    style={{ 
                      borderColor: `${item.accentColor}30`
                    }}
                    title="Clique para ampliar a logo"
                  >
                    <img 
                      src={getImgurUrl(item.logo, 'm')} 
                      srcSet={`${getImgurUrl(item.logo, 's')} 90w, ${getImgurUrl(item.logo, 'm')} 320w, ${getImgurUrl(item.logo, 'l')} 640w`}
                      sizes="60px"
                      alt={`${item.client} logo`}
                      className="max-w-full max-h-full object-contain group-hover/logo:scale-110 transition-transform"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      decoding="async"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = 'https://i.imgur.com/B5HdJ4K.png'; // Fallback to a default logo or clear
                        target.style.opacity = '0.5';
                      }}
                    />
                    <div 
                      className="absolute inset-0 opacity-0 group-hover/logo:opacity-100 flex items-center justify-center transition-opacity"
                      style={{ backgroundColor: `${item.accentColor}40` }}
                    >
                      <Eye size={20} className="text-white drop-shadow-lg" />
                    </div>
                  </button>
                )}

                <div className="transform md:group-hover:-translate-y-2 transition-transform duration-500">
                  <h3 className="text-xl sm:text-3xl font-black mb-1.5 sm:mb-2 text-white tracking-tight">
                    {item.client}
                  </h3>
                  <p className="text-white/90 sm:text-white/70 text-sm sm:text-sm mb-6 sm:mb-6 line-clamp-3 sm:line-clamp-none font-medium max-w-[95%]">
                    {item.description}
                  </p>
                  <button 
                    onClick={() => setSelectedCase(item)}
                    className="w-full py-4 border border-white/10 transition-all duration-500 rounded-xl flex items-center justify-center gap-3 text-xs font-black uppercase overflow-hidden relative group/btn tracking-widest bg-white/5"
                    style={{ 
                      borderColor: `${item.accentColor}40`
                    }}
                  >
                    <div 
                      className="absolute inset-0 translate-y-full md:group-hover/btn:translate-y-0 transition-transform duration-500"
                      style={{ backgroundColor: item.accentColor }}
                    />
                    <span className="relative z-10 flex items-center gap-2 group-hover/btn:text-black transition-colors">
                      Ver Case Completo <ExternalLink size={16} />
                    </span>
                  </button>
                </div>
              </div>
              
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                <div 
                  className="absolute inset-0" 
                  style={{ 
                    background: `radial-gradient(circle at top right, ${item.accentColor}20, transparent 70%)`
                  }}
                />
              </div>
            </motion.div>
          ))}
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
              className="relative w-full max-w-5xl h-[100dvh] md:h-auto md:max-h-[90vh] bg-zinc-950 border-x md:border border-white/10 md:rounded-2xl shadow-2xl will-change-transform transform-gpu z-10 overflow-hidden flex flex-col md:flex-row"
            >
                <button 
                  onClick={() => setSelectedCase(null)}
                  className="absolute top-4 right-4 z-50 p-3 bg-black/60 backdrop-blur-md rounded-full text-white hover:text-primary transition-all border border-white/10 shadow-2xl active:scale-90"
                  aria-label="Fechar case"
                >
                  <X size={20} />
                </button>

                {/* Swipe Hint for Mobile */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-white/20 rounded-full md:hidden" />

                {/* Fixed Image Section */}
                <div className="w-full md:w-1/2 h-40 sm:h-64 md:h-full relative shrink-0 overflow-hidden bg-zinc-900">
                  <img 
                    src={getResponsiveUnsplashUrl(selectedCase.image, 1200)}
                    srcSet={`${getResponsiveUnsplashUrl(selectedCase.image, 600)} 600w, ${getResponsiveUnsplashUrl(selectedCase.image, 1200)} 1200w`}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    alt={selectedCase.client}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                    loading="eager"
                    decoding="async"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `https://picsum.photos/seed/${selectedCase.client}/1200/800`;
                    }}
                  />
                  <div className="absolute inset-0 bg-zinc-900 animate-pulse -z-10" />
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
                  ref={modalContentRef}
                  className="flex-1 overflow-y-auto custom-scrollbar p-6 sm:p-10 md:p-12 bg-zinc-950 pb-32 sm:pb-10"
                >
                  <div className="flex flex-col sm:flex-row items-center sm:items-center gap-4 sm:gap-6 mb-8 sm:mb-10 text-center sm:text-left pt-4 sm:pt-0">
                    {selectedCase.logo && (
                      <button 
                        onClick={() => setPreviewLogo(selectedCase.logo)}
                        className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-white/10 border border-white/20 p-4 sm:p-5 flex items-center justify-center overflow-hidden hover:bg-white/20 transition-all group/modal-logo shadow-xl shrink-0"
                        style={{ borderColor: `${selectedCase.accentColor}40` }}
                        title="Clique para ampliar a logo"
                      >
                        <img 
                          src={getImgurUrl(selectedCase.logo, 'l')} 
                          srcSet={`${getImgurUrl(selectedCase.logo, 'm')} 320w, ${getImgurUrl(selectedCase.logo, 'l')} 640w, ${getImgurUrl(selectedCase.logo, 'h')} 1024w`}
                          sizes="(max-width: 640px) 100px, 150px"
                          alt={`${selectedCase.client} logo`}
                          className="max-w-full max-h-full object-contain group-hover/modal-logo:scale-110 transition-transform"
                          referrerPolicy="no-referrer"
                          loading="eager"
                          decoding="async"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = 'https://i.imgur.com/B5HdJ4K.png';
                            target.style.opacity = '0.5';
                          }}
                        />
                      </button>
                    )}
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

      {/* Logo Preview Modal */}
      <AnimatePresence>
        {previewLogo && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setPreviewLogo(null)}
              className="absolute inset-0 bg-black/95 backdrop-blur-xl"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative max-w-3xl w-full aspect-square bg-zinc-950/50 border border-white/10 rounded-[2.5rem] p-16 flex items-center justify-center shadow-[0_0_50px_rgba(20,163,229,0.2)] overflow-hidden group/preview"
            >
              {/* Decorative background elements */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 blur-[100px] rounded-full pointer-events-none" />
              <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-primary/5 blur-[100px] rounded-full pointer-events-none" />

              <button 
                onClick={() => setPreviewLogo(null)}
                className="absolute top-8 right-8 z-10 p-3 bg-white/5 border border-white/10 rounded-full text-white hover:text-primary hover:bg-white/10 transition-all shadow-xl"
              >
                <X size={24} />
              </button>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, type: "spring", damping: 20 }}
                className="relative z-10 w-full h-full flex items-center justify-center"
              >
                <img 
                  src={previewLogo} 
                  alt="Logo Preview" 
                  className="max-w-full max-h-full object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]"
                  referrerPolicy="no-referrer"
                  loading="eager"
                  decoding="async"
                />
              </motion.div>

              {/* Bottom Label */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.5em] text-white/30 font-black">
                Visualização de Marca
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
