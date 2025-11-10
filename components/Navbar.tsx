'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Leadership', href: '#leadership' },
  ]

  const handleContactClick = () => {
    const contactSection = document.getElementById('contact')
    contactSection?.scrollIntoView({ behavior: 'smooth' })
    setMobileMenuOpen(false)
  }

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false)
    // Let the default anchor behavior handle the scroll
  }

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        className="fixed top-0 left-0 right-0 z-[9999] px-4 sm:px-6 md:px-8 py-3 sm:py-4"
      >
        <div className="max-w-[95vw] mx-auto">
          <div 
            className="rounded-xl sm:rounded-2xl px-4 sm:px-6 md:px-8 py-3 sm:py-4 flex items-center justify-between relative overflow-hidden"
            style={{
              background: 'rgba(19, 16, 36, 0.4)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.2)'
            }}
          >
            {/* Logo */}
            <motion.button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' })
                setTimeout(() => window.location.reload(), 500)
              }}
              className="text-lg sm:text-xl font-bold text-white cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Samarth H.
            </motion.button>

            {/* Navigation Items - Desktop */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="cursor-pointer transition-colors duration-200 text-sm lg:text-base"
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
                className="px-4 lg:px-6 py-2 rounded-xl text-white font-medium transition-all duration-200 text-sm lg:text-base"
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
            <button 
              className="md:hidden text-white p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[72px] left-0 right-0 z-[9998] px-4 md:hidden"
          >
            <div
              className="rounded-xl overflow-hidden"
              style={{
                background: 'rgba(19, 16, 36, 0.95)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.3)'
              }}
            >
              <div className="flex flex-col py-2">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className="px-6 py-3 transition-colors duration-200"
                    style={{ color: '#B3A9C9' }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {item.name}
                  </motion.a>
                ))}
                <motion.button
                  onClick={handleContactClick}
                  className="mx-4 my-2 px-6 py-3 rounded-xl text-white font-medium transition-all duration-200"
                  style={{
                    background: 'linear-gradient(90deg, #FF007F 0%, #FF5E00 100%)',
                    boxShadow: '0 0 25px rgba(255,94,0,0.5)'
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navItems.length * 0.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Contact
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}