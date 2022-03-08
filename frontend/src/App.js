import React from "react";
import Product from "./components/Product";
import data from "./data";

function App() {
  const { products } = data;
  const onAdd = (product) => {};
  return (
    <div>
      {products.map((product) => (
        <Product key={product.id} product={product} onAdd={onAdd}></Product>
      ))}
    </div>
  );
}

export default App;
