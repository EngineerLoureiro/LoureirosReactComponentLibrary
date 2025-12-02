import { Route } from "react-router-dom";
import { ExpensesByCategory } from "../components/ExpensesByCategory";

export function ExpensesByCategoryRoutes() {
  return (
    <>
      <Route
        path="/components/expenses"
        element={
          <div style={{ padding: "2rem" }}>
            <ExpensesByCategory></ExpensesByCategory>
          </div>
        }
      />
    </>
  );
}
