import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';
import { Logo } from './Logo';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Agência', href: '#about' },
    { name: 'Serviços', href: '#services' },
    { name: 'Metodologia', href: '#methodology' },
    { name: 'Cases', href: '#cases' },
    { name: 'Depoimentos', href: '#depoimentos' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const offset = 80; // Height of the fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-[5000] transition-all duration-500 px-6 py-4',
        isScrolled ? 'bg-black/80 safari-blur border-b border-white/10 py-3' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a 
          href="#home" 
          onClick={(e) => scrollToSection(e, '#home')}
          className="flex items-center gap-2 group"
        >
          <div className="w-12 h-12 flex items-center justify-center group-hover:scale-110 transition-transform">
            <Logo className="w-full h-full" />
          </div>
          <span className="font-montserrat text-xl tracking-tighter">
            ESCALA<span className="text-primary">ADS</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-sm font-medium text-white/70 hover:text-primary transition-colors uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://wa.me/5535998208622?text=Olá!%20Gostaria%20de%20falar%20com%20um%20especialista%20da%20Escala%20Ads."
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-primary text-black font-bold rounded-full hover:shadow-[0_0_20px_rgba(20,163,229,0.6)] transition-all hover:scale-105 active:scale-95"
          >
            Falar com Especialista
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-2 hover:bg-white/10 rounded-full transition-colors relative z-[7000]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[6000] md:hidden bg-black/98 backdrop-blur-2xl"
          >
            <div className="flex flex-col h-full pt-32 pb-12 px-8 overflow-y-auto">
              <div className="flex flex-col gap-6 items-center w-full">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      delay: index * 0.08 + 0.1,
                      type: "spring",
                      stiffness: 300,
                      damping: 30
                    }}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-4xl font-black text-white hover:text-primary transition-all uppercase tracking-tighter active:scale-95"
                  >
                    {link.name}
                  </motion.a>
                ))}
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navLinks.length * 0.08 + 0.2 }}
                  className="w-full pt-8 mt-4 border-t border-white/10"
                >
                  <a
                    href="https://wa.me/5535998208622?text=Olá!%20Gostaria%20de%20falar%20com%20um%20especialista%20da%20Escala%20Ads."
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-full flex items-center justify-center py-6 bg-primary text-black font-black rounded-2xl text-xl uppercase tracking-widest shadow-[0_0_40px_rgba(20,163,229,0.4)] active:scale-95 transition-transform"
                  >
                    Falar com Especialista
                  </a>
                </motion.div>

                {/* Mobile Menu Footer Info */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="mt-auto pt-12 text-center"
                >
                  <p className="text-white/40 text-[10px] uppercase tracking-[0.3em] mb-2">Performance Digital de Elite</p>
                  <div className="flex gap-4 justify-center">
                    <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60">
                      <Logo className="w-4 h-4" />
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
