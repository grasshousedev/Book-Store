import { Dispatch } from "react";
import { CartType } from "./cart-type";
import { CartActionType } from "./cart-action-type";

export type CartContextType = {
  state: CartType;
  dispatch: Dispatch<CartActionType>;
  getCartItemsQty: Function;
  cartItemsSubtotal: Function;
};
