"use client";

import { useState } from "react";
import { Divider, RadioGroup, Radio, cn } from "@nextui-org/react";

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
        value="title"
        classNames={{
          label: cn("py-4"),
        }}
      >
        Title
      </Radio>
      <Divider />
      <Radio
        value="price"
        classNames={{
          label: cn("py-4"),
        }}
      >
        Price
      </Radio>
    </RadioGroup>
  );
}
