"use client";
import { useCartContext } from "@/domains/cart/contexts/cart-context";
import { ShoppingCartIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useIsClient } from "usehooks-ts";

export function CartCtaComponent() {
  const cartState = useCartContext().state;
  const cartItems = cartState.items;
  const cartItemsQty = cartItems.reduce((acc, cur) => {
    return acc + cur.quantity;
  }, 0);
  const isClient = useIsClient();

  return (
    <Link href="/cart" className="flex items-center gap-2 pl-3 pr-3 lg:pr-0">
      <ShoppingCartIcon />
      {isClient ? <span className="asd">{cartItemsQty}</span> : null}
      <span>Cart</span>
    </Link>
  );
}
