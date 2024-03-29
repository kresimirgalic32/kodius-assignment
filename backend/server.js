import express from "express";

import mongoose from "mongoose";
import dotenv from "dotenv";
import productRouter from "./routers/productRouter.js";
import userRouter from "./routers/userRouter.js";
import orderRouter from "./routers/orderRouter.js";
import placeOrderRouter from "./routers/placeOrderRouter.js";
import path from "path";
import promoRouter from "./routers/promoRouter.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// eslint-disable-next-line no-undef
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/kodius");
app.use("/kodius-assignment/api/users", userRouter);
app.use("/kodius-assignment/api/promo", promoRouter);

app.use("/kodius-assignment/api/products", productRouter);
app.use("/kodius-assignment/api/orders", orderRouter);
app.use("/kodius-assignment/api/pom", placeOrderRouter);

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "/frontend/build")));
app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "frontend/build/index.html"))
);

app.get("/kodius-assignment/", (req, res) => {
  res.send("Server is ready");
});

// eslint-disable-next-line no-undef
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server at http://localhost:${port}`);
});
