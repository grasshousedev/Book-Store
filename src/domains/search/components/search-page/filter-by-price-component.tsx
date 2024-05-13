"use client";

import { useState } from "react";
import { Slider } from "@nextui-org/react";

export function FilterByPriceComponent() {
  const MIN_PRICE = 20;
  const MAX_PRICE = 1000;
  const [priceRangeSelected, setPriceRangeSelected] = useState([
    MIN_PRICE,
    MAX_PRICE,
  ]);

  return (
    <div className="flex flex-col gap-2 w-full h-full max-w-md items-start justify-center overflow-hidden">
      <Slider
        label=" "
        formatOptions={{ style: "currency", currency: "USD" }}
        step={10}
        minValue={MIN_PRICE}
        maxValue={MAX_PRICE}
        value={priceRangeSelected}
        onChange={(value) =>
          setPriceRangeSelected(Array.isArray(value) ? value : [value])
        }
        className="max-w-md"
      />
    </div>
  );
}
