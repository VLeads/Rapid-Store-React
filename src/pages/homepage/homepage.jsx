import React from "react";
import { Link } from "react-router-dom";
import "./homepage.css";
import "styles/styles.css";
import heroPoster from "../../assets/img/Rapidstore-poster.png";
import { PopularPurchaseSection } from "./PopularPurchaseSection";
import { CategoriesSection } from "./CategoriesSection";
import { ChooseUsSection } from "./ChooseUsSection";

const Homepage = () => {
  return (
    <main className="homepage-main">
      <div className="hero">
        <img src={heroPoster} alt="poster" loading="lazy" />

        <Link to="/store">
          <button className="btn btn-primary">Shop Now</button>
        </Link>
      </div>

      <ChooseUsSection />

      <CategoriesSection />

      <PopularPurchaseSection />
    </main>
  );
};

export { Homepage };
