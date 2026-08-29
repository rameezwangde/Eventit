/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        eventit: '#6520B8',
        vibrant: '#7C2DD1',
        lavender: '#F2E8FF',
        ink: '#15172B'
      },
      fontFamily: {
        sans: ['Inter', 'Segoe UI', 'Arial', 'sans-serif']
      }
    }
  },
  plugins: []
}
