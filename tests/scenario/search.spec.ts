import { expect, Page, test } from "@playwright/test";

const formatTag = (tag: string | null): string | null => tag?.replaceAll(" ", "") ?? null;

/**
 * Get first post information
 * @param page Page instance
 * @param info Type of information
 */
const getPostInfo = async (page: Page, info: "title" | "description" | "tag"): Promise<string | null> => {
  switch (info) {
    case "description": {
      const description = await page.locator(".post__description").first().textContent();
      
      if (!description) {
        return null;
      }
      
      const fewDescriptionWords = description.split(" ");
      return fewDescriptionWords.slice(0, 8).join(" ");
    }
    case "tag": {
      const tag = await page.locator(".tag").first().textContent();
      return formatTag(tag);
    }
    default:
      return page.locator(".post__title").first().textContent();
  }
};


test.describe("Search", () => {
  const cases = [
    {
      name: "Articles",
      section: "Статьи",
    },
    {
      name: "Notes",
      section: "Заметки",
    },
  ];
  
  cases.forEach((item) => {
    test.describe(item.name, () => {
      test.beforeEach(async ({ page }) => {
        await page.goto("/");
        await page.waitForLoadState("domcontentloaded");
        await page.getByText(item.section, { exact: true }).click();
      });

      test("Search by title", async ({ page }) => {
        const firstArticleTitle = await getPostInfo(page, "title");
        if (!firstArticleTitle) {
          throw new Error("Page doesn't have articles!");
        }

        const search = await page.locator(".search__input").first();
        await search.fill(firstArticleTitle);

        // Wait for loading
        await page.waitForResponse(/api\/search/);

        // Expect post to be visible
        const posts = page.locator(".post");
        await expect(posts).toHaveCount(1);
      });

      test("Search by description", async ({ page }) => {
        const firstArticleDescription = await getPostInfo(page, "description");
        if (!firstArticleDescription) {
          throw new Error("Page doesn't have articles!");
        }

        const search = await page.locator(".search__input").first();
        await search.fill(firstArticleDescription);

        // Wait for loading
        await page.waitForResponse(/api\/search/);

        // Expect post to be visible
        const posts = page.locator(".post");
        await expect(posts).toHaveCount(1);
      });

      test("Search by tag", async ({ page }) => {
        const firstArticleTag = await getPostInfo(page, "tag");
        if (!firstArticleTag) {
          throw new Error("Page doesn't have articles!");
        }

        const search = await page.locator(".search__input").first();
        await search.fill(firstArticleTag);

        // Wait for loading
        await page.waitForResponse(/api\/search/);

        // Expect tag to exist in first post
        const firstPost = page.locator(".post").first();
        const tags = await firstPost.locator(".tag").all();
        const tagsContent = await Promise.all(tags.map(async tag => await tag.textContent()));
        await expect(
          tagsContent.some(content => formatTag(content)?.includes(firstArticleTag))
        ).toBe(true);
      });
    });
  });
});
