import { CartProvider } from "@/domain/cart/contexts/cart-context";
import { TanstackProvider } from "@/lib/tanstack-provider";
import { ReactNode } from "react";
import { NextUIProvider } from "@nextui-org/react";
import { SearchProvider } from "@/domain/search/contexts/search-context";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <TanstackProvider>
      <NextUIProvider>
        <SearchProvider>
          <CartProvider>{children}</CartProvider>
        </SearchProvider>
      </NextUIProvider>
    </TanstackProvider>
  );
}
