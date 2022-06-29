import React, { useState, useEffect } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import "./addressModal.css";
import { ACTION_TYPE_ERROR, deleteCartItemApi } from "utils";
import { useCart, useUser } from "context";

import brandLogo from "assets/img/store-logo1.png";
import { toast } from "react-toastify";

export const AddressFormModal = ({
  show,
  onHide,
  totalPrice,
  discountPrice,
  deliveryCharges,
  responseSummary,
  setResponseSummary,
}) => {
  const [address, setAddress] = useState("");
  const [finalPrice, setFinalPrice] = useState(0);
  // const [responseSummary, setResponseSummary] = useState({
  //   msg: false,
  //   id: null,
  // });
  const [currUser, setCurrUser] = useState();

  const { cart, deleteDataUsingApi: deleteCartItem } = useCart();
  console.log("cart", cart);

  useEffect(() => {
    setCurrUser(JSON.parse(localStorage.getItem("currentUser")));
  }, []);

  let grandTotal =
    Number(totalPrice - discountPrice) > 349
      ? totalPrice - discountPrice
      : totalPrice - discountPrice + deliveryCharges;
  console.log("price", grandTotal);
  const clearCart = () => {
    cart.data.forEach((el) => {
      deleteCartItem(deleteCartItemApi, el._id);
    });
  };

  const razorpayHandler = () => {
    setFinalPrice(grandTotal);
    address?.length ? displayRazorpay() : toast.error("select address first");
  };

  const loadScript = async (url) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = url;

      script.onload = () => {
        resolve(true);
      };

      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const displayRazorpay = async () => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      toast.error("Razorpay SDK failed to load, check you connection");

      return;
    }

    const options = {
      key: "rzp_test_zgihpQdmCc9n46",
      amount: finalPrice * 100,
      currency: "INR",
      name: "Rapid Store",
      description: "Thank you for shopping with us",
      image: brandLogo,
      handler: function (response) {
        setResponseSummary({
          msg: true,
          cart: cart?.data,
          id: response.razorpay_payment_id,
        });
        clearCart();
      },
      prefill: {
        name: currUser?.firstName + currUser?.lastName,
        email: currUser?.email,
        contact: "9876543210",
      },
      theme: {
        color: "#2e8be6",
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <Modal
      open={show}
      onClose={onHide}
      center
      classNames={{
        modal: "customModal",
      }}
    >
      <h3>Select Address</h3>
      <div>
        <div className="checkout-address-box">
          <input
            type="radio"
            id="address-1"
            name="user-address"
            value={address}
            onChange={() => setAddress("address-1")}
          />
          <label className="address-label" htmlFor="address-1">
            <h3>Vishal Kumar</h3>
            <p>Chandigarh, Punjab, 160064</p>
          </label>
        </div>
        <div className="checkout-address-box">
          <input
            type="radio"
            id="address-2"
            name="user-address"
            value={address}
            onChange={() => setAddress("address-2")}
          />
          <label className="address-label" htmlFor="address-2">
            <h3>Amarjit Singh</h3>
            <p>Mumbai, Maharashtra, 362067</p>
          </label>
        </div>
        <button
          className="btn btn-primary checkout-btn"
          onClick={razorpayHandler}
        >
          Place Order
        </button>
      </div>
    </Modal>
  );
};
