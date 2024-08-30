import { test, expect } from "@playwright/test";
import { closeCautionModal } from "./helpers/close-caution-modal";

test.describe("Not Found Page", () => {
  test("should display not found page", async ({ page }) => {
    await page.goto("/asdf");
    await closeCautionModal(page);
    await expect(
      page.getByRole("heading", { level: 1, name: "Not Found" })
    ).toBeVisible();
  });
});
