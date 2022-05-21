// const colors = require(`tailwindcss/colors`);
module.exports = {
  content: ["./src/pages/**/*.{tsx,ts}", "./src/components/**/*.{ts,tsx}"],
  darkMode: "class",
  mode: "jit",
  variants: {
    extend: {
      typography: ["dark"],
      cursor: ["focus"],
    },
  },
  theme: {
    extend: {
      keyframes: {
        shine: {
          "0%": {
            opacity: "1",
            transform: "translateX(0%)",
          },
          // "50%": {
          //   opacity: "0.5",
          //   transform: "translateX(100%)",
          // },
          "100%": {
            opacity: "0",
            transform: "translateX(80%)",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

/**
@keyframes shine{

}
Share
Edit

 */
