/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    colors: {
      primary: '#E52725',
      secondary: '#AC1A2F',
      white: '#FFFFFF'
    },
    fontFamily: {
      DmSerif: ['DM Serif Display', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'cover-hero': "url('@/static/img/cover.jpg')",
      }
    },
  },
  plugins: [],
}

