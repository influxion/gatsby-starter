/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    screens: {
      sm: { max: '544px' },
      // => @media (max-width: 544px) { ... }

      md: { max: '768px' },
      // => @media (max-width: 768px) { ... }

      lg: { max: '944px' },
      // => @media (max-width: 944px) { ... }

      xl: { max: '1200px' },
      // => @media (max-width: 1200px) { ... }
    },
    extend: {},
  },
  plugins: [],
};
