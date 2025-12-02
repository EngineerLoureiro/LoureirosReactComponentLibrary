import { Cell, Pie, PieChart, PieLabelRenderProps } from "recharts";
import { categories } from "./data";
import "./ExpensesByCategory.css";

import { useState } from "react";

const RADIAN = Math.PI / 180;
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const pieData = [
  { name: "House", value: 750 },
  { name: "HouseA", value: 750 },
  { name: "HouseB", value: 750 },
  { name: "HouseC", value: 750 },
];

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
  );
}
