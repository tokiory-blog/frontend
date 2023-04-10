import { fileURLToPath } from "url";
import autoprefixer from "autoprefixer";


const scssUtilityList = [
  "styles/_mixins.scss",
  "styles/_breakpoint.scss",
  "styles/_color.scss",
  "styles/_size.scss"
];

const scssMix = scssUtilityList
  .map(mix => `@import "${mix}";`)
  .join("");

export default defineNuxtConfig({
  modules: [
    "@nuxt/content",
  ],
  alias: {
    "@": fileURLToPath(new URL("./", import.meta.url)),
    "@d": fileURLToPath(new URL("./data", import.meta.url)),
    "@cmp": fileURLToPath(new URL("./components", import.meta.url)),
    "@cms": fileURLToPath(new URL("./composables", import.meta.url)),
    "@p": fileURLToPath(new URL("./pages", import.meta.url)),
    "@s": fileURLToPath(new URL("./styles", import.meta.url)),
    public: fileURLToPath(new URL("./public", import.meta.url)),
  },
  content: {
    highlight: {
      theme: "min-dark"
    },
    markdown: {
      anchorLinks: {
        depth: 3,
      }
    }
  },
  runtimeConfig: {
    public: {
      URL: process.env["NODE_ENV"] === "development" ? "http://localhost:3000" :
        "https://kiotosi.vercel.app",
    }
  },
  postcss: {
    plugins: {
      autoprefixer: autoprefixer()
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: scssMix,
        },
      },
    },
  },
});