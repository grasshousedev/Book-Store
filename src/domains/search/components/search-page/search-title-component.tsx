"use client";

import { UiTitleComponent } from "@/domains/ui/components/ui-title-component";
import { useSearchContext } from "../../contexts/search-context";

export function SearchTitleComponent() {
  const keyword = useSearchContext().state.keyword;
  const orderby = useSearchContext().state.orderby;
  return (
    <div className="p-10">
      <UiTitleComponent size="large">
        Search Results {keyword && `for "${keyword}"`}
      </UiTitleComponent>
      {orderby}
    </div>
  );
}
