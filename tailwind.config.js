/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lgreen: "#97bcaf",
        mgreen: "#5C8374",
        dgreen: "#183D3D",
        dark: "#040D12",
      },
    },
  },
  plugins: [],
};
