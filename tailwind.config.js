/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "filament-text-brand": "#009193",
        "filament-card-bg": "#1B1C1E",
      },
    },
  },
  plugins: [],
};
