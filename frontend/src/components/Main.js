import React, { useEffect } from "react";
import Product from "./Product";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";

const Main = (props) => {
  const { searchName, onAdd } = props;

  return (
    <main className="block col-2">
      <h2>Products</h2>
      <div className="row">
        <Product searchName={searchName} onAdd={onAdd}></Product>
      </div>
    </main>
  );
};

export default Main;
