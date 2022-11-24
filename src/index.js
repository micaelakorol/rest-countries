import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/global.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error from "./Pages/Error";
import InfoCard from "./Pages/InfoCard";
import Nav from "./Pages/Nav";
import './styles/global.css'
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Nav />} />
          <Route path="/countries/:id" element={<InfoCard />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
);
