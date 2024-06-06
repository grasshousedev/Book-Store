import { CartProvider } from "@/domain/cart/contexts/cart-context";
import { TanstackProvider } from "@/lib/tanstack-provider";
import { ReactNode, Suspense } from "react";
import { NextUIProvider } from "@nextui-org/react";
import { SearchProvider } from "@/domain/search/contexts/search-context";
import Loading from "./loading";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <TanstackProvider>
      <NextUIProvider>
        <Suspense fallback={<Loading />}>
          <SearchProvider>
            <CartProvider>{children}</CartProvider>
          </SearchProvider>
        </Suspense>
      </NextUIProvider>
    </TanstackProvider>
  );
}
