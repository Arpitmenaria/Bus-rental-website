'use client'

import dynamic from 'next/dynamic'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { SITE, WA_DEFAULT } from '@/lib/site'

// Three.js canvas — completely excluded from SSR and the initial JS bundle.
// The dynamic() call creates a separate lazy chunk; it is only fetched after
// shouldRender3D() confirms the device can handle it.
const BusScene = dynamic(() => import('@/components/BusScene'), { ssr: false })

// ── Device capability detection ───────────────────────────────────────────────
// Called client-side only. Returns false → serve the static SVG forever.

function shouldRender3D(): boolean {
  // Reduced-motion: accessibility preference also signals "save resources"
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false

  // Narrow viewport = almost certainly mobile; skip 3D for battery/perf
  if (window.innerWidth < 768) return false

  // Low device memory (<4 GB) — Chrome/Edge only; absent in Safari
  type NavWithMemory = Navigator & { deviceMemory?: number }
  const mem = (navigator as NavWithMemory).deviceMemory
  if (typeof mem === 'number' && mem < 4) return false

  // Low CPU core count — heuristic for low-power devices
  if (typeof navigator.hardwareConcurrency === 'number' && navigator.hardwareConcurrency < 4) return false

  return true
}

// ── Static hero image (LCP element) ──────────────────────────────────────────
// Shown immediately on first paint and kept visible until 3D is ready.
// On mobile / reduced-motion / low-power devices it is the permanent visual.
//
// TODO: Replace /hero-bus.svg with a real photograph of your bus for the best
// possible LCP score. Add the file at /public/hero-bus.jpg (≥1200×750 px,
// .webp or .jpg). Then replace the <Image> below with:
//
//   <Image src="/hero-bus.jpg" alt="ShivShakti luxury bus" fill priority
//          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 600px"
//          className="object-cover" />
//
// The SVG works as a placeholder and fallback; it has no negative LCP impact
// because its <Image priority> tag signals the browser to preload it.

function HeroPlaceholder({ visible }: { visible: boolean }) {
  return (
    <div
      className={`absolute inset-0 transition-opacity duration-700 ${visible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      aria-hidden={!visible}
    >
      <div className="relative w-full h-full bg-gradient-to-b from-emerald-950 to-emerald-800">
        <Image
          src="/hero-bus.svg"
          alt="ShivShakti Tourist luxury bus — Rajasthan, India"
          fill
          priority          // <-- LCP hint: browser fetches this on first paint
          unoptimized       // SVGs skip the optimization pipeline
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 600px"
          className="object-contain object-center"
        />
      </div>
    </div>
  )
}

// ── Hero stats (below the headline) ──────────────────────────────────────────

const heroStats = [
  { value: `${SITE.stats.buses}+`,   label: 'Luxury Buses' },
  { value: String(SITE.stats.years), label: 'Years of Service' },
  { value: SITE.stats.tourists,      label: 'Happy Tourists' },
  { value: String(SITE.stats.states),label: 'States Covered' },
]

const WA_ICON = (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

// ── Main component ────────────────────────────────────────────────────────────

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  // 3D state machine
  // capable → device passed all checks; mount → canvas is in the DOM; ready → R3F onCreated fired
  const [capable, setCapable] = useState(false)
  const [mount,   setMount]   = useState(false)
  const [ready,   setReady]   = useState(false)

  // 1. On first client render, detect device and schedule the canvas mount.
  //    We defer via requestIdleCallback (or rAF×2 for Safari) so the static
  //    hero image renders and hits LCP before any Three.js work starts.
  useEffect(() => {
    if (!shouldRender3D()) return

    setCapable(true)

    // requestIdleCallback fires when the browser is idle after first paint.
    // { timeout: 2000 } forces it after 2 s even if the browser never idles.
    if ('requestIdleCallback' in window) {
      const id = requestIdleCallback(() => setMount(true), { timeout: 2000 })
      return () => cancelIdleCallback(id)
    }

    // Safari fallback: two rAF cycles guarantee first paint has happened.
    let r1 = 0, r2 = 0
    r1 = requestAnimationFrame(() => { r2 = requestAnimationFrame(() => setMount(true)) })
    return () => { cancelAnimationFrame(r1); cancelAnimationFrame(r2) }
  }, [])

  // 2. Scroll progress for the bus drive-in animation (only relevant when 3D is active).
  useEffect(() => {
    const onScroll = () => {
      const hero = heroRef.current
      if (!hero) return
      const rect = hero.getBoundingClientRect()
      const total = hero.offsetHeight + window.innerHeight
      setScrollProgress(Math.min(1, Math.max(0, (window.innerHeight - rect.top) / total)))
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section
      ref={heroRef}
      className="min-h-screen bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-800 relative flex items-center"
    >
      <div
        className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5 pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 w-full">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* ── Left — copy ──────────────────────────────────────────── */}
          <div className="order-2 lg:order-1">
            <span className="inline-block bg-emerald-500/20 text-emerald-300 text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-6 border border-emerald-500/30">
              Premium Bus Tours from Udaipur, Rajasthan
            </span>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Discover India
              <span className="block text-emerald-400">in Luxury</span>
            </h1>
            <p className="text-emerald-200 text-lg leading-relaxed mb-8 max-w-lg">
              GPS-tracked luxury buses, English-speaking drivers, and expertly crafted
              itineraries across Rajasthan and all of India — tailored for discerning
              international travellers.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-4 gap-4 mb-10">
              {heroStats.map((s) => (
                <div key={s.label} className="text-center">
                  <p className="font-serif text-3xl font-bold text-emerald-400">{s.value}</p>
                  <p className="text-emerald-300 text-xs mt-0.5 leading-tight">{s.label}</p>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={WA_DEFAULT}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-6 py-3.5 rounded-xl shadow-xl shadow-emerald-500/30 transition-all hover:-translate-y-0.5"
              >
                {WA_ICON}
                Book Now on WhatsApp
              </a>
              <Link
                href="/rajasthan-tours"
                className="flex items-center justify-center gap-2 border-2 border-emerald-400/60 text-emerald-300 hover:bg-emerald-400/10 font-semibold px-6 py-3.5 rounded-xl transition-all"
              >
                Explore Tours →
              </Link>
            </div>
          </div>

          {/* ── Right — bus visual ────────────────────────────────────── */}
          {/* Space is reserved at exact canvas dimensions — no layout shift */}
          <div className="order-1 lg:order-2 h-[380px] sm:h-[460px] lg:h-[540px] rounded-2xl overflow-hidden ring-1 ring-emerald-500/30 shadow-2xl shadow-emerald-900/60 relative bg-emerald-950">

            {/* Static hero image — LCP element, visible immediately and on all devices */}
            <HeroPlaceholder visible={!ready} />

            {/* 3D canvas — mounted after first paint on capable devices only.
                Fades in over the static placeholder once R3F signals onCreated. */}
            {mount && (
              <div
                className={`absolute inset-0 transition-opacity duration-700 ${ready ? 'opacity-100' : 'opacity-0'}`}
              >
                <BusScene scrollProgress={scrollProgress} onReady={() => setReady(true)} />
              </div>
            )}

            {/* Loading hint — shown while canvas is mounting but not yet painted */}
            {capable && mount && !ready && (
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 pointer-events-none">
                <span className="text-xs font-medium text-emerald-200 bg-emerald-950/80 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg">
                  Loading 3D view…
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce" aria-hidden="true">
        <div className="w-6 h-10 border-2 border-emerald-400/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-emerald-400/70 rounded-full" />
        </div>
      </div>
    </section>
  )
}
