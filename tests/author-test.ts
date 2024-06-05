import { test, expect } from "@playwright/test";
import { closeCautionModal } from "./helpers/close-caution-modal";

test.describe("Author", () => {
  test("should display page elements", async ({ page, isMobile }) => {
    await page.goto("/author/donna-tartt");
    await closeCautionModal(page);

    const content = page.getByTestId("content");

    // Meta title
    await expect(page).toHaveTitle("Donna Tartt's Books");

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
      "Donna Tartt"
    );

    // Product List
    await expect(
      content.locator("_react=ProductListItemComponent")
    ).toHaveCount(2);
    
  });
});
