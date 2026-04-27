import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, Building2, User, Phone, Target, TrendingUp, Video, Calendar, Clock } from 'lucide-react';

export const LeadForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    company: '',
    revenue: '',
    propertyRent: '',
    willingToInvest: '',
    challenge: '',
    date: '',
    time: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Convert current emojis to standard strings to avoid URL encoding ? issues caused by unicode escape parsing
    const text = `Olá! Meu nome é *${formData.name}* 👋
Gostaria de agendar uma reunião de diagnóstico via Google Meet para minha empresa *${formData.company}* 🚀

💰 *Faturamento Atual:* ${formData.revenue}
🏢 *Aluguel do Imóvel:* ${formData.propertyRent}
📈 *Disposto a investir R$ 1.000+ em tráfego?* ${formData.willingToInvest}
🎯 *Meu principal desafio hoje é:* ${formData.challenge}
🗓️ *Disponibilidade:* ${formData.date.split('-').reverse().join('/')} às ${formData.time}

Aguardo o retorno para validarmos um horário! 💥`;

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/5535984081705?text=${encodedText}`;
    
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="cadastro" className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(255,204,0,0.03),transparent_40%),radial-gradient(circle_at_100%_50%,rgba(249,115,22,0.03),transparent_40%),radial-gradient(circle_at_0%_100%,rgba(16,185,129,0.03),transparent_40%)] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
             initial={{ scale: 0.8, opacity: 0 }}
             whileInView={{ scale: 1, opacity: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5, type: 'spring', bounce: 0.5 }}
             className="flex justify-center mb-6"
          >
             <motion.div 
               animate={{ y: [0, -10, 0] }}
               transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
               className="w-16 h-16 md:w-20 md:h-20 bg-white/5 rounded-2xl flex items-center justify-center shadow-[0_0_40px_rgba(255,255,255,0.05)] relative border border-white/10 backdrop-blur-xl"
             >
               <img 
                 src="https://i.imgur.com/DoP8lpt.png" 
                 alt="Google Meet"
                 className="w-10 h-10 md:w-12 md:h-12 object-contain"
                 referrerPolicy="no-referrer"
               />
             </motion.div>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black tracking-tighter mb-4 flex items-center justify-center gap-3 flex-wrap"
          >
            AGENDAR <span className="text-primary">REUNIÃO (GOOGLE MEET)</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-neutral max-w-2xl mx-auto"
          >
            Preencha os dados abaixo para enviar suas informações e agendar nosso bate-papo de diagnóstico estratégico no Google Meet.
          </motion.p>
        </div>

        <motion.form 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          onSubmit={handleSubmit}
          className="bg-zinc-900/50 border border-white/10 rounded-3xl p-6 md:p-10 shadow-2xl backdrop-blur-sm"
        >
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-white/80 flex items-center gap-2">
                <User size={16} className="text-primary" /> Nome Completo
              </label>
              <input 
                type="text" 
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors"
                placeholder="Seu nome"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-white/80 flex items-center gap-2">
                <Phone size={16} className="text-primary" /> WhatsApp
              </label>
              <input 
                type="tel" 
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors"
                placeholder="(00) 00000-0000"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-white/80 flex items-center gap-2">
                <Building2 size={16} className="text-primary" /> Nome da Empresa
              </label>
              <input 
                type="text" 
                name="company"
                required
                value={formData.company}
                onChange={handleChange}
                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors"
                placeholder="Sua empresa"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-white/80 flex items-center gap-2">
                <TrendingUp size={16} className="text-primary" /> Faturamento Atual
              </label>
              <select 
                name="revenue"
                required
                value={formData.revenue}
                onChange={handleChange}
                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors appearance-none"
              >
                <option value="" disabled>Qual o faturamento da empresa?</option>
                <option value="Abaixo de R$ 10.000">Abaixo de R$ 10.000</option>
                <option value="De R$ 10.000 a R$ 50.000">De R$ 10.000 a R$ 50.000</option>
                <option value="De R$ 50.000 a R$ 100.000">De R$ 50.000 a R$ 100.000</option>
                <option value="Acima de R$ 100.000">Acima de R$ 100.000</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-white/80 flex items-center gap-2">
                <Building2 size={16} className="text-primary" /> Aluguel do Imóvel
              </label>
              <input 
                type="text" 
                name="propertyRent"
                required
                value={formData.propertyRent}
                onChange={handleChange}
                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors"
                placeholder="Ex: R$ 2.500,00"
              />
            </div>
          </div>

          <div className="space-y-2 mb-6">
            <label className="text-sm font-bold text-white/80 flex items-center gap-2">
              <Target size={16} className="text-primary" /> Está disposta a investir pelo menos R$ 1.000 em tráfego pago?
            </label>
            <select 
              name="willingToInvest"
              required
              value={formData.willingToInvest}
              onChange={handleChange}
              className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors appearance-none"
            >
              <option value="" disabled>Selecione uma opção</option>
              <option value="Sim, estou disposto">Sim, estou disposto a investir R$ 1.000+ mensais</option>
              <option value="Não, ainda não posso">Não tenho esse orçamento no momento</option>
            </select>
          </div>

          <div className="space-y-2 mb-8">
            <label className="text-sm font-bold text-white/80 flex items-center gap-2">
              <Target size={16} className="text-primary" /> Qual é o seu principal desafio hoje?
            </label>
            <textarea 
              name="challenge"
              required
              value={formData.challenge}
              onChange={handleChange}
              rows={4}
              className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors resize-none mb-6"
              placeholder="Descreva brevemente o que está impedindo sua empresa de crescer..."
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="space-y-2">
               <label className="text-sm font-bold text-white/80 flex items-center gap-2">
                 <Calendar size={16} className="text-primary" /> Data Sugerida
               </label>
               <input 
                 type="date"
                 name="date"
                 required
                 value={formData.date}
                 onChange={handleChange}
                 className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors"
                 style={{ colorScheme: 'dark' }}
               />
            </div>
            <div className="space-y-2">
               <label className="text-sm font-bold text-white/80 flex items-center gap-2">
                 <Clock size={16} className="text-primary" /> Horário Sugerido
               </label>
               <input 
                 type="time"
                 name="time"
                 required
                 value={formData.time}
                 onChange={handleChange}
                 className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors"
                 style={{ colorScheme: 'dark' }}
               />
            </div>
          </div>

          <motion.button 
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative w-full py-5 rounded-2xl overflow-hidden bg-gradient-to-b from-[#25D366] to-[#128C7E] transition-all duration-300 hover:shadow-[0_0_40px_rgba(37,211,102,0.4)]"
          >
            {/* Animated shimmer effect via framer-motion */}
            <motion.div 
              className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
              animate={{ x: ['-200%', '200%'] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
            />
            
            {/* Inner borders and gloss */}
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-white/20 to-transparent opacity-50" />
            <div className="absolute inset-0 z-0 border border-white/40 rounded-2xl" />

            <span className="relative z-10 flex items-center justify-center gap-3 text-white font-black text-lg md:text-xl uppercase tracking-wider drop-shadow-md">
              <img 
                src="https://i.imgur.com/yRjn3DP.jpeg" 
                alt="WhatsApp" 
                className="w-8 h-8 rounded-full object-cover drop-shadow-sm group-hover:scale-110 transition-transform duration-300" 
              />
              Agendar Reunião
            </span>
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};
