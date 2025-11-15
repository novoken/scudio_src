import React from "react";
import ReactDOM from "react-dom/client";
import LandingPage from "../app/LandingPage";
import "../app/landing.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <LandingPage />
  </React.StrictMode>
);
