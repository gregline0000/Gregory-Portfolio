import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Gregory Sarfo Arthur - Computer Science Graduate & Developer',
  description: 'Computer Science graduate, educator, and emerging cybersecurity & UI/UX practitioner. Explore my projects and professional journey.',
  keywords: 'Gregory Sarfo Arthur, Computer Science, Web Development, Cybersecurity, UI/UX, Portfolio',
  authors: [{ name: 'Gregory Sarfo Arthur' }],
  openGraph: {
    title: 'Gregory Sarfo Arthur - Computer Science Graduate & Developer',
    description: 'Computer Science graduate, educator, and emerging cybersecurity & UI/UX practitioner.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gregory Sarfo Arthur - Computer Science Graduate & Developer',
    description: 'Computer Science graduate, educator, and emerging cybersecurity & UI/UX practitioner.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}