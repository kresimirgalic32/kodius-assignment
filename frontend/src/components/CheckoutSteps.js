import React from "react";
import Header from "./Header";

const CheckoutSteps = (props) => {
  return (
    <div>
      <Header></Header>
      <div className="row checkout-steps">
        <div className={props.step1 ? "active" : ""}>Sign In</div>
        <div className={props.step2 ? "active" : ""}>Shipping</div>
        <div className={props.step3 ? "active" : ""}>Payment</div>
        <div className={props.step4 ? "active" : ""}>Place Order</div>
      </div>
    </div>
  );
};

export default CheckoutSteps;
