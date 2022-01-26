module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./components/*.{js}",
    "./components/Testimonials/*.{js}",
    "./components/Testimonials/Testimonials.js",
    "./components/Testimonials/TestimonialCard.js",
    "./components/SimpleSection.js",
    "./components/Showcase/*.{js,jsx}",
    "./components/Nav/Navbar.{js,jsx}",
    "./components/Nav/NavItem.{js,jsx}",
    "./pages/index.js"
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#00ff80',
        'boldblue': '#33CCFF',
        'azure': '#007FFF',
        'mainbg': '#39375B',
        'secondary': '#7D83FF',
        'bgbtn': '#ff6200',
        'extra': '#80BFFF',
        'smoke': '#1B2021',
        'btnborder': '#9CA3AF',
      },
    },
  },
  plugins: [],
}