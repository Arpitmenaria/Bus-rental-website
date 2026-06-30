'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import JsonLd from '@/components/JsonLd'
import { waUrl } from '@/lib/site'
import { tourListSchema } from '@/lib/schema'

const WA = waUrl("Hi ShivShakti, I'm interested in a Rajasthan tour package.")

interface Tour {
  title: string
  duration: string
  price: string
  priceUSD: string | null // TODO: add USD equivalent before going live, e.g. '$340'
  priceNote: string
  route: string[]
  gradient: string
  tag: string
  highlights: string[]
  includes: string[]
}

const tours: Tour[] = [
  {
    title: 'Golden Rajasthan Circuit',
    duration: '7 Days / 6 Nights',
    price: '₹28,000',
    priceUSD: null, // TODO: e.g. '$340'
    priceNote: 'per person (min 2)',
    route: ['Udaipur', 'Jodhpur', 'Jaisalmer', 'Jaipur'],
    gradient: 'from-amber-500 to-orange-600',
    tag: 'Most Popular',
    highlights: [
      'City Palace & Lake Pichola boat ride, Udaipur',
      'Mehrangarh Fort & Jaswant Thada, Jodhpur',
      'Camel safari on Sam Sand Dunes, Jaisalmer',
      'Hawa Mahal & Amber Fort, Jaipur',
      'Sunset at Jaisalmer Fort',
      'Traditional Rajasthani dinner with folk music',
    ],
    includes: [
      'AC Luxury Bus throughout',
      '6 nights hotel (3-star or above)',
      'Daily breakfast + 4 dinners',
      'English-speaking guide all days',
      'All monument entry fees',
      'Camel safari at Sam Dunes',
      'Boat ride in Udaipur',
      '24/7 tour coordinator',
    ],
  },
  {
    title: 'Royal Heritage Express',
    duration: '5 Days / 4 Nights',
    price: '₹18,500',
    priceUSD: null, // TODO: e.g. '$225'
    priceNote: 'per person (min 2)',
    route: ['Udaipur', 'Chittorgarh', 'Pushkar', 'Ajmer'],
    gradient: 'from-rose-600 to-rose-800',
    tag: 'Cultural',
    highlights: [
      'Chittorgarh Fort — largest fort in India',
      'Vijay Stambha tower at sunset',
      "Pushkar Brahma Temple (world's rarest)",
      'Pushkar Lake camel rides',
      'Dargah Sharif at Ajmer',
      'Rajasthani spice market tour',
    ],
    includes: [
      'AC Luxury Bus throughout',
      '4 nights hotel (3-star)',
      'Daily breakfast',
      'English guide for all major sites',
      'Monument entry fees',
      'Pushkar camel ride',
      'Airport/railway pick-up',
    ],
  },
  {
    title: 'Desert Safari Special',
    duration: '4 Days / 3 Nights',
    price: '₹16,000',
    priceUSD: null, // TODO: e.g. '$195'
    priceNote: 'per person (min 2)',
    route: ['Jodhpur', 'Jaisalmer', 'Sam Dunes'],
    gradient: 'from-yellow-600 to-amber-700',
    tag: 'Adventure',
    highlights: [
      'Blue City walking tour, Jodhpur',
      'Jaisalmer Fort interior exploration',
      'Desert camp stay under the stars',
      'Sunrise camel trek',
      'Dune buggy / ATV option',
      'Traditional bonfire & Kalbeliya dance',
    ],
    includes: [
      'AC Bus Jodhpur ↔ Jaisalmer',
      '3 nights (2 hotel + 1 desert camp)',
      'All breakfasts + desert camp dinner',
      'Camel ride & desert camp experience',
      'Guide for Jodhpur & Jaisalmer',
    ],
  },
  {
    title: 'Udaipur Lakes & Palaces',
    duration: '3 Days / 2 Nights',
    price: '₹9,500',
    priceUSD: null, // TODO: e.g. '$115'
    priceNote: 'per person (min 2)',
    route: ['Udaipur', 'Kumbhalgarh', 'Ranakpur'],
    gradient: 'from-teal-600 to-emerald-700',
    tag: 'Short Break',
    highlights: [
      'City Palace museum & rooftop views',
      'Lake Pichola sunset boat cruise',
      'Kumbhalgarh Fort (Great Wall of India)',
      'Ranakpur Jain Temples (1444 pillars)',
      'Vintage Car Museum',
      'Saheliyon ki Bari gardens',
    ],
    includes: [
      'AC Bus for local excursions',
      '2 nights hotel in Udaipur',
      'Daily breakfast',
      'Boat cruise on Lake Pichola',
      'Guide for all sites',
      'Airport/station transfers',
    ],
  },
  {
    title: 'Shekhawati Open Art Gallery',
    duration: '3 Days / 2 Nights',
    price: '₹12,000',
    priceUSD: null, // TODO: e.g. '$145'
    priceNote: 'per person (min 2)',
    route: ['Jaipur', 'Nawalgarh', 'Mandawa', 'Fatehpur'],
    gradient: 'from-indigo-600 to-violet-700',
    tag: 'Hidden Gem',
    highlights: [
      'Intricate havelis with 19th-century frescoes',
      'Nawalgarh fort and painted mansions',
      'Mandawa stepwell and bazaar',
      'Fatehpur heritage walk',
      'Local pottery & textile workshops',
      'Authentic Marwari home-cooked meal',
    ],
    includes: [
      'AC Bus Jaipur ↔ Shekhawati',
      '2 nights heritage hotel',
      'Daily breakfast + 1 dinner',
      'Expert art historian guide',
      'Workshop participation fees',
    ],
  },
  {
    title: 'Complete Rajasthan Grand Tour',
    duration: '14 Days / 13 Nights',
    price: '₹58,000',
    priceUSD: null, // TODO: e.g. '$700'
    priceNote: 'per person (min 2)',
    route: ['Udaipur', 'Chittorgarh', 'Pushkar', 'Jaipur', 'Shekhawati', 'Bikaner', 'Jaisalmer', 'Jodhpur'],
    gradient: 'from-emerald-700 to-emerald-950',
    tag: 'Grand Tour',
    highlights: [
      'Complete Royal Rajasthan from south to north',
      'Every major fort, palace and desert',
      'Camel safari + desert camp overnight',
      'Bikaner Camel Festival (seasonal)',
      'Pushkar & Ajmer heritage',
      'Jaipur gemstone & textile factories',
    ],
    includes: [
      'AC Luxury Sleeper Bus throughout',
      '13 nights hotel/camp (3-4 star)',
      'All breakfasts + 7 dinners',
      'Dedicated English-speaking guide',
      'All monument & activity entry fees',
      'Camel safari + desert camp',
      'All transfers & driver tips',
      'Travel insurance',
    ],
  },
]

