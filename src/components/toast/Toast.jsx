import React from "react";
import "./toast.css";
import { useToast } from "context";

export const Toast = () => {
  const {
    toastState: { toastMsg, toastClass },
    showToast,
    setShowToast,
  } = useToast();

  return (
    <div
      id="toast"
      className={`${showToast ? "toast-show" : "toast-hide"} ${
        toastClass === "success"
          ? "success-toast"
          : toastClass === "error"
          ? "error-toast"
          : ""
      }`}
    >
      <p className="toast-msg">{toastMsg}</p>
      <span
        id="toastClose"
        className="close"
        onClick={() => setShowToast(false)}
      >
        &times;
      </span>
    </div>
  );
};
