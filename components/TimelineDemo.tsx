import React from "react";
import { Timeline } from "@/components/ui/Timeline";
import { ExperienceTag } from "@/components/ui/ExperienceTag";

export function TimelineDemo() {
  const data = [
    {
      company: "AggieWorks • Moober",
      position: "Product Manager",
      dates: "Apr 2025 - Present",
      location: "Davis, CA",
      logo: "/logos/aggieworks.png",
      description: (
        <div>
          <p className="mb-4 text-sm md:text-base leading-relaxed" style={{ color: '#B3A9C9', letterSpacing: '0.3px' }}>
            As Moober's Product Manager, I am scaling our ridesharing platform (1,350+ users) by leading a cross-functional team of six engineers, designers, and marketers using Agile and data-driven prioritization.
          </p>
          <p className="mb-4 text-sm md:text-base leading-relaxed" style={{ color: '#B3A9C9', letterSpacing: '0.3px' }}>
            My role spanned strategy, product, and analytics—designing A/B tests, conducting user interviews, and using SQL insights to inform new feature rollouts, including commuter scheduling and real-time ride updates.
          </p>
          <div className="flex flex-wrap gap-2">
            <ExperienceTag text="Product Management" />
            <ExperienceTag text="SQL" />
            <ExperienceTag text="Agile Methodologies" />
          </div>
        </div>
      ),
    },
    {
      company: "Boston Consulting Group (BCG)",
      position: "Data Analyst Intern, Contract",
      dates: "Jun 2025 - Aug 2025",
      location: "Remote",
      logo: "/logos/bcg.png",
      description: (
        <div>
          <p className="mb-4 text-sm md:text-base leading-relaxed" style={{ color: '#B3A9C9', letterSpacing: '0.3px' }}>
            I supported a Web3 client by translating complex market and user research into an actionable strategy. I synthesized competitive analyses and user insights to identify high-value customer segments, directly shaping the client's go-to-market roadmap.
          </p>
          <div className="flex flex-wrap gap-2">
            <ExperienceTag text="Python" />
            <ExperienceTag text="Market Research" />
            <ExperienceTag text="Data Visualization" />
            <ExperienceTag text="Go-to-Market Strategy" />
          </div>
        </div>
      ),
    },
    {
      company: "Snap Inc.",
      position: "Software Engineering Intern",
      dates: "Mar 2025 - Jun 2025",
      location: "Davis, CA",
      logo: "/logos/snap.png",
      description: (
        <div>
          <p className="mb-4 text-sm md:text-base leading-relaxed" style={{ color: '#B3A9C9', letterSpacing: '0.3px' }}>
            At Snap, I designed and developed AR filters in a cross-functional team using SnapML and JavaScript, creating interactive animal detection and live pet fashion styling experiences.
          </p>
          <p className="mb-4 text-sm md:text-base leading-relaxed" style={{ color: '#B3A9C9', letterSpacing: '0.3px' }}>
            We deployed filters that received over 20,000 views in two weeks and improved engagement through iterative UX testing and rapid feedback loops.
          </p>
          <div className="flex flex-wrap gap-2">
            <ExperienceTag text="SnapML" />
            <ExperienceTag text="Machine Learning" />
            <ExperienceTag text="Optimization" />
            <ExperienceTag text="AR" />
          </div>
        </div>
      ),
    },
    {
      company: "Spin (Spin Scooters)",
      position: "Strategy and Data Consultant Intern",
      dates: "Apr 2025 - Jun 2025",
      location: "Davis, CA",
      logo: "/logos/spin.png",
      description: (
        <div>
          <p className="mb-4 text-sm md:text-base leading-relaxed" style={{ color: '#B3A9C9', letterSpacing: '0.3px' }}>
            I combined user research and data analytics to guide Spin's compliance and pricing strategies across 20K+ scooter ride data points. By conducting stakeholder interviews and surveys, I identified key policy and engagement trends.
          </p>
          <p className="mb-4 text-sm md:text-base leading-relaxed" style={{ color: '#B3A9C9', letterSpacing: '0.3px' }}>
            I helped refine city partnership and pricing strategies by analyzing thousands of ride data points to pinpoint high-violation zones and optimize compliance.
          </p>
          <div className="flex flex-wrap gap-2">
            <ExperienceTag text="Data Analytics" />
            <ExperienceTag text="Product Strategy" />
          </div>
        </div>
      ),
    },
    {
      company: "The Tagapolous Lab",
      position: "Machine Learning Researcher",
      dates: "Nov 2024 - Apr 2025",
      location: "Davis, CA",
      logo: "/logos/tagapolous.png",
      description: (
        <div>
          <p className="mb-4 text-sm md:text-base leading-relaxed" style={{ color: '#B3A9C9', letterSpacing: '0.3px' }}>
            At the Tagkopoulos Lab, I automated ontology mapping workflows using Pandas, fuzzy matching, and data preprocessing to fine-tune NLP models for biomedical text analysis. I built a preclinical studies database and enhanced dataset curation scripts for disease-drug prediction, with the goal to advance drug discovery and reduce R&D costs.
          </p>
          <div className="flex flex-wrap gap-2">
            <ExperienceTag text="Machine Learning" />
            <ExperienceTag text="Python" />
            <ExperienceTag text="Data Analysis" />
            <ExperienceTag text="NLP" />
          </div>
        </div>
      ),
    },
    {
      company: "Liner AI",
      position: "AI Product Development Consultant Intern",
      dates: "Oct 2024 - Dec 2024",
      location: "Davis, CA",
      logo: "/logos/liner.png",
      description: (
        <div>
          <p className="mb-4 text-sm md:text-base leading-relaxed" style={{ color: '#B3A9C9', letterSpacing: '0.3px' }}>
            I defined product strategy and UX design for Liner's AI-powered study platform, driving an increase in feature adoption through data-driven decisions.
          </p>
          <p className="mb-4 text-sm md:text-base leading-relaxed" style={{ color: '#B3A9C9', letterSpacing: '0.3px' }}>
            I led a team to build and iterate on Figma prototypes, introduced a guided onboarding experience, and used industry frameworks to prioritize roadmap items.
          </p>
          <div className="flex flex-wrap gap-2">
            <ExperienceTag text="Product Management" />
            <ExperienceTag text="Market Research" />
            <ExperienceTag text="UI/UX" />
            <ExperienceTag text="Figma" />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full">
      <Timeline data={data} />
    </div>
  );
}
