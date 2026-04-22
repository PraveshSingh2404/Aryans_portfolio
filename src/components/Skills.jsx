'use client';

import { motion } from "framer-motion";
import { LayoutTemplate, PenTool, Smartphone, Wrench } from "lucide-react";

const skills = [
  {
    icon: <LayoutTemplate size={28} strokeWidth={1.5} />,
    title: "UI/UX Design",
    items: [
      "User Research & Testing", 
      "Wireframing & Prototyping", 
      "Interaction Design", 
      "Information Architecture", 
      "Design Systems"
    ],
  },
  {
    icon: <PenTool size={28} strokeWidth={1.5} />,
    title: "Graphic Design",
    items: [
      "Brand Identity & Logo Design", 
      "Social Media Creatives", 
      "Typography & Layout", 
      "Poster & Print Design",
      "Marketing Graphics"
    ],
  },
  {
    icon: <Wrench size={28} strokeWidth={1.5} />,
    title: "Core Toolstack",
    items: [
      "Figma & Adobe XD", 
      "Adobe Photoshop", 
      "Adobe Illustrator", 
      "CorelDRAW",
      "Canva"
    ],
  },
  {
    icon: <Smartphone size={28} strokeWidth={1.5} />,
    title: "Android & Frontend",
    items: [
      "Kotlin Fundamentals", 
      "Android UI Development", 
      "XML Layout Design", 
      "Mobile-First Workflows",
      "Basic Frontend Integration"
    ],
  },
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="skills" className="py-32 px-6 bg-zinc-50 text-zinc-900">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20"
        >
          <p className="text-sm font-medium text-zinc-400 uppercase tracking-widest mb-4">
            Expertise
          </p>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight">
            Capabilities & <span className="font-medium italic">Toolstack</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.title}
              variants={cardVariants}
              className="group bg-white p-8 rounded-2xl shadow-sm border border-zinc-100 hover:shadow-xl hover:shadow-zinc-200/50 hover:-translate-y-1 transition-all duration-500"
            >
              <div className="mb-8 text-zinc-400 group-hover:text-zinc-900 transition-colors duration-300">
                {skill.icon}
              </div>

              <h3 className="text-xl font-medium mb-6">
                {skill.title}
              </h3>

              <ul className="space-y-3 text-sm text-zinc-500 font-light">
                {skill.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="block w-1 h-1 rounded-full bg-zinc-300 mt-2 shrink-0 group-hover:bg-zinc-900 transition-colors"></span>
                    {item}
                  </li>
                ))}
              </ul>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}