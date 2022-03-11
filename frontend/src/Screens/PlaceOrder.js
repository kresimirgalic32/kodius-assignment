import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CheckoutSteps from "../components/CheckoutSteps";

const PlaceOrder = () => {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  if (!cart.paymentMethod) {
    navigate("/payment");
  }
  const placeOrderHandler = () => {};

  return (
    <div>
      <CheckoutSteps step1 step2 step3 step4></CheckoutSteps>
      <div className="row top">
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
                  {cart.paymentMethod}{" "}
                </p>
              </div>
            </li>
            <li>
              <div className="card card-body">
                <h2>Ordered Items</h2>
                <div className="block col-1">
                  {/* <Header></Header> */}
                  <h2>Cart Items</h2>
                  <div>
                    {cart.cartItems.length === 0 && <div>Cart is empty</div>}
                    {cart.cartItems.map((item) => (
                      <div key={item.id} className="row">
                        <div className="col-1">{item.name}</div>
                        {/* <div className="col-2">
                          <button
                            onClick={() => onRemove(item)}
                            className="remove"
                          >
                            -
                          </button>{" "}
                          <button onClick={() => onAdd(item)} className="add">
                            +
                          </button>
                        </div> */}

                        <div className="col-1">
                          {item.qty} x €{item.price.toFixed(2)}
                        </div>
                      </div>
                    ))}

                    {cart.cartItems.length !== 0 && (
                      <>
                        {/* <hr></hr> */}
                        <div className="row">
                          <div className="col-1">discount</div>
                          {/* <div className="col-1 text-right">€{discount.toFixed(2)}</div> */}
                        </div>

                        <div className="row">
                          <div className="col-1">
                            <strong>Total Price</strong>
                          </div>
                          <div className="col-1 ">
                            <strong>€{cart.totalPrice.toFixed(2)}</strong>
                          </div>
                        </div>
                        {/* <hr /> */}
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
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
