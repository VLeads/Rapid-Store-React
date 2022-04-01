import React from "react";
import { ProductCard } from "components/index";
import { useProducts } from "context";

const PopularPurchaseSection = () => {
  const { products } = useProducts();
  const { isLoading, data, error } = products;

  return (
    <section>
      <h2 className="justify-center mt-6 mb-4">Popular Purchases</h2>
      <div className="card-container">
        {isLoading && <div>Loading Popular Products...</div>}

        {!isLoading &&
          data.slice(0, 5).map((details) => (
            <div key={details._id}>
              <ProductCard details={details} />
            </div>
          ))}
      </div>
    </section>
  );
};

export { PopularPurchaseSection };
