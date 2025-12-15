import test, { expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/components/value-card");
});

test("Validate ValueCard", async ({ page }) => {
  await expect(page.getByTestId("value-card-label")).toHaveText("Balance");
  await expect(page.getByTestId("value-card-value")).toHaveText("5,502.45");
  await expect(page.getByTestId("value-card-fluctuation")).toHaveText("12,5%");
  await expect(page.getByTestId("value-card-icon")).toBeVisible();
});
