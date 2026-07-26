import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import JsonLd from '@/components/JsonLd'
import { SITE, waUrl } from '@/lib/site'
import { orgSchema } from '@/lib/schema'

const PAGE_URL = `${SITE.url}/about`

export const metadata: Metadata = {
  title: `About ${SITE.name} — Udaipur Luxury Bus Operator Since ${SITE.founded}`,
  description: `Est. ${SITE.founded} in Udaipur. ${SITE.name} has served ${SITE.stats.tourists} international travellers across ${SITE.stats.states} states. Meet our team and read our story.`,
  keywords: [
    'about ShivShakti Tourist',
    'Udaipur tour operator history',
    'trusted bus company Rajasthan',
    'luxury bus operator Udaipur India',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: `About ${SITE.name} — ${SITE.stats.years} Years Serving International Travellers`,
    description: `Founded in ${SITE.founded} by Kailash Chandra Menaria, ${SITE.name} is Udaipur's most trusted luxury bus operator. ${SITE.stats.tourists} guests from ${SITE.stats.countries} countries served.`,
    url: PAGE_URL,
    type: 'website',
    siteName: SITE.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: `About ${SITE.name} — Udaipur Luxury Bus Operator`,
    description: `Est. ${SITE.founded}. ${SITE.stats.tourists} international guests. ${SITE.stats.years} years of service. Meet the team behind Rajasthan's most trusted bus tours.`,
  },
}

const WA = waUrl("Hi ShivShakti, I'd like to learn more about your services.")

const stats = [
  { value: '7', label: 'Luxury Buses', icon: '🚌' },
  { value: '5,000+', label: 'Tourists Served', icon: '🌍' },
  { value: '12', label: 'Years in Business', icon: '📅' },
  { value: '28', label: 'States Covered', icon: '🗺️' },
  { value: '4.9', label: 'Average Rating', icon: '⭐' },
  { value: '0', label: 'Safety Incidents', icon: '🛡️' },
]

const timeline = [
  { year: '2002', title: 'Founded in Udaipur', desc: 'Kailash Chandra Menaria starts ShivShakti Tourist with a single Tata bus and a dream of serving international travellers.' },
  { year: '2015', title: 'First Sleeper Bus Acquired', desc: "The first AC sleeper coach joins the fleet — signalling the company's move into luxury tourism." },
  { year: '2018', title: 'All India Operations', desc: 'Team expands to 12 people, operations extend beyond Rajasthan to cover Delhi, Agra, Varanasi, and Mumbai routes.' },
  { year: '2021', title: 'GPS & Digital Upgrade', desc: 'All buses equipped with real-time GPS tracking and WhatsApp-based booking support. Paperless documentation.' },
  { year: '2023', title: 'Ultra Luxury Fleet Expansion', desc: 'The 58-seater push-back ultra luxury coach and 48-sleeper ultra luxury bus join the fleet. 5000th international tourist milestone achieved.' },
  { year: '2025', title: 'Award & Recognition', desc: 'Rated #1 luxury bus operator in Rajasthan by multiple international travel blogs and tour agencies.' },
]

const team = [
  {
    emoji: '👨‍💼',
    name: 'Kailash Chandra Menaria',
    role: 'Owner',
  },
  {
    emoji: '👨‍💻',
    name: 'Arpit Menaria',
    role: 'Head of Operations (Digital & Vehicle Management)',
  },
  {
    emoji: '👨‍✈️',
    name: 'Prakash Kumar',
    role: 'Senior Driver',
  },
  {
    emoji: '👩‍⚕️',
    name: 'Dr Nikita',
    role: 'Customer Experience Manager',
  },
]

