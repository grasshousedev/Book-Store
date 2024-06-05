import { test, expect } from "@playwright/test";
import { closeCautionModal } from "./helpers/close-caution-modal";

test.describe("Footer", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    await closeCautionModal(page);
  });

  test("should display copyright", async ({ page }) => {
    const footer = page.getByTestId("footer");

    await expect(
      footer.getByText(`© ${new Date().getFullYear()} emmanuelsbookstore.com`)
    ).toBeVisible;
  });

  test("should display headings", async ({ page }) => {
    const headings = ["Stay Connected", "Help", "Explore"];
    const footer = page.getByTestId("footer");

    for (let i = 0; i < headings.length; i++) {
      await expect(
        footer.getByRole("heading", { name: headings[i] })
      ).toBeVisible();
    }
  });

  test("should allow me to navigate the help pages", async ({ page }) => {
    const footer = page.getByTestId("footer");
    const links = ["Contact Us", "Guarantee", "Shipping", "Privacy", "Terms"];

    for (let i = 0; i < links.length; i++) {
      let link = footer.getByRole("link", { name: links[i] });
      await expect(link).toBeVisible();
      await link.click();
      await expect(page.getByRole("heading", {level: 1})).toHaveText(links[i]);
    }
  });

  test("should allow me to navigate the explore pages", async ({ page }) => {
    const footer = page.getByTestId("footer");
    const links = [
      "Featured Authors",
      "New Release Books",
      "Top Categories",
      "Latest Blog Articles",
      "Publishers",
      "About Us",
    ];

    for (let i = 0; i < links.length; i++) {
      let link = footer.getByRole("link", { name: links[i] });
      await expect(link).toBeVisible();
      await link.click();
      await expect(page.getByRole("heading", {level: 1})).toHaveText(links[i]);
    }

  });
});
