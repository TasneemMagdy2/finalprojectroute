/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite-react/**/*.js", // ✅ Include Flowbite components
  ],
  theme: {
    extend: {
      container: {
        center: true, // ✅ Center the container
        padding: "1rem", // ✅ Add optional padding
      },
    },
  },
  plugins: [
    require("flowbite/plugin"), // ✅ Flowbite plugin
  ],
};
