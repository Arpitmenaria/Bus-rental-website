import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import JsonLd from '@/components/JsonLd'
import { SITE, waUrl } from '@/lib/site'
import { orgSchema } from '@/lib/schema'

const PAGE_URL = `${SITE.url}/charter`

export const metadata: Metadata = {
  title: 'Private Bus Charter Rajasthan — Weddings, Corporate, Groups | ShivShakti Tourist',
  description:
    'Private bus charter across Rajasthan and India for weddings, corporate groups, airport transfers and educational tours. Dedicated bus, driver and coordinator. Custom quotes in 2 hours.',
  keywords: [
    'private bus charter Rajasthan',
    'wedding bus hire Udaipur',
    'corporate bus charter India',
    'group transport Rajasthan',
    'private bus hire India foreigners',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Private Bus Charter for Any Occasion — ShivShakti Tourist, Rajasthan',
    description:
      'Wedding processions, corporate charters, airport transfers, yoga retreats and film shoots. Dedicated bus, driver and on-board coordinator. Transparent pricing from ₹10/km.',
    url: PAGE_URL,
    type: 'website',
    siteName: SITE.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Private Bus Charter — ShivShakti Tourist, Udaipur Rajasthan',
    description:
      'Weddings, corporate groups, educational tours and more. Your bus, your schedule. Custom quotes in 2 hours.',
  },
}

const WA = waUrl("Hi ShivShakti, I'm interested in a private charter.")

const charterTypes = [
  {
    icon: '💍',
    title: 'Wedding & Baraat',
    desc: 'Make your baraat procession legendary. Our floral-decorated luxury coaches carry wedding guests in royal style — with music, lighting, and a professional coordinator.',
    features: ['Custom floral decoration', 'Festive lighting & LED strips', 'Sound system & DJ ready', 'Co-ordinator on board', 'Multiple bus options'],
    price: 'From ₹35,000/day',
    gradient: 'from-rose-50 to-pink-50',
    border: 'border-rose-200',
    badge: 'bg-rose-100 text-rose-700',
    accent: 'text-rose-600',
  },
  {
    icon: '💼',
    title: 'Corporate Groups',
    desc: 'Punctual, professional, and branded. Our corporate charter service is trusted by Fortune 500 companies for team outings, incentive trips, and conference transfers.',
    features: ['WiFi on board', 'USB charging at every seat', 'Branded seat covers available', 'Invoice & GST billing', 'Minimum 4-hour booking'],
    price: 'From ₹18,000/day',
    gradient: 'from-slate-50 to-blue-50',
    border: 'border-slate-200',
    badge: 'bg-slate-100 text-slate-700',
    accent: 'text-slate-700',
  },
  {
    icon: '🎓',
    title: 'Educational Tours',
    desc: 'Safe, supervised transport for schools and colleges. Our drivers are background-checked and trained in student safety protocols.',
    features: ['CCTV cameras on board', 'Speed-limited vehicles', 'Female co-ordinator option', 'School-rate discounts', 'NOC documentation support'],
    price: 'From ₹10/km',
    gradient: 'from-sky-50 to-cyan-50',
    border: 'border-sky-200',
    badge: 'bg-sky-100 text-sky-700',
    accent: 'text-sky-700',
  },
  {
    icon: '✈️',
    title: 'Airport Transfers',
    desc: 'Seamless group transfers to/from Udaipur (UDR), Jaipur (JAI), Delhi (DEL) and all major airports. Meet & greet service available.',
    features: ['Flight tracking (no missed pickup)', 'Meet & greet with name board', 'Large luggage capacity', 'Early morning & midnight runs', 'Competitive group rates'],
    price: 'From ₹4,500',
    gradient: 'from-emerald-50 to-teal-50',
    border: 'border-emerald-200',
    badge: 'bg-emerald-100 text-emerald-700',
    accent: 'text-emerald-700',
  },
  {
    icon: '🎬',
    title: 'Film & Media Shoots',
    desc: 'The rolling film set of choice for Bollywood and international productions. Spacious, adaptable interiors with driver who understands production schedules.',
    features: ['Camera-friendly interiors', 'Custom paint/wrap available', 'Prop storage capacity', 'Flexible daily hire', 'Reference library of past projects'],
    price: 'From ₹22,000/day',
    gradient: 'from-violet-50 to-purple-50',
    border: 'border-violet-200',
    badge: 'bg-violet-100 text-violet-700',
    accent: 'text-violet-700',
  },
  {
    icon: '🧘',
    title: 'Yoga & Wellness Retreats',
    desc: 'Transport for wellness groups to Rishikesh, Kerala, and Udaipur retreat centres. Quiet, calming interiors to begin your journey to stillness.',
    features: ['Meditation-friendly ambience', 'Healthy snack stops planned', 'Yoga mat storage racks', 'Rishikesh & Goa specialists', 'Weekly retreat runs available'],
    price: 'From ₹14/km',
    gradient: 'from-lime-50 to-green-50',
    border: 'border-lime-200',
    badge: 'bg-lime-100 text-lime-700',
    accent: 'text-lime-700',
  },
]

