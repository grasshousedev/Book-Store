"use client";

import { useState } from "react";
import { Divider, RadioGroup, Radio, cn } from "@nextui-org/react";
import { OrderByTypes } from "../../enums/order-by-types";

export function OrderByComponent() {
  const [orderBySelected, setOrderBySelected] = useState("title");

  return (
    <RadioGroup
      value={orderBySelected}
      onValueChange={setOrderBySelected}
      size="lg"
      classNames={{
        wrapper: cn("gap-0"),
      }}
    >
      <Radio
        value={OrderByTypes.TITLE}
        classNames={{
          label: cn("py-4"),
        }}
      >
        Title
      </Radio>
      <Divider />
      <Radio
        value={OrderByTypes.PRICE}
        classNames={{
          label: cn("py-4"),
        }}
      >
        Price
      </Radio>
    </RadioGroup>
  );
}
