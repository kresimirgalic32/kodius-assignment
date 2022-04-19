import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { signout, userGet } from "../actions/userActions";

const useAuth = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userGet({ userId: userId }));
  }, [dispatch]);
  if (JSON.parse(localStorage.getItem("userInfo"))) {
    var userId = JSON.parse(localStorage.getItem("userInfo"))._id;
  }
  const userGett = useSelector((state) => state.userGett);
  const user = userGett;
  return user && user.isAdmin;
};

const Header = (props) => {
  const isAuth = useAuth();

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };
  return (
    <header className="block row center color">
      <div>
        <a href="/">
          <h1>Kodius</h1>
        </a>
      </div>
      <div>
        <Link to="/cart">
          Cart{" "}
          {props.countCartItems ? (
            <button className="badge">{props.countCartItems}</button>
          ) : (
            " "
          )}
        </Link>{" "}
        {userInfo ? (
          <div className="dropdown space">
            <Link to="#">
              {userInfo.name} <i clasname="fa fa-caret-down"></i>{" "}
            </Link>
            <ul className="dropdown-content">
              <li>
                <Link to="/orderhistory" className="test">
                  Order History
                </Link>
              </li>
              {isAuth ? (
                <div>
                  <li>
                    <Link to="/newproduct" className="test">
                      New Product
                    </Link>
                  </li>
                  <li>
                    <Link to="/promo" className="test">
                      New Promo
                    </Link>
                  </li>
                </div>
              ) : null}
              <li>
                <Link to="#signout" onClick={signoutHandler} className="test">
                  Sign Out
                </Link>
              </li>
            </ul>
          </div>
        ) : (
          <Link to="/signin" className="space">
            Sign In
          </Link>
        )}
      </div>
    </header>
  );
};
export default Header;
