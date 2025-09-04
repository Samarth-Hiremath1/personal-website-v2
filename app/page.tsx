'use client'

import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import BentoGrid from '../components/BentoGrid'
import LightRays from '../components/ui/LightRays'

export default function Home() {
  const [showLightRays, setShowLightRays] = useState(false)

  const handleAllAnimationsComplete = () => {
    setShowLightRays(true)
  }

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
        <BentoGrid onAllAnimationsComplete={handleAllAnimationsComplete} />
        
        {/* Placeholder sections for future development */}
        <section id="experience" className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-4">Experience</h2>
            <p className="text-gray-400">Coming Soon</p>
          </div>
        </section>
        
        <section id="projects" className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-4">Projects</h2>
            <p className="text-gray-400">Coming Soon</p>
          </div>
        </section>
        
        <section id="leadership" className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-4">Leadership</h2>
            <p className="text-gray-400">Coming Soon</p>
          </div>
        </section>
      </div>
    </main>
  )
}