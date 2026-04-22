// pages/GraphicDesignCaseStudy.jsx
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function GraphicDesignCaseStudy() {
  return (
    <main className="bg-zinc-900 min-h-screen text-white selection:bg-indigo-500/30">
      <nav className="fixed top-0 left-0 w-full p-6 z-50 bg-zinc-900/80 backdrop-blur-md border-b border-zinc-800">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Work
          </Link>
          <span className="font-bold tracking-tighter text-lg text-white">ARYAN.</span>
        </div>
      </nav>

      <section className="pt-40 pb-20 px-6 border-b border-zinc-800">
        <div className="max-w-4xl mx-auto">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-indigo-400 font-medium tracking-widest text-sm uppercase mb-6">
            Visual Identity • Branding • Social Media
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl md:text-7xl font-light tracking-tight leading-tight mb-8">
            Brand & Creative Exploration
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-xl text-zinc-400 font-light leading-relaxed max-w-2xl">
            A collection of freelance visual design projects including posters, banners, branding kits, and marketing graphics aligned with client identities.
          </motion.p>
        </div>
      </section>

      {/* Masonry-style Visual Grid */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Large Vertical Poster */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="lg:col-span-1 lg:row-span-2 bg-zinc-800 rounded-2xl overflow-hidden aspect-[3/4] lg:aspect-auto">
            <img src="https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="Poster Design" />
          </motion.div>
          
          {/* Horizontal Banner */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="lg:col-span-2 bg-zinc-800 rounded-2xl overflow-hidden aspect-video">
            <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="Brand Banner" />
          </motion.div>

          {/* Social Media Squares */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-zinc-800 rounded-2xl overflow-hidden aspect-square">
            <img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="Social Post 1" />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="bg-zinc-800 rounded-2xl overflow-hidden aspect-square">
            <img src="https://images.unsplash.com/photo-1586769852044-692d6e3703f0?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="Social Post 2" />
          </motion.div>
        </div>
      </section>
    </main>
  );
}