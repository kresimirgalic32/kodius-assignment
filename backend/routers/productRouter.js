import express from "express";
import expressAsyncHandler from "express-async-handler";
import data from "../data.js";
import Product from "../models/productModel.js";

const productRouter = express.Router();

productRouter.get(
  "/mine",
  expressAsyncHandler(async (req, res) => {
    const products = await Product.find();
    res.send(products);
  })
);

productRouter.get(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    await Product.remove({});
    const createdProducts = await Product.insertMany(data.products);
    res.send({ createdProducts });
  })
);
productRouter.get(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.send(product);
    } else {
      res.status(404).send({ message: "Product Not Found" });
    }
  })
);
productRouter.post(
  "/new",
  expressAsyncHandler(async (req, res) => {
    const product = new Product({
      name: req.body.name,
      price: req.body.price,
      image: req.body.image,
      description: req.body.description,
      quantity: req.body.quantity,
      discount: req.body.discount,
    });
    const createdProduct = await product.save();
    res.send({
      _id: createdProduct._id,
      name: createdProduct.name,
      price: createdProduct.price,
      image: createdProduct.image,
      description: createdProduct.description,
      quantity: createdProduct.quantity,
      discount: createdProduct.discount,
    });
  })
);
productRouter.delete(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      const deleteProduct = await product.remove();
      res.send({ message: "Order Deleted", order: deleteProduct });
    } else {
      res.status(404).send({ message: "Order Not Found" });
    }
  })
);

export default productRouter;
