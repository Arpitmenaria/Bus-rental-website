'use client'

import dynamic from 'next/dynamic'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import { SITE, WA_DEFAULT, waUrl } from '@/lib/site'

const BusScene = dynamic(() => import('@/components/BusScene'), { ssr: false })

const WA_URL = WA_DEFAULT

const stats = [
  { value: '7+', label: 'Luxury Buses' },
  { value: '12', label: 'Years of Service' },
  { value: '5000+', label: 'Happy Tourists' },
  { value: '28', label: 'States Covered' },
]

const services = [
  {
    icon: '🛋️',
    title: 'AC Luxury Seater',
    desc: 'Plush recliner seats, individual charging ports, and panoramic windows for the ultimate road journey.',
    from: 'From ₹10/km',
  },
  {
    icon: '🛏️',
    title: 'AC Luxury Sleeper',
    desc: 'Private berths with curtains, reading lights, and premium bedding for overnight journeys.',
    from: 'From ₹18/km',
  },
  {
    icon: '🏰',
    title: 'Rajasthan Heritage Tour',
    desc: 'Curated circuits through forts, palaces, sand dunes, and desert towns with expert guides.',
    from: 'From ₹9,500',
  },
  {
    icon: '🗺️',
    title: 'All India Private Charter',
    desc: 'Custom itineraries anywhere in India with a dedicated bus, driver, and on-call support.',
    from: 'Custom pricing',
  },
]

const packages = [
  {
    title: 'Golden Rajasthan',
    duration: '7 Days',
    price: '₹28,000',
    route: 'Udaipur → Jodhpur → Jaisalmer → Jaipur',
    tag: 'Most Popular',
  },
  {
    title: 'Royal Heritage Express',
    duration: '5 Days',
    price: '₹18,500',
    route: 'Udaipur → Chittorgarh → Pushkar → Ajmer',
    tag: 'Cultural',
  },
  {
    title: 'Golden Triangle + Rajasthan',
    duration: '10 Days',
    price: '₹42,000',
    route: 'Delhi → Agra → Jaipur → Udaipur',
    tag: 'Premium',
  },
]

const trustPoints = [
  { icon: '📡', title: 'GPS Tracked', desc: 'Real-time tracking on every journey — share your live location with family.' },
  { icon: '🗣️', title: 'English-Speaking Drivers', desc: 'Fluent communicators who double as knowledgeable local guides.' },
  { icon: '💬', title: '24/7 WhatsApp Support', desc: 'Instant responses any time of day. We reply in under 5 minutes.' },
  { icon: '💰', title: 'Transparent Pricing', desc: 'No hidden charges ever. Full quote provided before confirmation.' },
]

const fleet = [
  { name: 'Volvo 9400 Sleeper', type: 'Sleeper', seats: '36 berths', price: '₹18/km' },
  { name: 'Volvo B11R', type: 'Sleeper', seats: '40 berths', price: '₹20/km' },
  { name: 'Scania Metabus', type: 'Seater', seats: '45 seats', price: '₹14/km' },
  { name: 'Volvo 9600 VIP', type: 'VIP', seats: '36 seats (2+1)', price: '₹25/km' },
]

const testimonials = [
  {
    name: 'James & Sarah Mitchell',
    country: '🇬🇧 United Kingdom',
    text: "ShivShakti made our Rajasthan trip absolutely magical. The Volvo sleeper was spotlessly clean, the driver knew every hidden gem, and they handled everything perfectly. 10/10 would recommend to any traveller.",
    rating: 5,
  },
  {
    name: 'Claire Dupont',
    country: '🇫🇷 France',
    text: "Très professionnel! We were a group of 12 from Paris and ShivShakti organised everything seamlessly — from Udaipur to Jaisalmer. The bus was luxurious and our driver Ramji was wonderful.",
    rating: 5,
  },
  {
    name: 'Michael & Emma Thompson',
    country: '🇦🇺 Australia',
    text: "Best decision we made for our India holiday. Transparent pricing, 24/7 support, and the bus was absolutely top class. We saw 6 Rajasthan cities in 7 days without any stress. Highly recommend!",
    rating: 5,
  },
]

