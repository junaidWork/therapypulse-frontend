/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "primary-gradient":
          "linear-gradient(-45deg, #DE0D6F 16.23%, #731054 83.77%)",
      },
      colors: {
        primary: "var(--primary, #731054)",
        secondary: "var(--secondary, #707070)",
        destructive: "var(--destructive, #e3342f)",
        outline: "var(--outline, transparent)",
        ghost: "var(--ghost, #38b2ac)",
      },
    },
  },
  plugins: [],
};
