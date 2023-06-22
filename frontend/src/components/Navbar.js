import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container">
      <div>
        <ul>
          <li>
            <Link to="/kodius-assignment/" className="text">
              home
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <Link to="/kodius-assignment/cart" className="text">
              cart
            </Link>
          </li>
          <li>
            <Link to="/kodius-assignment/signin" className="text">
              Sign In
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
