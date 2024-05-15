import { MenuActionTypes } from "../enums/menu-action-types";

type MenuActionTypeType = MenuActionTypes.CHANGED_IS_OPEN;

export type MenuActionType = {
  type: MenuActionTypeType;
  payload?: any;
}