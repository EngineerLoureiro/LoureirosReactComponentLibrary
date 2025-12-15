import { Route } from "react-router-dom";
import { Link } from "../components/GreatFrontEndNavBar";

export function LinkRoutes() {
  return (
    <>
      <Route
        path="/components/link"
        element={<Link label="Click me!" href="/components/button-disabled" />}
      />
      <Route
        path="/components/link-blank"
        element={
          <Link
            label="Click me!"
            href="/components/button-disabled"
            target="_blank"
          />
        }
      />
      <Route
        path="/components/link-disabled"
        element={
          <Link
            label="Click me!"
            href="/components/button-disabled"
            disabled={true}
          />
        }
      />
    </>
  );
}
