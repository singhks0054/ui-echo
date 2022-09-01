/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          md: '4rem',
          lg: '6rem',
          xl: '8rem',
          '2xl': '10rem',
        }
      },
      colors: {
        'c1': '#391f14',
        'c2': 'rgb(145,79,53)',
      },
      fontFamily: {
        'f1': ['josefin-sans', 'sans-serif'],
        'f2': ['cormorant-garamond', 'serif'],
      },
      backgroundImage: {
        'hero': 'url("https://preview.colorlib.com/theme/ecoho/assets/img/hero/xh1_hero1.png.pagespeed.ic.icWmLJYB7e.webp")',
        'video': 'url("https://preview.colorlib.com/theme/ecoho/assets/img/gallery/video-bg.png.webp")',
        'contact': 'url("https://preview.colorlib.com/theme/ecoho/assets/img/hero/h2_hero4.png.webp")',
        'room': 'url("https://preview.colorlib.com/theme/ecoho/assets/img/hero/xh2_hero2.png.pagespeed.ic.Qppd6U5Hah.webp")',
        'about': 'url("https://preview.colorlib.com/theme/ecoho/assets/img/hero/xh2_hero1.png.pagespeed.ic.5nWbk__1fA.webp")',
      },
      keyframes: {
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10.0deg)' },
          '60%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        }
      },
      animation: {
        'waving-hand': 'wave 2s linear infinite'
      },
    },
  },
  plugins: [],
}
