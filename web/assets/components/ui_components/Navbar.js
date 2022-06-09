import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";

function Navbar() {
  const { totalItems } = useCart();
  return (
    <div>
      <nav>
        <div className="nav-content">
          <div className="logo">
            <a href="#" className="nav-a">
              KernelTeam Summer Project
            </a>
          </div>
          <ul className="nav-links">
            <li>
              <Link to="/"> Home </Link>
            </li>
            {/* <li>
            <Link to="/profile"> Profile </Link>
          </li> */}
            <li>
              <Link to="/cart">Cart: {totalItems} </Link>
            </li>
            <li>
              {/* <Link to="/login"> Log in </Link> */}
              <Link to="/login"> Log in </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

/*
 */
