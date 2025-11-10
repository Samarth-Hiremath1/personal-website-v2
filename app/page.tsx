'use client'

import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import BentoGrid from '../components/BentoGrid'
import LightRays from '../components/ui/LightRays'
import { TimelineDemo } from '../components/TimelineDemo'

export default function Home() {
  const [showLightRays, setShowLightRays] = useState(false)

  const handleAllAnimationsComplete = () => {
    setShowLightRays(true)
  }

  // Always scroll to top on page load
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="min-h-screen bg-dark relative">
      {/* Fixed background light rays - only render after bento boxes appear */}
      {showLightRays && (
        <div className="fixed inset-0 z-0">
          <LightRays />
        </div>
      )}

      {/* Content layer */}
      <div className="relative z-10">
        <Navbar />

        {/* Hero Section with Bento Grid */}
        <section className="h-screen pt-24">
          <BentoGrid onAllAnimationsComplete={handleAllAnimationsComplete} />
        </section>

        {/* About Section */}
        <section id="about" className="min-h-screen px-8 py-16 flex items-center justify-center">
          <div className="max-w-5xl mx-auto w-full text-center">
            <h2 className="text-4xl font-bold text-white mb-8">About Me</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center text-left">
              {/* Left side - Profile Image */}
              <div className="md:col-span-1 flex justify-center">
                <div className="w-64 h-64 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center overflow-hidden">
                  <div className="w-60 h-60 bg-gray-700 rounded-2xl flex items-center justify-center">
                    <svg width="100" height="100" viewBox="0 0 24 24" fill="none" className="text-gray-400">
                      <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Right side - About text */}
              <div className="md:col-span-2">
                <p className="text-xl text-gray-300 leading-relaxed mb-4">
                  I'm <span className="text-primary font-semibold">Samarth Hiremath</span>, an aspiring SWE, Product Manager, Management Consultant, and Entrepreneur.
                </p>
                <p className="text-xl text-gray-300 leading-relaxed mb-4">
                  I'm passionate about building AI-driven products that create real-world impact.
                </p>
                <p className="text-xl text-gray-300 leading-relaxed">
                  I'm pursuing my greatest passions of Tech and Business while double majoring in <span className="text-primary font-semibold">Computer Science and Statistics @ UC Davis</span>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="min-h-screen px-8 py-16">
          <TimelineDemo />
        </section>

        {/* Projects Section */}
        <section id="projects" className="min-h-screen px-8 py-16 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-4">Projects</h2>
            <p className="text-gray-400">Coming Soon</p>
          </div>
        </section>

        {/* Leadership Section */}
        <section id="leadership" className="min-h-screen px-8 py-16 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-4">Leadership</h2>
            <p className="text-gray-400">Coming Soon</p>
          </div>
        </section>
      </div>
    </main>
  )
}