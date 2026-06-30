import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import JsonLd from '@/components/JsonLd'
import TrustBar from '@/components/TrustBar'
import ReviewsSection from '@/components/ReviewsSection'
import CredentialsStrip from '@/components/CredentialsStrip'
import AnalyticsLink from '@/components/AnalyticsLink'
import { SITE, waUrl } from '@/lib/site'
import { orgSchema } from '@/lib/schema'
import { blogPosts } from '@/lib/blog-posts'

const PAGE_URL = SITE.url

export const metadata: Metadata = {
  title: `${SITE.name} — Luxury Bus Tours & Private Hire from Udaipur, Rajasthan`,
  description:
    'GPS-tracked luxury buses, English-speaking drivers and curated tours across Rajasthan and all of India. Based in Udaipur since 2012. Get a personalised quote in 2 hours.',
  keywords: [
    'luxury bus tour Udaipur',
    'private bus hire Rajasthan',
    'Rajasthan tour operator',
    'India private coach tour',
    'Udaipur tour package',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: `${SITE.name} — Luxury Bus Tours from Udaipur, Rajasthan`,
    description:
      `Premium private bus hire and guided tours across India. ${SITE.stats.buses}+ vehicles, ${SITE.stats.years} years experience, ${SITE.stats.tourists} international guests. Request a custom itinerary today.`,
    url: PAGE_URL,
    type: 'website',
    siteName: SITE.name,
    images: [
      {
        url: `${SITE.url}/og-image.jpg`, // TODO: add a real 1200×630 OG image
        width: 1200,
        height: 630,
        alt: `${SITE.name} — Luxury Bus Tours from Udaipur`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE.name} — Luxury Bus Tours from Udaipur, Rajasthan`,
    description:
      'GPS-tracked luxury buses, English-speaking drivers, curated tours. 12 years, 5,000+ international guests. Get a quote in 2 hours.',
  },
}

// ── Page-level data ──────────────────────────────────────────────────────────

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
  { icon: '💬', title: '24/7 WhatsApp Support', desc: `Instant responses any time of day. We reply in ${SITE.response.whatsapp}.` },
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
    text: 'ShivShakti made our Rajasthan trip absolutely magical. The Volvo sleeper was spotlessly clean, the driver knew every hidden gem, and they handled everything perfectly. 10/10 would recommend to any traveller.',
    rating: 5,
  },
  {
    name: 'Claire Dupont',
    country: '🇫🇷 France',
    text: 'Très professionnel! We were a group of 12 from Paris and ShivShakti organised everything seamlessly — from Udaipur to Jaisalmer. The bus was luxurious and our driver Ramji was wonderful.',
    rating: 5,
  },
  {
    name: 'Michael & Emma Thompson',
    country: '🇦🇺 Australia',
    text: 'Best decision we made for our India holiday. Transparent pricing, 24/7 support, and the bus was absolutely top class. We saw 6 Rajasthan cities in 7 days without any stress. Highly recommend!',
    rating: 5,
  },
]

const WA_ICON_PATH =
  'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z'

// ── Page ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
  const WA_DEFAULT_URL = waUrl("Hi ShivShakti Tourist, I'd like to book a tour.")
  const featuredBlogPosts = blogPosts.slice(0, 3)

  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <JsonLd data={orgSchema()} />

      {/* ── HERO (client component — 3D scene + scroll tracking) ── */}
      <HeroSection />

      {/* ── TRUST BAR ── */}
      <TrustBar variant="dark" />

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
                <div className="text-4xl mb-4" aria-hidden="true">{s.icon}</div>
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
                    <span className="text-emerald-500 mt-0.5" aria-hidden="true">📍</span>
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
                    <span className="text-2xl flex-shrink-0" aria-hidden="true">{t.icon}</span>
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
              <figure key={t.name} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="flex gap-0.5 mb-4" aria-label={`${t.rating} out of 5 stars`}>
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i} className="text-amber-400 text-lg" aria-hidden="true">★</span>
                  ))}
                </div>
                <blockquote className="text-gray-700 leading-relaxed mb-5 italic">"{t.text}"</blockquote>
                <figcaption>
                  <p className="font-bold text-emerald-950">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.country}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ── REVIEWS (embed slots + aggregate rating) ── */}
      <ReviewsSection includeJsonLd={false} />

      {/* ── FROM THE BLOG ── */}
      <section className="py-16 bg-emerald-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <div>
              <p className="text-emerald-400 font-semibold text-sm tracking-widest uppercase mb-1">Travel Guides</p>
              <h2 className="font-serif text-3xl font-bold text-white">From Our Blog</h2>
            </div>
            <Link href="/blog" className="text-emerald-400 hover:text-emerald-300 text-sm font-semibold transition-colors hidden sm:block">
              All Articles →
            </Link>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            {featuredBlogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-emerald-900/50 rounded-xl p-5 border border-emerald-700/40 hover:border-emerald-500/60 transition-all"
              >
                <span className="text-emerald-500 text-xs font-semibold uppercase tracking-wide block mb-2">
                  {post.category}
                </span>
                <h3 className="font-serif font-bold text-white text-base group-hover:text-emerald-300 transition-colors leading-snug mb-3">
                  {post.title}
                </h3>
                <p className="text-emerald-400 text-xs">{post.readingTime} min read</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-6 sm:hidden">
            <Link href="/blog" className="text-emerald-400 text-sm font-semibold">View All Articles →</Link>
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
            Send us your travel dates and group size and we'll craft a personalised itinerary
            with full pricing within 2 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <AnalyticsLink
              href={WA_DEFAULT_URL}
              event="wa_click"
              source="cta-banner"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-white text-emerald-700 font-bold px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-0.5 text-lg"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d={WA_ICON_PATH} />
              </svg>
              WhatsApp Us Now
            </AnalyticsLink>
            <AnalyticsLink
              href={`mailto:${SITE.email.main}`}
              event="email_click"
              source="cta-banner"
              className="flex items-center justify-center gap-2 bg-emerald-800/40 border-2 border-white/40 text-white font-bold px-8 py-4 rounded-xl hover:bg-emerald-800/60 transition-all text-lg"
            >
              ✉ Email Us
            </AnalyticsLink>
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
                  <span className="text-white font-serif font-bold text-lg" aria-hidden="true">S</span>
                </div>
                <div>
                  <p className="font-serif font-bold text-white text-base leading-none">{SITE.name.split(' ')[0]}</p>
                  <p className="text-emerald-400 text-xs tracking-widest uppercase">Tourist</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed mb-4">
                Udaipur's most trusted luxury bus rental and tour operator serving international visitors since {SITE.founded}.
              </p>
              <p className="text-xs text-emerald-500">⭐ {SITE.stats.rating}/5 · {SITE.stats.reviewCount}+ reviews</p>
            </div>

            {/* Navigate */}
            <div>
              <h3 className="font-bold text-white mb-4 uppercase text-xs tracking-widest">Explore</h3>
              <ul className="space-y-2 text-sm">
                {[
                  { label: 'Our Fleet', href: '/fleet' },
                  { label: 'Rajasthan Tours', href: '/rajasthan-tours' },
                  { label: 'India Tours', href: '/india-tours' },
                  { label: 'Private Charter', href: '/charter' },
                  { label: 'About Us', href: '/about' },
                  { label: 'FAQ', href: '/faq' },
                  { label: 'Booking Policies', href: '/policies' },
                ].map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="hover:text-emerald-200 transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Blog */}
            <div>
              <h3 className="font-bold text-white mb-4 uppercase text-xs tracking-widest">Travel Guides</h3>
              <ul className="space-y-2 text-sm">
                {blogPosts.slice(0, 5).map((post) => (
                  <li key={post.slug}>
                    <Link href={`/blog/${post.slug}`} className="hover:text-emerald-200 transition-colors leading-snug block">
                      {post.title.split(':')[0]}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/blog" className="text-emerald-500 hover:text-emerald-300 transition-colors font-medium">
                    All Articles →
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-bold text-white mb-4 uppercase text-xs tracking-widest">Contact</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 flex-shrink-0 mt-0.5" aria-hidden="true">📍</span>
                  <span>{SITE.address.street}, {SITE.address.city}, {SITE.address.state} {SITE.address.pincode}</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-500" aria-hidden="true">📞</span>
                  <AnalyticsLink href={`tel:+${SITE.phone.wa}`} event="phone_click" source="footer" className="hover:text-white transition-colors">{SITE.phone.display}</AnalyticsLink>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-500" aria-hidden="true">✉</span>
                  <AnalyticsLink href={`mailto:${SITE.email.main}`} event="email_click" source="footer" className="hover:text-white transition-colors">{SITE.email.main}</AnalyticsLink>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-500" aria-hidden="true">🕐</span>
                  <span>24/7 WhatsApp Support</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-emerald-800 pt-6">
            <CredentialsStrip />
            <div className="flex flex-col sm:flex-row justify-between items-center gap-3 mt-4">
              <p className="text-xs text-emerald-600">© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
              <div className="flex items-center gap-4 text-xs text-emerald-600">
                <Link href="/faq" className="hover:text-emerald-400 transition-colors">FAQ</Link>
                <Link href="/policies" className="hover:text-emerald-400 transition-colors">Policies</Link>
                <span>Made with ♥ in Udaipur</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
