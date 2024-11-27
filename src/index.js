import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createRoot } from 'react-dom/client';

import Header from "./components/Header";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
