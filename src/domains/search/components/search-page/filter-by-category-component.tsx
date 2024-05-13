"use client";

import { useLayoutContext } from "@/domains/layout/contexts/layout-context";
import { Fragment, useState } from "react";
import {
  Divider,
  CheckboxGroup,
  Checkbox,
  cn,
} from "@nextui-org/react";

export function FilterByCategoryComponent() {
  const layoutState = useLayoutContext().state;
  const categories = layoutState.categories;
  const [categoriesSelected, setCategoriesSelected] = useState([""]);

  return (
    <CheckboxGroup
      value={categoriesSelected}
      onValueChange={setCategoriesSelected}
      size="lg"
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
              label: cn("py-4"),
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
