/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        yellow: "#fff9de",
        brown: "#69665c",
        blue: "#d1e5f7",
        pink: "#ffcece",
        green: "#daf2d6",
        purple: "#d2ceff",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        in_screen: {
          "0%": { transform: "translateY(160px)" },
          "100%": { transform: "translateY(0px)" },
        },
        out_screen: {
          "0%": { transform: "translateY(160px)" },
          "100%": { transform: "translateY(0px)" },
        },
      },
      animation: {
        in_screen: "in_screen 3s infinite",
        "fade-in-down": "fade-in-down 0.5s ease-out",
        "fade-out-down": "fade-out-down 0.5s ease-out",
        "fade-in-up": "fade-in-up 0.3s ease-out",
        out_screen: "out_screen 3s infinite",
      },
      // keyframes: {
      //   strike: {
      //     "0%": { w: "0%" },
      //     "100%": { w: "100%" },
      //   },
      // },
      // animation: {
      //   strike:
      //     "strike h-2 bg-[#69665c] left-0 w-full absolute top-[55%] 3s ease-out infinite forwards",
      // },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwindcss-animate")],
};
