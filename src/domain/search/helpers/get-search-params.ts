import { MAX_PRICE, MAX_YEAR, MIN_PRICE, MIN_YEAR } from "@/const/global";
import { getIntValue } from "@/helpers/get-int-value";
import { DEFAULT_ORDER_BY } from "../consts";
import { OrderByEnum } from "../enums/order-by-enum";

export function getSearchParams(searchParams: URLSearchParams): {
  keyword: string;
  categories: string[];
  minPrice: number;
  maxPrice: number;
  minYear: number;
  maxYear: number;
  orderBy: OrderByEnum;
} {
  const keyword = searchParams.get("keyword") ?? "";
  const categories = searchParams.getAll("categories");
  const minPrice = getIntValue(searchParams.get("minprice"), MIN_PRICE);
  const maxPrice = getIntValue(searchParams.get("maxprice"), MAX_PRICE);
  const minYear = getIntValue(searchParams.get("minyear"), MIN_YEAR);
  const maxYear = getIntValue(searchParams.get("maxyear"), MAX_YEAR);
  const orderByParam = searchParams.get("orderby");
  let orderBy: OrderByEnum = DEFAULT_ORDER_BY;
  if (
    orderByParam !== null &&
    // @ts-ignore
    Object.values(OrderByEnum).includes(orderByParam)
  ) {
    // @ts-ignore
    orderBy = orderByParam;
  }
  return {
    keyword: keyword,
    categories: categories,
    minPrice: minPrice,
    maxPrice: maxPrice,
    minYear: minYear,
    maxYear: maxYear,
    orderBy: orderBy,
  };
}
