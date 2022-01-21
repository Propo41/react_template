import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import { NODE_ENV } from "config/env";

// disable console logs in production
if (NODE_ENV !== "development") {
  console.log = () => {};
}

ReactDOM.render(
  <HelmetProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </HelmetProvider>,
  document.getElementById("root")
);
