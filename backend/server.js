import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import productRouter from "./routers/productRouter.js";
import userRouter from "./routers/userRouter.js";
import orderRouter from "./routers/orderRouter.js";
import placeOrderRouter from "./routers/placeOrderRouter.js";
import path from "path";

dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// eslint-disable-next-line no-undef
mongoose.connect(process.env.MONGODB_URL || "mongodb://localhost/kodius");

app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.get("/api/orders", orderRouter);
app.get("/api/placeorder", placeOrderRouter);

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
