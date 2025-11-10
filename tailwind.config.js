/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6C1FFF',
        secondary: '#A85CFF',
        accent: '#2B1F3F',
        dark: '#0A0812',
        surface: '#131024',
        card: '#18132C',
        'text-primary': '#FFFFFF',
        'text-secondary': '#B3A9C9',
        'glass-bg': 'rgba(255, 255, 255, 0.05)',
        'glass-border': 'rgba(108, 31, 255, 0.2)',
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
        'scroll-left': 'scroll-left 20s linear infinite',
        'scroll-right': 'scroll-right 20s linear infinite',
        'marquee': 'marquee 15s linear infinite',
      },
      keyframes: {
        'scroll-left': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'scroll-right': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        'marquee': {
          'from': { transform: 'translateX(0%)' },
          'to': { transform: 'translateX(-50%)' }
        },
      },
      translate: {
        '101': '101%',
      },
    },
  },
  plugins: [],
}