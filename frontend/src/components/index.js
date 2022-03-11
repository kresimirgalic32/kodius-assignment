import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Screens/Home";
import Register from "../Screens/Register";
import Signin from "../Screens/Signin";
// import Checkout from "../Screens/ShippingAddress";
import Cart from "./Basket";
import data from "../data";
import ShippingAddress from "../Screens/ShippingAddress";
import PaymentMethod from "../Screens/PaymentMethod";
import PlaceOrder from "../Screens/PlaceOrder";

const index = (props) => {
  const { product } = props;

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* <Route path="/cart" element={<Cart />} /> */}
        <Route path="/signin" element={<Signin />} />
        <Route path="/register" element={<Register />} />
        <Route path="/shipping" element={<ShippingAddress />} />
        <Route path="/payment" element={<PaymentMethod />} />
        <Route path="/placeorder" element={<PlaceOrder />} />
      </Routes>
    </Router>
  );
};

export default index;
