import { track } from '@vercel/analytics'

// Typed conversion events — call these instead of track() directly.

export type WAClickSource =
  | 'hero'
  | 'navbar'
  | 'contact-sidebar'
  | 'contact-success'
  | 'cta-banner'
  | 'charter'
  | 'tour-card'

export type EmailClickSource = 'contact-sidebar' | 'footer' | 'cta-banner'
export type PhoneClickSource = 'contact-sidebar' | 'footer'

export function trackWaClick(source: WAClickSource) {
  track('wa_click', { source })
}

export function trackFormSuccess(groupSize: string) {
  track('form_submit_success', { group_size: groupSize })
}

export function trackEmailClick(source: EmailClickSource) {
  track('email_click', { source })
}

export function trackPhoneClick(source: PhoneClickSource) {
  track('phone_click', { source })
}
