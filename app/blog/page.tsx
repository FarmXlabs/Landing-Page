'use client'

import { motion } from 'framer-motion'
import { Calendar, User, Clock, BookOpen, TrendingUp, Lightbulb } from 'lucide-react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

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
    icon: TrendingUp,
    image: "/images/blog-1.jpg",
    slug: "future-of-autonomous-agriculture"
  },
  {
    id: 2,
    title: "Sustainable Farming: A Path to Food Security",
    excerpt: "Exploring innovative farming techniques that ensure food security while preserving our environment for future generations.",
    author: "Dr. Priya Sharma",
    date: "2024-01-10",
    readTime: "7 min read",
    category: "Sustainability",
    icon: Lightbulb,
    image: "/images/blog-2.jpg",
    slug: "sustainable-farming-food-security"
  },
  {
    id: 3,
    title: "Smart Irrigation Systems: Water Conservation in Agriculture",
    excerpt: "How IoT and sensor technology are helping farmers optimize water usage and improve crop yields through intelligent irrigation.",
    author: "Rajesh Kumar",
    date: "2024-01-05",
    readTime: "4 min read",
    category: "Innovation",
    icon: BookOpen,
    image: "/images/blog-3.jpg",
    slug: "smart-irrigation-water-conservation"
  }
]

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-emerald-50">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 text-white pt-32 pb-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              FarmXLabs <span className="gradient-text bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">Blog</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Insights, innovations, and stories from the forefront of agricultural technology.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Blog Posts */}
      <div className="container mx-auto px-6 py-16">
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {blogPosts.map((post, index) => {
            const IconComponent = post.icon
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
                        {new Date(post.date).toLocaleDateString()}
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

      <Footer />
    </div>
  )
}

export default BlogPage 