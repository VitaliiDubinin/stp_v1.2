import React from "react";
import ReactDOM from "react-dom/client";
// import "../bootstrap";
// import "../Main";
import LoginFirst from "./LoginFirst";
import LoginTwig from "./LoginTwig";

// function LoginFunct() {
//   return (
//     <body>
//       <div>
//         <h1>From LoginFunct</h1>
//       </div>
//     </body>
//   );
// }

// export default LoginFunct;

// const root = ReactDOM.createRoot(document.getElementById("logapp"));
const root = ReactDOM.createRoot(document.getElementById("logapp"));
root.render(
  //   <LoginFunct />
  <React.StrictMode>
    {/* <Main /> */}
    <LoginTwig />
    {/* <>TEST</> */}
  </React.StrictMode>
);

// const loginlogin = ReactDOM.createRoot(document.getElementById("loginlogin"));
// loginlogin.render(<LoginFunct />);
