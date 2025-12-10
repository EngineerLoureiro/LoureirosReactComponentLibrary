import "./ExpensesByCategory.css";

import { useState } from "react";

export type CategoryDetail = {
  detailTitle: string;
  amount: number;
  symbol: React.ReactNode;
};

export type Category = {
  title: string;
  amount: number;
  symbol: React.ReactNode;
  details: CategoryDetail[];
};

export type ExpensesByCategoryProps = {
  title: string;
  description: string;
  dividerTitle: string;
  dividerDescription: string;
  categories: Category[];
};

export function ExpensesByCategory(props: ExpensesByCategoryProps) {
  const { title, description, dividerTitle, dividerDescription, categories } =
    props;
  const [activePanel, setActivePanel] = useState(-1);
  return (
    <div className="expenses-by-category">
      {/* Header */}
      <div className="expenses-by-category__header ">
        <h1 className="expenses-by-category__header-title">{title}</h1>
        <h4 className="expenses-by-category__header-subtitle">{description}</h4>
      </div>
      {/* Divider */}
      <div className="expenses-by-category__divider">
        <span>{dividerTitle}</span>
        <span>{dividerDescription}</span>
      </div>
      {/* Listed expenses with Accordion functionality to display details about each expense*/}

      {categories.map((category, index) => {
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
                <span>{category.symbol}</span>
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
                  return (
                    <div
                      key={index}
                      className="expenses-by-category__category-detail__body"
                    >
                      <span>{detail.symbol}</span>
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
