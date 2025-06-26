import React from 'react';
import Hero from './components/Hero';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-gray-900 min-h-screen overflow-x-hidden">
      <Hero />
      <Contact />
      <Skills />
      <Education />
      <Experience />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;