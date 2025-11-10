import React from 'react';
import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  demoLink?: string;
  githubLink?: string;
  images?: string[];
  gradient: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  tags,
  demoLink,
  githubLink,
  images = [],
  gradient
}) => {
  const hasImages = images.length > 0;
  const imageCount = images.length;

  const handleLinkClick = (url: string, e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div 
      className={`w-full h-full rounded-[24px] sm:rounded-[32px] md:rounded-[40px] p-4 sm:p-6 md:p-8 flex flex-col md:flex-row gap-4 sm:gap-6`} 
      style={{ 
        pointerEvents: 'auto',
        background: '#18132C',
        border: '1px solid rgba(108, 31, 255, 0.15)',
        boxShadow: '0 0 20px rgba(108, 31, 255, 0.15)'
      }}
    >
      {/* Left side - Content */}
      <div className={`flex flex-col justify-between ${hasImages ? 'md:w-1/2' : 'w-full'}`}>
        <div>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 select-text" style={{ color: '#FFFFFF' }}>{title}</h3>
          <p className="text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed select-text whitespace-pre-line" style={{ color: '#B3A9C9', letterSpacing: '0.3px' }}>{description}</p>
          
          <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-2 sm:px-3 py-1 sm:py-1.5 backdrop-blur-sm rounded-full text-xs sm:text-sm font-medium"
                style={{
                  background: 'rgba(108, 31, 255, 0.2)',
                  color: '#A85CFF',
                  border: '1px solid rgba(108, 31, 255, 0.3)'
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="flex gap-2 sm:gap-3 relative z-50">
          {demoLink && (
            <button
              onClick={(e) => handleLinkClick(demoLink, e)}
              className="px-4 sm:px-5 py-2 sm:py-2.5 backdrop-blur-sm rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer"
              style={{ 
                pointerEvents: 'auto',
                background: 'transparent',
                color: '#FFFFFF',
                border: '2px solid transparent',
                backgroundImage: 'linear-gradient(#18132C, #18132C), linear-gradient(90deg, #FF007F 0%, #FF5E00 100%)',
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
              Demo
            </button>
          )}
          
          {githubLink && (
            <button
              onClick={(e) => handleLinkClick(githubLink, e)}
              className="px-4 sm:px-5 py-2 sm:py-2.5 backdrop-blur-sm rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer"
              style={{ 
                pointerEvents: 'auto',
                background: 'transparent',
                color: '#FFFFFF',
                border: '2px solid transparent',
                backgroundImage: 'linear-gradient(#18132C, #18132C), linear-gradient(90deg, #FF007F 0%, #FF5E00 100%)',
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
              GitHub
            </button>
          )}
        </div>
      </div>

      {/* Right side - Images */}
      {hasImages && (
        <div className="md:w-1/2 mt-4 md:mt-0">
          {imageCount === 1 ? (
            <div className="relative w-full h-full rounded-2xl overflow-hidden flex items-center justify-center">
              <Image
                src={images[0]}
                alt={`${title} preview`}
                fill
                sizes="50vw"
                className="object-contain p-2"
              />
            </div>
          ) : imageCount === 2 ? (
            <div className="flex flex-col gap-3 h-full">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="relative w-full h-1/2 rounded-2xl overflow-hidden flex items-center justify-center"
                >
                  <Image
                    src={image}
                    alt={`${title} preview ${index + 1}`}
                    fill
                    sizes="50vw"
                    className="object-contain p-2"
                  />
                </div>
              ))}
            </div>
          ) : imageCount === 4 ? (
            <div className="grid grid-cols-2 grid-rows-2 gap-3 h-full">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="relative rounded-2xl overflow-hidden flex items-center justify-center"
                >
                  <Image
                    src={image}
                    alt={`${title} preview ${index + 1}`}
                    fill
                    sizes="25vw"
                    className="object-contain p-2"
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col gap-3 h-full">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="relative w-full rounded-2xl overflow-hidden flex items-center justify-center"
                  style={{ height: `${100 / imagecount}%` }}
                >
                  <Image
                    src={image}
                    alt={`${title} preview ${index + 1}`}
                    fill
                    sizes="50vw"
                    className="object-contain p-2"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
