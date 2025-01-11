const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'], // Ensure all your files are scanned by Tailwind
  theme: {
    extend: {
      fontFamily: {
        mont: ['Montserrat', ...defaultTheme.fontFamily.sans], // Add Montserrat
      },
      boxShadow: {
        'bottom-only': '0 10px 0 rgba(0, 0, 0, 10)',
      },
    },
  },
  plugins: [],
};
