import { CartProvider } from "@/domains/cart/contexts/cart-context";
import { TanstackProvider } from "@/lib/tanstack-provider";
import { ReactNode } from "react";
import { NextUIProvider } from "@nextui-org/react";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <TanstackProvider>
      <NextUIProvider>
        <CartProvider>{children}</CartProvider>
      </NextUIProvider>
    </TanstackProvider>
  );
}
