"use client";

import { Slider } from "@nextui-org/react";
import { SearchActionTypes } from "../../enums/search-action-types";
import { useSearchContext } from "../../contexts/search-context";
import { useCustomRouter } from "@/helpers/use-custom-router";

export function FilterByYearComponent() {
  const MIN_YEAR = 1990;
  const MAX_YEAR = new Date().getFullYear();
  const minYearSelected = useSearchContext().state.minyear ?? MIN_YEAR;
  const maxYearSelected = useSearchContext().state.maxyear ?? MAX_YEAR;
  const searchDispatch = useSearchContext().dispatch;
  const customRouter = useCustomRouter();

  function handleChangeYearRange(values: number[]) {
    searchDispatch({
      type: SearchActionTypes.UPDATED_YEAR,
      payload: { minyear: values[0], maxyear: values[1] },
    });
    customRouter.push(
      ["minyear", "maxyear"],
      values.map((value) => value.toString())
    );
  }

  return (
    <div className="flex flex-col gap-2 w-full h-full max-w-md items-start justify-center overflow-hidden">
      <Slider
        label=" "
        formatOptions={{ useGrouping: false }}
        step={1}
        minValue={MIN_YEAR}
        maxValue={MAX_YEAR}
        value={[minYearSelected, maxYearSelected]}
        onChange={(value) =>
          handleChangeYearRange(Array.isArray(value) ? value : [value])
        }
        className="max-w-md"
      />
    </div>
  );
}
