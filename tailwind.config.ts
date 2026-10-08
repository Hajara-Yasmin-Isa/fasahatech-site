import type { Config } from 'tailwindcss'

// Brand palette shared with littafinfasaha.com: charcoal ink, warm paper,
// gold accent, Kano-indigo secondary.
const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: '#26262B', soft: '#55555E', faint: '#83838D' },
        paper: { DEFAULT: '#F7F5EE', deep: '#EFEBDF' },
        gold: { DEFAULT: '#D9A21B', bright: '#F0C230', soft: '#FBF3DC' },
        indigo: { DEFAULT: '#32418F', deep: '#232B57' },
        line: '#DBD5C6',
      },
      fontFamily: {
        sans: ['"Avenir Next"', 'Avenir', '"Helvetica Neue"', '"Segoe UI"', 'Arial', 'sans-serif'],
        display: ['"Avenir Next Condensed"', '"Arial Narrow"', '"Avenir Next"', '"Helvetica Neue"', 'sans-serif'],
      },
      maxWidth: { prose: '65ch' },
    },
  },
  plugins: [],
}

export default config
