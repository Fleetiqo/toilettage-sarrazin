/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          DEFAULT: '#3B8D8C',
          light: '#4fa8a7',
          dark: '#2d6e6d',
        },
        coral: {
          DEFAULT: '#E8845C',
          light: '#f0a080',
          dark: '#c96840',
        },
        gold: '#F5C542',
        dark: '#2D2D2D',
        muted: '#F7F7F7',
      },
      fontFamily: {
        heading: ['Nunito', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
