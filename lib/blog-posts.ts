export interface BlogPost {
  slug: string
  title: string
  description: string
  ogTitle: string
  ogDescription: string
  publishedAt: string
  updatedAt: string
  readingTime: number
  category: 'Safety & Travel Tips' | 'Itineraries' | 'Planning'
  keywords: string[]
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'is-rajasthan-road-trip-safe-for-foreigners',
    title: "Is It Safe to Travel Rajasthan by Road? A Foreigner's Guide",
    description:
      'Honest safety advice for international travellers planning a Rajasthan road trip — police-verified drivers, GPS tracking, road conditions, and what to watch for.',
    ogTitle: "Is Rajasthan Safe for Foreign Road Travellers? An Honest Guide",
    ogDescription:
      "GPS-tracked buses, police-verified drivers, road conditions, night travel and scam risks — everything a first-time foreign visitor must know before hitting Rajasthan's roads.",
    publishedAt: '2025-01-15',
    updatedAt: '2025-01-15',
    readingTime: 8,
    category: 'Safety & Travel Tips',
    keywords: [
      'Rajasthan road trip safety',
      'is Rajasthan safe for tourists',
      'safe travel India foreigners',
      'Rajasthan road conditions',
    ],
  },
  {
    slug: 'best-time-to-visit-udaipur-rajasthan',
    title: 'Best Time to Visit Udaipur & Rajasthan (Month-by-Month Guide)',
    description:
      'When is the best time to visit Udaipur and Rajasthan? A practical month-by-month guide covering temperatures, festivals, crowds, and which tours run each season.',
    ogTitle: 'When to Visit Udaipur & Rajasthan — Month-by-Month Seasonal Guide',
    ogDescription:
      'October–March is peak, but every month has something. Monsoon palaces, winter forts, summer deals — find the perfect time for your trip to Rajasthan.',
    publishedAt: '2025-02-01',
    updatedAt: '2025-02-01',
    readingTime: 7,
    category: 'Planning',
    keywords: [
      'best time to visit Rajasthan',
      'when to visit Udaipur',
      'Rajasthan weather by month',
      'Rajasthan travel seasons',
    ],
  },
  {
    slug: 'golden-triangle-itinerary-private-bus',
    title: 'Delhi–Agra–Jaipur Golden Triangle by Private Bus (6–8 Day Guide)',
    description:
      'A day-by-day Golden Triangle itinerary for groups travelling by private luxury bus from Delhi — Taj Mahal, Amber Fort, and the Pink City at your own pace.',
    ogTitle: 'Golden Triangle by Private Bus: Delhi, Agra & Jaipur Itinerary',
    ogDescription:
      "Skip chaotic public transport. Here's how to do the Golden Triangle by private luxury bus — day-by-day stops, hidden gems, and insider tips from Udaipur.",
    publishedAt: '2025-02-20',
    updatedAt: '2025-02-20',
    readingTime: 10,
    category: 'Itineraries',
    keywords: [
      'Golden Triangle itinerary private bus',
      'Delhi Agra Jaipur bus tour',
      'Golden Triangle tour from Udaipur',
      'India Golden Triangle self-drive',
    ],
  },
  {
    slug: 'avoid-commission-shopping-scams-india',
    title: 'How to Avoid Commission-Shopping Scams on India Road Trips',
    description:
      "The honest truth about driver commission shops, gem scams, and 'free' factory tours in India — and exactly how we protect our guests from them.",
    ogTitle: "Avoiding Driver Commission & Shopping Scams in India — Honest Guide",
    ogDescription:
      "Gem shops, 'government emporia', factory tours — know how commission scams work, red flags to spot, and how to choose a driver who won't take you there.",
    publishedAt: '2025-03-05',
    updatedAt: '2025-03-05',
    readingTime: 6,
    category: 'Safety & Travel Tips',
    keywords: [
      'India shopping scams tourists',
      'driver commission scam Rajasthan',
      'how to avoid gem scam India',
      'safe tour operator Rajasthan',
    ],
  },
  {
    slug: 'udaipur-jaipur-jodhpur-rajasthan-route',
    title: 'Udaipur → Jodhpur → Jaisalmer → Jaipur: The Perfect Rajasthan Route',
    description:
      "The classic Rajasthan road circuit — lakes, blue cities, golden deserts, and pink palaces. Distances, driving times, hotel picks, and what not to miss.",
    ogTitle: 'The Perfect Rajasthan Route: Udaipur to Jodhpur to Jaisalmer to Jaipur',
    ogDescription:
      "Road distances, driving times, must-see stops and hidden gems on Rajasthan's most rewarding circuit. Best done by private bus in 7–10 days.",
    publishedAt: '2025-03-20',
    updatedAt: '2025-03-20',
    readingTime: 9,
    category: 'Itineraries',
    keywords: [
      'Rajasthan road trip route',
      'Udaipur Jodhpur Jaisalmer Jaipur itinerary',
      'Rajasthan circuit by bus',
      'best Rajasthan road route',
    ],
  },
  {
    slug: 'solo-women-travellers-rajasthan-guide',
    title: 'Solo & Women Travellers in Rajasthan: What to Know in 2025',
    description:
      'Practical safety tips, transport advice, and what to expect as a solo or female traveller in Rajasthan — from a tour operator who has hosted thousands of women guests.',
    ogTitle: 'Solo & Women Travellers in Rajasthan: Safety, Transport & Honest Tips',
    ogDescription:
      "Rajasthan is one of India's most welcoming regions for solo women. Here's how to navigate it safely — verified drivers, trusted hotels, and honest street-level advice.",
    publishedAt: '2025-04-10',
    updatedAt: '2025-04-10',
    readingTime: 8,
    category: 'Safety & Travel Tips',
    keywords: [
      'solo female travel Rajasthan',
      'women travellers India safety 2025',
      'solo travel Rajasthan tips',
      'is Rajasthan safe for solo women',
    ],
  },
  {
    slug: 'private-bus-vs-train-vs-flights-rajasthan',
    title: 'Private Bus vs Train vs Flights in Rajasthan — Which to Choose',
    description:
      'A frank comparison of private bus, train, and domestic flight travel across Rajasthan — cost, flexibility, comfort, and real journey times for groups and solo travellers.',
    ogTitle: 'Private Bus vs Train vs Flights for Rajasthan Travel — Honest Comparison',
    ogDescription:
      "Trains look cheap on paper, but groups pay more. Flights miss the scenery. Here's a frank breakdown to help you choose the right way to travel Rajasthan.",
    publishedAt: '2025-04-25',
    updatedAt: '2025-04-25',
    readingTime: 7,
    category: 'Planning',
    keywords: [
      'Rajasthan transport comparison',
      'bus vs train India travel',
      'how to travel Rajasthan cheaply',
      'private bus hire vs train Rajasthan',
    ],
  },
  {
    slug: 'what-to-pack-rajasthan-road-trip',
    title: 'What to Pack for a Rajasthan Road Trip (Checklist for Foreigners)',
    description:
      'A practical packing list for a Rajasthan road trip — clothing for fort climbs and desert nights, essential documents, medications, and what most travellers forget.',
    ogTitle: 'Rajasthan Road Trip Packing List for International Travellers',
    ogDescription:
      'Desert layers, monsoon gear, temple scarves, dusty-road sunglasses — the complete checklist for a Rajasthan road trip as a foreign visitor.',
    publishedAt: '2025-05-08',
    updatedAt: '2025-05-08',
    readingTime: 6,
    category: 'Planning',
    keywords: [
      'what to pack Rajasthan trip',
      'Rajasthan road trip packing list',
      'India travel checklist foreigners',
      'Rajasthan travel essentials',
    ],
  },
]

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug)
}

export const categoryColors: Record<BlogPost['category'], string> = {
  'Safety & Travel Tips': 'bg-rose-50 text-rose-700 border-rose-200',
  Itineraries: 'bg-amber-50 text-amber-700 border-amber-200',
  Planning: 'bg-emerald-50 text-emerald-700 border-emerald-200',
}
