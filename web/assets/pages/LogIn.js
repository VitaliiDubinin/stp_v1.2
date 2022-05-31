import React from "react";

function LogIn() {
  return (
    <body>
      <div class="container" id="container">
        <div class="form-container log-in-container">
          <form action="#">
            <h1>Login</h1>

            <input type="email" placeholder="User name/Email" />
            <input type="password" placeholder="Password" />
            <a href="#">If you are new Please signup?</a>
            <button>Log In</button>
          </form>
        </div>
        <div class="overlay-container">
          <div class="overlay">
            <div class="overlay-panel overlay-right">
              <h1>Farmer login from here</h1>
              <p>
                So we can put some instruction for the farmer bls bla bla . . .
              </p>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}

export default LogIn;
