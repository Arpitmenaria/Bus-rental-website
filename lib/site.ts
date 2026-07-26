/**
 * Single source of truth for all business configuration.
 * Search for TODO to find values you must replace before going live.
 */

/**
 * 'photo'  – the source image still has its original street/background in frame.
 *            Rendered full-bleed with an emerald scrim (for text legibility) + a slow Ken Burns zoom.
 * 'cutout' – background removed (transparent PNG). Rendered as a floating bus with
 *            mouse-parallax tilt, idle float, a glow behind it, and a ground shadow.
 */
export type HeroBusImageMode = 'photo' | 'cutout'

export const SITE = {
  name: 'ShivShakti Tourist',
  tagline: 'Luxury Bus Rental & Tours from Udaipur',
  description:
    'Premium luxury bus rental and guided tours across Rajasthan and all of India. GPS-tracked fleet, English-speaking drivers, transparent pricing. Based in Udaipur since 2002.',

  /** TODO: Set your production domain (no trailing slash) */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://shivshaktitourist.com',

  phone: {
    display: '+91 63775 36559',
    wa: '916377536559',
  },

  email: {
    main: 'shivshaktitouristudr@gmail.com',
    charter: 'shivshaktitouristudr@gmail.com',
  },

  address: {
    street: 'Main Road, In Front of Axis Bank, Panchsheel Market, Hiran Magri, Sector 5, Prabhat Nagar',
    city: 'Udaipur',
    state: 'Rajasthan',
    pincode: '313001',
    country: 'India',
    lat: 24.5621038,
    lng: 73.7183601,
  },

  social: {
    /** TODO: Add real social profile URLs, or set to '' to hide */
    instagram: '',
    facebook: '',
    youtube: '',
    tripadvisor: '',
    googleMaps:
      'https://www.google.com/maps/dir//Shiv+Shakti+Tourist+Agency,+Main+Road,+In+Front+Of+Axis+Bank+Branch,+Panchsheel+Market,+Hiran+Magri,+Sector+5,+Prabhat+Nagar,+Hiran+Magri,+Udaipur,+Rajasthan+313001/@24.5623677,73.7124787,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3967ef68b32c1233:0x497822fe1be113be!2m2!1d73.7183601!2d24.5621038',
  },

  credentials: {
    /** TODO: Enter 15-digit GST number once registered */
    gst: '',
    /** TODO: Enter company registration number */
    registration: '',
    /** TODO: Set true and add number when IATO membership is active */
    iato: false,
    iatoNumber: '',
    /** TODO: Set true when Ministry of Tourism approval letter received */
    ministryApproved: false,
    /** TODO: Add Rajasthan Tourism Department registration number */
    rajasthanTourism: '',
  },

  reviews: {
    /** TODO: Google Business Profile reviews URL (from your Google Maps business listing) */
    googleUrl: '',
    /** TODO: TripAdvisor listing URL for your property */
    tripAdvisorUrl: '',
    /** TODO: Google Place ID — find it at developers.google.com/maps/documentation/javascript/place-id */
    googlePlaceId: '',
  },

  response: {
    whatsapp: 'Under 5 minutes',
    email: '2 hours',
  },

  stats: {
    buses: 6,
    /** TODO: Update as real years-in-business increases */
    years: 12,
    tourists: '5,000+',
    states: 28,
    rating: '4.9',
    reviewCount: 500,
    countries: '40+',
    languages: ['English', 'Hindi', 'French', 'Spanish', 'German'],
  },

  founded: 2002,

  hero: {
    busImage: 'https://res.cloudinary.com/uwzoaqhg/image/upload/v1784999341/IMG_6889_xtqsza.jpg',
    // Currently a straight photo (street/buildings still in frame) — set to 'cutout'
    // once a background-removed .png of the same bus is uploaded.
    busImageMode: 'photo' as HeroBusImageMode,
    busImageWidth: 1024,
    busImageHeight: 1188,
  },
} as const

/**
 * Build a WhatsApp deep-link URL with a pre-filled message.
 * Use this everywhere instead of hardcoding wa.me URLs.
 */
export function waUrl(message: string): string {
  return `https://wa.me/${SITE.phone.wa}?text=${encodeURIComponent(message)}`
}

/** Default WA greeting used by generic "Book Now" buttons. */
export const WA_DEFAULT = waUrl(
  "Hi ShivShakti Tourist, I'd like to book a tour."
)
