import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { listProducts } from "../actions/productActions";

const Product = (props) => {
  const { searchName, onAdd } = props;
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);

  let { product } = { products: {} };
  product = productList.products;

  useEffect(() => {
    dispatch(listProducts({}));
  }, [dispatch]);

  return (
    <div>
      {product === undefined
        ? null
        : product.map((product) => (
            <div key={product._id} className="flex">
              {product.name.toLowerCase().includes(searchName.toLowerCase()) ? (
                <div className="product">
                  <Link to={`/product/${product._id}`}>
                    <img
                      className="small"
                      src={product.image}
                      alt={product.name}
                    />
                  </Link>

                  <Link to={`/product/${product._id}`}>
                    <h3>{product.name}</h3>
                  </Link>
                  <div>{product.price} €</div>
                  <div>
                    <button onClick={() => onAdd(product)}>Add To Cart</button>
                  </div>
                </div>
              ) : null}
            </div>
          ))}
    </div>
  );
};
export default Product;
