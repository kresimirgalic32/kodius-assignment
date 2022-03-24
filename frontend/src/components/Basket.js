import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { promo, promoRemove } from "../actions/promoActions";
import { saveCartItems } from "../actions/cartActions";
import axios from "axios";
import { stringify } from "querystring";

const Basket = (props) => {
  const { promoItems, cartItems, onAdd, onRemove } = props;

  const { data } = props;
  const [name, setName] = useState("");

  var totalPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const navigate = useNavigate();
  const checkoutHandler = () => {
    navigate("/signin?redirect=/shipping");
  };

  const dispatch = useDispatch();

  const promoHandler = (f) => {
    f.preventDefault();

    let testing = [];
    testing = JSON.parse(localStorage.getItem("promo"));
    testing = JSON.stringify(testing);

    console.log("testing " + testing);
    var substring = name;
    stringify(substring);

    if (!(testing.indexOf(substring) !== -1)) {
      console.log(name);

      dispatch(promo(name));
      
    }
    
  };
  
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
  

  for (var j = 0; j < promoItems.length; j++) {
    totalPrice = eval(promoItems[j].formula);
   
  }

  var discount = motion + smoke + first;
  totalPrice = totalPrice - discount;

 

  function clickHandler(name) {
    dispatch(promoRemove(name));
    console.log("name " + name);
    
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
                {item.qty} x {item.price.toFixed(2)} €
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
          <button
            type="submit"
            className="primary"
       
          >
            Promo Code
          </button>

          {cartItems.length !== 0 && (
            <>
              <div className="row">
                <div className="col-2">discount</div>

              

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
