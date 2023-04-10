import type { MarkdownParsedContent } from "@nuxt/content/dist/runtime/types";

export type ContentType =
  "tutorial" |
  "article";

export interface Post extends Pick<MarkdownParsedContent, "_path"> {
  title: string;
  tags: string[];
  description: string;
  publicationDate: string;
  banner: string;
}

export type Frontmatter = Post & MarkdownParsedContent;