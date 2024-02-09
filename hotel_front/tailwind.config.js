/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'main-background': "url('/img/wallpaper.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
        'custom-gradient-primary': 'linear-gradient(to bottom, #2D3748, #1A202C)',
        'custom-gradient-secondary': 'linear-gradient(to bottom, #333333, #1A202C)',
      },

      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },

      colors: {
        'background-primary': '#000000',
        'background-second': '#FCA60C',
        'color-text-primary': '#fff',
        'color-text-second': '#A6A6A6',
        'backgroun-title': 'rgba(0, 0, 0, 0.608)',

      },
    },
    plugins: [],
  }
}