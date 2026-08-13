import Link from 'next/link'
import CredentialsStrip from '@/components/CredentialsStrip'
import AnalyticsLink from '@/components/AnalyticsLink'
import { SITE } from '@/lib/site'
import { blogPosts } from '@/lib/blog-posts'

export default function Footer() {
  return (
    <footer className="bg-emerald-950 text-emerald-300 py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 bg-emerald-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-serif font-bold text-lg" aria-hidden="true">S</span>
              </div>
              <div>
                <p className="font-serif font-bold text-white text-base leading-none">{SITE.name.split(' ')[0]}</p>
                <p className="text-emerald-400 text-xs tracking-widest uppercase">Tourist</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Udaipur's most trusted luxury bus rental and tour operator serving international visitors since {SITE.founded}.
            </p>
            <p className="text-xs text-emerald-500">⭐ {SITE.stats.rating}/5 · {SITE.stats.reviewCount}+ reviews</p>
          </div>

          {/* Navigate */}
          <div>
            <h3 className="font-bold text-white mb-4 uppercase text-xs tracking-widest">Explore</h3>
            <ul className="space-y-2 text-sm">
              {[
                { label: 'Our Fleet', href: '/fleet' },
                { label: 'Rajasthan Tours', href: '/rajasthan-tours' },
                { label: 'India Tours', href: '/india-tours' },
                { label: 'Private Charter', href: '/charter' },
                { label: 'About Us', href: '/about' },
                { label: 'FAQ', href: '/faq' },
                { label: 'Booking Policies', href: '/policies' },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-emerald-200 transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Blog */}
          <div>
            <h3 className="font-bold text-white mb-4 uppercase text-xs tracking-widest">Travel Guides</h3>
            <ul className="space-y-2 text-sm">
              {blogPosts.slice(0, 5).map((post) => (
                <li key={post.slug}>
                  <Link href={`/blog/${post.slug}`} className="hover:text-emerald-200 transition-colors leading-snug block">
                    {post.title.split(':')[0]}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/blog" className="text-emerald-500 hover:text-emerald-300 transition-colors font-medium">
                  All Articles →
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-white mb-4 uppercase text-xs tracking-widest">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 flex-shrink-0 mt-0.5" aria-hidden="true">📍</span>
                <span>{SITE.address.street}, {SITE.address.city}, {SITE.address.state} {SITE.address.pincode}</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-500" aria-hidden="true">📞</span>
                <AnalyticsLink href={`tel:+${SITE.phone.wa}`} event="phone_click" source="footer" className="hover:text-white transition-colors">{SITE.phone.display}</AnalyticsLink>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-500" aria-hidden="true">✉</span>
                <AnalyticsLink href={`mailto:${SITE.email.main}`} event="email_click" source="footer" className="hover:text-white transition-colors">{SITE.email.main}</AnalyticsLink>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-500" aria-hidden="true">🕐</span>
                <span>24/7 WhatsApp Support</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-emerald-800 pt-6">
          <CredentialsStrip />
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 mt-4">
            <p className="text-xs text-emerald-400">© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
            <div className="flex items-center gap-4 text-xs text-emerald-400">
              <Link href="/faq" className="hover:text-emerald-200 transition-colors">FAQ</Link>
              <Link href="/policies" className="hover:text-emerald-200 transition-colors">Policies</Link>
              <span>Made with ♥ in Udaipur</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
