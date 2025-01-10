const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'], // Ensure all your files are scanned by Tailwind
  theme: {
    extend: {
      fontFamily: {
        mont: ['Montserrat', ...defaultTheme.fontFamily.sans], // Add Montserrat
      },
    },
  },
  plugins: [],
};
