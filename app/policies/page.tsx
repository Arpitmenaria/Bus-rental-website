import Link from 'next/link'
import Navbar from '@/components/Navbar'
import { SITE, waUrl } from '@/lib/site'

// ── Helpers ───────────────────────────────────────────────────────────────────

function Todo({ children }: { children: React.ReactNode }) {
  return (
    <mark className="bg-yellow-100 text-yellow-900 px-1 py-0.5 rounded text-[0.9em] font-mono not-italic">
      {children}
    </mark>
  )
}

function SectionCard({ id, title, children }: { id?: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-7 sm:p-9">
      <h2 className="font-serif text-2xl font-bold text-emerald-950 mb-5 pb-4 border-b border-emerald-100">
        {title}
      </h2>
      {children}
    </section>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function PoliciesPage() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-950 to-emerald-800 pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-emerald-400 font-semibold text-sm tracking-widest uppercase mb-3">
            Clear & Written
          </p>
          <h1 className="font-serif text-5xl lg:text-6xl font-bold text-white mb-4">
            Booking Policies
          </h1>
          <p className="text-emerald-200 text-lg">
            Everything in writing, before you pay anything. No surprises.
          </p>
        </div>
      </section>

      {/* Legal disclaimer banner */}
      <div className="bg-amber-50 border-b border-amber-200 py-3">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-amber-800 text-xs leading-relaxed">
            <strong>Note:</strong> This page is template copy and not legal advice. Cancellation,
            refund, and liability terms should be reviewed and adapted to your business and local
            regulations before going live. Items marked{' '}
            <mark className="bg-yellow-100 text-yellow-900 px-0.5 rounded text-[0.9em] font-mono">
              [TODO: ...]
            </mark>{' '}
            must be filled in before publishing.
          </p>
        </div>
      </div>

      {/* Policies content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">

          {/* Booking process */}
          <SectionCard id="booking-process" title="How Booking Works">
            <ol className="space-y-5">
              {[
                {
                  step: 'Enquiry',
                  text: (
                    <>
                      Message us via WhatsApp, email, or the{' '}
                      <Link href="/contact" className="text-emerald-700 underline hover:text-emerald-900">
                        contact form
                      </Link>{' '}
                      with your dates, group size, and interests.
                    </>
                  ),
                },
                {
                  step: 'Custom Quote',
                  text: 'We send a written itinerary and an all-in price, with inclusions and exclusions listed clearly.',
                },
                {
                  step: 'Confirmation',
                  text: (
                    <>
                      A deposit of <Todo>[TODO: %]</Todo> confirms your booking; you receive a
                      written confirmation and invoice immediately.
                    </>
                  ),
                },
                {
                  step: 'Balance Payment',
                  text: (
                    <>
                      Due <Todo>[TODO: on arrival / X days before departure]</Todo> via{' '}
                      <Todo>[TODO: payment methods — card / UPI / bank transfer]</Todo>.
                    </>
                  ),
                },
                {
                  step: "You're Set",
                  text: "Driver and vehicle details are shared before your start date. Our team is reachable 24/7 throughout your journey.",
                },
              ].map(({ step, text }, i) => (
                <li key={step} className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center font-bold text-sm">
                    {i + 1}
                  </span>
                  <div className="pt-1">
                    <span className="font-bold text-emerald-950">{step} — </span>
                    <span className="text-gray-700 text-sm leading-relaxed">{text}</span>
                  </div>
                </li>
              ))}
            </ol>
            <p className="mt-6 text-gray-600 text-sm bg-emerald-50 rounded-xl px-4 py-3 border border-emerald-100">
              We never ask for informal cash payments to confirm a booking. Every transaction comes with a written invoice.
            </p>
          </SectionCard>

          {/* Cancellation & Refund */}
          <SectionCard id="cancellation" title="Cancellation &amp; Refund Policy">
            <p className="text-gray-500 text-sm italic mb-5">
              Template — set your own tiers and have these terms reviewed locally before publishing.
            </p>

            {/* Refund table */}
            <div className="overflow-x-auto rounded-xl border border-gray-200 mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-emerald-950 text-white">
                    <th className="text-left px-5 py-3 font-semibold rounded-tl-xl">Notice before start date</th>
                    <th className="text-left px-5 py-3 font-semibold rounded-tr-xl">Refund of amount paid</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    ['[TODO: e.g. 30+ days]', '[TODO: e.g. 90%]'],
                    ['[TODO: e.g. 15–29 days]', '[TODO: e.g. 50%]'],
                    ['[TODO: e.g. 7–14 days]', '[TODO: e.g. 25%]'],
                    ['[TODO: e.g. under 7 days]', '[TODO: e.g. no refund]'],
                  ].map(([notice, refund], i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-5 py-3.5 font-medium text-gray-800">
                        <Todo>{notice}</Todo>
                      </td>
                      <td className="px-5 py-3.5 text-gray-700">
                        <Todo>{refund}</Todo>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 flex-shrink-0 mt-1">•</span>
                Refunds are processed to your original payment method within{' '}
                <Todo>[TODO: e.g. 7–10 business days]</Todo>.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 flex-shrink-0 mt-1">•</span>
                If <strong>we</strong> cancel for any reason within our control, you receive a full refund or a
                rescheduled trip — your choice.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 flex-shrink-0 mt-1">•</span>
                Circumstances beyond anyone's control (natural events, government restrictions, etc.) are
                handled case by case, and we'll always work with you in good faith to reschedule.
              </li>
            </ul>
          </SectionCard>

          {/* What's included */}
          <SectionCard id="inclusions" title="What's Included &amp; Not Included">
            <div className="grid sm:grid-cols-2 gap-6">
              {/* Included */}
              <div>
                <h3 className="font-bold text-emerald-950 mb-3 flex items-center gap-2">
                  <span className="w-5 h-5 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0" aria-hidden="true">✓</span>
                  Included
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  {[
                    <>Air-conditioned <Todo>[TODO: vehicle type]</Todo> with professional, English-speaking driver</>,
                    'Fuel, tolls, parking, and inter-state taxes',
                    'GPS tracking and 24/7 support throughout the journey',
                    <><Todo>[TODO: add — driver accommodation &amp; meals, bottled water, etc.]</Todo></>,
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-emerald-500 flex-shrink-0 mt-0.5">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Not included */}
              <div>
                <h3 className="font-bold text-emerald-950 mb-3 flex items-center gap-2">
                  <span className="w-5 h-5 bg-red-50 text-red-500 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0" aria-hidden="true">✕</span>
                  Not Included <span className="text-gray-400 font-normal text-xs">(unless in your quote)</span>
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  {[
                    <><Todo>[TODO: adjust if you bundle these]</Todo> Hotel stays and meals</>,
                    'Monument and attraction entry fees',
                    'Personal expenses and shopping',
                    <><Todo>[TODO: adjust]</Todo> Guide fees at individual sites</>,
                    'Tips and gratuities',
                    'Travel insurance — we strongly recommend all international guests arrange their own',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-red-400 flex-shrink-0 mt-0.5">✕</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="mt-5 text-xs text-gray-400 italic">
              Your final written quote will always list inclusions and exclusions explicitly.
              Nothing is assumed.
            </p>
          </SectionCard>

          {/* Privacy + disputes placeholder */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-7">
            <h2 className="font-serif text-2xl font-bold text-emerald-950 mb-2">Other Terms</h2>
            <p className="text-gray-500 text-sm mb-2">
              <Todo>[TODO: Add privacy policy, dispute resolution, governing law, and liability
              clauses after review by a local professional. Minimum: data handling, jurisdiction,
              and insurance responsibility.]</Todo>
            </p>
            <p className="text-gray-400 text-xs italic">
              This page is a template and not legal advice. Have it reviewed before publishing.
            </p>
          </div>

        </div>
      </section>

      {/* FAQ link + CTA */}
      <section className="py-14 bg-emerald-950 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-white mb-3">Questions Before You Book?</h2>
          <p className="text-emerald-300 mb-8">
            Check our FAQ for answers on safety, payment, and what to expect — or message us
            directly and we'll reply in {SITE.response.whatsapp}.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/faq"
              className="flex items-center justify-center bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-3.5 rounded-xl transition-colors"
            >
              Read the FAQ →
            </Link>
            <a
              href={waUrl("Hi ShivShakti, I have a question about your booking terms.")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center border-2 border-emerald-600 text-emerald-300 hover:bg-emerald-900 font-semibold px-6 py-3.5 rounded-xl transition-colors"
            >
              Ask on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
