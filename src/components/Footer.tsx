import React from 'react';
import { Instagram, Linkedin, Twitter, Youtube, ArrowUp } from 'lucide-react';
import { Logo } from './Logo';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black border-t border-white/10 pt-20 pb-10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 flex items-center justify-center">
                <Logo className="w-full h-full" />
              </div>
              <span className="font-montserrat text-lg tracking-tighter">
                ESCALA<span className="text-primary">ADS</span>
              </span>
            </div>
            <p className="text-gray-neutral text-sm leading-relaxed">
              A agência de marketing digital que une inteligência de dados e performance agressiva para escalar negócios de alto nível.
            </p>
            <div className="flex gap-4">
              {[Instagram, Linkedin, Twitter, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-primary hover:border-primary transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-8">Links Rápidos</h4>
            <ul className="space-y-4">
              {['Início', 'Agência', 'Serviços', 'Metodologia', 'Cases'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-gray-neutral text-sm hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-8">Serviços</h4>
            <ul className="space-y-4">
              {['Tráfego Pago', 'Funis de Vendas', 'Social Media', 'Copywriting', 'Branding'].map((link) => (
                <li key={link}>
                  <a href="#services" className="text-gray-neutral text-sm hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-8">Contato</h4>
            <ul className="space-y-4 text-sm text-gray-neutral">
              <li>contato@escalaads.com.br</li>
              <li>+55 (11) 99999-9999</li>
              <li>Av. Paulista, 1000 - São Paulo, SP</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/5 gap-6">
          <div className="text-gray-neutral text-xs">
            © 2024 Escala Ads. Todos os direitos reservados.
          </div>
          <div className="flex gap-8 text-xs text-gray-neutral">
            <a href="#" className="hover:text-primary transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-primary transition-colors">Termos de Uso</a>
          </div>
          <button 
            onClick={scrollToTop}
            className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary hover:text-black transition-all group"
          >
            <ArrowUp size={18} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};
