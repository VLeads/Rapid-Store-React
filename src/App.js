import { Routes, Route } from "react-router-dom";
import "./App.css";
import "./styles/styles.css";
import logo from "./logo.png";

// mockman-js
import Mockman from "mockman-js";

import { Header, Footer } from "./components";

import { Cart, Homepage, Login, Productpage, Signup, Wishlist } from "./pages";
import { CategoryProvider } from "context";

function App() {
  return (
    <div>
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
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mockman" element={<Mockman />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
