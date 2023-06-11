import { defineConfig } from "vitest/config";
import { VITE_ALIASES } from "./alias";
// Note: We have created this file so that Vitest is parsed from it,
//    since Vitest does not know how to parse data from Nuxt config.
export default defineConfig({
  resolve: {
    alias: VITE_ALIASES
  },
  test: {
    globals: true,
    testTimeout: 15000,
    include: ["./tests/**/*"],
    exclude: ["./tests/scenario/**/*"],
  }
});