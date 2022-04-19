import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createOrder } from "../actions/orderActions";
import { ORDER_CREATE_RESET } from "../constants/orderConstants";
import { listProducts } from "../actions/productActions";

const BasketOrder = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const productList = useSelector((state) => state.productList);

  let { product } = { products: {} };
  product = productList.products;

  useEffect(() => {
    dispatch(listProducts({}));
  }, [dispatch]);
  const cart = useSelector((state) => state.cart);
  const orderCreate = useSelector((state) => state.orderCreate);

  const { success, order } = orderCreate;
  const { cartItems } = props;
  var totalPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);

  let discount = 0;
  let num = 0;
  if (product !== undefined) {
    for (let k = 0; k < product.length; k++) {
      for (let i = 0; i < cartItems.length; i++) {
        if (
          product[k].discount !== undefined &&
          product[k].quantity !== undefined &&
          product[k].name === cartItems[i].name &&
          cartItems[i].qty > product[k].quantity - 1
        ) {
          num = round(cartItems[i].qty / product[k].quantity);

          discount =
            discount +
            num *
              (product[k].quantity * product[k].price - product[k].discount);
        }
      }
    }
  }

  var promoLocal = JSON.parse(localStorage.getItem("promo"));
  for (var j = 0; j < promoLocal.length; j++) {
    totalPrice = eval(promoLocal[j].formula);
  }

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

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(
      createOrder({
        ...cart,
        orderItems: cartItems,
        totalPrice: totalPrice,
        userId: userId,
      })
    );

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
  var userId = JSON.parse(localStorage.getItem("userInfo"))._id;
  let promoDiscount =
    cartItems.reduce((a, c) => a + c.qty * c.price, 0) -
    (totalPrice + discount);
  return (
    <div>
      {" "}
      <div className="spacer">
        <form className="form" onSubmit={submitHandler}>
          <input type="text" hidden={true} name="_id" value={userId}></input>
          <h2>Cart Items</h2>
          <div>
            {cartItems.length === 0 && <div>Cart is empty</div>}
            {cartItems.map((item) => (
              <div key={item.id} className="row">
                <div className="col-2">{item.name}</div>
                <div className="col-2"></div>

                <div className="col-2 text-right">
                  {item.qty} x {Number(item.price).toFixed(2)}€
                </div>
              </div>
            ))}

            {cartItems.length !== 0 && (
              <>
                <div className="row">
                  <div className="col-2">Quantity Discount</div>

                  <div className="col-1 text-right">
                    {discount.toFixed(2)} €
                  </div>
                </div>
                <div className="row">
                  <div className="col-2">Promo Discount</div>
                  <div className="col-1 text-right">
                    {promoDiscount.toFixed(2)} €
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
