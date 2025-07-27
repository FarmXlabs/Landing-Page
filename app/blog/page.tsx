import { getBlogPosts } from '@/lib/notion'
import BlogClientWrapper from '@/components/BlogClientWrapper'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

// Force revalidation every 60 seconds
export const revalidate = 60

// Force dynamic rendering
export const dynamic = 'force-dynamic'

export default async function BlogPage() {
  const blogPosts = await getBlogPosts()

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-emerald-50">
      <Header />
      
      {/* Blog Posts */}
      <BlogClientWrapper blogPosts={blogPosts} />

      <Footer />
    </div>
  )
} 