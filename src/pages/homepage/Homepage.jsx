import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./homepage.css";
import "styles/styles.css";
import heroPoster from "../../assets/img/Rapidstore-poster.png";
import { PopularPurchaseSection } from "./PopularPurchaseSection";
import { CategoriesSection } from "./CategoriesSection";
import { ChooseUsSection } from "./ChooseUsSection";
import { useFilter } from "context";

const Homepage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <main className="homepage-main">
      <div className="hero">
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
