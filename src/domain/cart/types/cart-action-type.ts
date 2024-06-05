import { CartActionEnum } from "../enums/cart-action-enum";

type CartActionTypeType =
  | CartActionEnum.ADD_TO_CART
  | CartActionEnum.REMOVE_FROM_CART
  | CartActionEnum.INCREASE_CART_ITEM_QUANTITY
  | CartActionEnum.DECREASE_CART_ITEM_QUANTITY;

export type CartActionType = {
  type: CartActionTypeType;
  payload?: any;
};
