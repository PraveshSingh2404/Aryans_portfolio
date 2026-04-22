// pages/MadhumitraCaseStudy.jsx
import { motion } from 'framer-motion';
import { ArrowLeft, LayoutGrid } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function MadhumitraCaseStudy() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <main className="bg-zinc-50 min-h-screen text-zinc-900 selection:bg-green-200">
      <nav className="fixed top-0 left-0 w-full p-6 z-50 bg-zinc-50/80 backdrop-blur-md border-b border-zinc-200">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Work
          </Link>
          <span className="font-bold tracking-tighter text-lg">ARYAN.</span>
        </div>
      </nav>

      <section className="pt-40 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-600 font-medium tracking-widest text-sm uppercase mb-6">
            UI Design • Accessibility
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl md:text-7xl font-light tracking-tight leading-tight mb-8">
            Madhumitra & Horticulture
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-xl md:text-2xl text-zinc-500 font-light leading-relaxed max-w-3xl mx-auto">
            Designed clean, highly accessible, and user-friendly interfaces focused on maximizing usability for diverse and agricultural demographics.
          </motion.p>
        </div>
      </section>

      {/* Screen Grid Layout */}
      <section className="max-w-6xl mx-auto px-6 mb-32 grid md:grid-cols-3 gap-8">
        {[1, 2, 3].map((item, i) => (
          <motion.div key={item} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} transition={{ delay: i * 0.1 }}>
            <div className="bg-white rounded-2xl aspect-[9/16] overflow-hidden shadow-sm border border-zinc-100 p-2">
              <img src={`https://images.unsplash.com/photo-1576091160550-2173ff9e5eb4?auto=format&fit=crop&q=80&w=600&h=1000&sig=${item}`} alt="App Screen" className="w-full h-full object-cover rounded-xl" />
            </div>
          </motion.div>
        ))}
      </section>
    </main>
  );
}