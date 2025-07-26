'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "Is this really \"zero operational cost\"?",
      answer: "Yes. Our stand-alone valves are self-powered, and the system is fully autonomous. Once installed, there are no recurring manual labor costs, no electricity bills for the system, and resource usage (water, fertilizer) is so optimized by the AI that it pays for itself. Your only cost is the subscription."
    },
    {
      question: "How difficult is the installation process?",
      answer: "Our certified technicians handle the entire installation. The valves are designed for a simple 'plug-and-play' setup into your existing irrigation lines. The process is quick, clean, and we ensure everything is perfectly configured and tested before we leave."
    },
    {
      question: "What happens if a component breaks?",
      answer: "Your subscription includes a comprehensive hardware warranty and support. Our system proactively monitors the health of all components. If an issue is detected, we are often on our way with a replacement before you even notice a problem."
    },
    {
      question: "Can FarmXLabs work on my small farm?",
      answer: "Absolutely. The system is fully scalable. It's designed to be affordable and effective for a 1-acre plot or a 1000-acre estate. Our pricing is based on farm size, ensuring it's accessible to every Indian farmer."
    },
    {
      question: "How secure is my farm's data?",
      answer: "We take data security extremely seriously. All data is encrypted both in transit and at rest using industry-leading security standards. Your farm's data is yours and yours alone. It is used only to optimize your farm's performance."
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-24 section-pattern">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-slate-600 text-lg">Have questions? We have answers.</p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div
                className="bg-white border border-slate-200 rounded-lg cursor-pointer hover:border-primary-500 transition-colors shadow-sm hover:shadow-md"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex justify-between items-center p-6">
                  <h3 className="text-xl font-semibold text-slate-900 pr-4">{faq.question}</h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-primary-600 flex-shrink-0"
                  >
                    <ChevronDown className="w-6 h-6" />
                  </motion.div>
                </div>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQSection 