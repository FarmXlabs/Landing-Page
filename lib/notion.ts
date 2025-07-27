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

// Helper function to extract text from different field types
function extractText(property: any): string {
  if (!property) return ''
  
  // Handle title field
  if (property.type === 'title' && property.title) {
    return property.title[0]?.plain_text || ''
  }
  
  // Handle rich_text field
  if (property.type === 'rich_text' && property.rich_text) {
    return property.rich_text[0]?.plain_text || ''
  }
  
  return ''
}

// Helper function to extract image URL
function extractImageUrl(property: any): string {
  if (!property) {
    return '/images/placeholder.jpg'
  }
  
  if (property.type !== 'files') {
    return '/images/placeholder.jpg'
  }
  
  if (!property.files || property.files.length === 0) {
    return '/images/placeholder.jpg'
  }
  
  const file = property.files[0]
  
  if (file.type === 'file' && file.file) {
    return file.file.url
  }
  
  if (file.type === 'external' && file.external) {
    return file.external.url
  }
  
  return '/images/placeholder.jpg'
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
      sorts: [
        {
          property: 'Published Date',
          direction: 'descending'
        }
      ]
    })
    
    console.log(`Total posts in database: ${response.results.length}`)
    
    // Filter posts in code to handle any Status field variations
    const publishedPosts = response.results.filter((page: any) => {
      const status = page.properties['Status']?.select?.name || ''
      return status.toLowerCase().includes('published')
    })
    
    console.log(`Found ${publishedPosts.length} published blog posts`)

    return publishedPosts.map((page: any) => {
      const properties = page.properties
      
      const title = extractText(properties['Page Name'])
      const image = extractImageUrl(properties['Image'])
      
      return {
        id: page.id,
        title: title,
        slug: properties['Slug']?.rich_text?.[0]?.plain_text || '',
        excerpt: properties['Excerpt']?.rich_text?.[0]?.plain_text || '',
        content: properties['Content']?.rich_text?.[0]?.plain_text || '',
        author: properties['Author']?.rich_text?.[0]?.plain_text || '',
        category: properties['Category']?.select?.name || '',
        publishedDate: properties['Published Date']?.date?.start || '',
        readTime: properties['Read Time']?.rich_text?.[0]?.plain_text || '',
        image: image,
        status: properties['Status']?.select?.name || 'Draft',
        pageName: title
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

    const title = extractText(properties['Page Name'])
    const image = extractImageUrl(properties['Image'])

    return {
      id: page.id,
      title: title,
      slug: properties['Slug']?.rich_text?.[0]?.plain_text || '',
      excerpt: properties['Excerpt']?.rich_text?.[0]?.plain_text || '',
      content: properties['Content']?.rich_text?.[0]?.plain_text || '',
      author: properties['Author']?.rich_text?.[0]?.plain_text || '',
      category: properties['Category']?.select?.name || '',
      publishedDate: properties['Published Date']?.date?.start || '',
      readTime: properties['Read Time']?.rich_text?.[0]?.plain_text || '',
      image: image,
      status: properties['Status']?.select?.name || 'Draft',
      pageName: title
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