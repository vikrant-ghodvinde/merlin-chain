/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        dark: "#161616",
        "heavy-dark": "#101010",
      },
      colors: {
        "semi-dark": "#656565",
        dark: "#161616",
      },
      fontFamily: {
        "bebas-neue": ["Bebas Neue", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
};
