'use client'

import { motion } from 'framer-motion'
import { Twitter, Facebook, Youtube, Heart, Mail, MapPin, Phone } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="mb-6">
              <h3 className="text-3xl font-bold text-white mb-4">
                FarmX<span className="gradient-text bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">Labs</span>
              </h3>
              <p className="text-lg text-slate-300 leading-relaxed max-w-md">
                Empowering the heart of India through technology and innovation. Revolutionizing agriculture with autonomous solutions.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-emerald-400" />
                <span>123 AgriTech Park, Bengaluru, India</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-emerald-400" />
                <a href="mailto:info@farmxlabs.com" className="hover:text-emerald-400 transition-colors">
                  info@farmxlabs.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-emerald-400" />
                <span>+91 98765 43210</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="/#features" className="hover:text-emerald-400 transition-colors">Why Us?</a></li>
              <li><a href="/#advantage" className="hover:text-emerald-400 transition-colors">The Advantage</a></li>
              <li><a href="/#ecosystem" className="hover:text-emerald-400 transition-colors">Ecosystem</a></li>
              <li><a href="/blog" className="hover:text-emerald-400 transition-colors">Blog</a></li>
              <li><a href="/#faq" className="hover:text-emerald-400 transition-colors">FAQ</a></li>
              <li><a href="#login" className="hover:text-emerald-400 transition-colors">Login</a></li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold text-white mb-6">Stay Updated</h4>
            <p className="text-slate-400 mb-4">Get the latest insights on agricultural technology.</p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-emerald-500 transition-colors"
                required
              />
              <button 
                type="submit" 
                className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 text-white font-semibold py-3 px-6 rounded-lg hover:from-emerald-700 hover:to-emerald-800 transition-all duration-300 transform hover:scale-105"
              >
                Subscribe
              </button>
            </form>
            <p className="text-xs text-slate-500 mt-2">No spam. Unsubscribe anytime.</p>
          </motion.div>
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-slate-800"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-6">
              <span className="text-slate-400">Follow us:</span>
              <div className="flex gap-4">
                <motion.a
                  href="#"
                  className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Twitter className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="#"
                  className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Facebook className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="#"
                  className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Youtube className="w-5 h-5" />
                </motion.a>
              </div>
            </div>
            
            <div className="flex items-center gap-2 text-slate-400">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>for Indian Farmers</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-slate-950 py-4">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
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