"use client";
import { UiCollapsibleComponent } from "@/ui-collapsible-component";
import { MenuItemComponent } from "./menu-item-component";
import { useMenuContext } from "../contexts/menu-context";
import { useLayoutContext } from "@/domain/layout/contexts/layout-context";
import { getCategoryUrl } from "@/domain/category/helpers/get-category-url";

export function MenuComponent({...props}: React.ComponentProps<"nav">) {
  const menuState = useMenuContext().state;
  const showMenuMobileClass = menuState.isOpen ? "" : "hidden";

  const layoutState = useLayoutContext().state;
  const categories = layoutState.categories;

  let navClasses = `${showMenuMobileClass} lg:block`;
  props.className = props.className ? `${navClasses} ${props.className}` : navClasses;

  return (
    <nav {...props}>
      <ul className="flex flex-col lg:flex-row justify-center divide-y lg:divide-y-0 lg:rounded-lg lg:w-fit mx-auto overflow-hidden">
        <MenuItemComponent href="/about-us" title="About Us" />
        <MenuItemComponent>
          <UiCollapsibleComponent
            shouldCloseWhenOutside={true}
            theHeader="Books"
            theContent={
              <ul className="bg-primary-100 divide-y">
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
        <MenuItemComponent href="/contact-us" title="Contact Us" />
        <MenuItemComponent href="/blog" title="Blog" />
      </ul>
    </nav>
  );
}
