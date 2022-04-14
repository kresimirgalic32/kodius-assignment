import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { newProduct } from "../actions/productActions";
import Header from "../components/Header";

const NewProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const dispatch = useDispatch;

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(newProduct(name, price, image));
  };
  return (
    <div>
      <Header></Header>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Add a Product</h1>
        </div>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter a name"
            required
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="price">Price</label>
          <input
            type="number"
            id="price"
            placeholder="Enter a price"
            required
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="image">Image</label>
          <input
            type="text"
            id="image"
            placeholder="Enter image url"
            required
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        {/* <div>
          <label htmlFor="stock">Stock</label>
          <input
            type="number"
            id="stock"
            placeholder="Stock"
            required
            onChange={(e) => setImage(e.target.value)}
          />
        </div> */}
        <button className="primary" type="submit">
          ADD
        </button>
      </form>
    </div>
  );
};

export default NewProduct;
