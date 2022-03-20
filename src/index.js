import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import TopNavbar from "./components/TopNavbar";
import PageTemplate from "./components/PageTemplate";

ReactDOM.render(
  <React.StrictMode>
    {/* <TopNavbar /> */}
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
