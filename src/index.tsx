import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { startMirage } from "./service/mirage";


if (process.env.NODE_ENV === "development") {
  startMirage({ environment: "development" })
}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
