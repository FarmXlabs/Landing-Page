'use client'

import { motion } from 'framer-motion'
import { Calendar, User, Clock, ArrowLeft, Share2, BookOpen, TrendingUp, Lightbulb } from 'lucide-react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

// Sample blog post data - this would come from your CMS
const blogPost = {
  id: 1,
  title: "The Future of Autonomous Agriculture in India",
  excerpt: "Discover how AI and robotics are revolutionizing farming practices across India, from precision agriculture to sustainable crop management.",
  content: `
    <p class="mb-6 text-lg leading-relaxed text-slate-700">
      The agricultural landscape in India is undergoing a revolutionary transformation, driven by cutting-edge technology and innovative solutions. As the world's largest producer of many agricultural commodities, India's adoption of autonomous farming technologies has the potential to reshape global food production.
    </p>
    
    <h2 class="text-2xl font-bold text-slate-900 mb-4 mt-8">The Current State of Indian Agriculture</h2>
    <p class="mb-6 text-lg leading-relaxed text-slate-700">
      Traditional farming methods have served India for centuries, but the challenges of climate change, labor shortages, and the need for increased productivity are pushing farmers to embrace new technologies. Autonomous agriculture represents the next frontier in farming innovation.
    </p>
    
    <h2 class="text-2xl font-bold text-slate-900 mb-4 mt-8">Key Technologies Driving Change</h2>
    <p class="mb-6 text-lg leading-relaxed text-slate-700">
      From AI-powered crop monitoring to autonomous tractors and drones for precision spraying, the integration of technology is creating a more efficient and sustainable farming ecosystem. These innovations are not just about automation—they're about making farming more intelligent and data-driven.
    </p>
    
    <h2 class="text-2xl font-bold text-slate-900 mb-4 mt-8">The Road Ahead</h2>
    <p class="mb-6 text-lg leading-relaxed text-slate-700">
      As we look to the future, the potential for autonomous agriculture in India is limitless. With the right infrastructure, education, and support, Indian farmers can lead the world in sustainable, technology-driven agriculture.
    </p>
  `,
  author: "FarmXLabs Team",
  date: "2024-01-15",
  readTime: "5 min read",
  category: "Technology",
  image: "/images/blog-1.jpg",
  tags: ["Agriculture", "Technology", "AI", "Innovation"]
}

const BlogPostPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <div className="pt-24 pb-16 bg-gradient-to-br from-slate-50 to-emerald-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/blog" className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
            
            <div className="max-w-4xl mx-auto">
              <span className="inline-block bg-emerald-100 text-emerald-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
                {blogPost.category}
              </span>
              
              <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                {blogPost.title}
              </h1>
              
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                {blogPost.excerpt}
              </p>
              
              <div className="flex items-center justify-between text-sm text-slate-500 mb-8">
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span className="font-medium">{blogPost.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {new Date(blogPost.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {blogPost.readTime}
                  </div>
                </div>
                
                <button className="flex items-center gap-2 text-slate-500 hover:text-emerald-600 transition-colors">
                  <Share2 className="w-4 h-4" />
                  Share
                </button>
              </div>
            </div>
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
            {/* Featured Image */}
            <div className="mb-12 rounded-2xl overflow-hidden shadow-xl">
              <img
                src={blogPost.image}
                alt={blogPost.title}
                className="w-full h-96 object-cover"
              />
            </div>
            
            {/* Blog Content */}
            <div 
              className="text-lg leading-relaxed text-slate-700"
              dangerouslySetInnerHTML={{ __html: blogPost.content }}
            />
            
            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-slate-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Tags:</h3>
              <div className="flex flex-wrap gap-2">
                {blogPost.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm hover:bg-emerald-100 hover:text-emerald-700 transition-colors cursor-pointer"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Related Posts */}
      <div className="bg-slate-50 py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="h-48 bg-gradient-to-br from-emerald-100 to-emerald-200"></div>
                <div className="p-6">
                  <span className="inline-block bg-emerald-100 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                    Sustainability
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Sustainable Farming: A Path to Food Security</h3>
                  <p className="text-slate-600 text-sm mb-4">Exploring innovative farming techniques that ensure food security...</p>
                  <Link href="/blog/sustainable-farming" className="text-emerald-600 font-semibold hover:text-emerald-700 transition-colors">
                    Read More →
                  </Link>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="h-48 bg-gradient-to-br from-emerald-100 to-emerald-200"></div>
                <div className="p-6">
                  <span className="inline-block bg-emerald-100 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                    Innovation
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Smart Irrigation Systems: Water Conservation</h3>
                  <p className="text-slate-600 text-sm mb-4">How IoT and sensor technology are helping farmers optimize...</p>
                  <Link href="/blog/smart-irrigation" className="text-emerald-600 font-semibold hover:text-emerald-700 transition-colors">
                    Read More →
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default BlogPostPage 