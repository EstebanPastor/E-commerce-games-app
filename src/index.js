import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import ThemeContext from "./context/ThemeContext";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeContext.Provider value={"light"}>
    <App />
  </ThemeContext.Provider>
);
