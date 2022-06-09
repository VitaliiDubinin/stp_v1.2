import React, { useState, useEffect } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "./firebaseCon";

function Login() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [currentForm, setCurrentForm] = useState("login");

  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      navigate("/profile");
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
    setUser({});
  };

  const toggleCurrentForm = () => {
    const nextForm = currentForm === "login" ? "signup" : "login";
    setCurrentForm(nextForm);
  };

  return (
    <div className="App">
      {currentForm === "signup" && (!user || !user.email) && (
        <div>
          <h3> Register User </h3>
          <input
            placeholder="Email..."
            onChange={(event) => {
              setRegisterEmail(event.target.value);
            }}
          />
          <input
            placeholder="Password..."
            onChange={(event) => {
              setRegisterPassword(event.target.value);
            }}
          />

          <button onClick={register}> Create User</button>
          <a href="#" onClick={toggleCurrentForm}>
            Have account?
          </a>
        </div>
      )}
      {currentForm === "login" && !user?.email && (
        <div>
          <h3> Login </h3>
          <input
            placeholder="Email..."
            onChange={(event) => {
              setLoginEmail(event.target.value);
            }}
          />
          <input
            placeholder="Password..."
            onChange={(event) => {
              setLoginPassword(event.target.value);
            }}
          />

          <button onClick={login}> Login</button>
          <a href="#" onClick={toggleCurrentForm}>
            Have no account?
          </a>
        </div>
      )}

      {user?.email && (
        // <div>
        //   <h4> User Logged In: </h4>
        //   <button onClick={logout}> Sign Out </button>
        // </div>

        <div>
          <h3> Login </h3>

          <input
            placeholder="Email..."
            onChange={(event) => {
              setLoginEmail(event.target.value);
            }}
          />
          <input
            placeholder="Password..."
            onChange={(event) => {
              setLoginPassword(event.target.value);
            }}
          />

          <button onClick={login}> Login</button>
        </div>
      )}
    </div>
  );
}

export default Login;
