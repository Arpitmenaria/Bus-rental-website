import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import JsonLd from '@/components/JsonLd'
import { SITE, waUrl } from '@/lib/site'
import { orgSchema, indiaTourListSchema } from '@/lib/schema'

const PAGE_URL = `${SITE.url}/india-tours`

export const metadata: Metadata = {
  title: 'All India Tour Packages by Private Luxury Bus | ShivShakti Tourist',
  description:
    'Golden Triangle, Himalayan Explorer, Spiritual India and more — private luxury bus tours across all of India from ₹22,000 per person. Custom multi-city itineraries available.',
  keywords: [
    'Golden Triangle bus tour',
    'India tour by private bus',
    'all India tour packages',
    'Golden Triangle tour from Udaipur',
    'North India private coach tour',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'All India Tours by Private Bus — ShivShakti Tourist, Udaipur',
    description:
      'From the Taj Mahal to Kerala backwaters — travel India by private luxury bus. 6 handcrafted multi-city packages from ₹22,000. Fully custom itineraries available.',
    url: PAGE_URL,
    type: 'website',
    siteName: SITE.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'All India Tour Packages by Private Bus — ShivShakti Tourist',
    description:
      'Golden Triangle, Himalayas, Spiritual India and more. 6 packages from ₹22,000. Custom itineraries available.',
  },
}

const WA = waUrl("Hi ShivShakti, I'm interested in an All India tour package.")

const packages = [
  {
    title: 'Golden Triangle',
    duration: '6 Days / 5 Nights',
    price: '₹22,000',
    route: 'Delhi → Agra → Jaipur → Delhi',
    gradient: 'from-amber-500 to-orange-600',
    tag: 'Classic',
    highlights: ['Taj Mahal sunrise visit', 'Qutub Minar & India Gate', 'Amber Fort jeep ride', 'Delhi Street Food Tour', 'Fatehpur Sikri visit'],
    desc: "India's most iconic circuit — the three crown jewels of North India connected by our luxury coach.",
  },
  {
    title: 'Golden Triangle + Udaipur',
    duration: '8 Days / 7 Nights',
    price: '₹32,000',
    route: 'Delhi → Agra → Jaipur → Udaipur → Delhi',
    gradient: 'from-teal-600 to-emerald-700',
    tag: 'Most Popular',
    highlights: ['All Golden Triangle sites', 'City Palace Udaipur', 'Lake Pichola sunset cruise', 'Kumbhalgarh day trip', 'Jagdish Temple & bazaar'],
    desc: 'The classic triangle extended with the "Venice of the East" — a perfect introduction to royal Rajasthan.',
  },
  {
    title: 'North India Heritage',
    duration: '12 Days / 11 Nights',
    price: '₹45,000',
    route: 'Delhi → Amritsar → Shimla → Agra → Varanasi → Delhi',
    gradient: 'from-violet-600 to-purple-800',
    tag: 'Comprehensive',
    highlights: ['Golden Temple Amritsar', 'Wagah Border ceremony', 'Toy Train Shimla', 'Taj Mahal at dawn', 'Ganges Aarti Varanasi', 'Sarnath Buddhist site'],
    desc: "A sweeping journey through North India's most spiritually and historically charged destinations.",
  },
  {
    title: 'Spiritual India',
    duration: '10 Days / 9 Nights',
    price: '₹38,000',
    route: 'Delhi → Rishikesh → Haridwar → Varanasi → Bodh Gaya → Delhi',
    gradient: 'from-orange-600 to-rose-700',
    tag: 'Spiritual',
    highlights: ['Evening Ganga Aarti Haridwar', 'Yoga retreat in Rishikesh', 'Banaras Ghats boat at sunrise', 'Mahabodhi Temple Bodh Gaya', 'Sarnath Deer Park', 'Vindhyachal Temple'],
    desc: 'Follow the sacred rivers and ancient shrines that have drawn seekers from every corner of the world for centuries.',
  },
  {
    title: 'Himalayan Explorer',
    duration: '14 Days / 13 Nights',
    price: '₹52,000',
    route: 'Delhi → Manali → Leh → Nubra → Pangong → Delhi',
    gradient: 'from-slate-600 to-blue-800',
    tag: 'Adventure',
    highlights: ['Rohtang Pass & Solang Valley', 'Leh Palace & Shanti Stupa', 'Nubra Valley camel safari', 'Pangong Lake at sunrise', "Khardung La (world's highest motorable road)", 'Tibetan monastery stays'],
    desc: "One of India's most dramatic road journeys — through high-altitude passes, lunar landscapes and turquoise lakes.",
  },
  {
    title: 'India Grand Odyssey',
    duration: '21 Days / 20 Nights',
    price: '₹95,000',
    route: 'Delhi → Rajasthan → Mumbai → Goa → Kerala',
    gradient: 'from-emerald-700 to-emerald-950',
    tag: 'Grand Tour',
    highlights: ['Complete Rajasthan circuit', 'Gateway of India Mumbai', 'Goa beaches & colonial old city', 'Kerala backwaters houseboat', 'Munnar tea plantations', 'Periyar wildlife sanctuary'],
    desc: "Three extraordinary weeks covering India's history, deserts, coasts and jungles — the ultimate Grand Tour.",
  },
]

