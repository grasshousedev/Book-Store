import { SearchActionEnum } from "../enums/search-action-enum";

type SearchActionTypeType =
  | SearchActionEnum.UPDATED_KEYWORD
  | SearchActionEnum.UPDATED_CATEGORIES
  | SearchActionEnum.UPDATED_PRICE
  | SearchActionEnum.UPDATED_YEAR
  | SearchActionEnum.UPDATED_ORDERBY;

export type SearchActionType = {
  type: SearchActionTypeType;
  payload?: any;
};
