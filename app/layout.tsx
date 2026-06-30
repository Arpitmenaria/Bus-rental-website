import type { Metadata } from 'next'
import './globals.css'
import { SITE } from '@/lib/site'

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — ${SITE.tagline}`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: ['luxury bus tour India', 'Rajasthan tour operator', 'private bus hire Udaipur'],
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: SITE.name,
    url: SITE.url,
  },
  twitter: {
    card: 'summary_large_image',
    site: '@shivshaktitourist', // TODO: update with real Twitter/X handle
  },
  icons: {
    icon: '/favicon.ico',
    // TODO: Add apple-touch-icon and other sizes
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
