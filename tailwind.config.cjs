/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "490px",
      md: "768px",
    },
    fontFamily: {
      oswald: ["Oswald", "sans-serif"],
      nunito: ["Nunito", "sans-serif"],
    },
    fontSize: {
      "desk-sm": ["16px", "1.1em"],
      "desk-md": ["24px", "1.1em"],
      "desk-lg": ["30px", "1.1em"],
      "desk-xl": ["64px", "1.1em"],
      "mob-xs": ["12px", "1.1em"],
      "mob-sm": ["16px", "1.1em"],
      "mob-md": ["20px", "1.1em"],
      "mob-lg": ["24px", "1.1em"],
      "mob-xl": ["40px", "1.1em"],
    },
    boxShadow: {
      general: "10px 4px 30px rgba(0, 0, 0, 0.25)",
      cta: "10px 4px 15px rgba(0, 0, 0, 0.25)",
      neumorphism:
        "-2px 2px 4px rgba(217, 217, 217, 0.2), 2px -2px 4px rgba(217, 217, 217, 0.2), -2px -2px 4px rgba(255, 255, 255, 0.9), 2px 2px 5px rgba(217, 217, 217, 0.9), inset 1px 1px 2px rgba(255, 255, 255, 0.3), inset -1px -1px 2px rgba(217, 217, 217, 0.5);",
    },
    colors: {
      "custom-white": "#ffffff",
      "custom-blue": "#288E9F",
      "custom-dark": "#383838",
      "custom-orange": "#F48465",
    },
    backgroundColor: {
      "header-white": "#FFFFFF",
      "card-lightgrey-backNeumorphism": "#F1F1F1",
      "card-lightgrey-frontNeumorphism": "#F0F0F0",
      "cta-orange": "#F48465",
    },
    backgroundImage: (theme) => ({
      "primary-blue-gradient":
        "linear-gradient(180deg, #6EBAC7 0%, #288E9F 100%)",
    }),
    extend: {},
  },
  plugins: [],
};
