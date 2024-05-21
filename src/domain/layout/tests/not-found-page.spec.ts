import { BASE_URL } from "@/const/global";
import { test, expect } from "@playwright/test";

test.describe("Not Found Page", () => {
  test("should display not found page", async ({ page }) => {
    await page.goto(`${BASE_URL}/asdf`);
    await page.getByRole("button", { name: "I understood." }).click();
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(
      "Not Found"
    );
  });
});
