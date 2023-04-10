import { useSafeValidatedBody } from "h3-zod";
import { debugDo } from "@/utils/debug";
import { serverQueryContent } from "#content/server";
import { searchRequestSchema, SearchResponse } from "@/types/search.types";
import type { ContentType, Frontmatter, Post } from "@/types/post.types";

export default defineEventHandler(async (event) => {
  const body = await useSafeValidatedBody(event, searchRequestSchema);
  
  if (!body.success) {
    throw createError(body.error);
  }
  
  const query = serverQueryContent<Frontmatter>(event, body.data.type)
    .where({
      $or: [
        { title: { $icontains: body.data.query } },
        { description: { $icontains: body.data.query } },
        { tags: { $icontains: body.data.query } }
      ]
    })
    .only([
      "_path",
      "title",
      "description",
      "tags",
      "publicationDate"
    ]);
  
  const response: SearchResponse = {
    type: body.data.type as ContentType,

    // Find right content
    posts: await query.find() as Post[]
  };
  
  debugDo(() => {
    console.groupCollapsed("Search Invoked!");
    console.info("Search response:", response);
    console.groupEnd();
  });


  return response;
});
