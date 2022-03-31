import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./auth.css";

import {
  ACTION_TYPE_ERROR,
  ACTION_TYPE_SUCCESS,
  postSignUpDetailsApi,
  testAlphaNumericString,
} from "utils";
import { Toast } from "components";
import { useToast, useUser } from "context";

export const Signup = () => {
  const navigate = useNavigate();

  const { toastState, toastDispatch, showToast, setShowToast } = useToast();
  const { setIsLoggedin } = useUser();

  const [signupFormData, setSignupFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const inputChange = (e) => {
    const value = e.target.value;
    setSignupFormData((signupFormData) => ({
      ...signupFormData,
      [e.target.name]: value,
    }));
  };

  const submitSignupHandler = async (e) => {
    e.preventDefault();
    if (
      signupFormData.password.length < 6 ||
      !testAlphaNumericString(signupFormData.password)
    ) {
      toastDispatch({
        type: ACTION_TYPE_ERROR,
        payload:
          "Password length should be Alpha Numeric and have minimum 6 characters.",
      });
    } else {
      try {
        const response = await postSignUpDetailsApi(
          JSON.stringify({
            ...signupFormData,
          })
        );
        if (response.status === 201) {
          setIsLoggedin(true);
          toastDispatch({
            type: ACTION_TYPE_SUCCESS,
            payload: `✅ Now you're signed In ${response.data.createdUser.firstName}. Grab the best deals 🎉 `,
          });
          setShowToast(true);
          setTimeout(() => {
            navigate("/", { replace: true });
            setShowToast(false);
          }, 2500);
        }

        localStorage.setItem("token", response.data.encodedToken);
      } catch (error) {
        const { status, statusText } = error.response;
        if (status === 422 && statusText === "Unprocessable Entity") {
          toastDispatch({
            type: ACTION_TYPE_ERROR,
            payload: "⚠ Email Already Exists",
          });
          setShowToast(true);
          setTimeout(() => {
            setShowToast(false);
          }, 28000);
        } else {
          toastDispatch({
            type: ACTION_TYPE_ERROR,
            payload: "Something Wrong Happened",
          });
          setShowToast(true);
          setTimeout(() => {
            setShowToast(false);
          }, 2000);
        }
      }
    }
  };

  return (
    <main className="auth-container">
      <Toast />
      <form
        className="card-vertical signup-form"
        onSubmit={(e) => submitSignupHandler(e)}
      >
        <h3>Signup</h3>

        <div className="input-group-parent">
          <div className="input-group">
            <label>First Name</label>
            <input
              className="input-box"
              maxLength="32"
              type="text"
              name="firstName"
              placeholder="Vishal"
              onChange={inputChange}
              value={signupFormData.firstName}
              required
            />
          </div>
          <div className="input-group">
            <label>Last Name</label>
            <input
              className="input-box"
              maxLength="32"
              type="text"
              name="lastName"
              placeholder="Kumar"
              onChange={inputChange}
              value={signupFormData.lastName}
              required
            />
          </div>
          <div className="input-group">
            <label>Email address</label>
            <input
              className="input-box"
              maxLength="42"
              type="email"
              name="email"
              placeholder="vishal@mail.com"
              onChange={inputChange}
              value={signupFormData.email}
              required
            />
          </div>

          <div className="input-group">
            <label> Password </label>
            <input
              className="input-box"
              maxLength="28"
              type="password"
              name="password"
              placeholder="******"
              onChange={inputChange}
              value={signupFormData.password}
              required
            />
          </div>

          <div className="select-box">
            By continuing, you agree to Rapid Store's Terms of Use and Privacy
            Policy.
          </div>

          <button className="btn btn-primary" type="submit">
            Create New Account
          </button>
          <Link to="/login" className="auth-alternative">
            Already using Rapid Store? Log In
          </Link>
        </div>
      </form>
    </main>
  );
};
