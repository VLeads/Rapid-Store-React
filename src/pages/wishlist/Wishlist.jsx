import React from "react";
import "./wishlist.css";

export const Wishlist = () => {
  return (
    <main class="wishlist-main">
      <h2 class="justify-center mb-3">Wishlist</h2>
      <div class="wishlist-card-container">

          {
              
          }
        <div class="card-vertical wishlist-card hover-box-shadow">
          <div class="card-badge badge green">Trending</div>
          <img src="../../assets/img/headphone.jpeg" alt="card" />
          <div class="card-body">
            <h4 class="card-header">
              ASUS ROG Strix G15 Ryzen 9 Octa Core 5900H...
            </h4>
            <p class="card-price">
              <span class="price">₹96,990 </span>
              <strike>₹1,36,990</strike>
            </p>
          </div>
          <div class="card-footer">
            <button class="btn btn-primary">Add to Cart</button>
            <button class="btn-card heart-select">
              <i class="fa fa-heart"></i>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};
