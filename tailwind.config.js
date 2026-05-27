/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        brand: {
          DEFAULT: '#00A859',
          50: '#E6F7EE',
          100: '#C2EBD4',
          200: '#8FDAB1',
          300: '#5BC88D',
          400: '#28B66A',
          500: '#00A859',
          600: '#008C4A',
          700: '#00703B',
          800: '#00542C',
          900: '#00381D',
        },
        accent: {
          DEFAULT: '#FFC107',
          50: '#FFF8E1',
          100: '#FFECB3',
          200: '#FFE082',
          300: '#FFD54F',
          400: '#FFCA28',
          500: '#FFC107',
          600: '#FFB300',
          700: '#FFA000',
          800: '#FF8F00',
          900: '#FF6F00',
        },
        info: {
          DEFAULT: '#0066B3',
          50: '#E6F0F9',
          100: '#BFD7EE',
          200: '#94BCE2',
          300: '#69A0D5',
          400: '#3F8BCC',
          500: '#0066B3',
          600: '#005FA8',
          700: '#005495',
          800: '#004A82',
          900: '#003660',
        },
        ink: {
          DEFAULT: '#1A1A1A',
          muted: '#6B7280',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          subtle: '#F9FAFB',
        },
        border: '#E5E7EB',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 2px 0 rgba(16, 24, 40, 0.05), 0 1px 3px 0 rgba(16, 24, 40, 0.06)',
        cardHover: '0 4px 12px -2px rgba(16, 24, 40, 0.08), 0 2px 4px -2px rgba(16, 24, 40, 0.06)',
      },
      borderRadius: {
        xl: '0.875rem',
        '2xl': '1.125rem',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(4px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 200ms ease-out',
      },
    },
  },
  plugins: [],
}
