'use client'

import { motion } from 'framer-motion'
import { Calendar, User, Clock, BookOpen, TrendingUp, Lightbulb } from 'lucide-react'
import Link from 'next/link'
import { BlogPost } from '@/lib/notion'
import { formatDate } from '@/lib/utils'

// Icon mapping for categories
const categoryIcons: { [key: string]: any } = {
  'Technology': TrendingUp,
  'Innovation': Lightbulb,
  'Sustainability': BookOpen,
  'default': BookOpen
}

interface BlogClientWrapperProps {
  blogPosts: BlogPost[]
}

export default function BlogClientWrapper({ blogPosts }: BlogClientWrapperProps) {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-emerald-50 to-white pt-20 pb-8">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            {/* Main Content */}
            <div className="relative z-10">
              {/* Title and Latest Insights */}
              <div className="flex flex-col items-center gap-3 mb-6">
                <motion.h1 
                  className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  Our{' '}
                  <span className="bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent">
                    Blog
                  </span>
                </motion.h1>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 text-xs font-semibold px-4 py-2 rounded-full border border-emerald-200"
                >
                  <span className="text-emerald-600">📚</span>
                  Latest Insights
                </motion.div>
              </div>
              
              <motion.p 
                className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Discover the latest insights, innovations, and stories from the world of{' '}
                <span className="font-semibold text-emerald-600">agricultural technology</span>
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="container mx-auto px-6 py-6">
        {blogPosts.length > 0 ? (
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {blogPosts.map((post, index) => {
              const IconComponent = categoryIcons[post.category] || categoryIcons.default
              return (
                <motion.article
                  key={post.id}
                  className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-100"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {/* Blog Header Image */}
                  <div className="h-44 w-full overflow-hidden relative bg-slate-100">
                    <img
                      src={post.image || '/images/placeholder.jpg'}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = '/images/placeholder.jpg';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  {/* Blog Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="inline-block bg-emerald-100 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                      <IconComponent className="w-5 h-5 text-emerald-600 group-hover:scale-110 transition-transform" />
                    </div>
                    
                    {/* Clickable Title */}
                    <Link href={`/blog/${post.slug}`}>
                      <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors cursor-pointer line-clamp-2">
                        {post.title}
                      </h2>
                    </Link>

                    {/* Excerpt */}
                    <p className="text-slate-600 leading-relaxed line-clamp-3 mb-6">
                      {post.excerpt}
                    </p>

                    {/* Meta Information */}
                    <div className="flex items-center justify-between text-sm text-slate-500">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          <span className="font-medium">{post.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {formatDate(post.publishedDate)}
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </div>
                    </div>
                  </div>
                </motion.article>
              )
            })}
          </motion.div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">📝</div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">No Blog Posts Yet</h3>
            <p className="text-slate-600">Check back soon for exciting content about agricultural technology!</p>
          </div>
        )}

        {/* Newsletter Signup */}
        <motion.div 
          className="mt-16 bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-2xl p-8 text-center text-white shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">Stay Updated</h3>
            <p className="text-emerald-100 mb-8 text-lg">
              Get the latest insights on agricultural technology and innovation delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-lg text-slate-900 outline-none text-lg"
              />
              <button className="bg-white text-emerald-600 font-semibold px-8 py-4 rounded-lg hover:bg-emerald-50 transition-colors text-lg">
                Subscribe
              </button>
            </div>
            <p className="text-emerald-200 text-sm mt-4">No spam. Unsubscribe anytime.</p>
          </div>
        </motion.div>
      </div>
    </>
  )
} 