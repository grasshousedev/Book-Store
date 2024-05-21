import { test, expect } from "@playwright/test";

test.describe("Header", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    await page.getByRole("button", { name: "I understood." }).click();
  });

  test("should display logo", async ({ page }) => {
    const header = page.getByTestId("header");

    await expect(header.locator("a").first()).toBeVisible;
  });
  
});
