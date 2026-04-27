import React, { useMemo, useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend } from 'recharts';
import { motion } from 'motion/react';

interface CaseChartsProps {
  faturamentoInfo: { value: number; label: string };
  investimentoInfo: { value: number; label: string };
  accentColor: string;
}

const generateChartData = (faturamento: number, investimento: number, mode: 'history' | 'projection') => {
  const data = [];
  
  // Deterministic pseudo-random based on faturamento
  const pseudoRandom = (seed: number) => {
    let x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
  };
  
  let currentFat = faturamento * 0.15;
  let currentInv = investimento * 0.2;
  let seed = faturamento;
  
  for (let i = 1; i <= 5; i++) {
    currentFat = currentFat + (faturamento - currentFat) * (0.3 + pseudoRandom(seed++) * 0.1);
    currentInv = currentInv + (investimento - currentInv) * (0.3 + pseudoRandom(seed++) * 0.1);
    data.push({
      name: `Mês ${i}`,
      Faturamento: Math.round(currentFat),
      Investimento: Math.round(currentInv),
    });
  }

  // Month 6 is the final historical point AND the start of the projection
  data.push({
    name: `Atual`,
    Faturamento: faturamento,
    Investimento: investimento,
    ...(mode === 'projection' ? {
      FaturamentoProj: faturamento,
      InvestimentoProj: investimento,
    } : {})
  });

  if (mode === 'projection') {
    let projFat = faturamento;
    let projInv = investimento;
    
    for (let i = 1; i <= 12; i++) {
       projFat = projFat * (1.10 + (pseudoRandom(seed++) * 0.1)); // 10-20% growth
       projInv = projInv * (1.05 + (pseudoRandom(seed++) * 0.05)); // 5-10% growth
       data.push({
          name: `+${i}m`,
          FaturamentoProj: Math.round(projFat),
          InvestimentoProj: Math.round(projInv),
       });
    }
  }

  return data;
};

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const isProjection = label.includes('Proj');
    
    // Filter out duplicates on the intersection point ('Atual')
    const cleanPayload = payload.filter((e: any) => 
      !e.dataKey.includes('Proj') || !payload.some((p: any) => p.dataKey === e.dataKey.replace('Proj', ''))
    );

    return (
      <div className="bg-[#0A0D15]/95 backdrop-blur-xl border border-white/10 p-4 rounded-xl shadow-2xl min-w-[160px]">
        <p className="text-white/60 text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-3 flex items-center justify-between border-b border-white/10 pb-2">
            {label}
            {isProjection && <span className="ml-2 bg-primary/20 text-primary px-2 py-0.5 rounded text-[8px] sm:text-[9px]">PREVISÃO</span>}
        </p>
        {cleanPayload.map((entry: any, index: number) => {
          if (!entry.value) return null;
          const title = entry.dataKey.replace('Proj', '');
          return (
            <div key={index} className="flex flex-col mb-2 last:mb-0">
               <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-widest opacity-80" style={{ color: entry.color }}>
                 {title}
               </span>
               <span className="text-base sm:text-lg font-tech font-bold text-white drop-shadow-md">
                 {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(entry.value)}
               </span>
            </div>
          );
        })}
      </div>
    );
  }
  return null;
};

