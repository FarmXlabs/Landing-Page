'use client'

import { motion } from 'framer-motion'
import { ChevronDown, Play } from 'lucide-react'

const HeroSection = () => {
  const rotatingTexts = [
    "खेती का भविष्य, आज।",
    "వ్యవసాయ భవిష్యత్తు, ఈ రోజు.",
    "കൃഷിയുടെ ഭാവി, ഇന്ന്.",
    "ಕೃಷಿಯ ಭವಿಷ್ಯ, ಇಂದು.",
    "விவசாயத்தின் எதிர்காலம், இன்று."
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2832&q=80')] bg-cover bg-center bg-no-repeat opacity-15"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-slate-900/90"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/30 via-transparent to-emerald-900/30"></div>
      </div>

              {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-emerald-400/30 rounded-full"
              animate={{
                x: [0, Math.random() * 200 - 100, 0],
                y: [0, Math.random() * 200 - 100, 0],
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: Math.random() * 15 + 15,
                repeat: Infinity,
                delay: Math.random() * 10,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
            <span className="block mb-2">The Future of</span>
            <span className="gradient-text bg-gradient-to-r from-emerald-400 via-primary-500 to-emerald-600 bg-clip-text text-transparent">Autonomous Agriculture</span>
          </h1>
        </motion.div>

        {/* Rotating Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="min-h-[90px] flex items-center justify-center mb-8"
        >
          <div className="relative">
            {rotatingTexts.map((text, index) => (
              <motion.span
                key={index}
                className="absolute inset-0 text-2xl md:text-4xl lg:text-5xl font-bold text-emerald-300/90"
                animate={{
                  opacity: [0, 1, 1, 0],
                  y: [30, 0, 0, -30],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 3,
                  ease: "easeInOut",
                }}
              >
                {text}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-lg md:text-2xl max-w-4xl mx-auto text-slate-200 mb-12 leading-relaxed"
        >
          The world's first truly autonomous agricultural platform. Unlock zero operational cost and maximum yield with the power of AI.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <motion.a
            href="#waitlist"
            className="group relative bg-white text-slate-900 font-bold px-10 py-4 rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 border-2 border-transparent hover:border-emerald-500"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Join the Revolution Today</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-emerald-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">Join the Revolution Today</span>
          </motion.a>

          <motion.button
            className="flex items-center gap-3 text-white hover:text-emerald-300 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 hover:bg-emerald-500/20 hover:border-emerald-400 transition-all duration-300">
              <Play className="w-5 h-5 ml-1" />
            </div>
            <span className="text-lg font-medium">Watch Demo</span>
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-white/60"
          >
            <span className="text-sm mb-2">Scroll to explore</span>
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection 