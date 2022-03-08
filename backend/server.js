import express from "express";
import mongoose from "mongoose";
import data from "./data.js";
import userRouter from "./routers/userRouter.js";

const app = express();

mongoose.connect("mongodb://localhost/kodius");

app.get("/api/products", (req, res) => {
  res.send(data.products);
});
app.use("/api/users", userRouter);

app.get("/", (req, res) => {
  res.send("Server is ready");
});
// eslint-disable-next-line no-undef
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server at http://localhost:${port}`);
});
