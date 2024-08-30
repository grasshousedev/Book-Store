import { test, expect } from "@playwright/test";
import { closeCautionModal } from "./helpers/close-caution-modal";

test.describe("Home", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    await closeCautionModal(page);
  });

  test("should display new release books", async ({ page }) => {
    const heading = page.getByRole('heading', { name: 'New Release Books' });
    await expect(heading).toBeVisible();

    const products = page.locator("_react=ProductListItemComponent");
    await expect(products).toHaveCount(6);
  });

  test("should display top categories", async ({ page }) => {
    const heading = page.getByRole('heading', { name: 'Explore Our Top Categories' });
    await expect(heading).toBeVisible();

    const categories = page.locator("_react=CategoryCardComponent");
    await expect(categories).toHaveCount(16);
  });

  test("should display featured authors", async ({ page }) => {
    const heading = page.getByRole('heading', { name: 'Featured Authors' });
    await expect(heading).toBeVisible();

    const authors = page.locator("_react=AuthorCardComponent");
    await expect(authors).toHaveCount(6);
  });
});
