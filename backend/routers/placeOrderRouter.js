import express from "express";
import expressAsyncHandler from "express-async-handler";
// import data from "../data.js";
// import nodemailerConfigModel from "../models/nodemailerConfigModel.js";

// const nodemailer = require("../models/nodemailerConfigModel.js");
// require(nodemailerConfigModel.js)();

const placeOrderRouter = express.Router();

var mail = import("../models/nodemailerConfigModel.js");
placeOrderRouter.post(
  "/placeorder",
  expressAsyncHandler(async () => {
    mail.send();
  })
);
export default placeOrderRouter;
