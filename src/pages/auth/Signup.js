import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./auth.css";

import {
  ACTION_TYPE_ERROR,
  ACTION_TYPE_SUCCESS,
  postSignUpDetailsApi,
  testAlphaNumericString,
} from "utils";
import { Toast } from "components";
import { useUser } from "context";
import { toast } from "react-toastify";

export const Signup = () => {
  const navigate = useNavigate();

  const { setIsLoggedin, getToken, setGetToken } = useUser();
  const [inputType, setInputType] = useState("password");
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
      toast.error(
        "Password should be Alpha Numeric and have min. 6 characters length."
      );
    } else {
      try {
        const response = await postSignUpDetailsApi(
          JSON.stringify({
            ...signupFormData,
          })
        );
        if (response.status === 201) {
          setIsLoggedin(true);
          toast.success(
            `Successfully signed In ${response.data?.createdUser.firstName}. Grab the best deals 🎉`
          );

          setTimeout(() => {
            navigate(-1 || "/", { replace: true });
          }, 2000);
        }

        localStorage.setItem("token", response.data.encodedToken);
        localStorage.setItem(
          "currentUser",
          JSON.stringify(response?.data?.createdUser)
        );

        setGetToken(response.data.encodedToken);
      } catch (error) {
        const { status, statusText } = error.response;
        if (status === 422 && statusText === "Unprocessable Entity") {
          toast.error("Email already exists!");
        } else {
          toast.error("Something wrong happened!");
        }
      }
    }
  };

  const togglePassword = () => {
    setInputType((inputType) =>
      inputType === "password" ? "text" : "password"
    );
  };

  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-height">
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
              <div className="password-input">
                <input
                  className="input-box"
                  maxLength="28"
                  type={inputType}
                  name="password"
                  placeholder="******"
                  onChange={inputChange}
                  value={signupFormData.password}
                  required
                />
                <div className="password-eye-btn" onClick={togglePassword}>
                  <i
                    className={`fa fa-eye${
                      inputType === "password" ? "-slash" : ""
                    }`}
                    aria-hidden="true"
                  ></i>
                </div>
              </div>
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
    </div>
  );
};
