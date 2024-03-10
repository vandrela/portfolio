/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkIndigo: "#0C0D1B",
        transparentWhite: "rgba(255, 255, 255, 0.05)",
        white30: "rgba(255, 255, 255, 0.30)",
        white20: "rgba(255, 255, 255, 0.20)",
        white10: "rgba(255, 255, 255, 0.10)",
        transparentWhite50: "rgba(255, 255, 255, 0.50)",
        transparentBlack30: "rgba(2, 2, 2, 0.3)",
        transparentBlack41: "rgba(2, 2, 2, 0.41)",
        brightViolet: "#AD00FF",
        brightGreen: "#00D715",
        white: "#FFFFFF",
        white03: "rgba(255, 255, 255, 0.03)",
        grey10: "rgba(255, 255, 255, 0.1)",
      },
      keyframes: {
        "text-focus-in": {
          "0%": {
            filter: "blur(12px)",
            opacity: 0,
          },
          "100%": {
            filter: "blur(0px)",
            opacity: 1,
          },
        },
      },
      animation: {
        "text-focus-in": "text-focus-in 3s ease-in-out ",
      },
    },
    screens: {
      "2xl": { max: "1280px" },
      xl: { max: "1024px" },
      lg: { max: "992px" },
      md: { max: "850px" },
      sm: { max: "768px" },
      xs1: { max: "640px" },
      xs: { max: "480px" },
    },
  },
  plugins: [],
};
