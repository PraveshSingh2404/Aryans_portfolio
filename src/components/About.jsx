import { motion } from "framer-motion";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="about" className="py-32 px-6 bg-white text-zinc-900">
      <div className="max-w-4xl mx-auto">
        
        {/* Content Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-12"
        >
          <div>
            <motion.p variants={itemVariants} className="text-sm font-medium uppercase tracking-widest text-zinc-400 mb-4">
              Background & Philosophy
            </motion.p>

            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-light leading-tight tracking-tight mb-8">
              Designing with purpose, <br className="hidden md:block" />
              <span className="font-medium italic text-zinc-800">building with precision.</span>
            </motion.h2>

            <motion.div variants={itemVariants} className="space-y-6 text-lg text-zinc-600 leading-relaxed font-light max-w-3xl">
              <p>
                With a Master of Computer Applications (MCA) and hands-on experience as a UI/UX Design Intern at Shikshart, I bring a unique perspective that bridges creative visual design with technical feasibility.
              </p>
              <p>
                My process is rooted in user-centered methodologies—from wireframing and prototyping in Figma to conducting usability tests. I don't just make things look good; I design intuitive systems that solve real user problems.
              </p>
            </motion.div>
          </div>

          {/* Upgraded Stats Grid - Spans 4 columns on desktop without the image */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-zinc-100">
            <div>
              <p className="text-3xl md:text-4xl font-light text-zinc-900 mb-2">30+</p>
              <p className="text-zinc-500 text-sm font-medium">Mobile Screens</p>
            </div>

            <div>
              <p className="text-3xl md:text-4xl font-light text-zinc-900 mb-2">Awarded</p>
              <p className="text-zinc-500 text-sm font-medium">Intern of the Month</p>
            </div>

            <div>
              <p className="text-3xl md:text-4xl font-light text-zinc-900 mb-2">MCA</p>
              <p className="text-zinc-500 text-sm font-medium">Postgraduate Degree</p>
            </div>

            <div>
              <p className="text-3xl md:text-4xl font-light text-zinc-900 mb-2">Figma</p>
              <p className="text-zinc-500 text-sm font-medium">Core Toolstack</p>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}