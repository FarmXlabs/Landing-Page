import { Calendar, User, Clock, ArrowLeft, Share2 } from 'lucide-react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { BlogClientWrapper, BlogContentWrapper } from '@/components/BlogClientWrapper'
import { getBlogPostBySlug, getAllBlogSlugs } from '@/lib/notion'

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const slugs = await getAllBlogSlugs()
  return slugs.map((slug) => ({
    slug: slug,
  }))
}

async function BlogPostPage({ params }: BlogPostPageProps) {
  const blogPost = await getBlogPostBySlug(params.slug)

  if (!blogPost) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Back Button */}
      <div className="pt-24 pb-6">
        <div className="container mx-auto px-6">
          <Link href="/blog" className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-slate-200 hover:bg-emerald-100 transition-colors shadow-md">
            <ArrowLeft className="w-6 h-6 text-emerald-700" />
          </Link>
        </div>
      </div>

      {/* Featured Image */}
      <div className="w-full bg-white">
        <div className="container mx-auto px-6">
          <img
            src={blogPost.image}
            alt={blogPost.title}
            className="w-full h-96 object-cover rounded-2xl shadow-2xl"
          />
        </div>
      </div>

      {/* Blog Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl">
          <BlogClientWrapper>
            {/* Blog Header */}
            <div className="mb-8">
              <span className="inline-block bg-emerald-100 text-emerald-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
                {blogPost.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                {blogPost.title}
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                {blogPost.excerpt}
              </p>
              <div className="flex flex-col md:flex-row md:items-center gap-4 text-sm text-slate-500 mb-8">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span className="font-medium">{blogPost.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {new Date(blogPost.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {blogPost.readTime}
                </div>
                <button className="flex items-center gap-2 text-slate-500 hover:text-emerald-600 transition-colors">
                  <Share2 className="w-4 h-4" />
                  Share
                </button>
              </div>
            </div>

            {/* Blog Content */}
            <BlogContentWrapper delay={0.2} className="prose prose-lg max-w-none">
              <div 
                className="text-lg leading-relaxed text-slate-700 whitespace-pre-wrap"
              >
                {blogPost.content}
              </div>
              
              {/* Tags */}
              {blogPost.tags.length > 0 && (
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
              )}
            </BlogContentWrapper>
          </BlogClientWrapper>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default BlogPostPage 