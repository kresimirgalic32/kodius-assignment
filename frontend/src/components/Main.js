import React, { useEffect } from "react";
import Product from "./Product";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";

const Main = (props) => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { product } = productList;
  const { products, onAdd } = props;

  useEffect(() => {
    dispatch(listProducts({}));
  }, [dispatch]);
  return (
    <main className="block col-2">
      <h2>Products</h2>
      <div className="row">
        {products.map((product) => (
          <Product key={product.id} product={product} onAdd={onAdd}></Product>
        ))}
      </div>
    </main>
  );
};

export default Main;
