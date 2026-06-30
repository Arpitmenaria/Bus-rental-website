/** Validation shared between the API route and the client form. */

export const GROUP_SIZES = [
  '1–4 people',
  '5–12 people',
  '13–25 people',
  '26–49 people',
  '50+ people',
  'Not sure yet',
] as const

export type GroupSize = (typeof GROUP_SIZES)[number]

export interface ContactPayload {
  name: string
  email: string
  country: string
  whatsapp: string
  travelDate: string
  groupSize: string
  description: string
  /** Honeypot — must be empty. Present in client form, checked server-side. */
  honeypot: string
}

export interface FieldErrors {
  name?: string
  email?: string
  description?: string
  groupSize?: string
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function validateContact(data: ContactPayload): FieldErrors {
  const errors: FieldErrors = {}

  const name = data.name.trim()
  if (!name) errors.name = 'Your name is required.'
  else if (name.length < 2) errors.name = 'Name must be at least 2 characters.'
  else if (name.length > 100) errors.name = 'Name must be under 100 characters.'

  const email = data.email.trim()
  if (!email) errors.email = 'Email address is required.'
  else if (!EMAIL_RE.test(email)) errors.email = 'Please enter a valid email address.'
  else if (email.length > 200) errors.email = 'Email must be under 200 characters.'

  const desc = data.description.trim()
  if (!desc) errors.description = 'Please tell us a little about your trip.'
  else if (desc.length < 10) errors.description = 'Please add a bit more detail (at least 10 characters).'
  else if (desc.length > 2000)
    errors.description = `Too long — please keep it under 2,000 characters (currently ${desc.length}).`

  if (data.groupSize && !(GROUP_SIZES as readonly string[]).includes(data.groupSize))
    errors.groupSize = 'Please select a valid group size.'

  return errors
}
