// import { useEffect, useState } from "react";
// import { useEffect } from "react";
// import { useState } from "react";
import Index from "./components";
const cartItems = [];
const promo = [];
function App() {
  // const [cartItems, setCartItems] = useState([]);
  localStorage.setItem("cartItems", JSON.stringify(cartItems));

  localStorage.setItem("promo", JSON.stringify(promo));

  // useEffect(() => {
  //   window.process = {
  //     ...window.process,
  //   };
  // }, []);

  // const cartItemsLoad = JSON.parse(localStorage.getItem("cartItems" || "[]"));
  // const [cartItems, setCartItems] = useState(cartItemsLoad);
  // useEffect(() => {
  //   localStorage.setItem("cartItems", JSON.stringify(cartItems));
  // }, [cartItems]);
  return (
    <div>
      <Index></Index>
    </div>
  );
}

export default App;
