import React, { useState } from "react";

import Basket from "../components/Basket";
import Header from "../components/Header";

const Cart = (props) => {
  const cartItemsLoad = JSON.parse(localStorage.getItem("cartItems" || "[]"));
  const [cartItems, setCartItems] = useState(cartItemsLoad);
  const promoItemsLoad = JSON.parse(localStorage.getItem("promo" || "[]"));
  const [promoItems, setPromoItems] = useState(promoItemsLoad);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  return (
    <div className="App">
      <Header countCartItems={cartItems.length}></Header>
      <Basket
        cartItems={cartItems}
        onAdd={onAdd}
        onRemove={onRemove}
        promoItems={promoItems}
      ></Basket>
    </div>
  );
};

export default Cart;
