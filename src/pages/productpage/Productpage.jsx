import React, { useState } from "react";
import { ProductCard } from "components";
import { useProducts } from "context";
import { useFilter } from "context/filter-context";
import "./productpage.css";
import { Filters } from "./sub-components/Filters";

export const Productpage = () => {
  const { products } = useProducts();
  const { isLoading } = products;
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  const { filteredData } = useFilter();

  return (
    <div className="flex">
      <Filters
        setIsFilterVisible={setIsFilterVisible}
        isFilterVisible={isFilterVisible}
      />
      <main className="product-container">
        <h4 className="result-heading">
          <span className="txt-grey">
            Enjoy shopping experience like never before
          </span>{" "}
          😄🛒
        </h4>
        <button
          className="btn btn-primary btn-primary-outline filter-btn"
          onClick={() => setIsFilterVisible((prev) => !prev)}
        >
          <i className="btn-icon fas fa-filter"></i>Sort | Filter
        </button>

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
