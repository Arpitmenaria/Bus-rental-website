/**
 * Single source of truth for all business configuration.
 * Search for TODO to find values you must replace before going live.
 */

export const SITE = {
  name: 'ShivShakti Tourist',
  tagline: 'Luxury Bus Rental & Tours from Udaipur',
  description:
    'Premium luxury bus rental and guided tours across Rajasthan and all of India. GPS-tracked fleet, English-speaking drivers, transparent pricing. Based in Udaipur since 2012.',

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
    /** TODO: Confirm exact street address */
    street: 'Near Udaipur City Railway Station',
    city: 'Udaipur',
    state: 'Rajasthan',
    pincode: '313001',
    country: 'India',
    /** TODO: Verify lat/lng from Google Maps */
    lat: 24.5854,
    lng: 73.7125,
  },

  social: {
    /** TODO: Add real social profile URLs, or set to '' to hide */
    instagram: '',
    facebook: '',
    youtube: '',
    tripadvisor: '',
    /** TODO: Google Maps place URL for the business listing */
    googleMaps: '',
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
    buses: 7,
    /** TODO: Update as real years-in-business increases */
    years: 12,
    tourists: '5,000+',
    states: 28,
    rating: '4.9',
    reviewCount: 500,
    countries: '40+',
    languages: ['English', 'Hindi', 'French', 'Spanish', 'German'],
  },

  founded: 2012,
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
