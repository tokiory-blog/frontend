import { defineConfig, devices } from "@playwright/test";
import * as dotenv from "dotenv";
dotenv.config();

const localBrowsers = [
  {
    name: "chromium",
    use: { ...devices["Desktop Chrome"] },
  },
  {
    name: "firefox",
    use: { ...devices["Desktop Firefox"] },
  },
  {
    name: "webkit",
    use: { ...devices["Desktop Safari"] },
  },
];

const ciBrowsers = [
  {
    name: "chromium",
    use: { ...devices["Desktop Chrome"] },
  },
];

// @see https://playwright.dev/docs/test-configuration
export default defineConfig({
  testDir: "./tests/scenario",
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: 3,
  workers: process.env.CI ? 1 : 2,
  reporter: process.env.CI ? "dot" : "list",
  use: {
    baseURL: `http://127.0.0.1:${process.env.PORT}`,
    trace: "on-first-retry",
    headless: true,
  },

  /* Configure projects for major browsers */
  projects: process.env.CI ? ciBrowsers : localBrowsers,

  /* Run your local dev server before starting the tests */
  webServer: {
    command: "pnpm app:dev",
    url: `http://127.0.0.1:${process.env.PORT}`,
    reuseExistingServer: !process.env.CI,
  },
});
