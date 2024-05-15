import { Dispatch } from "react";
import { MenuType } from "./menu-type";
import { MenuActionType } from "./menu-action-type";

export type MenuContextType = {
  state: MenuType;
  dispatch: Dispatch<MenuActionType>;
};
