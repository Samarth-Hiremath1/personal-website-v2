'use client'

import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import BentoGrid from '../components/BentoGrid'
import LightRays from '../components/ui/LightRays'
import { TimelineDemo } from '../components/TimelineDemo'
import { GlobeDemo } from '../components/ui/GlobeDemo'
import { ProjectsSection } from '../components/ProjectsSection'
import { LeadershipSection } from '../components/LeadershipSection'
import { ContactSection } from '../components/ContactSection'

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
    <main className="min-h-screen relative" style={{ background: '#0A0812' }}>
      {/* Fixed background light rays - only render after bento boxes appear */}
      {showLightRays && (
        <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 1 }}>
          <LightRays />
        </div>
      )}

      {/* Content layer */}
      <div className="relative" style={{ zIndex: 10 }}>
        <Navbar />

        {/* Hero Section with Bento Grid */}
        <section className="min-h-screen lg:h-screen pt-20 sm:pt-24 relative" style={{ background: 'radial-gradient(circle at 60% 40%, rgba(108, 31, 255, 0.25), transparent 70%)' }}>
          <BentoGrid onAllAnimationsComplete={handleAllAnimationsComplete} />
        </section>

        {/* About Section */}
        <section id="about" className="min-h-screen px-4 sm:px-6 md:px-8 py-12 sm:py-16 flex items-center justify-center relative" style={{ backgroundColor: 'transparent' }}>
          <div className="max-w-7xl mx-auto w-full text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12" style={{ color: '#FFFFFF' }}>About Me</h2>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 sm:gap-8 items-center text-left">
              {/* Left side - Globe */}
              <div className="md:col-span-2 flex justify-center md:justify-start md:-ml-8 order-2 md:order-1">
                <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] relative">
                  <GlobeDemo />
                </div>
              </div>

              {/* Right side - About text */}
              <div className="md:col-span-3 md:pl-4 order-1 md:order-2">
                <p className="text-base sm:text-lg leading-relaxed mb-3 sm:mb-4" style={{ color: '#B3A9C9', letterSpacing: '0.3px' }}>
                  Hey, I'm <span className="font-bold" style={{ color: '#A85CFF' }}>Samarth</span>, an aspiring <span className="font-bold" style={{ color: '#A85CFF' }}>Software Engineer</span>, <span className="font-bold" style={{ color: '#A85CFF' }}>Product Manager</span>, and <span className="font-bold" style={{ color: '#A85CFF' }}>Entrepreneur</span> who's obsessed with building <span className="font-bold" style={{ color: '#A85CFF' }}>AI-driven products</span> that actually make a difference.
                </p>
                <p className="text-base sm:text-lg leading-relaxed mb-3 sm:mb-4" style={{ color: '#B3A9C9', letterSpacing: '0.3px' }}>
                  I love taking ideas from <span className="font-bold" style={{ color: '#A85CFF' }}>0 → 1</span>. My background spans <span className="font-bold" style={{ color: '#A85CFF' }}>software engineering</span>, <span className="font-bold" style={{ color: '#A85CFF' }}>product management</span>, and <span className="font-bold" style={{ color: '#A85CFF' }}>consulting</span>, giving me a toolkit to navigate both the code and the bigger picture.
                </p>
                <p className="text-base sm:text-lg leading-relaxed mb-3 sm:mb-4" style={{ color: '#B3A9C9', letterSpacing: '0.3px' }}>
                  I'm driven by <span className="font-bold" style={{ color: '#A85CFF' }}>curiosity</span>, <span className="font-bold" style={{ color: '#A85CFF' }}>creativity</span>, and the pursuit of doing work that matters — projects that leave a mark and people who inspire growth.
                </p>
                <p className="text-base sm:text-lg leading-relaxed" style={{ color: '#B3A9C9', letterSpacing: '0.3px' }}>
                  If you're working on something bold or just want to exchange ideas, let's connect: <a href="mailto:samhiremath@ucdavis.edu" className="font-semibold hover:underline" style={{ color: '#6C1FFF' }}>samhiremath@ucdavis.edu</a>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="min-h-screen px-4 sm:px-6 md:px-8 py-12 sm:py-16 pb-24 sm:pb-48 relative" style={{ backgroundColor: 'transparent' }}>
          <TimelineDemo />
        </section>

        {/* Projects Section */}
        <section id="projects" className="min-h-screen pt-16 sm:pt-24 md:pt-32 relative" style={{ backgroundColor: 'transparent' }}>
          <ProjectsSection />
        </section>

        {/* Leadership Section */}
        <section id="leadership" className="min-h-screen relative" style={{ backgroundColor: 'transparent' }}>
          <LeadershipSection />
        </section>

        {/* Contact Section */}
        <ContactSection />
      </div>
    </main>
  )
}