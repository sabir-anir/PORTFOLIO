import React, { useState } from 'react';
import { ArrowLeft, Calendar, Layers, X, ChevronLeft, ChevronRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  tools: string[];
  description: string;
  year: string;
  image: string;
  mainLogo: string;
  detailedDescription: string;
  gallery: string[];
  category: string;
}

interface ProjectDetailProps {
  project: Project;
  onClose: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onClose }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const openImageModal = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeImageModal = () => {
    setSelectedImageIndex(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImageIndex === null) return;
    
    const totalImages = project.gallery.length;
    if (direction === 'prev') {
      setSelectedImageIndex(selectedImageIndex === 0 ? totalImages - 1 : selectedImageIndex - 1);
    } else {
      setSelectedImageIndex(selectedImageIndex === totalImages - 1 ? 0 : selectedImageIndex + 1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeImageModal();
    } else if (e.key === 'ArrowLeft') {
      navigateImage('prev');
    } else if (e.key === 'ArrowRight') {
      navigateImage('next');
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-900 z-50 overflow-y-auto">
      {/* Image Modal/Lightbox */}
      {selectedImageIndex !== null && (
        <div 
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
          onClick={closeImageModal}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          {/* Close button */}
          <button
            onClick={closeImageModal}
            className="absolute top-6 right-6 w-12 h-12 bg-gray-800/80 hover:bg-gray-700/80 rounded-full flex items-center justify-center transition-all duration-300 group z-10"
          >
            <X className="w-6 h-6 text-white group-hover:text-cyan-400 transition-colors duration-300" />
          </button>

          {/* Navigation buttons */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateImage('prev');
            }}
            className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-gray-800/80 hover:bg-gray-700/80 rounded-full flex items-center justify-center transition-all duration-300 group z-10"
          >
            <ChevronLeft className="w-6 h-6 text-white group-hover:text-cyan-400 transition-colors duration-300" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateImage('next');
            }}
            className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-gray-800/80 hover:bg-gray-700/80 rounded-full flex items-center justify-center transition-all duration-300 group z-10"
          >
            <ChevronRight className="w-6 h-6 text-white group-hover:text-cyan-400 transition-colors duration-300" />
          </button>

          {/* Image container */}
          <div 
            className="relative max-w-5xl max-h-[90vh] w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={project.gallery[selectedImageIndex]}
              alt={`${project.title} - Image ${selectedImageIndex + 1}`}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl animate-in zoom-in-95 duration-300"
            />
            
            {/* Image counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-gray-800/80 backdrop-blur-sm px-4 py-2 rounded-full">
              <span className="text-white text-sm font-medium">
                {selectedImageIndex + 1} / {project.gallery.length}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="sticky top-0 bg-gray-900/95 backdrop-blur-sm border-b border-gray-700/50 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <button
            onClick={onClose}
            className="flex items-center gap-3 text-cyan-400 hover:text-white transition-colors duration-300 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:transform group-hover:-translate-x-1 transition-transform duration-300" />
            <span className="font-semibold">Retour au Portfolio</span>
          </button>
          
          <button
            onClick={onClose}
            className="w-10 h-10 bg-gray-800/50 hover:bg-gray-700/50 rounded-full flex items-center justify-center transition-colors duration-300 group"
          >
            <X className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Project Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-400/20 to-purple-600/20 rounded-full border border-cyan-400/30 mb-6">
            <span className="text-cyan-400 font-semibold">{project.category}</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            {project.title}
          </h1>
          <div className="flex items-center justify-center gap-8 text-gray-400">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>{project.year}</span>
            </div>
            <div className="flex items-center gap-2">
              <Layers className="w-5 h-5" />
              <span>{project.tools.join(', ')}</span>
            </div>
          </div>
        </div>

        {/* Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* Left Side - Main Logo/Design */}
          <div className="space-y-8">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 overflow-hidden">
              <img 
                src={project.mainLogo} 
                alt={`${project.title} - Main Design`}
                className="w-full h-96 object-cover"
              />
            </div>
            
            {/* Project Info Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-xl border border-gray-700/30">
                <h3 className="text-cyan-400 font-semibold mb-2">Outils Utilisés</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-gradient-to-r from-cyan-400/20 to-purple-600/20 text-cyan-400 text-sm font-semibold rounded-full border border-cyan-400/30"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-xl border border-gray-700/30">
                <h3 className="text-purple-400 font-semibold mb-2">Years</h3>
                <p className="text-white text-2xl font-bold">{project.year}</p>
              </div>
            </div>
          </div>

          {/* Right Side - Description */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                About the project
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-300 leading-relaxed text-lg">
                  {project.detailedDescription}
                </p>
              </div>
            </div>

            {/* Project Highlights */}
            <div className="bg-gradient-to-r from-cyan-400/10 to-purple-600/10 backdrop-blur-sm p-8 rounded-2xl border border-cyan-400/20">
              <h3 className="text-xl font-bold text-white mb-4">Key Points</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-300">Creation of impactful and memorable logos
</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-300">Consistent and recognizable branding
</span>
 </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-300">Design strategy aligned with communication goals

</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-300">Visual content tailored for social media platforms
</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-300">espect for deadlines and efficient budget management

</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.gallery.map((image, index) => (
              <div 
                key={index}
                onClick={() => openImageModal(index)}
                className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 overflow-hidden hover:border-cyan-400/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-400/10 cursor-pointer relative"
              >
                <img 
                  src={image} 
                  alt={`${project.title} - Image ${index + 1}`}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Zoom overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-cyan-400/20 backdrop-blur-sm px-4 py-2 rounded-full border border-cyan-400/30">
                    <span className="text-cyan-400 font-semibold text-sm">Click to enlarge</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm p-12 rounded-2xl border border-gray-700/50">
          <h3 className="text-3xl font-bold text-white mb-4">
           Interested in a similar project? Let’s bring your vision to life. ?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact me to discuss your graphic design needs and create something exceptional together.
          </p>
          <a
            href=""
            className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-400 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:from-cyan-500 hover:to-purple-700 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/25"
          >
            Start a Project with me 
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;