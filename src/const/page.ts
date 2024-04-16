export const PageType = {
  PRODUCT: "product",
  CATEGORY: "category",
  AUTHOR: "author",
  PUBLISHER: "publisher"
} as const;

export type PageType = "product" | "category" | "author" | "publisher";

export default PageType;