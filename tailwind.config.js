/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        helvetica: "Helvetica",
        jetbrains: "JetBrains Mono",
      },
      keyframes: {
        slideLeft: {
          "0%": { transform: "translateX(100vw)" },
          "100%": { transform: "translateX(0px)" },
        },
      },
      animation: {
        "slide-left": "slideLeft 0.5s cubic-bezier(0.4, 0, 1, 1)",
      },
    },
  },
  plugins: [],
};
