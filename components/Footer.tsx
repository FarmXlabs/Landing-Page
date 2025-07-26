'use client'

import { motion } from 'framer-motion'
import { Twitter, Facebook, Youtube, Heart, Mail } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-slate-400 pt-12 pb-4">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 text-center md:text-left">
          {/* Brand & Address */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="md:col-span-1"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              FarmX<span className="gradient-text">Labs</span>
            </h3>
            <p className="leading-relaxed mb-4">
              Empowering the heart of India through technology and innovation.
            </p>
            <div className="space-y-1 text-sm text-slate-500">
              <p>FarmXLabs Pvt Ltd</p>
              <p>123 AgriTech Park, Bengaluru, India</p>
              <p>Email: <a href="mailto:info@farmxlabs.com" className="underline hover:text-emerald-400">info@farmxlabs.com</a></p>
            </div>
          </motion.div>

          {/* Spam Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="md:col-span-1"
          >
            <h4 className="text-lg font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Data Protection</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Security</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Compliance</a></li>
            </ul>
          </motion.div>

          {/* Newsletter Signup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:col-span-1 flex flex-col items-center"
          >
            <h4 className="text-lg font-semibold text-white mb-4">Newsletter</h4>
            <form className="flex flex-col gap-3 w-full max-w-xs mx-auto">
              <div className="flex rounded-lg overflow-hidden border border-slate-700 bg-slate-800">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="bg-transparent px-4 py-3 text-white flex-1 outline-none placeholder-slate-500"
                  required
                />
                <button 
                  type="submit" 
                  className="bg-emerald-600 hover:bg-emerald-700 px-4 py-3 text-white font-semibold flex items-center gap-2 transition-colors"
                >
                  <Mail className="w-4 h-4" /> 
                  <span className="hidden sm:inline">Subscribe</span>
                </button>
              </div>
              <span className="text-xs text-slate-500">No spam. Unsubscribe anytime.</span>
            </form>
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="md:col-span-1"
          >
            <h4 className="text-lg font-semibold text-white mb-4">Connect With Us</h4>
            <div className="flex justify-center md:justify-start space-x-4 mb-4">
              <motion.a
                href="#"
                className="hover:text-emerald-400 transition-colors p-2 rounded-full hover:bg-slate-800"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Twitter className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="#"
                className="hover:text-emerald-400 transition-colors p-2 rounded-full hover:bg-slate-800"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Facebook className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="#"
                className="hover:text-emerald-400 transition-colors p-2 rounded-full hover:bg-slate-800"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Youtube className="w-6 h-6" />
              </motion.a>
            </div>
            <div className="text-xs text-slate-500">
              <span>Follow us for updates and news.</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-slate-700 mt-8 pt-8 text-center"
        >
          <p className="flex items-center justify-center gap-2 text-sm text-slate-500">
            &copy; {currentYear} FarmXLabs. All Rights Reserved. Made with
            <Heart className="w-4 h-4 text-red-500" />
            for Indian Farmers.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer 