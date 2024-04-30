import { UserIcon, ShoppingBagIcon } from 'lucide-react';
import { EmmanuelsBookStoreImage } from "@/assets/images/emmanuels-book-store-image";
import { UiWrapperComponent } from "@/ui-wrapper-component";
import { UiSearchComponent } from "@/ui-search-component";
import { MenuComponent } from "./menu-component";
import { MenuCtaComponent } from "./menu-cta-component";
import Link from 'next/link';

export function HeaderComponent() {
  return (
    <UiWrapperComponent className="bg-green-500 lg:text-xs lg:leading-none">
      <div className="flex flex-col lg:flex-row px-10 py-5 gap-4 lg:gap-20 items-center">
        <Link href="/">
          <EmmanuelsBookStoreImage />
        </Link>
        <div className="grow self-stretch lg:self-auto">
          <UiSearchComponent />
        </div>
        <div className="flex items-start divide-x">
          <Link href='/account' className='flex items-center gap-2 pr-3'>
            <UserIcon /> <span>Account</span>
          </Link>
          <Link href='/cart' className='flex items-center gap-2 pl-3 pr-3 lg:pr-0'>
            <ShoppingBagIcon /> <span>Cart</span>
          </Link>
          <MenuCtaComponent />
        </div>
      </div>
      <MenuComponent />
    </UiWrapperComponent>
  );
}
