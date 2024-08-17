// /** @type {import('tailwindcss').Config} */
// import daisyui from 'daisyui'
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [
//     daisyui
//   ],
//   daisyui:{themes:["light"]},
// }



// /** @type {import('tailwindcss').Config} */
// import daisyui from "daisyui";
// export default {
// content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
// theme: {
// extend: {},
// },
// plugins: [daisyui],
// daisyui: { themes: ["light"] },
// };


/* eslint-disable no-undef */
const withMT = require("@material-tailwind/react/utils/withMT");
import daisyui from "daisyui";
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: { themes: ["light"] },
});

