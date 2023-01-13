/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      transparent: 'transparent',
      'black': '#000000',
      'white': '#FFFFFF',
      'gray': {
        DEFAULT: '#E6E6F1',
        50: '#f9fafb',
        100: '#f3f4f6',
        200: '#e5e7eb',
        300: '#d1d5db',
        400: '#9ca3af',
        500: '#6b7280',
      },
      'sasakazi-gray': '#E6F1F0',
      'sasakazi-sky-blue': '#0394D5',
      'sasakazi-black': '#252525',
      'sasakazi-blue': '#042873',
      'sasakazi-green': '#38B64A',
      'sasakazi-red': '#FF0000'
    },
    extend: {},
  },
  plugins: [],
}
