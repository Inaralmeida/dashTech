import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import { APIProvider } from "./Context/ApiContext/ApiContext";

ReactDOM.render(
  <React.StrictMode>
    <APIProvider>
      <App />
    </APIProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
