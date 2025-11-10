'use client';

import React, { useEffect, useRef, useState } from 'react';
import { ProjectCard } from './ui/ProjectCard';

export const ProjectsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const projects = [
    {
      title: "Trajectory.ai – Multi-Agent AI Career Guidance Platform",
      description: "Trajectory.ai is an AI-powered platform that helps users map their ideal career paths using personalized, multi-agent guidance. It builds custom roadmaps, AI mentor chats, and skill-gap analyses by integrating GenAI, RAG pipelines, and vector embeddings for context-aware recommendations. The system runs on scalable infrastructure with Docker, Kubernetes, and PostgreSQL, ensuring fast, secure, and reliable performance, resulting in a smart system that doesn't just tell you what to do, but why.",
      tags: ["Python", "LangChain", "LangGraph", "ChromaDB", "Docker", "Kubernetes", "PostgreSQL", "RAG", "AI Infrastructure"],
      gradient: "bg-gradient-to-br from-primary via-secondary to-accent",
      demoLink: "https://www.linkedin.com/feed/update/urn:li:activity:7374472314530422784/",
      githubLink: "https://github.com/Samarth-Hiremath1/Trajectory.ai",
      images: [
        "/projects/trajectory-1.svg",
        "/projects/trajectory-2.svg",
        "/projects/trajectory-3.svg",
        "/projects/trajectory-4.svg"
      ]
    },
    {
      title: "VQ – AI Speech and Body Language Coach",
      description: "VQ is an AI-powered communications coach that analyzes both speech and body language to improve presentation skills. I built a multimodal ML pipeline using PyTorch, TensorFlow, and MediaPipe to assess clarity, confidence, and posture, achieving 89% accuracy in speech detection and 85% in posture analysis. The system runs on a Dockerized, Airflow-orchestrated stack with automated retraining pipelines simulating AWS infrastructure for scalable deployment.",
      tags: ["PyTorch", "TensorFlow", "MediaPipe", "Airflow", "MLflow", "Docker", "Cloud", "Multimodal AI"],
      gradient: "bg-gradient-to-br from-accent via-purple-600 to-primary",
      demoLink: "https://devpost.com/software/vq-vocal-intelligence",
      githubLink: "https://github.com/Samarth-Hiremath1/VQ-sachacksVI",
      images: [
        "/projects/vq-1.svg",
        "/projects/vq-2.svg"
      ]
    },
    {
      title: "Stitchable – AI Multi-Source Video Stitching Platform",
      description: "Stitchable automatically syncs and stitches multi-camera event recordings into a seamless, high-quality video using ML-based audio and visual alignment. I built the distributed video processing pipeline using FFmpeg, OpenCV, and TensorFlow, implementing cross-correlation and feature-matching algorithms for synchronization. The inference engine runs on WebAssembly, enabling low-latency, browser-based ML video processing without heavy backend load. (currently in development!)",
      tags: ["FFmpeg", "OpenCV", "TensorFlow", "WebAssembly", "Computer Vision", "Video Processing", "ML"],
      gradient: "bg-gradient-to-br from-secondary via-accent to-purple-700",
      demoLink: "https://devpost.com/software/stitchable-ai",
      githubLink: "https://github.com/Samarth-Hiremath1/Stitchable",
      images: [
        "/projects/stitchable-1.svg"
      ]
    },
    {
      title: "PostPal – AI Social Media Caption Generator",
      description: "PostPal is a full-stack AI web app that generates platform-tailored captions, hashtags, and engagement tips from any uploaded image. It uses Google Cloud Vision API for image recognition and Gemini API for text generation, wrapped in a clean React interface with Google OAuth authentication and PostgreSQL for persistence. Users can fine-tune captions by tone, platform, and style — making content creation both efficient and fun.",
      tags: ["React", "Tailwind CSS", "Google Cloud Vision", "Gemini API", "PostgreSQL", "OAuth", "Full Stack"],
      gradient: "bg-gradient-to-br from-purple-700 via-primary to-secondary",
      githubLink: "https://github.com/Samarth-Hiremath1/social-media-caption-generator/blob/main/README.md",
      images: [
        "/projects/postpal-1.svg"
      ]
    },
    {
      title: "Blackjack AI",
      description: "Blackjack AI is a reinforcement learning bot that optimizes its gameplay strategy through Q-learning. Trained over thousands of simulated rounds, it learns when to hit, stand, or double down to maximize long-term rewards. The project was designed for the Google Developer Student Club at UC Davis to showcase practical applications of ML in game theory and decision-making.",
      tags: ["Python", "Q-Learning", "Reinforcement Learning", "Probability", "Machine Learning"],
      gradient: "bg-gradient-to-br from-primary via-purple-600 to-accent",
      demoLink: "https://docs.google.com/presentation/d/1GdYHb8CVW-bAWbQH8Qt3tYmktVt_v_BQjTn2lCsTA6Y/edit?usp=sharing",
      githubLink: "https://github.com/hanyiliu/SamarthBlackjackBot",
      images: [
        "/projects/blackjack-1.svg"
      ]
    }
  ];

  useEffect(() => {
    const maxScroll = projects.length * 100;
    let localProgress = scrollProgress;

    const handleWheel = (e: WheelEvent) => {
      if (!sectionRef.current || !headerRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const headerRect = headerRef.current.getBoundingClientRect();
      const navbarHeight = 80;
      
      // Header is positioned under navbar when its top is at navbarHeight
      const headerUnderNavbar = headerRect.top <= navbarHeight + 5;
      const sectionInView = rect.bottom > window.innerHeight * 0.3;
      
      // When scrolling down: activate when header reaches navbar
      // When scrolling up: only deactivate when header moves away from navbar
      const isScrollingDown = e.deltaY > 0;
      const isScrollingUp = e.deltaY < 0;
      
      // For scrolling down: start when header is under navbar
      // For scrolling up: continue until header leaves navbar position AND progress is > 0
      const isInView = headerUnderNavbar && sectionInView;

      if (isInView) {
        const shouldLockDown = isScrollingDown && localProgress < maxScroll;
        const shouldLockUp = isScrollingUp && localProgress > 0;

        if (shouldLockDown || shouldLockUp) {
          e.preventDefault();
          localProgress += e.deltaY * 0.25;
          localProgress = Math.max(0, Math.min(maxScroll, localProgress));
          setScrollProgress(localProgress);
        }
      } else if (rect.top > window.innerHeight) {
        // Section is below viewport - reset to start
        if (localProgress !== 0) {
          localProgress = 0;
          setScrollProgress(0);
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [projects.length, scrollProgress]);

  // Easing function for smooth transitions
  const easeInOutCubic = (t: number): number => {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  };

  // Calculate card transforms with cinematic motion
  const getCardTransform = (index: number) => {
    const cardStart = index * 100;
    const rawProgress = scrollProgress - cardStart;
    const normalizedProgress = Math.max(0, Math.min(100, rawProgress)) / 100;
    const easedProgress = easeInOutCubic(normalizedProgress);

    // Calculate how many cards are fully stacked on top
    let cardsOnTop = 0;
    for (let i = index + 1; i < projects.length; i++) {
      const otherProgress = Math.max(0, scrollProgress - i * 100);
      if (otherProgress >= 100) cardsOnTop++;
    }

    // Initial state: card is below viewport, slightly dimmed
    let translateY = 50 - easedProgress * 50; // 50% to 0% (reduced from 100%)
    let scale = 0.97 + easedProgress * 0.03; // 0.97 to 1.0
    let opacity = 0.85 + easedProgress * 0.15; // 0.85 to 1.0
    
    // When card is fully in focus (progress = 100%)
    if (rawProgress >= 100) {
      translateY = 0;
      scale = 1.0 - cardsOnTop * 0.02; // Slight scale down when cards stack on top
      opacity = 1.0 - cardsOnTop * 0.15; // Fade when cards stack on top
    }

    // Stack offset for depth
    const stackOffset = index * 20 - cardsOnTop * 8;
    
    // Blur for depth perception
    const blur = cardsOnTop > 0 ? cardsOnTop * 1.5 : 0;

    // Z-index: higher index = on top
    const zIndex = index + 1;

    // Only show cards after header is visible (when scrollProgress > 0 or when section is in view)
    // This prevents cards from disappearing when scrolling up until header leaves viewport
    const headerVisible = headerRef.current && headerRef.current.getBoundingClientRect().top <= 100;
    const isVisible = headerVisible && rawProgress >= -10;

    return {
      transform: `translateY(${translateY}%) scale(${scale})`,
      filter: blur > 0 ? `blur(${blur}px)` : 'none',
      top: `calc(50% - 225px + ${stackOffset}px)`, // Center cards vertically
      opacity: isVisible ? opacity : 0,
      zIndex: zIndex,
      transition: 'transform 0.3s cubic-bezier(0.25, 0.1, 0.25, 1), opacity 0.3s ease, filter 0.3s ease'
    };
  };

  // Header animation based on progress
  const getHeaderStyle = () => {
    const headerProgress = Math.min(scrollProgress / 50, 1);
    const opacity = 0.9 + headerProgress * 0.1;
    
    return {
      opacity: opacity
    };
  };

  return (
    <div ref={sectionRef} className="w-full relative" style={{ minHeight: '100vh' }}>
      {/* Sticky header that stays at top of section */}
      <div 
        ref={headerRef}
        className="sticky top-20 z-10 text-center pt-12 pb-2 px-8 bg-gradient-to-b from-dark via-dark to-transparent"
        style={getHeaderStyle()}
      >
        <h2 className="text-5xl font-bold text-white mb-3">Featured Projects</h2>
        <p className="text-xl text-gray-400">Building products that solve real problems</p>
      </div>

      {/* Cards container - reduced top margin */}
      <div className="max-w-5xl mx-auto px-8 relative -mt-12" style={{ height: '80vh' }}>
        {projects.map((project, index) => (
          <div
            key={index}
            className="absolute w-full"
            style={getCardTransform(index)}
          >
            <div className="h-[450px]">
              <ProjectCard {...project} />
            </div>
          </div>
        ))}
      </div>

      {/* Reduced spacer */}
      <div className="h-[2vh]" />
    </div>
  );
};
