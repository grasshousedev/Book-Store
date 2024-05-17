import { SearchActionTypes } from "../enums/search-action-types";

type SearchActionTypeType =
  | SearchActionTypes.UPDATED_KEYWORD
  | SearchActionTypes.UPDATED_CATEGORIES
  | SearchActionTypes.UPDATED_PRICE
  | SearchActionTypes.UPDATED_YEAR
  | SearchActionTypes.UPDATED_ORDERBY;

export type SearchActionType = {
  type: SearchActionTypeType;
  payload?: any;
};
