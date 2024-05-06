import type { Metadata } from "next";
import { PageType } from "@/const/page";
import { handlePageBySlugAndType } from "@/helpers/handle-page-by-slug-and-type";
import { CartPageContainer } from "@/domains/cart/containers/cart-page-container";

export async function generateMetadata(): Promise<Metadata> {
  return await handlePageBySlugAndType("home", PageType.CMS_PAGE);
}

export default async function Cart() {
  return <CartPageContainer />;
}
