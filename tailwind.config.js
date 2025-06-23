/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'futura-heavy': ['var(--font-futura-heavy)'],
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        royalpurple: '#5A2F99',
        purple: '#964FFF',
        blue: '#014A7F99',
        royalblue: '#014A7F'
      },
      keyframes: {
        scroll: {
          to: {
            transform: 'translate(calc(-50% - 0.5rem))',
          },
        },
      },
      animation: {
        scroll:
          'scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite',
      },
    },
  },
  plugins: [],
}
