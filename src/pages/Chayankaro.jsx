'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
export default function ChayanKaroCaseStudy() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <main className="bg-white min-h-screen text-zinc-900 selection:bg-orange-200">
      
      {/* Navigation Bar (Minimal) */}
      <nav className="fixed top-0 left-0 w-full p-6 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          {/* Replace <a href="/"> with <Link to="/"> */}
          <Link to="/" className="flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <span className="font-bold tracking-tighter text-lg">ARYAN.</span>
        </div>
      </nav>

      {/* 1. Hero Section */}
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            className="text-orange-600 font-medium tracking-widest text-sm uppercase mb-6"
          >
            Case Study • Mobile Platform
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="text-5xl md:text-7xl font-light tracking-tight leading-tight mb-8"
          >
            Chayan Karo
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-zinc-500 font-light leading-relaxed max-w-3xl mx-auto"
          >
            Designed a complete two-sided marketplace ecosystem for home services, bridging the gap between customers and verified local professionals.
          </motion.p>
        </div>
      </section>

      {/* Hero Mockup Image */}
      <motion.section 
        initial="hidden" animate="show" variants={fadeUp}
        className="max-w-6xl mx-auto px-6 mb-32"
      >
        <div className="w-full aspect-[16/9] md:aspect-[21/9] bg-zinc-100 rounded-3xl overflow-hidden shadow-2xl border border-zinc-200/50">
          {/* Replace with your high-fidelity Figma mockup showing both apps side-by-side */}
          <img 
            src="https://images.unsplash.com/photo-1618761714954-0b8cd0026356?auto=format&fit=crop&q=80&w=2000" 
            alt="Chayan Karo Apps Mockup" 
            className="w-full h-full object-cover"
          />
        </div>
      </motion.section>

      {/* 2. Overview & Context */}
      <section className="max-w-6xl mx-auto px-6 mb-32">
        <motion.div 
          initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-y border-zinc-100"
        >
          <div>
            <p className="text-zinc-400 text-sm uppercase tracking-wider mb-2">Role</p>
            <p className="font-medium">Product Designer (UI/UX)</p>
          </div>
          <div>
            <p className="text-zinc-400 text-sm uppercase tracking-wider mb-2">Platform</p>
            <p className="font-medium">Android & iOS</p>
          </div>
          <div>
            <p className="text-zinc-400 text-sm uppercase tracking-wider mb-2">Scope</p>
            <p className="font-medium">End-to-end Experience</p>
          </div>
          <div>
            <p className="text-zinc-400 text-sm uppercase tracking-wider mb-2">Tools</p>
            <p className="font-medium">Figma, Photoshop</p>
          </div>
        </motion.div>
      </section>

      {/* 3. The Problem & Users */}
      <section className="max-w-4xl mx-auto px-6 mb-32 space-y-20">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
          <h2 className="text-3xl md:text-4xl font-light mb-6">The Challenge</h2>
          <p className="text-lg text-zinc-600 leading-relaxed mb-6">
            In India, booking home services like plumbing, salon treatments, or repairs is highly fragmented. Users typically rely on unverified local contacts, leading to unclear pricing and unreliable scheduling. 
          </p>
          <p className="text-lg text-zinc-600 leading-relaxed">
            Conversely, local service providers ("Chayan Saathis") struggle to find consistent work and lack digital tools to manage their schedules, earnings, and customer base effectively.
          </p>
        </motion.div>

        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="bg-orange-50 rounded-3xl p-8 md:p-12 border border-orange-100">
          <h3 className="text-2xl font-light mb-8 text-orange-950">A Two-Sided Ecosystem</h3>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h4 className="font-medium text-lg mb-4 text-orange-800">📱 The Customer App</h4>
              <ul className="space-y-3 text-orange-900/80">
                <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0"/> Seamless service discovery</li>
                <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0"/> Transparent, upfront pricing</li>
                <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0"/> Verified professional booking</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-lg mb-4 text-orange-800">🛠 The Provider App</h4>
              <ul className="space-y-3 text-orange-900/80">
                <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0"/> Incoming job management</li>
                <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0"/> Earnings & analytics dashboard</li>
                <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0"/> Schedule and availability control</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 4. Process & Final Solution Visuals */}
      <section className="bg-zinc-50 py-32 px-6 border-t border-zinc-200">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mb-16">
            <h2 className="text-3xl md:text-4xl font-light mb-6">The Solution</h2>
            <p className="text-lg text-zinc-600 leading-relaxed max-w-2xl">
              By mapping out strict user flows, I designed intuitive interfaces for both sides of the marketplace, ensuring a frictionless experience from booking to job completion.
            </p>
          </motion.div>

          {/* Solution Grid (Replace src with actual UI screens) */}
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="space-y-4">
              <div className="bg-zinc-200 rounded-2xl aspect-[4/5] overflow-hidden shadow-md">
                <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800" alt="Customer Booking Flow" className="w-full h-full object-cover"/>
              </div>
              <h4 className="text-xl font-medium">Frictionless Booking Flow</h4>
              <p className="text-zinc-500">A step-by-step cart and scheduling system designed to minimize drop-offs.</p>
            </motion.div>

            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.2 }} className="space-y-4">
              <div className="bg-zinc-200 rounded-2xl aspect-[4/5] overflow-hidden shadow-md">
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" alt="Provider Dashboard" className="w-full h-full object-cover"/>
              </div>
              <h4 className="text-xl font-medium">Provider Earnings Dashboard</h4>
              <p className="text-zinc-500">High-contrast, easy-to-read metrics allowing providers to track daily income.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. Next Project CTA */}
      <section className="py-32 px-6 max-w-4xl mx-auto text-center">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
          <p className="text-zinc-400 font-medium uppercase tracking-widest mb-6">Up Next</p>
          <a href="#" className="group inline-flex flex-col items-center">
            <h2 className="text-4xl md:text-6xl font-light mb-4 group-hover:text-zinc-600 transition-colors">
              Youpi App
            </h2>
            <div className="flex items-center gap-2 text-orange-600 font-medium">
              View Project <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </div>
          </a>
        </motion.div>
      </section>

    </main>
  );
}