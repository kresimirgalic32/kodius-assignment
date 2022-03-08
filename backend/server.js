import express from "express";
import mongoose from "mongoose";
import productRouter from "./routers/productRouter.js";
import userRouter from "./routers/userRouter.js";

const app = express();

// eslint-disable-next-line no-undef
mongoose.connect(process.env.MONGODB_URL || "mongodb://localhost/kodius");

app.use("/api/users", userRouter);
app.use("/api/products", productRouter);

app.get("/", (req, res) => {
  res.send("Server is ready");
});
// eslint-disable-next-line no-undef
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server at http://localhost:${port}`);
});
