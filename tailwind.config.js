/** @type {import('tailwindcss').Config} */

import Colors from './src/assets/colors/';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        ...Colors,
      },
    },
  },
  plugins: [],
};
