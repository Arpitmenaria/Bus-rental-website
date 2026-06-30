'use client'

import type { ReactNode } from 'react'
import { trackWaClick, trackEmailClick, trackPhoneClick } from '@/lib/analytics'
import type { WAClickSource, EmailClickSource, PhoneClickSource } from '@/lib/analytics'

type Props =
  | {
      href: string
      event: 'wa_click'
      source: WAClickSource
      className?: string
      target?: string
      rel?: string
      children: ReactNode
    }
  | {
      href: string
      event: 'email_click'
      source: EmailClickSource
      className?: string
      target?: string
      rel?: string
      children: ReactNode
    }
  | {
      href: string
      event: 'phone_click'
      source: PhoneClickSource
      className?: string
      target?: string
      rel?: string
      children: ReactNode
    }

export default function AnalyticsLink({ href, event, source, className, target, rel, children }: Props) {
  function handleClick() {
    if (event === 'wa_click') trackWaClick(source as WAClickSource)
    else if (event === 'email_click') trackEmailClick(source as EmailClickSource)
    else if (event === 'phone_click') trackPhoneClick(source as PhoneClickSource)
  }

  return (
    <a href={href} className={className} target={target} rel={rel} onClick={handleClick}>
      {children}
    </a>
  )
}
