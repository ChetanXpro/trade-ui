/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "filament-text-brand": "#009193",
        "filament-card-bg": "#1B1C1E",
        "filament-text-success": "#059669",
        "filament-text-secondary": "#6B7280",
      },
    },
  },
  plugins: [],
};
