/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#030014",
        secondary: "#151312",
        accent: "#Ab8BFF",
        light: {
          100: "D6C6FF",
          200: "#A8B5DB",
          300: "#E0E7FF",
        },
        dark: {
          100: "#D6C6FF",
          200: "#0f0d23",
          300: "#111827",
        },
        info: "#3ABFF8",
        success: "#36D399",
        warning: "#FBBD23",
        error: "#F87272",
      },
    },
  },
  plugins: [],
};
