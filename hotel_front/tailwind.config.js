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
        'reserva-background': "url('/hot.jpg')",
        'servicio-background': "url('/ser.jpg')",
        'perfil-background': "url('/img/bg-profile.jpeg')",
        'wallpaper': "url('/img/perfil.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
        'custom-gradient-primary': 'linear-gradient(to bottom, #2D3748, #1A202C)',
        'custom-gradient-secondary': 'linear-gradient(to bottom, #333333, #1A202C)',
        'business-background': "url('/im.webp')",
        'food-background': "url('/food.jpg')",

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
        'background-cards': "rgba(0, 0, 0, 0.532)",
        'border-cards': 'rgba(255, 255, 255, 0.511)'

      },
    },
    plugins: [],
  }
}