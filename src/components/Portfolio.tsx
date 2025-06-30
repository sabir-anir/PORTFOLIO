import React, { useState } from 'react';
import { ExternalLink, Calendar, Layers, ArrowLeft, X } from 'lucide-react';
import ProjectDetail from './ProjectDetail';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'BRANDING',
      tools: ['AI', 'PS'],
      description: 'Les Délices Du Boucher',
      year: '2025',
      image: 'BD.png',
      mainLogo: 'qq.png',
      detailedDescription: 'The "Les Delices du Boucher" logo reflects a refined and authentic visual identity, ideal for a high-end butcher shop      ',
     
      gallery: [
        'pp1.jpg',
        'pp2.jpg',
        'Business Card Mockup les Délices du boucher.jpg',
        'pp25.png'
      ],
      category: 'Branding'
    },
    {
      id: 2,
      title: 'LOGO',
      tools: ['AI'],
      description: 'café al sham , les délices du boucher,Drop Order,Burgerito',
      year: '2025',
      image: 'bb.png',
      mainLogo: 'xx.png',
      detailedDescription: '"The logo is the cornerstone of a brand’s identity.It forms the first impression in the audience’s mind. Through a simple and professional design,a logo can convey the company’s values and message, giving it a unique and distinctive presence among competitors. It’s not just a graphic—it’s a visual signature that encapsulates the brand’sstory and essence.".',
      gallery: [
        
        'D.O.jpg',
        'gg.png',
        'VV4.png',
        'vv5.png'
      ],
      category: 'LOGO '
    },
    {
      id: 3,
      title: 'SOCIAL MEDIA',
      tools: ['PS', 'Ai'],
      description: 'UPLEO POSTER',
      year: '2025',
      image: 'FF.png',
      mainLogo: 'uu.png',
      detailedDescription: 'A creative, tech & production agency united to deliver all-in-one Solutions From strategy to creation: IT, audiovisual, branding,digital marketing& more. ',
      gallery: [
        'post v8.png',
        'post v9.png',
        'post v3.png',
        'post v6.png'
      ],
      category: 'LOGO'
    
    },
  ];

  const handleProjectClick = (project : any) => {
    setSelectedProject(project);
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
  };

  if (selectedProject) {
    return (
      <ProjectDetail 
        project={selectedProject} 
        onClose={handleCloseProject}
      />
    );
  }

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-800"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">
            Portfolio
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              onClick={() => handleProjectClick(project)}
              className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 overflow-hidden hover:border-cyan-400/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-400/10 cursor-pointer"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-64">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
                  <ExternalLink className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="bg-cyan-400/20 backdrop-blur-sm px-4 py-2 rounded-full text-cyan-400 font-semibold border border-cyan-400/30">
                    See The Projects
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tools */}
                <div className="flex items-center gap-2 mb-4">
                  <Layers className="w-4 h-4 text-purple-400" />
                  <div className="flex gap-2">
                    {project.tools.map((tool, toolIndex) => (
                      <span 
                        key={toolIndex}
                        className="px-2 py-1 bg-gradient-to-r from-cyan-400/20 to-purple-600/20 text-cyan-400 text-xs font-semibold rounded-full border border-cyan-400/30"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Year */}
                <div className="flex items-center gap-2 text-gray-500">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">{project.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;