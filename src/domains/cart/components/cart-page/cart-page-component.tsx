"use client";
import { UiTitleComponent } from "@/domains/ui/components/ui-title-component";
import { useCartContext } from "../../contexts/cart-context";
import { useIsClient } from "usehooks-ts";
import { UiPriceComponent } from "@/domains/ui/components/ui-price-component";
import Link from "next/link";
import { InfoIcon } from "lucide-react";
import { CartItemComponent } from "./cart-item-component";

export function CartPageComponent() {
  const isClient = useIsClient();
  const cartContext = useCartContext();
  const cartItems = cartContext.state.items;
  const cartItemsQty = cartContext.getCartItemsQty();
  const cartItemsSubtotal = cartContext.cartItemsSubtotal();

  return (
    isClient && (
      <div className="flex flex-col-reverse lg:flex-row">
        <main className="basis-2/3">
          <div className="p-10">
            <UiTitleComponent size="large">Shopping Cart</UiTitleComponent>
            {cartItemsQty > 0 ? (
              <>
                <p className="text-sm p-2 my-2 border bg-primary-100 text-primary-900 flex gap-2 items-center">
                  <InfoIcon className="shrink-0" />
                  Please verify that your shipping address and order details are
                  correct before placing your order. Orders shipping from partner
                  warehouses cannot be modified once they have begun processing.
                </p>
                <ul className="border-t my-4">
                  {cartItems.map((item) => (
                    <CartItemComponent key={item.id} cartItem={item} />
                  ))}
                </ul>
                <span className="block text-right">
                  Subtotal ({cartItemsQty} product{cartItemsQty > 1 ? "s" : ""}):{" "}
                  <span className="font-bold">
                    <UiPriceComponent value={cartItemsSubtotal.toString()} />
                  </span>
                </span>
              </>
            ) : (
              <p className="text-sm p-2 my-2 border bg-primary-100 text-primary-900 flex gap-2 items-center">
                <InfoIcon className="shrink-0" />
                There are no items in your shopping cart.
              </p>
            )}
          </div>
        </main>
        <aside className="basis-1/3">
          <div className="p-10">
            {cartItemsQty > 0 && (
              <>
                <span className="block">
                  Subtotal ({cartItemsQty} product{cartItemsQty > 1 ? "s" : ""}
                  ): <UiPriceComponent value={cartItemsSubtotal.toString()} />
                </span>
                <Link
                  href="checkout"
                  title="Checkout"
                  className="bg-primary-900 font-bold p-4 text-primary-100 block text-center mt-2 uppercase"
                >
                  Checkout
                </Link>
                <span className="bg-primary-100 p-2 block text-sm text-primary-900 text-center mt-2">
                  Ship these for free.
                </span>
              </>
            )}
            <Link
              href="checkout"
              title="Continue Shopping"
              className="bg-primary-100 font-bold p-4 text-primary-900 block text-center mt-2 text-sm"
            >
              Continue Shopping
            </Link>
          </div>
        </aside>
      </div>
    )
  );
}
