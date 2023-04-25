/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: { "primary-yellow": "#FFF7ED" },
      backgroundImage: {
        "home-hero": "url('/src/assets/images/home-hero.jpg')",
      },
    },
  },
  plugins: [],
};
