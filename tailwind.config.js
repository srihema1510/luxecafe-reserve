/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          espresso: '#2A1A12',
          coffee: '#6F4E37',
          caramel: '#B08968',
          cream: '#FFF8F0',
          gold: '#D4AF37', // adjusted to match typical Stitch luxury gold
          dark: '#131313',
          glass: 'rgba(19, 19, 19, 0.6)',
          'glass-light': 'rgba(255, 255, 255, 0.05)',
        }
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'float-medium': 'float 6s ease-in-out infinite',
        'float-fast': 'float 4s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'steam': 'steam 5s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: 1, boxShadow: '0 0 20px rgba(212, 175, 55, 0.2)' },
          '50%': { opacity: .7, boxShadow: '0 0 30px rgba(212, 175, 55, 0.4)' },
        },
        steam: {
          '0%': { transform: 'translateY(0) scaleX(1)', opacity: 0 },
          '15%': { opacity: 0.8 },
          '50%': { transform: 'translateY(-50px) scaleX(1.2)', opacity: 0.4 },
          '100%': { transform: 'translateY(-100px) scaleX(1.5)', opacity: 0 },
        }
      }
    },
  },
  plugins: [],
}
