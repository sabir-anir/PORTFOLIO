import React from 'react';
import { Mail, Phone, MapPin, Instagram, Heart } from 'lucide-react';

const Footer = () => {
  const contactLinks = [
    {
      icon: Mail,
      label: 'Email',
      value: 'anirsabir8@gmail.com',
      href: 'anirsabir8@gmail.com'
    },
    {
      icon: Phone,
      label: 'Téléphone',
      value: '0656721296',
      href: 'tel:+212656721296'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Sidi Moumen, Casablanca',
      href: '#'
    },
    {
      icon: Instagram,
      label: 'Instagram',
      value: '@anir sabir',
      href: 'https://instagram.com/anirsabir'
    }
  ];

  return (
    <footer className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        {/* Main footer content */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-6">
            Restons en <span className="text-cyan-400">Contact</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Contact me to discuss your next creative project.
          </p>
        </div>

        {/* Contact links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactLinks.map((contact, index) => {
            const IconComponent = contact.icon;
            return (
              <a
                key={index}
                href={contact.href}
                className="group flex flex-col items-center p-6 bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-500 hover:transform hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400/20 to-purple-600/20 rounded-full flex items-center justify-center mb-4 group-hover:from-cyan-400/40 group-hover:to-purple-600/40 transition-all duration-500">
                  <IconComponent className="w-6 h-6 text-cyan-400 group-hover:text-white transition-colors duration-300" />
                </div>
                <span className="text-sm text-gray-400 mb-1">{contact.label}</span>
                <span className="text-white font-medium text-center group-hover:text-cyan-400 transition-colors duration-300">
                  {contact.value}
                </span>
              </a>
            );
          })}
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent mb-8"></div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-gray-400">
              © 2024 Anir Sabir. All rights reserved..
            </p>
          </div>
          
          <div className="flex items-center gap-2 text-gray-400">
            <span>done with</span>
            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            <span>in Casablanca</span>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"></div>
    </footer>
  );
};

export default Footer;