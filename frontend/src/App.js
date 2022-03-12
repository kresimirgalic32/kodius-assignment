// import { useEffect, useState } from "react";
import Index from "./components";

function App() {
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
