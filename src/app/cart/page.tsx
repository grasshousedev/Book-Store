import type { Metadata } from "next";
import { PageType } from "@/types/page-type";
import { handlePageBySlugAndType } from "@/helpers/handle-page-by-slug-and-type";
import { CartPageComponent } from "@/domain/cart/components/cart-page/cart-page-component";

export async function generateMetadata(): Promise<Metadata> {
  return await handlePageBySlugAndType("cart", PageType.CMS_PAGE);
}

export default async function Cart() {
  return <CartPageComponent />;
}
