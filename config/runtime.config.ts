import { NuxtConfig } from "nuxt/config";

export const url = {
  dev: "http://localhost:3000",
  prod: "https://okiow.vercel.app"
};

export default {
  public: {
    URL: process.dev ?
      url.dev :
      url.prod,
  }
} as NuxtConfig["runtimeConfig"];