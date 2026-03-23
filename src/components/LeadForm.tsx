import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, Building2, User, Phone, Target, TrendingUp } from 'lucide-react';

export const LeadForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    company: '',
    revenue: '',
    challenge: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const text = `Olá! Meu nome é *${formData.name}*.
Gostaria de agendar um diagnóstico estratégico para minha empresa *${formData.company}*.

*Faturamento Atual:* ${formData.revenue}
*Meu principal desafio hoje é:* ${formData.challenge}

Aguardo o retorno para darmos o próximo passo!`;

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/5535998208622?text=${encodedText}`;
    
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
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black tracking-tighter mb-4"
          >
            FICHA DE <span className="text-primary">APLICAÇÃO</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-neutral max-w-2xl mx-auto"
          >
            Preencha os dados abaixo para enviar suas informações diretamente para o nosso WhatsApp e agendar seu diagnóstico estratégico.
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

          <div className="grid md:grid-cols-2 gap-6 mb-6">
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
                <option value="" disabled>Selecione uma opção</option>
                <option value="Abaixo de R$ 10.000">Abaixo de R$ 10.000</option>
                <option value="De R$ 10.000 a R$ 50.000">De R$ 10.000 a R$ 50.000</option>
                <option value="De R$ 50.000 a R$ 100.000">De R$ 50.000 a R$ 100.000</option>
                <option value="Acima de R$ 100.000">Acima de R$ 100.000</option>
              </select>
            </div>
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
              className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors resize-none"
              placeholder="Descreva brevemente o que está impedindo sua empresa de crescer..."
            />
          </div>

          <button 
            type="submit"
            className="w-full py-4 bg-primary text-black font-black uppercase tracking-widest rounded-xl hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(20,163,229,0.3)] transition-all flex items-center justify-center gap-2"
          >
            Enviar para o WhatsApp <Send size={18} />
          </button>
        </motion.form>
      </div>
    </section>
  );
};
