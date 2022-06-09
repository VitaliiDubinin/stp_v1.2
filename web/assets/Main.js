import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import css from "./styles/main.module.css";
import Navbar from "../assets/components/ui_components/Navbar";

import SingleProduct from "../assets/pages/SingleProduct";
import Profile from "../assets/pages/Profile";
import Cart from "../assets/pages/Cart";
import CheckOut from "../assets/pages/CheckOut";
//import Footer from "../assets/components/ui_components/Footer";
import Login from "./pages/Login";
import SignUp from "./pages/SignUpFirst";
import { CartProvider } from "react-use-cart";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function Main() {
  return (
    <>
      {/* <Navbar /> */}
      <CartProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            {/* <Route path="/api/product/find/:id" element={<SingleProduct />} /> */}
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="products/:id" element={<SingleProduct />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/cart/checkout" element={<CheckOut />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/loginN/signup" element={<SignUp />}></Route>
          </Routes>
        </Router>
      </CartProvider>
    </>
  );
}

export default Main;

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
