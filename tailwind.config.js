/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-50": "#F9FAFB",
        "gray-100": "#F3F4F6",
        "gray-200": "#E5E7EB",
        "gray-300": "#D1D5DB",
        "gray-400": "#9CA3AF",
        "gray-500": "#6B7280",
        "gray-600": "#4B5563",
        "gray-700": "#374151",
        "gray-800": "#1F2937",
        "gray-900": "#111827",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      animation: {
        "bounce-slow": "bounce 3s infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
    },
  },
  plugins: [],
};
