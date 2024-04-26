import { MenuActionTypes } from "../enums/menu-action-types";

type MenuActionTypeType = MenuActionTypes.Changed_IsOpen;

export type MenuActionType = {
  type: MenuActionTypeType;
  payload?: any;
}