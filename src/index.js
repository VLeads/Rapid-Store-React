import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";

import {
  FilterProvider,
  ToastProvider,
  UserProvider,
  CategoryProvider,
  ProductsProvider,
  WishlistProvider,
  CartProvider,
} from "context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ToastProvider>
        <UserProvider>
          <CartProvider>
            <ProductsProvider>
              <FilterProvider>
                <WishlistProvider>
                  <App />
                </WishlistProvider>
              </FilterProvider>
            </ProductsProvider>
          </CartProvider>
        </UserProvider>
      </ToastProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
