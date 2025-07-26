'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const WaitlistSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    state: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const states = [
    "Andaman and Nicobar Islands", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar",
    "Chandigarh", "Chhattisgarh", "Dadra and Nagar Haveli and Daman and Diu", "Delhi", "Goa",
    "Gujarat", "Haryana", "Himachal Pradesh", "Jammu and Kashmir", "Jharkhand", "Karnataka",
    "Kerala", "Ladakh", "Lakshadweep", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya",
    "Mizoram", "Nagaland", "Odisha", "Puducherry", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
    "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
  ]

  return (
    <section id="waitlist" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-700 to-emerald-600 rounded-3xl p-8 md:p-12 lg:p-16 shadow-2xl"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-white"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Secure Your Place in the Future of Farming.</h2>
              <p className="text-primary-100 text-lg mb-6 leading-relaxed">
                Early access is limited. Join the waitlist to guarantee your spot, lock in special introductory pricing, and become a pioneer in India's agricultural revolution.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <form onSubmit={handleSubmit}>
                <h3 className="text-2xl font-bold mb-6 text-center text-slate-800">Get Your Early Access Pass</h3>
                
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">
                    Phone Number
                  </label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 text-sm text-slate-900 bg-slate-200 border border-r-0 border-slate-300 rounded-l-lg">
                      🇮🇳 +91
                    </span>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="rounded-none rounded-r-lg bg-white border text-slate-900 focus:ring-primary-500 focus:border-primary-500 block flex-1 min-w-0 w-full text-sm border-slate-300 p-3"
                      placeholder="9876543210"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="state" className="block text-sm font-medium text-slate-700 mb-1">
                    State / Union Territory
                  </label>
                  <select
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors bg-white"
                  >
                    <option value="" disabled>Select your State</option>
                    {states.map((state) => (
                      <option key={state} value={state}>{state}</option>
                    ))}
                  </select>
                </div>

                <motion.button
                  type="submit"
                  className="w-full gradient-bg text-white font-bold py-4 px-6 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:scale-105 text-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Secure My Spot
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default WaitlistSection 