export const CaseCharts: React.FC<CaseChartsProps> = ({ faturamentoInfo, investimentoInfo, accentColor }) => {
  const [viewMode, setViewMode] = useState<'history' | 'projection'>('history');
  const data = useMemo(() => generateChartData(faturamentoInfo.value, investimentoInfo.value, viewMode), [faturamentoInfo.value, investimentoInfo.value, viewMode]);

  return (
    <div className="w-full h-full flex flex-col p-6 sm:p-10 justify-center bg-zinc-950/50 backdrop-blur-3xl overflow-hidden relative">
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent z-0 pointer-events-none" 
        animate={{ opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 blur-[120px] rounded-full pointer-events-none z-0" 
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 w-full"
      >
        <div className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h4 className="text-white font-montserrat font-black text-xl sm:text-2xl tracking-tight mb-2 flex items-center gap-2">
              <span className="w-2 h-6 rounded-full" style={{ backgroundColor: accentColor }}></span>
              {viewMode === 'history' ? 'Resultados Históricos' : 'Projeção de 12 Meses'}
            </h4>
            <p className="text-white/50 text-xs sm:text-sm font-medium">
              {viewMode === 'history' ? 'Crescimento e validação das campanhas de anúncios.' : 'Estimativa de crescimento mantendo a escalabilidade.'}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-2">
             <div className="flex bg-zinc-900/80 p-1.5 rounded-xl backdrop-blur-xl border border-white/20 shadow-xl relative w-full sm:w-auto">
               <div 
                  className="absolute inset-y-1.5 rounded-lg transition-all duration-300 ease-out z-0"
                  style={{ 
                    backgroundColor: accentColor, 
                    boxShadow: `0 0 15px ${accentColor}80`,
                    left: viewMode === 'history' ? '6px' : 'calc(50% + 3px)',
                    width: 'calc(50% - 9px)' 
                  }}
               />
               <button 
                 onClick={() => setViewMode('history')}
                 className={`relative z-10 px-5 py-2 text-[10px] md:text-xs font-bold uppercase tracking-widest rounded-lg transition-colors flex-1 sm:flex-none text-center ${viewMode === 'history' ? 'text-black' : 'text-white/70 hover:text-white'}`}
                 style={{
                    textShadow: viewMode === 'history' ? 'none' : '0 1px 3px rgba(0,0,0,0.8)'
                 }}
               >
                 Histórico
               </button>
               <button 
                 onClick={() => setViewMode('projection')}
                 className={`relative z-10 px-5 py-2 text-[10px] md:text-xs font-bold uppercase tracking-widest rounded-lg transition-colors flex-1 sm:flex-none text-center ${viewMode === 'projection' ? 'text-black' : 'text-white/70 hover:text-white'}`}
                 style={{
                    textShadow: viewMode === 'projection' ? 'none' : '0 1px 3px rgba(0,0,0,0.8)'
                 }}
               >
                 Projetar (+12m)
               </button>
             </div>
          </div>
        </div>
        
        <div className="h-[250px] sm:h-[300px] w-full bg-[#111827]/40 rounded-2xl border border-white/5 p-4 sm:p-6 backdrop-blur-sm">
           <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 10, right: 40, left: 20, bottom: 0 }}>
              <defs>
                <linearGradient id="colorFat" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={accentColor} stopOpacity={0.6}/>
                  <stop offset="95%" stopColor={accentColor} stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorInv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
              <XAxis 
                dataKey="name" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: 'rgba(255,255,255,0.4)', fontSize: 9, fontWeight: 700 }} 
                dy={10}
              />
              <YAxis 
                hide={false}
                axisLine={false}
                tickLine={false}
                tick={{ fill: 'rgba(255,255,255,0.3)', fontSize: 9, fontWeight: 700 }}
                tickFormatter={(value) => `R$${(value / 1000).toFixed(0)}k`}
                dx={-10}
              />
              <Tooltip content={<CustomTooltip />} cursor={{ stroke: 'rgba(255,255,255,0.1)', strokeWidth: 1, strokeDasharray: '3 3' }} />
              
              <Area 
                type="monotone" 
                dataKey="InvestimentoProj" 
                stroke="#ef4444" 
                strokeDasharray="4 4"
                strokeWidth={2}
                fillOpacity={0.4} 
                fill="url(#colorInv)" 
                activeDot={{ r: 4, fill: '#ef4444', strokeWidth: 0 }}
                isAnimationActive={true}
              />
              <Area 
                type="monotone" 
                dataKey="FaturamentoProj" 
                stroke={accentColor} 
                strokeDasharray="4 4"
                strokeWidth={3}
                fillOpacity={0.4} 
                fill="url(#colorFat)" 
                activeDot={{ r: 6, fill: accentColor, stroke: '#000', strokeWidth: 3 }}
                isAnimationActive={true}
              />

              <Area 
                type="monotone" 
                dataKey="Investimento" 
                stroke="#ef4444" 
                strokeWidth={2}
                fillOpacity={1} 
                fill="url(#colorInv)" 
                activeDot={{ r: 4, fill: '#ef4444', strokeWidth: 0 }}
              />
              <Area 
                type="monotone" 
                dataKey="Faturamento" 
                stroke={accentColor} 
                strokeWidth={3}
                fillOpacity={1} 
                fill="url(#colorFat)" 
                activeDot={{ r: 6, fill: accentColor, stroke: '#000', strokeWidth: 3 }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="relative z-10 w-full mt-6 sm:mt-8"
      >
         <div className="grid grid-cols-2 gap-3 sm:gap-6">
           <div className="bg-[#111827]/80 backdrop-blur-md rounded-2xl border border-white/5 p-4 sm:p-5 flex flex-col justify-center relative overflow-hidden group">
             <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
             <div className="text-[9px] sm:text-[11px] font-montserrat uppercase font-bold tracking-[0.2em] text-[#F87171] mb-1 sm:mb-2 flex items-center justify-between">
               <span>{viewMode === 'history' ? 'Gasto em Ads' : 'Gasto Projetado'}</span>
               <div className="w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)] animate-pulse" />
             </div>
             <div className="font-tech text-white font-bold text-lg sm:text-2xl mt-1">
               {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(viewMode === 'history' ? investimentoInfo.value : data[data.length - 1].InvestimentoProj)}
             </div>
           </div>
           
           <div className="bg-[#111827]/80 backdrop-blur-md rounded-2xl border border-white/5 p-4 sm:p-5 flex flex-col justify-center border-b-[3px] relative overflow-hidden group" style={{ borderBottomColor: accentColor }}>
             <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
             <div className="text-[9px] sm:text-[11px] font-montserrat uppercase font-bold tracking-[0.2em] text-[#34D399] mb-1 sm:mb-2 flex items-center justify-between">
               <span>{viewMode === 'history' ? 'Faturamento Total' : 'Faturamento Projetado'}</span>
               <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
             </div>
             <div className="font-tech text-white font-black text-xl sm:text-3xl mt-1 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
               {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(viewMode === 'history' ? faturamentoInfo.value : data[data.length - 1].FaturamentoProj)}
             </div>
           </div>
         </div>
      </motion.div>
    </div>
  );
};
