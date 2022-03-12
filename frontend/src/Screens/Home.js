import Header from "../components/Header";
import Main from "../components/Main";
import Basket from "../components/Basket";
import data from "../data";
import { useState } from "react";

const Home = () => {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);
  const toNum = (qty) => Number(qty.toFixed(0));
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        ),
        localStorage.setItem("userInfo", JSON.stringify(data))
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
  const quantityDiscount = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty > 3) {
      if (exist.name === "Motion Sensor") {
        const a = toNum(exist.qty / 3);
        console.log(a);
      }
    }
  };

  return (
    <div className="App">
      <Header countCartItems={cartItems.length}></Header>
      <div className="row">
        <Main products={products} onAdd={onAdd}></Main>
        <Basket
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
        ></Basket>
      </div>

      <div className="block">
        <h1>DISCLAIMER: </h1>
        <h2>
          This is not a webpage for selling, it's only used as a test, do not
          enter your real credit card details.
        </h2>
      </div>
    </div>
  );
};

export default Home;
