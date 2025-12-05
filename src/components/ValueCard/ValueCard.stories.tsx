import type { Meta } from "@storybook/react-vite";
import { ValueCard } from "./ValueCard";
import { lazy } from "react";
import { BiLayout } from "react-icons/bi";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Loureiro'sComponentLibrary/LifePortfolio/ValueCard",
  component: ValueCard,
  parameters: {
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof ValueCard>;

export default meta;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  render: () => <ValueCard />,
};
