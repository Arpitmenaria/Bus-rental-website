import { SITE } from '@/lib/site'

const items = [
  { value: `${SITE.stats.years}+ Years`, label: 'In Business', icon: '🗓️' },
  { value: SITE.stats.tourists, label: 'International Guests', icon: '🌍' },
  { value: `${SITE.stats.languages.length} Languages`, label: 'Spoken by Our Team', icon: '🗣️' },
  { value: `${SITE.stats.buses}+ Buses`, label: 'GPS-Tracked Fleet', icon: '📡' },
] as const

export default function TrustBar({ variant = 'dark' }: { variant?: 'dark' | 'light' }) {
  const dark = variant === 'dark'
  return (
    <div
      className={
        dark
          ? 'bg-emerald-950 border-b border-emerald-800/60'
          : 'bg-emerald-50 border-b border-emerald-100'
      }
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <ul className="grid grid-cols-2 sm:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-emerald-800/30">
          {items.map((item) => (
            <li
              key={item.label}
              className="flex items-center gap-3 px-0 sm:px-6 first:pl-0 last:pr-0 py-2 sm:py-1.5"
            >
              <span className="text-xl flex-shrink-0" aria-hidden="true">
                {item.icon}
              </span>
              <div>
                <p className={`font-bold text-sm leading-tight ${dark ? 'text-white' : 'text-emerald-950'}`}>
                  {item.value}
                </p>
                <p className={`text-xs ${dark ? 'text-emerald-400' : 'text-emerald-600'}`}>
                  {item.label}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
