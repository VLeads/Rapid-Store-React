import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useUser } from "context";
import {
  ACTION_TYPE_ERROR,
  ACTION_TYPE_SUCCESS,
  postLoginDetailsApi,
  testAlphaNumericString,
} from "utils";
import "./auth.css";
import { Toast } from "components";
import { toast } from "react-toastify";

export const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { setIsLoggedin, getToken, setGetToken } = useUser();
  const [inputType, setInputType] = useState("password");
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });
  const testLogin = { email: "vishal@mail.com", password: "Rapidstore1" };

  const inputChange = (e) => {
    const value = e.target.value;
    setLoginFormData((loginFormData) => ({
      ...loginFormData,
      [e.target.name]: value,
    }));
  };

  const submitLoginHandler = (e) => {
    e.preventDefault();
    handleLogin(loginFormData.email, loginFormData.password);
  };

  const handleLogin = async (email, password) => {
    try {
      const response = await postLoginDetailsApi(
        JSON.stringify({
          email: email,
          password: password,
        })
      );
      if (response.status === 200) {
        setIsLoggedin(true);

        toast.success(
          `Welcome back ${response.data.foundUser.firstName}. Grab the best deals 🎉`
        );

        setTimeout(() => {
          navigate(-1 || "/", { replace: true });
        }, 1800);
        localStorage.setItem("token", response.data.encodedToken);
        localStorage.setItem(
          "currentUser",
          JSON.stringify(response.data.foundUser)
        );

        setGetToken(response.data.encodedToken);
      }
    } catch (error) {
      const { status, statusText } = error?.response;
      console.log("test", error);
      if (status === 401 && statusText === "Unauthorized") {
        toast.error("You have entered either incorrect Email or Password");
      } else if (status === 404 && statusText === "Not Found") {
        toast.error("Email is not registered");
      } else {
        toast.error("Something wrong happened!");
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
          onSubmit={(e) => submitLoginHandler(e)}
        >
          <h3>Login</h3>

          <div className="input-group-parent">
            <div className="input-group">
              <label>Email address</label>
              <input
                className="input-box"
                type="email"
                placeholder="vishal@mail.com"
                maxLength="42"
                name="email"
                onChange={inputChange}
                value={loginFormData.email}
                required
              />
            </div>

            <div className="input-group ">
              <label> Password </label>
              <div className="password-input">
                <input
                  className="input-box"
                  type={inputType}
                  placeholder="******"
                  name="password"
                  maxLength="28"
                  onChange={inputChange}
                  value={loginFormData.password}
                  required
                />
                <div
                  type=""
                  className="password-eye-btn"
                  onClick={() => {
                    togglePassword();
                  }}
                >
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
              <label style={{ cursor: "pointer" }}>
                <input type="checkbox" />
                Remember me
              </label>
              <a className="forgot-pass" href="">
                Forgot your Password?
              </a>
            </div>

            <button className="btn btn-primary" type="submit">
              Login
            </button>
            <button
              className="btn btn-secondary"
              onClick={(e) => {
                e.preventDefault();
                setLoginFormData(testLogin);
              }}
            >
              Use test Credentials
            </button>
            <Link to="/signup" className="auth-alternative">
              New on Rapid Store? Sign Up
            </Link>
          </div>
        </form>
      </main>
    </div>
  );
};
