/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "my-red": "#fc1100",
      },
    },
    screens: {
      "2xl": { max: "1280px" },
      xl: { max: "1024px" },
      lg: { max: "992px" },
      md: { max: "850px" },
      sm: { max: "768px" },
      xs: { max: "480px" },
    },
  },
  plugins: [],
};
