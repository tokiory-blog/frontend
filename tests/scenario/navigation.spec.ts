import { test, expect } from "@playwright/test";
import { selectors } from "@d/selectors";

test.describe("Navigation", () => {
  test.beforeEach(async ({ page, baseURL }) => {
    await page.goto(baseURL + "/");
  });
  
  test("Article Page", async ({ page }) => {
    await page.getByText("Статьи", { exact: true }).click();
    const title = page.locator(`[data-test='${selectors.page.title}']`);
    await title.isVisible();
    await expect(page).toHaveURL(/article/);
  });

  test("Notes Page", async ({ page }) => {
    await page.getByText("Заметки", { exact: true }).click();
    const title = page.locator(`[data-test='${selectors.page.title}']`);
    await title.isVisible();
    await expect(page).toHaveURL(/notes/);
  });
  
  test("Links Page", async ({ page }) => {
    await page.getByText("Полезные ссылки", { exact: true }).click();
    const title = page.locator(`[data-test='${selectors.page.title}']`);
    await title.isVisible();
    await expect(page).toHaveURL(/links/);
  });
  
  test("Author Page", async ({ page }) => {
    await page.getByText("О разработчике", { exact: true }).click();
    const title = page.locator(`[data-test='${selectors.page.title}']`);
    await title.isVisible();
    await expect(page).toHaveURL(/author/);
  });

  test("Devlog Page", async ({ page }) => {
    await page.getByText("Девлог", { exact: true }).click();
    const title = page.locator(`[data-test='${selectors.page.title}']`);
    await title.isVisible();
    await expect(page).toHaveURL(/devlog/);
  });
});