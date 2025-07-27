import { Client } from '@notionhq/client'

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
})

const databaseId = process.env.NOTION_DATABASE_ID!

export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  author: string
  category: string
  publishedDate: string
  readTime: string
  image: string
  status: 'Published' | 'Draft'
  pageName: string
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    // Check if environment variables are set
    if (!process.env.NOTION_API_KEY) {
      console.error('NOTION_API_KEY is not set')
      return []
    }
    
    if (!process.env.NOTION_DATABASE_ID) {
      console.error('NOTION_DATABASE_ID is not set')
      return []
    }

    console.log('Fetching blog posts from Notion...')
    
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

    console.log(`Found ${response.results.length} blog posts`)

    return response.results.map((page: any) => {
      const properties = page.properties
      
      return {
        id: page.id,
        title: properties['Page Name']?.title?.[0]?.plain_text || '',
        slug: properties['Slug']?.rich_text?.[0]?.plain_text || '',
        excerpt: properties['Excerpt']?.rich_text?.[0]?.plain_text || '',
        content: properties['Content']?.rich_text?.[0]?.plain_text || '',
        author: properties['Author']?.rich_text?.[0]?.plain_text || '',
        category: properties['Category']?.select?.name || '',
        publishedDate: properties['Published Date']?.date?.start || '',
        readTime: properties['Read Time']?.rich_text?.[0]?.plain_text || '',
        image: properties['Image']?.files?.[0]?.file?.url || '/images/placeholder.jpg',
        status: properties['Status']?.select?.name || 'Draft',
        pageName: properties['Page Name']?.title?.[0]?.plain_text || ''
      }
    })
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    if (error instanceof Error) {
      console.error('Error details:', error.message)
    }
    return []
  }
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    // Check if environment variables are set
    if (!process.env.NOTION_API_KEY) {
      console.error('NOTION_API_KEY is not set')
      return null
    }
    
    if (!process.env.NOTION_DATABASE_ID) {
      console.error('NOTION_DATABASE_ID is not set')
      return null
    }

    console.log(`Fetching blog post with slug: ${slug}`)
    
    const response = await notion.databases.query({
      database_id: databaseId,
      filter: {
        and: [
          {
            property: 'Slug',
            rich_text: {
              equals: slug
            }
          },
          {
            property: 'Status',
            select: {
              equals: 'Published'
            }
          }
        ]
      }
    })

    if (response.results.length === 0) {
      console.log(`No blog post found with slug: ${slug}`)
      return null
    }

    const page = response.results[0] as any
    const properties = page.properties

    return {
      id: page.id,
      title: properties['Page Name']?.title?.[0]?.plain_text || '',
      slug: properties['Slug']?.rich_text?.[0]?.plain_text || '',
      excerpt: properties['Excerpt']?.rich_text?.[0]?.plain_text || '',
      content: properties['Content']?.rich_text?.[0]?.plain_text || '',
      author: properties['Author']?.rich_text?.[0]?.plain_text || '',
      category: properties['Category']?.select?.name || '',
      publishedDate: properties['Published Date']?.date?.start || '',
      readTime: properties['Read Time']?.rich_text?.[0]?.plain_text || '',
      image: properties['Image']?.files?.[0]?.file?.url || '/images/placeholder.jpg',
      status: properties['Status']?.select?.name || 'Draft',
      pageName: properties['Page Name']?.title?.[0]?.plain_text || ''
    }
  } catch (error) {
    console.error('Error fetching blog post:', error)
    if (error instanceof Error) {
      console.error('Error details:', error.message)
    }
    return null
  }
}

export async function getAllBlogSlugs(): Promise<string[]> {
  try {
    // Check if environment variables are set
    if (!process.env.NOTION_API_KEY) {
      console.error('NOTION_API_KEY is not set')
      return []
    }
    
    if (!process.env.NOTION_DATABASE_ID) {
      console.error('NOTION_DATABASE_ID is not set')
      return []
    }

    const response = await notion.databases.query({
      database_id: databaseId,
      filter: {
        property: 'Status',
        select: {
          equals: 'Published'
        }
      }
    })

    return response.results.map((page: any) => 
      page.properties['Slug']?.rich_text?.[0]?.plain_text || ''
    ).filter(Boolean)
  } catch (error) {
    console.error('Error fetching blog slugs:', error)
    if (error instanceof Error) {
      console.error('Error details:', error.message)
    }
    return []
  }
} 