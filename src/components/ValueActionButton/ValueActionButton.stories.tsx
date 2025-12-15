import type { Meta } from "@storybook/react-vite";
import { ValueActionButton, ValueActionButtonProps } from "./ValueActionButton";
import { TbCircleMinus, TbCirclePlus } from "react-icons/tb";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Loureiro'sComponentLibrary/LifePortfolio/ValueActionButton",
  component: ValueActionButton,
  parameters: {
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof ValueActionButton>;

export default meta;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const AddIncome = {
  render: (args: ValueActionButtonProps) => <ValueActionButton {...args} />,
  args: {
    buttonIcon: <TbCirclePlus color="#008000" />,
    title: "Add Income",
    description: "Create and Income manually",
    onClick: () => {
      alert("Clicked!");
    },
  },
};
export const AddExpense = {
  render: (args: ValueActionButtonProps) => <ValueActionButton {...args} />,
  args: {
    buttonIcon: <TbCircleMinus color="red" />,
    title: "Add Expense",
    description: "Create and Expense manually",
    onClick: () => {
      alert("Clicked!");
    },
  },
};
