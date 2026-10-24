/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      colors: {
        spark: {
          50: '#eef4ff',
          100: '#d9e6ff',
          200: '#bcd4ff',
          300: '#8eb8ff',
          400: '#5990ff',
          500: '#2b66ff',
          600: '#0018ff',
          700: '#0b2ce0',
          800: '#1026b5',
          900: '#13268f',
          950: '#0a124a',
        },
      },
      backgroundImage: {
        'spatial-grid-dark':
          'linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)',
        'spatial-grid-light':
          'linear-gradient(to right, rgba(9,9,11,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(9,9,11,0.05) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
};
