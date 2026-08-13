import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import JsonLd from '@/components/JsonLd'
import { SITE, waUrl } from '@/lib/site'
import { getBlogPost, blogPosts, categoryColors } from '@/lib/blog-posts'
import { articleSchema } from '@/lib/schema'

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const post = getBlogPost(params.slug)
  if (!post) return {}

  const url = `${SITE.url}/blog/${post.slug}`
  return {
    title: `${post.title} | ShivShakti Tourist`,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: post.ogTitle,
      description: post.ogDescription,
      url,
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [SITE.name],
      siteName: SITE.name,
      images: [
        {
          url: SITE.hero.busImage,
          width: SITE.hero.busImageWidth,
          height: SITE.hero.busImageHeight,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.ogTitle,
      description: post.ogDescription,
    },
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug)
  if (!post) notFound()

  const url = `${SITE.url}/blog/${post.slug}`
  const schema = articleSchema({
    title: post.title,
    description: post.description,
    url,
    publishedAt: post.publishedAt,
    updatedAt: post.updatedAt,
  })

  const relatedPosts = blogPosts.filter(
    (p) => p.slug !== post.slug && p.category === post.category
  ).slice(0, 2)

  return (
    <main>
      <Navbar />
      <JsonLd data={schema} />

      {/* Article header */}
      <section className="bg-gradient-to-br from-emerald-950 to-emerald-800 pt-32 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 mb-5">
            <Link
              href="/blog"
              className="text-emerald-400 text-sm hover:text-emerald-300 transition-colors"
            >
              ← All Articles
            </Link>
            <span className="text-emerald-700">·</span>
            <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${categoryColors[post.category]}`}>
              {post.category}
            </span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
            {post.title}
          </h1>
          <p className="text-emerald-200 text-lg mb-6 leading-relaxed">{post.description}</p>
          <div className="flex flex-wrap items-center gap-4 text-emerald-400 text-sm">
            <span>By {SITE.name}</span>
            <span aria-hidden="true">·</span>
            <time dateTime={post.publishedAt}>
              {new Date(post.publishedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            <span aria-hidden="true">·</span>
            <span>{post.readingTime} min read</span>
          </div>
        </div>
      </section>

      {/* Hero image placeholder: swap for a real photo once available */}
      <div className="bg-emerald-900 h-64 sm:h-80 flex items-center justify-center">
        <p className="text-emerald-400 text-sm font-medium">
          📸 Hero photo coming soon
        </p>
      </div>

      {/* Article body */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-10">
            <p className="text-amber-800 font-semibold text-sm uppercase tracking-wide mb-1">
              Content Coming Soon
            </p>
            <p className="text-amber-700 text-sm leading-relaxed">
              This article is being written. In the meantime, feel free to{' '}
              <a
                href={waUrl(`Hi ShivShakti, I have a question about: ${post.title}`)}
                target="_blank"
                rel="noopener noreferrer"
                className="underline font-medium hover:text-amber-800"
              >
                WhatsApp us directly
              </a>
              , we reply in under 5 minutes and are happy to answer any questions about
              planning your trip.
            </p>
          </div>

          {/*
           * Replace the section below with the full article body once written.
           * Recommended structure:
           *
           * ## Introduction / hook (2–3 paragraphs)
           * ## [Section heading] (H2)
           * [2–3 paragraphs + bullet list]
           * ## [Section heading]
           * ...
           * ## Quick recap / summary table
           * ## Bottom CTA
           *
           * Aim for 1,200–1,800 words. Use <h2> and <h3> for headings,
           * <ul>/<ol> for lists. Do not use MDX; plain JSX is fine here.
           */}
          <div className="prose prose-emerald prose-lg max-w-none text-gray-700">
            <p className="lead text-gray-500 italic">
              Full article coming soon. Check back shortly, or WhatsApp us with any
              specific questions about {post.title.toLowerCase()}.
            </p>
          </div>
        </div>
      </section>

      {/* Related posts */}
      {relatedPosts.length > 0 && (
        <section className="py-14 bg-gray-50 border-t border-gray-100">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <h2 className="font-serif text-2xl font-bold text-emerald-950 mb-6">
              Related Articles
            </h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {relatedPosts.map((related) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="group bg-white rounded-xl p-5 border border-gray-100 hover:border-emerald-200 hover:shadow-lg transition-all"
                >
                  <span className={`inline-block text-xs font-semibold px-2 py-0.5 rounded-full border mb-2 ${categoryColors[related.category]}`}>
                    {related.category}
                  </span>
                  <h3 className="font-serif font-bold text-emerald-950 group-hover:text-emerald-700 transition-colors leading-snug">
                    {related.title}
                  </h3>
                  <p className="text-gray-500 text-xs mt-2">{related.readingTime} min read</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-14 bg-emerald-950 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-white mb-3">
            Ready to Plan Your Trip?
          </h2>
          <p className="text-emerald-300 mb-8">
            Tell us your travel dates and group size, we reply within 5 minutes and provide a
            full quote within 2 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={waUrl(`Hi ShivShakti, I just read about ${post.title} and would like to plan a trip.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-6 py-3.5 rounded-xl transition-all hover:-translate-y-0.5"
            >
              WhatsApp Us →
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-emerald-600 text-emerald-400 hover:bg-emerald-900 font-semibold px-6 py-3.5 rounded-xl transition-all"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
