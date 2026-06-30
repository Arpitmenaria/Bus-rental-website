'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import { SITE, waUrl } from '@/lib/site'

const contactInfo = [
  { icon: '📱', label: 'WhatsApp', value: SITE.phone.display, href: `https://wa.me/${SITE.phone.wa}` },
  { icon: '✉️', label: 'Email', value: SITE.email.main, href: `mailto:${SITE.email.main}` },
  {
    icon: '📍',
    label: 'Address',
    value: `${SITE.address.street}, ${SITE.address.city}, ${SITE.address.state} ${SITE.address.pincode}`,
    href: null,
  },
  {
    icon: '🕐',
    label: 'Response Time',
    value: `${SITE.response.whatsapp} on WhatsApp · ${SITE.response.email} by email`,
    href: null,
  },
  { icon: '🗣️', label: 'Languages', value: SITE.stats.languages.join(', '), href: null },
]

const groupSizes = ['1–4 people', '5–12 people', '13–25 people', '26–49 people', '50+ people', 'Not sure yet']

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    country: '',
    email: '',
    whatsapp: '',
    travelDate: '',
    groupSize: '',
    description: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const msg = `Hi ShivShakti Tourist!

*Name:* ${form.name}
*Country:* ${form.country}
*Email:* ${form.email}
*WhatsApp:* ${form.whatsapp}
*Travel Date:* ${form.travelDate}
*Group Size:* ${form.groupSize}

*Trip Details:*
${form.description}`

    const encoded = encodeURIComponent(msg)
    window.open(`https://wa.me/${SITE.phone.wa}?text=${encoded}`, '_blank')
    setSubmitted(true)
  }

  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-950 to-emerald-800 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-emerald-400 font-semibold text-sm tracking-widest uppercase mb-3">We Reply in Under 5 Minutes</p>
          <h1 className="font-serif text-5xl lg:text-6xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-emerald-200 text-lg max-w-xl mx-auto">
            Send us your travel details and receive a personalised itinerary and quote within 2 hours — any time of day.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[380px_1fr] gap-10">

            {/* Sidebar */}
            <div>
              <div className="bg-emerald-950 rounded-2xl p-7 text-white mb-6">
                <h2 className="font-serif text-2xl font-bold mb-6">Get in Touch</h2>
                <ul className="space-y-5">
                  {contactInfo.map((c) => (
                    <li key={c.label} className="flex items-start gap-3">
                      <span className="text-xl flex-shrink-0 mt-0.5">{c.icon}</span>
                      <div>
                        <p className="text-emerald-400 text-xs font-semibold uppercase tracking-wide mb-0.5">{c.label}</p>
                        {c.href ? (
                          <a href={c.href} target="_blank" rel="noopener noreferrer" className="text-white hover:text-emerald-300 transition-colors text-sm">
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

              <div className="bg-white rounded-2xl p-6 border border-gray-100">
                <h3 className="font-bold text-emerald-950 mb-3">Quick WhatsApp</h3>
                <p className="text-gray-600 text-sm mb-4">Prefer to message directly? Tap below to open a WhatsApp chat instantly.</p>
                <a
                  href={waUrl("Hi ShivShakti Tourist, I'd like to enquire about a tour.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-5 py-3 rounded-xl w-full justify-center transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Open WhatsApp Chat
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
              {submitted ? (
                <div className="text-center py-16">
                  <div className="text-6xl mb-4">🎉</div>
                  <h2 className="font-serif text-3xl font-bold text-emerald-950 mb-3">WhatsApp Opened!</h2>
                  <p className="text-gray-600 mb-6">Your details have been pre-filled in the WhatsApp message. Just hit send — we'll reply within 5 minutes.</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-emerald-600 font-semibold hover:underline"
                  >
                    Send another enquiry
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="font-serif text-2xl font-bold text-emerald-950 mb-2">Send Your Enquiry</h2>
                  <p className="text-gray-500 text-sm mb-7">Fill in your details and we'll pre-fill a WhatsApp message for you — just tap send.</p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          required
                          placeholder="John Smith"
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">Country *</label>
                        <input
                          type="text"
                          name="country"
                          value={form.country}
                          onChange={handleChange}
                          required
                          placeholder="United Kingdom"
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          required
                          placeholder="john@example.com"
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">WhatsApp Number *</label>
                        <input
                          type="tel"
                          name="whatsapp"
                          value={form.whatsapp}
                          onChange={handleChange}
                          required
                          placeholder="+44 7700 900000"
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">Travel Date *</label>
                        <input
                          type="date"
                          name="travelDate"
                          value={form.travelDate}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">Group Size *</label>
                        <select
                          name="groupSize"
                          value={form.groupSize}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition bg-white"
                        >
                          <option value="">Select group size</option>
                          {groupSizes.map((g) => <option key={g} value={g}>{g}</option>)}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Trip Description *</label>
                      <textarea
                        name="description"
                        value={form.description}
                        onChange={handleChange}
                        required
                        rows={4}
                        placeholder="Where would you like to go? How many days? Any special requirements? (e.g. 'Rajasthan circuit, 7 days, interested in desert camp, need AC sleeper bus for 20 people')"
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-4 rounded-xl shadow-lg shadow-emerald-600/20 transition-all hover:-translate-y-0.5 text-base"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      Send via WhatsApp
                    </button>
                    <p className="text-xs text-gray-400 text-center">This opens WhatsApp with your details pre-filled. We reply within 5 minutes.</p>
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
