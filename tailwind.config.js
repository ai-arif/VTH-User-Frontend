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
        primary: "#e6b9b9",
        secondary: "#faf0f0",
        "light-red": "#dc3545",
        "deep-red": "#b02a37",
        "gray-5": "#6b7280",
        "gray-6": "#4b5563", // not used
        "gray-7": "#374151", // not used
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
};
