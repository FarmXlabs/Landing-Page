'use client'

import { motion } from 'framer-motion'

export default function BlogHeroClientWrapper() {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 text-white pt-32 pb-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            FarmXLabs <span className="gradient-text bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">Blog</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Insights, innovations, and stories from the forefront of agricultural technology.
          </p>
        </motion.div>
      </div>
    </div>
  )
} 