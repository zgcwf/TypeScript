import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AppStateProvider } from "./AppState";

ReactDOM.render(
  <React.StrictMode>
    <AppStateProvider>
      <App username="阿莱克斯" />
    </AppStateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
