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
import { CartActionEnum } from "../enums/cart-action-enum";
import { CartContextType } from "../types/cart-context-type";
import { useLocalStorage } from "usehooks-ts";
import { useProductsByIdsQuery } from "@/domain/product/queries/use-products-by-ids-query";

const initialState: CartType = {
  items: [],
};

const CartContext = createContext<CartContextType>({
  state: initialState,
  dispatch: () => {},
  getCartItemsQty: () => {},
  cartItemsSubtotal: () => {},
});

function cartReducer(cart: CartType, action: CartActionType) {
  switch (action.type) {
    case CartActionEnum.ADD_TO_CART:
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
    case CartActionEnum.REMOVE_FROM_CART:
      return {
        ...cart,
        items: cart.items.filter((item) => item.id != action.payload.id),
      };
    case CartActionEnum.INCREASE_CART_ITEM_QUANTITY:
      return {
        ...cart,
        items: cart.items.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        }),
      };
    case CartActionEnum.DECREASE_CART_ITEM_QUANTITY:
      return {
        ...cart,
        items: cart.items
          .filter((item) => {
            return item.quantity > 1 || item.id != action.payload.id;
          })
          .map((item) => {
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
  const [localState, setLocalState] = useLocalStorage<CartType>(
    "cart",
    initialState
  );
  const [state, dispatch] = useReducer(cartReducer, localState);
  const cartItems = state.items;
  const responses = useProductsByIdsQuery(cartItems.map((item) => item.id));

  function getCartItemsQty(): number {
    const cartItems = state.items;
    return cartItems.reduce((acc, cur) => {
      return acc + cur.quantity;
    }, 0);
  }

  function cartItemsSubtotal(): number {
    let subTotal = 0;
    cartItems.forEach((item) => {
      responses.some((response) => {
        const product = response.data;
        if (!product) {
          return true;
        }
        if (item.id == product.id) {
          subTotal += parseInt(product.price.toString()) * item.quantity;
          return true;
        }
      });
    });
    return subTotal;
  }

  useEffect(() => {
    setLocalState(state);
  }, [state, setLocalState]);

  return (
    <CartContext.Provider
      value={{ state, dispatch, getCartItemsQty, cartItemsSubtotal }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCartContext(): CartContextType {
  return useContext(CartContext);
}
