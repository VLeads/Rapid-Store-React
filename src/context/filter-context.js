import { createContext, useContext, useReducer } from "react";

import { getNumberFromFormattedPrice } from "utils";
import { useProducts } from "./products-context";

const FilterContext = createContext(null);

const FilterProvider = ({ children }) => {
  const { products } = useProducts();
  const { data } = products;

  const [state, dispatch] = useReducer(
    function filterReducer(state, action) {
      switch (action.type) {
        case "RANGE":
          return { ...state, sortByRange: action.payload };
        case "PRICE_SORT":
          return { ...state, sortByPrice: action.payload };
        case "RATING":
          return { ...state, sortByRating: action.payload };
        case "SET_CATEGORY":
          return {
            ...state,
            showCategory: [...state.showCategory, action.payload],
          };
        case "UNSET_CATEGORY":
          return {
            ...state,
            showCategory: state.showCategory.filter(
              (category) => category !== action.payload
            ),
          };
        case "RESET_FILTER":
          return {
            sortByRating: 0,
            sortByPrice: null,
            sortByRange: 0,
            showCategory: [],
          };
        default:
          return state;
      }
    },
    {
      sortByPrice: null,
      sortByRange: 0,
      showCategory: [],
      sortByRating: 0,
    }
  );

  // replace method added
  function getPriceSortedData(productList, sortByPrice) {
    if (sortByPrice && sortByPrice === "HIGH_TO_LOW") {
      return productList.sort(
        (a, b) =>
          getNumberFromFormattedPrice(b.price["ourPrice"]) -
          getNumberFromFormattedPrice(a.price["ourPrice"])
      );
    }
    if (sortByPrice && sortByPrice === "LOW_TO_HIGH") {
      return productList.sort(
        (a, b) =>
          getNumberFromFormattedPrice(a.price["ourPrice"]) -
          getNumberFromFormattedPrice(b.price["ourPrice"])
      );
    }
    return productList;
  }

  function getCategoryIncludedData(productList, category) {
    const filteredCategoryList = state.showCategory;
    return filteredCategoryList.length === 0
      ? productList
      : [...productList].filter((category) =>
          filteredCategoryList.some(
            (selectedCategory) =>
              selectedCategory === category.categoryName.toUpperCase()
          )
        );
  }

  function getFilteredData(productList, state) {
    return productList
      .filter(({ ratings }) =>
        state.sortByRating
          ? parseInt(ratings, 10) >= parseInt(state.sortByRating, 10)
          : productList
      )
      .filter(({ price }) =>
        state.sortByRange > 0
          ? getNumberFromFormattedPrice(price.ourPrice) <= state.sortByRange
          : productList
      );
  }

  const priceSortedData = getPriceSortedData(data, state.sortByPrice);

  const categoryIncludedData = getCategoryIncludedData(
    priceSortedData,
    state.showCategory
  );

  const filteredData = getFilteredData(categoryIncludedData, state);

  return (
    <FilterContext.Provider value={{ state, dispatch, filteredData }}>
      {children}
    </FilterContext.Provider>
  );
};

const useFilter = () => useContext(FilterContext);

export { FilterProvider, useFilter };
