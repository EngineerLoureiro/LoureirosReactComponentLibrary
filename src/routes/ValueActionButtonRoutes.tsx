import { Route } from "react-router-dom";
import { ValueActionButton } from "../components/ValueActionButton";
import { TbCirclePlus } from "react-icons/tb";

export function ValueActionButtonRoutes() {
  return (
    <>
      <Route
        path="/components/value-action-button"
        element={
          <ValueActionButton
            buttonIcon={<TbCirclePlus color="#008000" />}
            title={"Add Income"}
            description={"Create an Income manually"}
            onClick={() => {
              alert("Clicked!");
            }}
          />
        }
      />
    </>
  );
}
