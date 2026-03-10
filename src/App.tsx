/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import Lenis from 'lenis';
import { motion } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Methodology } from './components/Methodology';
import { CorePillars } from './components/CorePillars';
import { Cases } from './components/Cases';
import { Testimonials } from './components/Testimonials';
import { Differentials } from './components/Differentials';
import { ROIProjector } from './components/ROIProjector';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { ScrollIndicator } from './components/ScrollIndicator';
import { Loader } from './components/Loader';
import { WhatsAppButton } from './components/WhatsAppButton';
import { BackToTop } from './components/BackToTop';

export default function App() {
  useEffect(() => {
    const isMobile = window.innerWidth < 1024;
    if (isMobile) return;
    
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: isMobile ? 1.5 : 2,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-black selection:bg-primary selection:text-black">
      <Loader />
      <CustomCursor />
      <ScrollIndicator />
      
      <Navbar />
      
      {/* Noise Overlay */}
      <div className="fixed inset-0 noise pointer-events-none z-[9999]" />
      
      <main>
        <Hero />
        
        <div>
          <About />
          <Services />
          <CorePillars />
          <Methodology />
          <ROIProjector />
          <Cases />
          <Testimonials />
          <Differentials />
          <FinalCTA />
        </div>
      </main>
      
      <Footer />
      <WhatsAppButton />
      <BackToTop />

      {/* Global Glow Effects */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[-1] overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/5 blur-[120px] rounded-full" />
      </div>
    </div>
  );
}
