import type { Meta } from "@storybook/react-vite";

import { useState } from "react";
import { PeriodSelectorState } from "./types";
import { PresetPeriodSelector } from "./PresetPeriodSelector";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title:
    "Loureiro'sComponentLibrary/LifePortfolio/PeriodSelector/PresetSelector",
  component: PresetPeriodSelector,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof PresetPeriodSelector>;

export default meta;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const PresetSelector = {
  render: () => {
    const [type, setType] = useState<PeriodSelectorState>({
      type: "preset",
      preset: "this_month",
    });
    const presetSelectorValue =
      type.type === "preset" ? type.preset : undefined;
    return (
      <PresetPeriodSelector
        value={presetSelectorValue}
        onChange={(value) => {
          setType({ type: "preset", preset: value });
        }}
      />
    );
  },
};
