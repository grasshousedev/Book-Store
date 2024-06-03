import { test, expect } from "@playwright/test";

test.describe("Category", () => {
  test("should display page elements", async ({ page, isMobile }) => {
    await page.goto("/category/arts-and-entertainment");
    await page.getByRole("button", { name: "I understood." }).click();

    const content = page.getByTestId("content");

    // Meta title
    await expect(page).toHaveTitle("Arts and Entertainment Books");

    // Categories
    if (isMobile) {
      await expect(content.getByText("Categories")).toBeHidden();
    } else {
      await expect(content.getByText("Categories")).toBeVisible();
      await expect(
        content.getByRole("listitem").filter({ hasText: /Horror/ })
      ).toBeVisible();
      await expect(
        content.getByRole("listitem").filter({ hasText: /Romance/ })
      ).toBeVisible();
    }

    // Heading
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(
      "Arts and Entertainment"
    );

    // Product List
    await expect(
      await content.locator("_react=ProductListItemComponent").count()
    ).toBeGreaterThan(4);
    
  });
});
