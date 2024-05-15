import { SearchActionTypes } from "../enums/search-action-types";

type SearchActionTypeType =
  | SearchActionTypes.ADD_TO_SEARCH
  | SearchActionTypes.REMOVE_FROM_SEARCH
  | SearchActionTypes.INCREASE_SEARCH_ITEM_QUANTITY
  | SearchActionTypes.DECREASE_SEARCH_ITEM_QUANTITY;

export type SearchActionType = {
  type: SearchActionTypeType;
  payload?: any;
};
