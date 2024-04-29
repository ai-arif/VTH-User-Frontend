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
        "deep-red": "#dc3545",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
};
