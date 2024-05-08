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
import { MinusIcon, PlusIcon } from "lucide-react";
import { useCartContext } from "../../contexts/cart-context";
import { CartActionTypes } from "../../enums/cart-action-types";

async function fetchProduct(id: number): Promise<ProductWithPageAndBookPrisma> {
  const response = await axios.get(`/api/product/${id}`);
  return response.data.product;
}

export function CartItemComponent({ cartItem }: { cartItem: CartItemType }) {
  const cartDispatch = useCartContext().dispatch;

  const response = useQuery({
    queryKey: ["product", cartItem.id],
    queryFn: () => fetchProduct(cartItem.id),
  });

  if (response.isLoading) return <UiLoaderComponent />;
  if (response.isError) return null;
  if (!response.data) return null;

  const product = response.data;

  return (
    <li className="py-4 border-b grid grid-cols-[145px_calc(100%-145px-16px)] gap-4">
      <ProductLinkComponent
        product={product}
        className="w-[145px] lg:row-span-2"
      >
        <div className="bg-gray-500 w-[145px] h-[193px]"></div>
      </ProductLinkComponent>
      <div className="h-fit">
        <ProductLinkComponent product={product} className="line-clamp-2">
          <h2>{product.name}</h2>
        </ProductLinkComponent>
        <span className="line-clamp-2 block text-sm">
          by {getAuthorsByProduct(product)}
        </span>
        <span className="block text-sm my-2">ISBN: {product.isbn}</span>
      </div>
      <div className="flex gap-2 h-fit self-end col-span-2 lg:col-auto">
        <UiButtonComponent
          className="text-sm p-0 bg-transparent text-red-500"
          onClick={() => {
            cartDispatch({
              type: CartActionTypes.REMOVE_FROM_CART,
              payload: { id: product.id },
            });
          }}
        >
          remove
        </UiButtonComponent>
        <div className="border-y border-green-900 flex gap-2 items-center">
          <UiButtonComponent
            className="text-sm p-1.5"
            onClick={() => {
              cartDispatch({
                type: CartActionTypes.DECREASE_CART_ITEM_QUANTITY,
                payload: { id: product.id },
              });
            }}
          >
            <MinusIcon />
          </UiButtonComponent>
          <div className="w-10 text-center text-sm">{cartItem.quantity}</div>
          <UiButtonComponent
            className="text-sm p-1.5"
            onClick={() => {
              cartDispatch({
                type: CartActionTypes.INCREASE_CART_ITEM_QUANTITY,
                payload: { id: product.id },
              });
            }}
          >
            <PlusIcon />
          </UiButtonComponent>
        </div>
        <span className="font-bold grow flex items-end justify-end">
          <span className="">
            <UiPriceComponent
              value={cartItem.quantity * parseInt(product.price.toString())}
            />
          </span>
        </span>
      </div>
    </li>
  );
}
