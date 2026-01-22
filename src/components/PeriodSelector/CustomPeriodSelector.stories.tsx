import type { Meta } from "@storybook/react-vite";

import { CustomPeriodSelector } from "./CustomPeriodSelector";
import { useState } from "react";
import { PeriodSelectorState } from "./types";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title:
    "Loureiro'sComponentLibrary/LifePortfolio/PeriodSelector/CustomPeriodSelector",
  component: CustomPeriodSelector,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof CustomPeriodSelector>;

export default meta;

export const CustomSelector = {
  render: () => {
    const [type, setType] = useState<PeriodSelectorState>({
      type: "preset",
      preset: "this_month",
    });
    const customSelectorValue = type.type === "custom" ? type.range : undefined;

    const customSelectorIsOpen = type.type === "custom" ? type.open : false;
    return (
      <CustomPeriodSelector
        date={customSelectorValue}
        isOpen={customSelectorIsOpen}
        toogleOpen={() =>
          setType((prev) => {
            if (prev.type === "custom") {
              return { ...prev, open: !prev.open };
            }
            return { type: "custom", range: undefined, open: true };
          })
        }
        onChange={(date) => {
          console.log(date);
          setType({ type: "custom", range: date, open: true });
        }}
      />
    );
  },
};
