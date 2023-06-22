import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { promo, promoRemove } from "../actions/promoActions";
import { stringify } from "querystring";
import { listProducts } from "../actions/productActions";
import { useEffect } from "react";

const Basket = (props) => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);

  let { product } = { products: {} };
  product = productList.products;

  useEffect(() => {
    dispatch(listProducts({}));
  }, [dispatch]);

  const { promoItems, cartItems, onAdd, onRemove } = props;

  const { data } = props;
  const [name, setName] = useState("");

  var totalPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const navigate = useNavigate();

  const promoHandler = (f) => {
    f.preventDefault();

    let testing = [];
    testing = JSON.parse(localStorage.getItem("promo"));
    testing = JSON.stringify(testing);

    var substring = name;
    stringify(substring);

    if (!(testing.indexOf(substring) !== -1)) {
      dispatch(promo(name));
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();

    navigate("/kodius-assignment/shipping");
  };

  function round(num) {
    return Math.floor(num);
  }

  var motion = 0;
  var smoke = 0;

  // for (var i = 0; i < cartItems.length; i++) {
  //   if (cartItems[i].name === "Motion Sensor") {
  //     if (cartItems[i].qty > 2) {
  //       motion = round(cartItems[i].qty / 3);
  //       motion = motion * 9.97;
  //     } else {
  //       motion = null;
  //     }
  //   } else if (cartItems[i].name === "Smoke Sensor") {
  //     if (cartItems[i].qty > 1) {
  //       smoke = round(cartItems[i].qty / 2);
  //       smoke = smoke * 4.98;
  //     } else {
  //       smoke = null;
  //     }
  //   }
  // }
  let discount2 = 0;
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

          discount2 =
            discount2 +
            num *
              (product[k].quantity * product[k].price - product[k].discount);
        }
      }
    }
  }

  for (var j = 0; j < promoItems.length; j++) {
    totalPrice = eval(promoItems[j].formula);
  }
  let tp = cartItems.reduce((a, c) => a + c.qty * c.price, 0);

  totalPrice = totalPrice - discount2;
  let promoDiscount = tp - (totalPrice + discount2);
  function clickHandler(name) {
    dispatch(promoRemove(name));
  }

  return (
    <div className="block col-1">
      <form className="form" onSubmit={promoHandler}>
        <h2>Cart Items</h2>
        <div>
          {cartItems.length === 0 && <div>Cart is empty</div>}
          {cartItems.map((item) => (
            <div key={item.id} className="row">
              <div className="col-2">{item.name}</div>
              <div className="col-2">
                <button
                  type="button"
                  onClick={() => onRemove(item)}
                  className="remove"
                >
                  -
                </button>{" "}
                <button
                  type="button"
                  onClick={() => onAdd(item)}
                  className="add"
                >
                  +
                </button>
              </div>

              <div className="col-2 text-right">
                {item.qty} x {Number(item.price).toFixed(2)} €
              </div>
            </div>
          ))}

          <div className="flex">
            {promoItems.map((item) => (
              <div key={item.id}>
                <button
                  type="button"
                  className="promo"
                  onClick={() => clickHandler(item.name)}
                >
                  {item.name}
                </button>
              </div>
            ))}
          </div>

          <input
            type="text"
            placeholder="Promotion Code"
            id="promo-code"
            onChange={(f) => setName(f.target.value)}
          />
          <button type="submit" className="primary">
            Promo Code
          </button>

          {cartItems.length !== 0 && (
            <>
              <div className="row">
                <div className="col-2">Quantity Discount</div>

                <div className="col-1 text-right">{discount2.toFixed(2)} €</div>
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
                  type="button"
                  className="primary"
                  disabled={cartItems.length === 0}
                  onClick={submitHandler}
                >
                  Checkout
                </button>
              </div>
            </>
          )}
        </div>
      </form>
    </div>
  );
};

export default Basket;
