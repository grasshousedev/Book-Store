import { UserIcon } from "lucide-react";
import { EmmanuelsBookStoreImage } from "@/assets/images/emmanuels-book-store-image";
import { UiWrapperComponent } from "@/ui-wrapper-component";
import { MenuComponent } from "./menu-component";
import { MenuCtaComponent } from "./menu-cta-component";
import Link from "next/link";
import { CartCtaComponent } from "@/domain/cart/components/cart-cta-component";
import { InputSearchComponent } from "@/domain/search/components/input-search-component";

export function HeaderComponent() {
  return (
    <header className="bg-primary-500 pb-20" data-testid="header">
      <UiWrapperComponent className="lg:text-xs lg:leading-none">
        <div className="flex flex-col lg:flex-row pt-4 items-center lg:px-10">
          <Link href="/" title="Emmanuel's Book Store">
            <EmmanuelsBookStoreImage />
          </Link>
          <div className="flex flex-col-reverse lg:flex-row grow self-stretch lg:self-auto items-center">
            <MenuComponent className="grow self-stretch lg:self-auto pb-4" />
            <div className="flex items-start divide-x py-4">
              <Link href="/" className="flex items-center gap-2 pr-3">
                <UserIcon /> <span>Account</span>
              </Link>
              <CartCtaComponent />
              <MenuCtaComponent />
            </div>
          </div>
        </div>
        <div className="pb-4 px-4 lg:w-2/3 mx-auto">
          <InputSearchComponent />
        </div>
      </UiWrapperComponent>
    </header>
  );
}
