'use client'

import { motion } from 'framer-motion'
import { Calendar, User, Clock, BookOpen, TrendingUp, Lightbulb } from 'lucide-react'
import Link from 'next/link'
import { BlogPost } from '@/lib/notion'

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
    <div className="container mx-auto px-6 py-16">
      {blogPosts.length > 0 ? (
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
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
                <div className="h-44 w-full bg-gradient-to-br from-emerald-100 to-emerald-200 flex items-center justify-center overflow-hidden">
                  <img
                    src={post.image || '/images/placeholder.jpg'}
                    alt={post.title}
                    className="object-cover w-full h-full"
                  />
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
                        {new Date(post.publishedDate).toLocaleDateString()}
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
  )
} 