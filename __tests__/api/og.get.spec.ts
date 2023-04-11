import { describe, test, expect } from "vitest";
import apiPath from "@/constants/apiPath";
import { url } from "@/config/runtime.config";
import got from "got";

const SIMPLE_OG_URL = `${ url.dev }/${apiPath.og}?${
  new URLSearchParams({
    title: "Hello, World!",
    url: "https://google.com",
  }).toString()
}`;

describe("/api/og", async () => {

  test("[OG]: Status should bee 200", async () => {
    const { statusCode } = await got.get(SIMPLE_OG_URL);
    expect(statusCode).toEqual(200);
  });

  test("[OG]: Generate simple og image", async () => {
    const { body } =
      await got.get(SIMPLE_OG_URL);
    expect(body.length).toBeGreaterThan(0);
  });

});