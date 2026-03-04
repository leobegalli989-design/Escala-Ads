import React, { useState } from 'react';
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
    image: 'https://images.unsplash.com/photo-1606131731446-5568d87113aa?auto=format&fit=crop&q=80&w=800',
    logo: 'https://i.imgur.com/B5HdJ4K.png',
    fullDetails: {
      challenge: 'Lançamento de marca do zero em um mercado extremamente competitivo de delivery gastronômico.',
      strategy: 'Implementação de funil de vendas direto para WhatsApp e iFood, com foco em criativos cinematográficos de alto desejo e segmentação local ultra-precisa.',
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
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800',
    logo: 'https://i.imgur.com/iorC73i.png',
    fullDetails: {
      challenge: 'Baixa previsibilidade de vendas, dependência de tráfego orgânico e faturamento estagnado em R$ 4.000 mensais.',
      strategy: 'Campanhas de geração de leads focadas em pedidos diretos no WhatsApp, otimização de criativos para delivery e remarketing agressivo para base de clientes.',
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
    image: 'https://images.unsplash.com/photo-1551703599-6b3e8379aa8c?auto=format&fit=crop&q=80&w=800',
    logo: 'https://i.imgur.com/3BRZHVb.png',
    fullDetails: {
      challenge: 'Custo de aquisição de clientes (CPA) elevado e dificuldade de escala em regiões com alta concorrência de grandes operadoras nacionais.',
      strategy: 'Implementação de campanhas de geofencing ultra-localizadas, landing pages otimizadas para conversão imediata e um funil de vendas direto para o time comercial via WhatsApp, focado em planos de alta velocidade.',
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
    accentColor: '#8b5cf6',
    description: 'Transformação digital com faturamento de R$ 24.974,63 e investimento estratégico de R$ 1.698,66.',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=800',
    logo: 'https://api.dicebear.com/7.x/shapes/svg?seed=Camilo&backgroundColor=8b5cf6',
    fullDetails: {
      challenge: 'Dificuldade em escalar vendas online e alto custo de aquisição de clientes no setor de móveis de alto padrão.',
      strategy: 'Implementação de campanhas de fundo de funil com criativos de alto impacto visual, segmentação por interesse em decoração de luxo e funil de vendas otimizado para fechamento via WhatsApp.',
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
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=800',
    logo: 'https://api.dicebear.com/7.x/shapes/svg?seed=Iasmim&backgroundColor=f59e0b',
    fullDetails: {
      challenge: 'Dificuldade em atrair novos clientes para serviços de personal chef e baixa visibilidade online.',
      strategy: 'Campanhas de tráfego pago focadas em público local de alto poder aquisitivo, utilizando criativos que demonstram a experiência gastronômica e funil direto para agendamento via WhatsApp.',
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
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=800',
    logo: 'https://api.dicebear.com/7.x/shapes/svg?seed=Nathan&backgroundColor=ef4444',
    fullDetails: {
      challenge: 'Baixa conversão em vendas online e necessidade de escala para serviços de estética automotiva e acessórios.',
      strategy: 'Campanhas focadas em desejo visual, demonstração de aplicação de películas e acessórios, com segmentação para entusiastas automotivos e conversão direta via WhatsApp.',
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

export const Cases = () => {
  const [selectedCase, setSelectedCase] = useState<typeof cases[0] | null>(null);
  const [previewLogo, setPreviewLogo] = useState<string | null>(null);

  return (
    <section id="cases" className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <div className="text-primary text-xs tracking-[0.5em] uppercase mb-4">Portfólio</div>
            <h2 className="text-4xl md:text-6xl">CASES DE <span className="text-primary">SUCESSO</span></h2>
          </div>
          <p className="text-gray-neutral max-w-md text-sm">
            Resultados reais para empresas que decidiram parar de tentar e começaram a escalar com estratégia de elite.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {cases.map((item, index) => (
            <motion.div
              key={item.client}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0 }
              }}
              className="group relative rounded-2xl overflow-hidden neon-border bg-zinc-900/50"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.client}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-40 group-hover:opacity-60"
                  referrerPolicy="no-referrer"
                />
                
                {/* ROAS Badge - Top Right */}
                <motion.div 
                  initial={{ x: 20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="absolute top-4 right-4 z-20 px-4 py-2 rounded-full backdrop-blur-xl border flex items-center gap-2 shadow-2xl"
                  style={{ 
                    backgroundColor: `${item.accentColor}20`,
                    borderColor: `${item.accentColor}40`,
                    color: item.accentColor
                  }}
                >
                  <TrendingUp size={18} />
                  <span className="text-lg font-black tracking-tighter">{item.result}</span>
                </motion.div>

                {item.logo && (
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setPreviewLogo(item.logo);
                    }}
                    className="absolute top-4 left-4 z-20 w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-black/60 backdrop-blur-md border border-white/10 p-2 md:p-3 flex items-center justify-center overflow-hidden hover:scale-110 transition-all cursor-pointer group/logo shadow-2xl"
                    style={{ 
                      borderColor: `${item.accentColor}30`
                    }}
                    title="Clique para ampliar a logo"
                  >
                    <img 
                      src={item.logo} 
                      alt={`${item.client} logo`}
                      className="max-w-full max-h-full object-contain group-hover/logo:scale-110 transition-transform"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                      }}
                    />
                    <div 
                      className="absolute inset-0 opacity-0 group-hover/logo:opacity-100 flex items-center justify-center transition-opacity"
                      style={{ backgroundColor: `${item.accentColor}40` }}
                    >
                      <Eye size={24} className="text-white drop-shadow-lg" />
                    </div>
                  </button>
                )}
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent p-8 flex flex-col justify-end">
                <h3 
                  className="text-2xl mb-2 transition-colors duration-300"
                  style={{ color: 'white' }}
                >
                  {item.client}
                </h3>
                <p className="text-gray-neutral text-xs mb-6 line-clamp-2 opacity-80 group-hover:opacity-100 transition-opacity">
                  {item.description}
                </p>
                <button 
                  onClick={() => setSelectedCase(item)}
                  className="w-full py-3 border border-white/10 transition-all duration-500 rounded-lg flex items-center justify-center gap-2 text-xs font-bold uppercase overflow-hidden relative group/btn"
                  style={{ 
                    borderColor: `${item.accentColor}20`
                  }}
                >
                  <div 
                    className="absolute inset-0 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500"
                    style={{ backgroundColor: item.accentColor }}
                  />
                  <span className="relative z-10 flex items-center gap-2 group-hover/btn:text-black transition-colors">
                    Ver Case Completo <ExternalLink size={14} />
                  </span>
                </button>
              </div>
              
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div 
                  className="absolute inset-0 bg-gradient-to-tr from-transparent to-transparent" 
                  style={{ 
                    background: `radial-gradient(circle at top right, ${item.accentColor}15, transparent 70%)`
                  }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
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
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl bg-zinc-950 border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
            >
              <button 
                onClick={() => setSelectedCase(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 rounded-full text-white hover:text-primary transition-colors"
              >
                <X size={24} />
              </button>

              <div className="grid md:grid-cols-2">
                <div className="h-64 md:h-full relative">
                  <img 
                    src={selectedCase.image} 
                    alt={selectedCase.client}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/50 to-transparent md:hidden" />
                </div>

                <div className="p-6 md:p-12 max-h-[80vh] overflow-y-auto">
                  <div className="flex flex-col sm:flex-row items-center sm:items-center gap-6 mb-8 text-center sm:text-left">
                    {selectedCase.logo && (
                      <button 
                        onClick={() => setPreviewLogo(selectedCase.logo)}
                        className="w-28 h-28 sm:w-32 sm:h-32 rounded-3xl bg-white/5 border border-white/10 p-4 sm:p-6 flex items-center justify-center overflow-hidden hover:bg-white/10 transition-all group/modal-logo shadow-xl shrink-0"
                        style={{ borderColor: `${selectedCase.accentColor}30` }}
                        title="Clique para ampliar a logo"
                      >
                        <img 
                          src={selectedCase.logo} 
                          alt={`${selectedCase.client} logo`}
                          className="max-w-full max-h-full object-contain group-hover/modal-logo:scale-110 transition-transform"
                          referrerPolicy="no-referrer"
                          onError={(e) => {
                            (e.target as HTMLImageElement).style.display = 'none';
                          }}
                        />
                      </button>
                    )}
                    <div className="flex flex-col items-center sm:items-start">
                      <div 
                        className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-2"
                        style={{ color: selectedCase.accentColor }}
                      >
                        <TrendingUp size={16} /> {selectedCase.result}
                      </div>
                      <h3 className="text-2xl md:text-4xl leading-tight">{selectedCase.client}</h3>
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

                    <div>
                      <h4 
                        className="text-xs uppercase tracking-widest mb-4 flex items-center gap-2"
                        style={{ color: selectedCase.accentColor }}
                      >
                        <CheckCircle2 size={14} /> Métricas de Escala
                      </h4>
                      <div className="grid grid-cols-2 gap-4">
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
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.3 + (i * 0.05) }}
                              className="bg-white/5 border border-white/5 p-4 rounded-xl group/metric transition-colors"
                              style={{ 
                                borderColor: i % 2 === 0 ? `${selectedCase.accentColor}10` : 'rgba(255,255,255,0.05)'
                              }}
                            >
                              <div 
                                className="text-[10px] text-gray-neutral uppercase tracking-widest mb-1 group-hover/metric:text-primary transition-colors"
                                style={{ color: 'rgba(255,255,255,0.4)' }}
                              >
                                {metric.label}
                              </div>
                              <div className={cn("text-lg font-bold", metricColor)}>
                                <AnimatedCounter 
                                  value={metric.value} 
                                  prefix={metric.prefix} 
                                  suffix={metric.suffix} 
                                  decimals={metric.decimals} 
                                  delay={0.5 + (i * 0.1)} 
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
