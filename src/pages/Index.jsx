// // pages/index.jsx (or app/page.jsx)
// import HeroSection from '@/components/HeroSection';
// import ProjectCard from '@/components/ProjectCard';

// export default function Home() {
//   const projects = [
//     {
//       id: 1,
//       title: "Fintech Dashboard Redesign",
//       category: "UX Research & UI Design",
//       imageUrl: "/api/placeholder/800/600",
//       link: "/case-studies/fintech"
//     },
//     {
//       id: 2,
//       title: "E-Commerce Mobile App",
//       category: "Interaction Design",
//       imageUrl: "/api/placeholder/800/600",
//       link: "/case-studies/ecommerce"
//     }
//   ];

//   return (
//     <main className="bg-zinc-50 min-h-screen selection:bg-zinc-200">
//       <HeroSection />
      
//       <section className="max-w-7xl mx-auto px-6 py-24">
//         <h2 className="text-3xl font-light text-zinc-900 mb-12">Selected Work</h2>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {projects.map((project) => (
//             <ProjectCard key={project.id} {...project} />
//           ))}
//         </div>
//       </section>
//     </main>
//   );
// }