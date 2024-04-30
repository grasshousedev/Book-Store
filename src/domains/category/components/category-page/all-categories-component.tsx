"use client";

import { useLayoutContext } from "@/domains/layout/contexts/layout-context";

export function AllCategoriesComponent() {
  const categories = useLayoutContext().state.categories;
  return (
    <div className="p-10">
    All Categories
    </div>
  );
}
