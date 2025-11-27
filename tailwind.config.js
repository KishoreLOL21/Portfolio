/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],

  safelist: [
    "animate-ribbon1",
    "animate-ribbon2",
    "animate-ribbon3",
    "animate-slide-in",
    "animate-rotate-apple",   // ⭐ Apple glow ring
  ],

  theme: {
    extend: {
      animation: {
        ribbon1: "ribbon1 12s ease-in-out infinite",
        ribbon2: "ribbon2 15s ease-in-out infinite",
        ribbon3: "ribbon3 18s ease-in-out infinite",
        "slide-in": "slideIn 1s ease-out forwards",

        // ⭐ Clean Apple-style rotating glow ring
        "rotate-apple": "rotateApple 16s linear infinite",
      },

      keyframes: {
        /* ------------------- Ribbon Waves ------------------- */
        ribbon1: {
          "0%":   { transform: "translateX(-20%) translateY(0) rotate(0deg)" },
          "50%":  { transform: "translateX(20%) translateY(-20px) rotate(3deg)" },
          "100%": { transform: "translateX(-20%) translateY(0) rotate(0deg)" },
        },
        ribbon2: {
          "0%":   { transform: "translateX(-30%) translateY(0) rotate(0deg)" },
          "50%":  { transform: "translateX(30%) translateY(20px) rotate(-2deg)" },
          "100%": { transform: "translateX(-30%) translateY(0) rotate(0deg)" },
        },
        ribbon3: {
          "0%":   { transform: "translateX(-40%) translateY(0) rotate(0deg)" },
          "50%":  { transform: "translateX(40%) translateY(-15px) rotate(1deg)" },
          "100%": { transform: "translateX(-40%) translateY(0) rotate(0deg)" },
        },

        /* ------------------- Slide In ------------------- */
        slideIn: {
          "0%": {
            opacity: "0",
            transform: "translateY(40px) scale(0.97)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0) scale(1)",
          },
        },

        /* ------------------- Apple Glow Ring ------------------- */
        rotateApple: {
          "0%":   { transform: "rotate(0deg) scale(1)" },
          "50%":  { transform: "rotate(180deg) scale(1.05)" },
          "100%": { transform: "rotate(360deg) scale(1)" },
        },
      },
    },
  },

  plugins: [],
};
