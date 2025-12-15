import { Route } from "react-router-dom";
import { ValueCard } from "../components/ValueCard";
import { FaArrowUp } from "react-icons/fa";

export function ValueCardRoutes() {
  return (
    <>
      <Route
        path="/components/value-card"
        element={
          <ValueCard
            label={"Balance"}
            value={"5,502.45"}
            fluctuation={"12,5"}
            fluctuationIcon={
              <FaArrowUp
                data-testid="value-card-icon"
                color="#008000"
                style={{ marginRight: "4px", lineHeight: "0" }}
              />
            }
          />
        }
      />
    </>
  );
}
