import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      keyframes: {
        heroFloat: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        heroZoomIn: {
          '0%': { opacity: '0', transform: 'scale(0.92)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        heroKenBurns: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.08)' },
        },
      },
      animation: {
        'hero-float': 'heroFloat 6s ease-in-out infinite',
        'hero-zoom-in': 'heroZoomIn 1.1s cubic-bezier(0.22,1,0.36,1) both',
        'hero-ken-burns': 'heroKenBurns 20s ease-out forwards',
      },
    },
  },
  plugins: [],
}

export default config
