'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play } from 'lucide-react'

const HeroSection = () => {
  const [current, setCurrent] = useState(0)
  const rotatingTexts = [
    "వ్యవసాయ భవిష్యత్తు, ఈ రోజు.",
    "Agriculture's Future, Today.",
    "El Futuro de la Agricultura, Hoy.",
    "L'Avenir de l'Agriculture, Aujourd'hui.",
    "农业的未来，就在今天。"
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % rotatingTexts.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [rotatingTexts.length])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25"
        style={{ backgroundImage: "url('/images/hero.png')" }}
      ></div>

      {/* Grainy Texture Overlay */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.1'/%3E%3C/svg%3E")`
      }}></div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-800/60 to-slate-900/80"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/20 to-slate-900/40"></div>

      {/* Content */}
      <div className="relative z-10 w-full px-6 sm:px-8 md:px-12 text-center pt-20 pb-16 sm:pt-24 sm:pb-20 md:pt-0 md:pb-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 sm:mb-8 md:mb-10"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-4 sm:mb-6 leading-tight px-2">
            <span className="block mb-2 sm:mb-3">The Future of</span>
            <span className="gradient-text bg-gradient-to-r from-emerald-400 via-primary-500 to-emerald-600 bg-clip-text text-transparent">Autonomous Agriculture</span>
          </h1>
        </motion.div>

        {/* Rotating Text */}
        <div className="min-h-[60px] sm:min-h-[80px] md:min-h-[90px] flex items-center justify-center mb-6 sm:mb-8 md:mb-10 relative w-full">
          <AnimatePresence mode="wait">
            <motion.span
              key={current}
              className="absolute w-full text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-emerald-300/90 text-center px-4 flex items-center justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
            >
              {rotatingTexts[current]}
            </motion.span>
          </AnimatePresence>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-lg sm:text-xl md:text-2xl max-w-4xl mx-auto text-slate-200 mb-8 sm:mb-10 md:mb-12 leading-relaxed px-4"
        >
          The world's first truly autonomous agricultural platform. Unlock zero operational cost and maximum yield with the power of AI.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="flex flex-col items-center gap-6 sm:gap-8 px-4"
        >
          <motion.a
            href="#waitlist"
            className="group relative bg-white text-slate-900 font-bold px-8 sm:px-10 py-4 sm:py-5 rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 border-2 border-transparent hover:border-emerald-500 flex items-center gap-3 overflow-hidden w-full max-w-sm sm:max-w-md justify-center text-lg sm:text-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-emerald-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative z-10 flex items-center gap-3 group-hover:text-white transition-colors duration-300">
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
              </svg>
              Join the Revolution Today
            </span>
          </motion.a>

          <motion.button
            className="flex items-center justify-center gap-3 text-white hover:text-emerald-300 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 hover:bg-emerald-500/20 hover:border-emerald-400 transition-all duration-300">
              <Play className="w-5 h-5 sm:w-6 sm:h-6 ml-1" />
            </div>
            <span className="text-lg sm:text-xl font-medium">Watch Demo</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection 