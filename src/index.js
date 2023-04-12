import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { CalculateContextProvider } from "./context/calculateContext";
import { LanguageContextProvider } from "./context/LanguageContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CalculateContextProvider>
      <LanguageContextProvider>
        <App />
      </LanguageContextProvider>
    </CalculateContextProvider>
  </React.StrictMode>
);
