/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {},
    borderRadius: {
      'none': '0',
      'sm': '12px',
      DEFAULT: '.25rem',
      'lg': '24px',
      'xl':'40px',
    },
    spacing: {
      sm: "8px",
      md: "12px",
      lg: "16px",
      xl: "24px",
    },
    colors: {
      'primary': '#632A7E',
      'primary-light':"#A13E97",
      'primary-lighter':"#D09ECB",
      'primary-bg':"#ECD8EA",
      'neutral': '#FFFFFF',
      'primary-border':"#F7F0F7",
      'grey-text':'#464E56',
      'gray-dark': '#212A34',
      'gray-light':'#464E56',
      'gray-lighter':'#909499',
      'gray-bg':'#B5B8BB',
      'overlay': '#F2F2F2',  
    },
    
    screens: {
      sm: { min: "360px", max: "767px" },
      md: { min: "768px", max: "1023px" },
      lg: { min: "1024" },
    },
  },
  plugins: [],
}

