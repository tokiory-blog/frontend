import { test, expect } from "@playwright/test";

test.describe("Navigation", () => {
  test.beforeEach(async ( { page }) => {
    await page.goto("/");
  });
  
  test("Article Page", async ({ page }) => {
    await page.getByText("Статьи", { exact: true }).click();
    await page.waitForURL(/article/);
    const title = await page.getByText("Статьи").nth(1);
    await expect(title).toBeVisible();
  });

  test("Notes Page", async ({ page }) => {
    await page.getByText("Заметки", { exact: true }).click();
    await page.waitForURL(/notes/);
    const title = await page.getByText("Заметки").nth(1);
    await expect(title).toBeVisible();
  });
  
  test("Links Page", async ({ page }) => {
    await page.getByText("Полезные ссылки", { exact: true }).click();
    await page.waitForURL(/links/);
    const title = page.getByText("Ссылки", { exact: true });
    await expect(title).toBeVisible();
  });
  
  test("Author Page", async ({ page }) => {
    await page.getByText("О разработчике", { exact: true }).click();
    await page.waitForURL(/author/);
    const title = page.getByText("Привет! Меня зовут Даниил");
    await expect(title).toBeVisible();
  });

  test("Devlog Page", async ({ page }) => {
    await page.getByText("ДевлогЛоги разработки различных проектов. Практически нет теории, только кухня👨").click();
    await page.waitForURL(/devlog/);
    const title = await page.getByText("Девлог").nth(1);
    await expect(title).toBeVisible();
  });
});