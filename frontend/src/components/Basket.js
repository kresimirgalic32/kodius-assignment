import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { saveCartItems } from "../actions/cartActions";
// import { quantityDiscount } from "../Screens/Home";

const Basket = (props) => {
  // const cartItemsLoad = JSON.parse(localStorage.getItem("cartItems" || "[]"));
  // const cart = useSelector((state) => state.cart);
  const { cartItems, onAdd, onRemove } = props;
  // const toNum = (qty) => Number(qty.toFixed(0));
  // const [cartItems, setCartItems] = useState([cartItemsLoad]);

  // useEffect(() => {
  //   localStorage.setItem("cartItems", JSON.stringify(cartItems));
  // }, [cartItems]);
  // const { cartItems } = cart;
  const totalPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const navigate = useNavigate();
  const checkoutHandler = () => {
    navigate("/signin?redirect=/shipping");
  };
  // const [qty, setQty] = useState(cartItems.qty || "");
  // const [name, setName] = useState(cartItems.name || "");
  // const [id, setId] = useState(cartItems.id || "");

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    // dispatch(saveCartItems({ qty, name, id }));
    navigate("/shipping");
  };

  // const quantityDiscount = (product) => {
  //   const exist = cartItems.find((x) => x.id === product.id);
  //   if (exist.qty > 3) {
  //     if (exist.name === "Motion Sensor") {
  //       const number = toNum(exist.qty / 3);
  //       return number;

  //     }
  //   }
  // };
  // const def = 20;
  // function quantityDiscount(qty, name) {
  //   if (qty.name === "Motion Sensor") {
  //     if (qty.qty > 2) {
  //       // console.log(cartItems);
  //       console.log(qty);
  //       const divide = (num) => Number(num.toFixed(0));
  //       const number = divide((qty.qty - 1) / 3);
  //       console.log("number " + number);
  //       return number;
  //     } else {
  //       const number = 0;
  //       console.log("number " + number);

  //       return number;
  //     }
  //   }
  // }
  // var discount = 0;
  // discount = cartItems.forEach(quantityDiscount);

  // for (var i in cartItems) {
  // function quantityDiscount(qty, name) {
  //   cartItems.map((item) => {
  //     console.log(name);
  //     console.log("test");

  //     if (name === "Motion Sensor") {
  //       if (qty.qty > 2) {
  //         console.log(qty);
  //         const divide = (num) => Number(num.toFixed(0));
  //         const number = divide((qty - 1) / 3);
  //         console.log("number " + number);
  //         return number;
  //       }
  //       const number = 0;
  //       console.log("number " + number);

  //       return number;
  //     }
  //   });
  // }
  // quantityDiscount(cartItems);
  // var discount = quantityDiscount(cartItems);
  // discount = quantityDiscount(cartItems);

  // const discount = quantityDiscount.reduce((a, c) => a + c.number * c.def);
  // const discount = quantityDiscount();

  // const varijabla = JSON.parse(localStorage.getItem("cartItems"));
  // console.log(varijabla);
  var discount = 0;
  return (
    <div className="block col-1">
      <form
        className="form"
        onSubmit={submitHandler}
        // onChange={(e) => {
        //   setQty(e.target.value);
        //   setName(e.target.value);
        //   setId(e.target.value);
        // }}
      >
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
                {item.qty} x {item.price.toFixed(2)}€
              </div>
            </div>
          ))}

          {cartItems.length !== 0 && (
            <>
              {/* <hr></hr> */}
              <div className="row">
                <div className="col-2">discount</div>
                {cartItems.map((item) => (
                  <div className="col-1 text-right">
                    {(discount =
                      item.name === "Motion Sensor"
                        ? item.qty > 2
                          ? item.qty / 3
                          : null
                        : null) * 10}
                    {console.log("discount = " + discount)}
                  </div>
                ))}
                <div className="col-1 text-right"></div>
              </div>

              <div className="row">
                <div className="col-2">
                  <strong>Total Price</strong>
                </div>
                <div className="col-1 text-right">
                  <strong>{totalPrice.toFixed(2)}€</strong>
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
