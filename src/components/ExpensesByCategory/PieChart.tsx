import { Cell, Pie, PieChart, PieLabelRenderProps } from "recharts";
import { categories } from "./data";
import "./ExpensesByCategory.css";

const RADIAN = Math.PI / 180;
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

/* const pieData = [
  { name: "House", value: 750 },
  { name: "HouseA", value: 750 },
  { name: "HouseB", value: 750 },
  { name: "HouseC", value: 750 },
]; */

const pieData = categories.map((category) => ({
  name: category.title,
  value: category.amount,
}));

const total = pieData.reduce((acc, current) => acc + current.value, 0);

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}: PieLabelRenderProps) => {
  if (cx == null || cy == null || innerRadius == null || outerRadius == null) {
    return null;
  }
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const ncx = Number(cx);
  const x = ncx + radius * Math.cos(-(midAngle ?? 0) * RADIAN);
  const ncy = Number(cy);
  const y = ncy + radius * Math.sin(-(midAngle ?? 0) * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > ncx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${((percent ?? 1) * 100).toFixed(0)}%`}
    </text>
  );
};

export function PieChartExpensesByCategory() {
  return (
    <div className="expenses-by-category">
      <PieChart
        style={{
          width: "100%",
          maxWidth: "500px",
          maxHeight: "80vh",
          aspectRatio: 1,
        }}
        responsive
      >
        <Pie
          data={pieData}
          dataKey="value"
          fill="#8884d8"
          labelLine={false}
          label={renderCustomizedLabel}
          isAnimationActive={true}
        >
          {pieData.map((entry, index) => {
            console.log(entry);
            return (
              <Cell
                key={`cell-${entry.name}`}
                fill={COLORS[index % COLORS.length]}
              ></Cell>
            );
          })}
        </Pie>
      </PieChart>
      <div>
        {categories.map((item, index) => {
          const CategoryIcon = item.symbol;
          return (
            <div className="expenses-by-category__row">
              <div className="expenses-by-category__category">
                <span>{<CategoryIcon />}</span>
                <span className="expenses-by-category__category-title">
                  {item.title}
                </span>
              </div>
              <div>
                <span className="expenses-by-category__category-amount">{`${(
                  (item.amount / total) *
                  100
                ).toFixed(0)}%`}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
