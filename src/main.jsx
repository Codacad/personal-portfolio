import React from "react";
import ReactDOM from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import { HashRouter, BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import MoblieMenuContextProvider from "./context/MoblieMenuContextProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MoblieMenuContextProvider>
      <NextUIProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </NextUIProvider>
    </MoblieMenuContextProvider>
  </React.StrictMode>
);
