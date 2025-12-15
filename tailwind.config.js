/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        'cafe': {
          'brown-dark': '#3e2723',
          'brown': '#5d4037',
          'brown-light': '#6f4e37',
          'brown-lighter': '#8b4513',
          'gold': '#d4a574',
          'beige': '#faf8f5',
          'beige-light': '#e8dcc6',
        }
      }
    },
  },
  plugins: [],
}
