import { NuxtConfig } from "nuxt/config";

export const url = {
  dev: "http://localhost:3000",
  prod: "https://yikiotso.vercel.app"
};

export default {
  public: {
    URL: process.dev ?
      "http://localhost:3000" :
      "https://yikiotso.vercel.app",
  }
} as NuxtConfig["runtimeConfig"];