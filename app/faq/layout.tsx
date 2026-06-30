import type { Metadata } from 'next'
import { SITE } from '@/lib/site'

const PAGE_URL = `${SITE.url}/faq`

export const metadata: Metadata = {
  title: 'FAQ — Is India Road Travel Safe? Booking, Payments & More',
  description:
    `Honest answers to the questions international travellers ask most before booking with ${SITE.name}: safety, commissions, solo travel, payment, and what's included.`,
  keywords: [
    'India bus tour FAQ',
    'is Rajasthan safe for tourists',
    'India travel commission scam',
    'book private bus India',
    'Rajasthan tour questions',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Frequently Asked Questions — ShivShakti Tourist',
    description:
      `Plain answers on safety, booking, and what's included — so you can book with confidence. No commissions, no hidden costs, no surprises.`,
    url: PAGE_URL,
    type: 'website',
    siteName: SITE.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FAQ — ShivShakti Tourist',
    description: 'Honest answers on safety, commissions, booking, and travel logistics for international visitors.',
  },
}

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
