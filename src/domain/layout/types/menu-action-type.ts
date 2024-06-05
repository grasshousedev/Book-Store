import { MenuActionEnum } from "../enums/menu-action-enum";

type MenuActionTypeType = MenuActionEnum.CHANGED_IS_OPEN;

export type MenuActionType = {
  type: MenuActionTypeType;
  payload?: any;
}