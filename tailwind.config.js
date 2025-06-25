/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        canopee: ["Canopee", "serif"],
        domain: ["Domain", "serif"],
        editorial: ["Editorial", "serif"],
        dynasty: ["Dynasty", "serif"],
      },
    },
  },
  plugins: [],
};
