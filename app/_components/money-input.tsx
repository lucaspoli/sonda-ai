import React, { forwardRef } from "react";
import { NumericFormat, NumericFormatProps } from "react-number-format";

import { Input } from "@/app/_components/ui/input";

export const MoneyInput = forwardRef(
  (
    props: NumericFormatProps<React.ComponentProps<typeof Input>>,
    ref: React.ForwardedRef<HTMLInputElement>,
  ) => {
    return (
      <NumericFormat
        {...props}
        thousandSeparator=","
        decimalSeparator="."
        prefix="$ "
        allowNegative={false}
        customInput={Input}
        getInputRef={ref}
      />
    );
  },
);

MoneyInput.displayName = "MoneyInput";