const destinations = [
  { name: 'Delhi', icon: '🏛️' },
  { name: 'Agra', icon: '🕌' },
  { name: 'Varanasi', icon: '🪔' },
  { name: 'Amritsar', icon: '⭐' },
  { name: 'Rishikesh', icon: '🧘' },
  { name: 'Manali', icon: '🏔️' },
  { name: 'Mumbai', icon: '🌆' },
  { name: 'Goa', icon: '🏖️' },
  { name: 'Kerala', icon: '🌴' },
  { name: 'Jaipur', icon: '🏰' },
  { name: 'Udaipur', icon: '💧' },
  { name: 'Leh', icon: '❄️' },
]

export default function IndiaToursPage() {
  return (
    <main>
      <Navbar />
      <JsonLd data={orgSchema()} />
      <JsonLd data={indiaTourListSchema(packages)} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-violet-950 via-indigo-900 to-emerald-900 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-violet-400 font-semibold text-sm tracking-widest uppercase mb-3">28 States · One Bus</p>
          <h1 className="font-serif text-5xl lg:text-6xl font-bold text-white mb-4">All India Tours</h1>
          <p className="text-violet-200 text-lg max-w-2xl mx-auto">
            Journey beyond Rajasthan — our luxury coaches cover the length and breadth of India, from Himalayan passes to Kerala's backwaters.
          </p>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {packages.map((pkg) => (
              <div key={pkg.title} className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
                <div className={`bg-gradient-to-br ${pkg.gradient} p-6 text-white relative`}>
                  {pkg.tag && (
                    <span className="absolute top-4 right-4 bg-white/20 text-white text-xs font-bold px-2.5 py-1 rounded-full">
                      {pkg.tag}
                    </span>
                  )}
                  <h2 className="font-serif text-xl font-bold mb-1">{pkg.title}</h2>
                  <p className="text-white/70 text-xs mb-3">{pkg.duration}</p>
                  <p className="text-white/80 text-xs flex items-start gap-1">
                    <span className="flex-shrink-0 mt-0.5">📍</span>
                    {pkg.route}
                  </p>
                </div>
                <div className="p-5">
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{pkg.desc}</p>
                  <ul className="space-y-1 mb-5">
                    {pkg.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-xs text-gray-600">
                        <span className="text-emerald-500 flex-shrink-0 mt-0.5">✦</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div>
                      <p className="text-gray-400 text-xs">Per person from</p>
                      <p className="font-serif text-2xl font-bold text-emerald-700">{pkg.price}</p>
                    </div>
                    <a
                      href={waUrl(`Hi, I'm interested in the ${pkg.title} India tour.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-4 py-2 rounded-xl text-sm transition-colors"
                    >
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations grid */}
      <section className="py-16 bg-emerald-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl font-bold text-white mb-3">Destinations We Cover</h2>
            <p className="text-emerald-400">Our buses have rolled through every corner of incredible India</p>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4">
            {destinations.map((d) => (
              <div key={d.name} className="text-center p-4 bg-emerald-900/60 rounded-xl border border-emerald-700/40 hover:border-emerald-500 transition-colors">
                <span className="text-3xl block mb-2">{d.icon}</span>
                <p className="text-emerald-200 text-sm font-medium">{d.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-gradient-to-r from-violet-700 to-indigo-600 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-white mb-3">Plan Your India Adventure</h2>
          <p className="text-violet-100 mb-8">Share your wishlist and we'll craft a personalised multi-city itinerary with day-by-day detail and transparent pricing.</p>
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-violet-700 font-bold px-8 py-4 rounded-xl shadow-xl hover:-translate-y-0.5 transition-all"
          >
            Start Planning →
          </a>
        </div>
      </section>
    </main>
  )
}
