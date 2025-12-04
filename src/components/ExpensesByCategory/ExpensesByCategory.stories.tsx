import type { Meta, StoryObj } from "@storybook/react-vite";

import { ExpensesByCategory } from "./ExpensesByCategory";
import { PieChartExpensesByCategory } from "./PieChart";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Loureiro'sComponentLibrary/ExpensesByCategory",
  component: ExpensesByCategory,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof ExpensesByCategory>;

export default meta;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  render: () => (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
      }}
    >
      <div style={{ marginRight: "20px" }}>
        <ExpensesByCategory />
      </div>{" "}
      <PieChartExpensesByCategory />
    </div>
  ),
};
export const PieChart = {
  render: () => (
    <div style={{ width: "500px", height: "500px" }}>
      <PieChartExpensesByCategory />
    </div>
  ),
};
