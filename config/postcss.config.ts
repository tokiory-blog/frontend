import { NuxtConfig } from "nuxt/config";
import autoprefixer from "autoprefixer";

export default {
  plugins: {
    autoprefixer: autoprefixer()
  },
} as NuxtConfig["postcss"];