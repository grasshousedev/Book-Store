import { OrderByType } from "../enums/order-by-types";

export type SearchType = {
  keyword: string;
  categories: string[] | null;
  minprice: number | null;
  maxprice: number | null;
  minyear: number | null;
  maxyear: number | null;
  orderby: string | null;
};
