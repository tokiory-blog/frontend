import { Post, ContentType } from "./post.types";
import { z } from "zod";

export interface SearchRequest {
  type: ContentType;
  query: string;
}

export const searchRequestSchema = {
  type: z.string(),
  query: z.string(),
};

export interface SearchResponse {
  type: ContentType;
  posts: Post[];
}