export default function HomePage() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => {
      const hero = heroRef.current
      if (!hero) return
      const rect = hero.getBoundingClientRect()
      const total = hero.offsetHeight + window.innerHeight
      const scrolled = window.innerHeight - rect.top
      setScrollProgress(Math.min(1, Math.max(0, scrolled / total)))
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <main className="overflow-x-hidden">
      <Navbar />

      {/* ── HERO ── */}
      <section
        ref={heroRef}
        className="min-h-screen bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-800 relative flex items-center"
      >
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 w-full">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left */}
            <div className="order-2 lg:order-1">
              <span className="inline-block bg-emerald-500/20 text-emerald-300 text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-6 border border-emerald-500/30">
                Premium Bus Tours from Udaipur, Rajasthan
              </span>
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
                Discover India
                <span className="block text-emerald-400">in Luxury</span>
              </h1>
              <p className="text-emerald-200 text-lg leading-relaxed mb-8 max-w-lg">
                GPS-tracked luxury buses, English-speaking drivers, and expertly crafted itineraries across Rajasthan and all of India — tailored for discerning international travellers.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-4 gap-4 mb-10">
                {stats.map((s) => (
                  <div key={s.label} className="text-center">
                    <p className="font-serif text-3xl font-bold text-emerald-400">{s.value}</p>
                    <p className="text-emerald-300 text-xs mt-0.5 leading-tight">{s.label}</p>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-6 py-3.5 rounded-xl shadow-xl shadow-emerald-500/30 transition-all hover:-translate-y-0.5"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Book Now on WhatsApp
                </a>
                <Link
                  href="/rajasthan-tours"
                  className="flex items-center justify-center gap-2 border-2 border-emerald-400/60 text-emerald-300 hover:bg-emerald-400/10 font-semibold px-6 py-3.5 rounded-xl transition-all"
                >
                  Explore Tours →
                </Link>
              </div>
            </div>

            {/* Right — 3D Bus */}
            <div className="order-1 lg:order-2 h-[380px] sm:h-[460px] lg:h-[540px] rounded-2xl overflow-hidden ring-1 ring-emerald-500/30 shadow-2xl shadow-emerald-900/60">
              <BusScene scrollProgress={scrollProgress} />
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-emerald-400/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-emerald-400/70 rounded-full" />
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-emerald-600 font-semibold text-sm tracking-widest uppercase mb-2">What We Offer</p>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-emerald-950">
              Our Services
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="group p-6 rounded-2xl border border-gray-100 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-50 transition-all hover:-translate-y-1 bg-white"
              >
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="font-serif text-xl font-bold text-emerald-950 mb-2">{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{s.desc}</p>
                <p className="text-emerald-600 font-bold text-sm">{s.from}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TOUR PACKAGES ── */}
      <section className="py-20 bg-emerald-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-emerald-400 font-semibold text-sm tracking-widest uppercase mb-2">Handcrafted Itineraries</p>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-white">Featured Tour Packages</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {packages.map((p) => (
              <div key={p.title} className="relative bg-emerald-900/60 rounded-2xl overflow-hidden border border-emerald-700/40 hover:border-emerald-500/60 transition-all group">
                {p.tag && (
                  <span className="absolute top-4 right-4 bg-emerald-500 text-white text-xs font-bold px-2.5 py-1 rounded-full">
                    {p.tag}
                  </span>
                )}
                <div className="p-6">
                  <h3 className="font-serif text-2xl font-bold text-white mb-1">{p.title}</h3>
                  <p className="text-emerald-400 text-sm mb-4">{p.duration}</p>
                  <p className="text-emerald-300 text-sm mb-6 flex items-start gap-2">
                    <span className="text-emerald-500 mt-0.5">📍</span>
                    {p.route}
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-emerald-400 text-xs">Per person from</p>
                      <p className="font-serif text-3xl font-bold text-white">{p.price}</p>
                    </div>
                    <a
                      href={waUrl(`Hi, I'm interested in the ${p.title} tour package.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-4 py-2.5 rounded-xl text-sm transition-colors"
                    >
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/rajasthan-tours"
              className="inline-flex items-center gap-2 border-2 border-emerald-500/60 text-emerald-400 hover:bg-emerald-500/10 font-semibold px-8 py-3 rounded-xl transition-all"
            >
              View All Rajasthan Packages →
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-emerald-600 font-semibold text-sm tracking-widest uppercase mb-2">Why ShivShakti?</p>
              <h2 className="font-serif text-4xl lg:text-5xl font-bold text-emerald-950 mb-8">
                The Gold Standard in Indian Travel
              </h2>
              <div className="space-y-5">
                {trustPoints.map((t) => (
                  <div key={t.title} className="flex gap-4 p-4 bg-white rounded-xl border border-gray-100 hover:border-emerald-200 transition-colors">
                    <span className="text-2xl flex-shrink-0">{t.icon}</span>
                    <div>
                      <h3 className="font-bold text-emerald-950 mb-0.5">{t.title}</h3>
                      <p className="text-gray-600 text-sm">{t.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-emerald-600 font-semibold text-sm tracking-widest uppercase mb-4">Our Fleet</p>
              <div className="space-y-3">
                {fleet.map((f) => (
                  <div key={f.name} className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-100">
                    <div>
                      <p className="font-bold text-emerald-950">{f.name}</p>
                      <p className="text-sm text-gray-500">{f.type} · {f.seats}</p>
                    </div>
                    <span className="text-emerald-600 font-bold text-sm bg-emerald-50 px-3 py-1 rounded-lg">{f.price}</span>
                  </div>
                ))}
                <Link
                  href="/fleet"
                  className="block text-center text-emerald-600 hover:text-emerald-700 font-semibold text-sm mt-4 py-3 rounded-xl border border-emerald-200 hover:bg-emerald-50 transition-colors"
                >
                  View Full Fleet →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-emerald-600 font-semibold text-sm tracking-widest uppercase mb-2">Stories from Travellers</p>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-emerald-950">What Our Guests Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i} className="text-amber-400 text-lg">★</span>
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-5 italic">"{t.text}"</p>
                <div>
                  <p className="font-bold text-emerald-950">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.country}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="py-20 bg-gradient-to-r from-emerald-700 via-emerald-600 to-emerald-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-white mb-4">
            Ready to Explore India?
          </h2>
          <p className="text-emerald-100 text-lg mb-10 max-w-2xl mx-auto">
            Send us your travel dates and group size and we'll craft a personalised itinerary with full pricing within 2 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-white text-emerald-700 font-bold px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-0.5 text-lg"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Us Now
            </a>
            <a
              href={`mailto:${SITE.email.main}`}
              className="flex items-center justify-center gap-2 bg-emerald-800/40 border-2 border-white/40 text-white font-bold px-8 py-4 rounded-xl hover:bg-emerald-800/60 transition-all text-lg"
            >
              ✉ Email Us
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-emerald-950 text-emerald-300 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 bg-emerald-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-serif font-bold text-lg">S</span>
                </div>
                <div>
                  <p className="font-serif font-bold text-white text-base leading-none">ShivShakti</p>
                  <p className="text-emerald-400 text-xs tracking-widest uppercase">Tourist</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed mb-4">
                Udaipur's most trusted luxury bus rental and tour operator serving international visitors since 2012.
              </p>
              <p className="text-xs text-emerald-500">⭐ 4.9/5 · 500+ reviews</p>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-bold text-white mb-4 uppercase text-xs tracking-widest">Services</h4>
              <ul className="space-y-2 text-sm">
                {['AC Luxury Seater', 'AC Luxury Sleeper', 'VIP Private Charter', 'Wedding Buses', 'Corporate Tours', 'Educational Trips'].map(s => (
                  <li key={s}><span className="hover:text-emerald-200 cursor-pointer transition-colors">{s}</span></li>
                ))}
              </ul>
            </div>

            {/* Destinations */}
            <div>
              <h4 className="font-bold text-white mb-4 uppercase text-xs tracking-widest">Destinations</h4>
              <ul className="space-y-2 text-sm">
                {['Udaipur', 'Jaipur', 'Jaisalmer', 'Jodhpur', 'Delhi & Agra', 'Varanasi', 'Goa & Mumbai'].map(d => (
                  <li key={d}><span className="hover:text-emerald-200 cursor-pointer transition-colors">{d}</span></li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold text-white mb-4 uppercase text-xs tracking-widest">Contact</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 flex-shrink-0 mt-0.5">📍</span>
                  <span>Near Udaipur City Railway Station, Udaipur, Rajasthan 313001</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-500">📞</span>
                  <a href={`tel:+${SITE.phone.wa}`} className="hover:text-white transition-colors">{SITE.phone.display}</a>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-500">✉</span>
                  <a href={`mailto:${SITE.email.main}`} className="hover:text-white transition-colors">{SITE.email.main}</a>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-500">🕐</span>
                  <span>24/7 WhatsApp Support</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-emerald-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
            <p className="text-xs text-emerald-600">© 2024 ShivShakti Tourist. All rights reserved.</p>
            <p className="text-xs text-emerald-600">Made with ♥ in Udaipur, Rajasthan, India</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
