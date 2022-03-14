import express from "express";
//import nodemailer from "nodemailer";
import mongoose from "mongoose";
import dotenv from "dotenv";
import productRouter from "./routers/productRouter.js";
import userRouter from "./routers/userRouter.js";
import orderRouter from "./routers/orderRouter.js";
import placeOrderRouter from "./routers/placeOrderRouter.js";
import path from "path";
//import PlaceOrder from "../frontend/src/Screens/PlaceOrder.js";
//import sendMail from "./models/nodemailerConfigModel.js";

// const nodemailer = import("nodemailer");
// let transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: "passdirect11@gmail.com",
//     pass: "passdirect123456789",
//   },
// });

// let mailOptions = {
//   from: "passdirect11@gmail.com",
//   to: "kresimir.galic32@gmail.com",
//   subject: "Test mail",
//   text: "Node.js testing mail for GeeksforGeeks",
// };

// transporter.sendMail(mailOptions, function (err, data) {
//   if (err) {
//     console.log("error occurs");
//   } else {
//     console.log("success");
//   }
// });

dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// eslint-disable-next-line no-undef
mongoose.connect(process.env.MONGODB_URI_LOCAL || "mongodb://localhost/kodius");

app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.get("/api/orders", orderRouter);
app.use("/api/pom", placeOrderRouter);

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "/frontend/build")));
app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "frontend/build/index.html"))
);

app.get("/", (req, res) => {
  res.send("Server is ready");
});
// eslint-disable-next-line no-undef
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server at http://localhost:${port}`);
});
