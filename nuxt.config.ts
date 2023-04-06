import {fileURLToPath} from "url";
export default defineNuxtConfig({
  modules: [
    "@nuxt/content"
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
      theme: "dark-plus"
    }
  }
});