"use client";

import { createContext, useContext, useReducer, ReactNode } from "react";
import { MenuType } from "../types/menu-type";
import { MenuActionType } from "../types/menu-action-type";
import { MenuActionTypes } from "../enums/menu-action-types";
import { MenuContextType } from "../types/menu-context-type";
import { Category } from "@prisma/client";

const initialState: MenuType = {
  isOpen: false,
  categories: [],
};

const MenuContext = createContext<MenuContextType>({
  state: initialState,
  dispatch: () => {},
});

function menuReducer(menu: MenuType, action: MenuActionType) {
  switch (action.type) {
    case MenuActionTypes.Changed_IsOpen:
      return { ...menu, isOpen: !menu.isOpen };
    default:
      throw Error("Unknown action: " + action.type);
  }
}

export function MenuProvider({
  children,
  categories,
}: {
  children: ReactNode;
  categories: Category[];
}) {
  const [state, dispatch] = useReducer(menuReducer, {
    ...initialState,
    categories: categories,
  });

  return (
    <MenuContext.Provider value={{ state, dispatch }}>
      {children}
    </MenuContext.Provider>
  );
}

export function useMenuContext(): MenuContextType {
  return useContext(MenuContext);
}
