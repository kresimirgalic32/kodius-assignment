import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { detailsProduct } from "../actions/productActions";
import Header from "../components/Header";
// import Product from "../components/Product";

const ProductScreen = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState([]);
  const productDetails = useSelector((state) => state.productDetails);
  const { product } = productDetails;
  const params = useParams();
  const { id: productId } = params;
  useEffect(() => {
    dispatch(detailsProduct(productId));
  }, [dispatch, productId]);
  const back = () => {
    navigate("/");
  };
  return (
    <div>
      <Header countCartItems={cartItems.length}></Header>
      <div className="product ">
        <div className="row top">
          <div className="col-2">
            <img
              className="large"
              src={productDetails.image}
              alt={productDetails.name}
            ></img>
          </div>
          <div className="col-1">
            <ul>
              <li>
                <h1>{productDetails.name}</h1>
              </li>

              <li>Price : {productDetails.price} €</li>
              <li>
                Description:
                <p>{productDetails.description}</p>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <button onClick={() => back()}>Go Back</button>
        </div>
      </div>
    </div>
  );
};

export default ProductScreen;
