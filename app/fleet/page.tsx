import type { Metadata } from 'next'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import JsonLd from '@/components/JsonLd'
import { SITE, waUrl } from '@/lib/site'
import { orgSchema } from '@/lib/schema'

const PAGE_URL = `${SITE.url}/fleet`

export const metadata: Metadata = {
  title: 'Luxury Bus Fleet for Hire: Sleeper, Seater & Mini Coaches | ShivShakti Tourist',
  description: `${SITE.stats.buses} fully-AC, GPS-tracked buses for hire in Udaipur: 2x2 sleepers, push-back coaches, and mini buses from 32 to 58 seats. Rates from ₹35/km. Water bottles, charging sockets & blankets on every trip.`,
  keywords: [
    'luxury bus hire Udaipur',
    'sleeper bus rental Rajasthan',
    'push back coach hire Udaipur',
    'AC bus hire Rajasthan',
    'mini bus hire Udaipur',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Luxury Bus Fleet for Hire | ShivShakti Tourist',
    description:
      '2x2 sleeper coaches, push-back ultra luxury coaches, and mini buses, all GPS-tracked with verified professional drivers. Rates from ₹35/km, transparent pricing.',
    url: PAGE_URL,
    type: 'website',
    siteName: SITE.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Luxury Bus Fleet for Hire | ShivShakti Tourist, Udaipur',
    description: `${SITE.stats.buses} GPS-tracked, fully-AC buses from ₹35/km. Sleeper coaches, push-back seaters, mini buses. Serving international groups across India.`,
  },
}

const WA = waUrl('Hi ShivShakti, I am interested in hiring a bus.')

interface Bus {
  name: string
  type: string
  photo: string
  price: string
  capacity: string
  amenities: string[]
  features: string[]
  routes: string
  gradient: string
}

const buses: Bus[] = [
  {
    name: '48 Sleeper 2×2 Ultra Luxury AC Bus',
    type: 'Ultra Luxury AC Sleeper',
    photo:
      'https://res.cloudinary.com/uwzoaqhg/image/upload/v1783355296/ChatGPT_Image_Apr_5_2026_11_08_02_PM_f9qpfj.png',
    price: '₹35/km',
    capacity: '48 berths (2×2)',
    amenities: ['AC', 'GPS Live Tracking', 'Charging Sockets', 'Water Bottles', 'Blankets', 'Curtained Berths'],
    features: [
      'Individual curtained sleeper berths (2×2 layout)',
      'Plush mattress, pillow & blanket in every berth',
      'Personal reading light per berth',
      'Mobile charging socket at every berth',
      'Live GPS tracking shared with you throughout the trip',
      'Top-tier finish for long overnight journeys',
    ],
    routes: 'Overnight interstate travel · Rajasthan circuits · Large group sleeper tours',
    gradient: 'from-emerald-700 to-emerald-900',
  },
  {
    name: '50 Sleeper Luxury 2×2 AC Sleeper Bus',
    type: 'Luxury AC Sleeper',
    photo: 'https://res.cloudinary.com/uwzoaqhg/image/upload/v1784999341/IMG_6889_xtqsza.jpg',
    price: '₹35/km',
    capacity: '50 berths (2×2)',
    amenities: ['AC', 'GPS Live Tracking', 'Charging Sockets', 'Water Bottles', 'Blankets', 'Curtained Berths'],
    features: [
      '2×2 sleeper berth configuration for extra capacity',
      'Cushioned mattress, pillow & blanket included',
      'Curtained berths for complete privacy',
      'Charging point at every berth',
      'Live GPS tracking on every trip',
      'Ideal for large overnight group movements',
    ],
    routes: 'Long-distance overnight runs · Pilgrimages · Interstate group travel',
    gradient: 'from-slate-700 to-slate-900',
  },
  {
    name: '58 Seater Push Back Ultra Luxury Coach',
    type: 'Ultra Luxury Push-Back Coach',
    photo: 'https://res.cloudinary.com/uwzoaqhg/image/upload/v1783355531/bus1_cjczru.png',
    price: '₹35/km',
    capacity: '58 seats',
    amenities: ['AC', 'GPS Live Tracking', 'Charging Sockets', 'Water Bottles', 'Blankets', 'Push-Back Seats'],
    features: [
      'Wide push-back reclining seats with leg rest',
      'Individual reading lights & air vents',
      'Large tinted windows for sightseeing',
      'Ample overhead & under-bus luggage space',
      'Live GPS tracking shared with you throughout the trip',
      'Built for large corporate, wedding & tour groups',
    ],
    routes: 'Weddings · Corporate retreats · Large tour groups · Day & overnight trips',
    gradient: 'from-amber-700 to-amber-900',
  },
  {
    name: '52 Seater Luxury AC Bus',
    type: 'Luxury AC Seater',
    photo: 'https://res.cloudinary.com/uwzoaqhg/image/upload/v1783355498/56seat_wyxir2.png',
    price: '₹35/km',
    capacity: '52 seats',
    amenities: ['AC', 'GPS Live Tracking', 'Charging Sockets', 'Water Bottles', 'Blankets', 'Push-Back Seats'],
    features: [
      'Comfortable push-back seats with leg room',
      'Overhead luggage racks & individual air vents',
      'Large windows for sightseeing',
      'Mobile charging sockets throughout the cabin',
      'Live GPS tracking on every trip',
      'Well suited for medium-to-large groups',
    ],
    routes: 'City tours · Pilgrimage groups · School & college trips · Day excursions',
    gradient: 'from-teal-700 to-teal-900',
  },
  {
    name: '45 Seater AC Bus',
    type: 'AC Seater',
    photo: 'https://res.cloudinary.com/uwzoaqhg/image/upload/v1784999597/IMG_1199_imnwo3.jpg',
    price: '₹35/km',
    capacity: '45 seats',
    amenities: ['AC', 'GPS Live Tracking', 'Charging Sockets', 'Water Bottles', 'Blankets', 'Reclining Seats'],
    features: [
      'Cushioned reclining seats for comfortable travel',
      'Large windows for uninterrupted sightseeing',
      'Mobile charging sockets on board',
      'Dedicated luggage bay',
      'Live GPS tracking shared with you throughout the trip',
      'Reliable choice for mid-size groups',
    ],
    routes: 'Local sightseeing · Pilgrimage tours · Educational trips · Mid-size groups',
    gradient: 'from-orange-700 to-orange-900',
  },
  {
    name: '32 Seater AC Mini Bus',
    type: 'AC Mini Coach',
    photo: 'https://res.cloudinary.com/uwzoaqhg/image/upload/v1784999798/IMG_1200_q7kvwm.jpg',
    price: '₹35/km',
    capacity: '32 seats',
    amenities: ['AC', 'GPS Live Tracking', 'Charging Sockets', 'Water Bottles', 'Blankets', 'Compact & Agile'],
    features: [
      'Compact size, easy on narrow & hill roads',
      'Comfortable reclining seats',
      'Mobile charging sockets on board',
      'Live GPS tracking shared with you throughout the trip',
      'Personal, dedicated driver for smaller groups',
      'Ideal for airport transfers & family/corporate groups',
    ],
    routes: 'Airport transfers · Small family & corporate groups · Hill station trips',
    gradient: 'from-rose-700 to-rose-900',
  },
]

