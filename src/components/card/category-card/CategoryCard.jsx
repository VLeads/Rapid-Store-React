import React from "react";
import { useFilter } from "context";
import { Link } from "react-router-dom";
import "styles/styles.css";

export const CategoryCard = ({ details }) => {
  const {
    _id,
    img: { url, altText },
    name,
  } = details;

  const { dispatch } = useFilter();

  function categoryClickHandler() {
    console.log("test", name, dispatch);
    return;
  }

  return (
    <div className="card-vertical category-card">
      <img src={url} alt={altText} loading="lazy" />
      <div className="card-body">
        <h4 className="justify-center m-2">{name}</h4>
      </div>
      <div className="card-footer justify-center">
        <Link
          to="/store"
          className="btn btn-primary"
          onClick={() =>
            dispatch({
              type: "SET_CATEGORY",
              payload:
                name === "Laptops/PCs"
                  ? "LAPTOPS"
                  : name === "Earphone/Headphone"
                  ? "EARPHONES"
                  : name === "Gaming"
                  ? "GAMES"
                  : name.toUpperCase(),
            })
          }
        >
          View Deals
        </Link>
      </div>
    </div>
  );
};
