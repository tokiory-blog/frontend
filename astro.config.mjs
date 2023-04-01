import { defineConfig } from 'astro/config';
import { fileURLToPath } from "url";
import vue from "@astrojs/vue";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [vue(), mdx()],
  markdown: {
    shikiConfig: {
      // Choose from Shiki's built-in themes (or add your own)
      // https://github.com/shikijs/shiki/blob/main/docs/themes.md
      theme: 'dark-plus',
      wrap: true,
    },
  },
  vite: {
    resolve: {
      alias: [
        {
          find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url))
        },
        {
          find: '@@', replacement: fileURLToPath(new URL('./src/components', import.meta.url))
        },
        {
          find: '@data', replacement: fileURLToPath(new URL('./src/data', import.meta.url))
        },
      ]
    }
  }
});