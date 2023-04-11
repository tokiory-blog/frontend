import nuxtContentConfig from "./config/nuxtcontent.config";
import runtimeConfig from "./config/runtime.config";
import postcssConfig from "./config/postcss.config";
import viteConfig from "./config/vite.config";
import { ALIASES } from "./alias";


export default defineNuxtConfig({
  content: nuxtContentConfig,
  runtimeConfig: runtimeConfig,
  postcss: postcssConfig,
  vite: {
    ...viteConfig
  },
  modules: [
    "@nuxt/content",
  ],
  alias: ALIASES,
});