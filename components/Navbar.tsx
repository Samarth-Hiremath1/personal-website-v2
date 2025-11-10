'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function Navbar() {
  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Leadership', href: '#leadership' },
  ]

  const handleContactClick = () => {
    const contactSection = document.getElementById('contact')
    contactSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1.2 }}
      className="fixed top-0 left-0 right-0 z-[9999] px-8 py-4"
    >
      <div className="max-w-[95vw] mx-auto">
        <div 
          className="rounded-2xl px-8 py-4 flex items-center justify-between relative overflow-hidden"
          style={{
            background: 'rgba(19, 16, 36, 0.4)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.2)'
          }}
        >
          {/* Logo */}
          <div className="text-xl font-bold text-white">
            Samarth H.
          </div>

          {/* Navigation Items */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="cursor-pointer transition-colors duration-200"
                style={{ color: '#B3A9C9' }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#FFFFFF'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#B3A9C9'}
              >
                {item.name}
              </motion.a>
            ))}
            <motion.button
              onClick={handleContactClick}
              className="px-6 py-2 rounded-xl text-white font-medium transition-all duration-200"
              style={{
                background: 'linear-gradient(90deg, #FF007F 0%, #FF5E00 100%)',
                boxShadow: '0 0 25px rgba(255,94,0,0.5)'
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-white">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}