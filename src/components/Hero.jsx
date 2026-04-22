import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

// The In-Place 3D Flip "Jack" Component
const JackCard = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <span 
      className="relative inline-flex items-center justify-center cursor-help font-semibold text-zinc-900 mx-1 align-middle"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      // Perspective gives the 3D flip its depth
      style={{ perspective: '1000px' }} 
    >
      {/* Front of the "coin": The Text */}
      <motion.span
        animate={{ rotateY: isHovered ? 90 : 0, opacity: isHovered ? 0 : 1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="relative z-10"
      >
        Jack
      </motion.span>
      
      {/* Back of the "coin": The Playing Card (Centered exactly over the text) */}
      <motion.div
        initial={{ rotateY: -90, opacity: 0 }}
        animate={{ rotateY: isHovered ? 0 : -90, opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        // Using a compact size so it fits neatly inline without overlapping everything
        className="absolute w-16 h-24 md:w-20 md:h-28 bg-white rounded-lg shadow-xl border border-zinc-200 pointer-events-none flex flex-col justify-between p-2 z-50"
        style={{ backfaceVisibility: 'hidden' }}
      >
        {/* Top left rank and suit */}
        <div className="text-left text-zinc-900 font-bold text-xs leading-none">
          J<br/><span className="text-sm">♠</span>
        </div>
        
        {/* Center suit */}
        <div className="text-center text-3xl md:text-4xl text-zinc-900 drop-shadow-sm flex items-center justify-center h-full">
          ♠
        </div>
        
        {/* Bottom right rank and suit (upside down) */}
        <div className="text-right text-zinc-900 font-bold text-xs leading-none rotate-180">
          J<br/><span className="text-sm">♠</span>
        </div>
      </motion.div>
    </span>
  );
};

export default function HeroSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 70 } }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-zinc-50 text-zinc-900 px-6 pt-20">
      <motion.div 
        variants={container} 
        initial="hidden" 
        animate="show" 
        className="max-w-4xl mx-auto w-full text-center"
      >
        <motion.p variants={item} className="text-sm font-medium tracking-widest text-zinc-500 mb-6 uppercase">
          UI/UX & Graphic Designer
        </motion.p>
        
        <motion.h1 variants={item} className="text-5xl md:text-7xl font-light leading-tight tracking-tight mb-8">
          <span className="block mb-4">
            Hi, I'm <span className="font-semibold text-zinc-800">Aryan.</span>
          </span>
          {/* The Quote with the inline Jack component */}
          <span className="block text-3xl md:text-5xl text-zinc-500 mt-6 leading-relaxed">
            A <JackCard /> of all trades,<br /> master of some.
          </span>
        </motion.h1>

        <motion.p variants={item} className="text-lg text-zinc-600 max-w-2xl mx-auto mb-12 leading-relaxed">
          Bridging the gap between user-centered research and functional aesthetics. Experienced in wireframing, interactive prototyping, and delivering polished digital products.
        </motion.p>

        <motion.div variants={item} className="flex flex-wrap justify-center gap-6 items-center">
          <a href="#projects" className="group flex items-center gap-2 bg-zinc-900 text-white px-8 py-4 rounded-full hover:bg-zinc-800 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            View Case Studies
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#contact" className="text-zinc-600 hover:text-zinc-900 transition-colors font-medium px-4 py-4">
            Let's Talk
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}