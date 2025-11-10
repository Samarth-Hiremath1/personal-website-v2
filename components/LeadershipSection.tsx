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
    <div className="w-full py-24 px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-white mb-3">Leadership</h2>
          <p className="text-xl text-gray-400">Empowering communities through initiative and collaboration</p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-32">
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
          bg-[#1a1a1a] rounded-xl
          transition-all duration-300
          hover:scale-[1.02]
          overflow-hidden
          min-h-[400px]
          ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}
        `}
      >
        {/* Image */}
        <div className="w-full md:w-[45%] flex-shrink-0 relative">
          <Image
            src={experience.visual}
            alt={experience.title}
            fill
            className="object-cover"
            unoptimized={experience.isGif}
          />
        </div>

        {/* Content */}
        <div className="w-full md:w-[55%] p-10 flex flex-col justify-center space-y-5">
          <div>
            <h3 className="text-3xl font-bold text-white mb-2 transition-colors duration-300 group-hover:text-primary">
              {experience.title}
            </h3>
            <p className="text-lg text-gray-400">
              {experience.role} • {experience.year}
            </p>
          </div>
          <div className="space-y-5">
            {experience.description.map((paragraph, idx) => (
              <p key={idx} className="text-gray-300 leading-relaxed text-base">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
