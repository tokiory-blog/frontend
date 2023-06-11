import { NuxtConfig } from "nuxt/config";
import * as dotenv from "dotenv";
dotenv.config();

export const url = {
  dev: `http://localhost:${process.env.PORT}`,
  prod: "https://tokiory.vercel.app"
};

export default {
  public: {
    URL: process.dev ?
      url.dev :
      url.prod,
  }
} as NuxtConfig["runtimeConfig"];