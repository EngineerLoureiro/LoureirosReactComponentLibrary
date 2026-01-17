import type { Meta } from "@storybook/react-vite";

import { PeriodSelector } from "./PeriodSelector";
import { useState } from "react";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Loureiro'sComponentLibrary/LifePortfolio/PeriodSelector",
  component: PeriodSelector,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof PeriodSelector>;

export default meta;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  render: () => {
    const [option, setOption] = useState<string>("This month");
    alert(`Selected ${option}`);
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
