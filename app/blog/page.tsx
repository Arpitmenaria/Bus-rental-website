import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { SITE } from '@/lib/site'
import { blogPosts, categoryColors } from '@/lib/blog-posts'

const PAGE_URL = `${SITE.url}/blog`

export const metadata: Metadata = {
  title: 'Travel Blog: Rajasthan & India Road Trip Guides | ShivShakti Tourist',
  description:
    'Expert guides for international travellers exploring Rajasthan and India by road: safety tips, seasonal planning, route itineraries, and packing checklists.',
  keywords: [
    'Rajasthan travel blog',
    'India road trip guide',
    'Udaipur travel tips',
    'Rajasthan itinerary guide foreigners',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Travel Blog: Rajasthan & India Road Trip Guides',
    description:
      'Route itineraries, safety guides, seasonal planning tips and packing lists for international travellers exploring Rajasthan and India by private bus.',
    url: PAGE_URL,
    type: 'website',
    siteName: SITE.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Travel Blog: Rajasthan & India Road Trip Guides | ShivShakti Tourist',
    description:
      'Expert guides for international travellers planning a Rajasthan or India road trip.',
  },
}

const categories = ['All', 'Itineraries', 'Safety & Travel Tips', 'Planning'] as const

export default function BlogIndexPage() {
  const featured = blogPosts[0]
  const rest = blogPosts.slice(1)

  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-950 to-emerald-800 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-emerald-400 font-semibold text-sm tracking-widest uppercase mb-3">
            From the Road
          </p>
          <h1 className="font-serif text-5xl lg:text-6xl font-bold text-white mb-4">
            Travel Guides & Blog
          </h1>
          <p className="text-emerald-200 text-lg max-w-2xl mx-auto">
            Honest, practical guides for international travellers exploring Rajasthan and India
            by private bus, from the team that drives these roads every day.
          </p>
        </div>
      </section>

      {/* Featured post */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href={`/blog/${featured.slug}`}
            className="group grid md:grid-cols-2 gap-8 items-center bg-emerald-50 rounded-2xl p-8 border border-emerald-100 hover:border-emerald-300 transition-all hover:shadow-lg"
          >
            {/* Placeholder image slot */}
            <div className="bg-gradient-to-br from-emerald-700 to-emerald-950 rounded-xl aspect-[16/9] flex items-center justify-center">
              {/* Replace with next/image once a real hero photo is available */}
              <span className="text-emerald-300 text-sm font-medium">📸 Photo coming soon</span>
            </div>
            <div>
              <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full border mb-3 ${categoryColors[featured.category]}`}>
                {featured.category}
              </span>
              <p className="text-emerald-600 text-xs font-medium mb-1">Featured Post</p>
              <h2 className="font-serif text-2xl lg:text-3xl font-bold text-emerald-950 mb-3 group-hover:text-emerald-700 transition-colors">
                {featured.title}
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">{featured.description}</p>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <time dateTime={featured.publishedAt}>
                  {new Date(featured.publishedAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
                <span>·</span>
                <span>{featured.readingTime} min read</span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* All posts grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <span
                key={cat}
                className="px-3 py-1.5 text-xs font-semibold rounded-full border border-emerald-200 bg-white text-emerald-700"
              >
                {cat}
              </span>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-emerald-200 hover:shadow-xl transition-all hover:-translate-y-1"
              >
                {/* Placeholder image */}
                <div className="bg-gradient-to-br from-emerald-800 to-emerald-950 aspect-[16/9] flex items-center justify-center">
                  {/* Replace with next/image once a real photo is available */}
                  <span className="text-emerald-400 text-xs">📸 Photo coming soon</span>
                </div>
                <div className="p-5">
                  <span className={`inline-block text-xs font-semibold px-2 py-0.5 rounded-full border mb-3 ${categoryColors[post.category]}`}>
                    {post.category}
                  </span>
                  <h2 className="font-serif text-lg font-bold text-emerald-950 mb-2 group-hover:text-emerald-700 transition-colors leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">
                    {post.description}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <time dateTime={post.publishedAt}>
                      {new Date(post.publishedAt).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </time>
                    <span>{post.readingTime} min read</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-emerald-950 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-white mb-3">
            Ready to Plan Your Trip?
          </h2>
          <p className="text-emerald-300 mb-8">
            Our guides are a start, but nothing beats a personalised itinerary built around
            your dates, group and interests.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-all hover:-translate-y-0.5"
          >
            Get a Custom Quote →
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  )
}
