import React, { useState } from "react";
import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { deletePromo, listPromo, newPromo } from "../actions/promoActions";

const Promo = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const promoList = useSelector((state) => state.listPromo);
  let { promo } = { promo: {} };
  promo = promoList.promo;
  useEffect(() => {
    dispatch(listPromo({}));
  }, [dispatch]);

  const [name, setName] = useState("");
  const [conjuction, setConjuction] = useState("");
  const [formula, setFormula] = useState("");
  const [cartItems, setCartItems] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(newPromo(name, conjuction, formula));
    window.alert("You have added a new promo code called " + name);

    window.location.reload();
  };
  const clickHandler = (id, name) => {
    if (window.confirm("Are you sure you want to remove " + name)) {
      dispatch(deletePromo(id));
      window.alert("You have removed " + name);

      window.location.reload();
    }
  };

  return (
    <div>
      <header className="block row center color">
        <div>
          <a href="/kodius-assignment/">
            <h1>Kodius</h1>
          </a>
        </div>
      </header>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Add a Promo Code</h1>
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
          <label htmlFor="conjuction">Conjuction</label>
          <label htmlFor="conjuction" className="radio-inline">
            <input
              type="radio"
              id="conjuction"
              className="conjuction"
              name="conjuction"
              value="true"
              required
              onChange={(e) => setConjuction(e.target.value)}
            />
            True
          </label>

          <label htmlFor="conjuction" className="radio-inline">
            <input
              type="radio"
              className="conjuction"
              name="conjuction"
              value="false"
              onChange={(e) => setConjuction(e.target.value)}
            />
            False
          </label>
        </div>
        <div>
          <label htmlFor="formula">Formula</label>
          <input
            type="text"
            id="formula"
            placeholder="Enter the formula, 0-9, (), *, /, -, +, %, ^   allowed"
            required
            pattern="[-+%^*/\)\(\d]*"
            onChange={(e) =>
              setFormula("totalPrice-(totalPrice" + e.target.value + ")")
            }
          />
        </div>
        <button className="primary" type="submit">
          ADD
        </button>
        <div>
          <label htmlFor="formula">
            <h3>Formula Example:</h3>
          </label>
          <p>20%OFF</p>

          <p>Formula = /5</p>
          {/* <p>totalPrice = totalPrice - (totalPrice formula)</p> */}
        </div>
        <div>
          <h2>Remove Promo Codes</h2>
        </div>
        {promo !== undefined
          ? promo.map((promo) => (
              <div key={promo._id}>
                <button
                  type="button"
                  className="promo"
                  onClick={() => clickHandler(promo._id, promo.name)}
                >
                  {promo.name}
                </button>
              </div>
            ))
          : null}
      </form>
    </div>
  );
};

export default Promo;
