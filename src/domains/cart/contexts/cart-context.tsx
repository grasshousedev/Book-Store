"use client";

import {
  createContext,
  useContext,
  useReducer,
  ReactNode,
  useEffect,
} from "react";
import { CartType } from "../types/cart-type";
import { CartActionType } from "../types/cart-action-type";
import { CartActionTypes } from "../enums/cart-action-types";
import { CartContextType } from "../types/cart-context-type";
import { useLocalStorage } from "usehooks-ts";

const initialState: CartType = {
  items: [],
};

const CartContext = createContext<CartContextType>({
  state: initialState,
  dispatch: () => {},
});

function cartReducer(cart: CartType, action: CartActionType) {
  switch (action.type) {
    case CartActionTypes.ADD_TO_CART:
      if (
        cart.items.find((item) => item.id === action.payload.id) === undefined
      ) {
        return {
          ...cart,
          items: [...cart.items, { id: action.payload.id, quantity: 1 }],
        };
      }
      return {
        ...cart,
        items: cart.items.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        }),
      };
    case CartActionTypes.REMOVE_FROM_CART:
      return {
        ...cart,
        items: cart.items.filter((item) => item.id != action.payload.id),
      };
    case CartActionTypes.INCREASE_CART_ITEM_QUANTITY:
      return {
        ...cart,
        items: cart.items.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        }),
      };
    case CartActionTypes.DECREASE_CART_ITEM_QUANTITY:
      return {
        ...cart,
        items: cart.items.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        }),
      };
    default:
      throw Error("Unknown action: " + action.type);
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [localState, setLocalState] = useLocalStorage<CartType>("cart", initialState);
  const [state, dispatch] = useReducer(cartReducer, localState);
  
  useEffect(() => {
    setLocalState(state);
  }, [state, setLocalState]);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCartContext(): CartContextType {
  return useContext(CartContext);
}
