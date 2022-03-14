import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { saveCartItems } from "../actions/cartActions";

const Basket = (props) => {
  const { cartItems, onAdd, onRemove } = props;

  var totalPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const navigate = useNavigate();
  const checkoutHandler = () => {
    navigate("/signin?redirect=/shipping");
  };

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();

    navigate("/shipping");
  };

  function round(num) {
    return Math.floor(num);
  }
  var first = 0;
  var second = 0;
  var third = 0;

  function promoCode(e) {
    if (e === "20%OFF") {
      if (!promo.includes("20%OFF")) {
        if (!promo.includes("5%OFF")) {
          setPromo([...promo, { e }]);

          console.log(totalPrice);

          console.log(first);
          first = totalPrice / 5;
          console.log(first);
          return first;
        }
      }
      console.log(promo);
    } else if (e === "5%OFF") {
      if (!promo.includes("5%OFF")) {
        if (!promo.includes("20%OFF")) {
          setPromo([...promo, { e }]);

          return (second = totalPrice / 20);
        }
      }
    } else if (e === "20EUROFF") {
      if (!promo.includes("20EUROFF")) {
        setPromo([...promo, { e }]);
        third = 20;

        console.log(totalPrice);

        console.log(promo);
      }
    } else {
      console.log(promo);
      return;
    }
  }

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

  var discount = motion + smoke + first;
  totalPrice = totalPrice - discount;

  // localStorage.setItem("promo", JSON.stringify(promo));
  // promo = localStorage.getItem("promo");
  // promo = JSON.parse(promo);
  const promoLoad = JSON.parse(localStorage.getItem("promo" || "[]"));

  var [promo, setPromo] = useState(promoLoad);

  useEffect(() => {
    localStorage.setItem("promo", JSON.stringify(promo));
  }, [promo]);

  if (!promo) {
    promo = [];
  }

  // function promoCode(e) {
  //   console.log(e);
  //   // promo.length = 0;

  //   if (e === "20%OFF") {
  //     if (!promo.includes("20%OFF")) {
  //       if (!promo.includes("5%OFF")) {
  //         promo.push("20%OFF");
  //         totalPrice = totalPrice - totalPrice / 5;
  //       }
  //     }
  //     console.log(promo);
  //   } else if (e === "5%OFF") {
  //     if (!promo.includes("5%OFF")) {
  //       if (!promo.includes("20%OFF")) {
  //         promo.push("5%OFF");
  //         totalPrice = totalPrice - totalPrice / 20;

  //         console.log(promo);
  //       }
  //     }
  //   } else if (e === "20EUROFF") {
  //     if (!promo.includes("20EUROFF")) {
  //       promo.push("20EUROFF");
  //       totalPrice = totalPrice - 20;

  //       console.log(promo);
  //     }
  //   } else {
  //     console.log(promo);

  //     return;
  //   }
  // }

  function clickHandler1(id) {
    // id = id + 1;
    console.log("prvi = " + id);
    // var array = [...this.state.promo];
    promo.splice(id, 1);
    localStorage.setItem("promo", JSON.stringify(promo));
    totalPrice = (totalPrice / 80) * 100;
  }
  function clickHandler2(id) {
    console.log("drugi = " + id);
    promo.splice(id, 1);
    localStorage.setItem("promo", JSON.stringify(promo));
    totalPrice = (totalPrice / 95) * 100;
    console.log(totalPrice);
  }
  function clickHandler3(id) {
    console.log("treci = " + id);
    promo.splice(id, 1);
    localStorage.setItem("promo", JSON.stringify(promo));
    totalPrice = totalPrice + 20;
  }
  return (
    <div className="block col-1">
      <form className="form">
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
                {item.qty} x {item.price.toFixed(2)} €
              </div>
            </div>
          ))}
          {/* {promo.map((item) => ( */}

          <div className="none"></div>
          {promo.map((item) => (
            <div key={item.e} className="flex">
              <button
                className={item.e.includes("20%OFF") ? "promo" : "none"}
                onClick={() =>
                  clickHandler1(promo.findIndex((item) => item.e === "20%OFF"))
                }
              >
                <p>20%OFF</p>
              </button>
              <button
                className={item.e.includes("5%OFF") ? "promo" : "none"}
                onClick={() =>
                  clickHandler2(promo.findIndex((item) => item.e === "5%OFF"))
                }
              >
                <p>5%OFF</p>
              </button>
              <button
                className={item.e.includes("20EUROFF") ? "promo" : "none"}
                onClick={() =>
                  clickHandler3(
                    promo.findIndex((item) => item.e === "20EUROFF")
                  )
                }
              >
                <p>20EUROFF</p>
              </button>
            </div>
          ))}

          <input
            type="text"
            placeholder="Promotion Code"
            id="promo-code"
            onChange={(e) => promoCode(e.target.value)}
          />

          {cartItems.length !== 0 && (
            <>
              <div className="row">
                <div className="col-2">discount</div>

                {/* <div className="col-1 text-right">€{discount.toFixed(2)}</div> */}

                <div className="col-1 text-right">{discount.toFixed(2)} €</div>
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
