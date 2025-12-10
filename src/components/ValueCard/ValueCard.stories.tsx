import type { Meta } from "@storybook/react-vite";
import { ValueCard, ValueCardProps } from "./ValueCard";
import { FaArrowUp } from "react-icons/fa";

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
  render: (args: ValueCardProps) => <ValueCard {...args} />,
  args: {
    description: "Balance",
    value: "5,502.45",
    fluctuation: "12,5",
    fluctuationIcon: (
      <FaArrowUp
        color="#008000"
        style={{ marginRight: "4px", lineHeight: "0" }}
      />
    ),
  },
};
