import React from "react";

function LoginTwig() {
  return (
    // <body>
    <div className="loginbody">
      <div className="logincontainer" id="container">
        <div className="loginform-container log-in-container">
          <form className="loginform" action="#">
            <h1>Login</h1>

            <input className="logininput" type="email" placeholder="User name/Email" />
            <input className="logininput" type="password" placeholder="Password" />
            <a href="#">If you are new Please signup?</a>
            <button>Log In</button>
          </form>
        </div>
        <div className="loginoverlay-container">
          <div className="loginoverlay">
            <div className="loginoverlay-panel loginoverlay-right">
              <h1>Farmer login from here</h1>
              <p>So we can put some instruction for the farmer bls bla bla . . .</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </body>
  );
}

export default LoginTwig;
