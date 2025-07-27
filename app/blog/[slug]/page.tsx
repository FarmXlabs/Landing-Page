import { notFound } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BlogPostClientWrapper from '@/components/BlogPostClientWrapper'
import { getBlogPost, getAllBlogSlugs } from '@/lib/notion'

// Generate static params for all blog posts
export async function generateStaticParams() {
  const slugs = await getAllBlogSlugs()
  return slugs.map((slug) => ({
    slug: slug,
  }))
}

interface BlogPostPageProps {
  params: { slug: string }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const blogPost = await getBlogPost(params.slug)

  if (!blogPost) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <BlogPostClientWrapper blogPost={blogPost} />
      <Footer />
    </div>
  )
} 