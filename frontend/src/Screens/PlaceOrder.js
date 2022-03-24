import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CheckoutSteps from "../components/CheckoutSteps";
import BasketOrder from "../components/BasketOrder";

const PlaceOrder = (props) => {
  const cartItemsLoad = JSON.parse(localStorage.getItem("cartItems" || "[]"));
  const [cartItems, setCartItems] = useState(cartItemsLoad);

  const promoItemsLoad = JSON.parse(localStorage.getItem("promo" || "[]"));
  const [promoItems, setPromoItems] = useState(promoItemsLoad);

  const cart = useSelector((state) => state.cart);

  return (
    <div>
      <CheckoutSteps step1 step2 step3 step4></CheckoutSteps>
      <div className="block row top">
        <div className=""></div>
        <div className="col-1">
          <ul>
            <li>
              <div className="card card-body">
                <h2>Shipping</h2>
                <p>
                  <strong>Name: </strong> {cart.shippingAddress.fullName} <br />
                  <strong>Address: </strong> {cart.shippingAddress.address},
                  {cart.shippingAddress.city},{cart.shippingAddress.postalCode},
                  {cart.shippingAddress.country}
                </p>
              </div>
            </li>
            <li>
              <div className="card card-body">
                <h2>Payment</h2>
                <p>
                  <strong>Method: </strong>
                  {"Credit Card"}{" "}
                </p>
              </div>
            </li>
            <li>
              <div className="card card-body">
                <BasketOrder
                  cartItems={cartItems}
                  promoItems={promoItems}
                ></BasketOrder>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
