import React from 'react';
import { ArrowDown } from 'lucide-react';
import QRCode from './QRCode.tsx';

const Hero = () => {
  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Profile Image */}
        <div className="mb-8 relative">
          <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-cyan-400/50 shadow-2xl shadow-cyan-400/20 relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-purple-600/20 rounded-full group-hover:scale-110 transition-transform duration-500"></div>
            <img 
              src="m.jpg"
              alt="Anir Sabir - Graphic Designer"
              className="w-full h-full object-cover relative z-10"
            />
          </div>
          <div className="absolute inset-0 w-48 h-48 mx-auto rounded-full border-2 border-cyan-400 animate-spin-slow opacity-20"></div>
        </div>

        {/* Greeting */}
        <div className="mb-6">
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-2 animate-glow">
            HELLO!
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto rounded-full shadow-lg shadow-cyan-400/50"></div>
        </div>

        {/* Name */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-wide">
          Anir <span className="text-cyan-400">Sabir</span>
        </h2>

        {/* Introduction */}
        <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-12 font-light">
          Passionate graphic designer driven by visual art and new technologies.  
I turn ideas into impactful visual concepts tailored to your needs.
          <span className="text-cyan-400 font-semibold"> communication </span> et 
          <span className="text-purple-400 font-semibold"> marketing</span>.
        </p>

        {/* QR Code Section */}
        <div className="mb-12">
          <QRCode />
        </div>

        {/* Scroll indicator */}
        <div className="animate-bounce">
          <ArrowDown className="w-8 h-8 text-cyan-400 mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default Hero;