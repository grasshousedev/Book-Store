"use client";

import { MenuItemComponent } from "@/domains/layout/components/menu-item-component";
import { useLayoutContext } from "@/domains/layout/contexts/layout-context";
import { UiButtonComponent } from "@/domains/ui/components/ui-button-component";
import { UiCollapsibleComponent } from "@/domains/ui/components/ui-collapsible-component";
import { UiTitleComponent } from "@/domains/ui/components/ui-title-component";
import React, { useState } from "react";
import { RadioGroup, Radio } from "@nextui-org/radio";

export function SearchFiltersComponent() {
  const layoutState = useLayoutContext().state;
  const categories = layoutState.categories;

  const [isFilterOpened, setIsFilterOpened] = useState(false);
  const [isOrderByOpened, setIsOrderByOpened] = useState(false);

  function handleFilterClick() {
    setIsFilterOpened(!isFilterOpened);
    setIsOrderByOpened(false);
  }

  function handleOrderByClick() {
    setIsOrderByOpened(!isOrderByOpened);
    setIsFilterOpened(false);
  }

  const visibilityFilterClasses = isFilterOpened ? "" : "hidden";
  const visibilityOrderByClasses = isOrderByOpened ? "" : "hidden";

  const [orderBySelected, setOrderBySelected] = React.useState("title");

  return (
    <div className="">
      <div className="lg:hidden grid grid-cols-2 gap-4 p-4 bg-green-200">
        <UiButtonComponent onClick={handleFilterClick}>
          Filter
        </UiButtonComponent>
        <UiButtonComponent onClick={handleOrderByClick}>
          Order by
        </UiButtonComponent>
      </div>
      <UiTitleComponent
        size="small"
        level="h2"
        className="hidden lg:block p-10 pb-0"
      >
        Filter
      </UiTitleComponent>
      <ul
        className={`flex flex-col justify-center divide-y mx-auto overflow-hidden ${visibilityFilterClasses} lg:flex`}
      >
        <MenuItemComponent>
          <UiCollapsibleComponent
            shouldCloseWhenOutside={true}
            theHeader="Category"
            theContent={
              <ul className="bg-primary-100 divide-y">
                {categories.map((category) => (
                  <MenuItemComponent key={category.id} title={category.name} />
                ))}
              </ul>
            }
          />
        </MenuItemComponent>
        <MenuItemComponent>
          <UiCollapsibleComponent
            shouldCloseWhenOutside={true}
            theHeader="Price"
            theContent={
              <ul className="bg-primary-100 divide-y">
                {categories.map((category) => (
                  <MenuItemComponent key={category.id} title={category.name} />
                ))}
              </ul>
            }
          />
        </MenuItemComponent>
        <MenuItemComponent>
          <UiCollapsibleComponent
            shouldCloseWhenOutside={true}
            theHeader="Publication Year"
            theContent={
              <ul className="bg-primary-100 divide-y">
                {categories.map((category) => (
                  <MenuItemComponent key={category.id} title={category.name} />
                ))}
              </ul>
            }
          />
        </MenuItemComponent>
      </ul>
      <UiTitleComponent
        size="small"
        level="h2"
        className="hidden lg:block p-10 pb-0"
      >
        Order by
      </UiTitleComponent>
      <ul
        className={`flex flex-col justify-center divide-y mx-auto overflow-hidden ${visibilityOrderByClasses} lg:flex`}
      >
        <MenuItemComponent>
          <UiCollapsibleComponent
            shouldCloseWhenOutside={true}
            theHeader="Order by"
            theContent={<></>}
          />
        </MenuItemComponent>
      </ul>
      <RadioGroup
        label="Order by"
        value={orderBySelected}
        onValueChange={setOrderBySelected}
      >
        <Radio value="title">Title</Radio>
        <Radio value="price">Price</Radio>
      </RadioGroup>
      {orderBySelected}
    </div>
  );
}
