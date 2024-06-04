import { test, expect } from "@playwright/test";

test.describe("Cart", () => {
  test("should display none items in cart", async ({ page }) => {
    await page.goto("/cart");
    await page.getByRole("button", { name: "I understood." }).click();
    const content = page.getByTestId("content");

    // Meta title
    await expect(page).toHaveTitle("Cart");

    // Heading
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(
      "Shopping Cart"
    );

    // Info
    await expect(
      content.getByText("There are no items in your shopping cart.")
    ).toBeVisible();

    // Continue Shopping
    await expect(
      content.getByRole("link").filter({ hasText: /^Continue Shopping$/ })
    ).toBeVisible();
  });

  test("should allow me to add product to cart", async ({ page, isMobile }) => {
    await page.goto("/");
    await page.getByRole("button", { name: "I understood." }).click();

    const productLink = page.locator("_react=ProductListItemComponent").first();
    await productLink.click();

    const addToCartComponent = page.getByTestId("add-to-cart-component");
    const productPrice = Number.parseFloat(
      (await addToCartComponent.locator("span").first().innerText()).replaceAll(
        "$",
        ""
      )
    );
    const addToCartButton = addToCartComponent.getByRole("button", {
      name: "ADD TO CART",
    });
    await addToCartButton.click();

    // URL
    await expect(page).toHaveURL("/cart");

    // Subtotal
    await expect(page.getByText("(1 product)")).toHaveCount(2);
    await expect(
      page.getByText(new RegExp(`^Subtotal(.*)\\$${productPrice.toFixed(2)}$`))
    ).toHaveCount(2);

    // Checkout Button
    await expect(page.getByRole("link", { name: "CHECKOUT" })).toBeVisible();

    // Shipping
    await expect(page.getByText("Ship these for free.")).toBeVisible();

    // Info
    await expect(
      page.getByText("Please verify that your shipping")
    ).toBeVisible();

    // Cart Items
    const products = page.locator("_react=CartItemComponent");
    await expect(products).toHaveCount(1);

    // Cart Item
    const product = products.first();
    await expect(product.getByRole("heading", { level: 2 })).toBeVisible();
    await expect(product.getByText(/by (.*)/)).toBeVisible();
    await expect(product.getByText(/^ISBN: ([0-9-]*)$/)).toBeVisible();
    await expect(product.getByRole("button", { name: "remove" })).toBeVisible();
    const decreaseButton = product.getByLabel("decrease quantity");
    const quantityLabel = product.getByLabel("quantity", { exact: true });
    const increaseButton = product.getByLabel("increase quantity");
    const cartItemSubtotal = product.getByLabel("cart item subtotal");
    await expect(decreaseButton).toBeVisible();
    await expect(quantityLabel).toHaveText("1");
    await expect(increaseButton).toBeVisible();
    await expect(cartItemSubtotal).toHaveText(
      new RegExp(`^\\$${productPrice.toFixed(2)}$`)
    );
  });

  test("should allow me change quantity", async ({ page }) => {
    // Go to Home
    await page.goto("/");
    await page.getByRole("button", { name: "I understood." }).click();

    const header = page.getByTestId("header");
    const headerCartQuantity = header
      .getByRole("link")
      .filter({ hasText: "Cart" })
      .locator("span")
      .first();

    // Header Cart 0
    await expect(headerCartQuantity).toHaveText("Cart");

    // Click on first product
    const productLink1 = page
      .locator("_react=ProductListItemComponent")
      .first();
    await productLink1.click();

    const addToCartComponent1 = page.getByTestId("add-to-cart-component");

    // Get product price
    const productPrice1 = Number.parseFloat(
      (
        await addToCartComponent1.locator("span").first().innerText()
      ).replaceAll("$", "")
    );

    // Click on add to cart
    const addToCartButton1 = addToCartComponent1.getByRole("button", {
      name: "ADD TO CART",
    });
    await addToCartButton1.click();

    // Header Cart 1
    await expect(headerCartQuantity).toHaveText("1");

    // Go to home again
    await page.goto("/");
    await page.getByRole("button", { name: "I understood." }).click();

    // Click on second product
    const productLink2 = (
      await page.locator("_react=ProductListItemComponent").all()
    )[1];
    await productLink2.click();

    const addToCartComponent2 = page.getByTestId("add-to-cart-component");

    // Get product price
    const productPrice2 = Number.parseFloat(
      (
        await addToCartComponent2.locator("span").first().innerText()
      ).replaceAll("$", "")
    );

    // Click on add to cart
    const addToCartButton2 = addToCartComponent2.getByRole("button", {
      name: "ADD TO CART",
    });
    await addToCartButton2.click();

    // URL
    await expect(page).toHaveURL("/cart");

    let quantityProducts = 2;

    // Header Cart 2
    await expect(headerCartQuantity).toHaveText(quantityProducts.toString());

    // Subtotal
    let subtotal = productPrice1 + productPrice2;
    await expect(
      page.getByText(
        `Subtotal (${quantityProducts} products): $${subtotal.toFixed(2)}`
      )
    ).toHaveCount(2);

    // Cart Items
    const cartItems = await page.locator("_react=CartItemComponent").all();
    await expect(cartItems).toHaveLength(2);

    // Cart Item 1
    const cartItem1 = cartItems[0];
    const decreaseButton1 = cartItem1.getByLabel("decrease quantity");
    const quantityLabel1 = cartItem1.getByLabel("quantity", { exact: true });
    const increaseButton1 = cartItem1.getByLabel("increase quantity");
    const cartItemSubtotal1 = cartItem1.getByLabel("cart item subtotal");
    await expect(decreaseButton1).toBeVisible();
    await expect(quantityLabel1).toHaveText("1");
    await expect(increaseButton1).toBeVisible();
    await expect(cartItemSubtotal1).toHaveText(
      new RegExp(`^\\$${productPrice1.toFixed(2)}$`)
    );

    // Cart Item 2
    const cartItem2 = cartItems[1];
    const decreaseButton2 = cartItem2.getByLabel("decrease quantity");
    const quantityLabel2 = cartItem2.getByLabel("quantity", { exact: true });
    const increaseButton2 = cartItem2.getByLabel("increase quantity");
    const cartItemSubtotal2 = cartItem2.getByLabel("cart item subtotal");
    await expect(decreaseButton2).toBeVisible();
    await expect(quantityLabel2).toHaveText("1");
    await expect(increaseButton2).toBeVisible();
    await expect(cartItemSubtotal2).toHaveText(
      new RegExp(`^\\$${productPrice2.toFixed(2)}$`)
    );

    // Increase
    await increaseButton1.click();
    await expect(quantityLabel1).toHaveText("2");
    await expect(cartItemSubtotal1).toHaveText(
      new RegExp(`^\\$${(productPrice1 * 2).toFixed(2)}$`)
    );
    quantityProducts = 3;
    await expect(headerCartQuantity).toHaveText(quantityProducts.toString());
    await expect(
      page.getByText(`Subtotal (${quantityProducts} products)`)
    ).toHaveCount(2);

    // Decrease
    await decreaseButton1.click();
    await expect(quantityLabel1).toHaveText("1");
    await expect(cartItemSubtotal1).toHaveText(
      new RegExp(`^\\$${productPrice1.toFixed(2)}$`)
    );
    quantityProducts = 2;
    await expect(headerCartQuantity).toHaveText(quantityProducts.toString());
    await expect(
      page.getByText(`Subtotal (${quantityProducts} products)`)
    ).toHaveCount(2);
  });

  test("should allow me remove product from cart", async ({ page }) => {
    // Go to Home
    await page.goto("/");
    await page.getByRole("button", { name: "I understood." }).click();

    const header = page.getByTestId("header");
    const headerCartQuantity = header
      .getByRole("link")
      .filter({ hasText: "Cart" })
      .locator("span")
      .first();

    // Click on first product
    const productLink1 = page
      .locator("_react=ProductListItemComponent")
      .first();
    await productLink1.click();

    const addToCartComponent = page.getByTestId("add-to-cart-component");

    // Click on add to cart
    const addToCartButton = addToCartComponent.getByRole("button", {
      name: "ADD TO CART",
    });
    await addToCartButton.click();

    // Header Cart
    await expect(headerCartQuantity).toHaveText("1");

    await expect(page.locator("_react=CartItemComponent")).toHaveCount(1);
    const cartItems = await page.locator("_react=CartItemComponent").all();
    const cartItem1 = cartItems[0];
    const decreaseButton1 = cartItem1.getByLabel("decrease quantity");
    await decreaseButton1.click();

    await expect(page.locator("_react=CartItemComponent")).toHaveCount(0);
    await expect(
      page.getByText("There are no items in your shopping cart.")
    ).toBeVisible();

    // Go to Home
    await page.goto("/");
    await page.getByRole("button", { name: "I understood." }).click();

    // Click on first product
    await productLink1.click();

    // Click on add to cart
    await addToCartButton.click();

    await expect(page.locator("_react=CartItemComponent")).toHaveCount(1);
    const removeButton1 = cartItem1.getByText("remove");
    await removeButton1.click();

    await expect(page.locator("_react=CartItemComponent")).toHaveCount(0);
    await expect(
      page.getByText("There are no items in your shopping cart.")
    ).toBeVisible();

  });
});
