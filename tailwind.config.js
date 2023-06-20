/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#302C42',
        'linear-one': '#C0B7E8',
        'linear-two': '#8176AF',
        'radial-one': '#3A3456',
        'radial-two': '#211E2E',
      },
      fontFamily: {
        'montserrat-bold': 'Montserrat',
      },
      backgroundImage: {
        'hero-image': 'url("/src/assets/images/Rectangle 4.png")',
        'service-image': 'url("/src/assets/images/Ellipse 1.png")',
        'service-bg-icon': 'url("/src/assets/icons/Ellipse 6.png")',
      },
    },
  },
  plugins: [],
};
