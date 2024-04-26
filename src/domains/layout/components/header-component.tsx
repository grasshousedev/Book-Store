import { UserIcon, ShoppingBagIcon } from 'lucide-react';
import { EmmanuelsBookStoreImage } from "@/assets/images/emmanuels-book-store-image";
import { UiWrapperComponent } from "@/ui-wrapper-component";
import { UiSearchComponent } from "@/ui-search-component";
import { MenuComponent } from "./menu-component";
import { MenuCtaComponent } from "./menu-cta-component";

export function HeaderComponent() {
  return (
    <UiWrapperComponent className="bg-green-500 lg:text-xs lg:leading-none">
      <div className="flex flex-col lg:flex-row px-10 py-5 gap-4 lg:gap-20 items-center">
        <a href="">
          <EmmanuelsBookStoreImage />
        </a>
        <div className="grow self-stretch lg:self-auto">
          <UiSearchComponent />
        </div>
        <div className="flex items-start divide-x">
          <a href='' className='flex items-center gap-2 pr-3'>
            <UserIcon /> <span>Account</span>
          </a>
          <a href='' className='flex items-center gap-2 pl-3 pr-3 lg:pr-0'>
            <ShoppingBagIcon /> <span>Cart</span>
          </a>
          <MenuCtaComponent />
        </div>
      </div>
      <MenuComponent />
    </UiWrapperComponent>
  );
}
