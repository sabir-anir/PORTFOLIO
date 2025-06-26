import React from 'react';
import { BookOpen, Calendar } from 'lucide-react';

const Education = () => {
  const educationItems = [
    {
      degree: 'Baccalaureate – Literary stream',
      institution: 'High School Ibrahim Oukhzan, Tiznit',
      period: '2022–2023',
      icon: '📘'
    },
    {
      degree: '1st year in Infography',
      institution: 'OFPPT Hay Hassani – Casablanca',
      period: '2023–2024',
      icon: '📘'
    },
    {
      degree: 'Diploma – Specialized Technician in Infography',
      institution: 'OFPPT Hay Hassani – Casablanca',
      period: '2024–2025',
      icon: '📘'
    }
  ];

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-800"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">
            Training
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 to-purple-600"></div>

          {educationItems.map((item, index) => (
            <div key={index} className="relative flex items-start mb-12 last:mb-0">
              {/* Timeline dot */}
              <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full border-4 border-gray-900 shadow-lg shadow-cyan-400/50"></div>
              
              {/* Content card */}
              <div className="ml-16 bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-400/10 w-full">
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{item.icon}</span>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {item.degree}
                    </h3>
                    <p className="text-lg text-cyan-400 mb-3 font-semibold">
                      {item.institution}
                    </p>
                    <div className="flex items-center gap-2 text-gray-400">
                      <Calendar className="w-5 h-5" />
                      <span className="font-medium">{item.period}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;