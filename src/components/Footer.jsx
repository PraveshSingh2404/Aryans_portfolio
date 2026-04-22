'use client';

import { Github, Linkedin, Mail, Dribbble } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 px-6 bg-zinc-900 border-t border-zinc-800 text-zinc-400">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Left: Copyright & Location */}
        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 text-sm font-medium">
          <p>© {new Date().getFullYear()} Aryan Verma. All rights reserved.</p>
          <span className="hidden md:inline-block w-1 h-1 rounded-full bg-zinc-700"></span>
          <p>Based in Lucknow, India</p>
        </div>

        {/* Right: Social Links */}
        <div className="flex gap-6">
          <a 
            href="#" 
            target="_blank" 
            rel="noreferrer" 
            className="hover:text-white hover:-translate-y-1 transition-all duration-300"
          >
            <Dribbble size={20} strokeWidth={1.5} />
            <span className="sr-only">Dribbble</span>
          </a>

          <a 
            href="#" 
            target="_blank" 
            rel="noreferrer" 
            className="hover:text-white hover:-translate-y-1 transition-all duration-300"
          >
            <Linkedin size={20} strokeWidth={1.5} />
            <span className="sr-only">LinkedIn</span>
          </a>

          <a 
            href="#" 
            target="_blank" 
            rel="noreferrer" 
            className="hover:text-white hover:-translate-y-1 transition-all duration-300"
          >
            <Github size={20} strokeWidth={1.5} />
            <span className="sr-only">GitHub</span>
          </a>

          <a 
            href="mailto:aryanv553@gmail.com" 
            className="hover:text-white hover:-translate-y-1 transition-all duration-300"
          >
            <Mail size={20} strokeWidth={1.5} />
            <span className="sr-only">Email</span>
          </a>
        </div>

      </div>
    </footer>
  );
}