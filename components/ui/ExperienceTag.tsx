import React from "react";

interface ExperienceTagProps {
  text: string;
}

export const ExperienceTag: React.FC<ExperienceTagProps> = ({ text }) => {
  return (
    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors">
      {text}
    </span>
  );
};
