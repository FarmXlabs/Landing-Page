'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Lock } from 'lucide-react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const alwaysSolid = pathname.startsWith('/blog') || pathname.startsWith('/login')

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || alwaysSolid ? 'bg-slate-800/95 backdrop-blur-xl shadow-lg border-b border-slate-700' : 'bg-transparent'
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Logo */}
          <Link href="/" className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white hover:text-emerald-300 transition-colors">
            FarmX<span className="gradient-text bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">Labs</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="/#features"
              className={`font-medium transition-colors ${
                isScrolled || alwaysSolid ? 'text-slate-300 hover:text-white' : 'text-slate-200 hover:text-emerald-300'
              }`}
            >
              Why Us?
            </a>
            <a
              href="/#advantage"
              className={`font-medium transition-colors ${
                isScrolled || alwaysSolid ? 'text-slate-300 hover:text-white' : 'text-slate-200 hover:text-emerald-300'
              }`}
            >
              The Advantage
            </a>
            <a
              href="/#ecosystem"
              className={`font-medium transition-colors ${
                isScrolled || alwaysSolid ? 'text-slate-300 hover:text-white' : 'text-slate-200 hover:text-emerald-300'
              }`}
            >
              Ecosystem
            </a>
            <a
              href="/#faq"
              className={`font-medium transition-colors ${
                isScrolled || alwaysSolid ? 'text-slate-300 hover:text-white' : 'text-slate-200 hover:text-emerald-300'
              }`}
            >
              FAQ
            </a>
            <a
              href="/blog"
              className={`font-medium transition-colors ${
                isScrolled || alwaysSolid ? 'text-slate-300 hover:text-white' : 'text-slate-200 hover:text-emerald-300'
              }`}
            >
              Blog
            </a>
            <motion.a
              href="/login"
              className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold px-5 py-2 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:scale-105 flex items-center gap-2 border border-emerald-400/30 hover:border-emerald-300/50"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Lock className="w-4 h-4" />
              <span>Login</span>
            </motion.a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
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
              className="md:hidden bg-slate-800/95 backdrop-blur-xl border-t border-slate-700"
            >
              <div className="py-6 space-y-4">
                <a
                  href="/#features"
                  className="block text-slate-300 hover:text-white font-medium transition-colors py-2 px-4 rounded-lg hover:bg-white/10"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Why Us?
                </a>
                <a
                  href="/#advantage"
                  className="block text-slate-300 hover:text-white font-medium transition-colors py-2 px-4 rounded-lg hover:bg-white/10"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  The Advantage
                </a>
                <a
                  href="/#ecosystem"
                  className="block text-slate-300 hover:text-white font-medium transition-colors py-2 px-4 rounded-lg hover:bg-white/10"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Ecosystem
                </a>
                <a
                  href="/#faq"
                  className="block text-slate-300 hover:text-white font-medium transition-colors py-2 px-4 rounded-lg hover:bg-white/10"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  FAQ
                </a>
                <a
                  href="/blog"
                  className="block text-slate-300 hover:text-white font-medium transition-colors py-2 px-4 rounded-lg hover:bg-white/10"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Blog
                </a>
                <a
                  href="/login"
                  className="block bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold px-4 py-3 rounded-lg text-center mx-4"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Login
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}

export default Header 