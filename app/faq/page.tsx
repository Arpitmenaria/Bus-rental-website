import Link from 'next/link'
import Navbar from '@/components/Navbar'
import JsonLd from '@/components/JsonLd'
import { SITE, waUrl } from '@/lib/site'
import { faqSchema } from '@/lib/schema'

// ── FAQ data (wording from shivshakti-trust-copy.md) ─────────────────────────

const SAFETY: Array<{ q: string; a: string; highlight?: boolean }> = [
  {
    q: 'Will I be pressured into shops, "emporiums," or detours for commissions?',
    a: 'No — and we say this plainly because we know it\'s the most common complaint about road travel in India. Our drivers earn a fair, fixed wage. They are not paid shop commissions, and they will never reroute you to a store, "government emporium," or relative\'s business. You go where your itinerary says, full stop. If you\'d like to shop, tell us and we\'ll take you somewhere genuinely worth your time.',
    highlight: true,
  },
  {
    q: 'Is it safe to travel through Rajasthan and India by road?',
    a: 'Yes. Rajasthan is one of India\'s most visited regions for international travellers, and travelling with a professional operator is the safest way to see it. Every trip runs on a GPS-tracked vehicle with a vetted, licensed driver, and you have a direct line to our team 24/7 for the entire journey.',
  },
  {
    q: 'Are your drivers licensed and do they speak English?',
    a: 'All our drivers hold commercial licences, are background-checked, and have years of experience on Rajasthan\'s routes. Our drivers and guides communicate comfortably in English so you\'re never left guessing.',
  },
  {
    q: 'Is this suitable for solo travellers and women travelling alone?',
    a: 'Yes, and a large share of our guests travel solo or as small groups of women. You can share your live GPS location with family at home, your driver is vetted and identifiable, and our team is reachable around the clock. We\'re happy to discuss any specific concerns before you book.',
  },
  {
    q: "How do I know you're a real, registered company?",
    a: 'We\'re a registered tour operator based in Udaipur. Our GST number, business registration, and tourism credentials are listed on this site, our office address is on Google Maps, and you can read verified reviews from past guests on Google and TripAdvisor.',
  },
]

const BOOKING: Array<{ q: string; a: string }> = [
  {
    q: 'How do I pay, and is it secure?',
    a: 'You can pay by [TODO: card / UPI / bank transfer / Razorpay / Stripe — list your real methods]. Payments are processed through secure, recognised gateways. We\'ll always send a written confirmation and a proper invoice — never an informal "pay cash to the driver" arrangement for the booking itself.',
  },
  {
    q: 'Do I need to pay the full amount upfront?',
    a: 'No. We take a deposit of [TODO: e.g. 20–30%] to confirm your booking, with the balance due [TODO: e.g. on arrival / X days before travel]. Exact terms are confirmed in writing before you pay anything.',
  },
  {
    q: 'How far in advance should I book?',
    a: 'For peak season (October–March) we recommend booking [TODO: e.g. 4–6 weeks] ahead. Off-peak and last-minute trips are often possible — just message us and we\'ll check availability.',
  },
  {
    q: 'Can I customise the itinerary?',
    a: 'Absolutely. Every itinerary on this site is a starting point. Tell us your dates, interests, and pace and we\'ll tailor the route, stops, and hotel tier to suit you.',
  },
]

const ON_THE_ROAD: Array<{ q: string; a: string }> = [
  {
    q: "What's included in the price, and what isn't?",
    a: 'See our Policies page for the full breakdown. In short: the vehicle, driver, fuel, tolls, and parking are included; personal expenses, entry tickets, meals, and tips are typically not — and we always tell you upfront so there are no surprises.',
  },
  {
    q: 'Do you arrange hotels, or only transport?',
    a: '[TODO: choose one] We arrange the full package including vetted hotels / We focus on premium transport and can recommend trusted hotels, leaving the booking to you.',
  },
  {
    q: "What if something goes wrong during the trip — a breakdown or emergency?",
    a: "You'll have a direct 24/7 contact with our team for the whole journey. Our fleet is regularly serviced, and in the rare event of a vehicle issue we arrange a prompt replacement so your plans stay on track.",
  },
  {
    q: 'What about luggage, and amenities on the bus?',
    a: '[TODO: describe luggage capacity and onboard amenities — AC, charging points, water, reclining seats, wifi, etc.]',
  },
  {
    q: 'Are tips expected?',
    a: 'Tipping is appreciated but never required, and it\'s always your choice. As a guide, [TODO: e.g. ₹X–Y per day for the driver] is customary if you\'ve had a good experience.',
  },
  {
    q: 'Can you cater to dietary needs (vegetarian, vegan, allergies)?',
    a: "Yes. Tell us in advance and we'll plan stops and recommendations around your needs.",
  },
]

// All Q&A for JSON-LD (plain text, TODO markers preserved)
const ALL_FAQ = [
  ...SAFETY.map(({ q, a }) => ({ question: q, answer: a })),
  ...BOOKING.map(({ q, a }) => ({ question: q, answer: a })),
  ...ON_THE_ROAD.map(({ q, a }) => ({ question: q, answer: a })),
]

