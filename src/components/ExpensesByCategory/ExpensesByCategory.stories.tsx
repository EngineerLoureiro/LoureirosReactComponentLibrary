import type { Meta } from "@storybook/react-vite";
import {
  ExpensesByCategory,
  ExpensesByCategoryProps,
} from "./ExpensesByCategory";
import {
  PieChartExpensesByCategory,
  PieChartExpensesByCategoryProps,
} from "./PieChart";
import { categories } from "./data";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Loureiro'sComponentLibrary/LifePortfolio/ExpensesByCategory",
  component: ExpensesByCategory,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof ExpensesByCategory>;

export default meta;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  render: (args: ExpensesByCategoryProps) => (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
      }}
    >
      <div style={{ marginRight: "20px" }}>
        <ExpensesByCategory {...args} />
      </div>
      <PieChartExpensesByCategory {...args} />
    </div>
  ),
  args: {
    title: "Expenses By Category",
    description: "Check your expenses detail",
    dividerTitle: "Category",
    dividerDescription: "Total amount",
    categories: categories,
  },
};
export const PieChart = {
  render: (args: PieChartExpensesByCategoryProps) => (
    <div style={{ width: "500px", height: "500px" }}>
      <PieChartExpensesByCategory {...args} />
    </div>
  ),
  args: {
    categories: categories,
  },
};
