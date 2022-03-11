import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { signout } from "../actions/userActions";

const Header = (props) => {
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
          {/* <button onClick={signoutHandler}></button> */}
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
              {userInfo.name} <i clasname="fa fa-caret-down"></i>
            </Link>
            <ul className="dropdown-content">
              <Link to="#signout" onClick={signoutHandler} className="test">
                Sign Out
              </Link>
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
