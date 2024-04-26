"use client";
import { useMediaQuery } from "react-responsive";
import { UiCollapsibleComponent } from "@/ui-collapsible-component";
import { MenuItemComponent } from "./menu-item-component";
import { useMenuContext } from "../contexts/menu-context";

export function MenuComponent() {
  const menuState = useMenuContext().state;
  const isLgScreen = useMediaQuery({ query: "(min-width: 1024px)" });
  const showMenuClass = isLgScreen || menuState.isOpen ? "" : "hidden";
  
  return (
    <nav className={`${showMenuClass} bg-green-200`}>
      <ul className="flex flex-col lg:flex-row justify-center divide-y lg:divide-y-0 lg:divide-x">
        <MenuItemComponent title="About Us">About Us</MenuItemComponent>
        <MenuItemComponent noLink={true} title="Books">
          <UiCollapsibleComponent
            theHeader="Books"
            theContent={
              <ul className="bg-green-100 divide-y">
                <MenuItemComponent title="Category A">
                  Category A
                </MenuItemComponent>
                <MenuItemComponent title="Catery B">Catery B</MenuItemComponent>
                <MenuItemComponent title="Cateory C">
                  Cateory C
                </MenuItemComponent>
                <MenuItemComponent title="Category D">
                  Category D
                </MenuItemComponent>
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
