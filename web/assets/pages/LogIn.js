import React from "react";
// import css from "../styles/login.module.css";

function LogIn() {
  return (
    <div className="container" id="container">
      <div className="form-container log-in-container">
        <form action="#">
          <h1>Login</h1>

          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <a href="#">Forgot your password?</a>
          <button>Log In</button>
        </form>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-right">
            <h1>Seller or Farmer login/signup from here</h1>
            <p>So we can put some instruction for the sellers.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
