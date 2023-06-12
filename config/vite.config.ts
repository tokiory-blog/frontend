import { NuxtConfig } from "nuxt/config";
import { createLogger } from "vite";
import * as dotenv from "dotenv";
dotenv.config();

const isProduction = !["test", "development"].includes(process.env.NODE_ENV as string);

const logger = createLogger("info");
logger.warn("**Node mode**: " + process.env.NODE_ENV, {
  timestamp: true,
});
logger.warn("**Is production mode activated**: " + isProduction, {
  timestamp: true,
});

// Mix scss into build
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