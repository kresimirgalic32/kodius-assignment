import Header from "../components/Header";
import Main from "../components/Main";
import Basket from "../components/Basket";
import data from "../data";
import { useEffect, useState } from "react";
import { saveCartItems } from "../actions/cartActions";
import { useDispatch, useSelector } from "react-redux";
import Search from "../components/Search";
import { listProducts } from "../actions/productActions";
import Description from "../components/Description";

const Home = () => {
  const cartItemsLoad = JSON.parse(localStorage.getItem("cartItems" || "[]"));

  var [cartItems, setCartItems] = useState(cartItemsLoad);
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  if (!cartItems) {
    cartItems = [];
  }
  const promoLoad = JSON.parse(localStorage.getItem("promo" || "[]"));
  var [promo, setPromo] = useState(promoLoad);
  useEffect(() => {
    localStorage.setItem("promo", JSON.stringify(promo));
  }, [promo]);
  if (!promo) {
    promo = [];
  }

  const onAdd = (product) => {
    saveCartItems(product);
    const varijabla = JSON.parse(localStorage.getItem("cartItems"));

    const exist = cartItems.find((x) => x._id === product._id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x._id === product._id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x._id === product._id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x._id !== product._id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x._id === product._id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  let [search, setSearch] = useState("");

  return (
    <div className="App">
      <Header countCartItems={cartItems.length}></Header>
      <div className="box">
        <input
          className="search"
          type="text"
          id="search"
          placeholder=" Search"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="row">
        <Main searchName={search} onAdd={onAdd}></Main>
        <Basket
          promoItems={promo}
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
        ></Basket>
      </div>
      <Description></Description>
    </div>
  );
};

export default Home;
