"use client";

import { UiTitleComponent } from "@/domain/ui/components/ui-title-component";
import { useSearchContext } from "../../contexts/search-context";

export function SearchTitleComponent() {
  const keyword = useSearchContext().state.keyword;
  return (
    <div className="p-10">
      <UiTitleComponent size="large">
        Search Results {keyword && `for "${keyword}"`}
      </UiTitleComponent>
    </div>
  );
}
