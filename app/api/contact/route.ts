import { NextRequest, NextResponse } from 'next/server'
import { SITE } from '@/lib/site'
import { validateContact, type ContactPayload, type FieldErrors } from '@/lib/contact-validation'

// ── Types ────────────────────────────────────────────────────────────────────

export type ContactApiResponse =
  | { ok: true; message: string }
  | { ok: false; error: string; fields?: FieldErrors }

// ── Rate limiter (in-memory, per-instance) ───────────────────────────────────
// Resets on cold start. Good enough for a low-traffic contact form.
// For higher traffic, swap Map for an edge KV store (Vercel KV / Upstash Redis).

const RATE_WINDOW_MS = 10 * 60 * 1000 // 10 minutes
const RATE_MAX = 5 // submissions per window per IP

const rateLimitStore = new Map<string, number[]>()

function isAllowed(ip: string): boolean {
  const now = Date.now()
  const hits = (rateLimitStore.get(ip) ?? []).filter((t) => now - t < RATE_WINDOW_MS)
  if (hits.length >= RATE_MAX) return false
  rateLimitStore.set(ip, [...hits, now])
  return true
}

function clientIp(req: NextRequest): string {
  return (
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    req.headers.get('x-real-ip') ??
    'unknown'
  )
}

// ── Input sanitisation ───────────────────────────────────────────────────────

function str(v: unknown, max = 5000): string {
  return typeof v === 'string' ? v.slice(0, max) : ''
}

function extractPayload(body: unknown): ContactPayload {
  const b = body as Record<string, unknown>
  return {
    name: str(b.name, 200),
    email: str(b.email, 300),
    country: str(b.country, 100),
    whatsapp: str(b.whatsapp, 50),
    travelDate: str(b.travelDate, 20),
    groupSize: str(b.groupSize, 50),
    description: str(b.description, 2500),
    honeypot: str(b.honeypot, 200),
  }
}

// ── Email body ───────────────────────────────────────────────────────────────
// Edit the template below to customise how the enquiry email looks.

function buildEmailBody(p: ContactPayload): string {
  const rows = [
    ['Name', p.name.trim()],
    ['Email', p.email.trim()],
    ['WhatsApp', p.whatsapp.trim() || '(not provided)'],
    ['Country', p.country.trim() || '(not provided)'],
    ['Travel Date', p.travelDate || 'Flexible'],
    ['Group Size', p.groupSize || '(not specified)'],
  ]

  const table = rows.map(([k, v]) => `${k.padEnd(14)}: ${v}`).join('\n')

  return [
    `New tour enquiry received from the website contact form.`,
    ``,
    `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
    table,
    `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
    ``,
    `Trip Details`,
    `────────────`,
    p.description.trim(),
    ``,
    `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
    `Reply directly to this email — the reply-to address is set to the`,
    `enquirer's email so you can respond with a single click.`,
    ``,
    `Sent via ${SITE.url}/contact`,
  ].join('\n')
}

// ── Handler ──────────────────────────────────────────────────────────────────

export async function POST(req: NextRequest): Promise<NextResponse<ContactApiResponse>> {
  // 1. Rate limit
  if (!isAllowed(clientIp(req))) {
    return NextResponse.json(
      { ok: false, error: 'Too many requests. Please wait a few minutes and try again.' },
      { status: 429 }
    )
  }

  // 2. Parse body
  let raw: unknown
  try {
    raw = await req.json()
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid request.' }, { status: 400 })
  }

  const payload = extractPayload(raw)

  // 3. Honeypot — silently succeed to fool bots
  if (payload.honeypot) {
    return NextResponse.json({ ok: true, message: 'Enquiry received.' })
  }

  // 4. Server-side validation (mirrors client-side rules)
  const errors = validateContact(payload)
  if (Object.keys(errors).length > 0) {
    return NextResponse.json(
      { ok: false, error: 'Please fix the highlighted fields.', fields: errors },
      { status: 422 }
    )
  }

  // 5. Check env
  const accessKey = process.env.WEB3FORMS_ACCESS_KEY
  if (!accessKey) {
    console.error('[contact/route] WEB3FORMS_ACCESS_KEY is not set.')
    return NextResponse.json(
      {
        ok: false,
        error:
          'The contact form is currently unavailable. Please reach us directly on WhatsApp or by email.',
      },
      { status: 503 }
    )
  }

  // 6. Build subject — customise this line to your liking
  const subject = `Tour Enquiry from ${payload.name.trim()}${payload.country.trim() ? ` (${payload.country.trim()})` : ''} — ${SITE.name}`

  // 7. Submit to Web3Forms
  try {
    const w3Res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        access_key: accessKey,
        subject,
        from_name: SITE.name,
        // reply-to the enquirer so you can respond with a single click
        replyto: payload.email.trim(),
        message: buildEmailBody(payload),
      }),
    })

    const w3Body = (await w3Res.json()) as { success: boolean; message?: string }

    if (!w3Res.ok || !w3Body.success) {
      console.error('[contact/route] Web3Forms rejected the submission:', w3Body)
      return NextResponse.json(
        {
          ok: false,
          error:
            'Failed to send your enquiry. Please try again, or reach us on WhatsApp for an instant reply.',
        },
        { status: 502 }
      )
    }

    return NextResponse.json({
      ok: true,
      message: `Enquiry sent! We'll reply to your email within ${SITE.response.email}.`,
    })
  } catch (err) {
    console.error('[contact/route] Fetch to Web3Forms failed:', err)
    return NextResponse.json(
      {
        ok: false,
        error:
          'A network error occurred. Please check your connection and try again, or message us on WhatsApp.',
      },
      { status: 502 }
    )
  }
}
