import type { Meta, StoryObj } from "@storybook/react-vite";

import { ExpensesByCategory } from "./ExpensesByCategory";
import { PieChartExpensesByCategory } from "./PieChart";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Loureiro'sComponentLibrary/ExpensesByCategory",
  component: ExpensesByCategory,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof ExpensesByCategory>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {};
export const PieChart: Story = {
  render: () => (
    <div style={{ width: "500px", height: "500px" }}>
      <PieChartExpensesByCategory />
    </div>
  ),
};
