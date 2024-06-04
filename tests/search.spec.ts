import { MAX_PRICE, MAX_YEAR, MIN_PRICE, MIN_YEAR } from "@/const/global";
import { PRODUCTS_PER_PAGE } from "@/domain/search/consts";
import { test, expect } from "@playwright/test";

test.describe("Search", () => {
  test("should allow me to search by author", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("button", { name: "I understood." }).click();
    const searchField = await page.getByPlaceholder("Search Books");
    await expect(searchField).toBeVisible();

    await searchField.fill("George");
    await expect(page).toHaveURL("/search?keyword=George");

    // Meta title
    await expect(page).toHaveTitle("Search Results for George");

    const content = page.getByTestId("content");

    // Heading
    await expect(content.getByRole("heading", { level: 1 })).toHaveText(
      'Search Results for "George"'
    );

    // Product List
    await expect(content.getByText("2 products found.")).toBeVisible();
    await expect(content.locator("_react=ProductCardComponent")).toHaveCount(2);
    await expect(content.getByText("Load More Results")).toBeHidden();

    // Clear search field and check again
    await searchField.fill("");
    await expect(content.getByText("160 products found.")).toBeVisible();
    await expect(content.locator("_react=ProductCardComponent")).toHaveCount(
      PRODUCTS_PER_PAGE
    );
    await expect(content.getByText("Load More Results")).toBeVisible();
  });

  test("should allow me to search by title", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("button", { name: "I understood." }).click();
    const searchField = await page.getByPlaceholder("Search Books");

    await searchField.fill("A Brief History of Time");
    await expect(page).toHaveURL("/search?keyword=A+Brief+History+of+Time");

    // Meta title
    await expect(page).toHaveTitle(
      "Search Results for A Brief History of Time"
    );

    const content = page.getByTestId("content");

    // Heading
    await expect(content.getByRole("heading", { level: 1 })).toHaveText(
      'Search Results for "A Brief History of Time"'
    );

    // Product List
    await expect(content.getByText("1 product found.")).toBeVisible();
    await expect(content.locator("_react=ProductCardComponent")).toHaveCount(1);
    await expect(content.getByText("Load More Results")).toBeHidden();

    // Clear search field and check again
    await searchField.fill("");
    await expect(content.getByText("160 products found.")).toBeVisible();
    await expect(content.locator("_react=ProductCardComponent")).toHaveCount(
      PRODUCTS_PER_PAGE
    );
    await expect(content.getByText("Load More Results")).toBeVisible();
  });

  test("should allow me to search by isbn", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("button", { name: "I understood." }).click();
    const searchField = await page.getByPlaceholder("Search Books");
    await searchField.fill("1");
    await expect(page).toHaveURL("/search?keyword=1");

    // Meta title
    await expect(page).toHaveTitle("Search Results for 1");

    const content = page.getByTestId("content");

    // Heading
    await expect(content.getByRole("heading", { level: 1 })).toHaveText(
      'Search Results for "1"'
    );

    // Product List
    await expect(content.getByText("products found.")).toBeVisible();
    await expect(
      await content.locator("_react=ProductCardComponent").count()
    ).toBeLessThan(160);

    // Clear search field and check again
    await searchField.fill("");
    await expect(content.getByText("160 products found.")).toBeVisible();
    await expect(content.locator("_react=ProductCardComponent")).toHaveCount(
      PRODUCTS_PER_PAGE
    );
    await expect(content.getByText("Load More Results")).toBeVisible();
  });

  test("should allow me to clear search bar", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("button", { name: "I understood." }).click();
    const searchField = await page.getByPlaceholder("Search Books");
    await searchField.fill("George");
    await page.locator("//span[@data-slot='clear-button']").click();
    const content = page.getByTestId("content");
    await expect(content.getByText("160 products found.")).toBeVisible();
    await expect(content.locator("_react=ProductCardComponent")).toHaveCount(
      PRODUCTS_PER_PAGE
    );
    await expect(content.getByText("Load More Results")).toBeVisible();
  });

  test("should allow me to apply filter by category", async ({
    page,
    isMobile,
  }) => {
    if (!isMobile) {
      await page.goto("/search");
      await page.getByRole("button", { name: "I understood." }).click();
      const searchField = await page.getByPlaceholder("Search Books");
      const content = await page.getByTestId("content");
      const artsCategoryFilter = content.getByText("Arts and Entertainment");
      await expect(artsCategoryFilter).toBeVisible();
      await artsCategoryFilter.click();
      await expect(content.getByText("10 products found.")).toBeVisible();
      await expect(content.locator("_react=ProductCardComponent")).toHaveCount(
        PRODUCTS_PER_PAGE
      );
      await artsCategoryFilter.click();
      await expect(content.getByText("160 products found.")).toBeVisible();
    }
  });

  test("should allow me to access url directly", async ({ page }) => {
    await page.goto("/search?keyword=George");
    await page.getByRole("button", { name: "I understood." }).click();
    await expect(page.getByText("2 products found.")).toBeVisible();

    await page.goto("/search?categories=horror");
    await page.getByRole("button", { name: "I understood." }).click();
    await expect(page.getByText("10 products found.")).toBeVisible();

    await page.goto("/search?keyword=George&categories=literature-and-poetry");
    await page.getByRole("button", { name: "I understood." }).click();
    await expect(page.getByText("1 product found.")).toBeVisible();
  });

  test("should allow me to clear filters", async ({ page }) => {
    await page.goto("/search?keyword=George");
    await page.getByRole("button", { name: "I understood." }).click();
    await page.getByText("Clear Filters").click();
    await expect(page.getByText("160 products found.")).toBeVisible();
  });

  test("should allow me to load more results", async ({ page }) => {
    await page.goto("/search");
    await page.getByRole("button", { name: "I understood." }).click();
    await expect(page.locator("_react=ProductCardComponent")).toHaveCount(
      PRODUCTS_PER_PAGE
    );
    await page.getByText("Load More Results").click();
    await expect(page.locator("_react=ProductCardComponent")).toHaveCount(
      PRODUCTS_PER_PAGE * 2
    );
  });
});
