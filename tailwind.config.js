/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Samsung 2010 OSD palette
        osd: {
          DEFAULT: '#0a1d3a',
          50: '#e7eef9',
          100: '#cddef2',
          200: '#9bbde5',
          300: '#699bd8',
          400: '#3779c4',
          500: '#1e5aa3',
          600: '#16447d',
          700: '#0f3057',
          800: '#0a1d3a',
          900: '#050e1d',
        },
        // macOS Tahoe accent
        tahoe: {
          blue: '#0a84ff',
          indigo: '#5e5ce6',
          mint: '#63e6e2',
          pink: '#ff375f',
          orange: '#ff9f0a',
        },
      },
      fontFamily: {
        sf: [
          '-apple-system',
          'BlinkMacSystemFont',
          'SF Pro Display',
          'SF Pro Text',
          'Inter',
          'system-ui',
          'sans-serif',
        ],
        mono: ['SF Mono', 'JetBrains Mono', 'Menlo', 'Monaco', 'monospace'],
      },
      backdropBlur: {
        xs: '2px',
        '4xl': '72px',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'scanline': 'scanline 8s linear infinite',
        'flicker': 'flicker 4s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        flicker: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.97' },
        },
      },
      boxShadow: {
        glass: '0 8px 32px 0 rgba(0, 0, 0, 0.18), inset 0 0 0 0.5px rgba(255, 255, 255, 0.18)',
        'glass-lg': '0 24px 64px -16px rgba(0, 0, 0, 0.35), inset 0 0 0 0.5px rgba(255, 255, 255, 0.22)',
        osd: '0 0 0 1px rgba(105, 155, 216, 0.4), 0 12px 40px rgba(10, 29, 58, 0.55)',
      },
    },
  },
  plugins: [],
};
