/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkIndigo: "#0C0D1B",
        transparentWhite: "rgba(255, 255, 255, 0.05)",
        white20: "rgba(255, 255, 255, 0.20)",
        transparentWhite50: "rgba(255, 255, 255, 0.50)",
        transparentBlack30: "rgba(2, 2, 2, 0.3)",
        transparentBlack41: "rgba(2, 2, 2, 0.41)",
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
