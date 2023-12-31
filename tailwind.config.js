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
        'slider-icon-1': 'url("/src/assets/icons/Ellipse 6.png")',
        'slider-icon-2': 'url("/src/assets/icons/Ellipse 12.png")',
        'tech-image': 'url("/src/assets/images/tech-image.png")',
        'process-bg-icon-1': 'url("/src/assets/icons/Ellipse 7.png")',
        'process-bg-icon-2': 'url("/src/assets/icons/Ellipse 8.png")',
        'process-bg-icon-3': 'url("/src/assets/icons/Vector 15.png")',
      },
    },
  },
  plugins: [],
};
