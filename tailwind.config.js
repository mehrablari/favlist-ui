/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    spacing: {
      sm: "8px",
      md: "12px",
      lg: "16px",
      xl: "24px",
    },
    colors: {
      'primary': '#FF5252',
      'neutral': '#FFFFFF',
      'gray-dark': '#212A34',
      'gray-light':'#464E56',
      'gray-lighter':'#909499',
      'gray-bg':'#B5B8BB',
      'overlay': '#F2F2F2',  
    },
    
    screens: {
      sm: { min: "360px", max: "767px" },
      // => @media (min-width: 640px and max-width: 767px) { ... }

      md: { min: "768px", max: "1023px" },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      lg: { min: "1024" },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }
    },
  },
  plugins: [],
}

