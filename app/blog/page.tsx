import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BlogClientWrapper from '@/components/BlogClientWrapper'
import BlogHeroClientWrapper from '@/components/BlogHeroClientWrapper'
import { getBlogPosts } from '@/lib/notion'

export default async function BlogPage() {
  const blogPosts = await getBlogPosts()

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-emerald-50">
      <Header />
      
      {/* Hero Section */}
      <BlogHeroClientWrapper />

      {/* Blog Posts */}
      <BlogClientWrapper blogPosts={blogPosts} />

      <Footer />
    </div>
  )
} 