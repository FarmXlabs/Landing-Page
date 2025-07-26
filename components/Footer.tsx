'use client'

import { motion } from 'framer-motion'
import { Twitter, Facebook, Youtube, Heart } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              FarmX<span className="gradient-text">Labs</span>
            </h3>
            <p className="leading-relaxed">
              Empowering the heart of India through technology and innovation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="hover:text-primary-400 transition-colors">Why Us?</a></li>
              <li><a href="#advantage" className="hover:text-primary-400 transition-colors">The Advantage</a></li>
              <li><a href="#ecosystem" className="hover:text-primary-400 transition-colors">Ecosystem</a></li>
              <li><a href="#faq" className="hover:text-primary-400 transition-colors">FAQ</a></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">Connect With Us</h4>
            <div className="flex justify-center md:justify-start space-x-4 text-2xl">
              <motion.a
                href="#"
                className="hover:text-primary-400 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Twitter className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="#"
                className="hover:text-primary-400 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Facebook className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="#"
                className="hover:text-primary-400 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Youtube className="w-6 h-6" />
              </motion.a>
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
          <p className="flex items-center justify-center gap-2">
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