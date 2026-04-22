'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

// The upgraded ProjectCard component
function ProjectCard({ title, category, description, imageUrl, link, featured }) {
  return (
    <motion.a 
      href={link}
      className={`group block relative overflow-hidden rounded-2xl bg-zinc-100 cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500 ${featured ? 'md:col-span-2' : 'col-span-1'}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className={`w-full overflow-hidden bg-zinc-200 ${featured ? 'aspect-[16/9] md:aspect-[21/9]' : 'aspect-[4/3]'}`}>
        {/* Placeholder images - replace with your actual Figma exports/mockups */}
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-zinc-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 md:p-10">
        <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
          <p className="text-zinc-300 text-xs md:text-sm font-medium tracking-wide mb-2 uppercase">
            {category}
          </p>
          <div className="flex justify-between items-end gap-4">
            <div>
              <h3 className="text-white text-2xl md:text-4xl font-light mb-2">
                {title}
              </h3>
              <p className="text-zinc-400 text-sm md:text-base max-w-lg line-clamp-2">
                {description}
              </p>
            </div>
            <div className="hidden md:flex w-12 h-12 rounded-full bg-white text-zinc-900 items-center justify-center shrink-0">
              <ArrowUpRight className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
    </motion.a>
  );
}

export default function Projects() {
  const portfolioData = [
    {
      id: "chayan-karo",
      title: "Chayan Karo",
      category: "Case Study • UI/UX • Marketplace",
      description: "A two-sided home services marketplace connecting customers with verified local professionals. Designed complete end-to-end user flows for both Customer and Provider apps.",
      imageUrl: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?auto=format&fit=crop&q=80&w=1200",
      link: "#chayan-karo-case-study",
      featured: true // Makes this card span full width
    },
    {
      id: "youpi",
      title: "Youpi App",
      category: "Mobile UI • Prototyping",
      description: "Created engaging mobile UI screens and high-fidelity clickable prototypes for user testing and interaction validation.",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
      link: "#",
      featured: false
    },
    {
      id: "madhumitra",
      title: "Madhumitra & Horticulture",
      category: "UI Design • Accessibility",
      description: "Designed clean, accessible, and highly user-friendly interfaces focused on usability for diverse demographics.",
      imageUrl: "https://images.unsplash.com/photo-1576091160550-2173ff9e5eb4?auto=format&fit=crop&q=80&w=800",
      link: "#",
      featured: false
    },
    {
      id: "graphic-design",
      title: "Brand Identity & Creatives",
      category: "Graphic Design • Branding",
      description: "A collection of freelance visual design projects including posters, banners, branding kits, and social media Instaposts.",
      imageUrl: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800",
      link: "#",
      featured: true 
    }
  ];

  return (
    <section id="projects" className="py-32 px-6 bg-white text-zinc-900">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24"
        >
          <p className="text-sm font-medium uppercase tracking-widest text-zinc-400 mb-4">
            Selected Work
          </p>
          <h2 className="text-4xl md:text-5xl font-light leading-tight tracking-tight max-w-2xl">
            A showcase of <span className="font-medium italic">user-centric</span> design, from complex marketplaces to striking visual identities.
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {portfolioData.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}