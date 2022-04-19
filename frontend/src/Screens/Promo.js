import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { newPromo } from "../actions/promoActions";
import Header from "../components/Header";

const Promo = (props) => {
  const [name, setName] = useState("");
  const [conjuction, setConjuction] = useState("");
  const [formula, setFormula] = useState("");
  const [cartItems, setCartItems] = useState([]);

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(newPromo(name, conjuction, formula));
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
          <input
            type="radio"
            id="conjuction"
            name="conjuction"
            value="true"
            onChange={(e) => setConjuction(e.target.value)}
          />
          <input
            type="radio"
            id="name"
            name="conjuction"
            value="false"
            onChange={(e) => setConjuction(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="formula">Formula</label>
          <input
            type="text"
            id="formula"
            placeholder="Enter the formula"
            required
            onChange={(e) => setFormula(e.target.value)}
          />
        </div>
        <button className="primary" type="submit">
          ADD
        </button>
      </form>
    </div>
  );
};

export default Promo;
