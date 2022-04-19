import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Screens/Home";
import Register from "../Screens/Register";
import Signin from "../Screens/Signin";
import Cart from "../Screens/Cart";
import ShippingAddress from "../Screens/ShippingAddress";
import PaymentMethod from "../Screens/PaymentMethod";
import PlaceOrder from "../Screens/PlaceOrder";
import OrderHistory from "../Screens/OrderHistory";
import Order from "../Screens/Order";
import Promo from "../Screens/Promo";
import ProductScreen from "../Screens/Product";
import NewProduct from "../Screens/NewProduct";
import AdminPanel from "../Screens/AdminPanel";
import ProtectedRouters from "./ProtectedRouters";
const index = (props) => {
  return (
    <Router>
      <Routes>
        <Route exacth path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/register" element={<Register />} />
        <Route path="/shipping" element={<ShippingAddress />} />
        <Route path="/payment" element={<PaymentMethod />} />
        <Route path="/placeorder" element={<PlaceOrder />} />
        <Route path="/product/:id" element={<ProductScreen />} />
        <Route element={<ProtectedRouters />}>
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/promo" element={<Promo />} />
          <Route path="/newproduct" element={<NewProduct />} />
        </Route>

        <Route path="/orderhistory" element={<OrderHistory />} />
      </Routes>
    </Router>
  );
};

export default index;
