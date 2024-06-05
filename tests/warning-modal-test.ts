import { test, expect } from "@playwright/test";
import { closeCautionModal } from "./helpers/close-caution-modal";

test.describe("Warning Modal", () => {
  test("should display warning modal", async ({ page }) => {
    await page.goto("/");

    await expect(page.getByText("This is not real ecommerce!")).toBeVisible();
  });

  test("should close warning modal", async ({ page }) => {
    await page.goto("/");
    await closeCautionModal(page);

    await expect(page.getByText("This is not real ecommerce!")).toBeHidden();
  });
});


