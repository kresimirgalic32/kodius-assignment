import React, { useEffect } from "react";
import Product from "./Product";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";

const Main = (props) => {
  const dispatch = useDispatch();
  let productList = useSelector((state) => state.productList);

  console.log(productList);
  const { product } = productList;
  const { searchName, products, onAdd } = props;
  console.log(products);
  console.log(product);

  // products = productList;

  useEffect(() => {
    dispatch(listProducts({}));
  }, [dispatch]);
  // console.log(JSON.stringify("productList"));
  return (
    <main className="block col-2">
      <h2>Products</h2>
      <div className="row">
        {products.map((product) => (
          <Product
            key={product.id}
            searchName={searchName}
            product={product}
            onAdd={onAdd}
          ></Product>
        ))}
      </div>
    </main>
  );
};

export default Main;
