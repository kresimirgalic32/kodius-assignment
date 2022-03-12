import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { saveCartItems } from "../actions/cartActions";

const basketOrder = (props) => {
  //   const cart = useSelector((state) => state.cart);
  const { cartItems } = props;

  const totalPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  //   const navigate = useNavigate();

  //   const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    // dispatch(saveCartItems({ qty, name, id }));
    // navigate("/shipping");
  };
  return (
    <div>
      {" "}
      <div className="spacer">
        <form className="form" onSubmit={submitHandler}>
          <h2>Cart Items</h2>
          <div>
            {cartItems.length === 0 && <div>Cart is empty</div>}
            {cartItems.map((item) => (
              <div key={item.id} className="row">
                <div className="col-2">{item.name}</div>
                <div className="col-2"></div>

                <div className="col-2 text-right">
                  {item.qty} x €{item.price.toFixed(2)}
                </div>
              </div>
            ))}

            {cartItems.length !== 0 && (
              <>
                {/* <hr></hr> */}
                <div className="row">
                  <div className="col-2">discount</div>
                  {/* <div className="col-1 text-right">€{discount.toFixed(2)}</div> */}
                </div>

                <div className="row">
                  <div className="col-2">
                    <strong>Total Price</strong>
                    {console.log("total price " + totalPrice)}
                  </div>
                  <div className="col-1 text-right">
                    <strong>€{totalPrice.toFixed(2)}</strong>
                  </div>
                </div>
                {/* <hr /> */}
                <div className="row">
                  <button
                    type="submit"
                    // onClick={checkoutHandler}
                    className="primary"
                    disabled={cartItems.length === 0}
                  >
                    Place Order
                  </button>
                </div>
              </>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default basketOrder;
