import { ProductCard } from "components";
import { useProducts } from "context";
import { useFilter } from "context/filter-context";
import React from "react";
import "./productpage.css";
import { Filters } from "./sub-components/Filters";

export const Productpage = () => {
  const { products } = useProducts();
  const { isLoading } = products;

  const { filteredData } = useFilter();

  return (
    <div className="flex">
      <Filters />
      <main className="product-container">
        <h4 className="result-heading">
          <span className="txt-grey">
            Enjoy shopping experience like never before
          </span>{" "}
          😄🛒
        </h4>

        <div className="card-container">
          {isLoading && <div>Loading All Products</div>}
          {!isLoading &&
            filteredData.map((details) => (
              <ul className="product-list grid " key={details._id}>
                <li>
                  <ProductCard details={details} />
                </li>
              </ul>
            ))}
        </div>
      </main>
    </div>
  );
};
