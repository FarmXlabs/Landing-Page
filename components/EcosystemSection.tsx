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
    <section id="ecosystem" className="py-24 section-pattern">
      <div className="container mx-auto px-6">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
          {ecosystemItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: item.delay }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="p-6 rounded-full inline-block border-4 border-slate-200 mb-4 text-emerald-600 bg-white hover:scale-110 hover:border-emerald-300 transition-all duration-300 shadow-lg group-hover:shadow-xl floating-animation">
                <item.icon className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-slate-900">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EcosystemSection 