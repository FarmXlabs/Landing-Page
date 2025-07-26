'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Calendar, User, Clock } from 'lucide-react'
import Link from 'next/link'

// Sample blog data - this would come from your CMS
const blogPosts = [
  {
    id: 1,
    title: "The Future of Autonomous Agriculture in India",
    excerpt: "Discover how AI and robotics are revolutionizing farming practices across India, from precision agriculture to sustainable crop management.",
    author: "FarmXLabs Team",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Technology",
    image: "/images/blog-1.jpg"
  },
  {
    id: 2,
    title: "Sustainable Farming: A Path to Food Security",
    excerpt: "Exploring innovative farming techniques that ensure food security while preserving our environment for future generations.",
    author: "Dr. Priya Sharma",
    date: "2024-01-10",
    readTime: "7 min read",
    category: "Sustainability",
    image: "/images/blog-2.jpg"
  },
  {
    id: 3,
    title: "Smart Irrigation Systems: Water Conservation in Agriculture",
    excerpt: "How IoT and sensor technology are helping farmers optimize water usage and improve crop yields through intelligent irrigation.",
    author: "Rajesh Kumar",
    date: "2024-01-05",
    readTime: "4 min read",
    category: "Innovation",
    image: "/images/blog-3.jpg"
  }
]

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-emerald-50">
      {/* Header */}
      <div className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-6">
          <Link href="/" className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            FarmXLabs <span className="gradient-text">Blog</span>
          </motion.h1>
          <motion.p 
            className="text-xl text-slate-300 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Insights, innovations, and stories from the forefront of agricultural technology.
          </motion.p>
        </div>
      </div>

      {/* Blog Posts */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Blog Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-emerald-100 to-emerald-200 flex items-center justify-center">
                <div className="text-emerald-600 text-center">
                  <div className="text-4xl mb-2">📸</div>
                  <div className="text-sm">Blog Image</div>
                </div>
              </div>

              {/* Blog Content */}
              <div className="p-6">
                {/* Category */}
                <span className="inline-block bg-emerald-100 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  {post.category}
                </span>

                {/* Title */}
                <h2 className="text-xl font-bold text-slate-900 mb-3 hover:text-emerald-600 transition-colors cursor-pointer">
                  {post.title}
                </h2>

                {/* Excerpt */}
                <p className="text-slate-600 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Meta Information */}
                <div className="flex items-center justify-between text-sm text-slate-500">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </div>
                </div>

                {/* Read More Button */}
                <button className="mt-4 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors">
                  Read More →
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <motion.div 
          className="mt-16 bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-2xl p-8 text-center text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
          <p className="text-emerald-100 mb-6 max-w-md mx-auto">
            Get the latest insights on agricultural technology and innovation delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-slate-900 outline-none"
            />
            <button className="bg-white text-emerald-600 font-semibold px-6 py-3 rounded-lg hover:bg-emerald-50 transition-colors">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default BlogPage 