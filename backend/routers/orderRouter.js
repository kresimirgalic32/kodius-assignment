import express from "express";
import expressAsyncHandler from "express-async-handler";
import Order from "../models/orderModel.js";

// import { isAuth } from "../utils.js";

const orderRouter = express.Router();
orderRouter.get(
  "/mine",
  // isAuth,
  expressAsyncHandler(async (req, res) => {
    const orders = await Order.find();
    res.send(orders);
  })
);
orderRouter.post(
  "/",
  // isAuth,
  expressAsyncHandler(async (req, res) => {
    if (req.body.orderItems.length === 0) {
      res.status(400).send({ message: "Cart is empty" });
    } else {
      let order = new Order({
        orderItems: req.body.orderItems,
        shippingAddress: req.body.shippingAddress,
        paymentMethod: req.body.paymentMethod,
        user: req.body.userId,
        totalPrice: req.body.totalPrice,
      });

      const createdOrder = await order.save();
      res
        .status(201)
        .send({ message: "New Order Created", order: createdOrder });
    }
  })
);
orderRouter.get(
  "/:id",
  // isAuth,
  expressAsyncHandler(async (req, res) => {
    const order = await order.findById(req.params.id);
    if (order) {
      res.send(order);
    } else {
      res.status(404).send({ message: "Order Not Found" });
    }
  })
);

export default orderRouter;
