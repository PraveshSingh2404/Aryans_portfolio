'use client';

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    // { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  // Lock body scroll when mobile menu is open (Optional but good UX)
  // useEffect(() => {
  //   if (isOpen) document.body.style.overflow = 'hidden';
  //   else document.body.style.overflow = 'unset';
  // }, [isOpen]);

  return (
    <nav className="fixed top-0 left-0 w-full bg-zinc-50/80 backdrop-blur-lg border-b border-zinc-200/50 z-50 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo Mark */}
        <a href="#" className="text-xl font-bold tracking-tighter text-zinc-900 relative group">
          ARYAN<span className="text-zinc-400 group-hover:text-zinc-900 transition-colors">.</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-sm font-medium">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-zinc-500 hover:text-zinc-900 transition-colors relative group py-2"
            >
              {link.name}
              {/* Subtle hover underline effect */}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-zinc-900 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-zinc-900 p-2 -mr-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-zinc-50 border-t border-zinc-200/50 overflow-hidden"
          >
            <div className="flex flex-col px-6 py-4 space-y-2">
              {links.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setIsOpen(false)}
                  className="block py-3 text-lg font-medium text-zinc-600 hover:text-zinc-900 border-b border-zinc-100 last:border-0"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}