// ── Components ────────────────────────────────────────────────────────────────

function Todo({ children }: { children: React.ReactNode }) {
  return (
    <mark className="bg-yellow-100 text-yellow-900 px-1 py-0.5 rounded text-[0.9em] font-mono not-italic">
      {children}
    </mark>
  )
}

/** Replaces [TODO: ...] markers in answer text with a styled <Todo> element. */
function AnswerText({ text }: { text: string }) {
  const parts = text.split(/(\[TODO:[^\]]+\])/g)
  return (
    <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
      {parts.map((part, i) =>
        part.startsWith('[TODO:') ? <Todo key={i}>{part}</Todo> : part
      )}
    </p>
  )
}

function FaqItem({
  q,
  a,
  highlight,
  defaultOpen,
}: {
  q: string
  a: string
  highlight?: boolean
  defaultOpen?: boolean
}) {
  if (highlight) {
    return (
      <div className="bg-emerald-50 border-2 border-emerald-300 rounded-2xl p-6">
        <div className="flex items-start gap-3 mb-3">
          <span
            className="flex-shrink-0 w-7 h-7 bg-emerald-600 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5"
            aria-hidden="true"
          >
            ✓
          </span>
          <h3 className="font-bold text-emerald-950 text-base sm:text-lg leading-snug">{q}</h3>
        </div>
        <div className="pl-10">
          <AnswerText text={a} />
        </div>
      </div>
    )
  }

  return (
    <details className="group bg-white border border-gray-100 rounded-2xl overflow-hidden" open={defaultOpen}>
      <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none hover:bg-gray-50 transition-colors">
        <span className="font-semibold text-emerald-950 text-sm sm:text-base leading-snug">{q}</span>
        <span
          className="flex-shrink-0 w-6 h-6 rounded-full border border-emerald-200 text-emerald-600 flex items-center justify-center text-lg font-bold leading-none transition-transform group-open:rotate-45"
          aria-hidden="true"
        >
          +
        </span>
      </summary>
      <div className="px-6 pb-5">
        <AnswerText text={a} />
      </div>
    </details>
  )
}

function Section({
  title,
  items,
}: {
  title: string
  items: Array<{ q: string; a: string; highlight?: boolean }>
}) {
  return (
    <div>
      <h2 className="font-serif text-2xl font-bold text-emerald-950 mb-5 pb-3 border-b border-emerald-100">
        {title}
      </h2>
      <div className="space-y-3">
        {items.map((item) => (
          <FaqItem key={item.q} q={item.q} a={item.a} highlight={item.highlight} />
        ))}
      </div>
    </div>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function FaqPage() {
  return (
    <main>
      <Navbar />
      <JsonLd data={faqSchema(ALL_FAQ)} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-950 to-emerald-800 pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-emerald-400 font-semibold text-sm tracking-widest uppercase mb-3">
            No Fluff. No Spin.
          </p>
          <h1 className="font-serif text-5xl lg:text-6xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-emerald-200 text-lg">
            We answer the questions wary travellers actually ask — including the ones most
            operators avoid.
          </p>
        </div>
      </section>

      {/* Commission callout — pinned at the top as the most critical trust signal */}
      <section className="bg-white border-b border-gray-100 py-8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-emerald-950 rounded-2xl p-6 text-white flex gap-4">
            <span className="text-3xl flex-shrink-0" aria-hidden="true">🚫</span>
            <div>
              <p className="font-bold text-lg mb-1">Our No-Commission Promise</p>
              <p className="text-emerald-300 text-sm leading-relaxed">
                Our drivers earn a fixed salary. They are never paid commissions from shops,
                "government emporiums," or restaurants. Your itinerary is yours — no detours, no
                pressure, no third-party kickbacks. This is the most common concern for road travel
                in India, so we say it plainly.
              </p>
              <p className="mt-3 text-emerald-400 text-xs">
                See the full answer in the Safety section below ↓
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ sections */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          <Section title="Safety &amp; Trust" items={SAFETY} />
          <Section title="Booking &amp; Payment" items={BOOKING} />
          <Section title="On the Road" items={ON_THE_ROAD} />
        </div>
      </section>

      {/* Still have a question? */}
      <section className="py-14 bg-emerald-950 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-white mb-3">Still have a question?</h2>
          <p className="text-emerald-300 mb-8">
            We reply in {SITE.response.whatsapp} on WhatsApp and within {SITE.response.email} by
            email. Ask us anything — no question is too small.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={waUrl("Hi ShivShakti, I have a question about booking a tour.")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-6 py-3.5 rounded-xl transition-all"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Us
            </a>
            <Link
              href="/contact"
              className="flex items-center justify-center border-2 border-emerald-600 text-emerald-300 hover:bg-emerald-900 font-semibold px-6 py-3.5 rounded-xl transition-colors"
            >
              Send an Enquiry →
            </Link>
          </div>
          <p className="text-emerald-600 text-sm mt-6">
            Want the full booking terms?{' '}
            <Link href="/policies" className="text-emerald-400 hover:text-emerald-300 underline">
              Read our Policies page
            </Link>
            .
          </p>
        </div>
      </section>
    </main>
  )
}