export default function FleetPage() {
  return (
    <main>
      <Navbar />
      <JsonLd data={orgSchema()} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-950 to-emerald-800 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-emerald-400 font-semibold text-sm tracking-widest uppercase mb-3">{SITE.stats.buses} Vehicles</p>
          <h1 className="font-serif text-5xl lg:text-6xl font-bold text-white mb-4">Our Fleet</h1>
          <p className="text-emerald-200 text-lg max-w-2xl mx-auto">
            From 32-seat mini coaches to 58-seat luxury coaches, every vehicle is meticulously maintained, GPS-tracked, and driven by a verified professional.
          </p>
        </div>
      </section>

      {/* AC + Fan note */}
      <section className="bg-emerald-50 border-b border-emerald-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-center text-sm text-emerald-800">
            <span className="font-semibold">❄️ Every bus is fully air-conditioned.</span> Prefer non-AC on a hill route or a cool evening? We simply switch off the AC and run the individual seat fan fitted at every seat, at no extra cost.
          </p>
        </div>
      </section>

      {/* Fleet Cards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {buses.map((bus, i) => (
            <div key={bus.name} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="grid md:grid-cols-[360px_1fr]">
                {/* Left photo + price panel */}
                <div className="flex flex-col">
                  <div className="relative h-64 md:h-72 bg-gray-200">
                    <Image
                      src={bus.photo}
                      alt={bus.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 360px"
                      className="object-cover"
                      priority={i === 0}
                    />
                  </div>
                  <div className={`bg-gradient-to-br ${bus.gradient} p-8 flex-1 flex flex-col justify-between`}>
                    <div>
                      <h2 className="font-serif text-2xl font-bold text-white mb-1">{bus.name}</h2>
                      <p className="text-white/70 text-sm">{bus.type}</p>
                    </div>
                    <div className="mt-6">
                      <p className="text-white/60 text-xs uppercase tracking-widest mb-1">Starting from</p>
                      <p className="font-serif text-4xl font-bold text-white">{bus.price}</p>
                      <a
                        href={waUrl(`Hi, I'm interested in the ${bus.name}.`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-4 bg-white/20 hover:bg-white/30 text-white font-semibold px-5 py-2.5 rounded-xl text-sm transition-colors"
                      >
                        Enquire Now
                      </a>
                    </div>
                  </div>
                </div>

                {/* Right panel */}
                <div className="p-8">
                  <div className="flex flex-wrap items-center gap-3 mb-6">
                    <span className="bg-emerald-50 text-emerald-700 text-sm font-semibold px-3 py-1 rounded-full border border-emerald-200">
                      👥 {bus.capacity}
                    </span>
                    {bus.amenities.map((a) => (
                      <span key={a} className="bg-gray-100 text-gray-700 text-xs font-medium px-2.5 py-1 rounded-full">
                        {a}
                      </span>
                    ))}
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-bold text-emerald-950 text-sm uppercase tracking-wide mb-3">Features</h3>
                      <ul className="space-y-1.5">
                        {bus.features.map((f) => (
                          <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                            <span className="text-emerald-500 flex-shrink-0 mt-0.5">✓</span>
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-bold text-emerald-950 text-sm uppercase tracking-wide mb-3">Ideal Routes</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{bus.routes}</p>
                      <div className="mt-4 p-3 bg-emerald-50 rounded-xl border border-emerald-100">
                        <p className="text-xs text-emerald-700 font-medium">All buses include</p>
                        <p className="text-xs text-emerald-600 mt-1">
                          GPS live tracking · Individual seat fan back-up · Mobile charging sockets · Water bottles · Blankets · 24/7 WhatsApp support
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-emerald-700">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl font-bold text-white mb-4">Not sure which bus fits your group?</h2>
          <p className="text-emerald-100 mb-8">Tell us your group size and travel dates, we'll recommend the perfect vehicle and provide a custom quote.</p>
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-emerald-700 font-bold px-8 py-4 rounded-xl shadow-xl hover:-translate-y-0.5 transition-all"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Chat on WhatsApp
          </a>
        </div>
      </section>
      <Footer />
    </main>
  )
}
