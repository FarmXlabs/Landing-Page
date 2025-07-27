'use client'

import { motion } from 'framer-motion'
import { Calendar, User, Clock, ArrowLeft, Share2 } from 'lucide-react'
import Link from 'next/link'
import { BlogPost } from '@/lib/notion'

interface BlogPostClientWrapperProps {
  blogPost: BlogPost
}

export default function BlogPostClientWrapper({ blogPost }: BlogPostClientWrapperProps) {
  return (
    <>
      {/* Blog Header Section */}
      <div className="bg-gradient-to-b from-emerald-50 to-white pt-24 pb-12 border-b border-slate-100">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Back Button - Improved Design */}
            <div className="flex items-center mb-6">
              <Link href="/blog">
                <motion.div 
                  className="group relative inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-full shadow-sm hover:shadow-md transition-all duration-300 hover:bg-emerald-50 hover:border-emerald-200"
                  whileHover={{ scale: 1.05, x: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="relative">
                    <ArrowLeft className="w-4 h-4 text-emerald-600 group-hover:text-emerald-700 transition-colors" />
                    <div className="absolute inset-0 bg-emerald-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-0 group-hover:scale-150"></div>
                  </div>
                  <span className="text-sm font-medium text-slate-700 group-hover:text-emerald-700 transition-colors">Back to Blog</span>
                </motion.div>
              </Link>
            </div>
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block bg-emerald-100 text-emerald-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
                {blogPost.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                {blogPost.title}
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                {blogPost.excerpt}
              </p>
              <div className="flex flex-col md:flex-row md:justify-center md:items-center gap-4 text-sm text-slate-500 mb-8">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span className="font-medium">{blogPost.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {new Date(blogPost.publishedDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {blogPost.readTime}
                </div>
                <button className="flex items-center gap-2 text-slate-500 hover:text-emerald-600 transition-colors ml-0 md:ml-4">
                  <Share2 className="w-4 h-4" />
                  Share
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      {/* Featured Image */}
      <div className="w-full bg-white flex justify-center">
        <div className="w-full max-w-4xl px-4 md:px-0 -mt-16 relative z-10">
          <img
            src={blogPost.image}
            alt={blogPost.title}
            className="w-full h-96 object-cover rounded-2xl shadow-2xl border-4 border-white"
          />
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
            <div 
              className="text-lg leading-relaxed text-slate-700 whitespace-pre-wrap"
            >
              {blogPost.content}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
} 