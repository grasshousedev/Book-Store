"use client";

import { Slider } from "@nextui-org/react";
import { SearchActionTypes } from "../../enums/search-action-types";
import { useSearchContext } from "../../contexts/search-context";
import { useCustomRouter } from "@/helpers/use-custom-router";
import { MAX_PRICE, MIN_PRICE } from "@/const/global";

export function FilterByPriceComponent() {
  const minPriceSelected = useSearchContext().state.minprice ?? MIN_PRICE;
  const maxPriceSelected = useSearchContext().state.maxprice ?? MAX_PRICE;
  const searchDispatch = useSearchContext().dispatch;
  const customRouter = useCustomRouter();

  function handleChangePriceRange(values: number[]) {
    searchDispatch({
      type: SearchActionTypes.UPDATED_PRICE,
      payload: { minprice: values[0], maxprice: values[1] },
    });
    customRouter.push(
      ["minprice", "maxprice"],
      values.map((value) => value.toString())
    );
  }

  return (
    <div className="flex flex-col gap-2 w-full h-full max-w-md items-start justify-center overflow-hidden">
      <Slider
        label=" "
        size="sm"
        formatOptions={{ style: "currency", currency: "USD" }}
        step={10}
        minValue={MIN_PRICE}
        maxValue={MAX_PRICE}
        value={[minPriceSelected, maxPriceSelected]}
        onChange={(value) =>
          handleChangePriceRange(Array.isArray(value) ? value : [value])
        }
        className="max-w-md"
      />
    </div>
  );
}
