import { SITE } from './site'

const orgBase = {
  '@context': 'https://schema.org',
  '@type': ['TravelAgency', 'LocalBusiness'],
  name: SITE.name,
  url: SITE.url,
  logo: `${SITE.url}/logo.png`,
  image: `${SITE.url}/og-image.jpg`,
  description: SITE.description,
  telephone: SITE.phone.display,
  email: SITE.email.main,
  foundingDate: String(SITE.founded),
  priceRange: '₹₹',
  currenciesAccepted: 'INR, USD, EUR, GBP',
  address: {
    '@type': 'PostalAddress',
    streetAddress: SITE.address.street,
    addressLocality: SITE.address.city,
    addressRegion: SITE.address.state,
    postalCode: SITE.address.pincode,
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: SITE.address.lat,
    longitude: SITE.address.lng,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '00:00',
    closes: '23:59',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: SITE.stats.rating,
    reviewCount: String(SITE.stats.reviewCount),
    bestRating: '5',
    worstRating: '1',
  },
} as const

export function orgSchema() {
  const sameAs = Object.values(SITE.social).filter(Boolean)
  return { ...orgBase, ...(sameAs.length ? { sameAs } : {}) }
}

export function tourListSchema(
  tours: Array<{ title: string; duration: string; price: string; route: string[]; highlights: string[] }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Rajasthan Tour Packages — ShivShakti Tourist',
    description: 'Curated luxury bus tour packages across Rajasthan for international travellers.',
    numberOfItems: tours.length,
    itemListElement: tours.map((t, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'TouristTrip',
        name: t.title,
        description: t.highlights.slice(0, 3).join('. '),
        itinerary: {
          '@type': 'ItemList',
          itemListElement: t.route.map((city, j) => ({
            '@type': 'ListItem',
            position: j + 1,
            name: city,
          })),
        },
        offers: {
          '@type': 'Offer',
          price: t.price.replace(/[^\d]/g, ''),
          priceCurrency: 'INR',
          availability: 'https://schema.org/InStock',
          seller: { '@type': 'Organization', name: SITE.name },
        },
        provider: { '@type': 'Organization', name: SITE.name, url: SITE.url },
        touristType: ['International', 'Cultural', 'Leisure'],
      },
    })),
  }
}

export function indiaTourListSchema(
  packages: Array<{ title: string; duration: string; price: string; route: string; highlights: string[] }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'All India Tour Packages — ShivShakti Tourist',
    description: 'Luxury private bus tours across India for international travellers.',
    numberOfItems: packages.length,
    itemListElement: packages.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'TouristTrip',
        name: p.title,
        description: p.highlights.slice(0, 3).join('. '),
        offers: {
          '@type': 'Offer',
          price: p.price.replace(/[^\d]/g, ''),
          priceCurrency: 'INR',
          availability: 'https://schema.org/InStock',
          seller: { '@type': 'Organization', name: SITE.name },
        },
        provider: { '@type': 'Organization', name: SITE.name, url: SITE.url },
        touristType: ['International', 'Leisure'],
      },
    })),
  }
}

export function articleSchema({
  title,
  description,
  url,
  publishedAt,
  updatedAt,
}: {
  title: string
  description: string
  url: string
  publishedAt: string
  updatedAt: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description,
    datePublished: publishedAt,
    dateModified: updatedAt,
    url,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    author: { '@type': 'Organization', name: SITE.name, url: SITE.url },
    publisher: {
      '@type': 'Organization',
      name: SITE.name,
      url: SITE.url,
      logo: { '@type': 'ImageObject', url: `${SITE.url}/logo.png` },
    },
    inLanguage: 'en',
  }
}
