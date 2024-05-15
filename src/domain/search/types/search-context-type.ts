import { Dispatch } from "react";
import { SearchType } from "./search-type";
import { SearchActionType } from "./search-action-type";

export type SearchContextType = {
  state: SearchType;
  dispatch: Dispatch<SearchActionType>;
  /*getSearchItemsQty: Function;
  searchItemsSubtotal: Function;*/
};
