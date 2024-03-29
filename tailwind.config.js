/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./constants/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#151515",
        light: "#FAFAFA",
        gray: "#F0F0F0",
        darkGray: "#1E1E1E",
        primary: "#FAFAFA",
        opposite: "#151515",
        yellow: "#E8CC16",
      },
      backgroundColor: {
        maroon: "#8C2232",
        "gray-accent": "#D5D5D5",
      },
      textColor: {
        primary: "#151515",
        subtle: "#333333",
        opposite: "#FAFAFA",
        maroon: "#8C2232",
      },
    },
    variants: {
      extend: {
        backgroundColor: ["dark"],
        textColor: ["dark"],
      },
    },
  },
  plugins: [],
};