function TourCard({ tour }: { tour: Tour }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-shadow">
      {/* Gradient top bar */}
      <div className={`bg-gradient-to-r ${tour.gradient} p-6 text-white relative`}>
        {tour.tag && (
          <span className="absolute top-4 right-4 bg-white/20 text-white text-xs font-bold px-2.5 py-1 rounded-full">
            {tour.tag}
          </span>
        )}
        <h2 className="font-serif text-2xl font-bold mb-1">{tour.title}</h2>
        <p className="text-white/80 text-sm mb-4">{tour.duration}</p>
        <div className="flex flex-wrap gap-1.5">
          {tour.route.map((city, i) => (
            <span key={city} className="flex items-center gap-1 text-xs font-medium">
              {city}{i < tour.route.length - 1 && <span className="text-white/60 ml-1">→</span>}
            </span>
          ))}
        </div>
      </div>

      <div className="p-6">
        {/* Price */}
        <div className="flex items-end justify-between mb-5">
          <div>
            <p className="text-gray-500 text-xs mb-0.5">{tour.priceNote}</p>
            <p className="font-serif text-3xl font-bold text-emerald-700">
              {tour.price}
              {tour.priceUSD && (
                <span className="text-gray-500 font-sans font-normal text-base ml-1.5">
                  / {tour.priceUSD}
                </span>
              )}
            </p>
            {!tour.priceUSD && (
              <p className="text-amber-500 text-[10px] font-mono mt-0.5">[TODO: add USD price]</p>
            )}
          </div>
          <a
            href={waUrl(`Hi, I'm interested in the ${tour.title} tour.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-5 py-2.5 rounded-xl text-sm transition-colors"
          >
            Book This Tour
          </a>
        </div>

        {/* Highlights */}
        <div className="mb-4">
          <h3 className="font-bold text-emerald-950 text-sm uppercase tracking-wide mb-3">Highlights</h3>
          <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-1.5">
            {tour.highlights.map((h) => (
              <li key={h} className="flex items-start gap-2 text-sm text-gray-600">
                <span className="text-emerald-500 flex-shrink-0 mt-0.5">✦</span>
                {h}
              </li>
            ))}
          </ul>
        </div>

        {/* Collapsible includes */}
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-center justify-between text-sm font-semibold text-emerald-700 border border-emerald-200 bg-emerald-50 px-4 py-2.5 rounded-xl hover:bg-emerald-100 transition-colors mt-2"
        >
          What's Included ({tour.includes.length} items)
          <span className="text-lg leading-none">{open ? '−' : '+'}</span>
        </button>
        {open && (
          <ul className="mt-3 space-y-1.5 pl-2">
            {tour.includes.map((inc) => (
              <li key={inc} className="flex items-start gap-2 text-sm text-gray-600">
                <span className="text-emerald-500 flex-shrink-0 mt-0.5">✓</span>
                {inc}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default function RajasthanToursPage() {
  return (
    <main>
      <Navbar />
      <JsonLd data={tourListSchema(tours)} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-amber-900 via-orange-900 to-emerald-900 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-amber-400 font-semibold text-sm tracking-widest uppercase mb-3">6 Curated Packages</p>
          <h1 className="font-serif text-5xl lg:text-6xl font-bold text-white mb-4">Rajasthan Tours</h1>
          <p className="text-amber-100 text-lg max-w-2xl mx-auto">
            From golden deserts to royal palaces, every ShivShakti Rajasthan tour is designed around the authentic experiences international travellers treasure most.
          </p>
        </div>
      </section>

      {/* Tours Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-6">
            {tours.map((t) => <TourCard key={t.title} tour={t} />)}
          </div>
        </div>
      </section>

      {/* Custom tours note */}
      <section className="py-14 bg-emerald-950 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-white mb-3">Need a Custom Itinerary?</h2>
          <p className="text-emerald-300 mb-8">We build bespoke tours around your interests, budget, and dates. No cookie-cutter packages — just the Rajasthan you've always imagined.</p>
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-all"
          >
            Request a Custom Tour
          </a>
        </div>
      </section>
    </main>
  )
}
