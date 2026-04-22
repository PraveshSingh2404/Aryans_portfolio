import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import HeroSection from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Import all your case studies
import ChayanKaroCaseStudy from './pages/Chayankaro';
import YoupiCaseStudy from './pages/YoupiCaseStudy';
import MadhumitraCaseStudy from './pages/MadhumitraCaseStudy';
import GraphicDesignCaseStudy from './pages/GraphicDesignCaseStudy';

function Home() {
  return (
    <main className="bg-zinc-50 min-h-screen selection:bg-zinc-300 selection:text-zinc-900 font-sans">
      <Projects /> 
      <HeroSection />
      <About />
      <Skills />
      <Contact />
    </main>
  );
}

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        
        {/* The Dedicated Project Routes */}
        <Route path="/case-studies/chayan-karo" element={<ChayanKaroCaseStudy />} />
        <Route path="/case-studies/youpi" element={<YoupiCaseStudy />} />
        <Route path="/case-studies/madhumitra" element={<MadhumitraCaseStudy />} />
        <Route path="/case-studies/graphic-design" element={<GraphicDesignCaseStudy />} />
      </Routes>
      <Footer />
    </Router>
  );
}