import { Route } from "react-router-dom";
import { Button } from "../components/GreatFrontEndNavBar/Button";

export function ButtonRoutes() {
  return (
    <>
      <Route
        path="/components/button"
        element={
          <div style={{ padding: "2rem" }}>
            <Button
              label="Click me!"
              onClick={() => alert("Clicked")}
              variant="secondary"
            ></Button>
          </div>
        }
      />
      <Route
        path="/components/button-disabled"
        element={
          <div style={{ padding: "2rem" }}>
            <Button label="Click me!" disabled={true}></Button>
          </div>
        }
      />
    </>
  );
}
