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
          "10%": {
            opacity: "1",
            top: "-30%",
            left: "-30%",
            "transition-property": "left, top, opacity",
            "transition-duration": "0.7s, 0.7s, 0.15s",
            "transition-timing-function": "ease",
          },
          "100%": {
            opacity: "0",
            top: "-30%",
            left: "-30%",
            "transition-property": "left, top, opacity",
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
