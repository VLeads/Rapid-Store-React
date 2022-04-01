import React from "react";
import { useFilter } from "context";

export const Filters = () => {
  const {
    state: { sortByPrice, sortByRating, sortByRange, showCategory },
    dispatch,
  } = useFilter();

  function categoryClickHandler(event) {
    const checked = event.target.checked;
    const categoryType = event.target.value;
    if (checked) {
      return { type: "SET_CATEGORY", payload: categoryType.toUpperCase() };
    } else {
      return { type: "UNSET_CATEGORY", payload: categoryType.toUpperCase() };
    }
  }

  return (
    <aside className="sidebar-container">
      <div className="sidebar">
        <div className="categories-container">
          <h4>Categories</h4>
          <ul className="category-list">
            <li className="category-list-item">
              <label>
                <input
                  type="checkbox"
                  value="laptops"
                  onChange={(e) => dispatch(categoryClickHandler(e))}
                  checked={showCategory.includes("LAPTOPS")}
                />
                Laptops/PCs
              </label>
            </li>
            <li className="category-list-item">
              <label>
                <input
                  type="checkbox"
                  value="mobiles"
                  onChange={(e) => dispatch(categoryClickHandler(e))}
                  checked={showCategory.includes("MOBILES")}
                />
                Mobiles
              </label>
            </li>
            <li className="category-list-item">
              <label>
                <input
                  type="checkbox"
                  value="earphones"
                  onChange={(e) => dispatch(categoryClickHandler(e))}
                  checked={showCategory.includes("EARPHONES")}
                />
                Earphone/Headphone
              </label>
            </li>
            <li className="category-list-item">
              <label>
                <input
                  type="checkbox"
                  value="cameras"
                  onChange={(e) => dispatch(categoryClickHandler(e))}
                  checked={showCategory.includes("CAMERAS")}
                />
                Cameras
              </label>
            </li>
            <li className="category-list-item">
              <label>
                <input
                  type="checkbox"
                  value="games"
                  onChange={(e) => dispatch(categoryClickHandler(e))}
                  checked={showCategory.includes("GAMES")}
                />
                Games
              </label>
            </li>
          </ul>
        </div>

        <div className="filter-container m-2">
          <div className="filter-heading mb-2">
            <h4>Filters</h4>
            <button
              className="btn btn-danger"
              onClick={() => dispatch({ type: "RESET_FILTER" })}
            >
              Clear filter
            </button>
          </div>

          <span className="sidebar-heading">Price Range</span>

          <ul className="category-list">
            <li className="category-list-item">
              <span>all</span>
              <span> {sortByRange > 0 && `< ${sortByRange}`}</span>
            </li>
            <li className="category-list-item">
              <input
                type="range"
                min={0}
                max={100000}
                step={5000}
                value={sortByRange}
                onChange={(e) =>
                  dispatch({ type: "RANGE", payload: e.target.value })
                }
              />
            </li>
          </ul>

          <span className="sidebar-heading">Sort By</span>
          <ul className="category-list">
            <li className="category-list-item">
              <label htmlFor="hp-option">
                {" "}
                <input
                  type="radio"
                  id="hp-option"
                  name="price-sort"
                  onChange={() =>
                    dispatch({ type: "PRICE_SORT", payload: "HIGH_TO_LOW" })
                  }
                  checked={sortByPrice && sortByPrice === "HIGH_TO_LOW"}
                />
                Price - High to low{" "}
              </label>
            </li>
            <li className="category-list-item">
              <label htmlFor="lp-option">
                <input
                  type="radio"
                  id="lp-option"
                  name="price-sort"
                  onChange={() =>
                    dispatch({ type: "PRICE_SORT", payload: "LOW_TO_HIGH" })
                  }
                  checked={sortByPrice && sortByPrice === "LOW_TO_HIGH"}
                />
                Price - Low to high{" "}
              </label>
            </li>
          </ul>
          <span className="sidebar-heading">Rating</span>
          <ul className="category-list">
            <li className="category-list-item">
              <label htmlFor="fo-option">
                {" "}
                <input
                  type="radio"
                  id="fo-option"
                  name="star-selector"
                  onChange={() => dispatch({ type: "RATING", payload: 4 })}
                  checked={sortByRating && sortByRating === 4}
                />
                4 Star & above{" "}
              </label>
            </li>
            <li className="category-list-item">
              <label htmlFor="th-option">
                <input
                  type="radio"
                  id="th-option"
                  name="star-selector"
                  onChange={() => dispatch({ type: "RATING", payload: 3 })}
                  checked={sortByRating && sortByRating === 3}
                />
                3 Star & above{" "}
              </label>
            </li>
            <li className="category-list-item">
              <label htmlFor="tw-option">
                <input
                  type="radio"
                  id="tw-option"
                  name="star-selector"
                  onChange={() => dispatch({ type: "RATING", payload: 2 })}
                  checked={sortByRating && sortByRating === 2}
                />
                2 Star & above{" "}
              </label>
            </li>
            <li className="category-list-item">
              <label htmlFor="on-option">
                <input
                  type="radio"
                  id="on-option"
                  name="star-selector"
                  onChange={() => dispatch({ type: "RATING", payload: 1 })}
                  checked={sortByRating && sortByRating === 1}
                />
                1 Star & above{" "}
              </label>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};
