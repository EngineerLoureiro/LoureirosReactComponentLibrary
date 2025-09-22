// playwright.config.ts
import { defineConfig } from "@playwright/test";

export default defineConfig({
  // 1. Look for tests inside your src/ folders
  testDir: "src",

  // 2. Only match .spec.ts files for Playwright (ignore .test.tsx from Jest)
  testMatch: "**/*.spec.ts",

  // 3. Optional timeout per test (10s)
  timeout: 10_000,

  // 4. Use settings for all tests
  use: {
    headless: true, // use `false` for debugging
    baseURL: "http://localhost:5173", // Vite playground must be running
    viewport: { width: 800, height: 600 },
    ignoreHTTPSErrors: true,
    screenshot: "only-on-failure", // "on", "off"
    video: "retain-on-failure", // great for CI debugging
  },
});
