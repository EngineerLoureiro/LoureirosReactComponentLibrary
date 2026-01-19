import type { Meta } from "@storybook/react-vite";

import { PeriodSelector } from "./PeriodSelector";
import { CustomPeriodSelector } from "./CustomPeriodSelector";
import { useState } from "react";
import { DateRange } from "react-day-picker";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Loureiro'sComponentLibrary/LifePortfolio/PeriodSelector",
  component: PeriodSelector,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof PeriodSelector>;

export default meta;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const PresetPeriodSelector = {
  render: () => {
    const [option, setOption] = useState<string>("No option");
    return (
      <PeriodSelector
        value={option}
        onChange={(value) => {
          setOption(value);
        }}
      />
    );
  },
};

export const DateRangePeriodSelector = {
  render: () => {
    const [date, setDate] = useState<DateRange | undefined>(undefined);
    return (
      <CustomPeriodSelector
        value={date}
        onChange={(date) => {
          console.log(date);
          setDate(date);
        }}
      />
    );
  },
};
