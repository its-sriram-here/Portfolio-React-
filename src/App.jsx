import React, { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import SectionReveal from './components/SectionReveal';
import BackgroundEffects from './components/BackgroundEffects';

import About from './components/About';
import Certificates from './components/Certificates';
import Projects from './components/Projects';
import Contact from './components/Contact';



function App() {
  console.log("App rendering...");
  return (
    <div className="bg-black min-h-screen text-white relative">
      <BackgroundEffects />
      <Navbar />
      <main>
        <Hero />
        <SectionReveal>
          <About />
        </SectionReveal>
        <SectionReveal delay={0.2}>
          <Certificates />
        </SectionReveal>
        <SectionReveal delay={0.2}>
          <Projects />
        </SectionReveal>
        <SectionReveal delay={0.2}>
          <Contact />
        </SectionReveal>
      </main>
      <Footer />
    </div>
  );
}

export default App;
