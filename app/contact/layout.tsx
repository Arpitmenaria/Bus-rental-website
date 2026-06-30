import type { Metadata } from 'next'
import { SITE } from '@/lib/site'

const PAGE_URL = `${SITE.url}/contact`

export const metadata: Metadata = {
  title: `Contact Us — Book a Rajasthan Tour | ${SITE.name}`,
  description:
    'Get a personalised Rajasthan or India tour quote within 2 hours. WhatsApp us for an instant reply, or send your travel dates and group size via the enquiry form.',
  keywords: [
    'contact Udaipur tour operator',
    'book Rajasthan tour',
    'India tour enquiry',
    'WhatsApp Rajasthan tour booking',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: `Plan Your India Trip — Contact ${SITE.name}`,
    description:
      'Tell us your travel dates, group size and interests. We reply within 5 minutes on WhatsApp and provide a full transparent quote within 2 hours.',
    url: PAGE_URL,
    type: 'website',
    siteName: SITE.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: `Contact ${SITE.name} — Book a Rajasthan or India Tour`,
    description:
      'WhatsApp us for an instant reply or fill in the enquiry form. Custom quotes within 2 hours.',
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
