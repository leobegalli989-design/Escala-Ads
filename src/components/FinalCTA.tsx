import React from 'react';
import { motion } from 'motion/react';
import { MessageSquare, ArrowRight } from 'lucide-react';

export const FinalCTA = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-10" />
      
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass p-8 sm:p-12 md:p-20 rounded-[2rem] sm:rounded-[3rem] border-primary/30 text-center relative overflow-hidden group"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="w-16 h-16 sm:w-20 sm:h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6 sm:mb-8 border border-primary/30"
          >
            <MessageSquare className="text-primary" size={28} />
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-6xl mb-6 sm:mb-8 leading-tight font-black">
            VAMOS ESCALAR SEU <br className="hidden sm:block" />
            <span className="text-primary text-glow">NEGÓCIO?</span>
          </h2>
          
          <p className="text-gray-neutral text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 sm:mb-12">
            O próximo nível do seu faturamento está a um diagnóstico de distância. Fale com um estrategista agora e descubra seu potencial de escala.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/5535998208622"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-5 sm:px-10 sm:py-5 bg-primary text-black font-black uppercase tracking-tighter rounded-xl hover:shadow-[0_0_40px_rgba(20,163,229,0.7)] transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-3 text-sm sm:text-base"
            >
              Agendar Diagnóstico
              <ArrowRight size={20} />
            </a>
            <a 
              href="https://wa.me/5535998208622"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-5 sm:px-10 sm:py-5 border border-white/20 hover:border-primary/50 hover:bg-primary/5 transition-all text-white font-bold uppercase tracking-tighter rounded-xl flex items-center justify-center gap-3 text-sm sm:text-base"
            >
              Chamar no WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
