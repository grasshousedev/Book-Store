import { test, expect } from "@playwright/test";

test.describe("Menu", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    await page.getByRole("button", { name: "I understood." }).click();
  });

  test("should allow me to navigate the main menu pages", async ({ page, isMobile }) => {
    const header = page.getByTestId("header");
    const links = ["About Us", "Contact Us", "Blog"];
    if(isMobile){
      await header.getByText("Menu").click();
    }

    for (let i = 0; i < links.length; i++) {
      let link = header.getByRole("link", { name: links[i] });
      await expect(link).toBeVisible();
      await link.click();
      await expect(page.getByRole("heading", { level: 1 })).toHaveText(
        links[i]
      );
    }
  });

  test("should open/close books menu", async ({ page, isMobile }) => {
    const header = page.getByTestId("header");

    if(isMobile){
      await header.getByText("Menu").click();
    }
    
    // should be hidden at first
    await expect(header.getByRole('link', { name: 'Arts and Entertainment' })).toBeHidden();
    
    // should open after click on trigger
    const trigger = header.getByText('Books');
    await trigger.click();
    await expect(header.getByRole('link', { name: 'Arts and Entertainment' })).toBeVisible();

    // should close after click on trigger again
    await trigger.click();
    await expect(header.getByRole('link', { name: 'Arts and Entertainment' })).toBeHidden();

    // should close after click any link inside books menu
    await trigger.click();
    header.getByRole('link', { name: 'Arts and Entertainment' }).click();

    // should close after click anywhere outside books menu
    await trigger.click();
    await header.click();
    await expect(header.getByRole('link', { name: 'Arts and Entertainment' })).toBeHidden();
  });

  test("should open/close main menu", async ({ page, isMobile }) => {
    const header = page.getByTestId("header");

    if(isMobile){

      // should be hidden at first
      await expect(header.getByRole('link', { name: 'About Us' })).toBeHidden();

      // should be open after click
      await header.getByText("Menu").click();
      await expect(header.getByRole('link', { name: 'About Us' })).toBeVisible();

      // should be close after click again
      await header.getByText("Menu").click();
      await expect(header.getByRole('link', { name: 'About Us' })).toBeHidden();
    }
  });

  
});
