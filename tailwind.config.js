/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: { sm: "560px", mediaHover: { raw: "(hover: hover)" } },
    extend: {
      container: {
        center: true,
        padding: { DEFAULT: "16px", sm: "16px" },
      },
    },
  },
  plugins: [],
};
