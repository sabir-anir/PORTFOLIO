import React, { useState, useEffect } from 'react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  const technicalSkills = [
    { name: 'Illustrator (Ai)', level: 97, color: 'from-orange-400 to-red-500' },
    { name: 'Photoshop (Ps)', level: 87, color: 'from-blue-400 to-blue-600' },
    { name: 'InDesign (Id)', level: 91, color: 'from-pink-400 to-purple-600' },
    { name: 'Canva', level: 98, color: 'from-cyan-400 to-teal-500' }
  ];

  const personalSkills = [
    'Creativity', 'Teamwork', 'Communication', 'Adaptability', 'Organization', 'Reliability'
  ];

  const languages = [
    { name: 'Arabic', level: 98, flag: '🇲🇦' },
    { name: 'French', level: 78, flag: '🇫🇷' },
    { name: 'English', level: 47, flag: '🇺🇸' },
    { name: 'Tachelhit', level: 95, flag: '🏔️' }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Technical Skills */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4">
              Technical competence
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {technicalSkills.map((skill, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/50">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xl font-semibold text-white">{skill.name}</span>
                  <span className="text-lg font-bold text-cyan-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-2000 ease-out shadow-lg`}
                    style={{ 
                      width: isVisible ? `${skill.level}%` : '0%',
                      boxShadow: '0 0 20px rgba(34, 197, 94, 0.3)'
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Personal Skills */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4">
              Personal competence
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {personalSkills.map((skill, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-r from-cyan-400/10 to-purple-600/10 backdrop-blur-sm p-4 rounded-xl border border-cyan-400/20 text-center hover:from-cyan-400/20 hover:to-purple-600/20 hover:border-cyan-400/40 transition-all duration-500 hover:transform hover:scale-105"
              >
                <span className="text-white font-semibold text-sm">{skill}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4">
              Languages
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {languages.map((language, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/50">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{language.flag}</span>
                    <span className="text-xl font-semibold text-white">{language.name}</span>
                  </div>
                  <span className="text-lg font-bold text-purple-400">{language.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-purple-400 to-pink-500 rounded-full transition-all duration-2000 ease-out shadow-lg"
                    style={{ 
                      width: isVisible ? `${language.level}%` : '0%',
                      boxShadow: '0 0 20px rgba(168, 85, 247, 0.3)'
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;