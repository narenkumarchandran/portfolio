import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import CustomCursor from '../components/CustomCursor';

const Index = () => {
  return (
    <div className="min-h-screen bg-void text-foreground relative">
      {/* Custom cursor — hidden on mobile via CSS */}
      <CustomCursor />

      {/* Fixed navigation */}
      <Header />

      {/* Page sections */}
      <main>
        <Hero />

        {/* Section separator */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-void-300 to-transparent" />
        </div>

        <About />

        <div className="max-w-7xl mx-auto px-6">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-void-300 to-transparent" />
        </div>

        <Projects />

        <div className="max-w-7xl mx-auto px-6">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-void-300 to-transparent" />
        </div>

        <Contact />
      </main>
    </div>
  );
};

export default Index;
