import React from "react";

export const ChooseUsSection = () => {
  return (
    <section className="feature-main">
      <h2>Why choose us</h2>
      <div className="feature-container">
        <div className="feature box-shadow">
          <i className="fal fa-shipping-fast"></i>
          <p>Fastest Delivery</p>
        </div>
        <div className="feature box-shadow">
          <i className="fal fa-badge-percent"></i>
          <p>Best prices and offers</p>
        </div>
        <div className="feature box-shadow">
          <i className="fal fa-handshake"></i>
          <p>Quality assurance</p>
        </div>
        <div className="feature box-shadow">
          <i className="fa fa-rupee"></i>
          <p>Free Shipping Above Rs. 349</p>
        </div>
      </div>
    </section>
  );
};
