import React from "react";
import { Link } from "react-router-dom";

const Product = (props) => {
  const { searchName, product, onAdd } = props;
  console.log("searchName");

  console.log(searchName);

  return (
    <div>
      {product.name.toLowerCase().includes(searchName.toLowerCase()) ? (
        <div className="product">
          <Link to={`/product/${product._id}`}>
            <img className="small" src={product.image} alt={product.name} />
          </Link>

          <Link to={`/product/${product._id}`}>
            <h3>{product.name}</h3>
          </Link>
          <div>€{product.price}</div>
          <div>
            <button onClick={() => onAdd(product)}>Add To Cart</button>
          </div>
        </div>
      ) : null}
    </div>
  );
};
export default Product;
