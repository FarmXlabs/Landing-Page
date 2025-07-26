'use client'

import { motion } from 'framer-motion'
import { Droplets, Satellite, Smartphone, Plane } from 'lucide-react'

const EcosystemSection = () => {
  const ecosystemItems = [
    {
      icon: Droplets,
      title: "Truly Stand-Alone Valves",
      description: "No external connections needed. Our smart valves are self-powered and AI-controlled. Easy to connect, configure, and forget.",
      delay: 0
    },
    {
      icon: Satellite,
      title: "Satellite-Based Sensing",
      description: "We use advanced satellite data, not ground sensors, to analyze crop health, water needs, and soil conditions with incredible accuracy.",
      delay: 0.1
    },
    {
      icon: Smartphone,
      title: "Unified Command App",
      description: "The entire ecosystem is controlled from one simple app. Monitor, manage, and get deep insights from anywhere in the world.",
      delay: 0.2
    },
    {
      icon: Plane,
      title: "AI Drone Fleet",
      description: "Our drones execute tasks from mapping to spraying with precision, all directed by the central AI brain for optimal efficiency.",
      delay: 0.3
    }
  ]

  return (
    <section id="ecosystem" className="py-24 section-pattern relative overflow-hidden">
      {/* Grainy Texture */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
      }}></div>
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">The Most Advanced AgTech Ecosystem</h2>
          <p className="text-slate-600 max-w-3xl mx-auto text-lg">A fully integrated, autonomous platform designed for plug-and-play simplicity and power.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 text-center max-w-6xl mx-auto">
          {ecosystemItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: item.delay }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="p-6 rounded-full inline-block border-4 border-slate-200 mb-4 text-emerald-600 bg-white hover:scale-110 hover:border-emerald-300 transition-all duration-300 shadow-lg group-hover:shadow-xl floating-animation group-hover:bg-emerald-50">
                <item.icon className="w-12 h-12 group-hover:scale-110 transition-transform duration-300" />
              </div>
                              <h3 className="text-2xl font-semibold mb-2 text-slate-900 group-hover:text-emerald-700 transition-colors">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EcosystemSection 