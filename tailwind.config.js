// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ['"Dancing Script"', 'cursive'],
        names: ['"Charmonman"', 'cursive'],
        body: ['"Palatino"', '"Palatino Linotype"', '"Book Antiqua"', 'serif'],
      },
    },
  },
  plugins: [],
}
