import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, TrendingUp, X, CheckCircle2 } from 'lucide-react';
import { AnimatedCounter } from './AnimatedCounter';
import { cn } from '../lib/utils';

const cases = [
  {
    client: 'New York Chicken Crispy',
    result: '8.88x ROAS',
    description: 'Faturamento de R$ 78.923,75 com apenas R$ 8.886,88 de investimento em anúncios.',
    image: 'https://images.unsplash.com/photo-1606131731446-5568d87113aa?auto=format&fit=crop&q=80&w=800',
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
    description: 'Escalamos de R$ 4k para +R$ 25k/mês. Faturamento total com tráfego pago ultrapassando R$ 100.000.',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800',
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
    description: 'Dominação de mercado regional com faturamento de R$ 98.182,89 e investimento estratégico de apenas R$ 4.043,13.',
    image: 'https://images.unsplash.com/photo-1551703599-6b3e8379aa8c?auto=format&fit=crop&q=80&w=800',
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
    description: 'Transformação digital com faturamento de R$ 24.974,63 e investimento estratégico de R$ 1.698,66.',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=800',
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
    description: 'Faturamento de R$ 10.043,78 com apenas R$ 820,13 de investimento em anúncios.',
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=800',
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
    description: 'Faturamento de R$ 10.132,00 com investimento estratégico de R$ 977,58 no setor automotivo.',
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=800',
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
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.client}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-40 group-hover:opacity-60"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent p-8 flex flex-col justify-end">
                <motion.div 
                  initial={{ x: -10, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-widest mb-2"
                >
                  <TrendingUp size={14} /> {item.result}
                </motion.div>
                <h3 className="text-2xl mb-2 group-hover:text-primary transition-colors duration-300">{item.client}</h3>
                <p className="text-gray-neutral text-xs mb-6 line-clamp-2 opacity-80 group-hover:opacity-100 transition-opacity">
                  {item.description}
                </p>
                <button 
                  onClick={() => setSelectedCase(item)}
                  className="w-full py-3 border border-white/10 group-hover:border-primary/50 group-hover:bg-primary group-hover:text-black transition-all duration-500 rounded-lg flex items-center justify-center gap-2 text-xs font-bold uppercase overflow-hidden relative"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Ver Case Completo <ExternalLink size={14} />
                  </span>
                </button>
              </div>
              
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent" />
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

                <div className="p-8 md:p-12 max-h-[80vh] overflow-y-auto">
                  <div className="flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-widest mb-4">
                    <TrendingUp size={16} /> {selectedCase.result}
                  </div>
                  <h3 className="text-3xl md:text-4xl mb-6">{selectedCase.client}</h3>
                  
                  <div className="space-y-8">
                    <div>
                      <h4 className="text-primary text-xs uppercase tracking-widest mb-3 flex items-center gap-2">
                        <CheckCircle2 size={14} /> O Desafio
                      </h4>
                      <p className="text-gray-neutral text-sm leading-relaxed">
                        {selectedCase.fullDetails.challenge}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-primary text-xs uppercase tracking-widest mb-3 flex items-center gap-2">
                        <CheckCircle2 size={14} /> Estratégia de Elite
                      </h4>
                      <p className="text-gray-neutral text-sm leading-relaxed">
                        {selectedCase.fullDetails.strategy}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-primary text-xs uppercase tracking-widest mb-4 flex items-center gap-2">
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
                              className="bg-white/5 border border-white/5 p-4 rounded-xl group/metric hover:border-primary/30 transition-colors"
                            >
                              <div className="text-[10px] text-gray-neutral uppercase tracking-widest mb-1 group-hover/metric:text-primary transition-colors">{metric.label}</div>
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
                    className="w-full mt-10 py-4 bg-primary text-black font-bold uppercase tracking-widest rounded-xl hover:scale-[1.02] transition-transform"
                  >
                    Fechar Case
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
