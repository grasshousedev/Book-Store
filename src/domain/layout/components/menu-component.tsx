"use client";
import { UiCollapsibleComponent } from "@/ui-collapsible-component";
import { MenuItemComponent } from "./menu-item-component";
import { useMenuContext } from "../contexts/menu-context";
import { useLayoutContext } from "@/domain/layout/contexts/layout-context";
import { getCategoryUrl } from "@/domain/category/helpers/get-category-url";
import { Divider } from "@nextui-org/react";
import { Fragment } from "react";

export function MenuComponent({ ...props }: React.ComponentProps<"nav">) {
  const menuState = useMenuContext().state;
  const showMenuMobileClass = menuState.isOpen ? "" : "hidden";

  const layoutState = useLayoutContext().state;
  const categories = layoutState.categories;

  let navClasses = `${showMenuMobileClass} lg:block`;
  props.className = props.className
    ? `${navClasses} ${props.className}`
    : navClasses;

  return (
    <nav {...props}>
      <ul className="flex flex-col lg:flex-row justify-center lg:w-fit mx-auto overflow-hidden lg:gap-[2px] lg:rounded-full leading-[16px] text-primary-800">
        <MenuItemComponent href="/about-us" title="About Us" />
        <FormatedDivider />
        <MenuItemComponent>
          <UiCollapsibleComponent
            shouldCloseWhenOutside={true}
            theHeader="Books"
            theContent={
              <ul className="text-sm">
                {categories.map((category, index) => (
                  <Fragment key={category.id}>
                    <MenuItemComponent
                      href={getCategoryUrl(category)}
                      title={category.name}
                      className="bg-primary-500 hover:bg-primary-400"
                    />
                    {index < categories.length - 1 && <FormatedDivider />}
                  </Fragment>
                ))}
              </ul>
            }
          />
        </MenuItemComponent>
        <FormatedDivider />
        <MenuItemComponent href="/contact-us" title="Contact Us" />
        <FormatedDivider />
        <MenuItemComponent href="/blog" title="Blog" />
      </ul>
    </nav>
  );
}

function FormatedDivider() {
  return <Divider className="bg-primary-200 lg:hidden" />;
}