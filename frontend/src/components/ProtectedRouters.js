import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { userGet } from "../actions/userActions";
import Home from "../Screens/Home";

const useAuth = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userGet({ userId: userId }));
  }, [dispatch]);
  var userId = JSON.parse(localStorage.getItem("userInfo"))._id;

  const userGett = useSelector((state) => state.userGett);
  const user = userGett;

  return user && user.isAdmin;
};

const ProtectedRouters = () => {
  const isAuth = useAuth();
  console.log("isAuth");
  console.log(isAuth);

  return isAuth ? <Outlet /> : <Home />;
};

export default ProtectedRouters;
