import test, { expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/components/value-action-button");
});

test("Validate ValueActionButton", async ({ page }) => {
  const button = page.getByRole("button", {
    name: /perform action .*add income/i,
  });
  test.step("Validate Button layout", async () => {
    await expect(page.getByTestId("value-action-button-title")).toHaveText(
      "Add Income"
    );
    await expect(
      page.getByTestId("value-action-button-description")
    ).toHaveText("Create an Income manually");

    await expect(button).toBeVisible();
  });

  test.step("Validate Button Functionality", async () => {
    page.on("dialog", async (dialog) => {
      expect(dialog.type()).toBe("alert");
      expect(dialog.message()).toBe("Clicked!");
      await dialog.accept();
    });
    await button.click();
  });
});
