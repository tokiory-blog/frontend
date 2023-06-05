import apiPath from "@/constants/apiPath";
import { url } from "@/config/runtime.config";
import got from "got";
import { SearchRequest, SearchResponse } from "@/types/search.types";

const SEARCH_URL = `${ url.dev }/${apiPath.search}`;
const SEARCH_PARAMS: SearchRequest = {
  type: "article",
  query: "ста"
};

describe("[post] /api/search", async () => {

  test("[Search]: Status should bee 200", async () => {
    const { statusCode } = await got.post(SEARCH_URL, { json: SEARCH_PARAMS });
    expect(statusCode).toEqual(200);
  });

  test("[Search]: Basic search", async () => {
    const data = await got.post(SEARCH_URL, { json: SEARCH_PARAMS }).json<SearchResponse>();
    expect(data?.posts.length ?? 0).toBeGreaterThan(0);
  });

  test("[Search]: Search for notes", async () => {
    const params: SearchRequest = {
      type: "notes",
      query: "nuxt"
    };

    const data = await got
      .post(SEARCH_URL, { json: params })
      .json<SearchResponse>();

    expect(data?.posts).toBeTypeOf("object");
  });
});
