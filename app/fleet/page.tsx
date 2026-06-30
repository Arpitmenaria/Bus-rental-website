import Navbar from '@/components/Navbar'
import { waUrl } from '@/lib/site'

const WA = waUrl('Hi ShivShakti, I am interested in hiring a bus.')

const buses = [
  {
    name: 'Volvo 9400 Sleeper',
    type: 'AC Luxury Sleeper',
    emoji: '🛏️',
    price: '₹18/km',
    capacity: '36 berths',
    amenities: ['AC', 'WiFi', 'Washroom', 'USB Charging', 'Reading Lights', 'Blankets'],
    features: [
      'Individual curtained berths (upper & lower)',
      'Plush mattress & pillow included',
      'Personal reading lamp per berth',
      'Mobile charging at every berth',
      'Onboard washroom & vanity mirror',
      'Emergency exits on both sides',
    ],
    routes: 'Udaipur ↔ Jaipur · Rajasthan Circuits · Delhi ↔ Mumbai',
    gradient: 'from-emerald-700 to-emerald-900',
  },
  {
    name: 'Volvo B11R Sleeper',
    type: 'AC Luxury Sleeper',
    emoji: '🌙',
    price: '₹20/km',
    capacity: '40 berths',
    amenities: ['AC', 'WiFi', 'Washroom', 'USB Charging', 'Entertainment'],
    features: [
      'Premium 2+1 berth configuration',
      '180° full-flat recline sleepers',
      'Individual entertainment screens',
      'Onboard pantry with beverages',
      'GPS tracking & live sharing',
      'Professional co-driver for safety',
    ],
    routes: 'Long-distance overnight runs · North India circuits',
    gradient: 'from-slate-700 to-slate-900',
  },
  {
    name: 'Scania Metabus Seater',
    type: 'AC Luxury Seater',
    emoji: '💺',
    price: '₹14/km',
    capacity: '45 seats',
    amenities: ['AC', 'WiFi', 'USB Charging', 'Luggage Space'],
    features: [
      'Wide recliner seats with leg rest',
      'Panoramic tinted windows',
      'Overhead luggage racks',
      'Individual air vents per seat',
      'Onboard PA system',
      'Safety seatbelts for all seats',
    ],
    routes: 'City tours · Day excursions · Heritage circuits',
    gradient: 'from-teal-700 to-teal-900',
  },
  {
    name: 'Mercedes Touro',
    type: 'AC Semi-Sleeper',
    emoji: '⭐',
    price: '₹13/km',
    capacity: '40 seats',
    amenities: ['AC', 'WiFi', 'USB Charging', 'Cooler'],
    features: [
      'European-built coach interior',
      'Semi-sleeper reclining seats',
      'Under-seat storage drawers',
      'Onboard chilled water dispenser',
      'LED ambient lighting',
      'Audio/video entertainment',
    ],
    routes: 'Rajasthan circuits · Goa · Mumbai · Pune',
    gradient: 'from-violet-700 to-violet-900',
  },
  {
    name: 'Tata Starbus',
    type: 'AC Seater',
    emoji: '🚌',
    price: '₹10/km',
    capacity: '49 seats',
    amenities: ['AC', 'USB Charging', 'Luggage Space'],
    features: [
      'Economical group transport',
      'Push-back recliner seats',
      'Large luggage bays',
      'Air-suspended smooth ride',
      'Durable for all Indian roads',
      'Available for local city trips',
    ],
    routes: 'Educational tours · Pilgrimages · Budget groups',
    gradient: 'from-orange-700 to-orange-900',
  },
  {
    name: 'Force Traveller Van',
    type: 'AC Minivan',
    emoji: '🚐',
    price: '₹18/km',
    capacity: '12 seats',
    amenities: ['AC', 'USB Charging', 'Cooler'],
    features: [
      'Perfect for small private groups',
      'High-roof for extra headroom',
      'Customisable seating arrangement',
      'Airport pickup & drop specialist',
      'Narrow road capable (hill stations)',
      'Dedicated personal driver',
    ],
    routes: 'Airport transfers · Small groups · Udaipur local',
    gradient: 'from-rose-700 to-rose-900',
  },
  {
    name: 'Volvo 9600 VIP',
    type: 'VIP Luxury Seater',
    emoji: '👑',
    price: '₹25/km',
    capacity: '36 seats (2+1)',
    amenities: ['AC', 'WiFi', 'Washroom', 'USB Charging', 'Bar', 'Entertainment'],
    features: [
      'Ultra-wide 2+1 seating configuration',
      'Full-leather premium seats',
      'Onboard bar with refrigerator',
      'Individual HD entertainment screens',
      'Concierge-style onboard service',
      'Starlight LED cabin ambience',
    ],
    routes: 'Weddings · Corporate retreats · VIP transfers · Film shoots',
    gradient: 'from-amber-700 to-amber-900',
  },
]

export default function FleetPage() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-950 to-emerald-800 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-emerald-400 font-semibold text-sm tracking-widest uppercase mb-3">7 Vehicles</p>
          <h1 className="font-serif text-5xl lg:text-6xl font-bold text-white mb-4">Our Fleet</h1>
          <p className="text-emerald-200 text-lg max-w-2xl mx-auto">
            From intimate 12-seat vans to 49-seat group coaches — every vehicle is meticulously maintained, GPS-tracked, and driven by a verified professional.
          </p>
        </div>
      </section>

      {/* Fleet Cards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {buses.map((bus) => (
            <div key={bus.name} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="grid md:grid-cols-[320px_1fr]">
                {/* Left gradient panel */}
                <div className={`bg-gradient-to-br ${bus.gradient} p-8 flex flex-col justify-between`}>
                  <div>
                    <div className="text-5xl mb-4">{bus.emoji}</div>
                    <h2 className="font-serif text-2xl font-bold text-white mb-1">{bus.name}</h2>
                    <p className="text-white/70 text-sm mb-6">{bus.type}</p>
                  </div>
                  <div>
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
                        <p className="text-xs text-emerald-600 mt-1">GPS tracking · English-speaking driver · 24/7 WhatsApp support · Comprehensive insurance</p>
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
          <p className="text-emerald-100 mb-8">Tell us your group size and travel dates — we'll recommend the perfect vehicle and provide a custom quote.</p>
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
    </main>
  )
}
