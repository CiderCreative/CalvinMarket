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
        dark: "#202020",
        light: "#EEEEEE",
        primary: "#EEEEEE",
        opposite: "#202020",
        yellow: "#E8CC16",
      },
      backgroundColor: {
        maroon: "#8C2232",
        "gray-accent": "#D5D5D5",
      },
      textColor: {
        primary: "#202020",
        opposite: "#EEEEEE",
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
