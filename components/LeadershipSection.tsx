'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

interface LeadershipExperience {
  title: string;
  role: string;
  year: string;
  description: string[];
  visual: string;
  isGif?: boolean;
}

export const LeadershipSection: React.FC = () => {
  const experiences: LeadershipExperience[] = [
    {
      title: "SkillsUSA CA State Officer",
      role: "State Officer",
      year: "2022-2023",
      description: [
        "As a State Officer (2022-2023), I had the amazing opportunity to organize events for the 54,000 CA members, including the State Leadership and Skills Conference with 3,500 participants. I initiated the President's Council to boost school collaboration and communication.",
        "I also had the chance to advocate for career education in Washington D.C., train 275 high school officers, and plan a community project collecting 2,500 stuffed animals for foster homes.",
        "I'm really grateful for this opportunity to develop countless skills and learn from so many amazing people."
      ],
      visual: "/leadership/SkillsUSA-speech.gif",
      isGif: true
    },
    {
      title: "Summer Python Bootcamp",
      role: "Founder & Instructor",
      year: "2020-2022",
      description: [
        "From 2020-2022, I founded and expanded a Summer Programming Bootcamp for middle schoolers, partnering with a friend and the local library. We taught over 120 students, fostering their interest in technology.",
        "This experience enhanced my leadership skills and sparked a newfound passion for teaching and taking initiative for community impact that I'm eager to pursue in future endeavors."
      ],
      visual: "/leadership/summer-python-bootcamp.jpg",
      isGif: false
    }
  ];

  return (
    <div className="w-full py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-3" style={{ color: '#FFFFFF' }}>Leadership</h2>
          <p className="text-base sm:text-lg md:text-xl" style={{ color: '#B3A9C9' }}>Empowering communities through initiative and collaboration</p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-16 sm:space-y-24 md:space-y-32">
          {experiences.map((experience, index) => (
            <LeadershipCard
              key={index}
              experience={experience}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

interface LeadershipCardProps {
  experience: LeadershipExperience;
  index: number;
}

const LeadershipCard: React.FC<LeadershipCardProps> = ({ experience, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const isEven = index % 2 === 0;

  useEffect(() => {
    const handleScroll = () => {
      if (!cardRef.current) return;

      const rect = cardRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const cardMiddle = rect.top + rect.height / 2;
      const viewportMiddle = windowHeight / 2;

      // Calculate progress: 0 when card enters viewport, 1 when centered
      const distanceFromCenter = cardMiddle - viewportMiddle;
      const maxDistance = windowHeight / 2 + rect.height / 2;
      const progress = 1 - Math.max(0, Math.min(1, distanceFromCenter / maxDistance));

      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate transform based on scroll progress
  const getTransform = () => {
    const translateX = isEven
      ? -100 + scrollProgress * 100 // Slide in from left
      : 100 - scrollProgress * 100;  // Slide in from right

    return `translateX(${translateX}px)`;
  };

  const getOpacity = () => {
    return Math.min(1, scrollProgress * 1.5);
  };

  return (
    <div
      ref={cardRef}
      className="group"
      style={{
        transform: getTransform(),
        opacity: getOpacity(),
        transition: 'transform 0.1s ease-out, opacity 0.1s ease-out'
      }}
    >
      <div
        className={`
          flex flex-col md:flex-row items-stretch
          rounded-lg sm:rounded-xl
          transition-all duration-300
          hover:scale-[1.02]
          overflow-hidden
          min-h-[300px] sm:min-h-[350px] md:min-h-[400px]
          ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}
        `}
        style={{
          background: '#18132C',
          border: '1px solid rgba(108, 31, 255, 0.15)',
          boxShadow: '0 0 20px rgba(108, 31, 255, 0.15)'
        }}
      >
        {/* Image */}
        <div className="w-full md:w-[45%] flex-shrink-0 relative min-h-[200px] sm:min-h-[250px] md:min-h-0">
          <Image
            src={experience.visual}
            alt={experience.title}
            fill
            sizes="(max-width: 768px) 100vw, 45vw"
            className="object-cover"
            unoptimized={experience.isGif}
          />
        </div>

        {/* Content */}
        <div className="w-full md:w-[55%] p-6 sm:p-8 md:p-10 flex flex-col justify-center space-y-4 sm:space-y-5">
          <div>
            <h3 
              className="text-2xl sm:text-3xl font-bold mb-2 transition-colors duration-300"
              style={{ color: '#FFFFFF' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#6C1FFF'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#FFFFFF'}
            >
              {experience.title}
            </h3>
            <p className="text-base sm:text-lg" style={{ color: '#B3A9C9' }}>
              {experience.role} • {experience.year}
            </p>
          </div>
          <div className="space-y-3 sm:space-y-5">
            {experience.description.map((paragraph, idx) => (
              <p key={idx} className="leading-relaxed text-sm sm:text-base" style={{ color: '#B3A9C9', letterSpacing: '0.3px' }}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
