import React from "react";

interface ExperienceTagProps {
  text: string;
}

export const ExperienceTag: React.FC<ExperienceTagProps> = ({ text }) => {
  return (
    <span 
      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium transition-colors"
      style={{
        background: 'rgba(108, 31, 255, 0.1)',
        color: '#A85CFF',
        border: '1px solid rgba(108, 31, 255, 0.2)'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = 'rgba(108, 31, 255, 0.2)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'rgba(108, 31, 255, 0.1)';
      }}
    >
      {text}
    </span>
  );
};
