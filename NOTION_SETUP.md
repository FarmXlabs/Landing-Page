# Notion API Setup Guide

## Prerequisites

1. **Notion Account**: You need a Notion account
2. **Notion Integration**: Create a new integration in Notion
3. **Database**: Create a database in Notion with the required properties

## Step 1: Create Notion Integration

1. Go to [https://www.notion.so/my-integrations](https://www.notion.so/my-integrations)
2. Click "New integration"
3. Give it a name (e.g., "FarmXLabs Blog")
4. Select the workspace where your database is located
5. Click "Submit"
6. Copy the **Internal Integration Token** (this is your `NOTION_API_KEY`)

## Step 2: Create Notion Database

Create a new database in Notion with the following properties:

### Required Properties:
- **Page name** (Title) - The title of your blog post
- **Author** (Text) - Author name
- **Category** (Select) - Blog category (Technology, AI, Sustainability, etc.)
- **Published Date** (Date) - Publication date
- **Read Time** (Text) - Reading time (e.g., "5 min read")
- **Status** (Select) - Post status (Draft, Final Draft, Published)
- **Slug** (Text) - URL slug for the blog post
- **Excerpt** (Text) - Short description/excerpt
- **Content** (Text) - Full blog post content
- **Image** (Files & media) - Header image for the blog post
- **Tags** (Multi-select) - Tags for the blog post

### Optional Properties:
- **SEO Title** (Text) - SEO optimized title
- **SEO Description** (Text) - Meta description
- **Featured** (Checkbox) - Mark as featured post

## Step 3: Share Database with Integration

1. Open your database in Notion
2. Click the "Share" button in the top right
3. Click "Invite" and search for your integration name
4. Select your integration and click "Invite"
5. Copy the **Database ID** from the URL (it's the part after the workspace name and before the question mark)

## Step 4: Environment Variables

Create a `.env.local` file in your project root with:

```env
# Notion API Configuration
NOTION_API_KEY=your_notion_api_key_here
NOTION_DATABASE_ID=your_notion_database_id_here

# Next.js Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## Step 5: Vercel Deployment

For Vercel deployment, add these environment variables in your Vercel project settings:

1. Go to your Vercel project dashboard
2. Navigate to Settings > Environment Variables
3. Add:
   - `NOTION_API_KEY` = your_notion_api_key_here
   - `NOTION_DATABASE_ID` = your_notion_database_id_here
   - `NEXT_PUBLIC_SITE_URL` = your_vercel_domain_here

## Step 6: Create Blog Posts

1. In your Notion database, create a new page
2. Fill in all the required properties
3. Set **Status** to "Published" to make it live on your website
4. The post will automatically appear on your blog

## Database Structure Example

```
Page name: "The Future of Autonomous Agriculture"
Author: "FarmXLabs Team"
Category: "Technology"
Published Date: 2024-01-15
Read Time: "5 min read"
Status: "Published"
Slug: "future-autonomous-agriculture"
Excerpt: "Discover how AI and robotics are revolutionizing farming..."
Content: "The agricultural landscape in India is undergoing..."
Image: [Upload your header image]
Tags: ["Agriculture", "Technology", "AI"]
```

## Troubleshooting

### Common Issues:

1. **"Database not found"**: Make sure you've shared the database with your integration
2. **"Invalid API key"**: Check that your API key is correct and not expired
3. **"No posts showing"**: Ensure posts have "Published" status
4. **"Images not loading"**: Make sure images are uploaded to Notion (not external links)

### Testing:

1. Run `npm run dev` to test locally
2. Check the browser console for any errors
3. Verify your environment variables are loaded correctly

## Security Notes

- Never commit your `.env.local` file to git
- Keep your Notion API key secure
- Consider using different API keys for development and production 