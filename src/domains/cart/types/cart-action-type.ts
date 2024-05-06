import { CartActionTypes } from "../enums/cart-action-types";

type CartActionTypeType =
  | CartActionTypes.ADD_TO_CART
  | CartActionTypes.REMOVE_FROM_CART
  | CartActionTypes.INCREASE_CART_ITEM_QUANTITY
  | CartActionTypes.DECREASE_CART_ITEM_QUANTITY;

export type CartActionType = {
  type: CartActionTypeType;
  payload?: any;
};
