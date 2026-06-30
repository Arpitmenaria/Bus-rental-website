import { SITE } from '@/lib/site'

/**
 * Renders only when at least one credential value is set in lib/site.ts.
 * Badge logo images go in /public/badges/<name>.png — see TODO comments below.
 */
export default function CredentialsStrip() {
  // Cast from literal types (as const) so runtime truthiness checks work
  const gst = SITE.credentials.gst as string
  const registration = SITE.credentials.registration as string
  const iato = SITE.credentials.iato as boolean
  const iatoNumber = SITE.credentials.iatoNumber as string
  const ministryApproved = SITE.credentials.ministryApproved as boolean
  const rajasthanTourism = SITE.credentials.rajasthanTourism as string

  if (!gst && !registration && !iato && !ministryApproved && !rajasthanTourism) return null

  return (
    <div className="bg-emerald-950/80 border-t border-emerald-800/50 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-emerald-500 text-xs font-semibold uppercase tracking-widest text-center mb-5">
          Registered &amp; Certified
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">

          {gst && (
            <div className="text-center">
              <p className="text-emerald-600 text-[10px] uppercase tracking-widest mb-0.5">GST No.</p>
              <p className="text-emerald-300 text-sm font-mono font-semibold">{gst}</p>
            </div>
          )}

          {registration && (
            <div className="text-center">
              <p className="text-emerald-600 text-[10px] uppercase tracking-widest mb-0.5">Registration</p>
              <p className="text-emerald-300 text-sm font-mono font-semibold">{registration}</p>
            </div>
          )}

          {rajasthanTourism && (
            <div className="text-center">
              <p className="text-emerald-600 text-[10px] uppercase tracking-widest mb-0.5">Rajasthan Tourism</p>
              <p className="text-emerald-300 text-sm font-mono font-semibold">{rajasthanTourism}</p>
            </div>
          )}

          {iato && iatoNumber && (
            <div className="text-center">
              <p className="text-emerald-600 text-[10px] uppercase tracking-widest mb-0.5">IATO Member</p>
              <p className="text-emerald-300 text-sm font-mono font-semibold">{iatoNumber}</p>
              {/* TODO: Add /public/badges/iato.png and replace the text with:
              <Image src="/badges/iato.png" alt="IATO Member" width={80} height={40} className="mx-auto" />
              */}
            </div>
          )}

          {ministryApproved && (
            <div className="text-center">
              {/* TODO: Add /public/badges/ministry-of-tourism.png and use an Image instead */}
              <div className="inline-flex items-center gap-1.5 border border-emerald-700 bg-emerald-900/60 text-emerald-300 text-xs font-semibold px-3 py-1.5 rounded-lg">
                <span aria-hidden="true">✓</span>
                Ministry of Tourism Approved
              </div>
            </div>
          )}

          {/* TODO: When you have badge PNGs:
              1. Copy them to /public/badges/<name>.png
              2. Import Image from 'next/image'
              3. Replace each text block above with an <Image> element
              Available badge slots:
              - /public/badges/iato.png            (IATO membership)
              - /public/badges/ministry-of-tourism.png (Ministry of Tourism)
              - /public/badges/rajasthan-tourism.png   (Rajasthan Tourism Dept)
          */}
        </div>
      </div>
    </div>
  )
}
