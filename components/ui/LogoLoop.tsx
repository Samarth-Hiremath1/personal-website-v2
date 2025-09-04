'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface LogoLoopProps {
  logos: Array<{
    name: string
    icon: React.ReactNode
  }>
  direction?: 'left' | 'right'
  speed?: number
}

export default function LogoLoop({ logos, direction = 'left', speed = 15 }: LogoLoopProps) {
  // Create multiple copies for seamless infinite loop
  const extendedLogos = [...logos, ...logos, ...logos]
  
  return (
    <div className="relative overflow-hidden w-full">
      <motion.div
        className="flex gap-6"
        animate={{
          x: direction === 'left' ? [0, -33.33 * logos.length * 4] : [-33.33 * logos.length * 4, 0]
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: 'linear'
        }}
      >
        {extendedLogos.map((logo, index) => (
          <div
            key={index}
            className="flex-shrink-0 flex items-center justify-center tech-icon hover:scale-110 transition-transform duration-200"
            title={logo.name}
          >
            <div className="w-14 h-14 flex items-center justify-center">
              {logo.icon}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  )
}