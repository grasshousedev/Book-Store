"use client";

import { Fragment } from "react";
import { Divider, CheckboxGroup, Checkbox, cn } from "@nextui-org/react";
import { SearchActionTypes } from "../../enums/search-action-types";
import { useSearchContext } from "../../contexts/search-context";
import { useCustomRouter } from "@/helpers/use-custom-router";
import { useLayoutContext } from "@/domain/layout/contexts/layout-context";

export function FilterByCategoryComponent() {
  const layoutState = useLayoutContext().state;
  const categories = layoutState.categories;
  const categoriesSelected = useSearchContext().state.categories;
  const searchDispatch = useSearchContext().dispatch;
  const customRouter = useCustomRouter();

  function handleChangeCategories(values: string[]) {
    searchDispatch({
      type: SearchActionTypes.UPDATED_CATEGORIES,
      payload: { categories: values },
    });
    customRouter.push("categories", values);
  }

  return (
    <CheckboxGroup
      value={categoriesSelected}
      onValueChange={handleChangeCategories}
      size="sm"
      classNames={{
        wrapper: cn("gap-0"),
      }}
      className="overflow-hidden"
    >
      {categories.map((category, index) => (
        <Fragment key={category.id}>
          <Checkbox
            value={category.page.slug}
            classNames={{
              label: cn("py-2"),
            }}
          >
            {category.name}
          </Checkbox>
          {index < categories.length - 1 && <Divider />}
        </Fragment>
      ))}
    </CheckboxGroup>
  );
}
