'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface BlogClientWrapperProps {
  children: ReactNode
  className?: string
  delay?: number
}

export function BlogClientWrapper({ children, className = '', delay = 0 }: BlogClientWrapperProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function BlogArticleWrapper({ children, className = '', delay = 0 }: BlogClientWrapperProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.article>
  )
}

export function BlogContentWrapper({ children, className = '', delay = 0 }: BlogClientWrapperProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
} 