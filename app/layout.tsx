import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'FarmXLabs | The Future of Autonomous Agriculture',
  description: 'The world\'s first truly autonomous agricultural platform. Unlock zero operational cost and maximum yield with the power of AI.',
  keywords: 'agriculture, farming, automation, AI, India, smart farming, precision agriculture',
  authors: [{ name: 'FarmXLabs' }],
  openGraph: {
    title: 'FarmXLabs | The Future of Autonomous Agriculture',
    description: 'The world\'s first truly autonomous agricultural platform. Unlock zero operational cost and maximum yield with the power of AI.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FarmXLabs | The Future of Autonomous Agriculture',
    description: 'The world\'s first truly autonomous agricultural platform. Unlock zero operational cost and maximum yield with the power of AI.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-white text-slate-900">
        {children}
      </body>
    </html>
  )
} 