import React, { useEffect, useState } from "react";

import { CategoryCard } from "components";

import "styles/styles.css";
import { useCategory } from "context";
import { getAllCategories } from "utils";
import axios from "axios";

export const CategoriesSection = () => {
  const { categories } = useCategory();

  const { isLoading, data, error } = categories;

  return (
    <section className="category">
      <h2 className="justify-center m-2 mb-4">Featured categories</h2>
      <div className="card-container">
        {isLoading && <div>Loading All Categories...</div>}

        {isLoading === false &&
          data?.map((details) => (
            <div key={details._id}>
              <CategoryCard details={details} />
            </div>
          ))}
      </div>
    </section>
  );
};
