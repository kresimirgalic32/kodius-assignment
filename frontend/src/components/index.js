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
        <Route exacth path="/kodius-assignment/" element={<Home />} />
        <Route path="/kodius-assignment/cart" element={<Cart />} />
        <Route path="/kodius-assignment/signin" element={<Signin />} />
        <Route path="/kodius-assignment/register" element={<Register />} />
        <Route path="/kodius-assignment/shipping" element={<ShippingAddress />} />
        <Route path="/kodius-assignment/payment" element={<PaymentMethod />} />
        <Route path="/kodius-assignment/placeorder" element={<PlaceOrder />} />

        <Route path="/kodius-assignment/product/:id" element={<ProductScreen />} />
        <Route element={<ProtectedRouters />}>
          <Route path="/kodius-assignment/admin" element={<AdminPanel />} />
          <Route path="/kodius-assignment/promo" element={<Promo />} />
          <Route path="/kodius-assignment/newproduct" element={<NewProduct />} />
        </Route>

        <Route path="/kodius-assignment/orderhistory" element={<OrderHistory />} />
      </Routes>
    </Router>
  );
};

export default index;
