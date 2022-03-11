import React from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

const Basket = (props) => {
  const { cartItems, onAdd, onRemove } = props;

  const totalPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const navigate = useNavigate();
  const checkoutHandler = () => {
    navigate("/signin?redirect=/shipping");
  };
  return (
    <div className="block col-1">
      {/* <Header></Header> */}
      <h2>Cart Items</h2>
      <div>
        {cartItems.length === 0 && <div>Cart is empty</div>}
        {cartItems.map((item) => (
          <div key={item.id} className="row">
            <div className="col-2">{item.name}</div>
            <div className="col-2">
              <button onClick={() => onRemove(item)} className="remove">
                -
              </button>{" "}
              <button onClick={() => onAdd(item)} className="add">
                +
              </button>
            </div>

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
              </div>
              <div className="col-1 text-right">
                <strong>€{totalPrice.toFixed(2)}</strong>
              </div>
            </div>
            {/* <hr /> */}
            <div className="row">
              <button
                type="button"
                onClick={checkoutHandler}
                className="primary block"
                disabled={cartItems.length === 0}
              >
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Basket;
