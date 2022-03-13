import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CheckoutSteps from "../components/CheckoutSteps";
import BasketOrder from "../components/BasketOrder";
import Axios from "axios";
import {
  USER_SIGNIN_FAIL,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
} from "../constants/userConstants";

// export const signin = (email, password) => (dispatch) => {
//   try {
//     const { data } = await Axios.post("/api/users/signin", {
//       email,
//       password,
//     });
//   } catch (error) {
//     console.log(error);
//   }
//   // const placeOrderHandler = () => {};
// };
// export const signin = (email, password) => async (dispatch) => {
//   dispatch({ type: USER_SIGNIN_REQUEST, payload: { email, password } });
//   try {
//     const { data } = await Axios.post("/api/users/signin", { email, password });
//     dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
//     localStorage.setItem("userInfo", JSON.stringify(data));
//   } catch (error) {
//     dispatch({
//       type: USER_SIGNIN_FAIL,
//       payload:
//         error.response && error.response.data.message
//           ? error.response.data.message
//           : error.message,
//     });
//   }
// };
const PlaceOrder = (props) => {
  const cartItemsLoad = JSON.parse(localStorage.getItem("cartItems" || "[]"));
  const [cartItems, setCartItems] = useState(cartItemsLoad);

  const { totalPrice } = props;
  const cart = useSelector((state) => state.cart);
  // const toPrice = (num) => Number(num.toFixed(2)); // 5.123 => "5.12" => 5.12
  // cart.totalPrice = toPrice(cartItems.reduce((a, c) => a + c.qty * c.price, 0));
  const navigate = useNavigate();
  if (!cart.paymentMethod) {
    navigate("/payment");
  }

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
                {/* <h2>Ordered Items</h2> */}
                <BasketOrder cartItems={cartItems}></BasketOrder>
                {/* <div className="block col-1">
                  <h2>Cart Items</h2>
                  <div>
                    {cart.cartItems.length === 0 && <div>Cart is empty</div>}
                    {cart.cartItems.map((item) => (
                      <div key={item.id} className="row">
                        <div className="col-1">{item.name}</div>

                        <div className="col-1">
                          {item.qty} x €{item.price.toFixed(2)}
                        </div>
                        <div className="col-1 ">
                          <strong>€{totalPrice}</strong>
                          {console.log("total price" + totalPrice)}
                        </div>
                      </div>
                    ))}
                    {cart.cartItems.length !== 0 && (
                      <>
                        <div className="row">
                          <div className="col-1">discount</div>
                          <div className="col-1 text-right"></div>
                        </div>

                        <div className="row">
                          <div className="col-1">
                            <strong>Total Price</strong>
                          </div>
                          <div className="col-1 ">
                            <strong>
                              €
                              {cart.cartItems.reduce(
                                (a, c) => a + c.qty * c.price,
                                0
                              )}
                            </strong>
                            {console.log("total price " + totalPrice)}
                          </div>
                        </div>

                        <div className="row">
                          <button
                            type="button"
                            onClick={placeOrderHandler}
                            className="primary block"
                            disabled={cart.cartItems.length === 0}
                          >
                            Place Order
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                </div> */}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
