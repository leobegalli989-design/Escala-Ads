import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Calculator, 
  TrendingUp, 
  DollarSign, 
  Target, 
  ShoppingCart, 
  Users, 
  Home, 
  Stethoscope, 
  Zap,
  ArrowRight,
  Info
} from 'lucide-react';
import { cn } from '../lib/utils';
import { AnimatedCounter } from './AnimatedCounter';

interface Niche {
  id: string;
  name: string;
  icon: any;
  description: string;
  avgCpm: number;
  avgCtr: number;
  avgConvRate: number;
  avgTicket: number;
  color: string;
}

const NICHES: Niche[] = [
  {
    id: 'ecommerce',
    name: 'E-commerce',
    icon: ShoppingCart,
    description: 'Venda de produtos físicos direta ao consumidor.',
    avgCpm: 15,
    avgCtr: 1.2,
    avgConvRate: 1.5,
    avgTicket: 180,
    color: 'text-blue-400',
  },
  {
    id: 'infoproducts',
    name: 'Infoprodutos',
    icon: Zap,
    description: 'Cursos online, mentorias e produtos digitais.',
    avgCpm: 25,
    avgCtr: 0.8,
    avgConvRate: 2.5,
    avgTicket: 497,
    color: 'text-emerald-400',
  },
  {
    id: 'local-business',
    name: 'Negócio Local',
    icon: Users,
    description: 'Serviços, lojas físicas e delivery.',
    avgCpm: 12,
    avgCtr: 2.5,
    avgConvRate: 10,
    avgTicket: 120,
    color: 'text-amber-400',
  },
  {
    id: 'real-estate',
    name: 'Imobiliário',
    icon: Home,
    description: 'Venda e locação de imóveis de alto padrão.',
    avgCpm: 35,
    avgCtr: 0.5,
    avgConvRate: 0.8,
    avgTicket: 5000, // Comissão média ou valor de entrada
    color: 'text-violet-400',
  },
  {
    id: 'health',
    name: 'Saúde & Estética',
    icon: Stethoscope,
    description: 'Clínicas, médicos e procedimentos estéticos.',
    avgCpm: 20,
    avgCtr: 1.5,
    avgConvRate: 5,
    avgTicket: 800,
    color: 'text-rose-400',
  },
];

