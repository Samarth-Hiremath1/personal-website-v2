'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function Navbar() {
  const navItems = [
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Leadership', href: '#leadership' },
  ]

  const handleContactClick = () => {
    window.location.href = 'mailto:samhiremath@ucdavis.edu'
  }

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1.2 }}
      className="fixed top-0 left-0 right-0 z-50 px-8 py-4"
    >
      <div className="max-w-[95vw] mx-auto">
        <div className="spotlight-card rounded-2xl px-8 py-4 flex items-center justify-between">
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
                className="text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </motion.a>
            ))}
            <motion.button
              onClick={handleContactClick}
              className="bg-gradient-to-r from-primary to-secondary px-6 py-2 rounded-lg text-white font-medium hover:shadow-lg hover:shadow-primary/25 transition-all duration-200"
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