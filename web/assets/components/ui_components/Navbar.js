import React from "react";
import { Link } from "react-router-dom";

// import css from './navbar.module.css';

function Navbar() {
  return (
    // <div className={css.navContainer}>
    <div className="navContainer">
      {/* <div className={css.logoContainer}></div> */}
      <div className="logoContainer"></div>
      {/* <nav className={css.navPanel}> */}
      <nav className="navPanel">
        <ul>
          <li>
            <Link to="/"> Home </Link>
          </li>
          <li>
            <Link to="/profile"> Profile </Link>
          </li>
          <li>
            <Link to="/cart"> Cart </Link>
          </li>
          {/* <a href="/"> Sign out </a> */}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
