/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        veryDarkGrey: "var(--very-dark-grey)",
        darkGrey: '#2B2C37',
        linesDark: '#3E3F4E',
        mediumGrey: '#828FA3',
        linesLight: '#E4EBFA',
        linesGrey: '#F4F7FD',
        mainPurple: '#635FC7',
        mainPurpleHover: '#A8A4FF',
        red: '#EA5555',
        redHover: '#FF9898'

      },
    },
  },
  plugins: [],
};
