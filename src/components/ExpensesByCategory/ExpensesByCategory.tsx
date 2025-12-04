import { Cell, Pie, PieChart, PieLabelRenderProps } from "recharts";
import { categories } from "./data";
import "./ExpensesByCategory.css";

import { useState } from "react";
import { PieChartExpensesByCategory } from "./PieChart";

export function ExpensesByCategory() {
  const [activePanel, setActivePanel] = useState(-1);
  return (
    <div className="expenses-by-category">
      {/* Header */}
      <div className="expenses-by-category__header ">
        <h1 className="expenses-by-category__header-title">
          {"Expenses by category"}
        </h1>
        <h4 className="expenses-by-category__header-subtitle">
          {"Check your expenses details"}
        </h4>
      </div>
      {/* Divider */}
      <div className="expenses-by-category__divider">
        <span>{"Category"}</span>
        <span>{"Total Amount"}</span>
      </div>
      {/* Listed expenses with Accordion functionality to display details about each expense*/}

      {categories.map((category, index) => {
        const CategoryIcon = category.symbol;
        return (
          <>
            <button
              className="expenses-by-category__row"
              key={index}
              onClick={() => {
                setActivePanel(activePanel === index ? -1 : index);
              }}
            >
              <div className="expenses-by-category__category">
                <span>{<CategoryIcon />}</span>
                <p className="expenses-by-category__category-title">
                  {category.title}
                </p>
              </div>
              <span className="expenses-by-category__category-amount">
                {category.amount}
              </span>
            </button>
            {activePanel === index && (
              <div className="expenses-by-category__category-detail">
                {category.details?.map((detail, index) => {
                  const DetailIcon = detail.symbol;
                  return (
                    <div
                      key={index}
                      className="expenses-by-category__category-detail__body"
                    >
                      <span>{<DetailIcon />}</span>
                      <p className="expenses-by-category__category-title">
                        {detail.detailTitle}
                      </p>
                      <span className="expenses-by-category__category-amount">
                        {detail.amount}
                      </span>
                    </div>
                  );
                })}
              </div>
            )}
          </>
        );
      })}
    </div>
  );
}
