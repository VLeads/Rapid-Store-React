import React, { useState, useEffect } from "react";
import { ProductCard } from "components";
import { useProducts } from "context";
import { useFilter } from "context/filter-context";
import "./productpage.css";
import { Filters } from "./sub-components/Filters";
import notfound from "assets/img/notfound.png";

export const Productpage = () => {
  const { products } = useProducts();
  const { isLoading } = products;
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  const { filteredData } = useFilter();

  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="flex all-product-container">
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
            filteredData?.length !== 0 &&
            filteredData?.map((details) => (
              <ul className="product-list grid " key={details._id}>
                <li>
                  <ProductCard details={details} />
                </li>
              </ul>
            ))}
          {!isLoading && filteredData?.length === 0 && (
            <div className="flex flex-center flex-col no-search">
              <img src={notfound} alt="no product found" />

              <h3 style={{ marginTop: "2rem" }}>Sorry, no results found!</h3>
              <p className="txt-grey">
                Please check the spelling or try searching for something else
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};
