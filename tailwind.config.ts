import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          gold: '#fab758',
          goldDark: '#e59e38',
          coral: '#f78b77',
          red: '#e2626b',
          blue: '#54a8c7',
          indigo: '#747ed1',
          deepIndigo: '#605dba',
          mint: '#7cb798',
          darkNavy: '#0f172a',
          navyCard: '#1e293b',
          lightBg: '#f8fafc',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
