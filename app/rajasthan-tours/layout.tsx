import type { Metadata } from 'next'
import { SITE } from '@/lib/site'

const PAGE_URL = `${SITE.url}/rajasthan-tours`

export const metadata: Metadata = {
  title: 'Rajasthan Tour Packages from Udaipur | ShivShakti Tourist',
  description:
    '6 curated Rajasthan tour packages — Golden Circuit, Desert Safari, Heritage Express and more. From ₹9,500 per person. Transparent pricing, English guides, luxury bus.',
  keywords: [
    'Rajasthan tour packages',
    'Udaipur to Jaipur tour',
    'Rajasthan circuit tour',
    'Rajasthan package tour foreigners',
    'best Rajasthan tours international visitors',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Rajasthan Tour Packages from Udaipur — ShivShakti Tourist',
    description:
      "Explore Rajasthan's forts, palaces and deserts on a private luxury bus. 6 curated itineraries from ₹9,500. Transparent pricing, 24/7 support, English-speaking guides.",
    url: PAGE_URL,
    type: 'website',
    siteName: SITE.name,
    images: [
      {
        url: `${SITE.url}/og-rajasthan-tours.jpg`, // TODO: add real OG image
        width: 1200,
        height: 630,
        alt: 'Rajasthan tour packages — luxury bus from Udaipur',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rajasthan Tour Packages from Udaipur — ShivShakti Tourist',
    description:
      '6 curated packages — desert safaris, palace circuits, and heritage trails. From ₹9,500 per person.',
  },
}

export default function RajasthanToursLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
