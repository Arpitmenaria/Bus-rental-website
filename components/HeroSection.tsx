'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { SITE, WA_DEFAULT } from '@/lib/site'
import { trackWaClick } from '@/lib/analytics'

// ── Motion / input preference hooks ──────────────────────────────────────────

function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduced(mq.matches)
    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])
  return reduced
}

function useIsTouchDevice(): boolean {
  const [touch, setTouch] = useState(false)
  useEffect(() => {
    setTouch(window.matchMedia('(pointer: coarse)').matches)
  }, [])
  return touch
}

// ── Bus visual — "cutout" mode ────────────────────────────────────────────────
// Used once SITE.hero.busImageMode is a background-removed PNG. Floats over the
// panel with mouse-parallax tilt, an idle bob, a glow, and a ground shadow.

function BusCutoutVisual() {
  const reducedMotion = usePrefersReducedMotion()
  const isTouch = useIsTouchDevice()
  const panelRef = useRef<HTMLDivElement>(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  useEffect(() => {
    if (reducedMotion || isTouch) return
    const panel = panelRef.current
    if (!panel) return

    let raf = 0
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const rect = panel.getBoundingClientRect()
        const px = (e.clientX - rect.left) / rect.width
        const py = (e.clientY - rect.top) / rect.height
        setTilt({
          x: Math.max(-6, Math.min(6, (0.5 - py) * 8)),
          y: Math.max(-6, Math.min(6, (px - 0.5) * 12)),
        })
      })
    }
    const onLeave = () => setTilt({ x: 0, y: 0 })

    panel.addEventListener('mousemove', onMove)
    panel.addEventListener('mouseleave', onLeave)
    return () => {
      panel.removeEventListener('mousemove', onMove)
      panel.removeEventListener('mouseleave', onLeave)
      cancelAnimationFrame(raf)
    }
  }, [reducedMotion, isTouch])

  return (
    <div
      ref={panelRef}
      className="order-1 lg:order-2 h-[380px] sm:h-[460px] lg:h-[540px] rounded-2xl overflow-hidden ring-1 ring-emerald-500/30 shadow-2xl shadow-emerald-900/60 relative bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-800"
      style={{ perspective: '1200px' }}
    >
      {/* Radial glow behind the bus — separates the dark vehicle from the dark panel */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden="true">
        <div className="w-[75%] h-[75%] rounded-full bg-[radial-gradient(closest-side,rgba(209,250,229,0.35),rgba(5,150,105,0.14)_60%,transparent_80%)] blur-2xl" />
      </div>

      {/* Ground shadow */}
      <div
        className="absolute bottom-[10%] left-1/2 -translate-x-1/2 w-[62%] h-7 bg-black/50 rounded-full blur-xl pointer-events-none"
        aria-hidden="true"
      />

      {/* Ease-in zoom on first load (one-shot) */}
      <div className={`absolute inset-0 flex items-center justify-center ${reducedMotion ? '' : 'motion-safe:animate-hero-zoom-in'}`}>
        {/* Slow idle float (infinite loop) */}
        <div className={`w-[78%] h-[78%] relative ${reducedMotion || isTouch ? '' : 'motion-safe:animate-hero-float'}`}>
          {/* Mouse-parallax tilt */}
          <div
            className="w-full h-full relative transition-transform duration-150 ease-out"
            style={{
              transform: reducedMotion ? undefined : `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
              transformStyle: 'preserve-3d',
            }}
          >
            <Image
              src={SITE.hero.busImage}
              alt="ShivShakti Tourist luxury bus"
              width={SITE.hero.busImageWidth}
              height={SITE.hero.busImageHeight}
              priority
              sizes="(max-width: 1024px) 70vw, 32vw"
              className="w-full h-full object-contain [filter:drop-shadow(0_22px_20px_rgba(0,0,0,0.45))_drop-shadow(0_0_20px_rgba(209,250,229,0.3))]"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

// ── Bus visual — "photo" mode ─────────────────────────────────────────────────
// Used while the source image still has its original street background. Rendered
// full-bleed behind the whole hero with an emerald scrim + a slow Ken Burns zoom.

function BusPhotoBackground() {
  const reducedMotion = usePrefersReducedMotion()

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className={`absolute inset-0 ${reducedMotion ? '' : 'motion-safe:animate-hero-ken-burns'}`}>
        <Image
          src={SITE.hero.busImage}
          alt=""
          width={SITE.hero.busImageWidth}
          height={SITE.hero.busImageHeight}
          priority
          sizes="100vw"
          className="w-full h-full object-cover object-center"
        />
      </div>
      {/* Scrim — keeps the headline legible over the photo */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-950 via-emerald-950/85 to-emerald-950/45" />
      <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-transparent to-emerald-950/50" />
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
  const isPhotoMode = SITE.hero.busImageMode === 'photo'

  return (
    <section className="min-h-screen relative flex items-center overflow-hidden">
      {isPhotoMode ? (
        <BusPhotoBackground />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-800" />
      )}

      <div
        className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5 pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 w-full relative">
        <div className={isPhotoMode ? 'max-w-2xl' : 'grid lg:grid-cols-2 gap-10 lg:gap-16 items-center'}>

          {/* ── Copy ─────────────────────────────────────────────────── */}
          <div className={isPhotoMode ? '' : 'order-2 lg:order-1'}>
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
                onClick={() => trackWaClick('hero')}
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

          {/* ── Bus visual — only in cutout mode; photo mode is the section background ── */}
          {!isPhotoMode && <BusCutoutVisual />}
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 motion-safe:animate-bounce" aria-hidden="true">
        <div className="w-6 h-10 border-2 border-emerald-400/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-emerald-400/70 rounded-full" />
        </div>
      </div>
    </section>
  )
}
