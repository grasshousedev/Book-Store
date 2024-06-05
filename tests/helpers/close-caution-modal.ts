import { Page } from "@playwright/test";

export async function closeCautionModal(page: Page){
  return await page.getByRole("button", { name: "I understood." }).click();
}