/** @type {import('tailwindcss').Config} */

import Colors from './src/assets/colors/';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: [
        'Nunito Sans',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'Noto Sans',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji',
      ],
    },
    extend: {
      boxShadow: {
        SearchCard: '0px 10px 50px 0px rgba(178, 178, 178, 0.10);',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        ...Colors,
      },
    },
  },
  plugins: [],
};
