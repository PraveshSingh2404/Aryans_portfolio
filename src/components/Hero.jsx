'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 70 } }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-zinc-50 text-zinc-900 px-6">
      <motion.div 
        variants={container} 
        initial="hidden" 
        animate="show" 
        className="max-w-4xl mx-auto w-full"
      >
        <motion.p variants={item} className="text-sm font-medium tracking-widest text-zinc-500 mb-4 uppercase">
          UI/UX & Graphic Designer
        </motion.p>
        
        <motion.h1 variants={item} className="text-5xl md:text-7xl font-light leading-tight tracking-tight mb-6">
          Hi, I'm <span className="font-medium text-zinc-800">Aryan.</span><br/>
          I craft <span className="font-medium italic text-zinc-800">mobile-first</span> interfaces and compelling visual identities.
        </motion.h1>

        <motion.p variants={item} className="text-lg text-zinc-600 max-w-2xl mb-12 leading-relaxed">
          Bridging the gap between user-centered research and functional aesthetics. Experienced in wireframing, interactive prototyping, and delivering polished digital products.
        </motion.p>

        <motion.div variants={item} className="flex flex-wrap gap-6 items-center">
          <a href="#projects" className="group flex items-center gap-2 bg-zinc-900 text-white px-8 py-4 rounded-full hover:bg-zinc-800 transition-colors shadow-lg shadow-zinc-200/50">
            View Case Studies
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#contact" className="text-zinc-600 hover:text-zinc-900 transition-colors font-medium px-2 py-4">
            Let's Talk
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}