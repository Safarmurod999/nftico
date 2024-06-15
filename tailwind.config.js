/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "nav-color": "#04011C",
        "body-color": "#09090A",
        primary: "#84119E",
        danger: "#B1187C",
        pink: " rgba(215, 29, 97, 0.6)",
        purple: "#7040F2",
      },
      backgroundImage: {
        linear:
          "linear-gradient(90deg, rgba(5, 0, 250, 1) 12%, rgba(224, 30, 90, 1) 100%)",
        "linear-reverse":
          "linear-gradient(90deg, rgba(224, 30, 90, 1) 12%, rgba(5, 0, 250, 1) 100%)",
      },
      dropShadow: {
        "nav-shadow": "0 20px 40px 0 rgba(205, 28, 104, 0.08)",
      },
      fontSize: {
        "6xl": "64px",
      },
      lineHeight: {
        20: "80px",
      },
      letterSpacing: {
        main: "-1.4%",
      },
      blur: {
        large: "150px",
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
      },
      keyframes: {
        "bounce-x": {
          "0%, 100%": {
            transform: "translateX(-5%)",
            "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateX(0)",
            "animation-timing-function": 'cubic - bezier(0, 0, 0.2, 1)',
          },
        },
        
      },
      animation:{
        'bounce-x':'bounce-x 1s ease-in-out infinite',
      }
    },
  },
  plugins: [],
};