const certifications = [
  { icon: '🏆', label: 'Ministry of Tourism Approved' },
  { icon: '✅', label: 'Rajasthan Tourism Certified' },
  { icon: '🛡️', label: 'Comprehensive Fleet Insurance' },
  { icon: '🔒', label: 'Police Verified Drivers' },
  { icon: '📡', label: 'GPS Compliant (AIS 140)' },
  { icon: '🌿', label: 'Green Travel Initiative Member' },
]

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <JsonLd data={orgSchema()} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-950 to-emerald-800 pt-32 pb-24 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-emerald-400 font-semibold text-sm tracking-widest uppercase mb-4">Est. 2002 · Udaipur, Rajasthan</p>
          <h1 className="font-serif text-5xl lg:text-7xl font-bold text-white mb-6">Our Story</h1>
          <p className="text-emerald-200 text-xl leading-relaxed max-w-3xl mx-auto">
            ShivShakti Tourist was born from a single conviction: that international visitors deserve to experience India not just as tourists, but as honoured guests — with comfort, safety, and genuine human connection at every mile.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center p-5 rounded-2xl bg-emerald-50 border border-emerald-100">
                <div className="text-3xl mb-2">{s.icon}</div>
                <p className="font-serif text-3xl font-bold text-emerald-700">{s.value}</p>
                <p className="text-gray-500 text-sm mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-emerald-950 mb-6">The Founding Story</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              In 2002, Kailash Chandra Menaria — a young man from Udaipur with a passion for his homeland — noticed that international tourists were arriving in Rajasthan but struggling to explore it properly. Hired cabs were unreliable, language barriers were frustrating, and the true magic of places like Kumbhalgarh, Ranakpur, and Sam Dunes remained out of reach.
            </p>
            <p>
              He invested his savings in a single Tata bus, learned English from YouTube videos and curious tourists, and started offering guided day trips out of Udaipur. Word spread quickly. A French couple told their friends. A British travel blogger wrote a glowing post. Within two years, ShivShakti Tourist had a waiting list.
            </p>
            <p>
              Today, with seven vehicles, a team of 20, and guests from over 40 countries, the mission remains unchanged: give every international visitor the royal Rajasthan experience they deserve — with zero stress, zero hidden costs, and a driver who feels like a friend by journey's end.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-emerald-950 mb-10 text-center">Our Journey</h2>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-emerald-200 hidden sm:block" />
            <div className="space-y-8">
              {timeline.map((item) => (
                <div key={item.year} className="sm:pl-16 relative">
                  <div className="hidden sm:flex absolute left-0 top-1 w-12 h-12 bg-emerald-600 text-white rounded-full items-center justify-center font-bold text-sm">
                    {item.year.slice(2)}
                  </div>
                  <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
                    <span className="text-emerald-600 font-bold text-sm">{item.year}</span>
                    <h3 className="font-serif text-xl font-bold text-emerald-950 mt-0.5 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-emerald-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-white mb-2">Meet the Team</h2>
            <p className="text-emerald-400">The people who make every journey exceptional</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div key={member.name} className="bg-emerald-900/60 rounded-2xl p-6 border border-emerald-700/40 text-center">
                <div className="text-5xl mb-3">{member.emoji}</div>
                <h3 className="font-serif text-lg font-bold text-white mb-0.5">{member.name}</h3>
                <p className="text-emerald-400 text-xs font-semibold uppercase tracking-wide">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-emerald-950 text-center mb-10">Certifications & Accreditations</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {certifications.map((c) => (
              <div key={c.label} className="flex items-center gap-3 p-4 bg-emerald-50 rounded-xl border border-emerald-100">
                <span className="text-2xl">{c.icon}</span>
                <span className="text-sm font-semibold text-emerald-900">{c.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-emerald-700 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-white mb-3">Travel with People Who Care</h2>
          <p className="text-emerald-100 mb-8">Join 5000+ travellers who trusted ShivShakti Tourist for the journey of their lives.</p>
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-emerald-700 font-bold px-8 py-4 rounded-xl shadow-xl hover:-translate-y-0.5 transition-all"
          >
            Get in Touch →
          </a>
        </div>
      </section>
    </main>
  )
}
