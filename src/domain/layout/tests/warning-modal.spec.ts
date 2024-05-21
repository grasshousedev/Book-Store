import { test, expect } from "@playwright/test";

test.describe("Warning Modal", () => {
  test("should display warning modal", async ({ page }) => {
    await page.goto("/");

    await expect(page.getByText("This is not real ecommerce!")).toBeVisible();
  });

  test("should close warning modal", async ({ page }) => {
    await page.goto("/");
    await page.getByRole('button', { name: 'I understood.' }).click();

    await expect(page.getByText("This is not real ecommerce!")).toBeHidden();
  });
});


