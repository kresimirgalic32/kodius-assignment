import React, { useEffect } from "react";
import Product from "./Product";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";

const Main = (props) => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);

  let { product } = { products: {} };
  product = productList.products;

  useEffect(() => {
    dispatch(listProducts({}));
  }, [dispatch]);

  const { searchName, onAdd } = props;

  return (
    <main className="block col-2">
      <h2>Products</h2>
      <div className="row">
        <Product
          searchName={searchName}
          onAdd={onAdd}
          product={product}
        ></Product>
      </div>
    </main>
  );
};

export default Main;
