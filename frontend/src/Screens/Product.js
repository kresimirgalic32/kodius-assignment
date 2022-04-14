import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Product from "../components/Product";

const ProductScreen = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const { products, onAdd } = props;
  const params = useParams();
  const { id: productId } = params;

  return (
    <div>
      <Header countCartItems={cartItems.length}></Header>
      {products.map((product) => (
        <div key={product.id}>
          {product.id === productId ? (
            <Product product={product} onAdd={onAdd}></Product>
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default ProductScreen;
