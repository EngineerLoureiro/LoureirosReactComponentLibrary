import { test, expect } from "@playwright/test";

test.describe("Link Component", () => {
  test("should render and navigate", async ({ page }) => {
    await page.goto("/components/link");
    const link = page.getByRole("link", { name: "Click Me!" });
    await expect(link).toHaveAttribute("href", "/components/button-disabled");
  });

  test("should not navigate or be clickable when disabled", async ({
    page,
  }) => {
    await page.goto("/components/link-disabled");
    const link = page.getByRole("link", { name: "Click Me!" });

    await expect(link).toHaveAttribute("aria-disabled", "true");
    await expect(link).toHaveAttribute("tabindex", "-1");
  });

  test("should navigate to other page", async ({ page }) => {
    await page.goto("/components/link-blank");
    const link = page.getByRole("link", { name: "Click Me!" });

    await expect(link).toHaveAttribute("target", "_blank");
    await expect(link).toHaveAttribute("rel", "noopener noreferrer");
    // Clicking the link should open a new tab (popup)
    const [popup] = await Promise.all([
      page.waitForEvent("popup"), // Waits for a new page to open in context
      link.click(),
    ]);

    await popup.waitForLoadState("load");
    expect(popup.url()).toContain("/components/button-disabled");
  });

  test("matches visual snapshot", async ({ page }) => {
    await page.goto("/components/link");
    const link = page.getByRole("link", { name: "Click me!" });
    expect(await link.screenshot()).toMatchSnapshot("link-visual.png");
  });
});
