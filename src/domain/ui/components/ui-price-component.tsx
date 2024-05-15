import { Prisma } from "@prisma/client";
import { NumberFormatBase, NumberFormatBaseProps } from "react-number-format";

export interface UiButtonComponentInterface extends NumberFormatBaseProps {}

export function UiPriceComponent({ ...props }: UiButtonComponentInterface) {
  const value = new Prisma.Decimal(props.value ?? 0);
  props.value = value.toFixed(2);

  const format = (value: string) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 2,
    }).format(parseFloat(value));
  };

  return (
    <NumberFormatBase
      {...props}
      format={format}
      displayType="text"
      valueIsNumericString={true}
      renderText={(value) => (
        <>
          {value}
        </>
      )}
    />
  );
}
