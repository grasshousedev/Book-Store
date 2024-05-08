"use client";
import { UiTitleComponent } from "@/domains/ui/components/ui-title-component";
import { useCartContext } from "../../contexts/cart-context";
import { useIsClient } from "usehooks-ts";
import { UiPriceComponent } from "@/domains/ui/components/ui-price-component";
import Link from "next/link";
import { InfoIcon } from "lucide-react";
import { CartItemComponent } from "./cart-item-component";

export function CartPageComponent() {
  const cartContext = useCartContext();
  const cartItems = cartContext.state.items;
  const cartItemsQty = cartContext.getCartItemsQty();
  const cartItemsSubtotal = cartContext.cartItemsSubtotal();
  const isClient = useIsClient();

  return (
    isClient && (
      <div className="flex flex-col-reverse lg:flex-row">
        <main className="basis-2/3">
          <div className="p-10">
            <UiTitleComponent size="large">Shopping Cart</UiTitleComponent>
            <p className="text-sm p-2 my-2 border bg-green-100 text-green-900 flex gap-2 items-center">
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
          </div>
        </main>
        <aside className="basis-1/3">
          <div className="p-10">
            <span className="block">
              Subtotal ({cartItemsQty} product{cartItemsQty > 1 ? "s" : ""}):{" "}
              <UiPriceComponent value={cartItemsSubtotal.toString()} />
            </span>
            <Link
              href="checkout"
              title="Checkout"
              className="bg-green-900 font-bold p-4 text-green-100 block text-center mt-2 uppercase"
            >
              Checkout
            </Link>
            <span className="bg-green-100 p-2 block text-sm text-green-900 text-center mt-2">
              Ship these for free.
            </span>
            <Link
              href="checkout"
              title="Continue Shopping"
              className="bg-green-100 font-bold p-4 text-green-900 block text-center mt-2 text-sm"
            >
              Continue Shopping
            </Link>
          </div>
        </aside>
      </div>
    )
  );
}
