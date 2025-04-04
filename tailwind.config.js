/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        "custom-blue": "#13303f",
        "custom-bg": "#D9DA30",
      },
      borderRadius: {
        "custom-bl": "6rem"
      },
    },
  },
  plugins: [],
}

