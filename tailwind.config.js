/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        primary: '#FF6B6B', // Reddish color for primary buttons or accents
        secondary: '#4ECDC4', // Turquoise color for secondary buttons or accents
        accent: '#F7FFF7', // Light green accent color
        background: '#F5F5F5', // Light grey background color
        text: '#333333', // Dark grey text color
        success: '#48C774', // Green color for success messages or indicators
        warning: '#FFA500', // Orange color for warning messages or indicators
        error: '#FF4949', // Red color for error messages or indicators
        info: '#63B3ED', // Blue color for informational messages or indicators
      },
    },
  },
  plugins: [],
}

