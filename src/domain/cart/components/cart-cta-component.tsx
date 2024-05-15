"use client";
import { useCartContext } from "@/domain/cart/contexts/cart-context";
import { ShoppingCartIcon } from "lucide-react";
import Link from "next/link";
import { useIsClient } from "usehooks-ts";

export function CartCtaComponent() {
  const cartContext = useCartContext();
  const cartItemsQty = cartContext.getCartItemsQty();
  const isClient = useIsClient();

  return (
    <Link href="/cart" className="flex items-center gap-2 pl-3 pr-3 lg:pr-0">
      {isClient && cartItemsQty > 0 ? <span className="asd absolute -mt-[27px] ml-[6px] w-[16px] text-center">{cartItemsQty}</span> : null}
      <ShoppingCartIcon />
      <span>Cart</span>
    </Link>
  );
}
