// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', // Adjust this based on your project structure
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [ "light"],
  },
};
