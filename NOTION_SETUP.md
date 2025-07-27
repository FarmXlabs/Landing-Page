# Notion Blog Integration Setup Guide

## Overview
This guide will help you set up the Notion database integration for the FarmXLabs blog.

## Prerequisites
1. A Notion account
2. A Notion database with the required fields
3. Notion API access

## Step 1: Create Notion Database

Create a new database in Notion with the following properties:

### Required Properties:
- **Page Name** (Title) - The title of the blog post
- **Slug** (Text) - URL-friendly version of the title (e.g., "farmxlabs-sample")
- **Excerpt** (Text) - Short description for the blog listing
- **Content** (Text) - The full blog post content
- **Author** (Text) - Author name
- **Category** (Select) - Blog category (e.g., "Innovation", "Technology", "Sustainability")
- **Published Date** (Date) - Publication date
- **Read Time** (Text) - Reading time (e.g., "2 mins")
- **Image** (Files & Media) - Featured image for the blog post
- **Status** (Select) - Publication status ("Published" or "Draft")

## Step 2: Get Notion API Credentials

1. Go to [https://www.notion.so/my-integrations](https://www.notion.so/my-integrations)
2. Click "New integration"
3. Name your integration (e.g., "FarmXLabs Blog")
4. Select the workspace where your database is located
5. Click "Submit"
6. Copy the "Internal Integration Token"

## Step 3: Share Database with Integration

1. Open your Notion database
2. Click "Share" in the top right
3. Click "Invite"
4. Search for your integration name
5. Select it and click "Invite"

## Step 4: Get Database ID

1. Open your Notion database
2. Copy the URL from your browser
3. The database ID is the part after the workspace name and before the question mark
   - Example: `https://www.notion.so/workspace/1234567890abcdef1234567890abcdef?v=...`
   - Database ID: `1234567890abcdef1234567890abcdef`

## Step 5: Configure Environment Variables

Create a `.env.local` file in your project root with:

```env
NOTION_API_KEY=your_internal_integration_token_here
NOTION_DATABASE_ID=your_database_id_here
```

## Step 6: Test the Integration

1. Add a sample blog post to your Notion database
2. Set the status to "Published"
3. Run your development server: `npm run dev`
4. Visit `/blog` to see your posts

## Sample Blog Post

Based on the image you provided, here's how to structure a blog post:

- **Page Name**: FarmXLabs Sample
- **Slug**: farmxlabs-sample
- **Excerpt**: This will appear in the front page of the blog if you are seeing this then it is an amazing way
- **Content**: Hi There this is the sample content
- **Author**: Magizhan C B
- **Category**: Innovation
- **Published Date**: July 25, 2025
- **Read Time**: 2 mins
- **Image**: Upload your featured image
- **Status**: Published

## Troubleshooting

### Common Issues:

1. **"Database not found" error**
   - Make sure you've shared the database with your integration
   - Verify the database ID is correct

2. **"Unauthorized" error**
   - Check that your API key is correct
   - Ensure the integration has access to the database

3. **No posts showing**
   - Make sure posts have "Published" status
   - Check that all required fields are filled

4. **Images not loading**
   - Ensure images are uploaded to Notion (not external links)
   - Check that the image field is properly configured

## Support

If you encounter any issues, check:
1. Notion API documentation: https://developers.notion.com/
2. Your browser's developer console for error messages
3. The terminal output for server-side errors

## Next Steps

Once the integration is working:
1. Add more blog posts to your Notion database
2. Customize the blog styling as needed
3. Add SEO meta tags
4. Implement search functionality
5. Add pagination for large numbers of posts 