export const ROIProjector = () => {
  const [budget, setBudget] = useState(5000);
  const [selectedNiche, setSelectedNiche] = useState(NICHES[0]);
  const [isHovered, setIsHovered] = useState<string | null>(null);

  const results = useMemo(() => {
    const impressions = (budget / selectedNiche.avgCpm) * 1000;
    const clicks = impressions * (selectedNiche.avgCtr / 100);
    const conversions = clicks * (selectedNiche.avgConvRate / 100);
    const revenue = conversions * selectedNiche.avgTicket;
    const roas = revenue / budget;
    const profit = revenue - budget;

    return {
      impressions,
      clicks,
      conversions,
      revenue,
      roas,
      profit
    };
  }, [budget, selectedNiche]);

  return (
    <section id="calculator" className="py-24 relative overflow-hidden bg-black">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] uppercase tracking-[0.3em] mb-6"
          >
            <Calculator size={12} />
            Simulador de Escala
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">
            PROJETE SEU <span className="text-primary">RESULTADO</span>
          </h2>
          <p className="text-gray-neutral max-w-2xl mx-auto text-lg">
            Selecione seu nicho e defina seu investimento mensal para visualizar o potencial de escala do seu negócio com nossa metodologia de elite.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Controls Side */}
          <div className="lg:col-span-5 space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-3xl border-white/10"
            >
              <div className="mb-10">
                <div className="flex justify-between items-end mb-4">
                  <label className="text-xs uppercase tracking-[0.2em] text-white/40 font-bold">Investimento Mensal</label>
                  <div className="text-3xl font-montserrat text-primary font-black">
                    R$ {budget.toLocaleString('pt-BR')}
                  </div>
                </div>
                <input
                  type="range"
                  min="1000"
                  max="100000"
                  step="1000"
                  value={budget}
                  onChange={(e) => setBudget(parseInt(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-primary"
                />
                <div className="flex justify-between mt-2 text-[10px] text-white/20 font-mono">
                  <span>R$ 1.000</span>
                  <span>R$ 100.000</span>
                </div>
              </div>

              <div>
                <label className="text-xs uppercase tracking-[0.2em] text-white/40 font-bold mb-6 block">Selecione seu Nicho</label>
                <div className="grid grid-cols-1 gap-3">
                  {NICHES.map((niche) => {
                    const Icon = niche.icon;
                    const isSelected = selectedNiche.id === niche.id;
                    return (
                      <motion.button
                        key={niche.id}
                        onClick={() => setSelectedNiche(niche)}
                        whileHover={{ x: 5 }}
                        whileTap={{ scale: 0.98 }}
                        className={cn(
                          "flex items-center gap-4 p-4 rounded-xl border transition-all text-left group relative overflow-hidden",
                          isSelected 
                            ? "bg-primary/10 border-primary/50 shadow-[0_0_20px_rgba(20,163,229,0.1)]" 
                            : "bg-white/5 border-white/5 hover:border-white/20"
                        )}
                      >
                        <div className={cn(
                          "w-10 h-10 rounded-lg flex items-center justify-center transition-colors",
                          isSelected ? "bg-primary text-black" : "bg-white/5 text-white/40 group-hover:text-white"
                        )}>
                          <Icon size={20} />
                        </div>
                        <div>
                          <div className={cn(
                            "text-sm font-bold uppercase tracking-tight",
                            isSelected ? "text-white" : "text-white/60"
                          )}>
                            {niche.name}
                          </div>
                          <div className="text-[10px] text-white/30 leading-tight">
                            {niche.description}
                          </div>
                        </div>
                        {isSelected && (
                          <motion.div 
                            layoutId="active-niche"
                            className="absolute right-4 text-primary"
                          >
                            <ArrowRight size={16} />
                          </motion.div>
                        )}
                      </motion.button>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            <div className="glass p-6 rounded-2xl border-white/5 flex items-start gap-4">
              <div className="p-2 bg-amber-500/10 rounded-lg text-amber-500">
                <Info size={18} />
              </div>
              <p className="text-[11px] text-white/40 leading-relaxed">
                *Os valores apresentados são projeções baseadas em médias de mercado para cada nicho. Os resultados reais podem variar dependendo da oferta, criativos e maturidade da conta de anúncios.
              </p>
            </div>
          </div>

          {/* Results Side */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Main Result: Revenue */}
              <motion.div 
                layout
                className="md:col-span-2 glass p-8 rounded-3xl border-emerald-500/30 bg-emerald-500/5 relative overflow-hidden group transform-gpu will-change-transform"
              >
                <div className="flex justify-between items-start mb-4 relative z-10">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]" />
                    <span className="text-[10px] uppercase tracking-[0.3em] text-emerald-500 font-black">Faturamento Estimado</span>
                  </div>
                  <TrendingUp className="text-emerald-500" size={20} />
                </div>
                <div className="text-5xl md:text-7xl font-montserrat text-white font-black mb-2 relative z-10">
                  <AnimatedCounter value={results.revenue} prefix="R$ " decimals={2} />
                </div>
                <div className="text-sm text-emerald-500/60 font-medium relative z-10">
                  Potencial de escala mensal projetado
                </div>
                
                {/* Decorative Graph Background */}
                <div className="absolute bottom-0 left-0 right-0 h-32 opacity-10 pointer-events-none">
                  <svg className="w-full h-full" viewBox="0 0 400 100" preserveAspectRatio="none">
                    <path d="M0 80 Q 50 70, 100 50 T 200 60 T 300 20 T 400 40 V 100 H 0 Z" fill="currentColor" className="text-emerald-500" />
                  </svg>
                </div>
              </motion.div>

              {/* Secondary Results */}
              <ResultCard 
                label="ROAS Projetado" 
                value={results.roas} 
                suffix="x" 
                decimals={2} 
                icon={Target} 
                color="text-amber-400"
                sub="Retorno sobre investimento"
              />
              <ResultCard 
                label="Lucro Bruto" 
                value={results.profit} 
                prefix="R$ " 
                decimals={2} 
                icon={DollarSign} 
                color="text-primary"
                sub="Faturamento - Investimento"
              />
              <ResultCard 
                label="Vendas/Leads" 
                value={results.conversions} 
                decimals={0} 
                icon={Users} 
                color="text-violet-400"
                sub="Conversões estimadas"
              />
              <ResultCard 
                label="Cliques" 
                value={results.clicks} 
                decimals={0} 
                icon={Zap} 
                color="text-rose-400"
                sub="Tráfego qualificado"
              />
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-8 p-8 rounded-3xl bg-primary text-black flex flex-col md:flex-row items-center justify-between gap-6 group cursor-pointer hover:shadow-[0_0_40px_rgba(20,163,229,0.4)] transition-all"
              onClick={() => window.open('https://wa.me/5535998208622', '_blank')}
            >
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-black uppercase tracking-tighter mb-1">Quer alcançar esses números?</h3>
                <p className="text-sm font-bold opacity-80">Agende um diagnóstico gratuito e vamos traçar sua rota de escala.</p>
              </div>
              <div className="w-14 h-14 bg-black text-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <ArrowRight size={28} />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ResultCard = ({ label, value, prefix = '', suffix = '', decimals = 0, icon: Icon, color, sub }: any) => (
  <motion.div 
    layout
    className="glass p-6 rounded-2xl border-white/5 hover:border-white/20 transition-all group transform-gpu will-change-transform"
  >
    <div className="flex items-center justify-between mb-4">
      <span className="text-[9px] uppercase tracking-[0.2em] text-white/40 font-black">{label}</span>
      <Icon size={16} className={cn("transition-transform group-hover:scale-110", color)} />
    </div>
    <div className={cn("text-2xl font-montserrat font-black mb-1", color)}>
      <AnimatedCounter value={value} prefix={prefix} suffix={suffix} decimals={decimals} />
    </div>
    <div className="text-[10px] text-white/20 font-medium uppercase tracking-wider">
      {sub}
    </div>
  </motion.div>
);
