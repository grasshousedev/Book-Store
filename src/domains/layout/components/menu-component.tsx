"use client";
import { UiCollapsibleComponent } from "@/ui-collapsible-component";
import { MenuItemComponent } from "./menu-item-component";
import { useMenuContext } from "../contexts/menu-context";

export function MenuComponent() {
  const menuState = useMenuContext().state;
  const showMenuMobileClass = menuState.isOpen ? "" : "hidden";
  const categories = menuState.categories;
  return (
    <nav className={`${showMenuMobileClass} lg:block bg-green-200`}>
      <ul className="flex flex-col lg:flex-row justify-center divide-y lg:divide-y-0 lg:divide-x">
        <MenuItemComponent title="About Us">About Us</MenuItemComponent>
        <MenuItemComponent noLink={true} title="Books">
          <UiCollapsibleComponent
            shouldCloseWhenOutside={true}
            theHeader="Books"
            theContent={
              <ul className="bg-green-100 divide-y">
                {categories.map((category) => (
                  <MenuItemComponent key={category.id} title={category.name}>
                    {category.name}
                  </MenuItemComponent>
                ))}
              </ul>
            }
          />
        </MenuItemComponent>
        <MenuItemComponent title="New Release">New Release</MenuItemComponent>
        <MenuItemComponent title="Contact Us">Contact Us</MenuItemComponent>
        <MenuItemComponent title="Blog">Blog</MenuItemComponent>
      </ul>
    </nav>
  );
}
