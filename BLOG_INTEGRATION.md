# Blog Integration Guide

## Overview
The blog section is currently set up with a basic layout and sample data. Here's how to integrate it with a Content Management System (CMS).

## Current Structure
- **Location**: `app/blog/page.tsx`
- **Sample Data**: Hardcoded in the component
- **Layout**: Responsive grid with cards
- **Features**: Categories, author info, read time, dates

## Recommended CMS Options

### 1. **Strapi (Recommended)**
- **Pros**: Self-hosted, flexible, great API
- **Setup**: 
  ```bash
  npx create-strapi-app@latest farmxlabs-cms --quickstart
  ```
- **Integration**: Use Strapi's REST API or GraphQL

### 2. **Sanity.io**
- **Pros**: Real-time collaboration, excellent editing experience
- **Setup**: 
  ```bash
  npm create sanity@latest -- --template clean --create-project "FarmXLabs Blog"
  ```

### 3. **Contentful**
- **Pros**: Enterprise-grade, excellent performance
- **Setup**: Create account at contentful.com

### 4. **Hygraph (GraphCMS)**
- **Pros**: GraphQL-first, great developer experience
- **Setup**: Create account at hygraph.com

## Integration Steps

### Step 1: Set up CMS
1. Choose your preferred CMS
2. Create content models for:
   - Blog Post (title, excerpt, content, author, date, category, image)
   - Author (name, bio, avatar)
   - Category (name, description)

### Step 2: Create API Integration
Create `lib/cms.ts`:
```typescript
// Example with Strapi
export async function getBlogPosts() {
  const res = await fetch(`${process.env.STRAPI_URL}/api/blog-posts?populate=*`)
  const data = await res.json()
  return data.data
}

export async function getBlogPost(slug: string) {
  const res = await fetch(`${process.env.STRAPI_URL}/api/blog-posts?filters[slug][$eq]=${slug}&populate=*`)
  const data = await res.json()
  return data.data[0]
}
```

### Step 3: Update Blog Page
Replace hardcoded data in `app/blog/page.tsx`:
```typescript
import { getBlogPosts } from '@/lib/cms'

export default async function BlogPage() {
  const posts = await getBlogPosts()
  // Use posts data instead of hardcoded blogPosts
}
```

### Step 4: Create Individual Blog Post Page
Create `app/blog/[slug]/page.tsx`:
```typescript
import { getBlogPost } from '@/lib/cms'

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getBlogPost(params.slug)
  // Render individual blog post
}
```

## Environment Variables
Add to `.env.local`:
```env
STRAPI_URL=http://localhost:1337
STRAPI_API_TOKEN=your_api_token
```

## Image Handling
- **Hero Image**: Place `hero.png` in `public/images/`
- **Blog Images**: Store in CMS and serve via CDN
- **Optimization**: Use Next.js Image component for optimization

## SEO Optimization
- Add metadata to blog pages
- Implement Open Graph tags
- Add structured data for blog posts
- Create sitemap for blog posts

## Advanced Features
- **Search**: Implement search functionality
- **Categories**: Add category filtering
- **Pagination**: Handle large numbers of posts
- **Comments**: Integrate with Disqus or similar
- **Related Posts**: Show related content

## Deployment Considerations
- **CMS**: Deploy CMS separately (Vercel, Railway, etc.)
- **Images**: Use CDN for image optimization
- **Caching**: Implement proper caching strategies
- **Performance**: Optimize API calls and image loading

## Example CMS Schema (Strapi)
```json
{
  "blog-post": {
    "title": "string",
    "slug": "string",
    "excerpt": "text",
    "content": "richtext",
    "author": "relation",
    "category": "relation",
    "featuredImage": "media",
    "publishedAt": "datetime",
    "readTime": "integer"
  }
}
```

## Next Steps
1. Choose and set up your preferred CMS
2. Create content models
3. Implement API integration
4. Update blog components
5. Add SEO optimization
6. Test and deploy

## Support
For specific CMS integration help, refer to their official documentation or contact the development team. 