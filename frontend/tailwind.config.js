import { join } from "path";
import { myCustomTheme } from "./freecaret-theme";
import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";
import { skeleton } from "@skeletonlabs/tw-plugin";

import flowbite from "flowbite/plugin";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    join(
      require.resolve("@skeletonlabs/skeleton"),
      "../**/*.{html,js,svelte,ts}",
    ),
    "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
  ],
  theme: {
    extend: {
      colors: {
        // flowbite-svelte
        primary: {
          50: "#ddeaf9",
          100: "#d2e3f7",
          200: "#c6dcf5",
          300: "#a4c6ef",
          400: "#609ce4",
          500: "#1c71d8",
          600: "#1966c2",
          700: "#1555a2",
          800: "#114482",
          900: "#0e376a",
        },
      },
    },
  },
  plugins: [
    forms,
    typography,
    skeleton({
      themes: {
        preset: [
          {
            name: "gold-nouveau",
            enhancements: true,
          },
          {
            name: "wintry",
            enhancements: true,
          },
        ],
        custom: [myCustomTheme],
      },
    }),
    flowbite,
  ],
};
