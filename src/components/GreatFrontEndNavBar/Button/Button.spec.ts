import { test, expect } from "@playwright/test";

test.describe("Button component", () => {
  // ✅ Rendering test
  test("renders with correct label", async ({ page }) => {
    await page.goto("/components/button");
    const button = page.getByRole("button", { name: "Click me!" });
    await expect(button).toBeVisible();
  });
  // ✅ Functional click interaction with alert handling
  test("handles click event visually", async ({ page }) => {
    await page.goto("/components/button");
    page.once("dialog", async (dialog) => {
      expect(dialog.message()).toBe("Clicked");
      await dialog.accept();
    });
    const button = page.getByRole("button", { name: "Click me!" });
    await button.click();
  });
  // ✅ Keyboard accessibility test
  test("is keyboard focusable", async ({ page }) => {
    await page.goto("/components/button");
    await page.keyboard.press("Tab");
    await expect(page.getByRole("button", { name: "Click me!" })).toBeFocused();
  });

  // ✅ CSS Property Assertion Example
  test("has correct background color when disabled", async ({ page }) => {
    await page.goto("/components/button-disabled");
    const button = page.getByRole("button", { name: "Click me!" });
    const color = await button.evaluate(
      (el) => getComputedStyle(el).backgroundColor
    );
    console.log(color);
    await expect(button).toHaveCSS("background-color", "rgb(245, 245, 245)"); // Adjust RGB value to match your CSS
  });
  // ✅ Visual regression snapshot
  test("matches visual snapshot", async ({ page }) => {
    await page.goto("/components/button");
    const button = page.getByRole("button", { name: "Click me!" });
    expect(await button.screenshot()).toMatchSnapshot("button-visual.png");
  });
});
