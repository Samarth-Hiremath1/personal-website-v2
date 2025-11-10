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

  return (
    <div className={`w-full h-full ${gradient} rounded-[40px] p-8 flex gap-6`}>
      {/* Left side - Content */}
      <div className={`flex flex-col justify-between ${hasImages ? 'w-1/2' : 'w-full'}`}>
        <div>
          <h3 className="text-3xl font-bold text-white mb-4">{title}</h3>
          <p className="text-base text-gray-100 mb-6 leading-relaxed">{description}</p>
          
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
        <div className="flex gap-3">
          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-white/30 hover:bg-white/40 backdrop-blur-sm rounded-lg text-sm text-white font-semibold transition-all duration-200 hover:scale-105 flex items-center gap-2"
            >
              <span>Demo</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )}
          
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-white/30 hover:bg-white/40 backdrop-blur-sm rounded-lg text-sm text-white font-semibold transition-all duration-200 hover:scale-105 flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              <span>GitHub</span>
            </a>
          )}
        </div>
      </div>

      {/* Right side - Images */}
      {hasImages && (
        <div className="w-1/2">
          {imageCount === 1 ? (
            <div className="relative w-full h-full rounded-2xl overflow-hidden bg-white/10">
              <Image
                src={images[0]}
                alt={`${title} preview`}
                fill
                className="object-cover"
              />
            </div>
          ) : imageCount === 2 ? (
            <div className="flex flex-col gap-3 h-full">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="relative w-full h-1/2 rounded-2xl overflow-hidden bg-white/10"
                >
                  <Image
                    src={image}
                    alt={`${title} preview ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          ) : imageCount === 4 ? (
            <div className="grid grid-cols-2 grid-rows-2 gap-3 h-full">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="relative rounded-2xl overflow-hidden bg-white/10"
                >
                  <Image
                    src={image}
                    alt={`${title} preview ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col gap-3 h-full">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="relative w-full rounded-2xl overflow-hidden bg-white/10"
                  style={{ height: `${100 / imageCount}%` }}
                >
                  <Image
                    src={image}
                    alt={`${title} preview ${index + 1}`}
                    fill
                    className="object-cover"
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
