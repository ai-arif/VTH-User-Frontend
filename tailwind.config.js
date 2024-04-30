/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "tw-",
  theme: {
    extend: {
      colors: {
        primary: "#2e3292",
        secondary: "#b9e6d0",
        tertiary: "#f0faf5",
        "deep-secondary": "#7fc9a5",
        "light-red": "#dc3545",
        "deep-red": "#b02a37",
        "gray-5": "#6b7280",
        "gray-6": "#4b5563", // not used
        "gray-7": "#374151",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
};
