import { UserIcon, ShoppingCartIcon } from "lucide-react";
import { EmmanuelsBookStoreImage } from "@/assets/images/emmanuels-book-store-image";
import { UiWrapperComponent } from "@/ui-wrapper-component";
import { UiSearchComponent } from "@/ui-search-component";
import { MenuComponent } from "./menu-component";
import { MenuCtaComponent } from "./menu-cta-component";
import Link from "next/link";
import { CartCtaComponent } from "@/domains/cart/components/cart-cta-component";


export function HeaderComponent() {
  return (
    <div className="bg-green-500 pb-20">
      <UiWrapperComponent className="lg:text-xs lg:leading-none">
        <div className="flex flex-col lg:flex-row px-10 py-5 gap-4 lg:gap-20 items-center">
          <Link href="/">
            <EmmanuelsBookStoreImage />
          </Link>
          <div className="grow self-stretch lg:self-auto">
            <UiSearchComponent />
          </div>
          <div className="flex items-start divide-x">
            <Link href="/account" className="flex items-center gap-2 pr-3">
              <UserIcon /> <span>Account</span>
            </Link>
            <CartCtaComponent />
            <MenuCtaComponent />
          </div>
        </div>
        <MenuComponent />
      </UiWrapperComponent>
    </div>
  );
}
