// pages/YoupiCaseStudy.jsx
import { motion } from 'framer-motion';
import { ArrowLeft, PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function YoupiCaseStudy() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <main className="bg-white min-h-screen text-zinc-900 selection:bg-pink-200">
      <nav className="fixed top-0 left-0 w-full p-6 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Work
          </Link>
          <span className="font-bold tracking-tighter text-lg">ARYAN.</span>
        </div>
      </nav>

      <section className="pt-40 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-pink-600 font-medium tracking-widest text-sm uppercase mb-6">
            Mobile UI • Interaction Design
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl md:text-7xl font-light tracking-tight leading-tight mb-8">
            Youpi App
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-xl md:text-2xl text-zinc-500 font-light leading-relaxed max-w-3xl mx-auto">
            Created engaging mobile UI screens and high-fidelity clickable prototypes designed specifically for user testing and interaction validation.
          </motion.p>
        </div>
      </section>

      <motion.section initial="hidden" animate="show" variants={fadeUp} className="max-w-6xl mx-auto px-6 mb-32">
        <div className="w-full aspect-[16/9] bg-pink-50 rounded-3xl overflow-hidden shadow-xl border border-pink-100 flex items-center justify-center relative group cursor-pointer">
          <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000" alt="Youpi UI" className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" />
          <div className="absolute inset-0 bg-zinc-900/20 group-hover:bg-zinc-900/40 transition-colors duration-300" />
          <PlayCircle className="absolute text-white w-20 h-20 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 drop-shadow-lg" />
        </div>
        <p className="text-center text-zinc-400 text-sm mt-4 uppercase tracking-widest">Interactive Prototype Showcase</p>
      </motion.section>
    </main>
  );
}