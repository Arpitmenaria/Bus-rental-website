'use client'

import { useRef, useState } from 'react'
import Navbar from '@/components/Navbar'
import { SITE, waUrl } from '@/lib/site'
import {
  validateContact,
  GROUP_SIZES,
  type ContactPayload,
  type FieldErrors,
} from '@/lib/contact-validation'
import type { ContactApiResponse } from '@/app/api/contact/route'
import { trackWaClick, trackEmailClick, trackFormSuccess } from '@/lib/analytics'

// ── Constants ────────────────────────────────────────────────────────────────

const WA_ICON = (
  <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

const EMPTY: ContactPayload = {
  name: '',
  email: '',
  country: '',
  whatsapp: '',
  travelDate: '',
  groupSize: '',
  description: '',
  honeypot: '',
}

type Status = 'idle' | 'submitting' | 'success' | 'error'

// ── Shared input style helper ─────────────────────────────────────────────────

function inputCls(hasError: boolean, extra = '') {
  const base =
    'w-full px-4 py-3 border rounded-xl text-sm focus:outline-none focus:ring-2 transition bg-white'
  const ok = 'border-gray-200 focus:border-emerald-500 focus:ring-emerald-500/20'
  const err = 'border-red-400 focus:border-red-500 focus:ring-red-500/20'
  return `${base} ${hasError ? err : ok} ${extra}`.trim()
}

// ── Field wrapper ─────────────────────────────────────────────────────────────

function Field({
  id,
  label,
  required,
  error,
  hint,
  children,
}: {
  id: string
  label: string
  required?: boolean
  error?: string
  hint?: string
  children: React.ReactNode
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-gray-700 mb-1.5">
        {label}
        {required && <span className="text-red-400 ml-0.5" aria-hidden="true"> *</span>}
      </label>
      {children}
      {hint && !error && <p className="text-gray-500 text-xs mt-1">{hint}</p>}
      {error && (
        <p id={`${id}-error`} role="alert" className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
          <svg className="w-3.5 h-3.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          {error}
        </p>
      )}
    </div>
  )
}

// ── Main page ─────────────────────────────────────────────────────────────────

export default function ContactPage() {
  const [fields, setFields] = useState<ContactPayload>(EMPTY)
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({})
  const [status, setStatus] = useState<Status>('idle')
  const [serverError, setServerError] = useState('')
  const [successEmail, setSuccessEmail] = useState('')
  const formRef = useRef<HTMLFormElement>(null)

  function set(name: keyof ContactPayload) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setFields((f) => ({ ...f, [name]: e.target.value }))
  }

  function clearError(name: keyof FieldErrors) {
    if (fieldErrors[name]) setFieldErrors((e) => ({ ...e, [name]: undefined }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    const errors = validateContact(fields)
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors)
      // Scroll to the first invalid field
      formRef.current?.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus()
      return
    }

    setStatus('submitting')
    setFieldErrors({})
    setServerError('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fields),
      })

      let data: ContactApiResponse
      try {
        data = (await res.json()) as ContactApiResponse
      } catch {
        throw new Error('Unexpected response from server.')
      }

      if (data.ok) {
        trackFormSuccess(fields.groupSize)
        setSuccessEmail(fields.email)
        setFields(EMPTY)
        setStatus('success')
      } else if (!data.ok && data.fields) {
        setFieldErrors(data.fields)
        setStatus('idle')
        formRef.current?.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus()
      } else {
        setServerError(data.error)
        setStatus('error')
      }
    } catch {
      setServerError(
        'A network error occurred. Please check your connection and try again, or reach us on WhatsApp.'
      )
      setStatus('error')
    }
  }

  function reset() {
    setStatus('idle')
    setServerError('')
    setFieldErrors({})
  }

  // ── Sidebar contact info ────────────────────────────────────────────────────

  const contactInfo = [
    {
      icon: '📱',
      label: 'WhatsApp',
      value: SITE.phone.display,
      href: `https://wa.me/${SITE.phone.wa}`,
    },
    {
      icon: '✉️',
      label: 'Email',
      value: SITE.email.main,
      href: `mailto:${SITE.email.main}`,
    },
    {
      icon: '📍',
      label: 'Address',
      value: `${SITE.address.street}, ${SITE.address.city}, ${SITE.address.state} ${SITE.address.pincode}`,
      href: SITE.social.googleMaps || null,
    },
    {
      icon: '🕐',
      label: 'Response Time',
      value: `${SITE.response.whatsapp} on WhatsApp · ${SITE.response.email} by email`,
      href: null,
    },
    {
      icon: '🗣️',
      label: 'Languages',
      value: SITE.stats.languages.join(', '),
      href: null,
    },
  ]

  // ── Pre-filled WA URL from current form state ───────────────────────────────
  const waFallback = waUrl(
    fields.name
      ? `Hi ShivShakti! I'm ${fields.name}${fields.country ? ` from ${fields.country}` : ''}. ${fields.description || "I'd like to enquire about a tour."}`
      : "Hi ShivShakti Tourist, I'd like to enquire about a tour."
  )

  // ── Render ─────────────────────────────────────────────────────────────────

  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-950 to-emerald-800 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-emerald-400 font-semibold text-sm tracking-widest uppercase mb-3">
            ⚡ We Reply in {SITE.response.whatsapp} on WhatsApp
          </p>
          <h1 className="font-serif text-5xl lg:text-6xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-emerald-200 text-lg max-w-xl mx-auto">
            Send us your travel details and receive a personalised itinerary with full pricing
            within {SITE.response.email} — any time of day.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[380px_1fr] gap-10">

            {/* ── Sidebar ────────────────────────────────────────────────── */}
            <aside>
              {/* Contact info */}
              <div className="bg-emerald-950 rounded-2xl p-7 text-white mb-5">
                <h2 className="font-serif text-2xl font-bold mb-6">Get in Touch</h2>
                <ul className="space-y-5">
                  {contactInfo.map((c) => (
                    <li key={c.label} className="flex items-start gap-3">
                      <span className="text-xl flex-shrink-0 mt-0.5" aria-hidden="true">{c.icon}</span>
                      <div>
                        <p className="text-emerald-400 text-xs font-semibold uppercase tracking-wide mb-0.5">
                          {c.label}
                        </p>
                        {c.href ? (
                          <a
                            href={c.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-emerald-300 transition-colors text-sm break-all"
                          >
                            {c.value}
                          </a>
                        ) : (
                          <p className="text-emerald-200 text-sm">{c.value}</p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* WhatsApp CTA */}
              <div className="bg-white rounded-2xl p-5 border border-gray-100 mb-4">
                <h3 className="font-bold text-emerald-950 mb-1">Fastest: WhatsApp</h3>
                <p className="text-gray-500 text-sm mb-4">
                  We reply in {SITE.response.whatsapp}. Open a chat and we'll handle everything from there.
                </p>
                <a
                  href={waFallback}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWaClick('contact-sidebar')}
                  className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-5 py-3 rounded-xl w-full transition-colors"
                >
                  {WA_ICON}
                  Open WhatsApp Chat
                </a>
              </div>

              {/* Direct email CTA */}
              <div className="bg-white rounded-2xl p-5 border border-gray-100">
                <h3 className="font-bold text-emerald-950 mb-1">Direct Email</h3>
                <p className="text-gray-500 text-sm mb-4">
                  We reply within {SITE.response.email}. Use the form on the right or email us directly.
                </p>
                <a
                  href={`mailto:${SITE.email.main}?subject=Tour%20Enquiry&body=Hi%20ShivShakti%20Tourist%2C%0A%0AI%27d%20like%20to%20enquire%20about%20a%20tour.%0A%0A`}
                  onClick={() => trackEmailClick('contact-sidebar')}
                  className="flex items-center justify-center gap-2 bg-white border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-50 font-semibold px-5 py-3 rounded-xl w-full transition-colors"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {SITE.email.main}
                </a>
              </div>
            </aside>

            {/* ── Form panel ─────────────────────────────────────────────── */}
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">

              {/* Success state */}
              {status === 'success' && (
                <div className="text-center py-10">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-5">
                    <svg className="w-8 h-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="font-serif text-2xl font-bold text-emerald-950 mb-2">Enquiry Sent!</h2>
                  <p className="text-gray-600 mb-1">
                    We'll reply to <strong className="text-emerald-800">{successEmail}</strong> within{' '}
                    <strong>{SITE.response.email}</strong>.
                  </p>
                  <p className="text-gray-500 text-sm mb-8">
                    In a hurry? We're on WhatsApp and usually reply in {SITE.response.whatsapp}.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <a
                      href={waUrl("Hi ShivShakti, I just sent an enquiry via the website and wanted to connect on WhatsApp too.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackWaClick('contact-success')}
                      className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-5 py-3 rounded-xl transition-colors"
                    >
                      {WA_ICON}
                      Message on WhatsApp
                    </a>
                    <button
                      onClick={reset}
                      className="flex items-center justify-center border-2 border-emerald-200 text-emerald-700 hover:bg-emerald-50 font-semibold px-5 py-3 rounded-xl transition-colors"
                    >
                      Send Another Enquiry
                    </button>
                  </div>
                </div>
              )}

              {/* Idle / submitting / error state (form visible) */}
              {status !== 'success' && (
                <>
                  <h2 className="font-serif text-2xl font-bold text-emerald-950 mb-1">
                    Send an Email Enquiry
                  </h2>
                  <p className="text-gray-500 text-sm mb-2">
                    All fields marked <span className="text-red-400" aria-hidden="true">*</span> are required.
                  </p>

                  {/* Response-time promise */}
                  <div className="flex items-center gap-2 text-xs text-emerald-700 bg-emerald-50 border border-emerald-100 rounded-lg px-3 py-2 mb-7 w-fit">
                    <span aria-hidden="true">⚡</span>
                    We reply within <strong>{SITE.response.email}</strong> — or {SITE.response.whatsapp} on WhatsApp
                  </div>

                  {/* Server-level error banner */}
                  {status === 'error' && serverError && (
                    <div
                      role="alert"
                      className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6 flex items-start gap-3"
                    >
                      <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <p className="text-red-700 text-sm font-semibold">{serverError}</p>
                        <p className="text-red-600 text-xs mt-1">
                          You can also reach us directly on{' '}
                          <a href={waFallback} target="_blank" rel="noopener noreferrer" className="underline font-medium">
                            WhatsApp
                          </a>{' '}
                          or by{' '}
                          <a href={`mailto:${SITE.email.main}`} className="underline font-medium">
                            email
                          </a>
                          .
                        </p>
                      </div>
                    </div>
                  )}

                  <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-5">

                    {/* Honeypot — invisible to humans, checked server-side */}
                    <div className="absolute -left-[9999px] top-0 w-px h-px overflow-hidden opacity-0" aria-hidden="true">
                      <label htmlFor="hp-website">Website</label>
                      <input
                        id="hp-website"
                        type="text"
                        name="honeypot"
                        tabIndex={-1}
                        autoComplete="off"
                        value={fields.honeypot}
                        onChange={set('honeypot')}
                      />
                    </div>

                    {/* Row 1: name + country */}
                    <div className="grid sm:grid-cols-2 gap-5">
                      <Field id="name" label="Full Name" required error={fieldErrors.name}>
                        <input
                          id="name"
                          type="text"
                          name="name"
                          autoComplete="name"
                          placeholder="John Smith"
                          value={fields.name}
                          onChange={set('name')}
                          onFocus={() => clearError('name')}
                          aria-invalid={!!fieldErrors.name}
                          aria-describedby={fieldErrors.name ? 'name-error' : undefined}
                          className={inputCls(!!fieldErrors.name)}
                        />
                      </Field>
                      <Field id="country" label="Country">
                        <input
                          id="country"
                          type="text"
                          name="country"
                          autoComplete="country-name"
                          placeholder="United Kingdom"
                          value={fields.country}
                          onChange={set('country')}
                          className={inputCls(false)}
                        />
                      </Field>
                    </div>

                    {/* Row 2: email + whatsapp */}
                    <div className="grid sm:grid-cols-2 gap-5">
                      <Field id="email" label="Email Address" required error={fieldErrors.email} hint="We'll reply to this address.">
                        <input
                          id="email"
                          type="email"
                          name="email"
                          autoComplete="email"
                          placeholder="john@example.com"
                          value={fields.email}
                          onChange={set('email')}
                          onFocus={() => clearError('email')}
                          aria-invalid={!!fieldErrors.email}
                          aria-describedby={fieldErrors.email ? 'email-error' : undefined}
                          className={inputCls(!!fieldErrors.email)}
                        />
                      </Field>
                      <Field id="whatsapp" label="WhatsApp Number" hint="Optional — for quick back-and-forth.">
                        <input
                          id="whatsapp"
                          type="tel"
                          name="whatsapp"
                          autoComplete="tel"
                          placeholder="+44 7700 900000"
                          value={fields.whatsapp}
                          onChange={set('whatsapp')}
                          className={inputCls(false)}
                        />
                      </Field>
                    </div>

                    {/* Row 3: travel date + group size */}
                    <div className="grid sm:grid-cols-2 gap-5">
                      <Field id="travelDate" label="Approximate Travel Date" hint="Rough dates are fine — we can be flexible.">
                        <input
                          id="travelDate"
                          type="date"
                          name="travelDate"
                          value={fields.travelDate}
                          onChange={set('travelDate')}
                          className={inputCls(false)}
                        />
                      </Field>
                      <Field id="groupSize" label="Group Size" error={fieldErrors.groupSize}>
                        <select
                          id="groupSize"
                          name="groupSize"
                          value={fields.groupSize}
                          onChange={set('groupSize')}
                          aria-invalid={!!fieldErrors.groupSize}
                          aria-describedby={fieldErrors.groupSize ? 'groupSize-error' : undefined}
                          className={inputCls(!!fieldErrors.groupSize)}
                        >
                          <option value="">Select group size</option>
                          {GROUP_SIZES.map((g) => (
                            <option key={g} value={g}>{g}</option>
                          ))}
                        </select>
                      </Field>
                    </div>

                    {/* Trip description */}
                    <Field
                      id="description"
                      label="Tell us about your trip"
                      required
                      error={fieldErrors.description}
                      hint="Where do you want to go? How many days? Any special interests or requirements?"
                    >
                      <textarea
                        id="description"
                        name="description"
                        rows={5}
                        placeholder="e.g. 'Rajasthan circuit, 7 days, 8 people, interested in desert camp and forts, need AC sleeper bus. Flying into Udaipur on 15 Oct.'"
                        value={fields.description}
                        onChange={set('description')}
                        onFocus={() => clearError('description')}
                        aria-invalid={!!fieldErrors.description}
                        aria-describedby={fieldErrors.description ? 'description-error' : undefined}
                        className={inputCls(!!fieldErrors.description, 'resize-none')}
                      />
                      <p className="text-gray-500 text-xs mt-1 text-right">
                        {fields.description.length} / 2000
                      </p>
                    </Field>

                    {/* Submit */}
                    <div className="pt-1">
                      <button
                        type="submit"
                        disabled={status === 'submitting'}
                        className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-400 disabled:cursor-not-allowed text-white font-bold px-6 py-4 rounded-xl shadow-lg shadow-emerald-600/20 transition-all hover:enabled:-translate-y-0.5 text-base"
                      >
                        {status === 'submitting' ? (
                          <>
                            <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                            </svg>
                            Sending…
                          </>
                        ) : (
                          <>
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                            </svg>
                            Send Enquiry
                          </>
                        )}
                      </button>
                      <p className="text-xs text-gray-500 text-center mt-3">
                        We'll reply to your email within {SITE.response.email}. No spam, ever.
                        {' '}Prefer instant answers?{' '}
                        <a href={waFallback} target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline font-medium">
                          Message us on WhatsApp
                        </a>
                        .
                      </p>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
