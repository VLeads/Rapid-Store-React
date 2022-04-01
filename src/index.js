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
    <ToastProvider>
      <UserProvider>
        <ProductsProvider>
          <FilterProvider>
            <CartProvider>
              <WishlistProvider>
                <CategoryProvider>
                  <Router>
                    <App />
                  </Router>
                </CategoryProvider>
              </WishlistProvider>
            </CartProvider>
          </FilterProvider>
        </ProductsProvider>
      </UserProvider>
    </ToastProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
