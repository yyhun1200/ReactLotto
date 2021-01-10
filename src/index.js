import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import Lotto from "./service/service";

const lotto = new Lotto();

ReactDOM.render(
  <React.StrictMode>
    <App Lotto={lotto} />
  </React.StrictMode>,
  document.getElementById("root")
);
