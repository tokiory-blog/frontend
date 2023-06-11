import { NuxtConfig } from "nuxt/config";
import * as dotenv from "dotenv";
dotenv.config();

const scssUtilityList = [
  "styles/_mixins.scss",
  "styles/_breakpoint.scss",
  "styles/_color.scss",
  "styles/_size.scss"
];

const scssMix = scssUtilityList
  .map(mix => `@import "${mix}";`)
  .join("");

export default {
  server: {
    port: process.env.PORT,
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: scssMix,
      },
    },
  },
} as NuxtConfig["vite"];