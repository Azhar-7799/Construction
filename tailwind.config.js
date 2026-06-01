/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        crown: {
          dark: '#1a1510',
          rich: '#3d2b1f',
          gold: '#c69c6d',
          beige: '#e9ddcf'
        }
      },
      boxShadow: {
        glow: '0 25px 80px rgba(0, 0, 0, 0.22)'
      },
      fontFamily: {
        display: ['Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
};
