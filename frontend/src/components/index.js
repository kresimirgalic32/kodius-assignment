import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Screens/Home";
import Signin from "../Screens/Signin";

const index = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* <Route exact path="/cart" element={<Home />} /> */}
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </Router>
  );
};

export default index;
