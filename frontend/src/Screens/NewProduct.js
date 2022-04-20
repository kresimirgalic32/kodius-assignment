import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, newProduct } from "../actions/productActions";
import Header from "../components/Header";

const NewProduct = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  let { product } = { products: {} };
  product = productList.products;

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [discount, setDiscount] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(newProduct(name, price, image, description, quantity, discount));
    window.location.reload();
  };
  const clickHandler = (id) => {
    dispatch(deleteProduct(id));
    window.location.reload();
  };

  return (
    <div>
      <header className="block row center color">
        <div>
          <a href="/">
            <h1>Kodius</h1>
          </a>
        </div>
      </header>
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
        <div>
          <label htmlFor="name">Description</label>
          <input
            type="text"
            id="description"
            placeholder="Enter a description"
            required
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="name">Quantity</label>
          <input
            type="text"
            id="quantity"
            placeholder="Enter a quantity for discount"
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="name">Discount</label>
          <input
            type="text"
            id="discount"
            placeholder="Enter a discount"
            onChange={(e) => setDiscount(e.target.value)}
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
        <div>
          <label htmlFor="name">
            <h3>Discount Example:</h3>
          </label>
          <p>3 Items for 25 €</p>
          <p>Quantity = 3</p>
          <p>Discount = 25</p>
        </div>
        <div>
          <h2>Remove Products</h2>
        </div>
        {product !== undefined
          ? product.map((product) => (
              <div key={product._id}>
                <button
                  type="button"
                  className="promo"
                  onClick={() => clickHandler(product._id)}
                >
                  {product.name}
                </button>
              </div>
            ))
          : null}
      </form>
    </div>
  );
};

export default NewProduct;
