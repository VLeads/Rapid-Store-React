import { Routes, Route } from "react-router-dom";
import "./App.css";
import "./styles/styles.css";
import logo from "./logo.png";

import { Header, Footer } from "./components";

import { Homepage, Productpage, Wishlist } from "./pages";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/store" element={<Productpage />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
