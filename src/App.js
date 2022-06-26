import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import "./styles/styles.css";
import logo from "./logo.png";

// mockman-js
import Mockman from "mockman-js";

import { Header, Footer, RequiresAuth, RestrictAuth } from "./components";

import {
  Cart,
  Error404,
  Homepage,
  Login,
  Productpage,
  Signup,
  Wishlist,
} from "./pages";
import { CategoryProvider } from "context";

function App() {
  return (
    <div className="parent-container">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <CategoryProvider>
              <Homepage />
            </CategoryProvider>
          }
        />
        <Route path="/store" element={<Productpage />} />
        <Route element={<RequiresAuth />}>
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
        <Route element={<RestrictAuth />}>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="/mockman" element={<Mockman />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
