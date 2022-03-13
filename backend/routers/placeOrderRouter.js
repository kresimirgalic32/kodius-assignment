import express from "express";
// import expressAsyncHandler from "express-async-handler";
import sendMail from "../models/nodemailerConfigModel.js";
// import data from "../data.js";
// import nodemailerConfigModel from "../models/nodemailerConfigModel.js";

// const nodemailer = require("../models/nodemailerConfigModel.js");
// require(nodemailerConfigModel.js)();

const placeOrderRouter = express.Router();

// var mail = import("../models/nodemailerConfigModel.js");
placeOrderRouter.post("/placeorder", (req, res) => {
  // expressAsyncHandler(async (req, res) => {
  const { email, text } = req.body;
  sendMail(email, text, function (err, data) {
    if (err) {
      console.log(err);
    }
    console.log(email);
  });
});
export default placeOrderRouter;
