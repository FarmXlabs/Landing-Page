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
    console.log('No image property found, using placeholder')
    return '/images/placeholder.jpg'
  }
  
  if (property.type !== 'files') {
    console.log('Property is not files type, using placeholder')
    return '/images/placeholder.jpg'
  }
  
  if (!property.files || property.files.length === 0) {
    console.log('No files in property, using placeholder')
    return '/images/placeholder.jpg'
  }
  
  const file = property.files[0]
  console.log('File object:', file)
  
  if (file.type === 'file' && file.file) {
    const imageUrl = file.file.url
    console.log('Extracted image URL:', imageUrl)
    
    // Check if URL is expired (contains expiry_time)
    if (imageUrl.includes('X-Amz-Expires=')) {
      console.log('Image URL contains expiry parameters, may be expired')
      // For now, still return the URL and let the frontend handle the error
      return imageUrl
    }
    
    return imageUrl
  }
  
  if (file.type === 'external' && file.external) {
    const imageUrl = file.external.url
    console.log('Extracted external image URL:', imageUrl)
    return imageUrl
  }
  
  console.log('No valid file found, using placeholder')
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
    
    // Fetch the actual page content from Notion blocks
    const pageContent = await getPageContent(page.id)

    return {
      id: page.id,
      title: title,
      slug: properties['Slug']?.rich_text?.[0]?.plain_text || '',
      excerpt: properties['Excerpt']?.rich_text?.[0]?.plain_text || '',
      content: pageContent || properties['Content']?.rich_text?.[0]?.plain_text || '',
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

// Helper function to fetch page content from Notion
async function getPageContent(pageId: string): Promise<string> {
  try {
    const response = await notion.blocks.children.list({
      block_id: pageId,
    })
    
    // Convert blocks to markdown content with proper formatting
    let content = ''
    for (const block of response.results as any[]) {
      if (block.type === 'paragraph' && block.paragraph) {
        const text = formatRichText(block.paragraph.rich_text)
        content += text + '\n\n'
      } else if (block.type === 'heading_1' && block.heading_1) {
        const text = formatRichText(block.heading_1.rich_text)
        content += `# ${text}\n\n`
      } else if (block.type === 'heading_2' && block.heading_2) {
        const text = formatRichText(block.heading_2.rich_text)
        content += `## ${text}\n\n`
      } else if (block.type === 'heading_3' && block.heading_3) {
        const text = formatRichText(block.heading_3.rich_text)
        content += `### ${text}\n\n`
      } else if (block.type === 'bulleted_list_item' && block.bulleted_list_item) {
        const text = formatRichText(block.bulleted_list_item.rich_text)
        content += `- ${text}\n`
      } else if (block.type === 'numbered_list_item' && block.numbered_list_item) {
        const text = formatRichText(block.numbered_list_item.rich_text)
        content += `1. ${text}\n`
      } else if (block.type === 'quote' && block.quote) {
        const text = formatRichText(block.quote.rich_text)
        content += `> ${text}\n\n`
      } else if (block.type === 'code' && block.code) {
        const text = formatRichText(block.code.rich_text)
        const language = block.code.language || ''
        content += `\`\`\`${language}\n${text}\n\`\`\`\n\n`
      } else if (block.type === 'image' && block.image) {
        const imageUrl = block.image.type === 'file' ? block.image.file.url : block.image.external.url
        const caption = block.image.caption ? formatRichText(block.image.caption) : ''
        content += `![${caption}](${imageUrl}${caption ? ` "${caption}"` : ''})\n\n`
      } else if (block.type === 'divider') {
        content += `---\n\n`
      } else if (block.type === 'callout' && block.callout) {
        const text = formatRichText(block.callout.rich_text)
        const icon = block.callout.icon?.emoji || '💡'
        content += `> ${icon} ${text}\n\n`
      } else if (block.type === 'toggle' && block.toggle) {
        const text = formatRichText(block.toggle.rich_text)
        content += `<details>\n<summary>${text}</summary>\n\n`
        // Recursively get toggle content
        const toggleResponse = await notion.blocks.children.list({
          block_id: block.id,
        })
        for (const toggleBlock of toggleResponse.results as any[]) {
          if (toggleBlock.type === 'paragraph' && toggleBlock.paragraph) {
            const toggleText = formatRichText(toggleBlock.paragraph.rich_text)
            content += toggleText + '\n\n'
          }
        }
        content += `</details>\n\n`
      }
    }
    
    return content.trim()
  } catch (error) {
    console.error('Error fetching page content:', error)
    return ''
  }
}

// Helper function to format rich text with all Notion formatting
function formatRichText(richText: any[]): string {
  if (!richText || richText.length === 0) return ''
  
  return richText.map((text: any) => {
    let formattedText = text.plain_text
    
    // Apply formatting based on annotations
    if (text.annotations.bold) {
      formattedText = `**${formattedText}**`
    }
    if (text.annotations.italic) {
      formattedText = `*${formattedText}*`
    }
    if (text.annotations.strikethrough) {
      formattedText = `~~${formattedText}~~`
    }
    if (text.annotations.code) {
      formattedText = `\`${formattedText}\``
    }
    if (text.annotations.underline) {
      formattedText = `<u>${formattedText}</u>`
    }
    
    // Handle links
    if (text.href) {
      formattedText = `[${formattedText}](${text.href})`
    }
    
    return formattedText
  }).join('')
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