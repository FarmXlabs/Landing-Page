'use client'

import { motion } from 'framer-motion'
import { Bot, Coins, TrendingUp, Layers } from 'lucide-react'

const FeaturesSection = () => {
  const features = [
    {
      icon: Bot,
      title: "Complete Automation",
      description: "Our AI-powered fleet operates 24/7 with zero human intervention, from seeding to harvest. True autonomy is finally here.",
      delay: 0
    },
    {
      icon: Coins,
      title: "Zero Operational Cost",
      description: "Our self-sustaining system eliminates manual oversight and resource waste, maximizing your profit by crushing operational spend.",
      delay: 0.1
    },
    {
      icon: TrendingUp,
      title: "Maximum Value",
      description: "Low-cost automation doesn't mean low quality. We deliver unparalleled efficiency and yield increases for maximum return on investment.",
      delay: 0.2
    },
    {
      icon: Layers,
      title: "Cross-Integration",
      description: "Our ecosystem seamlessly integrates with existing farm equipment and data platforms, enhancing what you already have.",
      delay: 0.3
    }
  ]

  return (
    <section id="features" className="py-24 bg-gradient-to-b from-white to-emerald-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Why FarmXLabs is Different</h2>
          <p className="text-slate-600 max-w-3xl mx-auto text-lg">We didn't just improve farming technology. We reimagined it from the ground up.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: feature.delay }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-100 hover:border-emerald-200 group">
                <div className="bg-emerald-100 text-emerald-600 rounded-full h-20 w-20 flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-slate-900 group-hover:text-emerald-700 transition-colors">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection 