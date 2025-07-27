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
  console.log('Extracting image from property:', JSON.stringify(property, null, 2))
  
  if (!property) {
    console.log('No image property found, using placeholder')
    return '/images/placeholder.jpg'
  }
  
  if (property.type !== 'files') {
    console.log(`Property type is ${property.type}, not files, using placeholder`)
    return '/images/placeholder.jpg'
  }
  
  if (!property.files || property.files.length === 0) {
    console.log('No files in property, using placeholder')
    return '/images/placeholder.jpg'
  }
  
  const file = property.files[0]
  console.log('File object:', JSON.stringify(file, null, 2))
  
  if (file.type === 'file' && file.file) {
    console.log('Extracted image URL:', file.file.url)
    return file.file.url
  }
  
  if (file.type === 'external' && file.external) {
    console.log('Extracted external image URL:', file.external.url)
    return file.external.url
  }
  
  console.log('File type or structure not as expected, using placeholder')
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
    
    // First, let's get ALL posts to see what's available
    const allResponse = await notion.databases.query({
      database_id: databaseId,
      sorts: [
        {
          property: 'Published Date',
          direction: 'descending'
        }
      ]
    })
    
    console.log(`Total posts in database: ${allResponse.results.length}`)
    
    // Log all posts and their status
    allResponse.results.forEach((page: any, index: number) => {
      const properties = page.properties
      const status = properties['Status']?.select?.name || 'No Status'
      const title = extractText(properties['Page Name'])
      console.log(`Post ${index + 1}: "${title}" - Status: "${status}"`)
    })
    
    // Now filter for published posts (temporarily get all posts to debug)
    const response = await notion.databases.query({
      database_id: databaseId,
      // Temporarily removing filter to see all posts
      // filter: {
      //   property: 'Status',
      //   select: {
      //     equals: 'Published'
      //   }
      // },
      sorts: [
        {
          property: 'Published Date',
          direction: 'descending'
        }
      ]
    })

    console.log(`Found ${response.results.length} published blog posts`)

    return response.results.map((page: any) => {
      const properties = page.properties
      
      console.log(`\nProcessing post: ${page.id}`)
      console.log('Available properties:', Object.keys(properties))
      
      const title = extractText(properties['Page Name'])
      const image = extractImageUrl(properties['Image'])
      
      const blogPost = {
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
      
      console.log('Mapped blog post:', {
        title: blogPost.title,
        slug: blogPost.slug,
        status: blogPost.status,
        image: blogPost.image,
        author: blogPost.author,
        category: blogPost.category
      })
      
      return blogPost
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