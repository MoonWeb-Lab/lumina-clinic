/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        clinic: {
          50: '#F0FDFA',
          100: '#CCFBF1',
          200: '#99F6E4',
          300: '#5EEAD4',
          400: '#2DD4BF',
          500: '#14B8A6',
          600: '#0D9488',
          700: '#0F766E',
          800: '#115E59',
          900: '#134E4A',
          950: '#042F2E',
        },
        navy: {
          800: '#1E293B',
          900: '#0F172A',
          950: '#020617',
        },
        glacier: {
          50: '#F0F9FF',
          100: '#E0F2FE',
          500: '#0284C7',
          600: '#0369A1',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'medical': '0 4px 20px -2px rgba(13, 148, 136, 0.08), 0 2px 6px -1px rgba(0, 0, 0, 0.04)',
        'medical-lg': '0 12px 36px -4px rgba(13, 148, 136, 0.14), 0 4px 12px -2px rgba(0, 0, 0, 0.04)',
        'teal-glow': '0 0 25px rgba(20, 184, 166, 0.28)',
      }
    },
  },
  plugins: [],
}
