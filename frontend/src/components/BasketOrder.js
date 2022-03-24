import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createOrder } from "../actions/orderActions";
import { ORDER_CREATE_RESET } from "../constants/orderConstants";

const BasketOrder = (props) => {
  const cart = useSelector((state) => state.cart);
  const orderCreate = useSelector((state) => state.orderCreate);
  console.log("cart");

  console.log(cart);
  const { success, order } = orderCreate;
  const { cartItems } = props;
  var totalPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);

  var motion = 0;
  var smoke = 0;

  for (var i = 0; i < cartItems.length; i++) {
    if (cartItems[i].name === "Motion Sensor") {
      if (cartItems[i].qty > 2) {
        motion = round(cartItems[i].qty / 3);
        motion = motion * 9.97;
      } else {
        motion = null;
      }
    } else if (cartItems[i].name === "Smoke Sensor") {
      if (cartItems[i].qty > 1) {
        smoke = round(cartItems[i].qty / 2);
        smoke = smoke * 4.98;
      } else {
        smoke = null;
      }
    }
  }

  var promoLocal = JSON.parse(localStorage.getItem("promo"));
  for (var j = 0; j < promoLocal.length; ) {
    totalPrice = eval(promoLocal[j].formula);
    j = j + 1;
  }
  var discount = motion + smoke;
  totalPrice = totalPrice - discount;

  const [data, setData] = useState({
    userData: localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null,
    cartItemsData: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : null,
    totalPriceData: totalPrice,
    discountData: discount,
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(cartItems);

    dispatch(createOrder({ ...cart, orderItems: cartItems }));

    fetch("/api/pom/placeorder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "same-origin",
      body: JSON.stringify(data),
    }).then(function (response) {
      return response.json();
    });
    alert("Your receit has been sent tou your Email");

    localStorage.removeItem("cartItems");
    localStorage.removeItem("promo");

    navigate("/signin?redirect=/");
  };

  useEffect(() => {
    if (success) {
      props.history.push(`/order.${order._id}`);
      dispatch({ type: ORDER_CREATE_RESET });
    }
  }, [dispatch, order, props.history, success]);

  function round(num) {
    return Math.floor(num);
  }
  let userId = JSON.parse(localStorage.getItem("userInfo")).id;
  console.log("userID");

  console.log(userId);

  return (
    <div>
      {" "}
      <div className="spacer">
        <form className="form" onSubmit={submitHandler}>
          <input type="text" hidden="true" name="_id" value={userId}></input>
          <h2>Cart Items</h2>
          <div>
            {cartItems.length === 0 && <div>Cart is empty</div>}
            {cartItems.map((item) => (
              <div key={item.id} className="row">
                <div className="col-2">{item.name}</div>
                <div className="col-2"></div>

                <div className="col-2 text-right">
                  {item.qty} x {item.price.toFixed(2)}€
                </div>
              </div>
            ))}

            {cartItems.length !== 0 && (
              <>
                <div className="row">
                  <div className="col-2">discount</div>

                  <div className="col-1 text-right">
                    {discount.toFixed(2)} €
                  </div>
                </div>

                <div className="row">
                  <div className="col-2">
                    <strong>Total Price</strong>
                  </div>
                  <div className="col-1 text-right">
                    <div className="none"></div>
                    <strong>{totalPrice.toFixed(2)} €</strong>
                  </div>
                </div>

                <div className="row">
                  <button
                    type="submit"
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
