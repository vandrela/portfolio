/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        "2xl": { max: "1280px" },
        xl: { max: "1024px" },
        lg: { max: "992px" },
        md: { max: "768px" },
        xs: { max: "480px" },
      },
      colors: {
        "my-red": "#fc1100",
      },
    },
  },
  plugins: [],
};
