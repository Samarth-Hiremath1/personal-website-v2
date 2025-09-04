'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface FlowingMenuProps {
  title: string
  items: Array<{
    name: string
    image?: string
    onClick?: () => void
  }>
}

export default function FlowingMenu({ title, items }: FlowingMenuProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className="h-full w-full p-6 spotlight-card rounded-2xl">
      <h3 className="text-xl font-bold mb-6 text-white">{title}</h3>
      <div className="space-y-3">
        {items.map((item, index) => (
          <motion.div
            key={index}
            className="relative cursor-pointer group"
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
            onClick={item.onClick}
          >
            <motion.div
              className="p-4 rounded-xl transition-all duration-300 relative overflow-hidden"
              animate={{
                backgroundColor: hoveredIndex === index ? 'rgba(82, 0, 176, 0.2)' : 'transparent',
              }}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center overflow-hidden">
                  {item.image ? (
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">
                        {item.name.charAt(0)}
                      </span>
                    </div>
                  )}
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-white group-hover:text-primary transition-colors duration-200">
                    {item.name}
                  </h4>
                </div>
                <motion.div
                  animate={{
                    x: hoveredIndex === index ? 5 : 0,
                    opacity: hoveredIndex === index ? 1 : 0.5,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="text-primary"
                  >
                    <path
                      d="M6 12L10 8L6 4"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </motion.div>
              </div>
              
              {/* Flowing effect on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
                initial={{ x: '-100%' }}
                animate={{ x: hoveredIndex === index ? '100%' : '-100%' }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
              />
            </motion.div>
            
            <AnimatePresence>
              {hoveredIndex === index && (
                <motion.div
                  className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-secondary rounded-full"
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  exit={{ scaleY: 0 }}
                  transition={{ duration: 0.2 }}
                />
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  )
}