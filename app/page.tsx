'use client'

import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import BentoGrid from '../components/BentoGrid'
import LightRays from '../components/ui/LightRays'
import { TimelineDemo } from '../components/TimelineDemo'
import { GlobeDemo } from '../components/ui/GlobeDemo'
import { ProjectsSection } from '../components/ProjectsSection'

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
          <div className="max-w-7xl mx-auto w-full text-center">
            <h2 className="text-4xl font-bold text-white mb-12">About Me</h2>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center text-left">
              {/* Left side - Globe */}
              <div className="md:col-span-2 flex justify-start -ml-8">
                <div className="w-full h-[500px] relative">
                  <GlobeDemo />
                </div>
              </div>

              {/* Right side - About text */}
              <div className="md:col-span-3 pl-4">
                <p className="text-lg text-gray-300 leading-relaxed mb-4">
                  Hey, I'm <span className="font-bold text-white">Samarth</span>, an aspiring <span className="font-bold text-white">Software Engineer</span>, <span className="font-bold text-white">Product Manager</span>, and <span className="font-bold text-white">Entrepreneur</span> who's obsessed with building <span className="font-bold text-white">AI-driven products</span> that actually make a difference.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed mb-4">
                  I love taking ideas from <span className="font-bold text-white">0 → 1</span>, blending technical problem-solving with strategic thinking to turn ambitious concepts into real impact.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed mb-4">
                  My background spans <span className="font-bold text-white">software engineering</span>, <span className="font-bold text-white">product management</span>, and <span className="font-bold text-white">consulting</span>, giving me a toolkit to navigate both the code and the bigger picture.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed mb-4">
                  I'm driven by <span className="font-bold text-white">curiosity</span>, <span className="font-bold text-white">creativity</span>, and the pursuit of doing work that matters — projects that leave a mark and people who inspire growth.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  If you're working on something bold or just want to exchange ideas, let's connect: <a href="mailto:samhiremath@ucdavis.edu" className="text-primary hover:text-secondary transition-colors font-semibold hover:underline">samhiremath@ucdavis.edu</a>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="min-h-screen px-8 py-16 pb-32">
          <TimelineDemo />
        </section>

        {/* Projects Section */}
        <section id="projects" className="min-h-screen pt-16">
          <ProjectsSection />
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