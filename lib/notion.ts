import { Client } from '@notionhq/client'

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
})

const databaseId = process.env.NOTION_DATABASE_ID!

export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  readTime: string
  category: string
  image: string
  slug: string
  status: string
  tags: string[]
}

export async function getPublishedBlogPosts(): Promise<BlogPost[]> {
  try {
    const response = await notion.databases.query({
      database_id: databaseId,
      filter: {
        property: 'Status',
        select: {
          equals: 'Published'
        }
      },
      sorts: [
        {
          property: 'Published Date',
          direction: 'descending'
        }
      ]
    })

    return response.results.map((page: any) => {
      const properties = page.properties
      
      return {
        id: page.id,
        title: properties['Page name']?.title?.[0]?.plain_text || '',
        excerpt: properties['Excerpt']?.rich_text?.[0]?.plain_text || '',
        content: properties['Content']?.rich_text?.[0]?.plain_text || '',
        author: properties['Author']?.rich_text?.[0]?.plain_text || '',
        date: properties['Published Date']?.date?.start || '',
        readTime: properties['Read Time']?.rich_text?.[0]?.plain_text || '5 min read',
        category: properties['Category']?.select?.name || 'General',
        image: properties['Image']?.files?.[0]?.file?.url || '/images/default-blog.jpg',
        slug: properties['Slug']?.rich_text?.[0]?.plain_text || '',
        status: properties['Status']?.select?.name || 'Draft',
        tags: properties['Tags']?.multi_select?.map((tag: any) => tag.name) || []
      }
    })
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return []
  }
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const response = await notion.databases.query({
      database_id: databaseId,
      filter: {
        and: [
          {
            property: 'Status',
            select: {
              equals: 'Published'
            }
          },
          {
            property: 'Slug',
            rich_text: {
              equals: slug
            }
          }
        ]
      }
    })

    if (response.results.length === 0) {
      return null
    }

    const page = response.results[0] as any
    const properties = page.properties

    return {
      id: page.id,
      title: properties['Page name']?.title?.[0]?.plain_text || '',
      excerpt: properties['Excerpt']?.rich_text?.[0]?.plain_text || '',
      content: properties['Content']?.rich_text?.[0]?.plain_text || '',
      author: properties['Author']?.rich_text?.[0]?.plain_text || '',
      date: properties['Published Date']?.date?.start || '',
      readTime: properties['Read Time']?.rich_text?.[0]?.plain_text || '5 min read',
      category: properties['Category']?.select?.name || 'General',
      image: properties['Image']?.files?.[0]?.file?.url || '/images/default-blog.jpg',
      slug: properties['Slug']?.rich_text?.[0]?.plain_text || '',
      status: properties['Status']?.select?.name || 'Draft',
      tags: properties['Tags']?.multi_select?.map((tag: any) => tag.name) || []
    }
  } catch (error) {
    console.error('Error fetching blog post:', error)
    return null
  }
}

export async function getAllBlogSlugs(): Promise<string[]> {
  try {
    const response = await notion.databases.query({
      database_id: databaseId,
      filter: {
        property: 'Status',
        select: {
          equals: 'Published'
        }
      }
    })

    return response.results
      .map((page: any) => page.properties['Slug']?.rich_text?.[0]?.plain_text)
      .filter(Boolean)
  } catch (error) {
    console.error('Error fetching blog slugs:', error)
    return []
  }
} 