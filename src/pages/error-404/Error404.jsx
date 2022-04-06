import React from "react";
import { Link } from "react-router-dom";

export function Error404() {
  return (
    <div style={{ textAlign: "center", fontSize: "2rem", padding: "2rem" }}>
      <img
        style={{ width: "450px", maxWidth: "100%" }}
        src="https://img1a.flixcart.com/www/linchpin/fk-cp-zion/img/error-500_f9bbb4.png"
      />
      <div>Unfortunately the page you are looking for does not exist</div>
      <Link to="/">
        <button
          className="btn btn-primary"
          style={{ marginTop: "2rem", marginBottom: "3rem" }}
        >
          GO TO HOMEPAGE
        </button>
      </Link>
    </div>
  );
}
