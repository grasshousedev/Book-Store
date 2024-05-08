"use client";
import { UiPriceComponent } from "@/domains/ui/components/ui-price-component";
import { UiButtonComponent } from "@/domains/ui/components/ui-button-component";
import { CartItemType } from "../../types/cart-item-type";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { ProductWithPageAndBookPrisma } from "@/domains/product/types/product-prisma";
import { ProductLinkComponent } from "@/domains/product/components/product-link-component";
import { getAuthorsByProduct } from "@/domains/product/helpers/get-authors-by-product";
import { UiLoaderComponent } from "@/domains/ui/components/ui-loader-component";
import { ChevronDownIcon } from "lucide-react";

async function fetchProduct(id: number): Promise<ProductWithPageAndBookPrisma> {
  const response = await axios.get(`/api/product/${id}`);
  return response.data.product;
}

export function CartItemComponent({ cartItem }: { cartItem: CartItemType }) {
  const response = useQuery({
    queryKey: ["product", cartItem.id],
    queryFn: () => fetchProduct(cartItem.id),
  });

  if (response.isLoading) return <UiLoaderComponent />;
  if (response.isError) return null;
  if (!response.data) return null;

  const product = response.data;

  return (
    <li className="grid grid-cols-[145px_calc(100%-145px-16px)] lg:grid-cols-[145px_calc(100%-145px-32px-30%)_30%] py-4 border-b gap-4">
      <ProductLinkComponent product={product} className="block w-[145px]">
        <div className="bg-gray-500 w-[145px] h-[193px]"></div>
      </ProductLinkComponent>
      <div className="">
        <ProductLinkComponent product={product} className="line-clamp-2">
          <h2>{product.name}</h2>
        </ProductLinkComponent>
        <span className="line-clamp-2 block text-sm">by {getAuthorsByProduct(product)}</span>
        <span className="block text-sm my-2">ISBN: {product.isbn}</span>
        <div className="flex gap-2">
          <label className="inline-block cursor-pointer font-bold relative text-green-100">
            <ChevronDownIcon className="absolute right-[11px] top-[16px]" />
            <select className="leading-[24px] bg-green-900 p-4 pr-[40px] appearance-none cursor-pointer">
              <option>Qty: 10</option>
            </select>
          </label>
          <UiButtonComponent>Excluir</UiButtonComponent>
        </div>
      </div>
      <div className="col-span-2 lg:col-auto">
        <span className="font-bold text-right block">
          <UiPriceComponent value={20} />
        </span>
      </div>
    </li>
  );
}
