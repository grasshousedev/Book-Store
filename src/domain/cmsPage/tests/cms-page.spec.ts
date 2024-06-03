import { test, expect } from "@playwright/test";

test.describe("CMS Page", () => {
  test("should display page elements", async ({ page, isMobile }) => {
    await page.goto("/contact-us");
    await page.getByRole("button", { name: "I understood." }).click();

    const content = page.getByTestId("content");

    // Meta title
    await expect(page).toHaveTitle("Contact Us");

    // Heading
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(
      "Contact Us"
    );
    
  });
});
