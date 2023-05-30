import type { MarkdownParsedContent } from "@nuxt/content/dist/runtime/types";
import type { Post } from "./post.types";

export type DevlogContentType = "devlog";

export type DevlogVendor = "gitlab" | "github" | "bitbucket";

export interface DevlogSource {
  name: DevlogVendor,
  url: string[];
}

export interface DevlogProject {
  name: string;
  type: DevlogVendor;
  url: string;
  description: string;
}

export interface DevlogPost extends Post {
  source: DevlogSource[]
}

export type DevlogFrontmatter = Post & MarkdownParsedContent;
