"use client";
import { UiCollapsibleComponent } from "@/ui-collapsible-component";
import { MenuItemComponent } from "./menu-item-component";
import { useMenuContext } from "../contexts/menu-context";
import { useLayoutContext } from "@/domains/layout/contexts/layout-context";
import { getCategoryUrl } from "@/domains/category/helpers/get-category-url";

export function MenuComponent() {
  const menuState = useMenuContext().state;
  const showMenuMobileClass = menuState.isOpen ? "" : "hidden";

  const layoutState = useLayoutContext().state;
  const categories = layoutState.categories;

  return (
    <nav className={`${showMenuMobileClass} lg:block bg-green-200`}>
      <ul className="flex flex-col lg:flex-row justify-center divide-y lg:divide-y-0 lg:divide-x">
        <MenuItemComponent href="/about-us" title="About Us" />
        <MenuItemComponent title="Books">
          <UiCollapsibleComponent
            shouldCloseWhenOutside={true}
            theHeader="Books"
            theContent={
              <ul className="bg-green-100 divide-y">
                {categories.map((category) => (
                  <MenuItemComponent
                    key={category.id}
                    href={getCategoryUrl(category)}
                    title={category.name}
                  />
                ))}
              </ul>
            }
          />
        </MenuItemComponent>
        <MenuItemComponent href="/new-release" title="New Release" />
        <MenuItemComponent href="/contact-us" title="Contact Us" />
        <MenuItemComponent href="/blog" title="Blog" />
      </ul>
    </nav>
  );
}
