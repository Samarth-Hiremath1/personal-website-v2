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
    <div className={`w-full h-full ${gradient} rounded-[40px] p-8 flex gap-6`} style={{ pointerEvents: 'auto' }}>
      {/* Left side - Content */}
      <div className={`flex flex-col justify-between ${hasImages ? 'w-1/2' : 'w-full'}`}>
        <div>
          <h3 className="text-3xl font-bold text-white mb-4 select-text">{title}</h3>
          <p className="text-base text-gray-100 mb-6 leading-relaxed select-text whitespace-pre-line">{description}</p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-sm text-white font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="flex gap-3 relative z-50">
          {demoLink && (
            <button
              onClick={(e) => handleLinkClick(demoLink, e)}
              className="px-5 py-2.5 bg-white/30 hover:bg-white/40 backdrop-blur-sm rounded-lg text-sm text-white font-semibold transition-all duration-200 hover:scale-105 cursor-pointer border-0"
              style={{ pointerEvents: 'auto' }}
            >
              Demo
            </button>
          )}
          
          {githubLink && (
            <button
              onClick={(e) => handleLinkClick(githubLink, e)}
              className="px-5 py-2.5 bg-white/30 hover:bg-white/40 backdrop-blur-sm rounded-lg text-sm text-white font-semibold transition-all duration-200 hover:scale-105 cursor-pointer border-0"
              style={{ pointerEvents: 'auto' }}
            >
              GitHub
            </button>
          )}
        </div>
      </div>

      {/* Right side - Images */}
      {hasImages && (
        <div className="w-1/2">
          {imageCount === 1 ? (
            <div className="relative w-full h-full rounded-2xl overflow-hidden flex items-center justify-center">
              <Image
                src={images[0]}
                alt={`${title} preview`}
                fill
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
