import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { saveCartItems } from "../actions/cartActions";

const BasketOrder = (props) => {
  //   const cart = useSelector((state) => state.cart);
  const { cartItems } = props;

  const totalPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  //   const navigate = useNavigate();

  //   const dispatch = useDispatch();
  // console.log("test");
  // dispatch(saveCartItems({ qty, name, id }));
  // navigate("/shipping");
  const [data, setData] = useState({
    email: localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo")).email
      : null,
    ids: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : null,
    // names: localStorage.getItem("cartItems")
    //   ? JSON.parse(localStorage.getItem("cartItems")).name
    //   : null,
    // prices: localStorage.getItem("cartItems")
    //   ? JSON.parse(localStorage.getItem("cartItems")).price
    //   : null,
  });
  const submitHandler = (e) => {
    e.preventDefault();
    // console.log("VALUES");
    // console.log(JSON.parse(localStorage.getItem("cartItems"))[0].id);
    // console.log(JSON.parse(localStorage.getItem("cartItems")));
    // console.log(JSON.parse(localStorage.getItem("userInfo")));
    // console.log(localStorage.getItem("email"));

    // console.log(data.email);
    // const handleFormSubmit = (e) => {
    // fetch("/api/placeorder", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   credentials: "same-origin",
    //   body: JSON.stringify(data),
    // }).then(function (response) {
    //   return response.json();
    // });
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

export default BasketOrder;
