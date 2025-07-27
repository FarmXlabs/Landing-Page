'use client'

import { motion } from 'framer-motion'
import { Twitter, Facebook, Youtube, Heart, Mail, MapPin, Phone } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 md:px-12 py-10">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left Side - Company Description & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-base text-slate-300 leading-relaxed max-w-md mb-6">
              Empowering the heart of India through technology and innovation. Revolutionizing agriculture with autonomous solutions.
            </p>
            
            {/* Social Media Links */}
            <div className="flex items-center gap-4 mb-4">
              <span className="text-slate-400 text-sm">Follow us:</span>
              <div className="flex gap-3">
                <motion.a
                  href="#"
                  className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Twitter className="w-4 h-4" />
                </motion.a>
                <motion.a
                  href="#"
                  className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Facebook className="w-4 h-4" />
                </motion.a>
                <motion.a
                  href="#"
                  className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Youtube className="w-4 h-4" />
                </motion.a>
              </div>
            </div>
            
            <div className="flex items-center gap-2 text-slate-400 text-sm">
              <span>Made with</span>
              <Heart className="w-3 h-3 text-red-500" />
              <span>for Indian Farmers</span>
            </div>
          </motion.div>

          {/* Right Side - Logo & Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-start"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              FarmX<span className="gradient-text bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">Labs</span>
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-emerald-400" />
                <span className="text-sm">123 AgriTech Park, Bengaluru, India</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-emerald-400" />
                <a href="mailto:info@farmxlabs.com" className="text-sm hover:text-emerald-400 transition-colors">
                  info@farmxlabs.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-emerald-400" />
                <span className="text-sm">+91 98765 43210</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-slate-950 py-3 px-4 md:px-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-slate-500">
            <div className="flex items-center gap-4">
              <span>&copy; {currentYear} FarmXLabs. All Rights Reserved.</span>
              <div className="hidden md:flex items-center gap-4">
                <a href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-emerald-400 transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-emerald-400 transition-colors">Cookie Policy</a>
              </div>
            </div>
            <div className="text-xs">
              <span>Empowering Agriculture Through Technology</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 