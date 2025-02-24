// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgb(var(--primary) / <alpha-value>)",
        secondary: "rgb(var(--secondary) / <alpha-value>)",
        accent: "rgb(var(--accent) / <alpha-value>)",
        background: "rgb(var(--background) / <alpha-value>)",
        'dark-background': '#1a202c', // Added dark-background color
      }
    },
  },
  darkMode: 'class', // Added dark mode configuration
  variants: {
    extend: {
      backgroundColor: ['dark'], // Extended background color for dark mode
    },
  },
  plugins: [],
};