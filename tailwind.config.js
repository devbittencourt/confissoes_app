/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#135bec',
        'background-light': '#f6f6f8',
        'background-dark': '#101622',
        'surface-dark': '#1c1f27',
        'surface-light': '#ffffff',
        'border-dark': '#2a3441'
      },
      fontFamily: {
        display: ['Public Sans', 'sans-serif'],
        body: ['Noto Sans', 'sans-serif']
      },
      borderRadius: {
        DEFAULT: '0.25rem',
        lg: '0.5rem',
        xl: '0.75rem',
        '2xl': '1rem',
        full: '9999px'
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries')
  ]
}
