import type { MarkdownParsedContent } from "@nuxt/content/dist/runtime/types";

export type ContentType =
  "notes" |
  "article";

interface PostReference {
  name: string;
  url: string;
}

export interface Post extends Pick<MarkdownParsedContent, "_path"> {
  title: string;
  tags: string[];
  description: string;
  publicationDate: string;
  banner: string;
  references?: PostReference[];
}

export type Frontmatter = Post & MarkdownParsedContent;