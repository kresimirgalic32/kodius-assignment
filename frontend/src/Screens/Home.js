import Header from "../components/Header";
import Main from "../components/Main";
import Basket from "../components/Basket";
import data from "../data";
import { useEffect, useState } from "react";
import { saveCartItems } from "../actions/cartActions";
import { useSelector } from "react-redux";
import Search from "../components/Search";

const Home = () => {
  const productList = useSelector((state) => state.productList);
  const { products } = data;
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
    console.log(varijabla);

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
  // let searchName;
  let [search, setSearch] = useState("");
  // var [searchName, setSearchName] = useState("");
  // const searchHandler = (e) => {
  //   e.preventDefault();
  //   setSearchName = search;
  //   console.log("searchName");
  //   console.log(search);

  //   console.log(searchName);
  // };
  // console.log(searchName);
  console.log(search);

  return (
    <div className="App">
      <Header countCartItems={cartItems.length}></Header>
      <div>
        <input
          type="text"
          id="search"
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
        />
        {/* <button type="button" onClick={searchHandler} className="primary">
          Search
        </button> */}
      </div>
      <div className="row">
        <Main searchName={search} products={products} onAdd={onAdd}></Main>
        <Basket
          promoItems={promo}
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
      <div className="block">
        <h1>Discounts:</h1>
        <h2>3 Motion Sensors for 65 EUR</h2>
        <h2>2 Smoke Sensors for 35 EUR</h2>
        <h1>Promotion Codes:</h1>
        <h2>20%OFF</h2>
        <h2>5%OFF</h2>
        <h2>20EUROFF - Applicable in conjuction with other promotion codes</h2>
      </div>
    </div>
  );
};

export default Home;
