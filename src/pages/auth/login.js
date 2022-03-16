import React from "react";

const login = () => {
  return (
    <div>
      <main className="auth-container">
        <form className="card-vertical signup-form">
          <h3>Login</h3>

          <div className="input-group-parent">
            <div className="input-group">
              <label>Email address</label>
              <input
                className="input-box"
                type="email"
                placeholder="vishal@mail.com"
              />
            </div>

            <div className="input-group">
              <label> Password </label>
              <input
                className="input-box"
                type="password"
                placeholder="******"
              />
            </div>

            <div className="select-box">
              <label for="accept">
                <input type="checkbox" name="accept" />
                Remember me
              </label>
              <a className="forgot-pass" href="">
                Forgot your Password?
              </a>
            </div>

            <button className="btn btn-primary">Login</button>
            <a href="./signup.html" className="auth-alternative">
              Create New Account &nbsp >
            </a>
          </div>
        </form>
      </main>
    </div>
  );
};

export default login;
