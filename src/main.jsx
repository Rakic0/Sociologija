import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";

import App from "./App.jsx";
import "./index.css";

import { PrismicProvider } from "@prismicio/react";
import { client } from "./prismic.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <PrismicProvider client={client}>
        <App />
      </PrismicProvider>
    </BrowserRouter>
  </React.StrictMode>
);
