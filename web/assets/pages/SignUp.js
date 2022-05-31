import React from "react";

function SignUp() {
  return (
    <div class="container" id="container">
      <div class="form-container log-in-container">
        <form action="#">
          <h2>Signup</h2>

          <input type="text" placeholder="Userame" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="repeatpassword" placeholder=" RepeatPassword" />

          <input type="text" placeholder="Real name" />
          <input type="text" placeholder="Company-company" />
          <input type="text" placeholder="Bank account" />
          <input type="text" placeholder="Visa" />
          <input type="text" placeholder="Delevery method" />
          <input type="text" placeholder="Address" />
          <input type="text" placeholder="Pay method" />

          <a href="#">Forgot your password?</a>
          <button>Cancle</button>
          <button>Signup</button>
        </form>
      </div>
      <div class="overlay-container">
        <div class="overlay">
          <div class="overlay-panel overlay-right">
            <h2>New Farmer signup from here</h2>
            <p>
              So we can put some instruction for the farmer something here
              somthing here.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
