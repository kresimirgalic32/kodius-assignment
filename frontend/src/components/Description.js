import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";
import { listPromo } from "../actions/promoActions";

const Description = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);

  let { product } = { products: {} };
  product = productList.products;

  useEffect(() => {
    dispatch(listProducts({}));
  }, [dispatch]);

  const promoList = useSelector((state) => state.listPromo);
  let { promo } = { promo: {} };
  promo = promoList.promo;
  useEffect(() => {
    dispatch(listPromo({}));
  }, [dispatch]);

  return (
    <div>
      <div className="block">
        <h1>DISCLAIMER: </h1>
        <h2>
          This is not a webpage for selling, it's only used as a test, do not
          enter your real credit card details.
        </h2>
      </div>
      <div className="block">
        <h1>Discounts:</h1>
        {product === undefined
          ? null
          : product.map((product) => (
              <div key={product._id}>
                {product.discount !== undefined &&
                product.quantity !== undefined ? (
                  <h3>
                    {product.quantity} x {product.name} for {product.discount} €
                  </h3>
                ) : null}
              </div>
            ))}
      </div>
      <div className="block">
        <h1>Promo Codes:</h1>
        {promo === undefined
          ? null
          : promo.map((promo) => (
              <div key={promo._id}>
                <h3>
                  {promo.name}{" "}
                  {promo.conjuction === true
                    ? "- Applicable in conjuction with other promo codes"
                    : null}
                </h3>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Description;
