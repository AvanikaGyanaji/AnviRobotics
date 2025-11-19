// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        arial: ["Arial", "sans-serif"],
        dm: ["DM Sans", "sans-serif"],
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
