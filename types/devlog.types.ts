import { ParsedContentInternalMeta } from "@nuxt/content/dist/runtime/types";

export type DevlogContentType = "devlog";

export type DevlogVendor = "gitlab" | "github" | "bitbucket";

export interface DevlogSource {
  name: DevlogVendor,
  url: string[];
}

export interface DevlogProject extends ParsedContentInternalMeta {
  name: string;
  type: DevlogVendor;
  url: string;
  description: string;
  fullDescription?: string;
}