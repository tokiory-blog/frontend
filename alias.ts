import { fileURLToPath } from "url";

// Aliases for Nuxt
export const ALIASES = {
  "@": fileURLToPath(new URL("./", import.meta.url)),
  "@d": fileURLToPath(new URL("./data", import.meta.url)),
  "@cmp": fileURLToPath(new URL("./components", import.meta.url)),
  "@cms": fileURLToPath(new URL("./composables", import.meta.url)),
  "@p": fileURLToPath(new URL("./pages", import.meta.url)),
  "@s": fileURLToPath(new URL("./styles", import.meta.url)),
  public: fileURLToPath(new URL("./public", import.meta.url)),
};

// Aliases for Vite
export const VITE_ALIASES =
  (Object.keys(ALIASES) as Array<keyof typeof ALIASES>)
    .map(key => {
      return { find: key, replacement: ALIASES[key] };
    });
