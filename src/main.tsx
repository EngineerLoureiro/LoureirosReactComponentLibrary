import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import {
  LinkRoutes,
  ButtonRoutes,
  ExpensesByCategoryRoutes,
  ValueCardRoutes,
} from "./routes";
import { NavBarRoutes } from "./routes/NavBarRoutes";
import { ValueActionButtonRoutes } from "./routes/ValueActionButtonRoutes";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {ButtonRoutes()}
        {LinkRoutes()}
        {NavBarRoutes()}
        {ExpensesByCategoryRoutes()}
        {ValueActionButtonRoutes()}
        {ValueCardRoutes()}
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
