import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import { LinkRoutes, ButtonRoutes } from "./routes";
import { NavBarRoutes } from "./routes/NavBarRoutes";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {ButtonRoutes()}
        {LinkRoutes()}
        {NavBarRoutes()}
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
