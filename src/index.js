import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
import ComparisonProvider from "./context/comparisonContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ComparisonProvider>
      <App />
    </ComparisonProvider>
  </React.StrictMode>
);
