import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";

import { FilterProvider, ToastProvider, UserProvider } from "context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <ToastProvider>
        <FilterProvider>
          <Router>
            <App />
          </Router>
        </FilterProvider>
      </ToastProvider>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
