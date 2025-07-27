'use client'

import { motion } from 'framer-motion'
import { Calendar, User, Clock, ArrowLeft, Share2, Twitter, Facebook, Linkedin } from 'lucide-react'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { BlogPost } from '@/lib/notion'
import { formatDate } from '@/lib/utils'
import { useEffect, useState } from 'react'

interface BlogPostClientWrapperProps {
  blogPost: BlogPost
}

export default function BlogPostClientWrapper({ blogPost }: BlogPostClientWrapperProps) {
  const [readingProgress, setReadingProgress] = useState(0)
  const [showTableOfContents, setShowTableOfContents] = useState(false)

  useEffect(() => {
    const updateReadingProgress = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = (scrollTop / docHeight) * 100
      setReadingProgress(Math.min(scrollPercent, 100))
    }

    window.addEventListener('scroll', updateReadingProgress)
    return () => window.removeEventListener('scroll', updateReadingProgress)
  }, [])

  const handleShare = (platform: string) => {
    const url = window.location.href
    const title = blogPost.title
    const text = blogPost.excerpt

    const shareUrls = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
    }

    window.open(shareUrls[platform as keyof typeof shareUrls], '_blank')
  }

  return (
    <>
      {/* Reading Progress Bar - Below Header */}
      <div className="fixed top-16 left-0 w-full h-1 bg-slate-200 z-40">
        <motion.div
          className="h-full bg-emerald-600"
          style={{ width: `${readingProgress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      {/* Floating Back Button */}
      <motion.div
        className="fixed top-28 left-4 md:left-6 z-50"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <Link href="/blog">
          <motion.div 
            className="group relative inline-flex items-center gap-2 px-3 md:px-4 py-2 md:py-3 bg-white/90 backdrop-blur-sm border border-slate-200 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-emerald-50 hover:border-emerald-200"
            whileHover={{ scale: 1.05, x: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative">
              <ArrowLeft className="w-4 md:w-5 h-4 md:h-5 text-emerald-600 group-hover:text-emerald-700 transition-colors" />
              <div className="absolute inset-0 bg-emerald-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-0 group-hover:scale-150"></div>
            </div>
            <span className="text-xs md:text-sm font-medium text-slate-700 group-hover:text-emerald-700 transition-colors hidden sm:inline">Back to Blog</span>
          </motion.div>
        </Link>
      </motion.div>

      {/* Floating Share Button */}
      <motion.div
        className="fixed top-28 right-4 md:right-6 z-50"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="relative group">
          <motion.button
            className="p-3 bg-white/90 backdrop-blur-sm border border-slate-200 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-emerald-50 hover:border-emerald-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Share2 className="w-4 md:w-5 h-4 md:h-5 text-emerald-600" />
          </motion.button>
          
          {/* Share Dropdown */}
          <div className="absolute right-0 top-full mt-2 bg-white rounded-lg shadow-xl border border-slate-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform scale-95 group-hover:scale-100">
            <div className="p-2 space-y-1">
              <button
                onClick={() => handleShare('twitter')}
                className="flex items-center gap-2 w-full px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 rounded-md transition-colors"
              >
                <Twitter className="w-4 h-4" />
                Twitter
              </button>
              <button
                onClick={() => handleShare('facebook')}
                className="flex items-center gap-2 w-full px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 rounded-md transition-colors"
              >
                <Facebook className="w-4 h-4" />
                Facebook
              </button>
              <button
                onClick={() => handleShare('linkedin')}
                className="flex items-center gap-2 w-full px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 rounded-md transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating Table of Contents Button (Mobile) */}
      <motion.div
        className="fixed bottom-6 right-4 md:hidden z-50"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <motion.button
          onClick={() => setShowTableOfContents(!showTableOfContents)}
          className="p-3 bg-emerald-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-emerald-700"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </motion.button>
      </motion.div>

      {/* Blog Header Section */}
      <div className="bg-gradient-to-b from-emerald-50 to-white pt-24 pb-12 border-b border-slate-100">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="max-w-4xl mx-auto text-center">
              {/* Category Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 text-sm font-semibold px-4 py-2 rounded-full mb-6 border border-emerald-200"
              >
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                {blogPost.category}
              </motion.div>

              {/* Title */}
              <motion.h1 
                className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {blogPost.title}
              </motion.h1>

              {/* Excerpt */}
              <motion.p 
                className="text-xl text-slate-600 mb-8 leading-relaxed max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                {blogPost.excerpt}
              </motion.p>

              {/* Meta Information */}
              <motion.div 
                className="flex flex-col md:flex-row md:justify-center md:items-center gap-4 text-sm text-slate-500 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-200">
                  <User className="w-4 h-4 text-emerald-600" />
                  <span className="font-medium">{blogPost.author}</span>
                </div>
                <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-200">
                  <Calendar className="w-4 h-4 text-emerald-600" />
                  {formatDate(blogPost.publishedDate, 'long')}
                </div>
                <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-200">
                  <Clock className="w-4 h-4 text-emerald-600" />
                  {blogPost.readTime}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="w-full bg-white flex justify-center">
        <div className="w-full max-w-4xl px-4 md:px-0 -mt-16 relative z-10">
          <motion.div 
            className="relative overflow-hidden rounded-2xl shadow-2xl border-4 border-white bg-slate-100"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <img
              src={blogPost.image}
              alt={blogPost.title}
              className="w-full h-96 object-cover transition-transform duration-500 hover:scale-105"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = '/images/placeholder.jpg';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
          </motion.div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="prose prose-lg max-w-none"
          >
            {/* Blog Content */}
            <div className="text-lg leading-relaxed text-slate-700 prose prose-lg max-w-none prose-headings:text-slate-900 prose-p:text-slate-700 prose-strong:text-slate-900 prose-ul:text-slate-700 prose-ol:text-slate-700 prose-blockquote:border-l-emerald-500 prose-blockquote:bg-emerald-50 prose-blockquote:py-2 prose-blockquote:px-4 prose-code:bg-slate-100 prose-code:text-slate-800 prose-pre:bg-slate-900 prose-pre:text-slate-100 prose-img:rounded-lg prose-img:shadow-lg">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  h1: ({ children }) => <h1 className="text-3xl font-bold text-slate-900 mb-6 mt-8">{children}</h1>,
                  h2: ({ children }) => <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-6">{children}</h2>,
                  h3: ({ children }) => <h3 className="text-xl font-bold text-slate-900 mb-3 mt-5">{children}</h3>,
                  p: ({ children }) => <p className="mb-4 leading-relaxed">{children}</p>,
                  ul: ({ children }) => <ul className="list-disc list-inside mb-4 space-y-2">{children}</ul>,
                  ol: ({ children }) => <ol className="list-decimal list-inside mb-4 space-y-2">{children}</ol>,
                  li: ({ children }) => <li className="ml-4">{children}</li>,
                  blockquote: ({ children }) => (
                    <blockquote className="border-l-4 border-emerald-500 bg-emerald-50 p-4 my-6 rounded-r-lg">
                      {children}
                    </blockquote>
                  ),
                  code: ({ children, className, node, ...props }) => {
                    const match = /language-(\w+)/.exec(className || '')
                    return !match ? (
                      <code className="bg-slate-100 text-slate-800 px-1 py-0.5 rounded text-sm font-mono" {...props}>
                        {children}
                      </code>
                    ) : (
                      <SyntaxHighlighter
                        language={match[1]}
                        style={tomorrow}
                        className="rounded-lg my-4"
                        customStyle={{
                          margin: 0,
                          borderRadius: '0.5rem',
                          fontSize: '0.875rem',
                          lineHeight: '1.5',
                        }}
                      >
                        {String(children).replace(/\n$/, '')}
                      </SyntaxHighlighter>
                    )
                  },
                  img: ({ src, alt }) => (
                    <div className="my-6">
                      <img 
                        src={src || '/images/placeholder.jpg'} 
                        alt={alt || ''} 
                        className="w-full h-auto rounded-lg shadow-lg"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = '/images/placeholder.jpg';
                        }}
                      />
                      {alt && <p className="text-sm text-slate-500 text-center mt-2">{alt}</p>}
                    </div>
                  ),
                  a: ({ href, children }) => (
                    <a href={href} className="text-emerald-600 hover:text-emerald-700 underline" target="_blank" rel="noopener noreferrer">
                      {children}
                    </a>
                  ),
                  strong: ({ children }) => <strong className="font-bold text-slate-900">{children}</strong>,
                  em: ({ children }) => <em className="italic">{children}</em>,
                  hr: () => <hr className="my-8 border-slate-200" />,
                  table: ({ children }) => (
                    <div className="overflow-x-auto my-6">
                      <table className="min-w-full border border-slate-200 rounded-lg">
                        {children}
                      </table>
                    </div>
                  ),
                  thead: ({ children }) => <thead className="bg-slate-50">{children}</thead>,
                  tbody: ({ children }) => <tbody>{children}</tbody>,
                  tr: ({ children }) => <tr className="border-b border-slate-200">{children}</tr>,
                  th: ({ children }) => <th className="px-4 py-3 text-left font-semibold text-slate-900">{children}</th>,
                  td: ({ children }) => <td className="px-4 py-3 text-slate-700">{children}</td>,
                  details: ({ children }) => (
                    <details className="my-4 p-4 border border-slate-200 rounded-lg bg-slate-50">
                      {children}
                    </details>
                  ),
                  summary: ({ children }) => (
                    <summary className="cursor-pointer font-semibold text-slate-900 hover:text-emerald-600 transition-colors">
                      {children}
                    </summary>
                  ),
                }}
              >
                {blogPost.content}
              </ReactMarkdown>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
} 