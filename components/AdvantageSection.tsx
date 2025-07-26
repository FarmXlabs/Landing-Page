'use client'

import { motion } from 'framer-motion'
import { User, Droplets, HelpCircle, TrendingDown, Bot, Leaf, Brain, TrendingUp } from 'lucide-react'

const AdvantageSection = () => {
  const traditionalItems = [
    { icon: User, title: "High Manual Labor", description: "Constant physical work and supervision required." },
    { icon: Droplets, title: "High Water Waste", description: "Inefficient irrigation leads to wasted water and money." },
    { icon: HelpCircle, title: "Guesswork & Tradition", description: "Decisions based on intuition, not precise data." },
    { icon: TrendingDown, title: "Unpredictable Yields", description: "High vulnerability to pests, weather, and human error." }
  ]

  const farmxlabsItems = [
    { icon: Bot, title: "Fully Autonomous", description: "The system works for you 24/7, no supervision needed." },
    { icon: Leaf, title: "AI-Optimized Precision", description: "Every drop of water is used exactly where and when needed." },
    { icon: Brain, title: "Data-Driven Insights", description: "Make perfect decisions backed by real-time AI analysis." },
    { icon: TrendingUp, title: "Maximized & Consistent", description: "Higher yields, better quality, and predictable results every season." }
  ]

  return (
    <section id="advantage" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">The FarmXLabs Advantage</h2>
          <p className="text-slate-600 max-w-3xl mx-auto text-lg">See the clear difference between the old way and the new way of farming.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Traditional Farming */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-red-50 border-2 border-red-200 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-3xl font-bold text-red-800 mb-6 text-center">Traditional Farming</h3>
            <ul className="space-y-4">
              {traditionalItems.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start"
                >
                  <item.icon className="text-red-500 text-2xl mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="block text-red-800">{item.title}:</strong>
                    <span className="text-red-700">{item.description}</span>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* FarmXLabs Farming */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-primary-50 border-2 border-primary-200 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-3xl font-bold text-primary-800 mb-6 text-center">With FarmXLabs</h3>
            <ul className="space-y-4">
              {farmxlabsItems.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                  viewport={{ once: true }}
                  className="flex items-start"
                >
                  <item.icon className="text-primary-500 text-2xl mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="block text-primary-800">{item.title}:</strong>
                    <span className="text-primary-700">{item.description}</span>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AdvantageSection 