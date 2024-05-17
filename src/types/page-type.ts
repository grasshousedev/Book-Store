export const PageType = {
  PRODUCT: "product",
  CATEGORY: "category",
  AUTHOR: "author",
  PUBLISHER: "publisher",
  CMS_PAGE: "cmsPage"
} as const;

export type PageType = "product" | "category" | "author" | "publisher" | "cmsPage";