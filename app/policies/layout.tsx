import type { Metadata } from 'next'
import { SITE } from '@/lib/site'

const PAGE_URL = `${SITE.url}/policies`

export const metadata: Metadata = {
  title: 'Booking Terms, Cancellation Policy & Inclusions',
  description:
    `How booking works, what's included, and our cancellation/refund policy, all clearly stated before you pay anything. ${SITE.name}, Udaipur.`,
  keywords: [
    'tour booking terms India',
    'cancellation policy India tour',
    'bus tour inclusions exclusions',
    'ShivShakti Tourist policies',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Booking Terms & Cancellation Policy | ShivShakti Tourist',
    description:
      'Transparent terms: how to book, deposit amounts, cancellation refund tiers, and exactly what is and isn\'t included in your quote.',
    url: PAGE_URL,
    type: 'website',
    siteName: SITE.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Policies | ShivShakti Tourist',
    description: 'Clear booking terms, cancellation/refund table, and inclusions/exclusions, no surprises.',
  },
}

export default function PoliciesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
