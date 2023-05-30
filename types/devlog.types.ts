import type { MarkdownParsedContent } from "@nuxt/content/dist/runtime/types";
import type { Post } from "./post.types";

export type DevlogContentType = "devlog";

type DevlogVendor = "gitlab" | "github" | "bitbucket";

export interface DevlogSource {
  type: DevlogVendor,
  link: string[];
}

export interface DevlogPost extends Post {
  source: DevlogSource[]
}

export type DevlogFrontmatter = Post & MarkdownParsedContent;
