import { NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'

export async function POST() {
  try {
    // Revalidate the blog pages
    revalidatePath('/blog')
    revalidatePath('/blog/[slug]')
    
    return NextResponse.json({ 
      success: true, 
      message: 'Cache refreshed successfully' 
    })
  } catch (error) {
    console.error('Error refreshing cache:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to refresh cache' },
      { status: 500 }
    )
  }
} 