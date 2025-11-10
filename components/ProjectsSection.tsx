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
      description: "Trajectory.ai is an AI-powered platform that helps users map their ideal career paths using personalized, multi-agent guidance. It builds custom roadmaps, AI mentor chats, and skill-gap analyses by integrating GenAI, RAG pipelines, and vector embeddings for context-aware recommendations.\n\nThe system runs on scalable infrastructure with Docker, Kubernetes, and PostgreSQL.",
      tags: ["Python", "LangChain", "LangGraph", "ChromaDB", "Docker", "Kubernetes", "PostgreSQL", "RAG", "AI Infrastructure"],
      gradient: "bg-gradient-to-br from-primary via-secondary to-accent",
      demoLink: "https://www.linkedin.com/feed/update/urn:li:activity:7374472314530422784/",
      githubLink: "https://github.com/Samarth-Hiremath1/Trajectory.ai",
      images: [
        "/projects/trajectory-1.png",
        "/projects/trajectory-2.png",
        "/projects/trajectory-3.png",
        "/projects/trajectory-4.png"
      ]
    },
    {
      title: "VQ – AI Speech and Body Language Coach",
      description: "VQ is an AI-powered communications coach that analyzes both speech and body language to improve presentation skills. I built a multimodal ML pipeline using PyTorch, TensorFlow, and MediaPipe to assess clarity, confidence, and posture.\n\nThe system runs on a Dockerized, Airflow-orchestrated stack with automated retraining pipelines simulating AWS infrastructure for scalable deployment.",
      tags: ["PyTorch", "TensorFlow", "MediaPipe", "MLflow", "Docker", "Cloud", "AWS", "Multimodal AI"],
      gradient: "bg-gradient-to-br from-accent via-purple-600 to-primary",
      demoLink: "https://devpost.com/software/vq-vocal-intelligence",
      githubLink: "https://github.com/Samarth-Hiremath1/VQ-sachacksVI",
      images: [
        "/projects/vq-1.png",
        "/projects/vq-2.png"
      ]
    },
    {
      title: "Stitchable – AI Multi-Source Video Stitching Platform",
      description: "Stitchable automatically syncs and stitches multi-camera event recordings into a seamless, high-quality video using ML-based audio and visual alignment.\n\nI built the distributed video processing pipeline using FFmpeg, OpenCV, and TensorFlow, implementing cross-correlation and feature-matching algorithms for synchronization.\n\n(currently in development!)",
      tags: ["FFmpeg", "OpenCV", "TensorFlow", "WebAssembly", "Computer Vision", "Video Processing", "ML"],
      gradient: "bg-gradient-to-br from-secondary via-accent to-purple-700",
      demoLink: "https://devpost.com/software/stitchable-ai",
      githubLink: "https://github.com/Samarth-Hiremath1/Stitchable",
      images: [
        "/projects/stitchable-1.png"
      ]
    },
    {
      title: "PostPal – AI Social Media Caption Generator",
      description: "PostPal is a full-stack AI web app that generates platform-tailored captions, hashtags, and engagement tips from any uploaded image. It uses Google Cloud Vision API for image recognition and Gemini API for text generation.\n\nUsers can fine-tune captions by tone, platform, and style — making content creation both efficient and fun.",
      tags: ["React", "Tailwind CSS", "Google Cloud Vision", "Gemini API", "PostgreSQL", "OAuth", "Full Stack"],
      gradient: "bg-gradient-to-br from-purple-700 via-primary to-secondary",
      githubLink: "https://github.com/Samarth-Hiremath1/social-media-caption-generator/blob/main/README.md",
      images: [
        "/projects/postpal-1.png"
      ]
    },
    {
      title: "Blackjack AI",
      description: "Blackjack AI uses Q-learning to master blackjack strategies through simulation and reward-based training. Built for the Google Developer Student Club @ UC Davis, it showcases applied ML in game theory.",
      tags: ["Python", "Q-Learning", "Reinforcement Learning", "Probability", "Machine Learning"],
      gradient: "bg-gradient-to-br from-primary via-purple-600 to-accent",
      demoLink: "https://docs.google.com/presentation/d/1GdYHb8CVW-bAWbQH8Qt3tYmktVt_v_BQjTn2lCsTA6Y/edit?usp=sharing",
      githubLink: "https://github.com/hanyiliu/SamarthBlackjackBot",
      images: [
        "/projects/blackjack-1.png"
      ]
    }
  ];

  useEffect(() => {
    const maxScroll = projects.length * 300; // Increased from 200 to 300 for much more spacing
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
    const cardStart = index * 300; // Updated to match new spacing
    const rawProgress = scrollProgress - cardStart;

    // Split the animation into phases:
    // Phase 1 (0-150): Card enters and reaches full size
    // Phase 2 (150-300): Card scales down before next card appears
    const phase1Progress = Math.max(0, Math.min(150, rawProgress)) / 150;
    const phase2Progress = Math.max(0, Math.min(150, rawProgress - 150)) / 150;
    const easedPhase1 = easeInOutCubic(phase1Progress);
    const easedPhase2 = easeInOutCubic(phase2Progress);

    // Calculate how many cards are fully stacked on top
    let cardsOnTop = 0;
    for (let i = index + 1; i < projects.length; i++) {
      const otherProgress = Math.max(0, scrollProgress - i * 300);
      if (otherProgress >= 300) cardsOnTop++;
    }

    let translateY = 0;
    let scale = 1.0;
    let opacity = 1.0;

    if (rawProgress < 150) {
      // Phase 1: Card entering
      translateY = 50 - easedPhase1 * 50; // 50% to 0%
      scale = 0.97 + easedPhase1 * 0.03; // 0.97 to 1.0
      opacity = 0.85 + easedPhase1 * 0.15; // 0.85 to 1.0
    } else if (rawProgress < 300) {
      // Phase 2: Card is fully visible, then scales down
      translateY = 0;
      scale = 1.0 - easedPhase2 * 0.15; // 1.0 to 0.85
      opacity = 1.0;
    } else {
      // Card is done, stacked behind
      translateY = 0;
      scale = 0.85 - cardsOnTop * 0.02;
      opacity = 1.0 - cardsOnTop * 0.15;
    }

    // Stack offset for depth
    const stackOffset = index * 20 - cardsOnTop * 8;

    // Blur for depth perception
    const blur = cardsOnTop > 0 ? cardsOnTop * 1.5 : 0;

    // Z-index: Cards that are currently active should be on top
    // When a card is in view (rawProgress 0-300), it should have highest z-index
    // Cards that haven't appeared yet should be below
    // Cards that are done should be at the bottom
    let zIndex = 10;
    if (rawProgress < 0) {
      // Card hasn't appeared yet - should be below current card
      zIndex = 5 - index;
    } else if (rawProgress >= 0 && rawProgress < 300) {
      // Card is currently active - should be on top
      zIndex = 100 + index;
    } else {
      // Card is done - should be at bottom
      zIndex = index;
    }

    // Only show cards after header is visible
    const headerVisible = headerRef.current && headerRef.current.getBoundingClientRect().top <= 100;
    const isVisible = headerVisible && rawProgress >= -10;

    // Determine if this card should be interactive
    // A card is interactive if it's currently in the active viewing range
    const isInteractive = rawProgress >= 0 && rawProgress < 300;

    return {
      transform: `translateY(${translateY}%) scale(${scale})`,
      filter: blur > 0 ? `blur(${blur}px)` : 'none',
      top: `calc(50% - 360px + ${stackOffset}px)`, // Positioned higher to show full card including buttons
      opacity: isVisible ? opacity : 0,
      zIndex: zIndex,
      pointerEvents: (isInteractive ? 'auto' : 'none') as React.CSSProperties['pointerEvents'],
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
        className="sticky top-20 z-10 text-center pt-12 pb-8 px-8"
        style={{
          ...getHeaderStyle(),
          background: 'linear-gradient(180deg, #0A0812 0%, rgba(10, 8, 18, 0) 100%)'
        }}
      >
        <h2 className="text-5xl font-bold mb-3" style={{ color: '#FFFFFF' }}>Featured Projects</h2>
        <p className="text-xl" style={{ color: '#B3A9C9' }}>Building products that solve real problems</p>
      </div>

      {/* Cards container */}
      <div className="max-w-6xl mx-auto px-8 relative mt-4" style={{ height: '80vh' }}>
        {projects.map((project, index) => (
          <div
            key={index}
            className="absolute w-full"
            style={getCardTransform(index)}
          >
            <div className="h-[600px]">
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
