import JsonLd from '@/components/JsonLd'
import { SITE } from '@/lib/site'
import { aggregateRatingSchema } from '@/lib/schema'

/**
 * Reviews embed section with Google + TripAdvisor widget slots.
 *
 * Pass includeJsonLd={false} on pages that already emit orgSchema() (which
 * contains aggregateRating), to avoid duplicate structured data.
 */
export default function ReviewsSection({ includeJsonLd = true }: { includeJsonLd?: boolean }) {
  const googleUrl = SITE.reviews.googleUrl as string
  const tripAdvisorUrl = SITE.reviews.tripAdvisorUrl as string

  return (
    <section className="py-16 bg-gray-50">
      {includeJsonLd && <JsonLd data={aggregateRatingSchema()} />}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <p className="text-emerald-600 font-semibold text-sm tracking-widest uppercase mb-2">
            Verified by Real Travellers
          </p>
          <h2 className="font-serif text-4xl font-bold text-emerald-950 mb-3">
            What Guests Say
          </h2>
          {/* Aggregate rating summary */}
          <div className="inline-flex items-center gap-2 bg-white border border-gray-100 rounded-full px-5 py-2 shadow-sm">
            <span className="text-amber-400 text-xl" aria-hidden="true">★</span>
            <span className="font-bold text-emerald-950 text-lg">{SITE.stats.rating}</span>
            <span className="text-gray-500 text-sm">/ 5</span>
            <span className="text-gray-500 mx-1">·</span>
            <span className="text-gray-600 text-sm">{SITE.stats.reviewCount.toLocaleString()}+ reviews</span>
            <span className="text-gray-500 mx-1">·</span>
            <span className="text-gray-600 text-sm">{SITE.stats.countries} countries</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">

          {/* ── Google Reviews embed slot ───────────────────────────── */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="px-6 pt-5 pb-3 border-b border-gray-50 flex items-center gap-3">
              {/* Google "G" wordmark colour */}
              <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <h3 className="font-bold text-emerald-950">Google Reviews</h3>
            </div>

            <div className="p-6">
              {/* ── TODO: Paste your Google review widget here ──
                  Options:
                  A) Link to your Google Business listing:
                     <a href={SITE.reviews.googleUrl} target="_blank" rel="noopener noreferrer">
                       Read all {SITE.stats.reviewCount}+ reviews on Google →
                     </a>
                  B) Embed a third-party widget (e.g. Elfsight Google Reviews, Reviewsonmywebsite).
                     Paste their <script> tag here and mark this component 'use client'.
                  C) Use the Google Places API to fetch & render reviews server-side.
              */}
              <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-5 text-center">
                <p className="text-emerald-800 font-semibold mb-1">Google Reviews Widget</p>
                <p className="text-emerald-600 text-sm mb-4">
                  Add your Google Business Place ID to <code className="bg-emerald-100 px-1 rounded text-xs">lib/site.ts</code> →{' '}
                  <code className="bg-emerald-100 px-1 rounded text-xs">reviews.googleUrl</code>
                </p>
                {googleUrl ? (
                  <a
                    href={googleUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-emerald-700 font-semibold text-sm border border-emerald-300 rounded-lg px-4 py-2 hover:bg-emerald-100 transition-colors"
                  >
                    Read our Google Reviews →
                  </a>
                ) : (
                  <p className="text-amber-600 text-xs font-mono">[TODO: set reviews.googleUrl in lib/site.ts]</p>
                )}
              </div>
            </div>
          </div>

          {/* ── TripAdvisor embed slot ──────────────────────────────── */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="px-6 pt-5 pb-3 border-b border-gray-50 flex items-center gap-3">
              {/* TripAdvisor owl green */}
              <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" fill="#34E0A1" aria-hidden="true">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/>
              </svg>
              <h3 className="font-bold text-emerald-950">TripAdvisor</h3>
            </div>

            <div className="p-6">
              {/* ── TODO: Paste your TripAdvisor widget here ──
                  1. Go to tripadvisor.com/Widgets
                  2. Select your property and choose a widget type
                  3. Copy the embed code and paste it below
                  4. If the widget needs JavaScript, add 'use client' at the top of this file
                  Alternatively, just link to your TripAdvisor listing via reviews.tripAdvisorUrl.
              */}
              <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-5 text-center">
                <p className="text-emerald-800 font-semibold mb-1">TripAdvisor Widget</p>
                <p className="text-emerald-600 text-sm mb-4">
                  Set <code className="bg-emerald-100 px-1 rounded text-xs">reviews.tripAdvisorUrl</code> in{' '}
                  <code className="bg-emerald-100 px-1 rounded text-xs">lib/site.ts</code>, or paste the widget HTML here.
                </p>
                {tripAdvisorUrl ? (
                  <a
                    href={tripAdvisorUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-emerald-700 font-semibold text-sm border border-emerald-300 rounded-lg px-4 py-2 hover:bg-emerald-100 transition-colors"
                  >
                    Read our TripAdvisor Reviews →
                  </a>
                ) : (
                  <p className="text-amber-600 text-xs font-mono">[TODO: set reviews.tripAdvisorUrl in lib/site.ts]</p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Review CTA */}
        <p className="text-center text-gray-500 text-sm mt-8">
          Travelled with us?{' '}
          {googleUrl ? (
            <a href={googleUrl} target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline font-medium">
              Leave us a review on Google
            </a>
          ) : (
            <span className="text-emerald-600 font-medium">We'd love your review on Google or TripAdvisor.</span>
          )}
        </p>
      </div>
    </section>
  )
}
