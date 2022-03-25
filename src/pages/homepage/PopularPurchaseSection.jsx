import React from "react";
import { homepageProduct } from "data/homepageProduct.data";
import { ProductCard } from "components/index";

const PopularPurchaseSection = () => {
  return (
    <section>
      <h2 className="justify-center mt-6 mb-4">Popular Purchases</h2>
      <div className="card-container">
        {homepageProduct.map((details) => (
          <div key={details._id}>
            <ProductCard details={details} />
          </div>
        ))}
      </div>
    </section>
  );
};

export { PopularPurchaseSection };
