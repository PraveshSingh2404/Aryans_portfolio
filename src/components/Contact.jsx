'use client';

import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="bg-zinc-900 text-zinc-50 py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-light mb-8 tracking-tight">
            Ready to build something beautiful?
          </h2>
          <p className="text-zinc-400 text-lg mb-12 max-w-2xl leading-relaxed">
            Whether you need a complete mobile app designed from scratch, a brand identity refresh, or just want to chat about UX, I'm currently open to new opportunities. Let's discuss your next idea.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 mb-20">
            <a 
              href="mailto:aryanv553@gmail.com" 
              className="flex items-center justify-center gap-3 bg-white text-zinc-900 px-8 py-4 rounded-full font-medium hover:bg-zinc-200 transition-colors shadow-lg shadow-white/5"
            >
              <Mail className="w-5 h-5" />
              aryanv553@gmail.com
            </a>
            <a 
              href="tel:+918957987327" 
              className="flex items-center justify-center gap-3 border border-zinc-700 text-white px-8 py-4 rounded-full font-medium hover:bg-zinc-800 transition-colors"
            >
              <Phone className="w-4 h-4" />
              +91 89579 87327
            </a>
          </div>

          {/* Sub-contact details & Mini Footer */}
          <div className="pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-6 text-zinc-500 text-sm font-medium">
            <p>© {new Date().getFullYear()} Aryan Verma. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <p>Based in Lucknow, India</p>
              <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noreferrer" className="hover:text-zinc-300 transition-colors">
                LinkedIn
              </a>
              <a href="https://behance.net/your-profile" target="_blank" rel="noreferrer" className="hover:text-zinc-300 transition-colors">
                Behance
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}