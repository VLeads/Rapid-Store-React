import React from "react";
import { category } from "data/category.data";
import { CategoryCard } from "components";

import "styles/styles.css"

export const CategoriesSection = () => {
  return (
    <section className="category">
      <h2 className="justify-center m-2 mb-4">Featured categories</h2>
      <div className="card-container">
        {category.map((details) => (
          <div key={details._id}>
            <CategoryCard details={details} />
          </div>
        ))}
      </div>
    </section>
  );
};
