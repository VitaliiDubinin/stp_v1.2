import React from "react";
import ReactDOM from "react-dom/client";

class LoginClass extends React.Component {
  render() {
    return (
      <body>
        <h1>from LoginClass</h1>
      </body>
    );
  }
}

ReactDOM.render(<LoginClass />, document.getElementById(`loginlogin`));

// const loginlogin = ReactDOM.createRoot(document.getElementById(`loginlogin`));
// loginlogin.render(<LoginClass />);
