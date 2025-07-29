
import React from 'react'
import './globals.css'

import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Code Salley | Full-Stack Developer',
  description:
    'I design and build modern web and mobile applications using React, Rails, and Go.',
  keywords:
    'Code Salley, full-stack developer, React, Ruby on Rails, Go, mobile apps, portfolio, software engineer',
  authors: [{ name: 'Code Salley', url: 'https://codesalley.dev' }],
  creator: 'Code Salley',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Code Salley | Full-Stack Developer',
    description:
      'Explore projects and applications crafted by Code Salley using modern technologies.',
    url: 'https://codesalley.dev',
    siteName: 'Code Salley Portfolio',
    images: [
      {
        url: 'https://codesalley.dev/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Code Salley Portfolio Screenshot',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Code Salley | Full-Stack Developer',
    description:
      'I build delightful full-stack apps with React, Rails, and Go.',
    images: ['https://codesalley.dev/og-image.jpg'],
    creator: '@codesalley',
  },
  metadataBase: new URL('https://codesalley.dev'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-slate-900 text-slate-300 antialiased'>{children}</body>
    </html>
  )
}