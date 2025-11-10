'use client';

import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

export const ContactSection: React.FC = () => {
  const handleEmailClick = () => {
    window.location.href = 'mailto:samhiremath@ucdavis.edu';
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: <FaLinkedin size={48} />,
      url: 'https://www.linkedin.com/in/samarth-hiremath/',
      color: '#0A66C2'
    },
    {
      name: 'GitHub',
      icon: <FaGithub size={48} />,
      url: 'https://github.com/Samarth-Hiremath1',
      color: '#FFFFFF'
    },
    {
      name: 'Instagram',
      icon: <FaInstagram size={48} />,
      url: 'https://www.instagram.com/samarth_hiremath1/',
      color: '#E4405F'
    }
  ];

  return (
    <section 
      id="contact" 
      className="min-h-[60vh] flex items-center justify-center py-20 px-8 relative"
      style={{ backgroundColor: 'transparent' }}
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-6" style={{ color: '#FFFFFF' }}>
          Contact Me
        </h2>
        <p className="text-xl mb-8" style={{ color: '#B3A9C9', letterSpacing: '0.3px' }}>
          Feel free to reach out! I love meeting new people.
        </p>

        {/* Email Button */}
        <button
          onClick={handleEmailClick}
          className="px-8 py-3 backdrop-blur-sm rounded-xl text-base font-semibold transition-all duration-200 cursor-pointer mb-12"
          style={{ 
            background: 'transparent',
            color: '#FFFFFF',
            border: '2px solid transparent',
            backgroundImage: 'linear-gradient(#0A0812, #0A0812), linear-gradient(90deg, #FF007F 0%, #FF5E00 100%)',
            backgroundOrigin: 'border-box',
            backgroundClip: 'padding-box, border-box'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)';
            e.currentTarget.style.boxShadow = '0 0 20px rgba(255, 94, 0, 0.6)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          Email Me
        </button>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-8">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-200"
              style={{ color: social.color }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.15)';
                e.currentTarget.style.filter = 'brightness(1.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.filter = 'brightness(1)';
              }}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
