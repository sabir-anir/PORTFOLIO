import React from 'react';
import { Briefcase, Calendar, Users, Target } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Internship in Print Production Management  Intern',
      duration: '2 months',
      company: 'Squid Print & Mers Sultan – Casablanca',
      icon: '🖨',
      tasks: [
        'Created visual designs (brochures, etc.)',
        'File preparation for print',
        'Client collaboration to meet needs and values'
      ]
    },
    {
      title: 'Internship in Marketing and Creative Assistant  Intern  ',
      duration: '4 months',
      company: 'UPLEO Agency – Maarif – Casablanca',
      icon: '💼',
      tasks: [
        'Digital campaign design',
        'Social media content creation',
        'Brand identity development'
      ]
    }
  ];
 
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">
            Experience
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-400/10 group"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="text-4xl">{exp.icon}</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                    {exp.title}
                  </h3>
                  <div className="flex items-center gap-2 text-purple-400 mb-2">
                    <Calendar className="w-5 h-5" />
                    <span className="font-semibold">{exp.duration}</span>
                  </div>
                  <p className="text-gray-300 font-medium">{exp.company}</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-cyan-400 mb-4">
                  <Target className="w-5 h-5" />
                  <span className="font-semibold">Key Responsibilities:</span>
                </div>
                {exp.tasks.map((task, taskIndex) => (
                  <div key={taskIndex} className="flex items-start gap-3 text-gray-300">
                    <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>{task}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;