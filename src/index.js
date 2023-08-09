import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/global.css";
import './styles/global.css'
import { router } from "./pages/configRoutes/Routes";
import { RouterProvider } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RouterProvider router={router} />
);
