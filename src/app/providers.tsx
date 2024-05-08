import { CartProvider } from "@/domains/cart/contexts/cart-context";
import { TanstackProvider } from "@/lib/tanstack-provider";
import { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <TanstackProvider>
      <CartProvider>
        {children}
      </CartProvider>
    </TanstackProvider>
  );
}
