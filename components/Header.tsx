'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, User, LogIn } from 'lucide-react'

const navItems = [
  { href: '#features', label: 'Why Us?' },
  { href: '#advantage', label: 'The Advantage' },
  { href: '#ecosystem', label: 'Ecosystem' },
  { href: '/blog', label: 'Blog' },
  { href: '#faq', label: 'FAQ' },
]

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-800/95 backdrop-blur-xl shadow-lg border-b border-slate-700' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.h1 
            className="text-3xl font-bold text-white"
            whileHover={{ scale: 1.05 }}
          >
            FarmX<span className="gradient-text bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">Labs</span>
          </motion.h1>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center text-lg">
            {navItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                className={`transition-colors relative group ${
                  isScrolled ? 'text-slate-300 hover:text-white' : 'text-slate-200 hover:text-emerald-300'
                }`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-emerald-600 transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
            ))}
          </nav>

          {/* Login Button */}
          <div className="hidden md:flex items-center">
            <motion.a
              href="#login"
              className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105 flex items-center gap-2 border border-emerald-500"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <User className="w-4 h-4" />
              <LogIn className="w-4 h-4" />
              <span>Login</span>
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 pb-4"
            >
              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-slate-200 hover:text-emerald-300 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="#login"
                  className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all text-center flex items-center justify-center gap-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <User className="w-4 h-4" />
                  <LogIn className="w-4 h-4" />
                  <span>Login</span>
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}

export default Header 