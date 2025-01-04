/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'scanline': 'scanline 6s linear infinite',
        'blink': 'blink 1s infinite',
        'glitch-1': 'glitch1 4s infinite linear alternate-reverse',
        'glitch-2': 'glitch2 3s infinite linear alternate-reverse',
        'flicker': 'flicker 0.15s infinite',
      },
      keyframes: {
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' }
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' }
        },
        glitch1: {
          '0%': { transform: 'none', opacity: '1' },
          '7%': { transform: 'skew(-0.5deg, -0.9deg)', opacity: '0.75' },
          '10%': { transform: 'none', opacity: '1' },
          '27%': { transform: 'none', opacity: '1' },
          '30%': { transform: 'skew(0.8deg, -0.1deg)', opacity: '0.75' },
          '35%': { transform: 'none', opacity: '1' },
          '52%': { transform: 'none', opacity: '1' },
          '55%': { transform: 'skew(-1deg, 0.2deg)', opacity: '0.75' },
          '50%': { transform: 'none', opacity: '1' },
          '72%': { transform: 'none', opacity: '1' },
          '75%': { transform: 'skew(0.4deg, 1deg)', opacity: '0.75' },
          '80%': { transform: 'none', opacity: '1' },
          '100%': { transform: 'none', opacity: '1' }
        },
        glitch2: {
          '0%': { transform: 'none', opacity: '0.25' },
          '7%': { transform: 'translate(-2px, -3px)', opacity: '0.5' },
          '10%': { transform: 'none', opacity: '0.25' },
          '27%': { transform: 'none', opacity: '0.25' },
          '30%': { transform: 'translate(-5px, -2px)', opacity: '0.5' },
          '35%': { transform: 'none', opacity: '0.25' },
          '52%': { transform: 'none', opacity: '0.25' },
          '55%': { transform: 'translate(-5px, -1px)', opacity: '0.5' },
          '50%': { transform: 'none', opacity: '0.25' },
          '72%': { transform: 'none', opacity: '0.25' },
          '75%': { transform: 'translate(-2px, -6px)', opacity: '0.5' },
          '80%': { transform: 'none', opacity: '0.25' },
          '100%': { transform: 'none', opacity: '0.25' }
        },
        flicker: {
          '0%': { opacity: '0.27861' },
          '5%': { opacity: '0.34769' },
          '10%': { opacity: '0.23604' },
          '15%': { opacity: '0.90626' },
          '20%': { opacity: '0.18128' },
          '25%': { opacity: '0.83891' },
          '30%': { opacity: '0.65583' },
          '35%': { opacity: '0.67807' },
          '40%': { opacity: '0.26559' },
          '45%': { opacity: '0.84693' },
          '50%': { opacity: '0.96019' },
          '55%': { opacity: '0.08594' },
          '60%': { opacity: '0.20313' },
          '65%': { opacity: '0.71988' },
          '70%': { opacity: '0.53455' },
          '75%': { opacity: '0.37288' },
          '80%': { opacity: '0.71428' },
          '85%': { opacity: '0.70419' },
          '90%': { opacity: '0.7003' },
          '95%': { opacity: '0.36108' },
          '100%': { opacity: '0.24387' }
        }
      },
      backgroundImage: {
        'cyber-grid': 'linear-gradient(transparent 97%, rgba(0, 255, 0, 0.2) 100%), linear-gradient(90deg, transparent 97%, rgba(0, 255, 0, 0.2) 100%)',
      },
    }
  },
  plugins: []
};