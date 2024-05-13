"use client";

import { useState } from "react";
import { Slider } from "@nextui-org/react";

export function FilterByYearComponent() {
  const MIN_YEAR = 1990;
  const MAX_YEAR = new Date().getFullYear();
  const [yearRangeSelected, setYearRangeSelected] = useState([
    MIN_YEAR,
    MAX_YEAR,
  ]);

  return (
    <div className="flex flex-col gap-2 w-full h-full max-w-md items-start justify-center overflow-hidden">
      <Slider
        label=" "
        formatOptions={{ useGrouping: false }}
        step={1}
        minValue={MIN_YEAR}
        maxValue={MAX_YEAR}
        value={yearRangeSelected}
        onChange={(value) =>
          setYearRangeSelected(Array.isArray(value) ? value : [value])
        }
        className="max-w-md"
      />
      {yearRangeSelected}
    </div>
  );
}
