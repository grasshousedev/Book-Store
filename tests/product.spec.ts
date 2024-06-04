import { test, expect } from "@playwright/test";

test.describe("Product", () => {
  test("should display page elements", async ({ page, isMobile }) => {
    await page.goto("/product/the-goldfinch");
    await page.getByRole("button", { name: "I understood." }).click();

    const content = page.getByTestId("content");

    // Meta title
    await expect(page).toHaveTitle("Book The Goldfinch");

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
      "The Goldfinch"
    );

    // Author
    await expect(
      page.getByRole("link").filter({ hasText: /^Donna Tartt$/ })
    ).toBeVisible();

    // Image

    // Synopses
    await expect(
      page.getByRole("heading", { level: 2 }).filter({ hasText: /Synopses/ })
    ).toBeVisible();

    // Product Details
    await expect(
      page
        .getByRole("heading", { level: 2 })
        .filter({ hasText: /Product Details/ })
    ).toBeVisible();

    // Products by Author
    await expect(
      page
        .getByRole("heading", { level: 3 })
        .filter({ hasText: /Arts and Entertainment Books You May Also Like/ })
    ).toBeVisible();
    await expect(
      content
        .locator("_react=ProductListItemComponent")
        .filter({ hasText: /The Secret History/ })
    ).toHaveCount(1);
    await expect(
      page
        .getByRole("link")
        .filter({ hasText: "See all books from Arts and Entertainment" })
    ).toBeVisible();

    // Products from Category
    await expect(
      page
        .getByRole("heading", { level: 3 })
        .filter({ hasText: /Books Also Written by Donna Tartt/ })
    ).toBeVisible();
    await expect(
      await content.locator("_react=ProductListItemComponent").count()
    ).toBeGreaterThan(1);
    await expect(
      page.getByRole("link").filter({ hasText: "See all books by Donna Tartt" })
    ).toBeVisible();

    // Price
    const addToCartComponent = page.getByTestId("add-to-cart-component");
    await expect(addToCartComponent).toHaveText(/^\$([0-9]+)\.([0-9]{2})(.*)/);

    // Add to Cart
    await expect(
      addToCartComponent.getByRole("button", { name: "ADD TO CART" })
    ).toBeVisible();

    // Shipping
    await expect(addToCartComponent.getByText("Ships in")).toBeVisible();
  });

  test("shouldn't display products by author", async ({ page }) => {
    await page.goto("/product/the-martian");
    await page.getByRole("button", { name: "I understood." }).click();

    await expect(
      page
        .getByRole("link")
        .filter({ hasText: "See all books from Arts and Entertainment" })
    ).toBeHidden();
  });
});
