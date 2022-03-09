import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container">
      <div>
        <ul>
          <li>
            <Link to="/" className="text">
              home
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <Link to="/cart" className="text">
              cart
            </Link>
          </li>
          <li>
            <Link to="/signin" className="text">
              Sign In
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
