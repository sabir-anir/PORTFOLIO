import React from 'react';
import { Mail, Phone, MapPin, Instagram, Linkedin, Facebook } from 'lucide-react';

const Contact = () => {
  const contactItems = [
     {
      icon: Mail,
      label: 'Email',
      value: 'anirsabir8@gmail.com',
      href: 'https:/anirsabir8@gmail.com'
    },
    {
      icon: Phone,
      label: 'Telephone',
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
      icon: Linkedin,
      label: 'linkedin',
      value: 'Anir Sabir',
      href: 'https://www.linkedin.com/in/anir-sabir-780272369'
    },

    {
      icon: Instagram,
      label: 'Instagram',
      value: 'anir.design1',
      href: 'https://www.instagram.com/anir.design1?igsh=dnljYTZnMzNiZjE1'
    },
     {
      icon: Facebook,
      label: 'Facebook',
      value: 'Anir Sabir',
      href: 'https://www.facebook.com/profile.php?id=100086156301573'
    },
  ];

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-800"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">
            Contact
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <a
                key={index}
                href={item.href}
                className="group bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-400/20"
              >
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-400/20 to-purple-600/20 rounded-full mb-6 group-hover:from-cyan-400/40 group-hover:to-purple-600/40 transition-all duration-500">
                    <IconComponent className="w-8 h-8 text-cyan-400 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                    {item.label}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {item.value}
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact;