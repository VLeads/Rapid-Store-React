import { ProductCard } from "components";
import { useFilter } from "context/filterContext";
import { storeProducts } from "data/storeProducts.data";
import React from "react";
import "./productpage.css";
import { Filters } from "./sub-components/Filters";

export const Productpage = () => {
  const { filteredData, priceSortedData } = useFilter();

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
          {/* {priceSortedData.map((details) => ( */}
          {filteredData.map((details) => (
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
