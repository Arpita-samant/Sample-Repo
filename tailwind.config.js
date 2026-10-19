/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#0a0c0e',
          900: '#0f1216',
          850: '#14181f',
          800: '#1b2029',
          700: '#262d3a',
          600: '#384252',
        },
        gold: {
          50: '#fdfaf2',
          100: '#f9f1de',
          200: '#f3e1ba',
          300: '#ebcb8f',
          400: '#e0b060',
          500: '#cca147',
          600: '#a67d30',
          700: '#7f5b24',
          800: '#583c18',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        cormorant: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle at center, var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
