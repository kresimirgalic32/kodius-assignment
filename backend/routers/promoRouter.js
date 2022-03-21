import express from "express";
import expressAsyncHandler from "express-async-handler";
import data from "../data.js";
import Promo from "../models/promoModel.js";

const promoRouter = express.Router();

promoRouter.get(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    // await Promo.remove({});

    const createdPromo = await Promo.insertMany(data.promo);
    res.send({ createdPromo });
  })
);

promoRouter.post(
  "/promo",
  expressAsyncHandler(async (req, res) => {
    // await Promo.remove({});
    const promo = await Promo.findOne({ name: req.body.name });
    if (promo)
      res.send({
        id: promo._id,
        name: promo.name,
        conjuction: promo.conjuction,
      });
    return;
  })
);
promoRouter.post(
  "/promosetup",
  expressAsyncHandler(async (req, res) => {
    const promo = new Promo({
      name: req.body.name,
      conjuction: req.body.conjuction,
    });
    const createdPromo = await promo.save();
    res.send({
      id: createdPromo._id,
      name: createdPromo.name,
      conjuction: createdPromo.conjuction,
    });
  })
);

export default promoRouter;