const processSteps = [
  { step: '01', title: 'Send Enquiry', desc: 'WhatsApp or email us with your date, group size, and destination.' },
  { step: '02', title: 'Get Quote (2 hrs)', desc: 'We send a detailed, itemised quote with zero hidden charges.' },
  { step: '03', title: 'Confirm & Pay', desc: '30% advance via bank transfer or UPI. Balance on travel day.' },
  { step: '04', title: 'Enjoy the Ride', desc: 'Your dedicated bus, driver, and coordinator are ready to go.' },
]

export default function CharterPage() {
  return (
    <main>
      <Navbar />
      <JsonLd data={orgSchema()} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-emerald-400 font-semibold text-sm tracking-widest uppercase mb-3">Bespoke Transport</p>
          <h1 className="font-serif text-5xl lg:text-6xl font-bold text-white mb-4">Private Charter</h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Your bus, your schedule, your way. We provide the vehicle, the driver, and complete peace of mind for any occasion.
          </p>
        </div>
      </section>

      {/* Charter types */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {charterTypes.map((c) => (
              <div
                key={c.title}
                className={`bg-gradient-to-br ${c.gradient} rounded-2xl p-6 border ${c.border} hover:shadow-lg transition-all hover:-translate-y-1`}
              >
                <div className="text-4xl mb-3">{c.icon}</div>
                <h2 className="font-serif text-xl font-bold text-gray-900 mb-1">{c.title}</h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{c.desc}</p>
                <ul className="space-y-1 mb-5">
                  {c.features.map((f) => (
                    <li key={f} className={`flex items-start gap-2 text-xs ${c.accent}`}>
                      <span className="flex-shrink-0 mt-0.5">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <span className={`text-sm font-bold ${c.accent}`}>{c.price}</span>
                  <a
                    href={waUrl(`Hi, I'm interested in ${c.title} charter.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${c.badge} font-semibold px-3 py-1.5 rounded-lg text-xs transition-colors hover:opacity-80`}
                  >
                    Enquire
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-emerald-950">How It Works</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((s) => (
              <div key={s.step} className="text-center">
                <div className="w-12 h-12 bg-emerald-600 text-white rounded-2xl flex items-center justify-center font-bold text-lg mx-auto mb-3">
                  {s.step}
                </div>
                <h3 className="font-bold text-emerald-950 mb-1">{s.title}</h3>
                <p className="text-gray-500 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dark violet CTA */}
      <section className="py-16 bg-gradient-to-r from-violet-900 via-violet-800 to-violet-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-4">
            Tell Us What You Need
          </h2>
          <p className="text-violet-200 text-lg mb-8 max-w-xl mx-auto">
            Every charter is unique. Share your requirements and we'll build a solution that fits — within your budget, on your timeline.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-white text-violet-800 font-bold px-8 py-4 rounded-xl shadow-xl hover:-translate-y-0.5 transition-all"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Charter Enquiry
            </a>
            <a
              href={`mailto:${SITE.email.charter}`}
              className="flex items-center justify-center gap-2 border-2 border-white/40 text-white font-bold px-8 py-4 rounded-xl hover:bg-white/10 transition-all"
            >
              ✉ Email Us
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
