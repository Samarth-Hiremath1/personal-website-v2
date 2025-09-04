'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import LogoLoop from './ui/LogoLoop'
import FlowingMenuReactBits from './ui/FlowingMenuReactBits'
import {
  SiReact, SiPython, SiNodedotjs, SiAmazonaws, SiNextdotjs,
  SiTypescript, SiTailwindcss, SiMongodb, SiCplusplus,
  SiJavascript, SiR, SiHtml5, SiCss3, SiMysql, SiGit,
  SiFastapi, SiDocker, SiNumpy, SiPandas
} from 'react-icons/si'

interface BentoGridProps {
  onAllAnimationsComplete?: () => void
}

export default function BentoGrid({ onAllAnimationsComplete }: BentoGridProps) {
  const [profileImageLoaded, setProfileImageLoaded] = useState(false)
  const [animationComplete, setAnimationComplete] = useState(false)
  const [targetPosition, setTargetPosition] = useState({ x: 0, y: 0 })
  const [targetSize, setTargetSize] = useState({ width: 0, height: 0 })
  const [dimensionsReady, setDimensionsReady] = useState(false)

  const profileRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Calculate target position and size after component mounts
    const calculatePosition = () => {
      if (profileRef.current) {
        const rect = profileRef.current.getBoundingClientRect()
        const centerX = window.innerWidth / 2
        const centerY = window.innerHeight / 2

        setTargetPosition({
          x: rect.left + rect.width / 2 - centerX,
          y: rect.top + rect.height / 2 - centerY
        })

        setTargetSize({
          width: rect.width,
          height: rect.height
        })

        setDimensionsReady(true)
      }
    }

    // Calculate position after a short delay to ensure layout is ready
    const positionTimer = setTimeout(calculatePosition, 100)

    // Animation completion timer
    const timer = setTimeout(() => {
      setAnimationComplete(true)
      setProfileImageLoaded(true)
    }, 1400) // 0.2s delay + 1.2s animation

    // Timer for when all bento boxes are visible (after the last animation completes)
    const allBoxesTimer = setTimeout(() => {
      onAllAnimationsComplete?.()
    }, 2000) // After all animations including the arrow (1.7s + buffer)

    return () => {
      clearTimeout(timer)
      clearTimeout(positionTimer)
      clearTimeout(allBoxesTimer)
    }
  }, [onAllAnimationsComplete])

  // Complete tech stack with all technologies
  const techLogos1 = [
    { name: 'React', icon: <SiReact className="text-blue-400 w-12 h-12" /> },
    { name: 'Python', icon: <SiPython className="text-yellow-400 w-12 h-12" /> },
    { name: 'Node.js', icon: <SiNodedotjs className="text-green-400 w-12 h-12" /> },
    { name: 'AWS', icon: <SiAmazonaws className="text-orange-400 w-12 h-12" /> },
    { name: 'Next.js', icon: <SiNextdotjs className="text-white w-12 h-12" /> },
    { name: 'TypeScript', icon: <SiTypescript className="text-blue-500 w-12 h-12" /> },
    { name: 'Tailwind', icon: <SiTailwindcss className="text-cyan-400 w-12 h-12" /> },
    { name: 'MongoDB', icon: <SiMongodb className="text-green-500 w-12 h-12" /> },
    { name: 'C++', icon: <SiCplusplus className="text-blue-600 w-12 h-12" /> },
    { name: 'Java', icon: <div className="w-12 h-12 bg-red-500 rounded text-lg flex items-center justify-center font-bold text-white">J</div> },
    { name: 'JavaScript', icon: <SiJavascript className="text-yellow-500 w-12 h-12" /> },
    { name: 'R', icon: <SiR className="text-blue-400 w-12 h-12" /> },
    { name: 'MATLAB', icon: <div className="w-12 h-12 bg-orange-500 rounded text-lg flex items-center justify-center font-bold text-white">M</div> },
  ]

  const techLogos2 = [
    { name: 'HTML', icon: <SiHtml5 className="text-orange-500 w-12 h-12" /> },
    { name: 'CSS', icon: <SiCss3 className="text-blue-500 w-12 h-12" /> },
    { name: 'MySQL', icon: <SiMysql className="text-blue-600 w-12 h-12" /> },
    { name: 'Git', icon: <SiGit className="text-orange-600 w-12 h-12" /> },
    { name: 'FastAPI', icon: <SiFastapi className="text-green-500 w-12 h-12" /> },
    { name: 'Docker', icon: <SiDocker className="text-blue-500 w-12 h-12" /> },
    { name: 'Kubernetes', icon: <div className="w-12 h-12 bg-blue-600 rounded text-sm flex items-center justify-center font-bold text-white">K8</div> },
    { name: 'REST', icon: <div className="w-12 h-12 bg-green-600 rounded text-xs flex items-center justify-center font-bold text-white">API</div> },
    { name: 'NumPy', icon: <SiNumpy className="text-blue-400 w-12 h-12" /> },
    { name: 'Pandas', icon: <SiPandas className="text-purple-600 w-12 h-12" /> },
    { name: 'Excel', icon: <div className="w-12 h-12 bg-green-700 rounded text-base flex items-center justify-center font-bold text-white">XL</div> },
    { name: 'SQL', icon: <div className="w-12 h-12 bg-blue-700 rounded text-sm flex items-center justify-center font-bold text-white">SQL</div> },
    { name: 'Langchain', icon: <div className="w-12 h-12 bg-purple-600 rounded text-xs flex items-center justify-center font-bold text-white">LC</div> },
    { name: 'Langgraph', icon: <div className="w-12 h-12 bg-indigo-600 rounded text-xs flex items-center justify-center font-bold text-white">LG</div> },
  ]

  const experiences = [
    {
      link: '#',
      text: 'Snap Inc.',
      image: 'https://picsum.photos/600/400?random=1'
    },
    {
      link: '#',
      text: 'Boston Consulting Group',
      image: 'https://picsum.photos/600/400?random=2'
    },
    {
      link: '#',
      text: 'Spin Scooters',
      image: 'https://picsum.photos/600/400?random=3'
    },
    {
      link: '#',
      text: 'Liner AI',
      image: 'https://picsum.photos/600/400?random=4'
    },
    {
      link: '#',
      text: 'AggieWorks',
      image: 'https://picsum.photos/600/400?random=5'
    },
  ]

  // Mouse tracking for spotlight effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100

    e.currentTarget.style.setProperty('--mouse-x', `${x}%`)
    e.currentTarget.style.setProperty('--mouse-y', `${y}%`)
  }

  // Handle adjacent card glow effects
  const handleCardHover = (isHovering: boolean) => {
    const cards = document.querySelectorAll('.spotlight-card')
    cards.forEach(card => {
      if (isHovering) {
        card.classList.add('adjacent-glow')
      } else {
        card.classList.remove('adjacent-glow')
      }
    })
  }

  // Enhanced mouse move handler with adjacent glow
  const handleMouseMoveWithGlow = (e: React.MouseEvent<HTMLDivElement>) => {
    handleMouseMove(e)
    handleCardHover(true)
  }

  const handleMouseLeave = () => {
    handleCardHover(false)
  }

  return (
    <>
      {/* Animated Profile Image Overlay - starts from center */}
      {!animationComplete && dimensionsReady && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.3, delay: 1.2 }}
        >
          <motion.div
            className="glass-morphism rounded-2xl bento-glow p-8 flex items-center justify-center"
            style={{
              width: targetSize.width || 'auto',
              height: targetSize.height || 'auto'
            }}
            initial={{ scale: 1.5 }}
            animate={{
              scale: 1,
              x: targetPosition.x,
              y: targetPosition.y
            }}
            transition={{
              duration: 1.2,
              delay: 0.2,
              ease: [0.25, 0.1, 0.25, 1.0]
            }}
          >
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center overflow-hidden">
                <div className="w-28 h-28 bg-gray-700 rounded-full flex items-center justify-center">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" className="text-gray-400">
                    <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white">Samarth H.</h3>
              <p className="text-gray-400">Software Engineer</p>
            </div>
          </motion.div>
        </motion.div>
      )}

      <div className="min-h-screen pt-24 px-8 pb-8">
        <div className="max-w-[95vw] mx-auto">
          {/* Bento Grid */}
          <div className="bento-grid-container grid grid-cols-1 lg:grid-cols-12 gap-6 h-[calc(100vh-8rem)]">

            {/* Left Column - 5 units */}
            <motion.div
              className="lg:col-span-5 grid grid-rows-2 gap-6"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.4 }}
            >
              {/* Quote Box */}
              <div
                className="spotlight-card rounded-2xl p-8 flex items-center justify-center"
                onMouseMove={handleMouseMoveWithGlow}
                onMouseLeave={handleMouseLeave}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.6 }}
                  className="text-center"
                >
                  <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                    Design.<br />
                    Build.<br />
                    Lead.
                  </h2>
                </motion.div>
              </div>

              {/* 3D Model Placeholder */}
              <div
                className="spotlight-card rounded-2xl p-8 flex items-center justify-center"
                onMouseMove={handleMouseMoveWithGlow}
                onMouseLeave={handleMouseLeave}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.8 }}
                  className="text-center"
                >
                  <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" className="text-white">
                      <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <p className="text-gray-400">3D Robot Model</p>
                  <p className="text-sm text-gray-500">Coming Soon</p>
                </motion.div>
              </div>
            </motion.div>

            {/* Center Column - 3 units */}
            <div className="lg:col-span-3 grid grid-rows-11 gap-6">

              {/* Profile Image - 7 rows */}
              <motion.div
                ref={profileRef}
                className="row-span-7 spotlight-card rounded-2xl p-8 flex items-center justify-center"
                onMouseMove={handleMouseMoveWithGlow}
                onMouseLeave={handleMouseLeave}
                initial={{ opacity: 0 }}
                animate={{ opacity: animationComplete ? 1 : 0 }}
                transition={{ duration: 0.5, delay: animationComplete ? 0 : 0 }}
              >
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center overflow-hidden">
                    <div className="w-28 h-28 bg-gray-700 rounded-full flex items-center justify-center">
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" className="text-gray-400">
                        <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white">Samarth H.</h3>
                  <p className="text-gray-400">Software Engineer</p>
                </div>
              </motion.div>

              {/* Tech Stack - 3 rows */}
              <motion.div
                className="row-span-3 spotlight-card rounded-2xl p-4 overflow-hidden"
                onMouseMove={handleMouseMoveWithGlow}
                onMouseLeave={handleMouseLeave}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: profileImageLoaded ? 1 : 0, y: profileImageLoaded ? 0 : 50 }}
                transition={{ duration: 0.5, delay: 1.6 }}
              >
                <div className="h-full flex flex-col justify-center space-y-4">
                  <LogoLoop logos={techLogos1} direction="left" speed={45} />
                  <LogoLoop logos={techLogos2} direction="right" speed={48} />
                </div>
              </motion.div>

              {/* Arrow - 1 row */}
              <motion.div
                className="row-span-1 spotlight-card rounded-2xl flex items-center justify-center"
                onMouseMove={handleMouseMoveWithGlow}
                onMouseLeave={handleMouseLeave}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: profileImageLoaded ? 1 : 0, y: profileImageLoaded ? 0 : 20 }}
                transition={{ duration: 0.5, delay: 1.7 }}
              >
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  className="text-primary"
                >
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <path d="M7 13L12 18L17 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M7 6L12 11L17 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </motion.div>
              </motion.div>
            </div>

            {/* Right Column - 4 units */}
            <motion.div
              className="lg:col-span-4"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.4 }}
              onMouseMove={handleMouseMoveWithGlow}
              onMouseLeave={handleMouseLeave}
            >
              <FlowingMenuReactBits items={experiences} />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  )
}