import React from "react";
import "./homepage.css";
import heroPoster from "../../assets/img/Rapidstore-poster.png";
import { PopularPurchaseSection } from "./PopularPurchaseSection";
import { CategoriesSection } from "./CategoriesSection";
import { ChooseUsSection } from "./ChooseUsSection";

const Homepage = () => {
  return (
    <main className="homepage-main">
      <div className="hero">
        <img src={heroPoster} alt="poster" loading="lazy" />

        <a href="./components/productpage/productpage.html">
          <button className="btn btn-primary">Shop Now</button>
        </a>
      </div>

      <ChooseUsSection />

      <CategoriesSection />

      <PopularPurchaseSection />
    </main>
  );
};

export { Homepage };
