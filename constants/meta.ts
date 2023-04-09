import type { Link, Meta } from "@unhead/schema";

export const SITE_NAME = "[station] kioto";
export const SITE_DESCRIPTION =
  "Место где можно спокойно сесть и почитать о разработке.";
export const THEME_COLOR = "#ffffff";
export const ENCODING = "UTF-8";
export const VIEWPORT = "width=device-width, initial-scale=1";
export const TILE_COLOR = "#2b5797";

/** List of meta tags for `useHead` */
export const META_LIST: Meta[] = [
  {
    name: "application-name",
    content: SITE_NAME
  },
  {
    name: "description",
    content: SITE_DESCRIPTION
  },
  {
    name: "theme-color",
    content: THEME_COLOR
  },
  {
    name: "msapplication-TileColor",
    content: TILE_COLOR
  }
];

/** List of links meta tags for `useHead` */
export const META_LINK_LIST: Link[] = [

  // Apple Touch Icon
  {
    href: "/apple-touch-icon.png",
    rel: "apple-touch-icon",
    sizes: "180x180"
  },

  // Favicons
  {
    href: "/favicon-16x16.png",
    rel: "icon",
    sizes: "16x16x",
    type: "image/png"
  },
  {
    href: "/favicon-32x32.png",
    rel: "icon",
    sizes: "32x32",
    type: "image/png"
  },

  // Site manifest
  {
    href: "/site.webmanifest",
    rel: "manifest"
  },

  // Safari specific link for coloring pinned tab
  {
    color: "#5bbad5",
    href: "/safari-pinned-tab.svg",
    rel: "mask-icon"
  }
];