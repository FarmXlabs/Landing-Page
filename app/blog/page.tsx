import { Calendar, User, Clock, ArrowRight, Leaf, Zap, Globe, TrendingUp } from 'lucide-react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { BlogClientWrapper, BlogArticleWrapper } from '@/components/BlogClientWrapper'
import { getPublishedBlogPosts, BlogPost } from '@/lib/notion'

const getCategoryIcon = (category: string) => {
  switch (category.toLowerCase()) {
    case 'technology':
      return <Zap className="w-5 h-5" />
    case 'sustainability':
      return <Leaf className="w-5 h-5" />
    case 'ai':
      return <TrendingUp className="w-5 h-5" />
    case 'iot':
      return <Globe className="w-5 h-5" />
    default:
      return <ArrowRight className="w-5 h-5" />
  }
}

async function BlogPage() {
  const blogPosts = await getPublishedBlogPosts()

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-emerald-50 via-white to-emerald-100 pt-32 pb-20">
        <div className="container mx-auto px-6">
          <BlogClientWrapper className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6">
              FarmXLabs <span className="gradient-text bg-gradient-to-r from-emerald-600 to-emerald-800 bg-clip-text text-transparent">Blog</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Insights, innovations, and stories from the forefront of agricultural technology
            </p>
          </BlogClientWrapper>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-6">
          {blogPosts.length === 0 ? (
            <BlogClientWrapper className="text-center py-12">
              <h2 className="text-2xl font-semibold text-slate-600 mb-4">No blog posts available</h2>
              <p className="text-slate-500">Check back soon for new content!</p>
            </BlogClientWrapper>
          ) : (
            <BlogClientWrapper delay={0.2} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {blogPosts.map((post, index) => (
                <BlogArticleWrapper
                  key={post.id}
                  delay={index * 0.1}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-100"
                >
                  {/* Blog Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm text-emerald-700 text-sm font-semibold px-3 py-1 rounded-full">
                        {getCategoryIcon(post.category)}
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  {/* Blog Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        <span className="font-medium">{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </div>
                    </div>
                    
                    <Link href={`/blog/${post.slug}`}>
                      <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors cursor-pointer line-clamp-2">
                        {post.title}
                      </h2>
                    </Link>
                    
                    <p className="text-slate-600 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </BlogArticleWrapper>
              ))}
            </BlogClientWrapper>
          )}
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default BlogPage 